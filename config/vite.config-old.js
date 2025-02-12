import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, ' '), 
  build: {
    outDir: resolve(__dirname, 'dist'), 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/js/main.js'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
  },
  server: {
    port: 3060, 
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/js/main.js'),
      },
      
    },
  },
});