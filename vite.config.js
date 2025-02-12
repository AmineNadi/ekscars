import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Change the dev server port
    open: true, // Open browser automatically
  },
  build: {
    outDir: "dist", // Output directory
  },
  css: {
    postcss: "./postcss.config.js", // Explicitly define PostCSS config
  },
  base: "./", // Base path for deployment
});
