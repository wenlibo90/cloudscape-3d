import { THREE, enamel, chrome, darkPlastic, rubber, plastic, emissive, mesh, roundedBox } from './lib.js';

/**
 * 海尔 波轮洗衣机（1990s）
 * 尺寸约 0.56m x 0.88m x 0.56m，底部贴近 y = 0。
 */
export function createWasher() {
  const group = new THREE.Group();
  group.name = 'Washer';

  const W = 0.56;
  const D = 0.56;
  const FOOT_H = 0.06;
  const BODY_H = 0.78;
  const bodyCenterY = FOOT_H + BODY_H / 2;

  const shellMat = enamel(0xf2efe8, 0.38);
  const panelMat = plastic(0xdfe3e6, 0.5);
  const darkMat = darkPlastic(0x2c3136, 0.5);
  const chromeMat = chrome();

  const body = mesh(roundedBox(W, BODY_H, D, 0.03), shellMat, [0, bodyCenterY, 0]);
  group.add(body);

  const topY = FOOT_H + BODY_H;

  const lidMat = plastic(0xe6e9ec, 0.45);
  const lid = mesh(roundedBox(W * 0.82, 0.035, D * 0.62, 0.014), lidMat, [0, topY + 0.005, D * 0.16]);
  group.add(lid);

  const lidHandle = mesh(new THREE.BoxGeometry(0.12, 0.016, 0.03), darkMat, [0, topY + 0.028, D * 0.16 + D * 0.31 - 0.02]);
  group.add(lidHandle);

  const panelH = 0.16;
  const panelD = D * 0.34;
  const panel = mesh(roundedBox(W * 0.96, panelH, panelD, 0.015), panelMat, [0, topY + 0.045, -D / 2 + panelD / 2 + 0.01]);
  group.add(panel);

  const panelFace = mesh(new THREE.BoxGeometry(W * 0.9, panelH * 0.72, 0.006), darkPlastic(0x1f2328, 0.4), [0, topY + 0.045, -D / 2 + 0.012]);
  group.add(panelFace);

  const dialMat = darkPlastic(0x14171a, 0.45);
  const dialBase = cylinderLocal(0.075, 0.028, dialMat);
  dialBase.rotation.x = Math.PI / 2;
  dialBase.position.set(-0.16, topY + 0.045, -D / 2 + 0.02);
  group.add(dialBase);

  const dialKnob = cylinderLocal(0.05, 0.05, chromeMat);
  dialKnob.rotation.x = Math.PI / 2;
  dialKnob.position.set(-0.16, topY + 0.045, -D / 2 + 0.035);
  group.add(dialKnob);

  const dialMark = mesh(new THREE.BoxGeometry(0.008, 0.03, 0.006), darkPlastic(0x0a0c0e, 0.3), [-0.16, topY + 0.062, -D / 2 + 0.062]);
  group.add(dialMark);

  const btnMat = plastic(0xe9ecef, 0.4);
  for (let i = 0; i < 3; i++) {
    const btn = mesh(new THREE.BoxGeometry(0.07, 0.045, 0.014), btnMat, [0.02 + i * 0.105, topY + 0.045, -D / 2 + 0.022]);
    group.add(btn);
  }

  const ledMat = emissive(0x4fd1c5, 2.0);
  const led = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.008, 16), ledMat, [0.02 + 0, topY + 0.098, -D / 2 + 0.022]);
  group.add(led);

  const seam = mesh(new THREE.BoxGeometry(W * 0.99, 0.008, 0.014), darkPlastic(0x50565c, 0.6), [0, topY - 0.002, D / 2 + 0.004]);
  group.add(seam);

  const logoMat = chrome();
  const logo = mesh(new THREE.BoxGeometry(0.1, 0.026, 0.006), logoMat, [0, FOOT_H + 0.1, D / 2 + 0.002]);
  group.add(logo);

  const ventMat = darkPlastic(0x3a4046, 0.75);
  for (let i = 0; i < 5; i++) {
    const slat = mesh(new THREE.BoxGeometry(W * 0.7, 0.01, 0.008), ventMat, [0, FOOT_H + 0.03 + i * 0.016, D / 2 + 0.001]);
    group.add(slat);
  }

  const footMat = rubber(0x24262a, 0.9);
  const footPos = [
    [-W / 2 + 0.07, -D / 2 + 0.07],
    [W / 2 - 0.07, -D / 2 + 0.07],
    [-W / 2 + 0.07, D / 2 - 0.07],
    [W / 2 - 0.07, D / 2 - 0.07],
  ];
  for (const [x, z] of footPos) {
    const foot = mesh(new THREE.CylinderGeometry(0.03, 0.026, FOOT_H, 18), footMat, [x, FOOT_H / 2, z]);
    group.add(foot);
  }

  return group;
}

function cylinderLocal(radius, height, material, seg = 28) {
  return new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, seg), material);
}
