import './solutions.css';

const SOLUTIONS = [
  {
    tag: 'Industrial',
    title: '工业零部件可视化',
    desc: '基于航空涡轮发动机模型，提供零部件悬停高亮、一键爆炸拆解与还原组装演示，并支持手势控制。',
    points: ['爆炸拆解', '悬停高亮', '手势交互'],
    href: '/disassembly.html',
    cover: '/covers/solutions-01-cover.jpg',
  },
  {
    tag: 'Education',
    title: '教育科普全真演示',
    desc: '太阳系在线科普，接入真实天体模型，模拟行星轨道运动，点击行星查看专业数据与科学看点。',
    points: ['真实天体模型', '轨道运动模拟', '专业数据'],
    href: '/solar.html',
    cover: '/covers/solutions-02-cover.jpg',
  },
  {
    tag: 'Automotive',
    title: '整车在线换色定制',
    desc: '基于小米 SU7 真车数字模型，9 种原厂车漆实时切换，环境光照与金属漆质感还原，支持 360° 整车预览。',
    points: ['真车模型', '9 色车漆', '环境光照'],
    href: '/su7.html',
    cover: '/covers/xiaomi-su7.png',
  },
  {
    tag: 'Heritage',
    title: '中国古建数字展馆',
    desc: '以长城为代表的中国古建数字孪生展示方案，通过高精度 3D 模型还原文物建筑形制与文化看点，支持自由旋转视角、场景切换。',
    points: ['数字孪生', '建筑档案', '持续扩充'],
    href: '/architecture.html',
    cover: '/covers/solutions-04-cover.jpg',
  },
  {
    tag: 'Museum',
    title: '博物馆数字化展陈',
    desc: '以 3D 形式在线展出经典家电藏品，环绕展台、藏品故事与技术参数结合，可自由漫游展馆。',
    points: ['线上展馆', '藏品故事', '3D 漫游'],
    href: '/museum.html',
    cover: '/covers/potala.png',
  },
];

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const grid = document.getElementById('grid');

SOLUTIONS.forEach((item, i) => {
  const card = el('a', 'solution');
  card.href = item.href;
  card.style.animationDelay = `${i * 70}ms`;

  const media = el('div', 'solution-media');
  const indexTag = el('span', 'solution-index', String(i + 1).padStart(2, '0'));
  if (item.cover) {
    const img = document.createElement('img');
    img.src = item.cover;
    img.alt = item.title;
    img.loading = 'lazy';
    media.append(img, indexTag);
  } else {
    media.classList.add('is-empty');
    media.append(el('span', 'solution-empty-mark', item.tag), indexTag);
  }

  const body = el('div', 'solution-body');
  body.appendChild(el('span', 'solution-tag', item.tag));
  body.appendChild(el('h2', 'solution-title', item.title));
  body.appendChild(el('p', 'solution-desc', item.desc));

  const points = el('div', 'solution-points');
  item.points.forEach((p) => points.appendChild(el('span', null, p)));
  body.appendChild(points);

  const enter = el('span', 'solution-enter');
  enter.innerHTML =
    '进入方案<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>';
  body.appendChild(enter);

  card.append(media, body);
  grid.appendChild(card);
});

/* 预留扩展位 */
const coming = el('div', 'solution is-coming');
const inner = el('div', 'coming-inner');
inner.append(
  el('div', 'coming-plus', '+'),
  el('div', 'coming-title', '更多解决方案'),
  el('div', 'coming-desc', 'Cloudscape 3D · 面向更多行业的方案扩展中')
);
coming.appendChild(inner);
grid.appendChild(coming);
