import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PRODUCTS } from './data/products.js';

const canvas = document.getElementById('scene');
const labelsRoot = document.getElementById('labels');
const dock = document.getElementById('dock');
const infoPanel = document.getElementById('info-panel');
const infoBody = document.getElementById('info-body');
const loaderEl = document.getElementById('loader');
const loaderBar = document.getElementById('loader-progress');
const loaderText = document.getElementById('loader-text');

const PEDESTAL_HEIGHT = 0.34;
const LAYOUT = [
  { x: -2.25, z: -0.3 },
  { x: -0.75, z: 0.14 },
  { x: 0.75, z: 0.14 },
  { x: 2.25, z: -0.3 },
];

/* ---------------- 渲染器 / 场景 ---------------- */
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0c0f);
scene.fog = new THREE.Fog(0x0a0c0f, 7.5, 22);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 200);
const OVERVIEW_POS = new THREE.Vector3(0.15, 1.72, 5.15);
const OVERVIEW_TARGET = new THREE.Vector3(0, 0.96, 0);
camera.position.copy(OVERVIEW_POS);

const controls = new OrbitControls(camera, canvas);
controls.target.copy(OVERVIEW_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.enablePan = false;
controls.minDistance = 2.2;
controls.maxDistance = 11;
controls.minPolarAngle = 0.34;
controls.maxPolarAngle = Math.PI * 0.495;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.32;
controls.update();

/* ---------------- 环境光照 ---------------- */
const pmrem = new THREE.PMREMGenerator(renderer);
const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;
scene.environment = envTexture;

const hemi = new THREE.HemisphereLight(0xcdd8e8, 0x15130f, 0.3);
scene.add(hemi);

const keyLight = new THREE.DirectionalLight(0xfff2dc, 0.5);
keyLight.position.set(3.5, 6, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 25;
keyLight.shadow.camera.left = -7;
keyLight.shadow.camera.right = 7;
keyLight.shadow.camera.top = 7;
keyLight.shadow.camera.bottom = -7;
keyLight.shadow.bias = -0.0006;
keyLight.shadow.normalBias = 0.02;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x7ea3dc, 0.45);
rimLight.position.set(-4, 3.2, -4.5);
scene.add(rimLight);

/* ---------------- 展馆建筑 ---------------- */
const hallRadius = 13;
const hall = new THREE.Mesh(
  new THREE.CylinderGeometry(hallRadius, hallRadius, 9, 64, 1, true),
  new THREE.MeshStandardMaterial({
    color: 0x12151a,
    roughness: 0.94,
    metalness: 0.0,
    side: THREE.BackSide,
    envMapIntensity: 0.3,
  })
);
hall.position.y = 4.5;
scene.add(hall);

const floor = new THREE.Mesh(
  new THREE.CircleGeometry(hallRadius, 72),
  new THREE.MeshStandardMaterial({
    color: 0x0a0c10,
    roughness: 0.24,
    metalness: 0.4,
    envMapIntensity: 0.5,
  })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

const ceil = new THREE.Mesh(
  new THREE.CircleGeometry(hallRadius, 72),
  new THREE.MeshStandardMaterial({ color: 0x0d0f13, roughness: 0.95, side: THREE.DoubleSide })
);
ceil.rotation.x = Math.PI / 2;
ceil.position.y = 8.9;
scene.add(ceil);

const glowRing = new THREE.Mesh(
  new THREE.RingGeometry(0.6, 3.6, 64),
  new THREE.MeshBasicMaterial({
    color: 0x2b3a56,
    transparent: true,
    opacity: 0.14,
    side: THREE.DoubleSide,
  })
);
glowRing.rotation.x = -Math.PI / 2;
glowRing.position.y = 0.012;
scene.add(glowRing);

/* ---------------- 展台 ---------------- */
const pedestalMat = new THREE.MeshStandardMaterial({
  color: 0x1c1f25,
  roughness: 0.55,
  metalness: 0.15,
  envMapIntensity: 0.6,
});
const pedestalTopMat = new THREE.MeshStandardMaterial({
  color: 0x2a2e36,
  roughness: 0.4,
  metalness: 0.2,
  envMapIntensity: 0.8,
});
const trimMat = new THREE.MeshStandardMaterial({
  color: 0xc9a45c,
  roughness: 0.35,
  metalness: 0.8,
  emissive: 0x3a2c10,
  emissiveIntensity: 0.5,
});

const spotLights = [];

function createPedestal(x, z, index) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 0.06, 56), pedestalMat);
  base.position.y = 0.03;
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, PEDESTAL_HEIGHT - 0.13, 56), pedestalMat);
  body.position.y = 0.06 + (PEDESTAL_HEIGHT - 0.13) / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.605, 0.007, 12, 64), trimMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = PEDESTAL_HEIGHT - 0.075;
  group.add(ring);

  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.6, 0.05, 56), pedestalTopMat);
  top.position.y = PEDESTAL_HEIGHT - 0.025;
  top.castShadow = true;
  top.receiveShadow = true;
  group.add(top);

  const light = new THREE.SpotLight(0xffe6c2, 50, 6.5, Math.PI / 8.5, 0.5, 1.7);
  light.position.set(x + 0.12, 4.6, z + 0.8);
  light.target.position.set(x, PEDESTAL_HEIGHT + 0.5, z);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  light.shadow.bias = -0.0012;
  light.shadow.normalBias = 0.02;
  scene.add(light);
  scene.add(light.target);
  spotLights.push(light);

  return group;
}

/* ---------------- 展品状态 ---------------- */
const placements = [];
const clickable = [];
let loadedCount = 0;

/* ---------------- UI：底部导航 ---------------- */
function buildDock() {
  PRODUCTS.forEach((product, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dock-item';
    btn.dataset.index = String(index);
    btn.innerHTML = `<span class="dock-name">${product.name}</span><span class="dock-year">${product.year}</span>`;
    btn.addEventListener('click', () => selectProduct(index, true));
    dock.appendChild(btn);
  });
}

function buildLabels() {
  PRODUCTS.forEach((product, index) => {
    const el = document.createElement('div');
    el.className = 'label';
    el.dataset.index = String(index);
    el.innerHTML = `<span class="label-name">${product.name}</span><span class="label-year">${product.year}</span>`;
    labelsRoot.appendChild(el);
  });
}

/* ---------------- 信息面板 ---------------- */
function renderInfo(product) {
  infoBody.innerHTML = `
    <div class="info-accent" style="background:${product.accent}"></div>
    <div class="info-year">${product.year} · ${product.category}</div>
    <h2 class="info-name">${product.name}</h2>
    <div class="info-en">${product.brand} · 型号 ${product.model}</div>
    <p class="info-tagline">${product.tagline}</p>

    <div class="info-section">藏品故事</div>
    <p class="info-desc">${product.story}</p>

    <div class="info-section">技术亮点</div>
    <div class="info-highlights">
      ${(product.highlights || []).map((h) => `<span class="highlight">${h}</span>`).join('')}
    </div>

    <div class="info-section">主要参数</div>
    <div class="info-specs">
      ${product.specs
        .map(
          (s) =>
            `<div class="spec"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`
        )
        .join('')}
    </div>
  `;
}

function openInfo(index) {
  renderInfo(PRODUCTS[index]);
  infoPanel.classList.add('is-open');
  infoPanel.setAttribute('aria-hidden', 'false');
  document.body.classList.add('panel-open');
}

function closeInfo() {
  infoPanel.classList.remove('is-open');
  infoPanel.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('panel-open');
}

/* ---------------- 相机动画 ---------------- */
const cameraGoal = new THREE.Vector3();
const targetGoal = new THREE.Vector3();
let animating = false;
let activeIndex = -1;

function focusCamera(index) {
  const p = placements[index];
  if (!p) return;
  const lookY = p.centerY;
  const bias = window.innerWidth > 900 ? 0.28 : 0;
  targetGoal.set(p.x + bias, lookY, p.z);
  cameraGoal.set(p.x, lookY + 0.38, p.z + p.focusDistance);
  animating = true;
  controls.autoRotate = false;
}

function resetCamera() {
  activeIndex = -1;
  updateActiveUI();
  closeInfo();
  cameraGoal.copy(OVERVIEW_POS);
  targetGoal.copy(OVERVIEW_TARGET);
  animating = true;
  controls.autoRotate = false;
}

function selectProduct(index, fromUI) {
  activeIndex = index;
  updateActiveUI();
  focusCamera(index);
  openInfo(index);
  if (fromUI) controls.autoRotate = false;
}

function updateActiveUI() {
  dock.querySelectorAll('.dock-item').forEach((el, i) => {
    el.classList.toggle('is-active', i === activeIndex);
  });
  labelsRoot.querySelectorAll('.label').forEach((el, i) => {
    el.classList.toggle('is-active', i === activeIndex);
  });
}

/* ---------------- 交互 ---------------- */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDown = { x: 0, y: 0, time: 0 };

canvas.addEventListener('pointerdown', (e) => {
  pointerDown = { x: e.clientX, y: e.clientY, time: performance.now() };
});

canvas.addEventListener('pointerup', (e) => {
  const dx = e.clientX - pointerDown.x;
  const dy = e.clientY - pointerDown.y;
  if (Math.hypot(dx, dy) > 6) return;
  if (performance.now() - pointerDown.time > 700) return;

  const rect = canvas.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(clickable, true);
  if (hits.length > 0) {
    let node = hits[0].object;
    while (node && node.userData.productIndex === undefined) node = node.parent;
    if (node) {
      selectProduct(node.userData.productIndex, true);
      return;
    }
  }
  if (infoPanel.classList.contains('is-open')) closeInfo();
});

controls.addEventListener('start', () => {
  animating = false;
  controls.autoRotate = false;
});

document.getElementById('reset-view').addEventListener('click', resetCamera);
document.getElementById('close-panel').addEventListener('click', closeInfo);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeInfo();
});

/* ---------------- 加载模型 ---------------- */
const manager = new THREE.LoadingManager();
manager.onProgress = (_url, loaded, total) => {
  const pct = Math.round((loaded / total) * 100);
  loaderBar.style.width = `${pct}%`;
};
manager.onLoad = () => {
  loaderEl.classList.add('is-hidden');
  setTimeout(() => {
    loaderEl.style.display = 'none';
  }, 800);
};

const gltfLoader = new GLTFLoader(manager);
let ready = false;

function createStaticTexture() {
  const size = 256;
  const canvasTex = document.createElement('canvas');
  canvasTex.width = size;
  canvasTex.height = size;
  const ctx = canvasTex.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 90 + Math.random() * 150;
    img.data[i] = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
  for (let y = 0; y < size; y += 4) ctx.fillRect(0, y, size, 2);
  const texture = new THREE.CanvasTexture(canvasTex);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function applyScreenStatic(model) {
  const glowMesh = model.getObjectByName('CRTScreenGlow');
  if (!glowMesh) return;
  const texture = createStaticTexture();
  glowMesh.material = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: 0xffffff,
    emissiveMap: texture,
    emissiveIntensity: 0.42,
    roughness: 0.45,
    metalness: 0.05,
  });
}

function loadProduct(product, index) {
  return new Promise((resolve) => {
    const layout = LAYOUT[index];
    const pedestal = createPedestal(layout.x, layout.z, index);
    scene.add(pedestal);

    gltfLoader.load(
      `/models/${product.id}.glb`,
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) child.material.envMapIntensity = 1.05;
          }
        });

        if (product.id === 'tv') applyScreenStatic(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);

        model.position.set(layout.x, PEDESTAL_HEIGHT, layout.z);
        model.userData.productIndex = index;
        scene.add(model);

        placements[index] = {
          x: layout.x,
          z: layout.z,
          topY: PEDESTAL_HEIGHT + size.y,
          centerY: PEDESTAL_HEIGHT + size.y * 0.52,
          focusDistance: 1.55 + size.y * 0.35,
        };
        clickable.push(model);
        loadedCount += 1;
        resolve();
      },
      undefined,
      (err) => {
        console.error(`加载 ${product.id} 失败`, err);
        loaderText.textContent = `模型 ${product.id} 加载失败`;
        resolve();
      }
    );
  });
}

async function init() {
  buildDock();
  buildLabels();
  await Promise.all(PRODUCTS.map((p, i) => loadProduct(p, i)));
  ready = true;
  if (loadedCount === 0) {
    loaderText.textContent = '未能加载任何模型';
  } else {
    loaderEl.classList.add('is-hidden');
    setTimeout(() => {
      loaderEl.style.display = 'none';
    }, 800);
  }
  requestAnimationFrame(animate);
}

/* ---------------- 主循环 ---------------- */
const tmpVec = new THREE.Vector3();
const labelEls = () => labelsRoot.children;

function updateLabels() {
  const els = labelEls();
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const p = placements[i];
    if (!p) {
      el.style.opacity = '0';
      continue;
    }
    tmpVec.set(p.x, p.topY + 0.16, p.z).project(camera);
    const inFront = tmpVec.z < 1;
    const x = (tmpVec.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-tmpVec.y * 0.5 + 0.5) * window.innerHeight;
    el.style.opacity = inFront ? '1' : '0';
    el.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
  }
}

function animate() {
  requestAnimationFrame(animate);
  if (animating) {
    camera.position.lerp(cameraGoal, 0.12);
    controls.target.lerp(targetGoal, 0.14);
    if (camera.position.distanceTo(cameraGoal) < 0.015) animating = false;
  }
  controls.update();
  updateLabels();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
