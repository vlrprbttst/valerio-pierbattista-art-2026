import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  plugins: [react()],
  base: '/valerio-pierbattista-art-2026/',
  build: {
    outDir: '../',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        chunkFileNames: '[name]-chunk.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
