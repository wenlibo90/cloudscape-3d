import './solar.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/* ---------------- 行星数据（真实参数） ---------------- */
const PLANETS = [
  {
    id: 'mercury', name: '水星', en: 'Mercury', type: '类地行星', modelUrl: '/solar/Mercury_1_4878.glb',
    color: 0x9a8d80, radius: 1.7, orbit: 26, period: 0.241, spin: 0.05,
    desc: '距离太阳最近、体积最小的行星。表面几乎没有大气保护，布满陨石坑，昼夜温差达到八大行星之最。',
    stats: [['直径', '4,879 km'], ['距日平均', '0.39 AU'], ['公转周期', '88 天'], ['自转周期', '58.6 天'], ['表面温度', '-173 ~ 427 ℃'], ['卫星数量', '0 颗']],
    facts: ['轨道速度约 47.4 km/s，是太阳系中最快的行星', '一个太阳日长达 176 个地球日，比它的一年还长', '拥有巨大的铁质核心，占体积的约 55%'],
  },
  {
    id: 'venus', name: '金星', en: 'Venus', type: '类地行星', model: 'Venussurface_1_12103',
    color: 0xd8a86a, radius: 2.2, orbit: 38, period: 0.615, spin: -0.02,
    desc: '地球的“姐妹星”，大小与质量最接近地球，却是太阳系最炽热的行星。浓密的二氧化碳大气造成极端温室效应，地表温度足以熔化铅。',
    stats: [['直径', '12,104 km'], ['距日平均', '0.72 AU'], ['公转周期', '225 天'], ['自转周期', '243 天（逆向）'], ['表面温度', '约 464 ℃'], ['大气成分', 'CO₂ 96.5%']],
    facts: ['自转方向与多数行星相反，在金星上太阳从西边升起', '表面气压约为地球的 92 倍，相当于地球海面下 900 米', '云层由硫酸液滴构成，反照率极高，是夜空中最亮的行星'],
  },
  {
    id: 'earth', name: '地球', en: 'Earth', type: '类地行星', modelUrl: '/solar/Earth_1_12756.glb',
    color: 0x3f7fc4, radius: 2.3, orbit: 50, period: 1, spin: 1,
    desc: '目前已知唯一存在生命的星球。液态水、适宜的温度与富含氧气的大气共同构成了复杂的生态系统。',
    stats: [['直径', '12,742 km'], ['距日平均', '1.00 AU'], ['公转周期', '365.25 天'], ['自转周期', '23 时 56 分'], ['平均温度', '约 15 ℃'], ['卫星数量', '1 颗']],
    facts: ['71% 的表面被海洋覆盖，因此被称为“蓝色星球”', '磁层屏蔽了大部分太阳风，保护大气与生命', '月球稳定了地轴倾角，使气候保持相对稳定'],
  },
  {
    id: 'mars', name: '火星', en: 'Mars', type: '类地行星', modelUrl: '/solar/PlanetMars.glb',
    color: 0xc1553a, radius: 1.8, orbit: 62, period: 1.881, spin: 0.97,
    desc: '表面富含氧化铁而呈红色，是人类探测最频繁的行星。极冠、沙尘暴与干涸河床暗示它曾经拥有液态水。',
    stats: [['直径', '6,779 km'], ['距日平均', '1.52 AU'], ['公转周期', '687 天'], ['自转周期', '24 时 37 分'], ['平均温度', '约 -63 ℃'], ['卫星数量', '2 颗']],
    facts: ['奥林帕斯山高约 22 km，是太阳系最高的火山', '水手号峡谷长达 4,000 km，远超地球任何峡谷', '两颗卫星火卫一、火卫二可能是被捕获的小行星'],
  },
  {
    id: 'jupiter', name: '木星', en: 'Jupiter', type: '气态巨行星', model: 'Jupiter_1_142984',
    color: 0xd8a878, radius: 6.6, orbit: 90, period: 11.86, spin: 2.4,
    desc: '太阳系中体积与质量最大的行星，质量超过其余七颗行星总和的两倍。没有固体表面，大气由氢和氦构成，带状云层中翻涌着持续数百年的风暴。',
    stats: [['直径', '139,820 km'], ['距日平均', '5.20 AU'], ['公转周期', '11.86 年'], ['自转周期', '9 时 56 分'], ['云顶温度', '约 -110 ℃'], ['已知卫星', '95 颗']],
    facts: ['大红斑是一个持续数百年的反气旋风暴，直径可容纳整个地球', '自转最快，赤道自转周期不足 10 小时', '强大的引力像“宇宙吸尘器”，为内太阳系拦截了大量彗星', '四颗伽利略卫星由伽利略于 1610 年发现，是首批被发现的地外卫星'],
  },
  {
    id: 'saturn', name: '土星', en: 'Saturn', type: '气态巨行星', ring: true, modelUrl: '/solar/saturn_paint_3d.glb',
    color: 0xd9c187, radius: 5.6, orbit: 114, period: 29.46, spin: 2.2,
    desc: '拥有太阳系中最壮观的行星环系统。环主要由冰粒与岩石碎屑构成，厚度仅数十米，却横跨数十万公里。',
    stats: [['直径', '116,460 km'], ['距日平均', '9.58 AU'], ['公转周期', '29.46 年'], ['自转周期', '10 时 42 分'], ['云顶温度', '约 -140 ℃'], ['已知卫星', '146 颗']],
    facts: ['平均密度小于水，是唯一“能够浮在水面”的行星', '环系宽度约 28 万公里，厚度却往往不足 1 公里', '土卫六是太阳系中唯一拥有浓密大气的卫星'],
  },
  {
    id: 'uranus', name: '天王星', en: 'Uranus', type: '冰巨星', modelUrl: '/solar/Uranus.glb',
    color: 0x8fd0d6, radius: 3.6, orbit: 138, period: 84.01, spin: -1.3,
    desc: '一颗“躺着”自转的冰巨星，自转轴几乎与公转平面平行。大气中的甲烷吸收红光，使其呈现青蓝色。',
    stats: [['直径', '50,724 km'], ['距日平均', '19.2 AU'], ['公转周期', '84.01 年'], ['自转周期', '17 时 14 分'], ['云顶温度', '约 -195 ℃'], ['已知卫星', '28 颗']],
    facts: ['自转轴倾角约 98°，几乎是横躺着绕太阳运行', '是首颗借助望远镜发现的行星（1781 年）', '拥有 13 条暗淡的行星环'],
  },
  {
    id: 'neptune', name: '海王星', en: 'Neptune', type: '冰巨星',
    color: 0x3f5fc4, radius: 3.4, orbit: 160, period: 164.8, spin: 1.2,
    desc: '距太阳最远的行星，也是风速最快的世界。大气中的甲烷与动态云带让它呈现深邃的蓝色。',
    stats: [['直径', '49,244 km'], ['距日平均', '30.05 AU'], ['公转周期', '164.8 年'], ['自转周期', '16 时 6 分'], ['云顶温度', '约 -200 ℃'], ['已知卫星', '16 颗']],
    facts: ['风速可超过 2,100 km/h，是太阳系中最猛烈的风暴', '是唯一先由数学计算预测、后被观测证实的行星', '最大卫星海卫一沿逆行轨道运行，可能是被捕获的柯伊伯带天体'],
  },
];

/* ---------------- 渲染器 ---------------- */
const canvas = document.getElementById('space');
const loaderEl = document.getElementById('loader');
const dockListEl = document.getElementById('dock-list');
const infoPanel = document.getElementById('info-panel');
const infoScroll = document.getElementById('info-scroll');
const infoClose = document.getElementById('info-close');
const playBtn = document.getElementById('play-btn');
const speedInput = document.getElementById('speed');
const speedVal = document.getElementById('speed-val');
const orbitBtn = document.getElementById('orbit-btn');
const hintEl = document.getElementById('hint');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.98;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 6000);
camera.position.set(0, 108, 220);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 8;
controls.maxDistance = 640;
controls.maxPolarAngle = Math.PI * 0.92;

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.75, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ---------------- 光照 ---------------- */
scene.add(new THREE.AmbientLight(0x3c4250, 0.95));
scene.add(new THREE.HemisphereLight(0x94a6c4, 0x1a1c22, 0.6));

const sunLight = new THREE.PointLight(0xfff0d0, 1450, 0, 1.6);
scene.add(sunLight);

const rim = new THREE.DirectionalLight(0x8a94a8, 0.5);
rim.position.set(-80, 40, -80);
scene.add(rim);

/* ---------------- 星空 ---------------- */
function buildStars() {
  const count = 5200;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [new THREE.Color(0xffffff), new THREE.Color(0xbcd4ff), new THREE.Color(0xffe6c2), new THREE.Color(0x9fd8ff)];

  for (let i = 0; i < count; i += 1) {
    const r = 620 + Math.random() * 900;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.cos(phi);
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

    const c = palette[Math.floor(Math.random() * palette.length)];
    const k = 0.55 + Math.random() * 0.45;
    colors[i * 3] = c.r * k;
    colors[i * 3 + 1] = c.g * k;
    colors[i * 3 + 2] = c.b * k;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 2.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    depthWrite: false,
  });

  scene.add(new THREE.Points(geo, mat));
}

buildStars();

/* ---------------- 太阳 ---------------- */
function makeSunTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffcf6a';
  ctx.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 1400; i += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 256;
    const r = Math.random() * 10 + 2;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(255,${200 + Math.floor(Math.random() * 55)},120,0.5)`);
    g.addColorStop(1, 'rgba(255,160,60,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const SUN_RADIUS = 9;

let sun = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_RADIUS, 64, 48),
  new THREE.MeshBasicMaterial({ map: makeSunTexture(), color: 0xffd487 })
);
scene.add(sun);





scene.add(new THREE.PointLight(0xffd9a0, 90, 0, 2).translateX(0));

/* ---------------- 行星纹理 ---------------- */
function makeTexture(planet) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext('2d');
  const base = new THREE.Color(planet.color);
  ctx.fillStyle = `#${base.getHexString()}`;
  ctx.fillRect(0, 0, 512, 256);

  const banded = ['jupiter', 'saturn'].includes(planet.id);
  const ice = ['uranus', 'neptune'].includes(planet.id);

  if (banded) {
    for (let y = 0; y < 256; y += 1) {
      const t = Math.sin(y * 0.12) * 0.5 + 0.5;
      const shade = 0.72 + t * 0.5;
      ctx.fillStyle = `rgba(${Math.floor(255 * shade)},${Math.floor(210 * shade)},${Math.floor(150 * shade)},0.5)`;
      ctx.fillRect(0, y, 512, 1);
    }
    if (planet.id === 'jupiter') {
      ctx.fillStyle = 'rgba(196,90,60,0.85)';
      ctx.beginPath();
      ctx.ellipse(330, 168, 46, 20, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (ice) {
    for (let i = 0; i < 60; i += 1) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.06})`;
      ctx.beginPath();
      ctx.ellipse(Math.random() * 512, Math.random() * 256, 40 + Math.random() * 70, 8 + Math.random() * 16, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    for (let i = 0; i < 260; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const r = Math.random() * 26 + 6;
      const light = Math.random() > 0.5;
      ctx.fillStyle = light ? `rgba(255,255,255,${Math.random() * 0.1})` : `rgba(0,0,0,${Math.random() * 0.16})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (planet.id === 'earth') {
      ctx.fillStyle = 'rgba(70,150,90,0.75)';
      for (let i = 0; i < 34; i += 1) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 512, 40 + Math.random() * 176, 16 + Math.random() * 40, 12 + Math.random() * 26, Math.random(), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(240,248,255,0.85)';
      ctx.fillRect(0, 0, 512, 12);
      ctx.fillRect(0, 244, 512, 12);
    }
    if (planet.id === 'mars') {
      ctx.fillStyle = 'rgba(240,244,250,0.8)';
      ctx.fillRect(0, 0, 512, 10);
      ctx.fillRect(0, 246, 512, 10);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/* ---------------- 构建行星 ---------------- */
const bodies = [];
const pickables = [];
const dockItems = new Map();

const orbitGroup = new THREE.Group();
scene.add(orbitGroup);

PLANETS.forEach((data, index) => {
  const pivot = new THREE.Group();
  pivot.rotation.x = 0;
  scene.add(pivot);

  const mat = new THREE.MeshStandardMaterial({
    map: makeTexture(data),
    roughness: 0.85,
    metalness: 0.05,
  });

  const mesh = new THREE.Mesh(new THREE.SphereGeometry(data.radius, 48, 36), mat);
  mesh.position.x = data.orbit;
  mesh.rotation.z = (Math.random() - 0.5) * 0.3;
  mesh.userData.planet = data;
  pivot.add(mesh);

  if (data.ring && !data.modelUrl) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(data.radius * 1.5, data.radius * 2.5, 96),
      new THREE.MeshBasicMaterial({ color: 0xd9c187, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
    );
    ring.rotation.x = Math.PI / 2 - 0.22;
    mesh.add(ring);
  }

  const orbitCurve = new THREE.EllipseCurve(0, 0, data.orbit, data.orbit, 0, Math.PI * 2);
  const orbitPoints = orbitCurve.getPoints(160).map((p) => new THREE.Vector3(p.x, 0, p.y));
  const orbitLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(orbitPoints),
    new THREE.LineBasicMaterial({ color: 0x3a5578, transparent: true, opacity: 0.5 })
  );
  orbitGroup.add(orbitLine);

  const record = {
    data,
    pivot,
    mesh,
    ring: data.ring && !data.modelUrl ? mesh.children[0] : null,
    orbitLine,
    angle: Math.random() * Math.PI * 2,
    speed: 1 / data.period,
    index,
  };

  bodies.push(record);
  pickables.push(mesh);

  const colorHex = `#${new THREE.Color(data.color).getHexString()}`;
  const dockThumb = document.createElement('span');
  dockThumb.className = 'dock-thumb';
  dockThumb.style.background = `radial-gradient(circle at 34% 30%, ${colorHex}, #05060d 78%)`;

  const item = document.createElement('div');
  item.className = 'dock-item';
  const name = document.createElement('span');
  name.className = 'dock-name';
  name.textContent = data.name;
  item.append(dockThumb, name);
  item.addEventListener('click', () => selectPlanet(record, true));
  dockListEl.appendChild(item);
  dockItems.set(data.id, item);
  record.dockThumb = dockThumb;
});

/* ---------------- 真实模型替换（金星 / 木星） ---------------- */
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

bodies.forEach((record) => {
  const url = record.data.modelUrl
    || (record.data.model ? `/draco_model/${record.data.model}.glb` : null);
  if (!url) return;

  gltfLoader.load(url, (gltf) => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = (record.data.radius * 2) / maxDim;

    model.position.sub(center);

    const wrapper = new THREE.Group();
    wrapper.add(model);
    wrapper.scale.setScalar(scale);
    wrapper.position.copy(record.mesh.position);
    wrapper.rotation.z = record.mesh.rotation.z;
    wrapper.userData.planetId = record.data.id;

    wrapper.traverse((node) => {
      if (!node.isMesh) return;
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      mats.forEach((m) => {
        if (!m) return;
        m.roughness = 0.88;
        m.metalness = 0.0;
        if (m.emissive) {
          m.emissive.setHex(0x000000);
          m.emissiveIntensity = 0;
        }
      });
      node.userData.planetId = record.data.id;
    });

    if (record.ring) {
      wrapper.add(record.ring);
      record.ring.position.set(0, 0, 0);
    }

    const oldMesh = record.mesh;
    record.pivot.add(wrapper);
    record.pivot.remove(oldMesh);
    oldMesh.geometry.dispose();

    pickables.splice(pickables.indexOf(oldMesh), 1);
    pickables.push(wrapper);

    record.mesh = wrapper;

    // 模型就绪后刷新缩略图，保证详情与列表展示真实模型
    thumbCache.delete(record.data.id);
    refreshOrb(record);
    refreshDockThumb(record);
  });
});

function refreshDockThumb(record) {
  if (!record.dockThumb) return;
  try {
    record.dockThumb.style.background = `url(${makeThumb(record)}) center / cover no-repeat`;
  } catch {
    /* 保留兜底色点 */
  }
}

/* ---------------- 太阳模型 ---------------- */
gltfLoader.load('/solar/sun.glb', (gltf) => {
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;

  model.position.sub(center);

  const wrapper = new THREE.Group();
  wrapper.add(model);
  wrapper.scale.setScalar((SUN_RADIUS * 2) / maxDim);

  wrapper.traverse((node) => {
    if (!node.isMesh) return;
    const mats = Array.isArray(node.material) ? node.material : [node.material];
    mats.forEach((m) => {
      if (!m) return;
      m.toneMapped = true;
      if (m.emissive) m.emissiveIntensity = 0.9;
    });
  });

  wrapper.rotation.z = 0.41;

  const old = sun;
  scene.remove(old);
  old.geometry.dispose();
  scene.add(wrapper);
  sun = wrapper;
  sun.traverse((node) => {
    if (node.isMesh) node.userData.isSun = true;
  });
});

/* ---------------- 离屏缩略图 ---------------- */
const thumbRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
thumbRenderer.setSize(160, 160);
thumbRenderer.setPixelRatio(2);
thumbRenderer.outputColorSpace = THREE.SRGBColorSpace;
thumbRenderer.toneMapping = THREE.ACESFilmicToneMapping;
thumbRenderer.toneMappingExposure = 1.1;

const thumbScene = new THREE.Scene();
thumbScene.environment = new THREE.PMREMGenerator(thumbRenderer).fromScene(new RoomEnvironment(), 0.05).texture;
thumbScene.add(new THREE.AmbientLight(0xffffff, 1.0));
const thumbKey = new THREE.DirectionalLight(0xfff2dc, 2.4);
thumbKey.position.set(4, 6, 5);
thumbScene.add(thumbKey);
const thumbFill = new THREE.DirectionalLight(0x9fc0ff, 0.8);
thumbFill.position.set(-5, 2, -4);
thumbScene.add(thumbFill);
const thumbCamera = new THREE.PerspectiveCamera(30, 1, 0.01, 4000);
const thumbCache = new Map();

function makeThumb(record) {
  if (thumbCache.has(record.data.id)) return thumbCache.get(record.data.id);

  const clone = record.mesh.clone(true);
  thumbScene.add(clone);

  const box = new THREE.Box3().setFromObject(clone);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const dist = (maxDim / 2 / Math.tan((thumbCamera.fov * Math.PI) / 360)) * 1.06;

  const dir = new THREE.Vector3(0.62, 0.28, 0.76).normalize();
  thumbCamera.position.copy(center).add(dir.multiplyScalar(dist));
  thumbCamera.lookAt(center);
  thumbCamera.updateProjectionMatrix();

  thumbRenderer.render(thumbScene, thumbCamera);
  const url = thumbRenderer.domElement.toDataURL('image/png');
  thumbScene.remove(clone);
  thumbCache.set(record.data.id, url);
  return url;
}

/* ---------------- 信息面板 ---------------- */
let selected = null;

function refreshOrb(record) {
  if (!selected || selected.data.id !== record.data.id) return;
  const orb = infoScroll.querySelector('.planet-orb');
  if (!orb) return;
  try {
    orb.style.backgroundImage = `url(${makeThumb(record)})`;
    orb.style.backgroundSize = 'cover';
    orb.style.backgroundPosition = 'center';
  } catch {
    /* 缩略图渲染失败时保留兜底样式 */
  }
}

function renderInfo(record) {
  const data = record.data;
  const colorHex = `#${new THREE.Color(data.color).getHexString()}`;
  infoScroll.innerHTML = '';

  const hero = document.createElement('div');
  hero.className = 'planet-hero';
  const orb = document.createElement('div');
  orb.className = 'planet-orb';
  try {
    orb.style.backgroundImage = `url(${makeThumb(record)})`;
    orb.style.backgroundSize = 'cover';
    orb.style.backgroundPosition = 'center';
  } catch (err) {
    console.warn('[solar] 缩略图渲染失败:', data.id, err && err.message);
    orb.style.background = `radial-gradient(circle at 34% 30%, ${colorHex}, #05070d 78%)`;
  }
  orb.style.setProperty('--glow', `${colorHex}66`);
  const title = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.textContent = data.name;
  const sp = document.createElement('span');
  sp.textContent = data.en.toUpperCase();
  title.append(h2, sp);
  hero.append(orb, title);
  infoScroll.appendChild(hero);

  const type = document.createElement('span');
  type.className = 'planet-type';
  type.textContent = data.type;
  infoScroll.appendChild(type);

  const desc = document.createElement('p');
  desc.className = 'planet-desc';
  desc.textContent = data.desc;
  infoScroll.appendChild(desc);

  const grid = document.createElement('div');
  grid.className = 'stat-grid';
  data.stats.forEach(([label, value]) => {
    const cell = document.createElement('div');
    cell.className = 'stat-cell';
    const l = document.createElement('label');
    l.textContent = label;
    const v = document.createElement('b');
    v.textContent = value;
    cell.append(l, v);
    grid.appendChild(cell);
  });
  infoScroll.appendChild(grid);

  const st = document.createElement('div');
  st.className = 'section-title';
  st.textContent = '科学看点';
  infoScroll.appendChild(st);

  const ul = document.createElement('ul');
  ul.className = 'fact-list';
  data.facts.forEach((fact) => {
    const li = document.createElement('li');
    li.textContent = fact;
    ul.appendChild(li);
  });
  infoScroll.appendChild(ul);
}

function selectPlanet(record, focus) {
  selected = record;

  dockItems.forEach((item, id) => item.classList.toggle('is-active', id === record.data.id));

  renderInfo(record);
  infoPanel.classList.add('is-open');
  infoPanel.setAttribute('aria-hidden', 'false');
  hintEl.style.opacity = '0';

  if (focus) focusPlanet(record);
}

function closeInfo() {
  selected = null;
  infoPanel.classList.remove('is-open');
  infoPanel.setAttribute('aria-hidden', 'true');
  hintEl.style.opacity = '';
  dockItems.forEach((item) => item.classList.remove('is-active'));
}

infoClose.addEventListener('click', closeInfo);

/* ---------------- 相机聚焦 ---------------- */
const camTween = { active: false, from: new THREE.Vector3(), to: new THREE.Vector3(), fromT: new THREE.Vector3(), toT: new THREE.Vector3(), t: 0, dur: 900 };
const lastFocusPos = new THREE.Vector3();

function focusPlanet(record) {
  const world = new THREE.Vector3();
  record.mesh.getWorldPosition(world);

  const r = record.data.radius;
  const dist = Math.max(r * 5.5, 6);

  // 相机偏向受光侧，避免只看到背光面
  const toSun = world.clone().multiplyScalar(-1).normalize();
  const side = new THREE.Vector3().crossVectors(toSun, new THREE.Vector3(0, 1, 0));
  if (side.lengthSq() < 1e-4) side.set(0, 0, 1);
  side.normalize();
  const dir = toSun
    .clone()
    .multiplyScalar(0.62)
    .add(side.multiplyScalar(0.4))
    .add(new THREE.Vector3(0, 0.3, 0))
    .normalize()
    .multiplyScalar(dist);

  camTween.from.copy(camera.position);
  camTween.to.copy(world).add(dir);
  camTween.fromT.copy(controls.target);
  camTween.toT.copy(world);
  camTween.t = 0;
  camTween.active = true;
}

/* ---------------- 拾取 ---------------- */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let downX = 0;
let downY = 0;

canvas.addEventListener('pointerdown', (e) => {
  downX = e.clientX;
  downY = e.clientY;
});

canvas.addEventListener('pointerup', (e) => {
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 5) return;
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(pickables, true);
  if (!hits.length) return;

  let obj = hits[0].object;
  let owner = null;
  while (obj && !owner) {
    if (obj.userData.planetId) {
      owner = bodies.find((b) => b.data.id === obj.userData.planetId);
    }
    obj = obj.parent;
  }
  if (!owner) {
    const planet = hits[0].object.userData.planet;
    owner = bodies.find((b) => b.data === planet);
  }
  if (owner) selectPlanet(owner, true);
});

/* ---------------- 控制 ---------------- */
let playing = true;
let speed = 1;

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.textContent = playing ? '暂停' : '播放';
  playBtn.classList.toggle('on', playing);
});

speedInput.addEventListener('input', () => {
  speed = Number(speedInput.value);
  speedVal.textContent = `${speed.toFixed(1)}×`;
});

orbitBtn.addEventListener('click', () => {
  const show = !orbitGroup.visible;
  orbitGroup.visible = show;
  orbitBtn.classList.toggle('on', show);
});



/* ---------------- 自适应 ---------------- */
function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(canvas);
resize();

/* ---------------- 主循环 ---------------- */
const clock = new THREE.Clock();
const tmp = new THREE.Vector3();

function animate() {
  const delta = Math.min(0.06, clock.getDelta());
  const scale = playing ? speed : 0;

  bodies.forEach((body) => {
    body.angle += delta * body.speed * 0.32 * scale;
    body.pivot.rotation.y = body.angle;
    body.mesh.rotation.y += delta * body.data.spin * 0.5 * (scale || 0.25);
  });

  sun.rotation.y += delta * 0.03;

  if (camTween.active) {
    camTween.t += delta * 1000;
    const t = Math.min(1, camTween.t / camTween.dur);
    const e = 1 - Math.pow(1 - t, 3);
    camera.position.lerpVectors(camTween.from, camTween.to, e);
    controls.target.lerpVectors(camTween.fromT, camTween.toT, e);
    if (t >= 1) {
      camTween.active = false;
      if (selected) selected.mesh.getWorldPosition(lastFocusPos);
    }
  } else if (selected) {
    // 相机随选中行星同步平移，让主星始终居中
    selected.mesh.getWorldPosition(tmp);
    const move = tmp.clone().sub(lastFocusPos);
    camera.position.add(move);
    controls.target.copy(tmp);
    lastFocusPos.copy(tmp);
  }

  controls.update();
  composer.render();
  requestAnimationFrame(animate);
}

/* ---------------- 启动 ---------------- */
setTimeout(() => {
  loaderEl.classList.add('is-hidden');
  setTimeout(() => {
    loaderEl.style.display = 'none';
  }, 700);
  animate();

  // 默认聚焦金星，优先展示真实天体模型
  const venus = bodies.find((b) => b.data.id === 'venus');
  if (venus) selectPlanet(venus, true);
}, 900);
