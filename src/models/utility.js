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

/** 桶式吸尘器 · 约 0.40 x 0.46 x 0.40 m */
export function createVacuum() {
  const g = new THREE.Group();
  g.name = 'Vacuum';

  const shellMat = plastic(0xd9d3c6, 0.45);
  const darkMat = darkPlastic(0x2a2e33, 0.5);
  const metalMat = brushedMetal(0xa9afb6, 0.4);

  const wheelY = 0.05;
  for (const a of [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.032, 24), rubber(0x1e2124, 0.85));
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(Math.cos(a) * 0.14, wheelY, Math.sin(a) * 0.14);
    g.add(wheel);
  }

  g.add(mesh(new THREE.CylinderGeometry(0.155, 0.165, 0.26, 40), shellMat, [0, 0.1 + 0.13, 0]));

  const band = new THREE.Mesh(new THREE.TorusGeometry(0.163, 0.012, 12, 44), plastic(0xc9a45c, 0.4));
  band.rotation.x = Math.PI / 2;
  band.position.y = 0.15;
  g.add(band);

  g.add(mesh(new THREE.CylinderGeometry(0.19, 0.185, 0.075, 40), darkMat, [0, 0.36 + 0.0375, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.03, 24), metalMat, [0, 0.44, 0]));

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.011, 12, 32, Math.PI), metalMat);
  handle.position.set(0, 0.45, 0);
  g.add(handle);

  const hose = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.07, 20), darkMat);
  hose.rotation.x = Math.PI / 2;
  hose.position.set(0, 0.23, 0.17);
  g.add(hose);

  g.add(mesh(new THREE.BoxGeometry(0.1, 0.028, 0.008), chrome(), [0, 0.26, 0.168]));
  g.add(mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.01, 16), emissive(0x5fd3d0, 1.2), [0.09, 0.4, 0.17]).rotateX(Math.PI / 2));

  return g;
}

/** 转盘电话机 · 约 0.26 x 0.15 x 0.24 m */
export function createTelephone() {
  const g = new THREE.Group();
  g.name = 'Telephone';

  const bodyMat = plastic(0x2b2f34, 0.42);
  const dialMat = plastic(0xd7d3cb, 0.38);
  const chromeMat = chrome();

  g.add(mesh(roundedBox(0.24, 0.075, 0.22, 0.03), bodyMat, [0, 0.0375, 0]));

  const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.072, 0.014, 40), dialMat);
  dial.position.set(0, 0.08, 0.01);
  g.add(dial);

  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * Math.PI * 1.62 + Math.PI * 0.19;
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.006, 14), bodyMat);
    hole.position.set(Math.cos(angle) * 0.05, 0.088, 0.01 + Math.sin(angle) * 0.05);
    g.add(hole);
  }
  g.add(mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.016, 24), bodyMat, [0, 0.086, 0.01]));

  const handset = new THREE.Group();
  handset.position.set(0, 0.105, -0.045);
  handset.add(mesh(new THREE.BoxGeometry(0.09, 0.022, 0.045), bodyMat, [0, 0, 0]));
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.05, 26), bodyMat);
    ear.rotation.z = Math.PI / 2;
    ear.position.set(sx * 0.093, 0, 0);
    handset.add(ear);
  }
  g.add(handset);

  g.add(mesh(new THREE.BoxGeometry(0.2, 0.008, 0.02), chromeMat, [0, 0.078, -0.085]));

  return g;
}

/** 老式缝纫机 · 约 0.50 x 0.38 x 0.26 m */
export function createSewingMachine() {
  const g = new THREE.Group();
  g.name = 'SewingMachine';

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6f4a2c, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.7 });
  const ironMat = darkPlastic(0x23272c, 0.45);
  const metalMat = brushedMetal(0xb0b6bd, 0.35);
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xc9a45c, roughness: 0.35, metalness: 0.8 });

  g.add(mesh(roundedBox(0.5, 0.05, 0.26, 0.012), woodMat, [0, 0.025, 0]));

  g.add(mesh(roundedBox(0.11, 0.26, 0.15, 0.02), ironMat, [0.17, 0.05 + 0.13, 0]));
  g.add(mesh(roundedBox(0.34, 0.075, 0.13, 0.02), ironMat, [0.02, 0.29, 0]));
  g.add(mesh(roundedBox(0.1, 0.11, 0.11, 0.018), ironMat, [-0.13, 0.225, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.06, 10), metalMat, [-0.13, 0.14, 0.03]));

  const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.072, 0.03, 32), metalMat);
  wheel.rotation.z = Math.PI / 2;
  wheel.position.set(0.235, 0.2, 0);
  g.add(wheel);
  g.add(mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.036, 18), goldMat, [0.235, 0.2, 0]).rotateZ(Math.PI / 2));

  g.add(mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.05, 18), goldMat, [0.1, 0.34, 0.04]));

  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.012, 36), metalMat);
  plate.position.set(-0.05, 0.055, 0);
  g.add(plate);

  return g;
}

/** 电吹风 · 约 0.22 x 0.26 x 0.16 m */
export function createHairDryer() {
  const g = new THREE.Group();
  g.name = 'HairDryer';

  const shellMat = plastic(0xe2ded4, 0.4);
  const darkMat = darkPlastic(0x2b2f35, 0.48);
  const metalMat = brushedMetal(0xc2c7cd, 0.35);

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.17, 26), shellMat);
  handle.position.set(-0.02, 0.085, 0);
  handle.rotation.z = 0.22;
  g.add(handle);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.056, 0.2, 34), shellMat);
  body.rotation.z = Math.PI / 2;
  body.position.set(0.02, 0.19, 0);
  g.add(body);

  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.052, 0.06, 30), darkMat);
  nozzle.rotation.z = Math.PI / 2;
  nozzle.position.set(0.15, 0.19, 0);
  g.add(nozzle);
  g.add(mesh(new THREE.TorusGeometry(0.032, 0.005, 10, 26), metalMat, [0.181, 0.19, 0]).rotateY(Math.PI / 2));

  const intake = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.052, 0.03, 34), darkMat);
  intake.rotation.z = Math.PI / 2;
  intake.position.set(-0.09, 0.19, 0);
  g.add(intake);

  for (let i = 0; i < 8; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.096, 0.006), metalMat);
    spoke.position.y = 0.048;
    const pivot = new THREE.Group();
    pivot.position.set(-0.105, 0.19, 0);
    pivot.rotation.x = (i / 8) * Math.PI;
    pivot.add(spoke);
    g.add(pivot);
  }

  g.add(mesh(new THREE.BoxGeometry(0.022, 0.05, 0.012), darkMat, [-0.035, 0.145, 0.032]));
  g.add(mesh(new THREE.BoxGeometry(0.022, 0.04, 0.012), darkMat, [-0.035, 0.15, -0.032]));
  g.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.012, 12), emissive(0xff8a4c, 1.3), [-0.035, 0.112, 0.032]).rotateX(Math.PI / 2));

  return g;
}
