import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const GOLD = 0xc9a45c;
const CYAN = 0x5fd3d0;

export function createViewport(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07090d);
  scene.fog = new THREE.Fog(0x07090d, 12, 34);

  const camera = new THREE.PerspectiveCamera(42, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(3.4, 2.7, 4.9);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0.78, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.enablePan = false;
  controls.minDistance = 1.6;
  controls.maxDistance = 14;
  controls.minPolarAngle = 0.28;
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.55;
  controls.update();

  /* ---------- 环境光照 ---------- */
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;

  scene.add(new THREE.HemisphereLight(0xbcd0ea, 0x0a0c10, 0.42));

  const key = new THREE.DirectionalLight(0xfff0d8, 0.8);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 26;
  key.shadow.camera.left = -6;
  key.shadow.camera.right = 6;
  key.shadow.camera.top = 6;
  key.shadow.camera.bottom = -6;
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.02;
  scene.add(key);

  const spot = new THREE.SpotLight(0xffe6c2, 42, 11, Math.PI / 7, 0.5, 1.7);
  spot.position.set(1.2, 6.2, 1.6);
  spot.target.position.set(0, 0.7, 0);
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  spot.shadow.bias = -0.001;
  spot.shadow.normalBias = 0.02;
  scene.add(spot, spot.target);

  const rimA = new THREE.PointLight(CYAN, 14, 14, 2);
  rimA.position.set(-3.4, 1.9, -2.6);
  scene.add(rimA);

  const rimB = new THREE.PointLight(GOLD, 12, 14, 2);
  rimB.position.set(3.6, 1.6, -3);
  scene.add(rimB);

  /* ---------- 网格地面与展台 ---------- */
  const grid = new THREE.GridHelper(64, 64, 0x3a4a6b, 0x141b27);
  grid.material.transparent = true;
  grid.material.opacity = 0.6;
  scene.add(grid);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(1.95, 64),
    new THREE.MeshStandardMaterial({ color: 0x0b0e14, roughness: 0.24, metalness: 0.5, envMapIntensity: 0.6 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.004;
  floor.receiveShadow = true;
  scene.add(floor);

  const padOuter = new THREE.Mesh(
    new THREE.RingGeometry(1.96, 2.02, 96),
    new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  padOuter.rotation.x = -Math.PI / 2;
  padOuter.position.y = 0.006;
  scene.add(padOuter);

  const padGrid = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 1.9, 64, 6),
    new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.16, side: THREE.DoubleSide })
  );
  padGrid.rotation.x = -Math.PI / 2;
  padGrid.position.y = 0.01;
  scene.add(padGrid);

  /* ---------- 星尘粒子 ---------- */
  const COUNT = 1600;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const goldC = new THREE.Color(GOLD);
  const cyanC = new THREE.Color(CYAN);
  for (let i = 0; i < COUNT; i++) {
    const r = 6 + Math.random() * 18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = Math.abs(r * Math.cos(phi)) * 0.7 + 0.2;
    positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    const c = Math.random() > 0.58 ? goldC : cyanC;
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  dustGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.75, depthWrite: false })
  );
  scene.add(dust);

  /* ---------- 生成扫描环 ---------- */
  const scanner = new THREE.Mesh(
    new THREE.TorusGeometry(1.05, 0.012, 12, 72),
    new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0 })
  );
  scanner.rotation.x = Math.PI / 2;
  scanner.position.y = 0.02;
  scene.add(scanner);

  /* ---------- 动画调度 ---------- */
  const tweens = [];
  function tween(duration, onUpdate, onComplete) {
    tweens.push({ duration, elapsed: 0, onUpdate, onComplete });
  }
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeOutBack = (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  /* ---------- 模型管理 ---------- */
  let currentModel = null;
  let faceCount = 0;
  let scannerToken = 0;

  function disposeObject(root) {
    root.traverse((child) => {
      if (!child.isMesh) return;
      child.geometry?.dispose();
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => m?.dispose?.());
    });
  }

  function countFaces(root) {
    let faces = 0;
    root.traverse((child) => {
      if (!child.isMesh || !child.geometry) return;
      const geo = child.geometry;
      if (geo.index) faces += geo.index.count / 3;
      else if (geo.attributes.position) faces += geo.attributes.position.count / 3;
    });
    return Math.round(faces);
  }

  function collectMaterials(root) {
    const list = [];
    root.traverse((child) => {
      if (!child.isMesh) return;
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => {
        if (m && m.isMeshStandardMaterial) {
          list.push({ mat: m, emissive: m.emissive.clone(), intensity: m.emissiveIntensity });
        }
      });
    });
    return list;
  }

  function clearModel() {
    if (!currentModel) return null;
    scannerToken += 1;
    scanner.material.opacity = 0;
    const old = currentModel;
    currentModel = null;
    const matState = collectMaterials(old);
    matState.forEach(({ mat }) => {
      mat.transparent = true;
    });
    tween(
      320,
      (t) => {
        const k = 1 - easeOutCubic(t);
        old.scale.setScalar(Math.max(0.001, k));
        matState.forEach(({ mat }) => {
          mat.opacity = k;
        });
      },
      () => {
        scene.remove(old);
        disposeObject(old);
      }
    );
    return old;
  }

  function setModel(group, meta = {}) {
    clearModel();

    group.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(group);
    currentModel = group;

    faceCount = countFaces(group);

    const box = new THREE.Box3().setFromObject(group);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z, 0.5);
    const radius = maxDim * 0.5;
    const distance = Math.max(2.7, (radius / Math.sin((camera.fov * Math.PI) / 360)) * 1.85);

    const dir = new THREE.Vector3().subVectors(camera.position, controls.target).setY(0.42).normalize();
    const targetY = Math.max(0.35, center.y);

    const fromPos = camera.position.clone();
    const fromTarget = controls.target.clone();
    const toTarget = new THREE.Vector3(0, targetY, 0);
    const toPos = dir.multiplyScalar(distance).add(toTarget);

    const preserve = Boolean(meta.preserveMaterials);
    const matState = collectMaterials(group);
    if (!preserve) {
      matState.forEach(({ mat }) => {
        mat.emissive = new THREE.Color(GOLD);
        mat.emissiveIntensity = 1.6;
      });
    }

    group.scale.setScalar(0.02);

    const myScanner = ++scannerToken;
    scanner.material.opacity = 0.9;
    scanner.position.y = 0.02;
    scanner.scale.setScalar(0.6);
    setTimeout(() => {
      if (myScanner === scannerToken) scanner.material.opacity = 0;
    }, 1600);

    tween(
      900,
      (t) => {
        const s = easeOutBack(Math.min(1, t * 1.25));
        group.scale.setScalar(Math.max(0.02, s));

        camera.position.lerpVectors(fromPos, toPos, easeOutCubic(t));
        controls.target.lerpVectors(fromTarget, toTarget, easeOutCubic(t));

        if (!preserve) {
          matState.forEach((state) => {
            state.mat.emissiveIntensity = state.intensity + (1.6 - state.intensity) * (1 - t);
          });
        }

        if (myScanner === scannerToken) {
          scanner.position.y = 0.02 + easeOutCubic(t) * (Math.max(size.y, 0.6) + 0.35);
          scanner.scale.setScalar(0.6 + t * (radius * 1.5));
          scanner.material.opacity = 0.9 * (1 - t);
        }
      },
      () => {
        group.scale.setScalar(1);
        if (!preserve) {
          matState.forEach((state) => {
            state.mat.emissive.copy(state.emissive);
            state.mat.emissiveIntensity = state.intensity;
          });
        }
        if (myScanner === scannerToken) scanner.material.opacity = 0;
      }
    );

    return { faces: faceCount, distance, size: size.clone(), name: meta.name };
  }

  /* ---------- 自适应 ---------- */
  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  /* ---------- 主循环 ---------- */
  let raf = 0;
  let lastTime = performance.now();
  function loop(now = performance.now()) {
    raf = requestAnimationFrame(loop);
    const delta = Math.min(100, Math.max(0, now - lastTime));
    lastTime = now;

    for (let i = tweens.length - 1; i >= 0; i--) {
      const tw = tweens[i];
      tw.elapsed += delta;
      const t = Math.min(1, tw.elapsed / tw.duration);
      tw.onUpdate(t);
      if (t >= 1) {
        tweens.splice(i, 1);
        tw.onComplete?.();
      }
    }

    dust.rotation.y += 0.0004;
    dispatchGlow();
    controls.update();
    renderer.render(scene, camera);
  }

  /* 模型高光脉动 */
  let glowPhase = 0;
  function dispatchGlow() {
    glowPhase += 0.02;
    rimA.intensity = 14 + Math.sin(glowPhase) * 3;
    rimB.intensity = 12 + Math.cos(glowPhase * 0.8) * 3;
  }

  loop();

  return {
    setModel,
    clearModel,
    getFaces: () => faceCount,
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
    },
  };
}
