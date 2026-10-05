import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { createAppliance } from '../src/models/index.js';
import { PRODUCTS } from '../src/data/products.js';

if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class FileReaderPolyfill {
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((buffer) => {
        this.result = buffer;
        if (this.onloadend) this.onloadend();
      });
    }
    readAsDataURL(blob) {
      blob.arrayBuffer().then((buffer) => {
        this.result = `data:${blob.type};base64,${Buffer.from(buffer).toString('base64')}`;
        if (this.onloadend) this.onloadend();
      });
    }
  };
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../public/models');
fs.mkdirSync(OUT_DIR, { recursive: true });

const exporter = new GLTFExporter();

function parseGroup(group) {
  return new Promise((resolve, reject) => {
    exporter.parse(group, resolve, reject, { binary: true, onlyVisible: true });
  });
}

let totalBytes = 0;
for (const product of PRODUCTS) {
  const group = createAppliance(product.id);
  const buffer = await parseGroup(group);
  const target = path.join(OUT_DIR, `${product.id}.glb`);
  fs.writeFileSync(target, Buffer.from(buffer));
  totalBytes += buffer.byteLength;
  const kb = (buffer.byteLength / 1024).toFixed(1);
  console.log(`  ✓ ${product.id.padEnd(8)} ${product.name.padEnd(22)} ${kb} KB`);
}

console.log(`\n导出完成，共 ${PRODUCTS.length} 个模型，合计 ${(totalBytes / 1024).toFixed(1)} KB`);
console.log(`输出目录: ${OUT_DIR}`);
