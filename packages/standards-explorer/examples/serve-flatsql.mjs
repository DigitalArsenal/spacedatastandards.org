// Local hosting for the shared-memory FlatSQL browser example.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const allowed = [
  '/node_modules/flatsql/', '/node_modules/flatc-wasm/', '/node_modules/flatbuffers/',
  '/node_modules/hd-wallet-wasm/', '/lib/js/QRP/', '/lib/js/KMF/',
  '/packages/standards-explorer/dist/',
];
const example = '/packages/standards-explorer/examples/flatsql-demo.html';
const types = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.html': 'text/html',
  '.json': 'application/json', '.wasm': 'application/wasm' };
export async function serveDemo(port = 0) {
  const server = createServer(async (request, response) => {
    response.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    response.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      if (pathname === '/') { response.writeHead(302, { Location: example }).end(); return; }
      if (pathname === '/favicon.ico') { response.writeHead(204).end(); return; }
      const path = decodeURIComponent(pathname);
      if (path.split('/').includes('..') || !(path === example || path === '/scripts/flatsql-binary.mjs'
        || allowed.some(prefix => path.startsWith(prefix)))) {
        response.writeHead(404).end(); return;
      }
      const bytes = await readFile(resolve(root, `.${path}`));
      response.setHeader('Content-Type', types[extname(path)] ?? 'application/octet-stream');
      response.end(bytes);
    } catch { response.writeHead(404).end(); }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  return server;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = await serveDemo(Number(process.env.PORT ?? 8080));
  console.log(`FlatSQL example: http://127.0.0.1:${server.address().port}`);
}
