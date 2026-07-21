import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
const explorerRoot = join(repositoryRoot, 'packages', 'standards-explorer');

async function htmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (['dist', 'node_modules'].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(path));
    else if (entry.isFile() && extname(entry.name).toLowerCase() === '.html') files.push(path);
  }
  return files;
}

const forbiddenHtml = [
  ['hd-wallet-ui import', /(?:from\s*['"]hd-wallet-ui(?:\/[^'"]*)?['"]|<script[^>]+hd-wallet-ui)/iu],
  ['hd-wallet-wasm import', /(?:from\s*['"]hd-wallet-wasm(?:\/[^'"]*)?['"]|<script[^>]+hd-wallet-wasm)/iu],
  ['mnemonic generation/import', /\b(?:generate|import|restore|mnemonicToSeed|toSeed)\w*\s*\([^)]*mnemonic|\bmnemonic\.(?:generate|import|toSeed)\b/iu],
  ['private-key access/rendering', /\bprivateKey\s*(?:\(|\.|\[)|\b(?:textContent|innerHTML|value)\s*=\s*[^;\n]*private(?:Key|_key)/iu],
];

const violations = [];
for (const path of await htmlFiles(explorerRoot)) {
  const source = await readFile(path, 'utf8');
  for (const [label, pattern] of forbiddenHtml) {
    if (pattern.test(source)) violations.push(`${relative(repositoryRoot, path)}: ${label}`);
  }
}

const packagePath = join(explorerRoot, 'package.json');
const packageJson = JSON.parse(await readFile(packagePath, 'utf8'));
for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
  for (const packageName of ['hd-wallet-ui', 'hd-wallet-wasm']) {
    if (Object.hasOwn(packageJson[section] ?? {}, packageName)) {
      violations.push(`packages/standards-explorer/package.json: ${section}.${packageName}`);
    }
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log('legacy wallet demo boundary: PASS');
}
