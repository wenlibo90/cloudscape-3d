import './community.css';

/* ---------------- 进入提示：取消与确认都返回来源页面 ---------------- */
function leaveCommunity() {
  if (document.referrer && document.referrer.includes(location.host)) {
    window.location.href = document.referrer;
    return;
  }
  if (history.length > 1) {
    history.back();
    return;
  }
  window.location.href = '/';
}

document.getElementById('gate-confirm').addEventListener('click', leaveCommunity);
document.getElementById('gate-cancel').addEventListener('click', leaveCommunity);

const STATS = [
  { value: '3,284', label: '社区作品' },
  { value: '1,126', label: '活跃创作者' },
  { value: '8,940', label: '交流讨论' },
  { value: '218', label: '今日新增' },
];

const TABS = ['全部', '工业装备', '天文航天', '文博艺术', '医疗健康', '消费零售'];

const WORKS = [
  { name: 'turbine-v8', title: '工业燃气涡轮组件', tag: '工业装备', author: '机械师老王', likes: 328, views: '4.2k' },
  { name: 'potala', title: '布达拉宫数字复原', tag: '文博艺术', author: '旅行的鱼', likes: 512, views: '6.8k' },
  { name: 'Jupiter_1_142984', title: '木星表面高精模型', tag: '天文航天', author: '星空猎人', likes: 476, views: '5.9k' },
  { name: 'Venussurface_1_12103', title: '金星地表科普演示', tag: '天文航天', author: '天文爱好者', likes: 289, views: '3.4k' },
  { name: 'human-skeleton', title: '女性人体骨骼教学模型', tag: '医疗健康', author: '医学生小林', likes: 401, views: '5.1k' },
  { name: 'new_balance_classic', title: 'New Balance 574 商品展示', tag: '消费零售', author: '设计师阿May', likes: 356, views: '4.6k' },
  { name: 'tiantan', title: '天坛祈年殿建筑复原', tag: '文博艺术', author: '古建迷', likes: 445, views: '5.5k' },
  { name: 'lionfish', title: '狮子鱼海洋科普', tag: '自然生态', author: '海洋馆日常', likes: 233, views: '2.9k' },
  { name: 'microscope', title: 'SWIFT 显微镜结构拆解', tag: '科研仪器', author: '实验室张工', likes: 187, views: '2.2k' },
];

const FEED = [
  { user: '机械师老王', time: '2 分钟前', text: '用工作台生成了一台工业燃气涡轮，参数化出模型只花了 3 秒，接着导到拆解页做了装配演示。', likes: 42, comments: 12 },
  { user: '星空猎人', time: '18 分钟前', text: '把木星和金星的真实模型接进了太阳系科普页，点击行星会展开专业数据，演示效果很稳。', likes: 87, comments: 23 },
  { user: '医学生小林', time: '1 小时前', text: '分享一个医疗科普场景的搭建思路：先用解剖模型做主体，再用场景顾问核对展示动线。', likes: 65, comments: 19 },
  { user: '旅行的鱼', time: '3 小时前', text: '布达拉宫模型导入博物馆展陈页，配合灯光和展台，线上看展的沉浸感比预期好很多。', likes: 118, comments: 31 },
  { user: '设计师阿May', time: '5 小时前', text: '运动鞋做电商 3D 商品展示，材质保留了原贴图，转动看细节很清楚。', likes: 54, comments: 8 },
];

const TAGS = ['工业装备', '数字孪生', '天文科普', '文博复原', '医疗教学', '电商展示', '参数化建模', '拆解演示'];

const CREATORS = [
  { name: '旅行的鱼', desc: '文博复原 · 38 件作品', rank: '#1' },
  { name: '星空猎人', desc: '天文科普 · 31 件作品', rank: '#2' },
  { name: '机械师老王', desc: '工业装备 · 27 件作品', rank: '#3' },
  { name: '医学生小林', desc: '医疗教学 · 19 件作品', rank: '#4' },
];

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/* 统计条 */
const statsEl = document.getElementById('stats');
STATS.forEach((s) => {
  const card = el('div', 'stat');
  card.append(el('b', null, s.value), el('span', null, s.label));
  statsEl.appendChild(card);
});

/* Tab */
const tabsEl = document.getElementById('tabs');
TABS.forEach((label, i) => {
  const btn = el('button', `tab${i === 0 ? ' is-active' : ''}`, label);
  btn.type = 'button';
  btn.addEventListener('click', () => {
    tabsEl.querySelectorAll('.tab').forEach((t) => t.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
  tabsEl.appendChild(btn);
});

/* 作品广场 */
const galleryEl = document.getElementById('gallery');
WORKS.forEach((work, i) => {
  const card = el('article', 'work');
  card.style.animationDelay = `${Math.min(i * 60, 480)}ms`;

  const media = el('div', 'work-media');
  const img = document.createElement('img');
  img.src = `/covers/${work.name}.png`;
  img.alt = work.title;
  img.loading = 'lazy';
  media.append(img, el('span', 'work-badge', work.tag));

  const body = el('div', 'work-body');
  body.appendChild(el('div', 'work-title', work.title));

  const meta = el('div', 'work-meta');
  const author = el('span', 'work-author');
  const avatar = el('span', 'avatar', work.author.slice(0, 1));
  author.append(avatar, el('span', null, work.author));
  const likes = el('span', 'work-likes', `♥ ${work.likes} · ${work.views}`);
  meta.append(author, likes);

  body.appendChild(meta);
  card.append(media, body);
  card.addEventListener('click', () => {
    window.location.href = `/gallery.html?open=${encodeURIComponent(work.name)}`;
  });
  galleryEl.appendChild(card);
});

/* 交流动态 */
const feedEl = document.getElementById('feed');
FEED.forEach((post) => {
  const item = el('div', 'post');

  const head = el('div', 'post-head');
  const avatar = el('span', 'avatar', post.user.slice(0, 1));
  const name = el('span', 'post-user', post.user);
  const time = el('span', 'post-time', post.time);
  head.append(avatar, name, time);

  const text = el('div', 'post-text', post.text);

  const foot = el('div', 'post-foot');
  foot.append(
    el('span', null, `♥ ${post.likes}`),
    el('span', null, `💬 ${post.comments}`)
  );

  item.append(head, text, foot);
  feedEl.appendChild(item);
});

/* 热门标签 */
const tagsEl = document.getElementById('tags');
TAGS.forEach((tag) => {
  const chip = el('span', 'tag', `# ${tag}`);
  tagsEl.appendChild(chip);
});

/* 活跃创作者 */
const creatorsEl = document.getElementById('creators');
CREATORS.forEach((c) => {
  const item = el('div', 'creator');
  const avatar = el('span', 'avatar', c.name.slice(0, 1));
  const body = el('div', 'creator-body');
  body.append(el('div', 'creator-name', c.name), el('div', 'creator-desc', c.desc));
  item.append(avatar, body, el('span', 'creator-rank', c.rank));
  creatorsEl.appendChild(item);
});
