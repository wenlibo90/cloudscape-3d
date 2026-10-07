import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const apiProxy = {
  '/api': {
    target: 'http://127.0.0.1:3001',
    changeOrigin: true,
  },
};

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    allowedHosts: ['.cosmoplat.cn', '.cosmoplat.com', '.cosmoplat.net'],
    proxy: apiProxy,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['.cosmoplat.cn', '.cosmoplat.com', '.cosmoplat.net'],
    proxy: apiProxy,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        museum: resolve(import.meta.dirname, 'museum.html'),
        gallery: resolve(import.meta.dirname, 'gallery.html'),
        logoCandidates: resolve(import.meta.dirname, 'logo-candidates.html'),
        disassembly: resolve(import.meta.dirname, 'disassembly.html'),
        coverGen: resolve(import.meta.dirname, 'cover-gen.html'),
        solar: resolve(import.meta.dirname, 'solar.html'),
        community: resolve(import.meta.dirname, 'community.html'),
        solutions: resolve(import.meta.dirname, 'solutions.html'),
        su7: resolve(import.meta.dirname, 'su7.html'),
        architecture: resolve(import.meta.dirname, 'architecture.html'),
        ar: resolve(import.meta.dirname, 'ar.html'),
        model: resolve(import.meta.dirname, 'model.html'),
      },
    },
  },
});
