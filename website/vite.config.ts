import { defineConfig, createLogger } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
  if (msg.toLowerCase().includes('css')) return;
  if (msg.toLowerCase().includes('aria')) return;
  originalWarning(msg, options);
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    customLogger: logger,
    plugins: [svelte(), viteSingleFile()],
    publicDir: isDev ? '../' : false,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'standards': path.resolve(__dirname, '../', 'lib'),
        'root': path.resolve(__dirname, '../'),
      },
    },
    build: {
      emptyOutDir: false,
      rollupOptions: {
        external: ['cesium'],
        output: {
          inlineDynamicImports: true,
          dir: '../',
          globals: {
            cesium: 'Cesium'
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['cesium']
    }
  };
});
