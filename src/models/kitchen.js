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

/** 微波炉 · 约 0.50 x 0.30 x 0.38 m */
export function createMicrowave() {
  const g = new THREE.Group();
  g.name = 'Microwave';

  const W = 0.5;
  const H = 0.3;
  const D = 0.38;
  const FOOT = 0.016;
  const frontZ = D / 2;
  const cy = FOOT + H / 2;

  g.add(mesh(roundedBox(W, H, D, 0.022), enamel(0xe7e4dd, 0.4), [0, cy, 0]));

  g.add(mesh(roundedBox(W * 0.64, H * 0.82, 0.02, 0.014), plastic(0x33383f, 0.45), [-W * 0.15, cy, frontZ + 0.005]));
  g.add(mesh(roundedBox(W * 0.48, H * 0.58, 0.01, 0.01), glass(0x0c1117, 0.07), [-W * 0.15, cy, frontZ + 0.018]));
  g.add(mesh(new THREE.BoxGeometry(0.018, H * 0.68, 0.026), chrome(), [W * 0.2, cy, frontZ + 0.028]));

  g.add(mesh(roundedBox(W * 0.28, H * 0.84, 0.018, 0.012), darkPlastic(0x22262b, 0.48), [W * 0.305, cy, frontZ + 0.005]));
  g.add(mesh(new THREE.BoxGeometry(W * 0.19, 0.032, 0.008), emissive(0x5fd3d0, 1.4), [W * 0.305, FOOT + H * 0.8, frontZ + 0.017]));

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      g.add(
        mesh(new THREE.BoxGeometry(0.038, 0.02, 0.012), plastic(0xd6d3cd, 0.4), [
          W * 0.305 - 0.03 + j * 0.06,
          FOOT + H * 0.48 - i * 0.042,
          frontZ + 0.015,
        ])
      );
    }
  }

  for (const [x, z] of [
    [-W / 2 + 0.05, -D / 2 + 0.05],
    [W / 2 - 0.05, -D / 2 + 0.05],
    [-W / 2 + 0.05, D / 2 - 0.05],
    [W / 2 - 0.05, D / 2 - 0.05],
  ]) {
    g.add(mesh(new THREE.CylinderGeometry(0.017, 0.015, FOOT, 16), rubber(0x24262a, 0.9), [x, FOOT / 2, z]));
  }

  return g;
}

/** 电饭煲 · 约 0.34 x 0.28 x 0.34 m */
export function createRiceCooker() {
  const g = new THREE.Group();
  g.name = 'RiceCooker';

  const R = 0.16;
  const BASE = 0.02;
  const H = 0.19;

  g.add(mesh(new THREE.CylinderGeometry(R * 0.98, R * 1.03, BASE, 44), darkPlastic(0x2a2e33, 0.55), [0, BASE / 2, 0]));
  g.add(mesh(new THREE.CylinderGeometry(R, R * 0.93, H, 44), plastic(0xefeade, 0.4), [0, BASE + H / 2, 0]));
  g.add(mesh(new THREE.CylinderGeometry(R * 0.985, R * 0.985, 0.034, 44), enamel(0xe3ded1, 0.34), [0, BASE + H + 0.017, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.022, 24), chrome(), [0, BASE + H + 0.045, 0]));

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.062, 0.011, 12, 30, Math.PI), chrome());
  handle.position.set(0, BASE + H + 0.03, 0);
  g.add(handle);

  const band = new THREE.Mesh(new THREE.TorusGeometry(R + 0.002, 0.008, 10, 44), plastic(0xc9a45c, 0.4));
  band.rotation.x = Math.PI / 2;
  band.position.y = BASE + H - 0.015;
  g.add(band);

  g.add(mesh(new THREE.BoxGeometry(0.1, 0.03, 0.01), darkPlastic(0x1f2328, 0.4), [0, BASE + H * 0.62, R + 0.002]));
  g.add(mesh(new THREE.BoxGeometry(0.03, 0.018, 0.008), emissive(0x4fd1a0, 1.3), [-0.05, BASE + H * 0.34, R + 0.002]));

  return g;
}

/** 电热水壶 · 约 0.24 x 0.27 x 0.22 m */
export function createKettle() {
  const g = new THREE.Group();
  g.name = 'Kettle';

  const steel = brushedMetal(0xc6cbd1, 0.32);
  const BASE = 0.018;

  g.add(mesh(new THREE.CylinderGeometry(0.1, 0.104, BASE, 40), darkPlastic(0x24282d, 0.5), [0, BASE / 2, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.083, 0.094, 0.15, 40), steel, [0, BASE + 0.075, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.042, 0.083, 0.05, 40), steel, [0, BASE + 0.175, 0]));
  g.add(mesh(new THREE.CylinderGeometry(0.024, 0.028, 0.022, 24), darkPlastic(0x1f2328, 0.45), [0, BASE + 0.21, 0]));

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.012, 12, 30, Math.PI * 0.92), darkPlastic(0x22262b, 0.5));
  handle.position.set(0.045, BASE + 0.13, 0);
  handle.rotation.z = -Math.PI / 2;
  g.add(handle);

  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.026, 0.085, 20), steel);
  spout.position.set(-0.1, BASE + 0.13, 0);
  spout.rotation.z = 0.72;
  g.add(spout);

  const band = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.006, 10, 40), plastic(0xc9a45c, 0.38));
  band.rotation.x = Math.PI / 2;
  band.position.y = BASE + 0.028;
  g.add(band);

  return g;
}

/** 台式电烤箱 · 约 0.46 x 0.28 x 0.32 m */
export function createOven() {
  const g = new THREE.Group();
  g.name = 'Oven';

  const W = 0.46;
  const H = 0.26;
  const D = 0.32;
  const FOOT = 0.02;
  const frontZ = D / 2;
  const cy = FOOT + H / 2;

  g.add(mesh(roundedBox(W, H, D, 0.025), enamel(0xe9e5dc, 0.4), [0, cy, 0]));
  g.add(mesh(roundedBox(W * 0.82, H * 0.78, 0.02, 0.016), darkPlastic(0x1e2226, 0.45), [0, cy - 0.005, frontZ + 0.004]));
  g.add(mesh(roundedBox(W * 0.72, H * 0.66, 0.01, 0.012), glass(0x120f0c, 0.08), [0, cy - 0.005, frontZ + 0.016]));

  g.add(mesh(new THREE.BoxGeometry(W * 0.66, 0.016, 0.024), chrome(), [0, FOOT + H * 0.9, frontZ + 0.03]));

  for (let i = 0; i < 2; i++) {
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.028, 24), chrome());
    knob.rotation.x = Math.PI / 2;
    knob.position.set(-W * 0.22 + i * 0.09, FOOT + 0.035, frontZ + 0.026);
    g.add(knob);
  }

  g.add(mesh(new THREE.BoxGeometry(0.07, 0.016, 0.008), emissive(0xff8a4c, 1.2), [W * 0.24, FOOT + H * 0.86, frontZ + 0.014]));

  for (const [x, z] of [
    [-W / 2 + 0.055, -D / 2 + 0.055],
    [W / 2 - 0.055, -D / 2 + 0.055],
    [-W / 2 + 0.055, D / 2 - 0.055],
    [W / 2 - 0.055, D / 2 - 0.055],
  ]) {
    g.add(mesh(new THREE.CylinderGeometry(0.019, 0.016, FOOT, 16), rubber(0x24262a, 0.9), [x, FOOT / 2, z]));
  }

  return g;
}
