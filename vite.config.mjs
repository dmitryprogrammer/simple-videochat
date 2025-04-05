import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8080,
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
  }
});
