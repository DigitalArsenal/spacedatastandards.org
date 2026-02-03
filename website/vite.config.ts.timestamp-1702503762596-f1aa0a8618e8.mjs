// vite.config.ts
import { defineConfig } from "file:///home/tj/software/tap-schema-workshop/website/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/tj/software/tap-schema-workshop/website/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { viteSingleFile } from "file:///home/tj/software/tap-schema-workshop/website/node_modules/vite-plugin-singlefile/dist/esm/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    // Use a different base URL in development mode
    plugins: [svelte(), viteSingleFile()],
    publicDir: isDev ? "../" : false,
    build: {
      emptyOutDir: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          dir: "../"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90ai9zb2Z0d2FyZS90YXAtc2NoZW1hLXdvcmtzaG9wL3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3RqL3NvZnR3YXJlL3RhcC1zY2hlbWEtd29ya3Nob3Avd2Vic2l0ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90ai9zb2Z0d2FyZS90YXAtc2NoZW1hLXdvcmtzaG9wL3dlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcbmltcG9ydCB7IHZpdGVTaW5nbGVGaWxlIH0gZnJvbSAndml0ZS1wbHVnaW4tc2luZ2xlZmlsZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGlzRGV2ID0gbW9kZSA9PT0gJ2RldmVsb3BtZW50JztcblxuICByZXR1cm4ge1xuICAgIC8vIFVzZSBhIGRpZmZlcmVudCBiYXNlIFVSTCBpbiBkZXZlbG9wbWVudCBtb2RlXG4gICAgcGx1Z2luczogW3N2ZWx0ZSgpLCB2aXRlU2luZ2xlRmlsZSgpXSxcbiAgICBwdWJsaWNEaXI6IGlzRGV2ID8gJy4uLycgOiBmYWxzZSxcbiAgICBidWlsZDoge1xuICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogdHJ1ZSxcbiAgICAgICAgICBkaXI6ICcuLi8nLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjtBQUN0VixTQUFTLGNBQWM7QUFDdkIsU0FBUyxzQkFBc0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxRQUFRLFNBQVM7QUFFdkIsU0FBTztBQUFBO0FBQUEsSUFFTCxTQUFTLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUFBLElBQ3BDLFdBQVcsUUFBUSxRQUFRO0FBQUEsSUFDM0IsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sc0JBQXNCO0FBQUEsVUFDdEIsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
