#!/usr/bin/env node
// One E2E for the hand-written lib/ts/PROD surviving the build. On a copy of the tree the build:js steps run as
// package.json chains them (scripts/createTSIndex.js, scripts/fixTSCasing.js, tsc, the move of lib/js/ts into
// lib/js): afterwards lib/ts/PROD/main.ts is byte-identical, lib/ts/index.ts exports PROD once, lib/js/PROD/*.js
// exist (and main.js keeps the marker), and every generated directory's main.ts is regenerated unchanged; then the
// archive step (scripts/generateArchives.py) writes no dist/PROD and the manifest's STANDARDS stay the schema set.
// The control: the same copy with the marker line removed fails in createTSIndex.js, as the build did before.
// (The regenerator's wipe, scripts/generateSource.mjs, is proven by the full build, which this E2E does not run.)
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-products-build-e2e-'));
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const MARKER = '// hand-written: not generated';
const PROD_MAIN = 'lib/ts/PROD/main.ts';
const INDEX = 'lib/ts/index.ts';
const PROD_EXPORT = "export * as PROD from './PROD/main.js';";

// A copy of what build:js and the archive step read: lib/ts, schema/ and the generator scripts; lib/py (the walk
// programs and the SCM manifest module) and node_modules (tsc, flatbuffers) linked.
function copyTree(dest) {
  fs.mkdirSync(path.join(dest, 'lib'), { recursive: true });
  fs.mkdirSync(path.join(dest, 'scripts'), { recursive: true });
  fs.cpSync(path.join(root, 'lib/ts'), path.join(dest, 'lib/ts'), { recursive: true });
  fs.cpSync(path.join(root, 'schema'), path.join(dest, 'schema'), { recursive: true });
  for (const f of ['scripts/createTSIndex.js', 'scripts/fixTSCasing.js', 'scripts/generateArchives.py', 'tsconfig.json', 'package.json']) fs.copyFileSync(path.join(root, f), path.join(dest, f));
  fs.symlinkSync(path.join(root, 'lib/py'), path.join(dest, 'lib/py'));
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(dest, 'node_modules'));
}

try {
  const original = fs.readFileSync(path.join(root, PROD_MAIN));
  assert.equal(original.toString('utf8').split('\n')[0], MARKER, `${PROD_MAIN} starts with the marker line`);
  const generatedMains = fs.readdirSync(path.join(root, 'lib/ts'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== 'PROD').map((d) => `lib/ts/${d.name}/main.ts`);
  const before = new Map(generatedMains.map((f) => [f, fs.readFileSync(path.join(root, f))]));

  // The build:js steps, in package.json's order (rm -rf lib/js is implicit: the copy has none).
  const work = path.join(tmp, 'work');
  copyTree(work);
  run('node', ['./scripts/createTSIndex.js'], work);
  assert.equal(Buffer.compare(fs.readFileSync(path.join(work, PROD_MAIN)), original), 0, `${PROD_MAIN} is byte-identical after createTSIndex.js`);
  const index = fs.readFileSync(path.join(work, INDEX), 'utf8');
  assert.equal(index.split('\n').filter((l) => l === PROD_EXPORT).length, 1, 'lib/ts/index.ts exports PROD once');
  assert.equal(index, fs.readFileSync(path.join(root, INDEX), 'utf8'), 'lib/ts/index.ts is regenerated as committed');
  let regenerated = 0;
  for (const [f, bytes] of before) {
    assert.equal(Buffer.compare(fs.readFileSync(path.join(work, f)), bytes), 0, `${f} is regenerated unchanged`);
    regenerated += 1;
  }
  assert.ok(!fs.existsSync(path.join(work, 'lib/ts/PROD/flatbuffers-encryption.ts')), 'no walk-program runtime is written for PROD');
  run('node', ['./scripts/fixTSCasing.js'], work);
  run(path.join(root, 'node_modules/.bin/tsc'), ['-p', 'tsconfig.json'], work);
  for (const entry of fs.readdirSync(path.join(work, 'lib/js/ts'))) fs.renameSync(path.join(work, 'lib/js/ts', entry), path.join(work, 'lib/js', entry));
  const modules = ['frames', 'record', 'tokens', 'main'];
  for (const m of modules) {
    for (const ext of ['.js', '.d.ts']) assert.ok(fs.existsSync(path.join(work, `lib/js/PROD/${m}${ext}`)), `lib/js/PROD/${m}${ext} exists`);
  }
  assert.equal(fs.readFileSync(path.join(work, 'lib/js/PROD/main.js'), 'utf8').split('\n')[0], MARKER, 'lib/js/PROD/main.js keeps the marker line');
  assert.ok(fs.readFileSync(path.join(work, 'lib/js/index.js'), 'utf8').includes(PROD_EXPORT), 'lib/js/index.js exports PROD');
  assert.equal(Buffer.compare(fs.readFileSync(path.join(work, PROD_MAIN)), original), 0, `${PROD_MAIN} is byte-identical after the build:js steps`);

  // The archive step of the release build: a hand-written directory is neither archived nor a manifest standard.
  run('python3', ['./scripts/generateArchives.py'], work);
  assert.ok(!fs.existsSync(path.join(work, 'dist/PROD')), 'generateArchives.py writes no dist/PROD');
  const manifest = JSON.parse(fs.readFileSync(path.join(work, 'dist/manifest.json'), 'utf8'));
  const schemaCodes = fs.readdirSync(path.join(root, 'schema'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(root, 'schema', d.name, 'main.fbs'))).map((d) => d.name).sort();
  assert.deepEqual(Object.keys(manifest.STANDARDS).sort(), schemaCodes, 'the manifest STANDARDS are exactly the schema set');
  assert.ok(!('PROD' in manifest.STANDARDS), 'no PROD manifest key');
  assert.ok(fs.existsSync(path.join(work, 'dist/OCM/OCM.ts.tar.gz')), 'the generated standards are still archived');

  // Control: without the marker the generator treats PROD as flatc output and fails on the missing lib/py/PROD.
  const control = path.join(tmp, 'control');
  copyTree(control);
  fs.writeFileSync(path.join(control, PROD_MAIN), original.toString('utf8').split('\n').slice(1).join('\n'));
  const failed = spawnSync('node', ['./scripts/createTSIndex.js'], { cwd: control, encoding: 'utf8' });
  assert.notEqual(failed.status, 0, 'createTSIndex.js without the marker fails');
  assert.match(failed.stderr, /lib\/py\/PROD is missing/, 'it fails on the missing walk programs, as the build did before');

  console.log(`PASS: lib/ts/PROD survives build:js: ${PROD_MAIN} byte-identical through createTSIndex.js, fixTSCasing.js and tsc; PROD exported once from lib/ts/index.ts; `
    + `${modules.length} lib/js/PROD modules compiled with .d.ts and main.js keeps the marker; ${regenerated} generated main.ts files regenerated unchanged; `
    + `generateArchives.py writes no dist/PROD and the manifest STANDARDS are the ${schemaCodes.length} schema codes; the control without the marker fails in createTSIndex.js`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
