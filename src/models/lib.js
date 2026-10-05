import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/**
 * 统一的复古家电材质库。
 * 所有材质均为标准 PBR 材质，可无损导出为 glb。
 */

export function enamel(color, roughness = 0.42) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.05,
    envMapIntensity: 1.0,
  });
}

export function plastic(color, roughness = 0.55) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.0,
    envMapIntensity: 0.85,
  });
}

export function darkPlastic(color = 0x22262b, roughness = 0.5) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.1,
    envMapIntensity: 1.0,
  });
}

export function chrome(color = 0xf2f4f6, roughness = 0.12) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 1.0,
    envMapIntensity: 1.35,
  });
}

export function brushedMetal(color = 0xb9bec4, roughness = 0.38) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.85,
    envMapIntensity: 1.1,
  });
}

export function glass(color = 0x0b1016, roughness = 0.06) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.35,
    envMapIntensity: 1.6,
  });
}

export function rubber(color = 0x1a1c1f, roughness = 0.85) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.0,
    envMapIntensity: 0.5,
  });
}

export function emissive(color, intensity = 1.2) {
  return new THREE.MeshStandardMaterial({
    color: 0x111111,
    emissive: color,
    emissiveIntensity: intensity,
    roughness: 0.4,
  });
}

export function roundedBox(w, h, d, radius = 0.02, segments = 5) {
  return new RoundedBoxGeometry(w, h, d, segments, radius);
}

export function mesh(geometry, material, position = [0, 0, 0]) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(position[0], position[1], position[2]);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function box(w, h, d, material) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
}

export function cylinder(radius, height, material, radialSegments = 32) {
  return new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, height, radialSegments),
    material
  );
}

export { THREE };
