import { THREE, enamel, chrome, darkPlastic, plastic, brushedMetal, mesh, roundedBox } from './lib.js';

/**
 * 海尔 窗式空调（1990s）
 * 尺寸约 0.68m x 0.42m x 0.72m，底部贴近 y = 0。
 */
export function createAirConditioner() {
  const group = new THREE.Group();
  group.name = 'AirConditioner';

  const W = 0.68;
  const H = 0.42;
  const D = 0.72;
  const BASE_H = 0.0;

  const shellMat = enamel(0xe6e1d2, 0.45);
  const panelMat = plastic(0xdcd7c9, 0.5);
  const darkMat = darkPlastic(0x2a2e33, 0.55);
  const chromeMat = chrome();

  const body = mesh(roundedBox(W, H, D, 0.02), shellMat, [0, BASE_H + H / 2, 0]);
  group.add(body);

  const frontZ = D / 2;
  const panel = mesh(roundedBox(W * 0.985, H * 0.96, 0.03, 0.012), panelMat, [0, BASE_H + H / 2, frontZ]);
  group.add(panel);

  const outletMat = darkPlastic(0x1b1f24, 0.5);
  const outletY = BASE_H + H * 0.66;
  const outlet = mesh(new THREE.BoxGeometry(W * 0.6, H * 0.34, 0.05), outletMat, [-W * 0.08, outletY, frontZ + 0.02]);
  group.add(outlet);

  const bladeMat = plastic(0xece7da, 0.45);
  for (let i = 0; i < 3; i++) {
    const blade = mesh(new THREE.BoxGeometry(W * 0.56, 0.012, 0.06), bladeMat, [-W * 0.08, outletY - 0.05 + i * 0.05, frontZ + 0.038]);
    blade.rotation.x = -0.5;
    group.add(blade);
  }

  const returnMat = darkPlastic(0x3c4249, 0.7);
  for (let i = 0; i < 4; i++) {
    const slat = mesh(new THREE.BoxGeometry(W * 0.58, 0.012, 0.012), returnMat, [-W * 0.08, BASE_H + H * 0.14 + i * 0.03, frontZ + 0.008]);
    group.add(slat);
  }

  const ctrlPanel = mesh(roundedBox(W * 0.3, H * 0.8, 0.02, 0.01), darkPlastic(0x20242a, 0.45), [W * 0.3, BASE_H + H / 2, frontZ + 0.022]);
  group.add(ctrlPanel);

  const knobBaseMat = darkPlastic(0x111418, 0.4);
  for (let i = 0; i < 2; i++) {
    const kb = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.03, 26), knobBaseMat);
    kb.rotation.x = Math.PI / 2;
    kb.position.set(W * 0.3, BASE_H + H * 0.68 - i * 0.16, frontZ + 0.04);
    group.add(kb);

    const kn = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.04, 24), chromeMat);
    kn.rotation.x = Math.PI / 2;
    kn.position.set(W * 0.3, BASE_H + H * 0.68 - i * 0.16, frontZ + 0.055);
    group.add(kn);

    const mark = mesh(new THREE.BoxGeometry(0.007, 0.026, 0.005), darkPlastic(0x0a0c0e, 0.3), [W * 0.3, BASE_H + H * 0.68 - i * 0.16 + 0.02, frontZ + 0.077]);
    group.add(mark);
  }

  const badgeMat = chrome();
  const badge = mesh(new THREE.BoxGeometry(0.13, 0.03, 0.006), badgeMat, [W * 0.3, BASE_H + H * 0.09, frontZ + 0.032]);
  group.add(badge);

  const sideVentMat = darkPlastic(0x353b41, 0.75);
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const slat = mesh(new THREE.BoxGeometry(0.01, H * 0.5, D * 0.5), sideVentMat, [sx * (W / 2 + 0.001), BASE_H + H / 2, -D * 0.1]);
      slat.position.z = -D * 0.3 + i * (D * 0.5 / 6) + 0.05;
      group.add(slat);
    }
  }

  const bracketMat = brushedMetal(0x8f959b, 0.45);
  const bracket = mesh(new THREE.BoxGeometry(W * 1.02, 0.02, 0.08), bracketMat, [0, BASE_H + 0.01, -D / 2 + 0.04]);
  group.add(bracket);

  return group;
}
