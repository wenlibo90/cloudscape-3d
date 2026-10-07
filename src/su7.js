import './su7.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const COLORS = [
  { name: '海湾蓝', hex: '#29bed1' },
  { name: '橄榄绿', hex: '#7b7a5e' },
  { name: '寒武岩灰', hex: '#a0a0a0' },
  { name: '珍珠白', hex: '#cdcdcd' },
  { name: '霞光紫', hex: '#5e586e' },
  { name: '熔岩橙', hex: '#fe6c48' },
  { name: '星空蓝', hex: '#1db4fe' },
  { name: '深海蓝', hex: '#1f5da4' },
  { name: '曜石黑', hex: '#393939' },
];

const BODY_MATERIAL = 'Car_body';

/* ---------------- 渲染器与场景 ---------------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 600);
camera.position.set(6.6, 3, 6.4);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.78, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = false;
controls.minDistance = 4.2;
controls.maxDistance = 24;
controls.minPolarAngle = 0.18;
controls.maxPolarAngle = Math.PI / 2 - 0.03;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.55;

/* ---------------- 灯光 ---------------- */
scene.add(new THREE.HemisphereLight(0xffffff, 0x14141a, 0.3));

const keyLight = new THREE.DirectionalLight(0xfff1d8, 1.6);
keyLight.position.set(5.5, 8, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 30;
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -8;
keyLight.shadow.bias = -0.0008;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x9fb8ff, 0.55);
rimLight.position.set(-6, 4, -6);
scene.add(rimLight);

const frontLight = new THREE.DirectionalLight(0xffffff, 0.45);
frontLight.position.set(0.5, 3.4, 9);
scene.add(frontLight);

/* ---------------- 环境光照 ---------------- */
const pmrem = new THREE.PMREMGenerator(renderer);
pmrem.compileEquirectangularShader();
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

new RGBELoader().load(
  '/su7/textures/t_env_light.hdr',
  (hdr) => {
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    const env = pmrem.fromEquirectangular(hdr).texture;
    scene.environment = env;
    hdr.dispose();
  },
  undefined,
  () => {},
);

/* ---------------- 地面 ---------------- */
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(18, 72),
  new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.42, metalness: 0.12 }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const grid = new THREE.PolarGridHelper(13, 12, 7, 72, 0x6b5a38, 0x2a2418);
grid.material.transparent = true;
grid.material.opacity = 0.42;
grid.position.y = 0.006;
scene.add(grid);

/* ---------------- UI ---------------- */
const paintList = document.getElementById('paint-list');
const paintName = document.getElementById('paint-name');
const paintHex = document.getElementById('paint-hex');
const paintDot = document.getElementById('paint-dot');
const loading = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const hint = document.getElementById('hint');

let activeIndex = -1;

COLORS.forEach((color, index) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'swatch';
  btn.title = `${color.name} ${color.hex.toUpperCase()}`;
  btn.innerHTML = `<span class="swatch-chip" style="background:${color.hex}"></span><span class="swatch-name">${color.name}</span>`;
  btn.addEventListener('click', () => selectPaint(index));
  paintList.appendChild(btn);
});

let paintMaterial = null;
let carRef = null;

function applyPaint(hex) {
  const color = new THREE.Color().setStyle(hex, THREE.SRGBColorSpace);
  if (paintMaterial) {
    paintMaterial.color.copy(color);
    paintMaterial.needsUpdate = true;
  }
}

function selectPaint(index) {
  const color = COLORS[index];
  if (!color) return;
  activeIndex = index;

  applyPaint(color.hex);
  paintName.textContent = color.name;
  paintHex.textContent = color.hex.toUpperCase();
  paintDot.style.background = color.hex;

  [...paintList.children].forEach((node, i) => node.classList.toggle('is-active', i === index));
  hint.classList.add('is-hidden');
}

/* ---------------- 载入车辆 ---------------- */
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);

loader.load(
  '/su7/models/sm_car.gltf',
  (gltf) => {
    const car = gltf.scene;

    car.traverse((node) => {
      if (!node.isMesh || !node.material) return;
      node.castShadow = true;
      node.receiveShadow = false;

      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((mat) => {
        mat.envMapIntensity = 1.05;
        if (mat.name === BODY_MATERIAL) {
          paintMaterial = mat;
          mat.metalness = 0.78;
          mat.roughness = 0.26;
          mat.envMapIntensity = 1.5;
          mat.aoMapIntensity = 0.1;
          mat.needsUpdate = true;
        }
      });
    });

    const box = new THREE.Box3().setFromObject(car);
    const center = new THREE.Vector3();
    box.getCenter(center);
    car.position.x -= center.x;
    car.position.z -= center.z;
    car.position.y -= box.min.y;

    scene.add(car);
    carRef = car;

    const size = new THREE.Vector3();
    box.getSize(size);
    controls.target.set(0, size.y * 0.42, 0);
    controls.minDistance = size.length() * 0.55;
    controls.maxDistance = size.length() * 2.4;
    camera.position.set(size.x * 1.05, size.y * 0.92, size.z * 2.6);
    controls.update();

    selectPaint(0);
    loading.classList.add('is-done');
  },
  (event) => {
    if (event.total) {
      loadingText.textContent = `正在加载车辆模型… ${Math.round((event.loaded / event.total) * 100)}%`;
    }
  },
  (err) => {
    console.error('[su7] 模型加载失败:', err);
    loadingText.textContent = '模型加载失败，请刷新重试';
  },
);

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
let gestureTargetRotY = 0;

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

  gestureTargetRotY = (lm[9].x - 0.5) * Math.PI * 2;
  controls.autoRotate = false;

  let extended = 0;
  for (let i = 0; i < 4; i += 1) {
    if (lm[FINGER_TIPS[i]].y < lm[FINGER_PIPS[i]].y) extended += 1;
  }
  const fist = extended <= 1;
  if (fist && !lastFist) selectPaint((activeIndex + 1) % COLORS.length);
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
    console.warn('[su7] 摄像头不可用:', err.message);
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

let dragState = null;
let suppressClick = false;

gestureToggle.addEventListener('pointerdown', (e) => {
  dragState = {
    x: e.clientX,
    y: e.clientY,
    left: gesturePanel.offsetLeft,
    top: gesturePanel.offsetTop,
  };
  gestureToggle.setPointerCapture(e.pointerId);
});

gestureToggle.addEventListener('pointermove', (e) => {
  if (!dragState) return;
  const dx = e.clientX - dragState.x;
  const dy = e.clientY - dragState.y;
  if (Math.hypot(dx, dy) < 4) return;
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

// 默认进入即展开并处于激活状态，等待用户授权摄像头
showGestureIdle();

/* ---------------- 交互与渲染 ---------------- */
controls.addEventListener('start', () => {
  if (!gestureOn) controls.autoRotate = false;
  hint.classList.add('is-hidden');
});

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

const clock = new THREE.Clock();
let idleTimer = null;

function animate() {
  const delta = Math.min(0.05, clock.getDelta());

  if (mediapipeReady && carRef) {
    carRef.rotation.y += (gestureTargetRotY - carRef.rotation.y) * 0.08;
  }

  if (!controls.autoRotate && !mediapipeReady) {
    idleTimer = (idleTimer || 0) + delta;
    if (idleTimer > 6) {
      controls.autoRotate = true;
      idleTimer = null;
    }
  } else {
    idleTimer = null;
  }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
