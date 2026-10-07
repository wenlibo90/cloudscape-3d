import './ar.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const sceneEl = document.querySelector('a-scene');
const startScreen = document.getElementById('screen-start');
const btnStart = document.getElementById('btn-start');
const scanHint = document.getElementById('scan-hint');
const controls = document.getElementById('ar-controls');
const infoCard = document.getElementById('ar-info');
const infoClose = document.getElementById('info-close');
const statusText = document.getElementById('status-text');
const statusTag = document.getElementById('status-tag');
const fallback = document.getElementById('fallback');
const fallbackMsg = document.getElementById('fallback-msg');

const targetEl = document.getElementById('target');
const scaleRoot = document.getElementById('scale-root');
const spinEl = document.getElementById('spin');
const modelEl = document.getElementById('model');

let arSystem = null;
let zoom = 1;

function setStatus(text, live) {
  statusText.textContent = text;
  statusTag.classList.toggle('live', !!live);
}

const UA = navigator.userAgent.toLowerCase();
const IS_WECHAT = /micromessenger/.test(UA);
const IS_SECURE = window.isSecureContext || location.protocol === 'https:' || location.hostname === 'localhost';
let IN_IFRAME = false;
try { IN_IFRAME = window.self !== window.top; } catch { IN_IFRAME = true; }

function supportsAR() {
  return IS_SECURE
    && !!(navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function');
}

function showFallback(message) {
  fallbackMsg.textContent = message;
  fallback.hidden = false;
  startScreen.classList.add('is-hidden');
  scanHint.classList.add('is-hidden');
  controls.classList.add('is-hidden');
  setStatus('无法开启 AR', false);
}

if (!IS_SECURE) {
  showFallback('当前页面未通过 HTTPS 打开，浏览器会禁止访问摄像头。请使用 https 地址访问。');
} else if (!supportsAR()) {
  showFallback('当前浏览器不支持摄像头调用（mediaDevices 不可用），请使用系统自带浏览器（Safari / Chrome）打开。');
}

// 在预览框（iframe）中打开时，提前提示需新标签页才能授权摄像头
if (IN_IFRAME && IS_SECURE) {
  const note = document.querySelector('.screen .note');
  if (note) {
    note.innerHTML = '当前页面在预览框中打开，请先在新标签页打开<br />再点击下方按钮授权摄像头 · iOS 建议使用 Safari';
  }
}

/* ---------------- 模型归一化与自动旋转 ---------------- */
modelEl.addEventListener('model-loaded', (event) => {
  const THREE = AFRAME.THREE;
  const obj = event.detail.model;
  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = 0.82 / maxDim;

  obj.scale.setScalar(scale);
  obj.position.set(-center.x * scale, -box.min.y * scale + 0.02, -center.z * scale);

  spinEl.emit('spinstart');
});

/* ---------------- 启动 AR ---------------- */
function describeCameraError(err) {
  const name = (err && err.name) || '';
  if (name === 'NotAllowedError' || name === 'SecurityError') {
    if (IS_WECHAT) {
      return '微信内置浏览器限制了摄像头权限。请点击右上角，选择“在浏览器打开”后再试。';
    }
    if (IN_IFRAME) {
      return '当前页面在预览框（iframe）中打开，浏览器禁止框内调用摄像头。请在页面右上角选择“在新标签页打开”后重试。';
    }
    return '摄像头权限被拒绝。请在浏览器地址栏的权限设置中允许摄像头，然后刷新重试。';
  }
  if (name === 'NotFoundError' || name === 'OverconstrainedError') {
    return '未检测到可用摄像头，请确认设备有后置摄像头。';
  }
  if (name === 'NotReadableError' || name === 'AbortError') {
    return '摄像头被其他应用占用，请关闭其他正在使用摄像头的应用后重试。';
  }
  return `摄像头启动失败：${(err && err.message) || name || '未知错误'}`;
}

let starting = false;

btnStart.addEventListener('click', async () => {
  if (starting) return;
  starting = true;

  startScreen.classList.add('is-hidden');
  scanHint.classList.remove('is-hidden');
  setStatus('正在检测摄像头…', false);

  // 1) 在用户手势内尝试申请摄像头（最多等待 3 秒）
  let camOk = false;
  try {
    const probe = await Promise.race([
      navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('camera-timeout')), 3000)),
    ]);
    probe.getTracks().forEach((t) => t.stop());
    camOk = true;
  } catch (err) {
    console.warn('[ar] 摄像头不可用:', err && (err.name || err.message));
    camOk = false;
  }

  // 2) 摄像头不可用：降级到模拟 AR
  if (!camOk) {
    scanHint.classList.add('is-hidden');
    await startSimulatedAR('浏览器摄像头权限不足，已进入模拟 AR 互动体验');
    starting = false;
    return;
  }

  // 3) 启动真实图像追踪
  setStatus('正在开启追踪…', false);

  const startTracking = async () => {
    arSystem = sceneEl.systems['mindar-image-system'];
    if (!arSystem) return false;
    try {
      const maybePromise = arSystem.start();
      if (maybePromise && typeof maybePromise.then === 'function') await maybePromise;
      return true;
    } catch (err) {
      console.warn('[ar] MindAR 启动失败:', err);
      return false;
    }
  };

  const ok = await startTracking();
  if (!ok) {
    scanHint.classList.add('is-hidden');
    await startSimulatedAR('实景追踪启动失败，已进入模拟 AR 互动体验');
    starting = false;
    return;
  }

  // 4) 进入扫描流程：10 秒内未识别到卡片，自动切换为实景 AR
  setStatus('扫描卡片', false);
  if (scanTimeout) clearTimeout(scanTimeout);
  scanTimeout = setTimeout(() => {
    scanTimeout = null;
    if (!realtimeMode) enterRealtimeAR('未识别到卡片，已切换为实景 AR');
  }, 5000);

  starting = false;
});

/* ---------------- 目标识别状态 ---------------- */
let scanTimeout = null;
let realtimeMode = false;

targetEl.addEventListener('targetFound', () => {
  if (scanTimeout) {
    clearTimeout(scanTimeout);
    scanTimeout = null;
  }
  setStatus('已识别 · 可互动', true);
  scanHint.classList.add('is-hidden');
  controls.classList.remove('is-hidden');
});

targetEl.addEventListener('targetLost', () => {
  setStatus('未识别到实体卡', false);
  scanHint.classList.remove('is-hidden');
  controls.classList.add('is-hidden');
  infoCard.classList.remove('is-show');
});

/* ---------------- 控制条 ---------------- */
function applyZoom() {
  scaleRoot.setAttribute('scale', `${zoom} ${zoom} ${zoom}`);
}

function exitAR() {
  infoCard.classList.remove('is-show');
  controls.classList.add('is-hidden');
  scanHint.classList.add('is-hidden');
  startScreen.classList.remove('is-hidden');
  setStatus('准备就绪', false);
  if (arSystem) {
    try { arSystem.stop(); } catch { /* 忽略停止异常 */ }
    arSystem = null;
  }
}

controls.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-act]');
  if (!btn) return;
  const act = btn.dataset.act;

  if (act === 'spin') {
    const comp = spinEl.components.animation;
    const playing = comp && comp.isPlaying;
    if (playing) {
      comp.pause();
      btn.classList.remove('on');
    } else if (comp && comp.resume) {
      comp.resume();
      btn.classList.add('on');
    } else {
      spinEl.emit('spinstart');
      btn.classList.add('on');
    }
  }

  if (act === 'zoom-in') {
    zoom = Math.min(2.2, zoom + 0.18);
    applyZoom();
  }

  if (act === 'zoom-out') {
    zoom = Math.max(0.5, zoom - 0.18);
    applyZoom();
  }

  if (act === 'info') {
    infoCard.classList.toggle('is-show');
  }

  if (act === 'exit') {
    exitAR();
  }
});

infoClose.addEventListener('click', () => infoCard.classList.remove('is-show'));

/* ---------------- 点击模型查看档案 ---------------- */
modelEl.classList.add('clickable');
modelEl.addEventListener('click', () => infoCard.classList.toggle('is-show'));

/* ---------------- 模拟 AR ---------------- */
const simCanvasEl = document.getElementById('sim-canvas');
const simControlsEl = document.getElementById('sim-controls');
const toastEl = document.getElementById('ar-toast');
const aSceneEl = document.querySelector('.ar-stage a-scene');

const sim = {
  gyroTried: false,
  renderer: null,
  scene: null,
  camera: null,
  model: null,
  modelHeight: 1,
  yaw: 0,
  pitch: 0.2,
  dist: 5.2,
  gyroOn: false,
  gyroYaw: 0,
  gyroPitch: 0,
  dragging: false,
  lastX: 0,
  lastY: 0,
  pinchDist: 0,
  raf: 0,
};

let toastTimer = null;
function showToast(text, duration = 3800) {
  toastEl.textContent = text;
  toastEl.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-show'), duration);
}

function initSimScene() {
  if (sim.scene) return;

  let renderer;
  try {
    // alpha: true 让实景模式下可以透出摄像头画面
    renderer = new THREE.WebGLRenderer({ canvas: simCanvasEl, antialias: true, alpha: true });
  } catch (err) {
    throw new Error('浏览器不支持 WebGL，无法渲染模拟场景');
  }
  renderer.setClearAlpha(0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  try {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;
  } catch { /* 环境贴图失败不影响基础渲染 */ }

  scene.add(new THREE.HemisphereLight(0xcfe0ff, 0x0d0f14, 2.1));

  const key = new THREE.DirectionalLight(0xfff2dc, 2.6);
  key.position.set(4, 7.5, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 26;
  key.shadow.camera.left = -6;
  key.shadow.camera.right = 6;
  key.shadow.camera.top = 6;
  key.shadow.camera.bottom = -6;
  key.shadow.bias = -0.0009;
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x9ab0d4, 0.85);
  rim.position.set(-5, 3.5, -5);
  scene.add(rim);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(18, 72),
    new THREE.MeshStandardMaterial({ color: 0x11141a, roughness: 0.55, metalness: 0.12 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ground.visible = false;
  scene.add(ground);

  const grid = new THREE.PolarGridHelper(16, 16, 8, 72, 0x6b5a38, 0x24211a);
  grid.material.transparent = true;
  grid.material.opacity = 0.55;
  grid.position.y = 0.004;
  grid.visible = false;
  scene.add(grid);

  const camera = new THREE.PerspectiveCamera(46, 1, 0.05, 240);
  Object.assign(sim, { renderer, scene, camera, ground, grid });

  resizeSim();
  sim.modelHeight = 1.6;
  updateSimCamera();
}

/* 切换实景 / 虚拟两种显示模式 */
function setSimMode(mode) {
  if (!sim.scene) return;
  const real = mode === 'real';
  sim.realMode = real;

  // 实景：透明背景（透出摄像头）；虚拟：纯黑背景
  sim.scene.background = real ? null : new THREE.Color(0x000000);
  sim.scene.fog = null;
  if (sim.ground) sim.ground.visible = false;
  if (sim.grid) sim.grid.visible = false;
  if (sim.renderer) sim.renderer.setClearAlpha(0);
}

let simLoader = null;
function getSimLoader() {
  if (!simLoader) {
    const draco = new DRACOLoader();
    draco.setDecoderPath('/draco/');
    simLoader = new GLTFLoader();
    simLoader.setDRACOLoader(draco);
  }
  return simLoader;
}

async function loadSimModel() {
  const loader = getSimLoader();
  const gltf = await Promise.race([
    new Promise((resolve, reject) => loader.load('/architecture/changcheng.glb', resolve, undefined, reject)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('模型加载超时，请检查网络后重试')), 25000)),
  ]);

  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const s = 2.6 / maxDim;
  model.scale.setScalar(s);
  model.position.set(-center.x * s, -box.min.y * s, -center.z * s);
  model.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    if (node.material) node.material.envMapIntensity = 1.1;
  });

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(1.62, 1.7, 96),
    new THREE.MeshBasicMaterial({ color: 0xc9a45c, transparent: true, opacity: 0.42, side: THREE.DoubleSide }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.006;

  sim.scene.add(model);
  sim.scene.add(ring);

  sim.model = model;
  sim.modelHeight = size.y * s;
  updateSimCamera();
}

function updateSimCamera() {
  if (!sim.camera) return;
  const yaw = sim.yaw + sim.gyroYaw;
  const pitch = THREE.MathUtils.clamp(sim.pitch + sim.gyroPitch, -0.12, 1.15);
  const r = sim.dist;
  const targetY = sim.modelHeight * 0.42;
  sim.camera.position.set(
    Math.sin(yaw) * Math.cos(pitch) * r,
    Math.sin(pitch) * r + targetY,
    Math.cos(yaw) * Math.cos(pitch) * r,
  );
  sim.camera.lookAt(0, targetY, 0);
}

function onOrientation(e) {
  if (!sim.gyroOn) return;
  const alpha = e.alpha == null ? 0 : e.alpha;
  const beta = e.beta == null ? 0 : e.beta;
  sim.gyroYaw = -THREE.MathUtils.degToRad(alpha);
  sim.gyroPitch = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(beta - 50, -45, 45)) * 0.7;
  updateSimCamera();
}

async function enableGyro() {
  try {
    if (typeof DeviceOrientationEvent !== 'undefined'
      && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res !== 'granted') return false;
    }
    window.addEventListener('deviceorientation', onOrientation);
    return true;
  } catch {
    return false;
  }
}

function resizeSim() {
  if (!sim.renderer || !sim.camera) return;
  let w = simCanvasEl.clientWidth;
  let h = simCanvasEl.clientHeight;
  if (!w || !h) {
    w = window.innerWidth || 360;
    h = window.innerHeight || 640;
  }
  sim.renderer.setSize(w, h, false);
  sim.camera.aspect = w / h;
  sim.camera.updateProjectionMatrix();
}

function simLoop() {
  if (!sim.scene || simCanvasEl.hidden) {
    sim.raf = 0;
    return;
  }
  sim.renderer.render(sim.scene, sim.camera);
  sim.raf = requestAnimationFrame(simLoop);
}

let simBound = false;
function bindSimGestures() {
  if (simBound) return;
  simBound = true;

  simCanvasEl.addEventListener('pointerdown', (e) => {
    sim.dragging = true;
    sim.lastX = e.clientX;
    sim.lastY = e.clientY;
    try { simCanvasEl.setPointerCapture(e.pointerId); } catch { /* 忽略 */ }
  });

  simCanvasEl.addEventListener('pointermove', (e) => {
    if (!sim.dragging) return;
    const dx = e.clientX - sim.lastX;
    const dy = e.clientY - sim.lastY;
    sim.lastX = e.clientX;
    sim.lastY = e.clientY;
    sim.yaw -= dx * 0.006;
    sim.pitch = THREE.MathUtils.clamp(sim.pitch + dy * 0.004, -0.1, 1.0);
    updateSimCamera();
  });

  const endDrag = () => { sim.dragging = false; };
  simCanvasEl.addEventListener('pointerup', endDrag);
  simCanvasEl.addEventListener('pointercancel', endDrag);

  simCanvasEl.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 2) return;
    e.preventDefault();
    const d = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY,
    );
    if (!sim.pinchDist) {
      sim.pinchDist = d;
      return;
    }
    const ratio = sim.pinchDist / d;
    sim.dist = THREE.MathUtils.clamp(sim.dist * (1 + (ratio - 1) * 0.5), 2.4, 11);
    sim.pinchDist = d;
    updateSimCamera();
  }, { passive: false });

  simCanvasEl.addEventListener('touchend', () => { sim.pinchDist = 0; });

  window.addEventListener('resize', () => {
    if (!simCanvasEl.hidden) resizeSim();
  });
}

/* 实景 AR：摄像头画面作背景，模型叠加，无需识别基准图 */
async function enterRealtimeAR(reason) {
  if (realtimeMode) return;
  realtimeMode = true;

  if (scanTimeout) {
    clearTimeout(scanTimeout);
    scanTimeout = null;
  }

  scanHint.classList.add('is-hidden');
  simControlsEl.hidden = false;
  simCanvasEl.hidden = false;

  // 保留 a-scene（其中承载摄像头 video），隐藏并暂停 A-Frame 渲染以省性能
  if (aSceneEl) aSceneEl.style.display = '';
  const aCanvas = document.querySelector('.ar-stage .a-canvas');
  if (aCanvas) aCanvas.style.display = 'none';
  try { if (aSceneEl && typeof aSceneEl.pause === 'function') aSceneEl.pause(); } catch { /* 忽略 */ }

  if (!sim.scene) {
    setStatus('正在准备实景场景…', false);
    try {
      initSimScene();
    } catch (err) {
      console.warn('[ar] 实景场景初始化失败:', err);
      showFallback(err.message || '实景场景初始化失败');
      return;
    }
  }

  setSimMode('real');
  bindSimGestures();
  if (!sim.raf) simLoop();

  setStatus('实景 AR 模式', true);
  showToast(reason || '已切换为实景 AR', 4200);

  if (!sim.gyroTried) {
    sim.gyroTried = true;
    const ok = await enableGyro();
    sim.gyroOn = ok;
    const gyroBtn = simControlsEl.querySelector('[data-sim="gyro"]');
    if (gyroBtn) gyroBtn.classList.toggle('on', ok);
  }

  if (!sim.model && !simModelPromise) {
    simModelPromise = loadSimModel()
      .then(() => setStatus('实景 AR 模式', true))
      .catch((err) => {
        console.warn('[ar] 实景模型加载失败:', err);
        showToast(err && err.message ? err.message : '模型加载失败，请检查网络', 4200);
      })
      .finally(() => { simModelPromise = null; });
  }
}

let simModelPromise = null;

async function startSimulatedAR(message) {
  showToast(message, 4800);
  simCanvasEl.hidden = false;
  if (aSceneEl) aSceneEl.style.display = 'none';
  simControlsEl.hidden = false;
  startScreen.classList.add('is-hidden');
  scanHint.classList.add('is-hidden');

  // 1) 先建立场景（地面 / 网格 / 灯光）并立即开始渲染，避免黑屏
  if (!sim.scene) {
    setStatus('正在准备模拟场景…', false);
    try {
      initSimScene();
    } catch (err) {
      console.warn('[ar] 模拟场景初始化失败:', err);
      showFallback(err.message || '模拟场景初始化失败');
      return;
    }
    if (!sim.raf) simLoop();
  }

  setSimMode('virtual');
  bindSimGestures();
  setStatus('模拟 AR 模式', true);

  // 2) 陀螺仪（仅尝试一次）
  if (!sim.gyroTried) {
    sim.gyroTried = true;
    const ok = await enableGyro();
    sim.gyroOn = ok;
    const gyroBtn = simControlsEl.querySelector('[data-sim="gyro"]');
    if (gyroBtn) gyroBtn.classList.toggle('on', ok);
    if (!ok) showToast('未获得陀螺仪权限，可用手指拖动环视模型', 3400);
  }

  // 3) 异步加载模型，不阻塞地面与网格的显示
  if (!sim.model && !simModelPromise) {
    setStatus('正在加载长城模型…', false);
    simModelPromise = loadSimModel()
      .then(() => setStatus('模拟 AR 模式', true))
      .catch((err) => {
        console.warn('[ar] 模拟模型加载失败:', err);
        showToast(err && err.message ? err.message : '模型加载失败，请检查网络', 4200);
        setStatus('模型加载失败', false);
      })
      .finally(() => { simModelPromise = null; });
  }
}

function exitSimulatedAR() {
  simCanvasEl.hidden = true;
  simControlsEl.hidden = true;
  realtimeMode = false;
  if (aSceneEl) aSceneEl.style.display = '';
  const aCanvas = document.querySelector('.ar-stage .a-canvas');
  if (aCanvas) aCanvas.style.display = '';
  try { if (aSceneEl && typeof aSceneEl.play === 'function') aSceneEl.play(); } catch { /* 忽略 */ }
  if (sim.raf) { cancelAnimationFrame(sim.raf); sim.raf = 0; }
  sim.gyroOn = false;
  sim.gyroYaw = 0;
  sim.gyroPitch = 0;
  setStatus('准备就绪', false);
  startScreen.classList.remove('is-hidden');
}

simControlsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-sim]');
  if (!btn) return;
  const act = btn.dataset.sim;

  if (act === 'reset') {
    sim.yaw = 0;
    sim.pitch = 0.2;
    sim.dist = 5.2;
    sim.gyroYaw = 0;
    sim.gyroPitch = 0;
    updateSimCamera();
  }

  if (act === 'gyro') {
    if (sim.gyroOn) {
      sim.gyroOn = false;
      btn.classList.remove('on');
      sim.gyroYaw = 0;
      sim.gyroPitch = 0;
      updateSimCamera();
      showToast('已关闭陀螺仪，改用手指拖动环视', 2600);
    } else {
      enableGyro().then((ok) => {
        sim.gyroOn = ok;
        btn.classList.toggle('on', ok);
        showToast(ok ? '陀螺仪已开启，转动手机环视模型' : '未获得陀螺仪权限', 3000);
      });
    }
  }

  if (act === 'info') {
    infoCard.classList.toggle('is-show');
  }

  if (act === 'exit') {
    infoCard.classList.remove('is-show');
    exitSimulatedAR();
  }
});

/* ---------------- 页面隐藏时停止采集 ---------------- */
document.addEventListener('visibilitychange', () => {
  if (document.hidden && arSystem) {
    try { arSystem.stop(); } catch { /* 忽略 */ }
    arSystem = null;
    controls.classList.add('is-hidden');
    scanHint.classList.add('is-hidden');
    startScreen.classList.remove('is-hidden');
    setStatus('已暂停', false);
  }
});
