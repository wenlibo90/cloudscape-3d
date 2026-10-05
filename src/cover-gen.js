import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const SIZE = 512;

const canvas = document.getElementById('cover');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(1);
renderer.setSize(SIZE, SIZE, false);
renderer.setClearColor(0x10141b, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.05).texture;
scene.add(new THREE.HemisphereLight(0xc8d6ea, 0x0a0c10, 0.7));

const key = new THREE.DirectionalLight(0xfff2dc, 1.6);
key.position.set(5, 9, 6);
scene.add(key);

const rim = new THREE.DirectionalLight(0x7fa6de, 0.9);
rim.position.set(-6, 4, -6);
scene.add(rim);

const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 4000);

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const params = new URLSearchParams(location.search);
const file = params.get('file') || 'turbine-v8.glb';

function frame(object, cam) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const fitDist = (maxDim / 2 / Math.tan((cam.fov * Math.PI) / 360)) * 1.5;

  const dir = new THREE.Vector3(0.75, 0.5, 1).normalize();
  cam.position.copy(center).add(dir.multiplyScalar(fitDist));
  cam.near = fitDist / 100;
  cam.far = fitDist * 100;
  cam.updateProjectionMatrix();
  cam.lookAt(center);
}

gltfLoader.load(
  `/api/models/raw/${encodeURIComponent(file)}`,
  (gltf) => {
    scene.add(gltf.scene);
    frame(gltf.scene, camera);
    renderer.render(scene, camera);
    window.__cover = canvas.toDataURL('image/png');
    window.__coverReady = true;
  },
  undefined,
  (err) => {
    window.__coverError = String(err && err.message ? err.message : err);
    window.__coverReady = true;
  }
);
