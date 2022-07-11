import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import * as path from "path";
import viteCompression from "vite-plugin-compression";
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteCompression()],
  server: { host: "0.0.0.0" },
  resolve: {
    alias: {
      "node-fetch": "isomorphic-fetch",
      "@": path.resolve(__dirname, "./src")
    },
  },
  build: {
    outDir: './docs',
    minify: "terser"
  },
  base: "./"
})
