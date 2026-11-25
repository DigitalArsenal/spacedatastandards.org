#!/usr/bin/env node
// E2E check for npm package tarball size and required packaged artifacts (#1103):
//   - Packs spacedatastandards.org into a temporary directory (leaving git tree clean)
//   - Verifies .tgz byte size is below 150 MB (E413 Payload Too Large prevention)
//   - Verifies zero excluded language tarballs are packed under dist/*/*.tar.gz
//   - Verifies required runtime, schema, binding, manifest, and .py.tar.gz entries
//   - Verifies packed package.json & dist/manifest.json version and standards parity
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-release-pack-'));

const run = (cmd, args, cwd = root) =>
  execFileSync(cmd, args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 256 * 1024 * 1024,
  });

const EXCLUDED_ARCHIVE_RE =
  /^package\/dist\/[^/]+\/[^/]+\.(go|rs|dart|java|php|js|ts|json|cs|kt|cpp|sw|lob)\.tar\.gz$/;

const REQUIRED_STATIC_ENTRIES = [
  'package/package.json',
  'package/index.js',
  'package/dist/manifest.json',
  'package/dist/manifest.fb',
  'package/dist/schema-embeddings.json',
  'package/dist/sds_parsers.js',
  'package/dist/sds_parsers.wasm',
  'package/lib/json/index.json',
  'package/lib/fbjson/index.json',
];

const SPOTCHECK_CODES = ['THP', 'TMX', 'DCO', 'RBF', 'RDE', 'COA', 'OMM'];
const PYTHON_SAMPLE_CODES = ['SRO', 'SFE', 'SDI', 'SRT', 'THP'];

try {
  const packJsonRaw = run('npm', ['pack', '--pack-destination', tmp, '--json']);
  const packParsed = JSON.parse(packJsonRaw);
  const packInfo = Array.isArray(packParsed) ? packParsed[0] : packParsed;
  assert.ok(packInfo && typeof packInfo.filename === 'string', 'npm pack --json must return package metadata');

  const tgzPath = path.join(tmp, packInfo.filename);
  assert.ok(fs.existsSync(tgzPath), `packed tarball must exist at ${tgzPath}`);

  const statSize = fs.statSync(tgzPath).size;
  assert.equal(statSize, packInfo.size, 'fs.statSync size must match npm pack reported size');
  assert.ok(packInfo.size > 0, 'tarball size must be non-zero');
  assert.ok(
    packInfo.size < 150 * 1000 * 1000,
    `tarball size ${packInfo.size} B exceeds 150,000,000 B threshold`,
  );

  const tarListRaw = run('tar', ['-tzf', tgzPath], tmp);
  const entries = tarListRaw.split('\n').map((line) => line.trim()).filter(Boolean);
  const entrySet = new Set(entries);

  const excludedHits = entries.filter((entry) => EXCLUDED_ARCHIVE_RE.test(entry));
  assert.deepEqual(excludedHits, [], `excluded language archives must not be packed: ${excludedHits.slice(0, 10).join(', ')}`);

  for (const required of REQUIRED_STATIC_ENTRIES) {
    assert.ok(entrySet.has(required), `missing required tarball entry: ${required}`);
  }

  for (const code of SPOTCHECK_CODES) {
    for (const rel of [
      `package/lib/js/${code}/main.js`,
      `package/lib/js/${code}/main.d.ts`,
      `package/lib/ts/${code}/main.ts`,
      `package/lib/json/${code}/main.schema.json`,
      `package/lib/fbjson/${code}/main.fb.schema.json`,
      `package/schema/${code}/main.fbs`,
    ]) {
      assert.ok(entrySet.has(rel), `missing ${code} artifact in tarball: ${rel}`);
    }
  }

  for (const code of PYTHON_SAMPLE_CODES) {
    const pyArchive = `package/dist/${code}/${code}.py.tar.gz`;
    assert.ok(entrySet.has(pyArchive), `missing required Python archive in tarball: ${pyArchive}`);
  }

  run('tar', ['-xzf', tgzPath, '-C', tmp, 'package/package.json', 'package/dist/manifest.json'], tmp);

  const rootPkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const packedPkg = JSON.parse(fs.readFileSync(path.join(tmp, 'package/package.json'), 'utf8'));
  const packedManifest = JSON.parse(fs.readFileSync(path.join(tmp, 'package/dist/manifest.json'), 'utf8'));

  assert.equal(packedPkg.version, rootPkg.version, 'packed package.json version must match root package.json');
  assert.equal(packedManifest.version, rootPkg.version, 'packed dist/manifest.json version must match root package.json');

  const schemaDirs = fs
    .readdirSync(path.join(root, 'schema'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(root, 'schema', d.name, 'main.fbs')))
    .map((d) => d.name);

  const manifestStandards = Object.keys(packedManifest.STANDARDS ?? {});
  assert.ok(schemaDirs.length >= 306, `expected >= 306 schema directories, got ${schemaDirs.length}`);
  assert.equal(
    manifestStandards.length,
    schemaDirs.length,
    `packed manifest STANDARDS count (${manifestStandards.length}) must match schema/*/main.fbs count (${schemaDirs.length})`,
  );
  for (const code of SPOTCHECK_CODES) {
    assert.ok(packedManifest.STANDARDS[code], `packed manifest.STANDARDS missing ${code}`);
  }

  console.log(
    `PASS: ${packInfo.filename} size=${packInfo.size} B (${(packInfo.size / 1e6).toFixed(2)} MB), ` +
      `unpacked=${packInfo.unpackedSize} B, entries=${entries.length}, ` +
      `version=${packedManifest.version}, standards=${manifestStandards.length}`,
  );
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
