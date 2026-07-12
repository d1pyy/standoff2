import asyncio
import logging
import random
import string
from dataclasses import dataclass, field
from typing import Optional

import aiohttp

from aiogram import Bot, Dispatcher, F, Router
from aiogram.filters import CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.types import (
    CallbackQuery,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    Message,
)

BOT_TOKEN = "8842650795:AAGdZJJ1jp99I9NrwzZ7lp6Uw_OXuJIa9xU"
ADMIN_USERNAME = "d1pyy"

CRYPTO_PAY_API_TOKEN = "608602:AANFh3uLXQpM5B4JqPSXz0qdbGh9LgifVDc"
CRYPTO_PAY_API_URL = "https://pay.crypt.bot/api"
CRYPTO_PAY_ASSET = "USDT"

PLANS = {
    "plan_7d": {"title": "Hellstar 7d", "price": "2.9$"},
    "plan_14d": {"title": "Hellstar 14d", "price": "4.9$"},
    "plan_30d": {"title": "Hellstar 30d", "price": "9.9$"},
}


@dataclass
class UserData:
    language: Optional[str] = None
    subscription: Optional[str] = None
    used_promocodes: set = field(default_factory=set)


@dataclass
class PromoCode:
    code: str
    plan_id: str
    activations_left: int


users: dict[int, UserData] = {}
promocodes: dict[str, PromoCode] = {}
pending_invoices: dict[str, dict] = {}


def get_user(user_id: int) -> UserData:
    if user_id not in users:
        users[user_id] = UserData()
    return users[user_id]


def is_admin(username: Optional[str]) -> bool:
    return username is not None and username.lower() == ADMIN_USERNAME.lower()


def generate_promocode() -> str:
    alphabet = string.ascii_letters + string.digits
    return "".join(random.choice(alphabet) for _ in range(12))


class PromoActivation(StatesGroup):
    waiting_for_code = State()


class PromoCreation(StatesGroup):
    choosing_plan = State()
    entering_activations = State()


def language_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(text="eu", callback_data="lang_eu"),
                InlineKeyboardButton(text="ru", callback_data="lang_ru"),
                InlineKeyboardButton(text="ua", callback_data="lang_ua"),
            ]
        ]
    )


def main_menu_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="каталог", callback_data="menu_catalog")],
            [InlineKeyboardButton(text="профиль", callback_data="menu_profile")],
        ]
    )


def catalog_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text=f"{PLANS['plan_7d']['title']} — {PLANS['plan_7d']['price']}",
                    callback_data="buy_plan_7d",
                )
            ],
            [
                InlineKeyboardButton(
                    text=f"{PLANS['plan_14d']['title']} — {PLANS['plan_14d']['price']}",
                    callback_data="buy_plan_14d",
                )
            ],
            [
                InlineKeyboardButton(
                    text=f"{PLANS['plan_30d']['title']} — {PLANS['plan_30d']['price']}",
                    callback_data="buy_plan_30d",
                )
            ],
            [InlineKeyboardButton(text="вернуться назад", callback_data="menu_main")],
        ]
    )


def invoice_keyboard(payment_url: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="оплатить", url=payment_url)],
            [InlineKeyboardButton(text="вернуться назад", callback_data="menu_catalog")],
        ]
    )


def profile_keyboard(user_id: int, username: Optional[str]) -> InlineKeyboardMarkup:
    keyboard = [
        [InlineKeyboardButton(text="активировать промокод", callback_data="profile_activate_promo")],
    ]
    if is_admin(username):
        keyboard.append(
            [InlineKeyboardButton(text="создать промокод", callback_data="admin_create_promo")]
        )
    keyboard.append([InlineKeyboardButton(text="вернуться назад", callback_data="menu_main")])
    return InlineKeyboardMarkup(inline_keyboard=keyboard)


def plan_choice_keyboard(prefix: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text=PLANS["plan_7d"]["title"], callback_data=f"{prefix}_plan_7d")],
            [InlineKeyboardButton(text=PLANS["plan_14d"]["title"], callback_data=f"{prefix}_plan_14d")],
            [InlineKeyboardButton(text=PLANS["plan_30d"]["title"], callback_data=f"{prefix}_plan_30d")],
            [InlineKeyboardButton(text="вернуться назад", callback_data="menu_profile")],
        ]
    )


def extract_price_amount(price: str) -> str:
    return price.replace("$", "").strip()


async def create_invoice(user_id: int, plan_id: str) -> Optional[dict]:
    plan = PLANS[plan_id]
    amount = extract_price_amount(plan["price"])
    headers = {"Crypto-Pay-API-Token": CRYPTO_PAY_API_TOKEN}
    payload = {
        "asset": CRYPTO_PAY_ASSET,
        "amount": amount,
        "description": plan["title"],
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(
            f"{CRYPTO_PAY_API_URL}/createInvoice", headers=headers, json=payload
        ) as response:
            data = await response.json()

    if not data.get("ok"):
        return None

    result = data["result"]
    invoice_id = str(result["invoice_id"])
    pending_invoices[invoice_id] = {
        "user_id": user_id,
        "plan_id": plan_id,
        "status": "pending",
    }
    return {
        "invoice_id": invoice_id,
        "pay_url": result["pay_url"],
    }


async def check_invoice_status(invoice_id: str) -> Optional[str]:
    headers = {"Crypto-Pay-API-Token": CRYPTO_PAY_API_TOKEN}
    params = {"invoice_ids": invoice_id}
    async with aiohttp.ClientSession() as session:
        async with session.get(
            f"{CRYPTO_PAY_API_URL}/getInvoices", headers=headers, params=params
        ) as response:
            data = await response.json()

    if not data.get("ok"):
        return None

    items = data["result"]["items"]
    if not items:
        return None

    return items[0]["status"]


async def grant_subscription(user_id: int, plan_id: str) -> None:
    user = get_user(user_id)
    user.subscription = PLANS[plan_id]["title"]


async def process_successful_payment(invoice_id: str) -> None:
    invoice = pending_invoices.get(invoice_id)
    if invoice is None or invoice["status"] == "paid":
        return
    invoice["status"] = "paid"
    await grant_subscription(invoice["user_id"], invoice["plan_id"])


async def poll_invoice_until_paid(invoice_id: str, bot: Bot) -> None:
    for _ in range(180):
        await asyncio.sleep(5)
        status = await check_invoice_status(invoice_id)
        if status == "paid":
            await process_successful_payment(invoice_id)
            invoice = pending_invoices.get(invoice_id)
            if invoice is not None:
                plan = PLANS[invoice["plan_id"]]
                await bot.send_message(
                    invoice["user_id"],
                    f"Оплата подтверждена. Вам выдана подписка {plan['title']}.",
                )
            return


router = Router()


@router.message(CommandStart())
async def cmd_start(message: Message) -> None:
    get_user(message.from_user.id)
    await message.answer("Select language", reply_markup=language_keyboard())


@router.callback_query(F.data.startswith("lang_"))
async def process_language(callback: CallbackQuery) -> None:
    language = callback.data.split("_")[1]
    user = get_user(callback.from_user.id)
    user.language = language
    await callback.message.edit_text(
        "здравствуйте, вас приветствует магазин hellstar",
        reply_markup=main_menu_keyboard(),
    )
    await callback.answer()


@router.callback_query(F.data == "menu_main")
async def process_menu_main(callback: CallbackQuery) -> None:
    await callback.message.edit_text(
        "здравствуйте, вас приветствует магазин hellstar",
        reply_markup=main_menu_keyboard(),
    )
    await callback.answer()


@router.callback_query(F.data == "menu_catalog")
async def process_menu_catalog(callback: CallbackQuery) -> None:
    await callback.message.edit_text("выберите тариф", reply_markup=catalog_keyboard())
    await callback.answer()


@router.callback_query(F.data.startswith("buy_plan_"))
async def process_buy_plan(callback: CallbackQuery, bot: Bot) -> None:
    plan_id = callback.data.removeprefix("buy_")
    invoice = await create_invoice(callback.from_user.id, plan_id)

    if invoice is None:
        await callback.answer("не удалось создать счет. попробуйте позже.", show_alert=True)
        return

    await callback.message.edit_text(
        "выберите тариф",
        reply_markup=invoice_keyboard(invoice["pay_url"]),
    )
    asyncio.create_task(poll_invoice_until_paid(invoice["invoice_id"], bot))
    await callback.answer()


@router.callback_query(F.data == "menu_profile")
async def process_menu_profile(callback: CallbackQuery, state: FSMContext) -> None:
    await state.clear()
    user = get_user(callback.from_user.id)
    username = callback.from_user.username
    username_display = f"@{username}" if username else "отсутствует"
    subscription_display = user.subscription if user.subscription else "отсутствует"
    text = (
        f"айди: {callback.from_user.id}\n"
        f"юзернейм: {username_display}\n"
        f"подписка: {subscription_display}"
    )
    await callback.message.edit_text(
        text,
        reply_markup=profile_keyboard(callback.from_user.id, username),
    )
    await callback.answer()


@router.callback_query(F.data == "profile_activate_promo")
async def process_activate_promo(callback: CallbackQuery, state: FSMContext) -> None:
    await state.set_state(PromoActivation.waiting_for_code)
    await callback.message.edit_text("введите промокод")
    await callback.answer()


@router.message(PromoActivation.waiting_for_code)
async def process_promo_input(message: Message, state: FSMContext) -> None:
    code = message.text.strip()
    user_id = message.from_user.id
    user = get_user(user_id)
    promo = promocodes.get(code)

    if promo is None or promo.activations_left <= 0:
        await message.answer("промокод не найден.")
        return

    if user_id in user.used_promocodes:
        await message.answer("промокод не найден.")
        return

    promo.activations_left -= 1
    user.used_promocodes.add(code)
    await grant_subscription(user_id, promo.plan_id)

    await state.clear()
    username = message.from_user.username
    subscription_display = user.subscription
    text = (
        f"айди: {user_id}\n"
        f"юзернейм: {'@' + username if username else 'отсутствует'}\n"
        f"подписка: {subscription_display}"
    )
    await message.answer(text, reply_markup=profile_keyboard(user_id, username))


@router.callback_query(F.data == "admin_create_promo")
async def process_admin_create_promo(callback: CallbackQuery, state: FSMContext) -> None:
    if not is_admin(callback.from_user.username):
        await callback.answer()
        return
    await state.set_state(PromoCreation.choosing_plan)
    await callback.message.edit_text(
        "выберите подписку",
        reply_markup=plan_choice_keyboard("create"),
    )
    await callback.answer()


@router.callback_query(PromoCreation.choosing_plan, F.data.startswith("create_plan_"))
async def process_promo_plan_choice(callback: CallbackQuery, state: FSMContext) -> None:
    plan_id = callback.data.removeprefix("create_")
    await state.update_data(plan_id=plan_id)
    await state.set_state(PromoCreation.entering_activations)
    await callback.message.edit_text("введите количество активаций")
    await callback.answer()


@router.message(PromoCreation.entering_activations)
async def process_promo_activations_input(message: Message, state: FSMContext) -> None:
    if not message.text.isdigit():
        await message.answer("введите количество активаций")
        return

    activations = int(message.text)
    data = await state.get_data()
    plan_id = data["plan_id"]

    code = generate_promocode()
    while code in promocodes:
        code = generate_promocode()

    promocodes[code] = PromoCode(code=code, plan_id=plan_id, activations_left=activations)

    await state.clear()
    text = (
        "промокод создан\n\n"
        f"код:\n{code}\n\n"
        "подписка:\n"
        f"{PLANS[plan_id]['title']}\n\n"
        "количество активаций:\n"
        f"{activations}"
    )
    await message.answer(text, reply_markup=profile_keyboard(message.from_user.id, message.from_user.username))


async def main() -> None:
    logging.basicConfig(level=logging.INFO)
    bot = Bot(token=BOT_TOKEN)
    dp = Dispatcher(storage=MemoryStorage())
    dp.include_router(router)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
