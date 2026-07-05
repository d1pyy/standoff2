const ICONS = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>',
  compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m14.5 9.5-2 5-5 2 2-5z"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14.2 3H9.8l-.4 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9c.6.5 1.3.9 2 1.2l.4 2.6h4.4l.4-2.6c.7-.3 1.4-.7 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-9.3-8.8C1 8 2.4 4.8 5.6 4a5 5 0 0 1 6.4 2.3A5 5 0 0 1 18.4 4c3.2.8 4.6 4 3 7.2C19 15.6 12 20 12 20Z"/></svg>',
  reply:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8 4 13l6 5"/><path d="M4 13h10a6 6 0 0 1 6 6v1"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M8 8h8l1 4H7z"/><path d="M12 12v10"/></svg>',
  bookmark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4Z"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18M5 4h11l-2 4 2 4H5"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s-5 5-5 10a5 5 0 0 0 10 0c0-2-1-3-1-3s0 2-2 2c-1.5 0-1-2-1-3 0-2 1-4 1-4s3 3 3 8a6 6 0 0 1-12 0c0-6 7-10 7-10Z"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 19c1-3.4 3.6-5.2 6.5-5.2s5.5 1.8 6.5 5.2"/><circle cx="17" cy="8.5" r="2.6"/><path d="M15.5 13.6c2.4.2 4.4 1.9 5.2 5.4"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  msg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 1 1-3.3-6.4L21 4l-1 4.3A8 8 0 0 1 21 12Z"/></svg>',
  bold:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M7 4h5.5a3.5 3.5 0 0 1 0 7H7zM7 11h6a3.6 3.6 0 0 1 0 7.2H7z"/></svg>',
  italic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4h6M7 20h6M14 4 10 20"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15 15 9"/><path d="M11 6.5 12.6 5A4 4 0 1 1 18.3 10.7L16.5 12.5"/><path d="M13 17.5 11.4 19A4 4 0 1 1 5.7 13.3L7.5 11.5"/></svg>',
  code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
  list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
  img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 16-5-5-9 9"/></svg>',
};
function ic(name, cls){ return ICONS[name] ? ICONS[name].replace('<svg ', `<svg class="${cls||''}" `) : ''; }

const STATE = {
  theme: 'dark',
  route: { view:'home' },
  currentUser: null,
  authTab:'login',
  online: 1247,
  toastId: 0,
  settings:{ email:true, push:true, mentions:true, digest:false, showOnline:true, showActivity:true, twoFactor:false },
  categoryFilter:'all',
  topicFilter:'latest',
  topicPage:1,
  profileTab:'topics',
  settingsTab:'account',
};

const USERS = {
  d1pyy:{ handle:'d1pyy', name:'d1pyy', role:'founder', roleLabel:'Основатель и главный администратор', joined:'12 марта 2021', bio:'Строю n3on с нуля. Здесь живёт сообщество, а не таблица в базе данных.', posts:2418, topics:312, rep:18420, online:true },
  nightwave:{ handle:'nightwave', name:'nightwave', role:'moderator', roleLabel:'Модератор раздела «Железо»', joined:'4 июня 2022', bio:'Собираю ПК, ломаю ПК, чиню ПК. Модерирую по вечерам.', posts:944, topics:87, rep:5210, online:true },
  ferrox:{ handle:'ferrox', name:'ferrox', role:'user', roleLabel:'Участник', joined:'19 января 2023', bio:'Люблю ретро-железо и спорные темы про оптимизацию.', posts:311, topics:22, rep:1180, online:false },
  luma:{ handle:'luma', name:'luma', role:'user', roleLabel:'Участник', joined:'2 сентября 2023', bio:'UI/UX дизайнер, захожу почитать про фронтенд и подраться в комментах.', posts:198, topics:14, rep:640, online:true },
  quorra:{ handle:'quorra', name:'quorra', role:'user', roleLabel:'Участник', joined:'30 ноября 2023', bio:'', posts:76, topics:5, rep:210, online:false },
};

const CATEGORIES = [
  { id:'general', name:'Общий раздел', desc:'Разговоры обо всём, что не влезло в другие категории.', icon:'💬', color:'neon', topics:842, posts:15230 },
  { id:'hardware', name:'Железо', desc:'Сборки, апгрейды, разгон и охлаждение.', icon:'🖥️', color:'violet', topics:611, posts:9820 },
  { id:'software', name:'Софт и разработка', desc:'Код, инструменты, баги и релизы.', icon:'⚙️', color:'success', topics:734, posts:12110 },
  { id:'gaming', name:'Игры', desc:'Обзоры, турниры, поиск команды.', icon:'🎮', color:'warn', topics:1204, posts:24310 },
  { id:'showcase', name:'Витрина проектов', desc:'Покажи, что собрал или написал.', icon:'✨', color:'neon', topics:298, posts:4110 },
  { id:'offtopic', name:'Оффтоп', desc:'Всё остальное — без границ и без токсичности.', icon:'🌀', color:'violet', topics:455, posts:7320 },
];

let TOPICS = [
  { id:1, cat:'hardware', title:'Собрал ПК на 4090 — итоги через полгода использования', author:'nightwave', pinned:true, hot:true, replies:214, views:8420, tags:['железо','обзор'], last:'8 минут назад' },
  { id:2, cat:'software', title:'Почему все резко перешли на Rust в 2026?', author:'ferrox', pinned:false, hot:true, replies:189, views:6210, tags:['rust','дискуссия'], last:'22 минуты назад' },
  { id:3, cat:'general', title:'Правила форума — читать перед первым постом', author:'d1pyy', pinned:true, hot:false, replies:12, views:41200, tags:['важное'], last:'вчера' },
  { id:4, cat:'gaming', title:'Ищу команду для рейтинговых игр, 4 вечера в неделю', author:'quorra', pinned:false, hot:false, replies:34, views:980, tags:['команда'], last:'1 час назад' },
  { id:5, cat:'showcase', title:'Написал свой рендерер частиц на WebGPU', author:'luma', pinned:false, hot:true, replies:97, views:3400, tags:['проект','webgpu'], last:'3 часа назад' },
  { id:6, cat:'hardware', title:'Стоит ли ждать следующее поколение процессоров?', author:'ferrox', pinned:false, hot:false, replies:56, views:1900, tags:['процессоры'], last:'5 часов назад' },
  { id:7, cat:'offtopic', title:'Что слушаете во время работы?', author:'quorra', pinned:false, hot:false, replies:311, views:12400, tags:['музыка'], last:'6 часов назад' },
  { id:8, cat:'software', title:'Мигрировали с REST на GraphQL — стоило ли оно того', author:'nightwave', pinned:false, hot:false, replies:78, views:2600, tags:['api','опыт'], last:'вчера' },
  { id:9, cat:'gaming', title:'Патч 2.3 полностью сломал баланс — обсуждение', author:'ferrox', pinned:false, hot:true, replies:402, views:15800, tags:['патч'], last:'2 часа назад' },
  { id:10, cat:'general', title:'Как вы относитесь к ИИ-инструментам в повседневной работе?', author:'luma', pinned:false, hot:false, replies:143, views:5100, tags:['ии','дискуссия'], last:'9 часов назад' },
  { id:11, cat:'showcase', title:'Собрал механическую клавиатуру с нуля — фото и лог', author:'quorra', pinned:false, hot:false, replies:61, views:2200, tags:['diy'], last:'вчера' },
  { id:12, cat:'hardware', title:'Термопаста: миф о разнице в 2 градуса', author:'nightwave', pinned:false, hot:false, replies:88, views:3100, tags:['охлаждение'], last:'2 дня назад' },
];

const POSTS_BY_TOPIC = {
  1:[
    { author:'nightwave', time:'6 мес назад', text:'Взял 4090 в чёрную пятницу, ставил на пресет с водянкой 360мм. За полгода — ноль проблем, троттлинга не видел даже на макс. нагрузке в 4K.' },
    { author:'ferrox', time:'6 мес назад', text:'А по звуку как? У меня опасение именно на VRM-зону, слышал что референсные платы шумят под нагрузкой.' },
    { author:'nightwave', time:'6 мес назад', text:'VRM держит нормально, свои 65-70 градусов, вентиляторы на кастом-кривой почти не слышны. Основной шум — это уже насос помпы, если совсем тихий корпус нужен.' },
    { author:'d1pyy', time:'5 мес назад', text:'Закрепил тему как полезную — хороший разбор для тех, кто планирует апгрейд в этом году.' },
  ],
  2:[
    { author:'ferrox', time:'3 дня назад', text:'Второй месяц наблюдаю, как половина бэкенд-команд у знакомых мигрирует на Rust. Что изменилось именно в 2026?' },
    { author:'luma', time:'3 дня назад', text:'Инструментарий стал сильно дружелюбнее, плюс экосистема async наконец устоялась. Раньше порог входа реально пугал.' },
    { author:'nightwave', time:'2 дня назад', text:'Плюс перформанс на тех же серверах ощутимо ниже по памяти — для инфраструктуры это прямая экономия.' },
  ],
  3:[
    { author:'d1pyy', time:'2 года назад', text:'Добро пожаловать на n3on. Здесь мы говорим по делу, уважаем чужое время и не переходим на личности. Нарушения ведут к предупреждениям, а не сразу к бану — но повторные нарушения не прощаются.' },
  ],
};

const NOTIFICATIONS = [
  { icon:'heart', text:'nightwave оценил ваш ответ в теме «Собрал ПК на 4090»', time:'12 минут назад', unread:true },
  { icon:'reply', text:'luma ответил в теме «Как вы относитесь к ИИ-инструментам»', time:'1 час назад', unread:true },
  { icon:'shield', text:'Модератор закрепил вашу тему в разделе «Витрина проектов»', time:'3 часа назад', unread:true },
  { icon:'user', text:'quorra подписался на ваш профиль', time:'вчера', unread:false },
  { icon:'msg', text:'Новое личное сообщение от ferrox', time:'2 дня назад', unread:false },
  { icon:'bell', text:'Еженедельный дайджест раздела «Железо» готов', time:'3 дня назад', unread:false },
];

function toast(type, msg){
  const stack = document.getElementById('toastStack');
  const id = 'toast-'+(STATE.toastId++);
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.id = id;
  const iconName = type==='success'?'check':type==='error'?'alert':'bell';
  el.innerHTML = `<div class="toast-icon">${ic(iconName)}</div><div class="toast-msg">${msg}</div><button class="toast-close" onclick="closeToast('${id}')">&times;</button>`;
  stack.appendChild(el);
  setTimeout(()=>closeToast(id), 4200);
}
function closeToast(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.transition='all .25s ease'; el.style.opacity='0'; el.style.transform='translateX(30px)';
  setTimeout(()=>el.remove(), 250);
}

function openModal(title, text, actionsHtml){
  document.getElementById('modalBox').innerHTML = `
    <div class="modal-title">${title}</div>
    <div class="modal-text">${text}</div>
    <div class="modal-actions">${actionsHtml}</div>`;
  document.getElementById('overlay').classList.add('show');
}
function closeModal(){ document.getElementById('overlay').classList.remove('show'); }

function confirmModal(title, text, onConfirm){
  openModal(title, text, `
    <button class="btn btn-ghost" onclick="closeModal()">Отмена</button>
    <button class="btn btn-danger-ghost" id="confirmBtn">Подтвердить</button>`);
  document.getElementById('confirmBtn').onclick = ()=>{ closeModal(); onConfirm(); };
}

let ctxTarget = null;
function openCtxMenu(e, itemsHtml){
  e.preventDefault(); e.stopPropagation();
  const menu = document.getElementById('ctxMenu');
  menu.innerHTML = itemsHtml;
  const x = Math.min(e.clientX, window.innerWidth-200);
  const y = Math.min(e.clientY, window.innerHeight-260);
  menu.style.left = x+'px'; menu.style.top = y+'px';
  menu.classList.add('show');
}
function closeCtxMenu(){ document.getElementById('ctxMenu').classList.remove('show'); }
document.addEventListener('click', closeCtxMenu);
document.getElementById('overlay').addEventListener('click', (e)=>{ if(e.target.id==='overlay') closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeModal(); closeCtxMenu(); } });

function initials(name){ return name.slice(0,2).toUpperCase(); }
function avatarColor(seed){
  const colors=['linear-gradient(135deg,#00D4FF,#6C5CE7)','linear-gradient(135deg,#34E4B0,#00D4FF)','linear-gradient(135deg,#FFC168,#FF4D6D)','linear-gradient(135deg,#6C5CE7,#FF4D6D)'];
  let h=0; for(const c of seed) h+=c.charCodeAt(0);
  return colors[h%colors.length];
}
function avatarHtml(handle, size){
  const cls = size==='sm'?'avatar avatar-sm':size==='lg'?'avatar avatar-lg':'avatar';
  const u = USERS[handle];
  return `<div class="${cls}" style="background:${avatarColor(handle)}">${initials(handle)}${u&&u.online&&size!=='lg'?'<span style="position:absolute;bottom:-1px;right:-1px;width:9px;height:9px;border-radius:50%;background:var(--success);border:2px solid var(--bg-alt);"></span>':''}</div>`;
}
function roleBadge(role){
  if(role==='founder') return `<span class="role-badge role-founder">ОСНОВАТЕЛЬ</span>`;
  if(role==='moderator') return `<span class="role-badge role-mod">МОДЕРАТОР</span>`;
  return `<span class="role-badge role-user">УЧАСТНИК</span>`;
}

function navigate(view, params){
  STATE.route = Object.assign({ view }, params||{});
  render();
  window.scrollTo(0,0);
}

function renderSidebar(){
  const v = STATE.route.view;
  document.getElementById('sidebar').innerHTML = `
    <div class="brand">
      <div class="brand-mark">n3</div>
      <div class="brand-name">n3<span>on</span></div>
    </div>
    <div class="pulse-bar">
      <span class="pulse-dot"></span>
      <span><b>${STATE.online.toLocaleString('ru-RU')}</b> в сети сейчас · <b>34</b> новых темы за час</span>
    </div>
    <div class="nav-section-label">Навигация</div>
    <button class="nav-item ${v==='home'?'active':''}" onclick="navigate('home')">${ic('home')}Главная</button>
    <button class="nav-item ${v==='discover'?'active':''}" onclick="navigate('discover')">${ic('compass')}Обзор тем</button>
    <button class="nav-item ${v==='notifications'?'active':''}" onclick="navigate('notifications')">${ic('bell')}Уведомления<span class="nav-badge">3</span></button>
    <div class="nav-section-label">Категории</div>
    ${CATEGORIES.map(c=>`<button class="nav-item ${v==='category'&&STATE.route.id===c.id?'active':''}" onclick="navigate('category',{id:'${c.id}'})"><span style="width:18px;text-align:center;">${c.icon}</span>${c.name}</button>`).join('')}
    <div class="nav-section-label">Аккаунт</div>
    <button class="nav-item ${v==='profile'&&STATE.route.handle===(STATE.currentUser&&STATE.currentUser.handle)?'active':''}" onclick="navigate('profile',{handle:STATE.currentUser?STATE.currentUser.handle:'d1pyy'})">${ic('user')}Мой профиль</button>
    <button class="nav-item ${v==='settings'?'active':''}" onclick="navigate('settings')">${ic('gear')}Настройки</button>
    ${STATE.currentUser && (STATE.currentUser.role==='founder'||STATE.currentUser.role==='moderator') ? `<button class="nav-item ${v==='admin'?'active':''}" onclick="navigate('admin')">${ic('shield')}Панель управления</button>` : ''}
    <div class="sidebar-footer">
      ${STATE.currentUser ? `
      <div style="display:flex; align-items:center; gap:6px;">
      <div class="mini-profile" style="cursor:pointer; flex:1; min-width:0;" onclick="navigate('profile',{handle:STATE.currentUser.handle})">
        ${avatarHtml(STATE.currentUser.handle)}
        <div style="min-width:0;">
          <div class="mini-profile-name">${STATE.currentUser.name}</div>
          <div class="mini-profile-role">${STATE.currentUser.role==='founder'?'Основатель':STATE.currentUser.role==='moderator'?'Модератор':'Участник'}</div>
        </div>
      </div>
      <button class="icon-btn" title="Выйти" onclick="logout()">${ic('logout')}</button>
      </div>` : `
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="navigate('auth')">Войти</button>`}
    </div>`;
}

function renderTopbar(){
  document.getElementById('topbar').innerHTML = `
    <div class="search-wrap">
      ${ic('search')}
      <input class="search-input" id="globalSearch" placeholder="Искать темы, пользователей, категории..." onkeydown="if(event.key==='Enter') doSearch(this.value)">
    </div>
    <div class="topbar-actions">
      <button class="icon-btn" title="Тема оформления" onclick="toggleTheme()">${ic(STATE.theme==='dark'?'moon':'sun')}</button>
      <button class="icon-btn" title="Уведомления" onclick="navigate('notifications')">${ic('bell')}<span class="dot-alert"></span></button>
      ${STATE.currentUser ? `<button class="btn btn-primary btn-sm" onclick="openComposeModal()">Новая тема</button>` : `<button class="btn btn-primary btn-sm" onclick="navigate('auth')">Войти</button>`}
    </div>`;
}

function doSearch(q){
  if(!q || !q.trim()){ toast('info','Введите запрос для поиска'); return; }
  navigate('discover',{ q:q.trim() });
}

function toggleTheme(){
  STATE.theme = STATE.theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme', STATE.theme);
  render();
  toast('info', `Включена ${STATE.theme==='dark'?'тёмная':'светлая'} тема`);
}

function renderFooter(){
  document.getElementById('footer').innerHTML = `
    <div>© 2026 n3on. Сообщество, построенное на разговоре.</div>
    <div class="footer-links">
      <a href="#" onclick="event.preventDefault();openLegalModal('Политика конфиденциальности','Мы собираем минимум данных, необходимых для работы форума: логин, email и историю активности внутри платформы. Данные не передаются третьим лицам в рекламных целях.')">Политика конфиденциальности</a>
      <a href="#" onclick="event.preventDefault();openLegalModal('Условия использования','Используя n3on, вы соглашаетесь вести себя уважительно, не размещать запрещённый контент и не нарушать права других участников.')">Условия использования</a>
      <a href="#" onclick="event.preventDefault();openLegalModal('Правила форума','1. Уважайте собеседников. 2. Никакого спама и рекламы без разрешения. 3. Публикуйте темы в подходящих категориях.')">Правила форума</a>
      <a href="#" onclick="event.preventDefault();openLegalModal('Политика использования cookie','n3on использует локальные данные сессии для авторизации и сохранения настроек оформления. Мы не используем cookie для стороннего трекинга.')">Cookie</a>
      <a href="#" onclick="event.preventDefault();openLegalModal('Правила сообщества','Мы строим пространство, где можно спорить о технологиях без перехода на личности. Будьте конкретны и помогайте новичкам.')">Правила сообщества</a>
    </div>`;
}
function openLegalModal(title, text){
  openModal(title, text, `<button class="btn btn-primary" onclick="closeModal()">Понятно</button>`);
}

function openComposeModal(){
  document.getElementById('modalBox').innerHTML = `
    <div class="modal-title">Новая тема</div>
    <div class="form-group">
      <label class="form-label">Категория</label>
      <select class="form-input" id="composeCat">${CATEGORIES.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select>
    </div>
    <div class="form-group" id="composeTitleGroup">
      <label class="form-label">Заголовок темы</label>
      <input class="form-input" id="composeTitle" placeholder="О чём хотите поговорить?">
      <div class="form-error">Заголовок должен быть не короче 8 символов</div>
    </div>
    <div class="form-group">
      <label class="form-label">Текст сообщения</label>
      <div class="editor-area" contenteditable="true" data-placeholder="Опишите тему подробнее..." id="composeBody" style="min-height:90px;"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Отмена</button>
      <button class="btn btn-primary" onclick="submitCompose()">Опубликовать</button>
    </div>`;
  document.getElementById('overlay').classList.add('show');
}
function submitCompose(){
  const title = document.getElementById('composeTitle').value.trim();
  const group = document.getElementById('composeTitleGroup');
  if(title.length < 8){ group.classList.add('invalid'); return; }
  group.classList.remove('invalid');
  const cat = document.getElementById('composeCat').value;
  const id = Math.max(...TOPICS.map(t=>t.id))+1;
  TOPICS.unshift({ id, cat, title, author: STATE.currentUser.handle, pinned:false, hot:false, replies:0, views:1, tags:['новое'], last:'только что' });
  POSTS_BY_TOPIC[id] = [{ author:STATE.currentUser.handle, time:'только что', text: document.getElementById('composeBody').innerText || 'Без описания.' }];
  closeModal();
  toast('success','Тема опубликована');
  navigate('topic',{ id });
}

function timeAgoRandom(){ const opts=['5 минут назад','1 час назад','вчера','2 дня назад','на прошлой неделе']; return opts[Math.floor(Math.random()*opts.length)]; }

function topicRowHtml(t){
  const cat = CATEGORIES.find(c=>c.id===t.cat);
  return `
  <div class="card topic-row" onclick="navigate('topic',{id:${t.id}})" oncontextmenu="topicCtx(event, ${t.id})">
    ${avatarHtml(t.author)}
    <div class="topic-main">
      <div class="topic-title-line">
        ${t.pinned?`<span class="tag pinned">${ic('pin')} закреплено</span>`:''}
        ${t.hot?`<span class="tag hot">${ic('fire')} горячее</span>`:''}
        <span class="topic-title">${t.title}</span>
      </div>
      <div class="topic-meta"><b>${t.author}</b> · ${cat?cat.name:''} · ${t.last}</div>
    </div>
    <div class="topic-stats">
      <div><span>${t.replies}</span>ответов</div>
      <div><span>${t.views>999?(t.views/1000).toFixed(1)+'k':t.views}</span>просмотров</div>
    </div>
    <button class="more-btn" onclick="event.stopPropagation(); topicCtx(event, ${t.id})">${ic('dots')}</button>
  </div>`;
}
function topicCtx(e, id){
  ctxTarget = id;
  openCtxMenu(e, `
    <button class="ctx-item" onclick="closeCtxMenu(); toast('success','Тема добавлена в закладки')">${ic('bookmark')} В закладки</button>
    <button class="ctx-item" onclick="closeCtxMenu(); toast('info','Ссылка на тему скопирована')">${ic('link')} Скопировать ссылку</button>
    <button class="ctx-item" onclick="closeCtxMenu(); toast('info','Жалоба отправлена модераторам')">${ic('flag')} Пожаловаться</button>
    ${STATE.currentUser && (STATE.currentUser.role==='founder'||STATE.currentUser.role==='moderator') ? `
    <div class="ctx-divider"></div>
    <button class="ctx-item" onclick="closeCtxMenu(); pinTopic(${id})">${ic('pin')} Закрепить / открепить</button>
    <button class="ctx-item danger" onclick="closeCtxMenu(); deleteTopic(${id})">${ic('trash')} Удалить тему</button>` : ''}
  `);
}
function pinTopic(id){
  const t = TOPICS.find(x=>x.id===id); if(!t) return;
  t.pinned = !t.pinned;
  toast('success', t.pinned ? 'Тема закреплена' : 'Тема откреплена');
  render();
}
function deleteTopic(id){
  confirmModal('Удалить тему?', 'Это действие нельзя отменить. Все ответы в теме также будут удалены.', ()=>{
    TOPICS = TOPICS.filter(x=>x.id!==id);
    toast('success','Тема удалена');
    navigate('discover');
  });
}

function renderHome(){
  const totalTopics = TOPICS.length + 8200;
  const totalPosts = 72900;
  const hot = TOPICS.filter(t=>t.hot).slice(0,4);
  return `
  <div class="view">
    <div class="page-head">
      <div>
        <div class="page-title">С возвращением${STATE.currentUser?', '+STATE.currentUser.name:''}</div>
        <div class="page-sub">Вот что происходит на n3on прямо сейчас</div>
      </div>
      ${STATE.currentUser ? `<button class="btn btn-primary" onclick="openComposeModal()">${ic('edit')} Создать тему</button>` : ''}
    </div>
    <div class="stats-row">
      <div class="card stat-card"><div class="stat-num">${STATE.online.toLocaleString('ru-RU')}</div><div class="stat-label">Онлайн сейчас</div></div>
      <div class="card stat-card"><div class="stat-num">${totalTopics.toLocaleString('ru-RU')}</div><div class="stat-label">Всего тем</div></div>
      <div class="card stat-card"><div class="stat-num">${totalPosts.toLocaleString('ru-RU')}</div><div class="stat-label">Всего сообщений</div></div>
      <div class="card stat-card"><div class="stat-num">5 210</div><div class="stat-label">Участников</div></div>
    </div>
    <div class="page-head" style="margin-bottom:14px;"><div class="page-title" style="font-size:19px;">Категории</div></div>
    <div class="cat-grid" style="margin-bottom:30px;">
      ${CATEGORIES.map(c=>`
      <div class="card cat-card" onclick="navigate('category',{id:'${c.id}'})">
        <div class="cat-icon" style="background:rgba(0,212,255,0.1);">${c.icon}</div>
        <div class="cat-title">${c.name}</div>
        <div class="cat-desc">${c.desc}</div>
        <div class="cat-meta"><span><b>${c.topics}</b> тем</span><span><b>${c.posts.toLocaleString('ru-RU')}</b> сообщений</span></div>
      </div>`).join('')}
    </div>
    <div class="page-head" style="margin-bottom:14px;"><div class="page-title" style="font-size:19px;">${ic('fire')} Сейчас обсуждают</div></div>
    <div class="topic-list">${hot.map(topicRowHtml).join('')}</div>
  </div>`;
}

function renderDiscover(){
  const q = STATE.route.q;
  let list = TOPICS.slice();
  if(q) list = list.filter(t=>t.title.toLowerCase().includes(q.toLowerCase()));
  if(STATE.topicFilter==='hot') list = list.filter(t=>t.hot);
  if(STATE.topicFilter==='pinned') list = list.filter(t=>t.pinned);
  list.sort((a,b)=> (b.pinned - a.pinned));
  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(list.length/perPage));
  const page = Math.min(STATE.topicPage, totalPages);
  const shown = list.slice((page-1)*perPage, page*perPage);
  return `
  <div class="view">
    <div class="page-head">
      <div>
        <div class="page-title">Обзор тем</div>
        <div class="page-sub">${q?`Результаты по запросу «${q}»`:'Все темы форума в одном месте'}</div>
      </div>
      ${STATE.currentUser?`<button class="btn btn-primary" onclick="openComposeModal()">${ic('edit')} Создать тему</button>`:''}
    </div>
    <div class="filters-bar">
      <button class="chip ${STATE.topicFilter==='latest'?'active':''}" onclick="setTopicFilter('latest')">Новые</button>
      <button class="chip ${STATE.topicFilter==='hot'?'active':''}" onclick="setTopicFilter('hot')">${ic('fire')} Горячее</button>
      <button class="chip ${STATE.topicFilter==='pinned'?'active':''}" onclick="setTopicFilter('pinned')">${ic('pin')} Закреплённые</button>
      <div class="spacer"></div>
      <select class="select-mini"><option>Сортировать: по активности</option><option>По дате создания</option><option>По числу ответов</option></select>
    </div>
    ${shown.length ? `<div class="topic-list">${shown.map(topicRowHtml).join('')}</div>` : `
    <div class="card empty-state">
      <div class="empty-icon">${ic('search')}</div>
      <div class="empty-title">Ничего не найдено</div>
      <div class="empty-text">Попробуйте изменить запрос или сбросить фильтры — возможно, тема ещё не создана.</div>
      <button class="btn btn-ghost" onclick="navigate('discover')">Сбросить фильтры</button>
    </div>`}
    ${shown.length ? `
    <div class="pagination">
      <button class="page-btn" onclick="changePage(${page-1})" ${page===1?'disabled':''}>‹</button>
      ${Array.from({length:totalPages},(_,i)=>i+1).map(p=>`<button class="page-btn ${p===page?'active':''}" onclick="changePage(${p})">${p}</button>`).join('')}
      <button class="page-btn" onclick="changePage(${page+1})" ${page===totalPages?'disabled':''}>›</button>
    </div>` : ''}
  </div>`;
}
function setTopicFilter(f){ STATE.topicFilter=f; STATE.topicPage=1; render(); }
function changePage(p){ STATE.topicPage=p; render(); window.scrollTo(0,0); }

function renderCategory(){
  const cat = CATEGORIES.find(c=>c.id===STATE.route.id);
  if(!cat) return `<div class="view card error-state"><div class="empty-icon error-icon">${ic('alert')}</div><div class="empty-title">Категория не найдена</div><div class="empty-text">Возможно, она была удалена или переименована.</div><button class="btn btn-ghost" onclick="navigate('home')">На главную</button></div>`;
  let list = TOPICS.filter(t=>t.cat===cat.id);
  if(STATE.topicFilter==='hot') list = list.filter(t=>t.hot);
  if(STATE.topicFilter==='pinned') list = list.filter(t=>t.pinned);
  list.sort((a,b)=> (b.pinned - a.pinned));
  return `
  <div class="view">
    <div class="breadcrumb"><a onclick="navigate('home')" style="cursor:pointer;">Главная</a> / ${cat.name}</div>
    <div class="page-head">
      <div>
        <div class="page-title">${cat.icon} ${cat.name}</div>
        <div class="page-sub">${cat.desc} · ${cat.topics} тем · ${cat.posts.toLocaleString('ru-RU')} сообщений</div>
      </div>
      ${STATE.currentUser?`<button class="btn btn-primary" onclick="openComposeModal()">${ic('edit')} Новая тема</button>`:''}
    </div>
    <div class="filters-bar">
      <button class="chip ${STATE.topicFilter==='latest'?'active':''}" onclick="setTopicFilter('latest')">Новые</button>
      <button class="chip ${STATE.topicFilter==='hot'?'active':''}" onclick="setTopicFilter('hot')">${ic('fire')} Горячее</button>
      <button class="chip ${STATE.topicFilter==='pinned'?'active':''}" onclick="setTopicFilter('pinned')">${ic('pin')} Закреплённые</button>
    </div>
    ${list.length ? `<div class="topic-list">${list.map(topicRowHtml).join('')}</div>` : `
    <div class="card empty-state">
      <div class="empty-icon">${cat.icon}</div>
      <div class="empty-title">В этой категории пока пусто</div>
      <div class="empty-text">Будьте первым, кто создаст тему в разделе «${cat.name}».</div>
      ${STATE.currentUser?`<button class="btn btn-primary" onclick="openComposeModal()">Создать тему</button>`:`<button class="btn btn-ghost" onclick="navigate('auth')">Войти, чтобы создать тему</button>`}
    </div>`}
  </div>`;
}

let likedPosts = {};
function renderTopic(){
  const t = TOPICS.find(x=>x.id===Number(STATE.route.id));
  if(!t) return `<div class="view card error-state"><div class="empty-icon error-icon">${ic('alert')}</div><div class="empty-title">Тема не найдена</div><div class="empty-text">Она могла быть удалена автором или модератором.</div><button class="btn btn-ghost" onclick="navigate('discover')">К списку тем</button></div>`;
  const cat = CATEGORIES.find(c=>c.id===t.cat);
  const posts = POSTS_BY_TOPIC[t.id] || [];
  return `
  <div class="view">
    <div class="breadcrumb"><a onclick="navigate('home')" style="cursor:pointer;">Главная</a> / <a onclick="navigate('category',{id:'${t.cat}'})" style="cursor:pointer;">${cat?cat.name:''}</a> / Тема</div>
    <div class="card topic-header">
      <div class="topic-title-line" style="margin-bottom:8px;">
        ${t.pinned?`<span class="tag pinned">${ic('pin')} закреплено</span>`:''}
        ${t.hot?`<span class="tag hot">${ic('fire')} горячее</span>`:''}
        ${t.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}
      </div>
      <h1>${t.title}</h1>
      <div class="topic-header-meta">
        <span><b>${t.author}</b></span><span>${t.replies} ответов</span><span>${t.views} просмотров</span><span>Последний ответ ${t.last}</span>
      </div>
    </div>
    <div id="postsWrap">
    ${posts.map((p,i)=>{
      const u = USERS[p.author] || { role:'user' };
      const likeKey = t.id+'-'+i;
      const liked = likedPosts[likeKey];
      return `
      <div class="card post">
        <div class="post-author">
          ${avatarHtml(p.author,'lg')}
          <div class="post-author-name">${p.author}</div>
          <div class="post-author-role">${u.role==='founder'?'Основатель':u.role==='moderator'?'Модератор':'Участник'}</div>
          ${roleBadge(u.role)}
        </div>
        <div class="post-body">
          <div class="post-toolbar">
            <span class="post-time">${p.time}</span>
            <button class="more-btn" onclick="postCtx(event)">${ic('dots')}</button>
          </div>
          <div class="post-text"><p>${p.text}</p></div>
          <div class="post-actions">
            <button class="react-btn ${liked?'liked':''}" onclick="toggleLike('${likeKey}')">${ic('heart')} <span>${liked?1:0}</span></button>
            <button class="react-btn" onclick="quoteReply('${p.author}')">${ic('reply')} Ответить</button>
          </div>
        </div>
      </div>`;
    }).join('')}
    </div>
    ${STATE.currentUser ? `
    <div class="card editor-card">
      <div class="editor-toolbar">
        <button class="editor-btn">${ic('bold')}</button>
        <button class="editor-btn">${ic('italic')}</button>
        <button class="editor-btn">${ic('link')}</button>
        <button class="editor-btn">${ic('code')}</button>
        <button class="editor-btn">${ic('list')}</button>
        <button class="editor-btn">${ic('img')}</button>
      </div>
      <div class="editor-area" contenteditable="true" id="replyArea" data-placeholder="Написать ответ..."></div>
      <div class="editor-footer">
        <button class="btn btn-ghost" onclick="document.getElementById('replyArea').innerText=''">Очистить</button>
        <button class="btn btn-primary" onclick="submitReply(${t.id})">Ответить</button>
      </div>
    </div>` : `
    <div class="card" style="padding:22px; text-align:center;">
      <span style="color:var(--muted); font-size:13.5px;">Войдите, чтобы участвовать в обсуждении</span>
      <div style="margin-top:12px;"><button class="btn btn-primary" onclick="navigate('auth')">Войти</button></div>
    </div>`}
  </div>`;
}
function toggleLike(key){ likedPosts[key] = !likedPosts[key]; render(); }
function quoteReply(author){
  const area = document.getElementById('replyArea');
  if(area){ area.innerText = `@${author}, `; area.focus(); }
  else toast('info','Войдите, чтобы ответить');
}
function postCtx(e){
  openCtxMenu(e, `
    <button class="ctx-item" onclick="closeCtxMenu(); toast('info','Ссылка на сообщение скопирована')">${ic('link')} Скопировать ссылку</button>
    <button class="ctx-item" onclick="closeCtxMenu(); toast('info','Жалоба отправлена')">${ic('flag')} Пожаловаться</button>
    ${STATE.currentUser && (STATE.currentUser.role==='founder'||STATE.currentUser.role==='moderator') ? `<div class="ctx-divider"></div><button class="ctx-item danger" onclick="closeCtxMenu(); toast('success','Сообщение скрыто')">${ic('trash')} Скрыть сообщение</button>` : ''}
  `);
}
function submitReply(topicId){
  const area = document.getElementById('replyArea');
  const text = area.innerText.trim();
  if(!text){ toast('error','Введите текст ответа'); return; }
  POSTS_BY_TOPIC[topicId].push({ author: STATE.currentUser.handle, time:'только что', text });
  const t = TOPICS.find(x=>x.id===topicId); t.replies++;
  area.innerText='';
  toast('success','Ответ опубликован');
  render();
}

function renderProfile(){
  const u = USERS[STATE.route.handle] || USERS['d1pyy'];
  const isSelf = STATE.currentUser && STATE.currentUser.handle===u.handle;
  const userTopics = TOPICS.filter(t=>t.author===u.handle);
  return `
  <div class="view">
    <div class="card profile-hero">
      ${avatarHtml(u.handle,'lg')}
      <div>
        <div class="profile-name-line">
          <div class="profile-name">${u.name}</div>
          ${roleBadge(u.role)}
        </div>
        <div class="profile-handle">@${u.handle} · с нами с ${u.joined}</div>
        ${u.bio?`<div class="profile-bio">${u.bio}</div>`:''}
        <div class="profile-stats">
          <div><span>${u.topics}</span><small>тем</small></div>
          <div><span>${u.posts}</span><small>сообщений</small></div>
          <div><span>${u.rep.toLocaleString('ru-RU')}</span><small>репутация</small></div>
        </div>
      </div>
      <div class="profile-actions">
        ${isSelf ? `<button class="btn btn-ghost" onclick="navigate('settings')">${ic('gear')} Редактировать</button>` : `<button class="btn btn-primary" onclick="toast('success','Вы подписались на '+'${u.name}')">Подписаться</button><button class="btn btn-ghost" onclick="toast('info','Открыт чат с '+'${u.name}')">${ic('msg')}</button>`}
      </div>
    </div>
    <div class="profile-tabs">
      <button class="profile-tab ${STATE.profileTab==='topics'?'active':''}" onclick="setProfileTab('topics')">Темы</button>
      <button class="profile-tab ${STATE.profileTab==='replies'?'active':''}" onclick="setProfileTab('replies')">Ответы</button>
      <button class="profile-tab ${STATE.profileTab==='about'?'active':''}" onclick="setProfileTab('about')">О пользователе</button>
    </div>
    ${STATE.profileTab==='topics' ? (userTopics.length ? `<div class="topic-list">${userTopics.map(topicRowHtml).join('')}</div>` : `
    <div class="card empty-state"><div class="empty-icon">${ic('edit')}</div><div class="empty-title">Пока нет тем</div><div class="empty-text">${u.name} ещё не создал ни одной темы.</div></div>`) : ''}
    ${STATE.profileTab==='replies' ? `<div class="card empty-state"><div class="empty-icon">${ic('reply')}</div><div class="empty-title">История ответов скрыта</div><div class="empty-text">В этой версии профиля показываются только созданные темы.</div></div>` : ''}
    ${STATE.profileTab==='about' ? `<div class="card" style="padding:24px;">
      <div class="settings-section-title">О пользователе</div>
      <div class="settings-section-sub">Публичная информация профиля</div>
      <div class="toggle-row"><div class="toggle-label">Роль</div><div style="color:var(--muted);">${u.roleLabel}</div></div>
      <div class="toggle-row"><div class="toggle-label">Дата регистрации</div><div style="color:var(--muted);">${u.joined}</div></div>
      <div class="toggle-row"><div class="toggle-label">Статус</div><div class="status-dot ${u.online?'online':'offline'}">${u.online?'В сети':'Не в сети'}</div></div>
    </div>` : ''}
  </div>`;
}
function setProfileTab(t){ STATE.profileTab=t; render(); }

function renderNotifications(){
  return `
  <div class="view">
    <div class="page-head">
      <div><div class="page-title">Уведомления</div><div class="page-sub">Последняя активность, касающаяся вас</div></div>
      <button class="btn btn-ghost" onclick="markAllRead()">${ic('check')} Отметить всё прочитанным</button>
    </div>
    <div>
    ${NOTIFICATIONS.map(n=>`
      <div class="card notif-item ${n.unread?'unread':''}">
        <div class="empty-icon" style="width:38px;height:38px;margin-bottom:0;">${ic(n.icon)}</div>
        <div>
          <div class="notif-text">${n.text}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}
function markAllRead(){
  NOTIFICATIONS.forEach(n=>n.unread=false);
  toast('success','Все уведомления отмечены прочитанными');
  render();
}

function renderSettings(){
  const tabs = [['account','Аккаунт'],['appearance','Оформление'],['notifications','Уведомления'],['privacy','Приватность']];
  let panel = '';
  if(STATE.settingsTab==='account'){
    const u = STATE.currentUser || USERS['d1pyy'];
    panel = `
    <div class="settings-section-title">Аккаунт</div>
    <div class="settings-section-sub">Основная информация профиля</div>
    <div class="form-group"><label class="form-label">Отображаемое имя</label><input class="form-input" value="${u.name}"></div>
    <div class="form-group"><label class="form-label">Имя пользователя</label><input class="form-input" value="${u.handle}"></div>
    <div class="form-group"><label class="form-label">О себе</label><input class="form-input" value="${u.bio||''}"></div>
    <button class="btn btn-primary" onclick="toast('success','Изменения сохранены')">Сохранить изменения</button>`;
  } else if(STATE.settingsTab==='appearance'){
    panel = `
    <div class="settings-section-title">Оформление</div>
    <div class="settings-section-sub">Настройте, как выглядит n3on для вас</div>
    <div class="theme-switch-row" style="margin-bottom:6px;">
      <button class="theme-opt ${STATE.theme==='dark'?'active':''}" onclick="setTheme('dark')">${ic('moon')} Тёмная</button>
      <button class="theme-opt ${STATE.theme==='light'?'active':''}" onclick="setTheme('light')">${ic('sun')} Светлая</button>
    </div>`;
  } else if(STATE.settingsTab==='notifications'){
    const rows = [['email','Email-уведомления','Получать письма о важной активности'],['push','Push-уведомления','Мгновенные уведомления в браузере'],['mentions','Упоминания','Уведомлять, когда вас упоминают через @'],['digest','Еженедельный дайджест','Сводка лучших тем раз в неделю']];
    panel = `
    <div class="settings-section-title">Уведомления</div>
    <div class="settings-section-sub">Управляйте тем, о чём вам сообщает n3on</div>
    ${rows.map(([key,label,desc])=>`
    <div class="toggle-row">
      <div><div class="toggle-label">${label}</div><div class="toggle-desc">${desc}</div></div>
      <div class="switch ${STATE.settings[key]?'on':''}" onclick="toggleSetting('${key}')"></div>
    </div>`).join('')}`;
  } else if(STATE.settingsTab==='privacy'){
    const rows = [['showOnline','Показывать статус «в сети»','Другие участники видят, когда вы онлайн'],['showActivity','Публичная активность','Показывать ваши темы и ответы в профиле'],['twoFactor','Двухфакторная аутентификация','Дополнительный код при входе в аккаунт']];
    panel = `
    <div class="settings-section-title">Приватность и безопасность</div>
    <div class="settings-section-sub">Контролируйте видимость данных и защиту аккаунта</div>
    ${rows.map(([key,label,desc])=>`
    <div class="toggle-row">
      <div><div class="toggle-label">${label}</div><div class="toggle-desc">${desc}</div></div>
      <div class="switch ${STATE.settings[key]?'on':''}" onclick="toggleSetting('${key}')"></div>
    </div>`).join('')}
    <div style="margin-top:20px;"><button class="btn btn-danger-ghost" onclick="confirmModal('Удалить аккаунт?','Все ваши темы, сообщения и профиль будут удалены безвозвратно.', ()=>toast('success','Запрос на удаление отправлен'))">${ic('trash')} Удалить аккаунт</button></div>`;
  }
  return `
  <div class="view">
    <div class="page-head"><div><div class="page-title">Настройки</div><div class="page-sub">Управляйте профилем и предпочтениями</div></div></div>
    <div class="settings-layout">
      <div class="settings-tabs">${tabs.map(([k,l])=>`<button class="settings-tab ${STATE.settingsTab===k?'active':''}" onclick="setSettingsTab('${k}')">${l}</button>`).join('')}</div>
      <div class="card settings-panel">${panel}</div>
    </div>
  </div>`;
}
function setSettingsTab(t){ STATE.settingsTab=t; render(); }
function toggleSetting(key){ STATE.settings[key]=!STATE.settings[key]; render(); toast('success','Настройки обновлены'); }
function setTheme(t){ STATE.theme=t; document.documentElement.setAttribute('data-theme',t); render(); }

function renderAdmin(){
  if(!STATE.currentUser || (STATE.currentUser.role!=='founder' && STATE.currentUser.role!=='moderator')){
    return `<div class="view card error-state"><div class="empty-icon error-icon">${ic('shield')}</div><div class="empty-title">Доступ ограничен</div><div class="empty-text">Эта панель доступна только модераторам и администрации.</div><button class="btn btn-ghost" onclick="navigate('home')">На главную</button></div>`;
  }
  const users = Object.values(USERS);
  return `
  <div class="view">
    <div class="page-head"><div><div class="page-title">${ic('shield')} Панель управления</div><div class="page-sub">Модерация сообщества n3on</div></div></div>
    <div class="admin-grid">
      <div class="card stat-card"><div class="stat-num">5 210</div><div class="stat-label">Всего участников</div></div>
      <div class="card stat-card"><div class="stat-num">7</div><div class="stat-label">Открытых жалоб</div></div>
      <div class="card stat-card"><div class="stat-num">3</div><div class="stat-label">Тем на модерации</div></div>
    </div>
    <div class="card table-wrap">
      <table>
        <thead><tr><th>Пользователь</th><th>Роль</th><th>Статус</th><th>Сообщений</th><th>Действия</th></tr></thead>
        <tbody>
        ${users.map(u=>`
          <tr>
            <td style="display:flex;align-items:center;gap:10px;">${avatarHtml(u.handle,'sm')} ${u.name}</td>
            <td>${roleBadge(u.role)}</td>
            <td><span class="status-dot ${u.online?'online':'offline'}">${u.online?'В сети':'Не в сети'}</span></td>
            <td>${u.posts}</td>
            <td>
              <button class="btn btn-ghost btn-sm" onclick="toast('info','Открыт профиль ${u.name}'); navigate('profile',{handle:'${u.handle}'})">Профиль</button>
              ${u.role!=='founder' ? `<button class="btn btn-danger-ghost btn-sm" onclick="confirmModal('Заблокировать ${u.name}?','Пользователь потеряет доступ к форуму до разблокировки.', ()=>toast('success','${u.name} заблокирован'))">Блокировать</button>` : ''}
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderAuth(){
  return `
  <div class="view auth-shell">
    <div class="card auth-card">
      <div class="brand" style="padding:0 0 22px; justify-content:center;">
        <div class="brand-mark">n3</div>
        <div class="brand-name">n3<span>on</span></div>
      </div>
      <div class="auth-tabs">
        <button class="auth-tab ${STATE.authTab==='login'?'active':''}" onclick="setAuthTab('login')">Вход</button>
        <button class="auth-tab ${STATE.authTab==='register'?'active':''}" onclick="setAuthTab('register')">Регистрация</button>
      </div>
      ${STATE.authTab==='login' ? `
      <div class="form-group"><label class="form-label">Имя пользователя</label><input class="form-input" id="loginUser" placeholder="d1pyy" value="d1pyy"></div>
      <div class="form-group"><label class="form-label">Пароль</label><input type="password" class="form-input" id="loginPass" placeholder="••••••••" value="demo1234"></div>
      <div class="checkbox-row"><input type="checkbox" id="rememberMe" checked><label for="rememberMe">Запомнить меня</label></div>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="doLogin()">Войти</button>
      <div class="form-hint" style="text-align:center; margin-top:14px;">Демо: попробуйте d1pyy, nightwave, ferrox, luma или quorra</div>` : `
      <div class="form-group"><label class="form-label">Имя пользователя</label><input class="form-input" id="regUser" placeholder="придумайте ник"></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="regEmail" placeholder="you@example.com"></div>
      <div class="form-group"><label class="form-label">Пароль</label><input type="password" class="form-input" id="regPass" placeholder="минимум 8 символов"></div>
      <div class="checkbox-row"><input type="checkbox" id="agreeTerms"><label for="agreeTerms">Принимаю условия использования и правила форума</label></div>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="doRegister()">Создать аккаунт</button>`}
    </div>
  </div>`;
}
function setAuthTab(t){ STATE.authTab=t; render(); }
function doLogin(){
  const handle = document.getElementById('loginUser').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;
  if(!handle || !pass){ toast('error','Заполните имя пользователя и пароль'); return; }
  const u = USERS[handle];
  if(!u){ toast('error','Пользователь не найден'); return; }
  STATE.currentUser = u;
  toast('success', `С возвращением, ${u.name}!`);
  navigate('home');
}
function doRegister(){
  const handle = document.getElementById('regUser').value.trim().toLowerCase();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const agree = document.getElementById('agreeTerms').checked;
  if(!handle || handle.length<3){ toast('error','Имя пользователя должно быть не короче 3 символов'); return; }
  if(!email.includes('@')){ toast('error','Введите корректный email'); return; }
  if(pass.length<8){ toast('error','Пароль должен быть не короче 8 символов'); return; }
  if(!agree){ toast('error','Нужно принять условия использования'); return; }
  const u = { handle, name:handle, role:'user', roleLabel:'Участник', joined:'сегодня', bio:'', posts:0, topics:0, rep:0, online:true };
  USERS[handle]=u;
  STATE.currentUser=u;
  toast('success','Аккаунт создан, добро пожаловать на n3on!');
  navigate('home');
}
function logout(){
  STATE.currentUser=null;
  toast('info','Вы вышли из аккаунта');
  navigate('home');
}

function renderSkeleton(){
  document.getElementById('content').innerHTML = `
    <div class="view">
      <div class="skeleton skel-line" style="width:220px; height:26px; margin-bottom:22px;"></div>
      <div class="stats-row">
        ${Array.from({length:4}).map(()=>`<div class="card" style="padding:18px 20px;"><div class="skeleton skel-line" style="width:60%; height:22px; margin-bottom:8px;"></div><div class="skeleton skel-line" style="width:80%;"></div></div>`).join('')}
      </div>
      <div class="topic-list">
        ${Array.from({length:4}).map(()=>`
        <div class="card skel-row">
          <div class="skeleton" style="width:38px;height:38px;border-radius:50%;flex-shrink:0;"></div>
          <div style="flex:1;">
            <div class="skeleton skel-line" style="width:70%; margin-bottom:8px;"></div>
            <div class="skeleton skel-line" style="width:40%;"></div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
}

function render(){
  renderSidebar();
  renderTopbar();
  renderFooter();
  const view = STATE.route.view;
  const renderers = {
    home: renderHome,
    discover: renderDiscover,
    category: renderCategory,
    topic: renderTopic,
    profile: renderProfile,
    notifications: renderNotifications,
    settings: renderSettings,
    admin: renderAdmin,
    auth: renderAuth,
  };
  const fn = renderers[view] || renderHome;
  try{
    document.getElementById('content').innerHTML = fn();
  }catch(err){
    document.getElementById('content').innerHTML = `
    <div class="view card error-state">
      <div class="empty-icon error-icon">${ic('alert')}</div>
      <div class="empty-title">Что-то пошло не так</div>
      <div class="empty-text">Не удалось отобразить страницу. Попробуйте вернуться на главную.</div>
      <button class="btn btn-ghost" onclick="navigate('home')">На главную</button>
    </div>`;
  }
}

function boot(){
  renderSkeleton();
  setTimeout(()=>{
    STATE.currentUser = USERS['d1pyy'];
    render();
    setInterval(()=>{
      STATE.online += Math.floor(Math.random()*11)-5;
      if(STATE.online<900) STATE.online=900;
      const bar = document.querySelector('.pulse-bar span:last-child');
      if(bar) bar.innerHTML = `<b>${STATE.online.toLocaleString('ru-RU')}</b> в сети сейчас · <b>34</b> новых темы за час`;
    }, 4000);
  }, 650);
}

document.addEventListener('DOMContentLoaded', boot);
