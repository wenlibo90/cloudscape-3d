import { THREE, enamel, chrome, darkPlastic, rubber, mesh, roundedBox } from './lib.js';

/**
 * 琴岛-利勃海尔 双门冰箱（1984）
 * 尺寸约 0.60m x 1.62m x 0.66m，底部贴近 y = 0。
 */
export function createFridge() {
  const group = new THREE.Group();
  group.name = 'Fridge';

  const BODY_W = 0.6;
  const BODY_D = 0.66;
  const FOOT_H = 0.07;
  const BODY_H = 1.55;
  const bodyCenterY = FOOT_H + BODY_H / 2;

  const bodyMat = enamel(0xe9e4d8, 0.4);
  const trimMat = darkPlastic(0x2b2f34, 0.45);
  const chromeMat = chrome();

  const body = mesh(roundedBox(BODY_W, BODY_H, BODY_D, 0.035), bodyMat, [0, bodyCenterY, 0]);
  group.add(body);

  const frontZ = BODY_D / 2;
  const DOOR_T = 0.045;

  const lowerH = 0.9;
  const lowerCenterY = FOOT_H + lowerH / 2 + 0.02;
  const lowerDoor = mesh(roundedBox(0.555, lowerH, DOOR_T, 0.018), bodyMat, [0, lowerCenterY, frontZ]);
  group.add(lowerDoor);

  const upperH = 0.52;
  const upperCenterY = FOOT_H + BODY_H - upperH / 2 - 0.015;
  const upperDoor = mesh(roundedBox(0.555, upperH, DOOR_T, 0.018), bodyMat, [0, upperCenterY, frontZ]);
  group.add(upperDoor);

  const gapMat = darkPlastic(0x4a5057, 0.6);
  const gapY = FOOT_H + lowerH + 0.04;
  group.add(mesh(new THREE.BoxGeometry(BODY_W * 0.97, 0.012, 0.02), gapMat, [0, gapY, frontZ + 0.02]));

  const handleMat = chromeMat;
  const handleGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.42, 24);
  const handleLower = mesh(handleGeo, handleMat, [-0.255, lowerCenterY + 0.05, frontZ + 0.075]);
  group.add(handleLower);
  const handleLowerArm1 = mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.075, 16), handleMat, [-0.255, lowerCenterY + 0.24, frontZ + 0.04]);
  handleLowerArm1.rotation.x = Math.PI / 2;
  group.add(handleLowerArm1);
  const handleLowerArm2 = mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.075, 16), handleMat, [-0.255, lowerCenterY - 0.14, frontZ + 0.04]);
  handleLowerArm2.rotation.x = Math.PI / 2;
  group.add(handleLowerArm2);

  const handleUpperGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.3, 24);
  const handleUpper = mesh(handleUpperGeo, handleMat, [-0.255, upperCenterY, frontZ + 0.07]);
  group.add(handleUpper);
  const handleUpperArm1 = mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.07, 16), handleMat, [-0.255, upperCenterY + 0.15, frontZ + 0.037]);
  handleUpperArm1.rotation.x = Math.PI / 2;
  group.add(handleUpperArm1);
  const handleUpperArm2 = mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.07, 16), handleMat, [-0.255, upperCenterY - 0.15, frontZ + 0.037]);
  handleUpperArm2.rotation.x = Math.PI / 2;
  group.add(handleUpperArm2);

  const badgeMat = chrome();
  const badge = mesh(new THREE.BoxGeometry(0.19, 0.045, 0.008), badgeMat, [0.04, upperCenterY - 0.16, frontZ + DOOR_T / 2 + 0.004]);
  group.add(badge);

  const stripeMat = new THREE.MeshStandardMaterial({ color: 0x1d4f8c, roughness: 0.4, metalness: 0.2 });
  const stripe = mesh(new THREE.BoxGeometry(0.19, 0.011, 0.004), stripeMat, [0.04, upperCenterY - 0.19, frontZ + DOOR_T / 2 + 0.005]);
  group.add(stripe);

  const badge2 = mesh(new THREE.BoxGeometry(0.14, 0.03, 0.006), brushedBadge(), [0.05, FOOT_H + 0.16, frontZ + DOOR_T / 2 + 0.004]);
  group.add(badge2);

  const footMat = rubber(0x24262a, 0.9);
  const footPositions = [
    [-BODY_W / 2 + 0.09, -BODY_D / 2 + 0.09],
    [BODY_W / 2 - 0.09, -BODY_D / 2 + 0.09],
    [-BODY_W / 2 + 0.09, BODY_D / 2 - 0.09],
    [BODY_W / 2 - 0.09, BODY_D / 2 - 0.09],
  ];
  for (const [x, z] of footPositions) {
    const foot = mesh(new THREE.CylinderGeometry(0.035, 0.03, FOOT_H, 20), footMat, [x, FOOT_H / 2, z]);
    group.add(foot);
  }

  const ventMat = darkPlastic(0x33383e, 0.7);
  const ventBack = mesh(new THREE.BoxGeometry(BODY_W * 0.7, 0.5, 0.01), ventMat, [0, 0.5, -BODY_D / 2 - 0.004]);
  group.add(ventBack);

  const sealMat = rubber(0x1c1e21, 0.85);
  for (const y of [FOOT_H + 0.02, FOOT_H + lowerH + 0.02, FOOT_H + BODY_H - 0.012]) {
    const seal = mesh(new THREE.BoxGeometry(BODY_W * 0.94, 0.008, 0.012), sealMat, [0, y, frontZ + 0.024]);
    group.add(seal);
  }

  return group;
}

function brushedBadge() {
  return new THREE.MeshStandardMaterial({ color: 0xc8ccd1, roughness: 0.4, metalness: 0.7 });
}
