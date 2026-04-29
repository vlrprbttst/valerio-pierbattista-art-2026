import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  publicDir: '..', // project root — makes assets/ accessible in dev server
  plugins: [react()],
  base: '/valerio-pierbattista-art-2026/',
  server: {
    fs: { allow: ['..'] }, // allow serving files from outside src/
  },
  build: {
    outDir: '../',
    emptyOutDir: false,
    copyPublicDir: false, // assets already live at root, don't duplicate
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        chunkFileNames: '[name]-chunk.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
