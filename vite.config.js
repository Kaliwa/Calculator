import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => ({
  build: {
    sourceDir: "src",
    outDir: "dist",
  },
}));
