import './model.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const params = new URLSearchParams(window.location.search);
const modelKey = params.get('m') || params.get('model') || '';

const els = {
  canvas: document.getElementById('scene'),
  name: document.getElementById('model-name'),
  cat: document.getElementById('model-cat'),
  cardCat: document.getElementById('card-cat'),
  desc: document.getElementById('model-desc'),
  meta: document.getElementById('model-meta'),
  card: document.getElementById('card'),
  cardToggle: document.getElementById('card-toggle'),
  loading: document.getElementById('loading'),
  loadingText: document.getElementById('loading-text'),
  error: document.getElementById('error'),
  errorText: document.getElementById('error-text'),
  tip: document.getElementById('gesture-tip'),
  prev: document.getElementById('nav-prev'),
  next: document.getElementById('nav-next'),
};

/* ---------------- 渲染器与场景 ---------------- */
const renderer = new THREE.WebGLRenderer({ canvas: els.canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;

scene.add(new THREE.HemisphereLight(0xc8d6ea, 0x0a0c10, 0.85));

const keyLight = new THREE.DirectionalLight(0xfff2dc, 1.9);
keyLight.position.set(5, 9, 6);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x7fa6de, 1.0);
rimLight.position.set(-6, 4, -6);
scene.add(rimLight);

const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 4000);

const controls = new OrbitControls(camera, els.canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;
controls.rotateSpeed = 0.9;
controls.zoomSpeed = 0.9;

const FIT = 2.5;
let holder = null;

function frameObject(object, fit = FIT) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const radius = maxDim / 2;

  // 模型整体上移，给底部档案卡留出空间
  object.position.y = radius * 0.42;

  const dist = (radius / Math.sin((camera.fov * Math.PI) / 360)) * fit;
  const dir = new THREE.Vector3(0.72, 0.5, 1).normalize();

  camera.position.copy(dir.multiplyScalar(dist));
  camera.near = Math.max(0.01, dist / 200);
  camera.far = dist * 200;
  camera.updateProjectionMatrix();

  controls.target.set(0, 0, 0);
  controls.minDistance = radius * 0.45;
  controls.maxDistance = radius * 16;
  controls.update();
}

/* ---------------- 载入器 ---------------- */
const draco = new DRACOLoader();
draco.setDecoderPath('/draco/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

/* ---------------- 状态 ---------------- */
let allItems = [];
let currentIndex = -1;

function renderMeta(item) {
  const title = item.title || item.name;
  els.name.textContent = title;
  document.title = `${title} · Cloudscape 3D`;
  els.cat.textContent = item.category || '3D 模型';
  els.cardCat.textContent = item.category || '模型档案';
  els.desc.textContent = item.description || '暂无描述';

  const rows = [
    ['分类', item.category || '—'],
    ['体积', item.size ? `${(item.size / 1024 / 1024).toFixed(2)} MB` : '—'],
  ];
  els.meta.innerHTML = '';
  rows.forEach(([k, v]) => {
    const span = document.createElement('span');
    span.innerHTML = `${k} <b>${v}</b>`;
    els.meta.appendChild(span);
  });
}

function showError(text) {
  els.errorText.textContent = text;
  els.error.hidden = false;
  els.loading.classList.add('is-done');
}

function clearModel() {
  if (!holder) return;
  scene.remove(holder);
  holder.traverse((node) => {
    if (node.isMesh) {
      node.geometry?.dispose?.();
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      mats.forEach((m) => {
        if (!m) return;
        Object.values(m).forEach((v) => { if (v && v.isTexture) v.dispose(); });
        m.dispose?.();
      });
    }
  });
  holder = null;
}

async function loadItem(item) {
  els.loadingText.textContent = '载入模型…';
  els.loading.classList.remove('is-done');
  els.error.hidden = true;
  const startedAt = performance.now();

  try {
    const gltf = await new Promise((resolve, reject) => {
      loader.load(
        item.url,
        resolve,
        (event) => {
          if (event.total) {
            els.loadingText.textContent = `载入模型… ${Math.round((event.loaded / event.total) * 100)}%`;
          }
        },
        reject,
      );
    });

    clearModel();

    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    box.getCenter(center);
    model.position.sub(center);

    model.traverse((node) => {
      if (node.isMesh && node.material) node.material.envMapIntensity = 1.15;
    });

    holder = new THREE.Group();
    holder.add(model);
    scene.add(holder);

    frameObject(holder, FIT);
    controls.autoRotate = true;

    // 保证加载态至少可见一段时间，避免切换时出现黑屏闪烁
    const elapsed = performance.now() - startedAt;
    if (elapsed < 520) await new Promise((r) => setTimeout(r, 520 - elapsed));
    els.loading.classList.add('is-done');
  } catch (err) {
    console.warn('[model] 模型加载失败:', err && err.message);
    showError('模型加载失败，请刷新重试');
  }
}

async function openIndex(index) {
  if (!allItems.length) return;
  currentIndex = (index + allItems.length) % allItems.length;
  const item = allItems[currentIndex];

  renderMeta(item);
  hideTip();
  els.card.classList.remove('is-collapsed');
  els.cardToggle.textContent = '收起';

  history.replaceState(null, '', `/model.html?m=${encodeURIComponent(item.name)}`);
  await loadItem(item);
}

async function boot() {
  try {
    const res = await fetch('/api/models');
    const data = await res.json();
    allItems = (Array.isArray(data.files) ? data.files : []).slice();
  } catch {
    showError('无法获取模型清单，请检查网络后重试');
    return;
  }

  if (!allItems.length) {
    showError('模型库为空，请稍后再试');
    return;
  }

  let start = modelKey ? allItems.findIndex((f) => f.name === modelKey) : 0;
  if (start < 0) start = 0;

  await openIndex(start);
}

/* ---------------- 交互 ---------------- */
els.prev.addEventListener('click', () => openIndex(currentIndex - 1));
els.next.addEventListener('click', () => openIndex(currentIndex + 1));

/* ---------------- 重置视角 / 清屏沉浸 ---------------- */
const appEl = document.getElementById('app');
const exitImmersiveBtn = document.getElementById('exit-immersive');

document.getElementById('reset-view').addEventListener('click', () => {
  if (holder) frameObject(holder, FIT);
  controls.autoRotate = true;
});

function enterImmersive() {
  appEl.classList.add('is-immersive');
  exitImmersiveBtn.hidden = false;
}

function exitImmersive() {
  appEl.classList.remove('is-immersive');
  exitImmersiveBtn.hidden = true;
}

document.getElementById('clear-view').addEventListener('click', enterImmersive);
exitImmersiveBtn.addEventListener('click', exitImmersive);

controls.addEventListener('start', () => {
  controls.autoRotate = false;
  hideTip();
});

let tipTimer = setTimeout(hideTip, 5200);
function hideTip() {
  els.tip.classList.add('is-hidden');
  clearTimeout(tipTimer);
}

els.cardToggle.addEventListener('click', () => {
  const collapsed = els.card.classList.toggle('is-collapsed');
  els.cardToggle.textContent = collapsed ? '展开' : '收起';
});

/* ---------------- 渲染循环 ---------------- */
function resize() {
  const w = els.canvas.clientWidth;
  const h = els.canvas.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(els.canvas);
resize();

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
boot();
