import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const TOTAL_SLOTS = 16;

const NO_SAME_MODELS = new Set(['cuitousha', 'canglong']);

const APPLY_LINKS = {
  'turbine-v8': '/disassembly.html',
  'Venussurface_1_12103': '/solar.html',
};

const CATEGORY_COLORS = {
  家电电子: '#5fd3d0',
  文博艺术: '#c9a45c',
  消费零售: '#e07a9a',
  工业装备: '#9aa0a6',
  天文航天: '#8fb0e0',
  自然生态: '#7fbf8f',
  医疗健康: '#d98f8f',
  科研仪器: '#b39ddb',
  待上传: '#5a626d',
};
const catColor = (cat) => CATEGORY_COLORS[cat] || '#c9a45c';

const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const searchEl = document.getElementById('search');
const countEl = document.getElementById('count');
const statTotal = document.getElementById('stat-total');
const statCat = document.getElementById('stat-cat');
const statSize = document.getElementById('stat-size');
const statSlot = document.getElementById('stat-slot');

const viewerEl = document.getElementById('viewer');
const viewerCanvas = document.getElementById('viewer-canvas');
const viewerName = document.getElementById('viewer-name');
const viewerDesc = document.getElementById('viewer-desc');
const viewerLoading = document.getElementById('viewer-loading');

const state = { items: [], category: '全部', query: '', recommended: null };

const formatSize = (bytes) => {
  if (!bytes) return '—';
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
};

/* ---------------- 加载器 ---------------- */
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const gltfCache = new Map();
function loadGltf(url) {
  if (!gltfCache.has(url)) {
    gltfCache.set(
      url,
      new Promise((resolve, reject) => {
        gltfLoader.load(url, resolve, undefined, reject);
      })
    );
  }
  return gltfCache.get(url);
}

function frameObject(object, camera, factor = 1.5, dirVector = new THREE.Vector3(1, 0.62, 1.15)) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const radius = Math.max(size.x, size.y, size.z) * 0.5 || 0.5;
  const dist = (radius / Math.sin((camera.fov * Math.PI) / 360)) * factor;
  const dir = dirVector.clone().normalize();

  camera.position.copy(center).addScaledVector(dir, dist);
  camera.near = Math.max(0.005, dist - radius * 4);
  camera.far = dist + radius * 8;
  camera.updateProjectionMatrix();
  camera.lookAt(center);

  return { radius };
}

/* ---------------- 清单 ---------------- */
async function fetchModels() {
  try {
    const res = await fetch('/api/models');
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = await res.json();
    return Array.isArray(data.files) ? data.files : [];
  } catch (err) {
    console.warn('[gallery] 模型清单获取失败:', err.message);
    return [];
  }
}

/** 空闲时串行预解析 glb，点击查看时可立即呈现 */
function preloadModels(files) {
  let index = 0;
  const step = async () => {
    if (index >= files.length) return;
    const item = files[index];
    index += 1;
    if (!gltfCache.has(item.url)) {
      try {
        await loadGltf(item.url);
      } catch {
        /* 预加载失败不影响后续按需加载 */
      }
    }
    setTimeout(step, 180);
  };
  const start = () => setTimeout(step, 1200);
  if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 4000 });
  else start();
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createCard(item, index) {
  const card = el('article', `card${item.placeholder ? ' is-empty' : ''}`);
  card.style.setProperty('--cat', catColor(item.category));
  card.style.animationDelay = `${Math.min(index * 24, 420)}ms`;
  card.dataset.name = item.name;
  card.dataset.title = (item.title || '').toLowerCase();
  card.dataset.file = (item.file || '').toLowerCase();
  card.dataset.category = item.category;

  const media = el('div', 'card-media');
  card._media = media;
  media.appendChild(el('span', 'card-slot', `#${item.slot}`));

  if (item.placeholder) {
    media.appendChild(el('div', 'empty-mark', '+'));
    card.append(
      media,
      (() => {
        const info = el('div', 'card-info');
        info.append(
          el('h3', 'card-title', `展示位 ${item.slot}`),
          el('div', 'card-desc', '等待上传 glb 模型'),
          (() => {
            const tags = el('div', 'card-tags');
            tags.appendChild(el('span', 'tag', '待上传'));
            return tags;
          })()
        );
        return info;
      })()
    );
    return card;
  }

  const cover = document.createElement('img');
  cover.src = `/covers/${item.name}.png`;
  cover.alt = item.title || item.name;
  cover.loading = 'lazy';
  cover.decoding = 'async';
  cover.addEventListener('load', () => cover.classList.add('is-ready'));
  media.appendChild(cover);
  media.appendChild(el('span', 'card-cat', item.category));
  media.appendChild(el('span', 'card-cta', '查看模型 →'));
  card.appendChild(el('div', 'card-accent'));
  card.append(media);

  const info = el('div', 'card-info');
  info.appendChild(el('h3', 'card-title', item.title || item.name));
  info.appendChild(el('div', 'card-desc', item.description || item.file || ''));

  const tags = el('div', 'card-tags');
  tags.appendChild(el('span', 'tag is-accent', item.category));
  [formatSize(item.size), item.meshes ? `${item.meshes} 网格` : null]
    .filter(Boolean)
    .forEach((t) => tags.appendChild(el('span', 'tag', t)));
  info.appendChild(tags);

  const actions = [];

  if (APPLY_LINKS[item.name]) {
    const applyBtn = el('a', 'card-apply');
    applyBtn.href = APPLY_LINKS[item.name];
    applyBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M9 7h8v8" /></svg>方案应用';
    applyBtn.addEventListener('click', (e) => e.stopPropagation());
    actions.push(applyBtn);
  }

  if (!NO_SAME_MODELS.has(item.name)) {
    const sameBtn = el('a', 'card-same');
    sameBtn.href = `/?load=${encodeURIComponent(item.name)}`;
    sameBtn.title = '在工作台载入该模型';
    sameBtn.innerHTML =
      '生成同款<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>';
    sameBtn.addEventListener('click', (e) => e.stopPropagation());
    actions.push(sameBtn);
  }

  if (actions.length) {
    const bar = el('div', 'card-actions');
    actions.forEach((btn) => bar.appendChild(btn));
    info.appendChild(bar);
  }

  card.appendChild(info);

  card.addEventListener('click', () => openViewer(item));
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    card.style.setProperty('--ry', `${(px * 7).toFixed(2)}deg`);
    card.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  });

  return card;
}

function renderGrid() {
  const q = state.query;
  const visible = state.items.filter((item) => {
    if (state.recommended && !state.recommended.has(item.name)) return false;
    if (state.category !== '全部' && item.category !== state.category) return false;
    if (!q) return true;
    const haystack = `${item.name} ${item.title || ''} ${item.file || ''} ${item.category} ${item.description || ''}`.toLowerCase();
    return haystack.includes(q);
  });

  grid.innerHTML = '';
  countEl.textContent = `显示 ${visible.length} / ${state.items.length}`;

  if (!visible.length) {
    grid.appendChild(el('div', 'empty', '没有符合条件的模型'));
    return;
  }

  const frag = document.createDocumentFragment();
  visible.forEach((item, i) => frag.appendChild(createCard(item, i)));
  grid.appendChild(frag);
}

function renderFilters() {
  const realCats = [...new Set(state.items.filter((i) => !i.placeholder).map((i) => i.category))].sort();
  const hasPlaceholder = state.items.some((i) => i.placeholder);
  const cats = ['全部', ...realCats, ...(hasPlaceholder ? ['待上传'] : [])];

  filtersEl.innerHTML = '';
  cats.forEach((cat) => {
    const count = cat === '全部' ? state.items.length : state.items.filter((i) => i.category === cat).length;
    const btn = el('button', `filter${state.category === cat ? ' is-active' : ''}`);
    btn.type = 'button';
    const dot = el('span', 'dot');
    dot.style.setProperty('--dot', cat === '全部' ? '#c9a45c' : catColor(cat));
    btn.append(dot, document.createTextNode(cat), el('em', null, String(count)));
    btn.addEventListener('click', () => {
      state.category = cat;
      console.log("__probe before-renderFilters items=" + state.items.length);
  renderFilters();
      renderGrid();
    });
    filtersEl.appendChild(btn);
  });
}

/* ---------------- 全屏查看器 ---------------- */
const viewerRenderer = new THREE.WebGLRenderer({ canvas: viewerCanvas, antialias: true, alpha: true });
viewerRenderer.setClearColor(0x000000, 0);
viewerRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
viewerRenderer.outputColorSpace = THREE.SRGBColorSpace;
viewerRenderer.toneMapping = THREE.ACESFilmicToneMapping;
viewerRenderer.toneMappingExposure = 1.05;

const viewerScene = new THREE.Scene();
viewerScene.environment = new THREE.PMREMGenerator(viewerRenderer).fromScene(new RoomEnvironment(), 0.05).texture;
viewerScene.add(new THREE.HemisphereLight(0xc8d6ea, 0x0a0c10, 0.9));
const viewerKey = new THREE.DirectionalLight(0xfff2dc, 1.9);
viewerKey.position.set(5, 9, 6);
viewerScene.add(viewerKey);
const viewerRim = new THREE.DirectionalLight(0x7fa6de, 1.0);
viewerRim.position.set(-6, 4, -6);
viewerScene.add(viewerRim);

const viewerCamera = new THREE.PerspectiveCamera(40, 1, 0.01, 4000);
const viewerControls = new OrbitControls(viewerCamera, viewerCanvas);
viewerControls.enableDamping = true;
viewerControls.dampingFactor = 0.07;
viewerControls.autoRotate = true;
viewerControls.autoRotateSpeed = 0.9;

let viewerModel = null;
let viewerRaf = 0;
let currentViewer = null;

function resizeViewer() {
  const w = viewerCanvas.clientWidth;
  const h = viewerCanvas.clientHeight;
  if (!w || !h) return;
  viewerRenderer.setSize(w, h, false);
  viewerCamera.aspect = w / h;
  viewerCamera.updateProjectionMatrix();
}

function resetViewerCamera() {
  if (!viewerModel) return;
  frameObject(viewerModel, viewerCamera, 1.75);
  viewerControls.target.set(0, 0, 0);
  viewerControls.update();
}

function startViewerLoop() {
  if (viewerRaf) return;
  const tick = () => {
    if (!viewerEl.classList.contains('is-open')) {
      viewerRaf = 0;
      return;
    }
    viewerRaf = requestAnimationFrame(tick);
    viewerControls.update();
    viewerRenderer.render(viewerScene, viewerCamera);
  };
  viewerRaf = requestAnimationFrame(tick);
}

function setViewerInfo(item) {
  const sub = document.getElementById('viewer-sub');
  const tags = document.getElementById('viewer-tags');
  if (sub) sub.textContent = item.category || '3D 模型';
  viewerDesc.textContent = item.description || '该模型暂未提供中文描述。';

  if (tags) {
    tags.innerHTML = '';
    const rows = [
      ['分类', item.category || '—'],
      ['体积', item.size ? `${(item.size / 1024 / 1024).toFixed(2)} MB` : '—'],
    ];
    rows.forEach(([k, v]) => {
      const span = document.createElement('span');
      span.innerHTML = `${k} <b>${v}</b>`;
      tags.appendChild(span);
    });
  }
}

async function openViewer(item) {
  currentViewer = item;
  viewerEl.classList.add('is-open');
  viewerName.textContent = item.title || item.name;
  setViewerInfo(item);
  requestAnimationFrame(resizeViewer);
  requestAnimationFrame(() => updateQrCard(item));

  const cached = gltfCache.has(item.url);

  // 先移除上一个模型并立即刷新画面，避免残留显示
  if (viewerModel) {
    viewerScene.remove(viewerModel);
    viewerModel = null;
  }
  if (viewerRaf) {
    cancelAnimationFrame(viewerRaf);
    viewerRaf = 0;
  }
  viewerRenderer.render(viewerScene, viewerCamera);

  if (cached) {
    viewerLoading.classList.add('is-hidden');
  } else {
    viewerLoading.textContent = '载入模型…';
    viewerLoading.classList.remove('is-hidden');
  }

  try {
    const gltf = await loadGltf(item.url);
    const model = gltf.scene.clone(true);

    const box = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    box.getCenter(center);
    model.position.sub(center);

    const holder = new THREE.Group();
    holder.add(model);
    viewerScene.add(holder);
    viewerModel = holder;

    const { radius } = frameObject(holder, viewerCamera, 1.75);
    viewerControls.target.set(0, 0, 0);
    viewerControls.minDistance = radius * 0.35;
    viewerControls.maxDistance = radius * 14;
    viewerControls.autoRotate = true;
    viewerControls.update();

    syncRotateButton();
    resizeViewer();
    viewerLoading.classList.add('is-hidden');
    startViewerLoop();
  } catch (err) {
    console.warn('[gallery] 模型加载失败:', err.message);
    viewerLoading.textContent = '模型加载失败';
  }
}

function closeViewer() {
  // 退出全屏，避免关闭查看器后页面仍停留在全屏状态
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
  viewerEl.classList.remove('is-open');
  if (viewerRaf) {
    cancelAnimationFrame(viewerRaf);
    viewerRaf = 0;
  }
  if (viewerModel) {
    viewerScene.remove(viewerModel);
    viewerModel = null;
  }
}

const rotateBtn = document.querySelector('.viewer-tools [data-act="rotate"]');
function syncRotateButton() {
  rotateBtn.classList.toggle('is-on', viewerControls.autoRotate);
}

document.querySelector('.viewer-tools [data-act="reset"]').addEventListener('click', resetViewerCamera);
rotateBtn.addEventListener('click', () => {
  viewerControls.autoRotate = !viewerControls.autoRotate;
  syncRotateButton();
});
document.querySelector('.viewer-tools [data-act="fullscreen"]').addEventListener('click', () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else viewerEl.requestFullscreen?.();
});



document.getElementById('viewer-close').addEventListener('click', closeViewer);

/* ---------------- 手机扫码查看该模型 ---------------- */
const viewerQrEl = document.getElementById('viewer-qr');
const vqrCta = document.getElementById('vqr-cta');
const vqrCode = document.getElementById('vqr-code');
const vqrCanvas = document.getElementById('qr-canvas-sm');

let qrLibPromise = null;
function loadQrLib() {
  if (!qrLibPromise) {
    qrLibPromise = import('qrcode-generator').then((m) => m.default || m);
  }
  return qrLibPromise;
}

function qrRoundRect(ctx, x, y, w, h, rad) {
  const r = Math.min(rad, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function modelUrl(item) {
  return `${window.location.origin}/model.html?m=${encodeURIComponent(item.name)}`;
}

async function renderQrTo(canvas, url, fallback = 188) {
  const qrcode = await loadQrLib();
  const qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  const count = qr.getModuleCount();

  const size = canvas.clientWidth || fallback;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#f6f0e2';
  ctx.fillRect(0, 0, size, size);

  const pad = size * 0.055;
  const cell = (size - pad * 2) / count;
  ctx.fillStyle = '#241c0e';
  for (let row = 0; row < count; row += 1) {
    for (let col = 0; col < count; col += 1) {
      if (!qr.isDark(row, col)) continue;
      qrRoundRect(
        ctx,
        pad + col * cell + cell * 0.08,
        pad + row * cell + cell * 0.08,
        cell * 0.84,
        cell * 0.84,
        cell * 0.3,
      );
      ctx.fill();
    }
  }
}

let qrRenderedFor = null;

function collapseQr() {
  vqrCode.hidden = true;
  vqrCta.textContent = '显示二维码';
  viewerQrEl.classList.remove('is-open');
}

function updateQrCard(item) {
  if (!item) return;
  qrRenderedFor = null;
  collapseQr();
}

vqrCta.addEventListener('click', async (e) => {
  e.stopPropagation();
  if (!currentViewer) return;

  if (!vqrCode.hidden) {
    collapseQr();
    return;
  }

  const url = modelUrl(currentViewer);
  const urlEl = document.getElementById('vqr-url');
  if (urlEl) urlEl.textContent = url.replace(/^https?:\/\//, '');

  if (qrRenderedFor !== currentViewer.name) {
    await renderQrTo(vqrCanvas, url, 114);
    qrRenderedFor = currentViewer.name;
  }

  vqrCode.hidden = false;
  vqrCta.textContent = '收起二维码';
  viewerQrEl.classList.add('is-open');
});

window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  closeViewer();
});
window.addEventListener('resize', () => {
  if (viewerEl.classList.contains('is-open')) resizeViewer();
});

searchEl.addEventListener('input', () => {
  state.query = searchEl.value.trim().toLowerCase();
  renderGrid();
});

/* ---------------- 滚动进度 ---------------- */
const progressEl = document.getElementById('progress');
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressEl.style.width = max > 0 ? `${Math.min(100, (window.scrollY / max) * 100)}%` : '0%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);

/* ---------------- AI 场景顾问 ---------------- */
const advisorEl = document.getElementById('advisor');
const advisorForm = document.getElementById('advisor-form');
const advisorInput = document.getElementById('advisor-input');
const advisorSubmit = document.getElementById('advisor-submit');
const advisorExamples = document.getElementById('advisor-examples');
const advisorResult = document.getElementById('advisor-result');
const advisorSteps = document.getElementById('advisor-steps');
const advisorModels = document.getElementById('advisor-models');
const advisorActions = document.getElementById('advisor-actions');
const advisorToggle = document.getElementById('advisor-toggle');
const advisorSubtitle = document.getElementById('advisor-subtitle');

const ADVISOR_SUBTITLE = '描述你的行业与目标，AI 会感知意图、推理匹配、给出可落地的 3D 方案';

function setAdvisorCollapsed(collapsed) {
  advisorEl.classList.toggle('is-collapsed', collapsed);
  advisorToggle.setAttribute('aria-expanded', String(!collapsed));
  const summary = advisorSubtitle.dataset.summary;
  advisorSubtitle.textContent = collapsed && summary ? summary : ADVISOR_SUBTITLE;
  try {
    localStorage.setItem('advisor-collapsed', collapsed ? '1' : '0');
  } catch {
    /* 忽略隐私模式下的存储限制 */
  }
}

advisorToggle.addEventListener('click', () => {
  setAdvisorCollapsed(!advisorEl.classList.contains('is-collapsed'));
});

const ADVISOR_EXAMPLES = [
  '我要为医疗器械企业做一个线上 3D 展厅',
  '博物馆想把馆藏做成数字藏品对外展示',
  '鞋服品牌要做电商 3D 商品展示',
  '航空科普馆需要一套研学互动内容',
];

function stepEl(idx, label, text, loading) {
  const step = el('div', `step${loading ? ' is-loading' : ''}`);
  const body = el('div');
  body.append(el('div', 'step-label', label), el('div', 'step-text', text));
  step.append(el('span', 'step-idx', idx), body);
  return step;
}

function renderExampleChips() {
  ADVISOR_EXAMPLES.forEach((text) => {
    const btn = el('button', null, text);
    btn.type = 'button';
    btn.addEventListener('click', () => {
      advisorInput.value = text;
      advisorForm.requestSubmit();
    });
    advisorExamples.appendChild(btn);
  });
}

function renderAdvisorModels(container, names) {
  const byName = new Map(state.items.filter((i) => !i.placeholder).map((i) => [i.name, i]));

  names.forEach((name) => {
    const item = byName.get(name);
    if (!item) return;

    const card = el('div', 'rec-card');
    const thumb = el('div', 'rec-thumb');
    const img = el('img');
    img.src = `/covers/${item.name}.png`;
    img.alt = item.title;
    img.loading = 'lazy';
    thumb.appendChild(img);

    const info = el('div');
    info.append(el('div', 'rec-name', item.title), el('div', 'rec-cat', item.category));
    card.append(thumb, info);
    card.addEventListener('click', () => openViewer(item));
    container.appendChild(card);
  });
}

/** 生成一个带编号的模块外壳 */
function moduleEl(index, label) {
  const wrap = el('div', 'step');
  const body = el('div');
  body.appendChild(el('div', 'step-label', label));
  wrap.append(el('span', 'step-idx', index), body);
  return { wrap, body };
}

function renderAdvisorResult(data) {
  advisorSteps.innerHTML = '';

  // 01 场景分析
  const analysis = moduleEl('01', '场景分析');
  analysis.body.appendChild(el('div', 'step-text', data.analysis || '未能识别到明确的场景信息。'));
  advisorSteps.appendChild(analysis.wrap);

  // 02 模型组合
  const combo = moduleEl('02', '模型组合');
  if (data.combination) combo.body.appendChild(el('div', 'step-text', data.combination));
  const models = el('div', 'advisor-models');
  renderAdvisorModels(models, data.recommended || []);
  combo.body.appendChild(models);
  advisorSteps.appendChild(combo.wrap);

  // 03 展陈方案
  const display = moduleEl('03', '展陈方案');
  display.body.appendChild(el('div', 'step-text', data.display || '未生成展陈方案。'));
  advisorSteps.appendChild(display.wrap);

  // 04 实施步骤
  const steps = moduleEl('04', '实施步骤');
  const list = el('ol', 'step-list');
  (data.steps || []).forEach((text) => list.appendChild(el('li', null, text)));
  if (list.childElementCount) steps.body.appendChild(list);
  else steps.body.appendChild(el('div', 'step-text', '未生成实施步骤。'));
  advisorSteps.appendChild(steps.wrap);

  // 05 成本估算
  const cost = moduleEl('05', '成本估算');
  const costGrid = el('div', 'cost-grid');
  ((data.cost && data.cost.items) || []).forEach((item) => {
    const cell = el('div', 'cost-cell');
    cell.append(el('span', 'cost-k', item.label), el('span', 'cost-v', item.value));
    costGrid.appendChild(cell);
  });
  if (costGrid.childElementCount) cost.body.appendChild(costGrid);
  if (data.cost && data.cost.total) {
    cost.body.appendChild(el('div', 'cost-total', `预估总投入 · ${data.cost.total}`));
  }
  if (!costGrid.childElementCount && !(data.cost && data.cost.total)) {
    cost.body.appendChild(el('div', 'step-text', '未生成成本估算。'));
  }
  advisorSteps.appendChild(cost.wrap);

  const count = (data.recommended || []).length;
  advisorSubtitle.dataset.summary = `${data.analysis || '已完成场景分析'}｜匹配 ${count} 个模型`;

  advisorActions.innerHTML = '';
  if (data.recommended && data.recommended.length) {
    const btn = el('button', 'act-btn', '筛选出这些模型');
    btn.type = 'button';
    btn.addEventListener('click', () => {
      const wasOn = Boolean(state.recommended);
      state.recommended = wasOn ? null : new Set(data.recommended);
      btn.classList.toggle('is-on', !wasOn);
      btn.textContent = wasOn ? '筛选出这些模型' : '显示全部模型';
      renderGrid();
      if (!wasOn) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    advisorActions.appendChild(btn);
  }
}

async function runAdvisor(query) {
  advisorSubmit.disabled = true;
  advisorEl.classList.add('is-active');
  advisorResult.hidden = false;
  advisorActions.innerHTML = '';
  advisorModels.innerHTML = '';

  advisorSteps.innerHTML = '';
  advisorSteps.append(
    stepEl('01', '场景分析', '正在识别行业领域、核心目标与目标受众', true),
    stepEl('02', '模型组合', '正在检索模型库并权衡搭配方案', true),
    stepEl('03', '展陈方案', '正在规划布局、交互与呈现形式', true),
    stepEl('04', '实施步骤', '正在拆解可执行的实施阶段', true),
    stepEl('05', '成本估算', '正在测算资源与投入量级', true)
  );
  advisorResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  try {
    const res = await fetch('/api/advisor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    renderAdvisorResult(await res.json());
  } catch (err) {
    console.warn('[advisor] 分析失败:', err.message);
    advisorSteps.innerHTML = '';
    advisorSteps.appendChild(stepEl('!', '分析失败', 'AI 顾问暂时不可用，请稍后重试，或直接浏览下方模型库。'));
  } finally {
    advisorSubmit.disabled = false;
  }
}

advisorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = advisorInput.value.trim();
  if (!query) return;
  runAdvisor(query);
});

renderExampleChips();

try {
  setAdvisorCollapsed(localStorage.getItem('advisor-collapsed') === '1');
} catch {
  /* 忽略隐私模式下的存储限制 */
}

/* ---------------- 初始化 ---------------- */
async function init() {
  const files = await fetchModels();

  const slotCount = Math.max(TOTAL_SLOTS, files.length);

  const items = Array.from({ length: slotCount }, (_, i) => {
    const slot = String(i + 1).padStart(2, '0');
    const real = files[i];
    if (real) return { ...real, slot, placeholder: false };
    return { name: slot, slot, category: '待上传', placeholder: true };
  });

  state.items = items;

  const categories = new Set(files.map((f) => f.category));
  const totalSize = files.reduce((sum, f) => sum + (f.size || 0), 0);

  statTotal.textContent = String(files.length);
  statCat.textContent = String(categories.size);
  statSize.textContent = formatSize(totalSize);
  statSlot.textContent = String(TOTAL_SLOTS);

  renderFilters();
  renderGrid();
  updateProgress();
  preloadModels(files);

  // 通过 ?open=<name> 直接打开对应模型
  const openName = new URLSearchParams(location.search).get('open');
  if (openName) {
    const target = state.items.find((i) => !i.placeholder && i.name === openName);
    if (target) setTimeout(() => openViewer(target), 400);
  }
}

init();
