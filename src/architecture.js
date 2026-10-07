import './architecture.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const BUILDINGS = [
  {
    id: 'changcheng',
    name: '长城',
    en: 'Great Wall',
    tags: ['世界文化遗产', '明代', '北京 · 八达岭'],
    desc: '东起鸭绿江，西至嘉峪关，明长城全长约 8851 公里，是现存规模最大的古代军事防御工程，也是世界文化遗产。',
    points: ['城墙依山就势，砖石砌筑，随山脊起伏', '敌楼与烽火台构成完整的军事预警体系', '八达岭段保存完好，是明长城的代表'],
    specs: [['始建', '春秋战国'], ['现存', '明长城'], ['长度', '约 8851 km']],
  },
  /* --- 其他场景模型就绪后，删除成对注释标记即可接入
  {
    id: 'gugong',
    name: '故宫',
    en: 'Forbidden City',
    tags: ['世界文化遗产', '明清', '北京'],
    desc: '建成于明永乐十八年（1420 年），占地约 72 万平方米，是中国现存规模最大、保存最完整的木质结构古建筑群。',
    points: ['中轴对称的宫殿格局，前朝后寝', '太和殿三层汉白玉台基，重檐庑殿顶', '黄琉璃瓦与红墙形成鲜明的礼制秩序'],
    specs: [['建成', '1420 年'], ['占地', '约 72 万㎡'], ['房屋', '约 9000 间']],
  },
  {
    id: 'huanghelou',
    name: '黄鹤楼',
    en: 'Yellow Crane Tower',
    tags: ['江南名楼', '始建于三国', '武汉'],
    desc: '始建于三国时期，与岳阳楼、滕王阁并称江南三大名楼。现楼于 1985 年重建，五层飞檐，通高约 51.4 米。',
    points: ['攒尖顶五层楼阁，层层飞檐翘角', '登楼俯瞰长江与武汉三镇', '历代文人题咏，文化积淀深厚'],
    specs: [['始建', '三国时期'], ['重建', '1985 年'], ['通高', '约 51.4 m']],
  },
  {
    id: 'mogao',
    name: '莫高窟',
    en: 'Mogao Caves',
    tags: ['世界文化遗产', '十六国至元', '敦煌'],
    desc: '始建于十六国时期，现存洞窟 735 个，壁画约 4.5 万平方米，彩塑 2400 余身，是世界上现存规模最大的佛教石窟艺术宝库。',
    points: ['洞窟开凿于鸣沙山东麓崖壁', '壁画与彩塑跨越十余个朝代', '藏经洞文献震惊世界'],
    specs: [['现存洞窟', '735 个'], ['壁画', '约 4.5 万㎡'], ['彩塑', '2400 余身']],
  },
  --- */
  {
    id: 'potala',
    name: '布达拉宫',
    en: 'Potala Palace',
    src: '/api/models/raw/potala.glb',
    fitScale: 0.8,
    tags: ['世界文化遗产', '藏式建筑', '拉萨'],
    desc: '始建于公元 7 世纪，坐落于拉萨红山之上，海拔约 3700 米，主楼高 117 米，是藏式宫堡建筑的杰出典范。',
    points: ['红宫与白宫依山叠砌，错落有致', '厚墙窄窗，适应高原气候', '金顶与灵塔构成藏式建筑精华'],
    specs: [['始建', '公元 7 世纪'], ['海拔', '约 3700 m'], ['主楼高', '117 m']],
  },
  /* --- 其他场景模型就绪后，删除成对注释标记即可接入
  {
    id: 'tiantan',
    name: '天坛',
    en: 'Temple of Heaven',
    tags: ['世界文化遗产', '明清', '北京'],
    desc: '明清两代皇帝祭天祈谷之所，建于明永乐十八年（1420 年）。祈年殿三重檐圆形大殿，是中国古代祭祀建筑的巅峰之作。',
    points: ['祈年殿三层蓝色琉璃檐，象征天穹', '圜丘坛以九为基数，体现天圆地方', '回音壁与三音石运用声学原理'],
    specs: [['始建', '1420 年'], ['占地', '约 273 万㎡'], ['祈年殿高', '38 m']],
  },
  {
    id: 'tulou',
    name: '福建土楼',
    en: 'Fujian Tulou',
    tags: ['世界文化遗产', '宋元以来', '福建'],
    desc: '分布于福建西南山区的客家夯土民居，以圆形与方形为主，规模宏大、防御性强，2008 年被列入世界文化遗产。',
    points: ['生土夯筑外墙，冬暖夏凉', '圆形土楼中庭采光，聚族而居', '兼具居住与防御功能'],
    specs: [['起源', '宋元时期'], ['形制', '圆楼 / 方楼'], ['材质', '夯土'], ['最大直径', '约 70 m']],
  },
  --- */
];

/* ---------------- 渲染器与场景 ---------------- */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 600);
camera.position.set(4.6, 3.2, 5.6);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = false;
controls.minDistance = 2.4;
controls.maxDistance = 22;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = Math.PI / 2 - 0.04;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.55;
controls.target.set(0, 1.2, 0);

/* ---------------- 灯光与环境 ---------------- */
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

scene.add(new THREE.HemisphereLight(0xfff0d8, 0x0a0a0c, 0.75));

const keyLight = new THREE.DirectionalLight(0xfff1d8, 2.1);
keyLight.position.set(5, 8, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 30;
keyLight.shadow.camera.left = -6;
keyLight.shadow.camera.right = 6;
keyLight.shadow.camera.top = 6;
keyLight.shadow.camera.bottom = -6;
keyLight.shadow.bias = -0.0009;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xffd28c, 0.85);
rimLight.position.set(-6, 4, -6);
scene.add(rimLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
fillLight.position.set(0.5, 3, 8);
scene.add(fillLight);

/* ---------------- 地面 ---------------- */
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(20, 72),
  new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.5, metalness: 0.14 }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const ring = new THREE.Mesh(
  new THREE.RingGeometry(2.4, 2.52, 96),
  new THREE.MeshBasicMaterial({ color: 0xc9a45c, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
);
ring.rotation.x = -Math.PI / 2;
ring.position.y = 0.01;
scene.add(ring);

const grid = new THREE.PolarGridHelper(13, 12, 7, 72, 0x6b5a38, 0x2a2418);
grid.material.transparent = true;
grid.material.opacity = 0.36;
grid.position.y = 0.004;
scene.add(grid);

/* ---------------- 加载与切换 ---------------- */
const draco = new DRACOLoader();
draco.setDecoderPath('/draco/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

const holder = new THREE.Group();
scene.add(holder);

const TARGET = 3.4;
let currentModel = null;
let currentId = null;

const els = {
  panel: document.getElementById('info-panel'),
  no: document.getElementById('info-no'),
  name: document.getElementById('info-name'),
  en: document.getElementById('info-en'),
  tags: document.getElementById('info-tags'),
  desc: document.getElementById('info-desc'),
  points: document.getElementById('info-points'),
  specs: document.getElementById('info-specs'),
  dockList: document.getElementById('dock-list'),
  dockCount: document.getElementById('dock-count'),
  loading: document.getElementById('loading'),
  loadingText: document.getElementById('loading-text'),
  spin: document.getElementById('spin-btn'),
  reset: document.getElementById('reset-btn'),
};

function fitModel(model, fitScale = 1) {
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = (TARGET * fitScale) / maxDim;
  model.scale.setScalar(scale);

  const box2 = new THREE.Box3().setFromObject(model);
  const center = new THREE.Vector3();
  box2.getCenter(center);
  model.position.x -= center.x;
  model.position.z -= center.z;
  model.position.y -= box2.min.y;

  const box3 = new THREE.Box3().setFromObject(model);
  const size3 = new THREE.Vector3();
  box3.getSize(size3);
  return { height: size3.y, radius: Math.max(size3.x, size3.z) / 2 };
}

function updatePanel(item, index) {
  els.no.textContent = String(index + 1).padStart(2, '0');
  els.name.textContent = item.name;
  els.en.textContent = item.en;
  els.desc.textContent = item.desc;

  els.tags.innerHTML = '';
  item.tags.forEach((t) => {
    const span = document.createElement('span');
    span.textContent = t;
    els.tags.appendChild(span);
  });

  els.points.innerHTML = '';
  item.points.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = p;
    els.points.appendChild(li);
  });

  els.specs.innerHTML = '';
  item.specs.forEach(([label, value]) => {
    const div = document.createElement('div');
    div.innerHTML = `<label>${label}</label><b>${value}</b>`;
    els.specs.appendChild(div);
  });

  updateNarrator(item);
}

function buildDock() {
  els.dockCount.textContent = `${BUILDINGS.length} 座`;
  BUILDINGS.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `dock-item${index === 0 ? ' is-active' : ''}`;
    btn.innerHTML = `<i>${String(index + 1).padStart(2, '0')}</i>${item.name}`;
    btn.addEventListener('click', () => select(item.id));
    els.dockList.appendChild(btn);
  });
}

function setActive(id) {
  [...els.dockList.children].forEach((node, i) => {
    node.classList.toggle('is-active', BUILDINGS[i].id === id);
  });
}

function select(id) {
  if (id === currentId) return;
  const index = BUILDINGS.findIndex((b) => b.id === id);
  if (index < 0) return;
  const item = BUILDINGS[index];

  setActive(id);
  // 立即更新介绍卡片，不等待模型加载
  updatePanel(item, index);
  controls.autoRotate = false;

  if (currentModel) {
    holder.remove(currentModel);
    currentModel.traverse((node) => {
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
    currentModel = null;
  }

  currentId = id;

  loader.load(
    item.src || `/architecture/${item.id}.glb`,
    (gltf) => {
      const model = gltf.scene;
      model.traverse((node) => {
        if (!node.isMesh) return;
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) node.material.envMapIntensity = 1.1;
      });

      const info = fitModel(model, item.fitScale || 1);
      holder.add(model);
      currentModel = model;

      const dist = Math.max(4.2, info.height * 1.85);
      controls.target.set(0, info.height * 0.45, 0);
      camera.position.set(dist * 0.62, info.height * 0.72 + 0.6, dist * 0.78);
      controls.minDistance = Math.max(2.2, info.height * 0.6);
      controls.maxDistance = Math.max(10, info.height * 5);
      controls.autoRotate = els.spin.classList.contains('is-on');
      controls.update();

      els.loading.classList.add('is-done');
    },
    (event) => {
      if (event.total) {
        els.loadingText.textContent = `正在加载 ${item.name}… ${Math.round((event.loaded / event.total) * 100)}%`;
      }
    },
    (err) => {
      console.warn('[architecture] 模型加载失败:', err && err.message);
      els.loadingText.textContent = '模型加载失败，请刷新重试';
    },
  );
}

buildDock();

/* ---------------- 工具栏 ---------------- */
els.spin.addEventListener('click', () => {
  setSpin(!controls.autoRotate);
});

els.reset.addEventListener('click', () => {
  const box = new THREE.Box3().setFromObject(holder);
  const size = new THREE.Vector3();
  box.getSize(size);
  const dist = Math.max(4.2, size.y * 1.85);
  controls.target.set(0, size.y * 0.45, 0);
  camera.position.set(dist * 0.62, size.y * 0.72 + 0.6, dist * 0.78);
  controls.update();
});

// 点击模型：切换自动旋转；拖动：暂停旋转
let pointerStart = null;
let pointerMoved = false;

function setSpin(on) {
  controls.autoRotate = on;
  els.spin.classList.toggle('is-on', on);
}

canvas.addEventListener('pointerdown', (e) => {
  pointerStart = { x: e.clientX, y: e.clientY };
  pointerMoved = false;
});

window.addEventListener('pointermove', (e) => {
  if (!pointerStart || pointerMoved) return;
  if (Math.hypot(e.clientX - pointerStart.x, e.clientY - pointerStart.y) > 6) {
    pointerMoved = true;
    if (controls.autoRotate) setSpin(false);
  }
});

window.addEventListener('pointerup', () => {
  if (pointerStart && !pointerMoved) {
    setSpin(!controls.autoRotate);
  }
  pointerStart = null;
  pointerMoved = false;
});

/* ---------------- 自适应与渲染 ---------------- */
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

function animate() {
  clock.getDelta();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

/* ---------------- 扫码进入 AR 互动 ---------------- */
const qrModal = document.getElementById('qr-modal');
const qrCanvas = document.getElementById('qr-canvas');
const qrUrlEl = document.getElementById('qr-url');
const nfcPanel = document.querySelector('.nfc-panel');
const qrClose = document.getElementById('qr-close');

let qrRendered = false;

function roundRect(ctx, x, y, w, h, rad) {
  const r = Math.min(rad, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function renderQR() {
  if (qrRendered) return;
  const mod = await import('qrcode-generator');
  const qrcode = mod.default || mod;

  const url = `${window.location.origin}/ar.html`;
  qrUrlEl.textContent = url.replace(/^https?:\/\//, '');

  const qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  const count = qr.getModuleCount();

  const size = qrCanvas.clientWidth || 188;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  qrCanvas.width = Math.round(size * dpr);
  qrCanvas.height = Math.round(size * dpr);

  const ctx = qrCanvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#f6f0e2';
  ctx.fillRect(0, 0, size, size);

  const pad = size * 0.055;
  const cell = (size - pad * 2) / count;
  ctx.fillStyle = '#241c0e';
  for (let row = 0; row < count; row += 1) {
    for (let col = 0; col < count; col += 1) {
      if (!qr.isDark(row, col)) continue;
      roundRect(
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
  qrRendered = true;
}

function openQr() {
  qrModal.hidden = false;
  renderQR();
}

function closeQr() {
  qrModal.hidden = true;
}


if (nfcPanel) nfcPanel.addEventListener('click', () => openQr());


qrClose.addEventListener('click', () => closeQr());
qrModal.querySelector('.qr-mask').addEventListener('click', () => closeQr());
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !qrModal.hidden) closeQr();
});


/* ---------------- 语音播报（档案卡内） ---------------- */
const voiceBtn = document.getElementById('info-voice');

let narratorBuilding = null;
let narratorVoice = null;

function pickZhVoice() {
  const synth = window.speechSynthesis;
  if (!synth) return null;
  const voices = synth.getVoices() || [];
  return voices.find((v) => /^zh/i.test(v.lang))
    || voices.find((v) => /Chinese|中文|普通话|Putonghua/i.test(v.name))
    || null;
}

function buildNarration(item) {
  const points = Array.isArray(item.points) && item.points.length
    ? `建筑看点：${item.points.join('；')}。`
    : '';
  return `${item.name}。${item.desc}${points}你可以在三维场景中自由旋转、缩放，查看这座建筑的细节。`;
}

function setNarratorSpeaking(on) {
  if (!voiceBtn) return;
  voiceBtn.classList.toggle('is-on', on);
}

function stopNarration() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  setNarratorSpeaking(false);
}

function speakNarration() {
  if (!narratorBuilding) return;

  const synth = window.speechSynthesis;
  if (!synth) return;

  if (synth.speaking) {
    stopNarration();
    return;
  }

  if (!narratorVoice) narratorVoice = pickZhVoice();

  const u = new SpeechSynthesisUtterance(buildNarration(narratorBuilding));
  u.lang = 'zh-CN';
  u.rate = 1;
  u.pitch = 1;
  if (narratorVoice) u.voice = narratorVoice;

  u.onstart = () => setNarratorSpeaking(true);
  u.onend = () => setNarratorSpeaking(false);
  u.onerror = () => setNarratorSpeaking(false);

  synth.speak(u);
}

function updateNarrator(item) {
  narratorBuilding = item;
  stopNarration();
}

if (voiceBtn) voiceBtn.addEventListener('click', speakNarration);
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => { narratorVoice = pickZhVoice(); };
}

select(BUILDINGS[0].id);
