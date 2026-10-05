import { THREE, plastic, chrome, darkPlastic, glass, rubber, brushedMetal, mesh, roundedBox } from './lib.js';

/**
 * 复古 CRT 电视机（1980s）
 * 尺寸约 0.52m x 0.42m x 0.42m，底部贴近 y = 0。
 */
export function createTelevision() {
  const group = new THREE.Group();
  group.name = 'Television';

  const W = 0.52;
  const H = 0.4;
  const D = 0.42;
  const FOOT_H = 0.02;

  const cabinetMat = new THREE.MeshStandardMaterial({ color: 0x7a5537, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.8 });
  const faceMat = plastic(0xe3ddd0, 0.42);
  const darkMat = darkPlastic(0x1c2025, 0.45);
  const chromeMat = chrome();

  const cabinet = mesh(roundedBox(W, H, D, 0.03), cabinetMat, [0, FOOT_H + H / 2, 0]);
  group.add(cabinet);

  const frontZ = D / 2;
  const face = mesh(roundedBox(W * 0.97, H * 0.94, 0.035, 0.02), faceMat, [0, FOOT_H + H / 2, frontZ]);
  group.add(face);

  const ctrlX = W * 0.3;
  const screenCx = -W * 0.09;
  const screenW = W * 0.56;
  const screenH = H * 0.66;
  const screenCy = FOOT_H + H * 0.54;

  const bezel = mesh(roundedBox(screenW + 0.05, screenH + 0.05, 0.012, 0.016), darkPlastic(0x15181c, 0.4), [screenCx, screenCy, frontZ + 0.02]);
  group.add(bezel);

  const screenGeom = new THREE.SphereGeometry(
    1.6, 48, 36,
    Math.PI / 2 - screenW / 3.2,
    screenW / 1.6,
    Math.PI / 2 - screenH / 3.2,
    screenH / 1.6
  );
  const screenMat = glass(0x0a0f16, 0.05);
  const screen = new THREE.Mesh(screenGeom, screenMat);
  screen.name = 'CRTScreen';
  screen.scale.set(0.94, 0.92, 1);
  screen.position.set(screenCx, screenCy, frontZ + 0.02 - 1.6 + 0.03);
  group.add(screen);

  const glowMat = new THREE.MeshStandardMaterial({
    color: 0x0d1a22,
    emissive: 0x123040,
    emissiveIntensity: 0.35,
    roughness: 0.15,
    metalness: 0.1,
  });
  const glow = mesh(roundedBox(screenW * 0.9, screenH * 0.9, 0.004, 0.02), glowMat, [screenCx, screenCy, frontZ + 0.028]);
  glow.name = 'CRTScreenGlow';
  group.add(glow);

  const speakerY = FOOT_H + H * 0.5;
  const speakerStartX = ctrlX + 0.035;
  for (let i = 0; i < 5; i++) {
    const bar = mesh(new THREE.BoxGeometry(0.009, screenH * 0.92, 0.008), darkPlastic(0x2b2f35, 0.6), [speakerStartX + i * 0.011, speakerY, frontZ + 0.026]);
    group.add(bar);
  }

  const knobBaseMat = darkPlastic(0x101317, 0.4);
  for (let i = 0; i < 2; i++) {
    const y = FOOT_H + H * 0.74 - i * 0.13;
    const kb = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.022, 24), knobBaseMat);
    kb.rotation.x = Math.PI / 2;
    kb.position.set(ctrlX - 0.02, y, frontZ + 0.036);
    group.add(kb);

    const kn = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.034, 22), chromeMat);
    kn.rotation.x = Math.PI / 2;
    kn.position.set(ctrlX - 0.02, y, frontZ + 0.047);
    group.add(kn);

    const mark = mesh(new THREE.BoxGeometry(0.006, 0.02, 0.004), darkPlastic(0x0a0c0e, 0.3), [ctrlX - 0.02, y + 0.014, frontZ + 0.066]);
    group.add(mark);
  }

  const badgeMat = brushedMetal(0xc9cdd2, 0.4);
  const badge = mesh(new THREE.BoxGeometry(0.11, 0.026, 0.006), badgeMat, [ctrlX - 0.02, FOOT_H + 0.05, frontZ + 0.026]);
  group.add(badge);

  const footMat = rubber(0x24262a, 0.9);
  for (const [x, z] of [[-W / 2 + 0.06, -D / 2 + 0.06], [W / 2 - 0.06, -D / 2 + 0.06], [-W / 2 + 0.06, D / 2 - 0.06], [W / 2 - 0.06, D / 2 - 0.06]]) {
    group.add(mesh(new THREE.BoxGeometry(0.05, FOOT_H, 0.05), footMat, [x, FOOT_H / 2, z]));
  }

  const antennaMat = brushedMetal(0x9aa0a6, 0.35);
  const ant1 = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.006, 0.5, 12), antennaMat);
  ant1.position.set(-0.14, FOOT_H + H + 0.23, -D * 0.18);
  ant1.rotation.z = 0.38;
  group.add(ant1);

  const ant2 = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.006, 0.44, 12), antennaMat);
  ant2.position.set(0.13, FOOT_H + H + 0.2, -D * 0.18);
  ant2.rotation.z = -0.32;
  ant2.rotation.x = -0.2;
  group.add(ant2);

  return group;
}
