import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

let catalogPromise = null;
const sceneCache = new Map();

/* ---------------- 清单 ---------------- */
export function fetchLibrary() {
  if (!catalogPromise) {
    catalogPromise = fetch('/api/models')
      .then((res) => (res.ok ? res.json() : { files: [] }))
      .then((data) => (Array.isArray(data.files) ? data.files : []))
      .catch(() => []);
  }
  return catalogPromise;
}

/* ---------------- 关键词匹配 ---------------- */
function splitSegments(text) {
  return String(text || '')
    .toLowerCase()
    .split(/[\s·（）()\-_/,，、。]+/)
    .filter((w) => w.length >= 2);
}

function bigrams(text) {
  const clean = String(text || '').toLowerCase().replace(/[\s·（）()\-_/,，、。]/g, '');
  const grams = [];
  for (let i = 0; i < clean.length - 1; i += 1) grams.push(clean.slice(i, i + 2));
  return grams;
}

export function matchLibraryModel(text, files) {
  const input = String(text || '').toLowerCase().trim();
  if (!input || !Array.isArray(files) || !files.length) return null;

  let best = null;
  let bestScore = 0;

  for (const item of files) {
    const title = String(item.title || '').toLowerCase();
    if (!title) continue;

    let score = 0;

    if (input.includes(title)) {
      score = 4;
    } else {
      const hits = splitSegments(title).filter((seg) => input.includes(seg)).length;
      score += hits * 2;

      const grams = bigrams(title);
      if (grams.length) {
        score += grams.filter((g) => input.includes(g)).length;
      }
    }

    if (Array.isArray(item.keywords)) {
      item.keywords.forEach((kw) => {
        const key = String(kw).toLowerCase();
        if (key && input.includes(key)) score += 4;
      });
    }

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return bestScore >= 2 ? best : null;
}

/* ---------------- 加载与归一化 ---------------- */
function fitToStage(object, target = 1.4) {
  object.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;

  object.scale.setScalar(target / maxDim);
  object.updateMatrixWorld(true);

  const box2 = new THREE.Box3().setFromObject(object);
  const center = new THREE.Vector3();
  box2.getCenter(center);

  object.position.x -= center.x;
  object.position.z -= center.z;
  object.position.y -= box2.min.y;
}

function loadGltfScene(url) {
  if (!sceneCache.has(url)) {
    sceneCache.set(
      url,
      new Promise((resolve, reject) => {
        gltfLoader.load(url, (gltf) => resolve(gltf.scene), undefined, reject);
      }),
    );
  }
  return sceneCache.get(url);
}

/**
 * 深克隆：几何体与材质都要独立，
 * 否则第一次加载被 viewport 释放后，缓存的模板就会失效。
 */
function cloneModel(source) {
  const clone = source.clone(true);
  clone.traverse((node) => {
    if (!node.isMesh) return;
    if (node.geometry) node.geometry = node.geometry.clone();
    if (Array.isArray(node.material)) {
      node.material = node.material.map((m) => m.clone());
    } else if (node.material) {
      node.material = node.material.clone();
    }
  });
  return clone;
}

export async function loadLibraryModel(item) {
  const url = item.url || `/api/models/raw/${encodeURIComponent(item.file)}`;
  const source = await loadGltfScene(url);

  const inner = cloneModel(source);
  fitToStage(inner, 1.4);

  const group = new THREE.Group();
  group.add(inner);
  return group;
}
