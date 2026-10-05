import {
  THREE,
  enamel,
  plastic,
  darkPlastic,
  chrome,
  brushedMetal,
  glass,
  rubber,
  emissive,
  mesh,
  roundedBox,
} from './lib.js';

/** 落地电风扇 · 约 0.44 x 1.18 x 0.42 m */
export function createFan() {
  const g = new THREE.Group();
  g.name = 'Fan';

  const darkMat = darkPlastic(0x2b3036, 0.5);
  const metalMat = brushedMetal(0xb6bcc3, 0.35);
  const bladeMat = new THREE.MeshStandardMaterial({
    color: 0xe8e5df,
    roughness: 0.35,
    metalness: 0.05,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
  });

  g.add(mesh(new THREE.CylinderGeometry(0.21, 0.23, 0.035, 44), darkMat, [0, 0.0175, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.78, 28), metalMat, [0, 0.035 + 0.39, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.05, 24), darkMat, [0, 0.86, 0]));

  const headY = 0.95;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.13, 32), darkMat);
  head.rotation.x = Math.PI / 2;
  head.position.set(0, headY, 0.02);
  g.add(head);

  const bladePivot = new THREE.Group();
  bladePivot.position.set(0, headY, 0.085);
  for (let i = 0; i < 3; i++) {
    const arm = new THREE.Group();
    arm.rotation.z = (i / 3) * Math.PI * 2;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.032, 0.006), bladeMat);
    blade.position.y = 0.072;
    blade.rotation.y = 0.42;
    arm.add(blade);
    bladePivot.add(arm);
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.03, 24), darkMat);
  cap.rotation.x = Math.PI / 2;
  cap.position.set(0, headY, 0.16);
  g.add(bladePivot, cap);

  const cage = new THREE.Group();
  cage.position.set(0, headY, 0.1);
  for (let i = 0; i < 14; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.165, 0.004), metalMat);
    spoke.position.y = 0.0825;
    const pivot = new THREE.Group();
    pivot.rotation.z = (i / 14) * Math.PI * 2;
    pivot.add(spoke);
    cage.add(pivot);
  }
  const ringOuter = new THREE.Mesh(new THREE.TorusGeometry(0.166, 0.006, 10, 60), metalMat);
  const ringMid = new THREE.Mesh(new THREE.TorusGeometry(0.112, 0.004, 10, 52), metalMat);
  const ringInner = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.004, 10, 40), metalMat);
  cage.add(ringOuter, ringMid, ringInner);
  g.add(cage);

  return g;
}

/** 台式收音机 · 约 0.32 x 0.22 x 0.15 m */
export function createRadio() {
  const g = new THREE.Group();
  g.name = 'Radio';

  const W = 0.32;
  const H = 0.2;
  const D = 0.15;
  const frontZ = D / 2;
  const cy = H / 2;

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x7a5537, roughness: 0.52, metalness: 0.0, envMapIntensity: 0.7 });
  const grillMat = new THREE.MeshStandardMaterial({ color: 0xb99a6e, roughness: 0.85, metalness: 0.0 });

  g.add(mesh(roundedBox(W, H, D, 0.018), woodMat, [0, cy, 0]));
  g.add(mesh(roundedBox(W * 0.52, H * 0.72, 0.012, 0.01), grillMat, [-W * 0.19, cy, frontZ + 0.004]));

  for (let i = 0; i < 9; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.004, H * 0.62, 0.006), darkPlastic(0x3a2c1c, 0.7), [-W * 0.19 - 0.06 + i * 0.015, cy, frontZ + 0.012]));
  }

  g.add(mesh(new THREE.BoxGeometry(W * 0.3, 0.026, 0.008), glass(0x2a2419, 0.2), [W * 0.24, H * 0.72, frontZ + 0.008]));
  g.add(mesh(new THREE.BoxGeometry(0.005, 0.026, 0.004), emissive(0xe8c547, 1.1), [W * 0.24 - 0.03, H * 0.72, frontZ + 0.013]));

  for (let i = 0; i < 2; i++) {
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.024, 22), chrome());
    knob.rotation.x = Math.PI / 2;
    knob.position.set(W * 0.19 + i * 0.09, H * 0.32, frontZ + 0.02);
    g.add(knob);
  }

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 10, 28, Math.PI), chrome());
  handle.position.set(0, H + 0.002, 0);
  g.add(handle);

  for (const [x, z] of [[-W / 2 + 0.03, -D / 2 + 0.03], [W / 2 - 0.03, -D / 2 + 0.03], [-W / 2 + 0.03, D / 2 - 0.03], [W / 2 - 0.03, D / 2 - 0.03]]) {
    g.add(mesh(new THREE.CylinderGeometry(0.012, 0.01, 0.008, 14), rubber(0x24262a, 0.9), [x, 0.004, z]));
  }

  return g;
}

/** 双卡收录机 · 约 0.48 x 0.30 x 0.15 m */
export function createBoombox() {
  const g = new THREE.Group();
  g.name = 'Boombox';

  const W = 0.48;
  const H = 0.26;
  const D = 0.15;
  const frontZ = D / 2;
  const FOOT = 0.012;
  const cy = FOOT + H / 2;

  const bodyMat = darkPlastic(0x24282e, 0.5);
  const speakerMat = new THREE.MeshStandardMaterial({ color: 0x14171a, roughness: 0.75, metalness: 0.1 });

  g.add(mesh(roundedBox(W, H, D, 0.018), bodyMat, [0, cy, 0]));

  for (const sx of [-1, 1]) {
    const cx = sx * W * 0.34;
    g.add(mesh(new THREE.CylinderGeometry(0.078, 0.078, 0.012, 36), speakerMat, [cx, cy, frontZ + 0.004]).rotateX(Math.PI / 2));
    const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.06, 0.014, 28), brushedMetal(0x9aa0a6, 0.4));
    cone.rotation.x = Math.PI / 2;
    cone.position.set(cx, cy, frontZ + 0.011);
    g.add(cone);
    g.add(mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.018, 20), darkPlastic(0x101315, 0.4), [cx, cy, frontZ + 0.018]));
  }

  g.add(mesh(roundedBox(W * 0.32, H * 0.42, 0.012, 0.008), glass(0x2a2f36, 0.18), [0, cy + H * 0.16, frontZ + 0.006]));
  for (let i = 0; i < 2; i++) {
    g.add(mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.006, 18), plastic(0xd8d5cf, 0.4), [-0.03 + i * 0.06, cy + H * 0.16, frontZ + 0.014]).rotateX(Math.PI / 2));
  }

  for (let i = 0; i < 5; i++) {
    g.add(mesh(new THREE.BoxGeometry(0.03, 0.016, 0.014), plastic(0xcfccc6, 0.42), [-0.11 + i * 0.055, cy - H * 0.28, frontZ + 0.008]));
  }

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.009, 10, 34, Math.PI), chrome());
  handle.position.set(0, cy + H / 2, 0);
  g.add(handle);

  for (const [x, z] of [[-W / 2 + 0.04, -D / 2 + 0.04], [W / 2 - 0.04, -D / 2 + 0.04], [-W / 2 + 0.04, D / 2 - 0.04], [W / 2 - 0.04, D / 2 - 0.04]]) {
    g.add(mesh(new THREE.CylinderGeometry(0.014, 0.012, FOOT, 14), rubber(0x24262a, 0.9), [x, FOOT / 2, z]));
  }

  return g;
}

/** 复古台灯 · 约 0.28 x 0.50 x 0.28 m */
export function createLamp() {
  const g = new THREE.Group();
  g.name = 'Lamp';

  const baseMat = brushedMetal(0x8f7a4e, 0.35);
  const poleMat = brushedMetal(0xb9a267, 0.3);
  const shadeMat = new THREE.MeshStandardMaterial({
    color: 0xd8b878,
    roughness: 0.5,
    metalness: 0.1,
    side: THREE.DoubleSide,
    emissive: 0x3a2a10,
    emissiveIntensity: 0.5,
  });

  g.add(mesh(new THREE.CylinderGeometry(0.1, 0.112, 0.024, 44), baseMat, [0, 0.012, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.011, 0.013, 0.3, 22), poleMat, [0, 0.024 + 0.15, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.075, 0.142, 0.17, 44, 1, true), shadeMat, [0, 0.324 + 0.085, 0]));

  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.036, 20, 16), emissive(0xffd9a0, 2.2));
  bulb.position.set(0, 0.36, 0);
  g.add(bulb);

  const glow = new THREE.PointLight(0xffc98a, 6, 2.4, 2);
  glow.position.set(0, 0.35, 0);
  g.add(glow);

  g.add(mesh(new THREE.SphereGeometry(0.016, 16, 12), poleMat, [0, 0.5, 0]));

  return g;
}
