import './disassembly.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const GOLD = 0xc9a45c;
const MODEL_URL = '/draco_model/turbine-v8.glb';
const PART_NAMES = ['中心转轴', '涡轮叶片组', '顶部机匣', '内层套筒'];

const canvas = document.getElementById('scene');
const loaderEl = document.getElementById('loader');
const progressEl = document.getElementById('loader-progress');
const partListEl = document.getElementById('part-list');
const partCountEl = document.getElementById('part-count');
const explodeBtn = document.getElementById('explode-btn');
const resetBtn = document.getElementById('reset-btn');
const rotateBtn = document.getElementById('rotate-btn');
const hoverTag = document.getElementById('hover-tag');

/* ---------------- 渲染器 ---------------- */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 400);
camera.position.set(-8.4, 4.8, 10.4);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = false;
controls.autoRotate = false;

/* ---------------- 光照与环境 ---------------- */
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;
scene.add(new THREE.HemisphereLight(0xbcd0ea, 0x0a0c10, 0.6));

const key = new THREE.DirectionalLight(0xfff0d8, 1.7);
key.position.set(5, 8, 6);
scene.add(key);

const rim = new THREE.DirectionalLight(0x6fa8ff, 1.1);
rim.position.set(-6, 2, -7);
scene.add(rim);

/* ---------------- 科技感网格 ---------------- */
const gridFine = new THREE.GridHelper(60, 120, 0x2f6ea8, 0x1d2a38);
gridFine.material.transparent = true;
gridFine.material.opacity = 0.5;
scene.add(gridFine);

const gridBold = new THREE.GridHelper(60, 12, 0x4f9fd8, 0x2c3e52);
gridBold.material.transparent = true;
gridBold.material.opacity = 0.32;
scene.add(gridBold);

/* ---------------- 状态 ---------------- */
const parts = [];
const partByMesh = new Map();
const tweens = [];
const allMeshes = [];
let modelRadius = 1;
let exploded = false;
let modelHolder = null;
let hovered = null;
let pointerX = 0;
let pointerY = 0;
let pointerInside = false;

const pointer = new THREE.Vector2(-10, -10);
const raycaster = new THREE.Raycaster();

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function tweenVec(vec, target, duration) {
  tweens.push({ vec, from: vec.clone(), to: target.clone(), elapsed: 0, duration });
}

function tweenNumber(holder, key, target, duration) {
  tweens.push({ number: true, holder, key, from: holder[key], to: target, elapsed: 0, duration });
}

/* ---------------- 高亮 ---------------- */
function setHighlight(group, on) {
  group.traverse((node) => {
    if (!node.isMesh || !node.material) return;
    if (on) {
      if (node.material.emissive) node.material.emissive.setHex(GOLD);
      node.material.emissiveIntensity = 0.65;
    } else {
      const base = node.userData.baseEmissive;
      if (base && node.material.emissive) {
        node.material.emissive.copy(base.emissive);
        node.material.emissiveIntensity = base.intensity;
      }
    }
  });
}

function setHover(group, fromList = false) {
  if (hovered === group) return;
  if (hovered) {
    setHighlight(hovered, false);
    const prev = partByMesh.get(hovered);
    if (prev && prev.item) prev.item.classList.remove('is-active');
  }

  hovered = group;

  if (hovered) {
    setHighlight(hovered, true);
    const record = partByMesh.get(hovered);
    if (record && record.item) record.item.classList.add('is-active');
    hoverTag.textContent = record ? record.name : '';
    if (!fromList) {
      hoverTag.style.left = `${pointerX}px`;
      hoverTag.style.top = `${pointerY}px`;
      hoverTag.classList.add('is-show');
    }
  } else {
    hoverTag.classList.remove('is-show');
  }
}

/* ---------------- 拆解 / 还原 ---------------- */
function fitCamera() {
  const span = exploded ? modelRadius * 2 + parts.length * 0.8 : modelRadius * 2;
  const dist = Math.max(8, exploded ? span * 2.4 : modelRadius * 8);
  const dir = camera.position.clone().sub(controls.target);
  if (dir.lengthSq() < 1e-6) dir.set(-0.6, 0.34, 0.72);
  dir.normalize().multiplyScalar(dist);
  tweenVec(camera.position, dir.add(controls.target), 900);
}

function setExploded(next) {
  exploded = next;
  parts.forEach((part) => {
    tweenNumber(part.mesh.position, 'z', exploded ? part.offsetZ : 0, 950);
  });
  explodeBtn.textContent = exploded ? '还原' : '拆解';
  explodeBtn.classList.toggle('is-exploded', exploded);
  fitCamera();
}

/* ---------------- 加载 ---------------- */
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

partCountEl.textContent = '加载中';

gltfLoader.load(MODEL_URL, onLoaded, onProgress, onError);

function onProgress(event) {
  if (!event.total) return;
  const pct = Math.min(100, Math.round((event.loaded / event.total) * 100));
  progressEl.style.width = `${pct}%`;
}

function onError(err) {
  console.error('[disassembly] 模型加载失败:', err);
  loaderEl.querySelector('.loader-title').textContent = '模型加载失败，请刷新重试';
}

function onLoaded(gltf) {
  const root = gltf.scene;
  root.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(root);
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  modelRadius = Math.max(size.x, size.y, size.z) * 0.5;

  const built = [];
  root.traverse((node) => {
    if (!node.isMesh) return;
    const geo = node.geometry.clone();
    node.updateWorldMatrix(true, false);
    geo.applyMatrix4(node.matrixWorld);

    const mat = node.material.clone();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.baseEmissive = {
      emissive: mat.emissive ? mat.emissive.clone() : new THREE.Color(0, 0, 0),
      intensity: mat.emissiveIntensity ?? 1,
    };

    const b = new THREE.Box3().setFromObject(mesh);
    built.push({
      mesh,
      centerY: b.getCenter(new THREE.Vector3()).y - center.y,
      size: b.getSize(new THREE.Vector3()),
    });
  });

  built.sort((a, b) => a.centerY - b.centerY);

  const holder = new THREE.Group();
  holder.position.sub(center);
  scene.add(holder);
  modelHolder = holder;

  const n = built.length;
  const gap = Math.max(0.8, modelRadius * 1.1);

  built.forEach((item, i) => {
    holder.add(item.mesh);

    const record = {
      mesh: item.mesh,
      name: PART_NAMES[i] || `部件 ${String(i + 1).padStart(2, '0')}`,
      offsetZ: (i - (n - 1) / 2) * gap,
      home: item.mesh.position.clone(),
      size: `${item.size.x.toFixed(2)} × ${item.size.y.toFixed(2)} × ${item.size.z.toFixed(2)}`,
      item: null,
    };

    parts.push(record);
    partByMesh.set(item.mesh, record);
    allMeshes.push(item.mesh);
  });

  buildPartList();

  gridFine.position.y = box.min.y - center.y - 0.4;
  gridBold.position.y = gridFine.position.y + 0.001;

  const dist = Math.max(8, modelRadius * 8);
  camera.position.set(-dist * 0.6, dist * 0.34, dist * 0.72);
  controls.target.set(0, 0, 0);
  controls.minDistance = modelRadius * 2.4;
  controls.maxDistance = modelRadius * 24;

  partCountEl.textContent = `${parts.length} 个`;
  loaderEl.classList.add('is-hidden');
  setTimeout(() => {
    loaderEl.style.display = 'none';
  }, 600);

  animate();

  // 默认处于拆解状态
  setExploded(true);
}

function buildPartList() {
  partListEl.innerHTML = '';

  parts.forEach((record, i) => {
    const item = document.createElement('div');
    item.className = 'part-item';

    const index = document.createElement('span');
    index.className = 'part-index';
    index.textContent = String(i + 1).padStart(2, '0');

    const body = document.createElement('div');
    body.className = 'part-body';

    const name = document.createElement('div');
    name.className = 'part-name';
    name.textContent = record.name;

    const meta = document.createElement('div');
    meta.className = 'part-meta';
    meta.textContent = record.size;

    body.append(name, meta);
    item.append(index, body);

    item.addEventListener('mouseenter', () => setHover(record.mesh, true));
    item.addEventListener('mouseleave', () => {
      if (hovered === record.mesh) setHover(null);
    });
    item.addEventListener('click', () => setHover(record.mesh, true));

    record.item = item;
    partListEl.appendChild(item);
  });
}

/* ---------------- 交互 ---------------- */
canvas.addEventListener('pointermove', (e) => {
  const rect = canvas.getBoundingClientRect();
  pointerX = e.clientX - rect.left;
  pointerY = e.clientY - rect.top;
  pointer.x = (pointerX / rect.width) * 2 - 1;
  pointer.y = -(pointerY / rect.height) * 2 + 1;
  pointerInside = true;
  if (hovered) {
    hoverTag.style.left = `${pointerX}px`;
    hoverTag.style.top = `${pointerY}px`;
  }
});

canvas.addEventListener('pointerleave', () => {
  pointerInside = false;
  pointer.set(-10, -10);
  setHover(null);
});

/* ---------------- 手势控制 ---------------- */
const gesturePanel = document.getElementById('gesture-panel');
const gestureToggle = document.getElementById('gesture-toggle');
const gestureView = document.getElementById('gesture-view');
const gestureVideo = document.getElementById('gesture-video');
const gestureStatus = document.getElementById('gesture-status');
const gesturePerm = document.getElementById('gesture-perm');

const MEDIAPIPE_BASE = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240';
const FINGER_TIPS = [8, 12, 16, 20];
const FINGER_PIPS = [6, 10, 14, 18];

let gestureOn = false;
let mediapipeReady = false;
let handsInstance = null;
let cameraStream = null;
let lastFist = false;
let targetRotY = 0;

function loadMediaPipe() {
  if (window.Hands) return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `${MEDIAPIPE_BASE}/hands.js`;
    s.crossOrigin = 'anonymous';
    s.onload = () => resolve(true);
    s.onerror = () => reject(new Error('mediapipe load failed'));
    document.head.appendChild(s);
  });
}

const gestureOverlay = document.getElementById('gesture-overlay');
const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20],
  [0, 17],
];

function drawHandOverlay(lm) {
  if (!gestureOverlay) return;
  const vw = gestureVideo.clientWidth || 200;
  const vh = gestureVideo.clientHeight || 132;
  if (gestureOverlay.width !== vw || gestureOverlay.height !== vh) {
    gestureOverlay.width = vw;
    gestureOverlay.height = vh;
  }

  const ctx = gestureOverlay.getContext('2d');
  const w = gestureOverlay.width;
  const h = gestureOverlay.height;
  ctx.clearRect(0, 0, w, h);
  if (!lm) return;

  ctx.strokeStyle = 'rgba(227, 201, 143, 0.85)';
  ctx.lineWidth = Math.max(1.5, w * 0.006);
  ctx.beginPath();
  HAND_CONNECTIONS.forEach(([a, b]) => {
    ctx.moveTo(lm[a].x * w, lm[a].y * h);
    ctx.lineTo(lm[b].x * w, lm[b].y * h);
  });
  ctx.stroke();

  ctx.fillStyle = '#e3c98f';
  lm.forEach((p, i) => {
    const r = (i === 4 || i === 8) ? w * 0.018 : w * 0.01;
    ctx.beginPath();
    ctx.arc(p.x * w, p.y * h, r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function onHandResults(results) {
  const list = results.multiHandLandmarks;
  const lm = list && list.length ? list[0] : null;

  drawHandOverlay(lm);

  if (!lm) {
    lastFist = false;
    return;
  }

  targetRotY = (lm[9].x - 0.5) * Math.PI * 1.6;

  let extended = 0;
  for (let i = 0; i < 4; i += 1) {
    if (lm[FINGER_TIPS[i]].y < lm[FINGER_PIPS[i]].y) extended += 1;
  }
  const fist = extended <= 1;
  if (fist && !lastFist) setExploded(!exploded);
  lastFist = fist;
}

async function pumpFrames() {
  if (!gestureOn || !mediapipeReady || !handsInstance) return;
  try {
    if (gestureVideo.readyState >= 2) await handsInstance.send({ image: gestureVideo });
  } catch {
    /* 忽略单帧识别错误 */
  }
  requestAnimationFrame(pumpFrames);
}

async function startGesture() {
  gestureView.hidden = false;
  gesturePerm.hidden = true;
  gestureVideo.hidden = false;
  gestureStatus.textContent = '正在请求摄像头…';

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 },
      audio: false,
    });
    gestureVideo.srcObject = cameraStream;
    await gestureVideo.play();
  } catch (err) {
    gestureVideo.hidden = true;
    gestureStatus.textContent = '未获得摄像头权限';
    gesturePerm.hidden = false;
    console.warn('[disassembly] 摄像头不可用:', err.message);
    return;
  }

  gestureStatus.textContent = '正在加载识别模型…';
  let ok = false;
  try {
    ok = await loadMediaPipe();
  } catch {
    ok = false;
  }

  if (!ok || !window.Hands) {
    gestureStatus.textContent = '识别模型加载失败（需联网）';
    return;
  }

  handsInstance = new window.Hands({ locateFile: (f) => `${MEDIAPIPE_BASE}/${f}` });
  handsInstance.setOptions({
    maxNumHands: 1,
    modelComplexity: 0,
    minDetectionConfidence: 0.6,
    minTrackingConfidence: 0.6,
  });
  handsInstance.onResults(onHandResults);

  mediapipeReady = true;
  gestureStatus.textContent = '手势已开启';
  pumpFrames();
}

function stopGesture() {
  gestureOn = false;
  mediapipeReady = false;
  handsInstance = null;
  lastFist = false;
  gestureToggle.classList.remove('is-on');
  gestureToggle.setAttribute('aria-pressed', 'false');
  gestureView.hidden = true;
  if (cameraStream) {
    cameraStream.getTracks().forEach((t) => t.stop());
    cameraStream = null;
  }
  gestureVideo.srcObject = null;
}

function showGestureIdle() {
  gestureOn = true;
  gestureToggle.classList.add('is-on');
  gestureToggle.setAttribute('aria-pressed', 'true');
  gestureView.hidden = false;
  gestureVideo.hidden = true;
  gestureStatus.textContent = '未获得摄像头权限';
  gesturePerm.hidden = false;
}

gesturePerm.addEventListener('click', () => startGesture());

/* 拖动：按住按钮移动可自由摆放，未移动则视为点击开关 */
let dragState = null;
let suppressClick = false;

gestureToggle.addEventListener('pointerdown', (e) => {
  dragState = {
    x: e.clientX,
    y: e.clientY,
    moved: false,
    left: gesturePanel.offsetLeft,
    top: gesturePanel.offsetTop,
  };
  gestureToggle.setPointerCapture(e.pointerId);
});

gestureToggle.addEventListener('pointermove', (e) => {
  if (!dragState) return;
  const dx = e.clientX - dragState.x;
  const dy = e.clientY - dragState.y;
  if (!dragState.moved && Math.hypot(dx, dy) < 4) return;
  dragState.moved = true;
  suppressClick = true;
  gesturePanel.style.left = `${dragState.left + dx}px`;
  gesturePanel.style.top = `${dragState.top + dy}px`;
  gesturePanel.style.right = 'auto';
  gesturePanel.style.bottom = 'auto';
});

gestureToggle.addEventListener('pointerup', () => {
  dragState = null;
});

gestureToggle.addEventListener('click', () => {
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  if (gestureOn) {
    stopGesture();
    return;
  }
  showGestureIdle();
});

// 默认进入即处于激活状态，等待用户授权摄像头
showGestureIdle();

explodeBtn.addEventListener('click', () => setExploded(!exploded));

/* ---------------- 网格线稿（网格模式） ---------------- */
const wireBtn = document.getElementById('wire-btn');
let wireOn = false;

function setWireMode(on) {
  allMeshes.forEach((mesh) => {
    if (!mesh.material) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((m) => {
      if (!m) return;
      if (on) {
        if (m.userData.__wireColor === undefined && m.color) {
          m.userData.__wireColor = m.color.getHex();
        }
        m.wireframe = true;
        if (m.color) m.color.set(0xc9a45c);
      } else {
        m.wireframe = false;
        if (m.color && m.userData.__wireColor !== undefined) {
          m.color.setHex(m.userData.__wireColor);
        }
      }
      m.needsUpdate = true;
    });
  });

  wireOn = on;
  wireBtn.textContent = on ? '退出网格模式' : '加载网格线稿';
  wireBtn.classList.toggle('is-on', on);
}

wireBtn.addEventListener('click', () => {
  setWireMode(!wireOn);
});

resetBtn.addEventListener('click', () => {
  const dist = Math.max(8, modelRadius * 8);
  tweenVec(camera.position, new THREE.Vector3(-dist * 0.6, dist * 0.34, dist * 0.72), 700);
  tweenVec(controls.target, new THREE.Vector3(0, 0, 0), 700);
});

rotateBtn.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  rotateBtn.classList.toggle('is-on', controls.autoRotate);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setHover(null);
});

/* ---------------- 自适应 ---------------- */
function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(canvas);
resize();

/* ---------------- 主循环 ---------------- */
let lastTime = performance.now();

function animate(now = performance.now()) {
  const delta = Math.min(100, Math.max(0, now - lastTime));
  lastTime = now;

  for (let i = tweens.length - 1; i >= 0; i -= 1) {
    const tw = tweens[i];
    tw.elapsed += delta;
    const t = Math.min(1, tw.elapsed / tw.duration);
    const e = easeOutCubic(t);

    if (tw.number) {
      tw.holder[tw.key] = tw.from + (tw.to - tw.from) * e;
    } else {
      tw.vec.lerpVectors(tw.from, tw.to, e);
    }
    if (t >= 1) tweens.splice(i, 1);
  }

  if (pointerInside && allMeshes.length) {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(allMeshes, false);
    if (hits.length) {
      let node = hits[0].object;
      while (node && !partByMesh.has(node)) node = node.parent;
      setHover(node || null);
    } else {
      setHover(null);
    }
  }

  // 手势控制：手掌水平移动带动模型旋转
  if (gestureOn && modelHolder) {
    modelHolder.rotation.y += (targetRotY - modelHolder.rotation.y) * 0.08;
  }

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
