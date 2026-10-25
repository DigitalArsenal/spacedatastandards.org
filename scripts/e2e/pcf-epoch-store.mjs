#!/usr/bin/env node
// One E2E for $PCF 1.0.3's PCFEpochStore table (SDN-AP's multi-epoch store and its sync harness).
//   a. the IDL: EPOCH_STORE is appended last in PCF; the table's fields, types and defaults (CACHE_DAYS 7,
//      MAX_SETS_PER_OBJECT 0, SELECTION NEAREST, BLEND_WINDOW_SECONDS 3600, BLEND_SHAPE SMOOTHSTEP, THEORIES empty);
//   b. an absent table, an unset field and an explicit value read as the schema says in JS, C++ and Go, from
//      buffers whose bytes show what was written (an unset field equals the explicit default byte for byte);
//   c. a fully populated $PCF round-trips JS -> C++ -> Go -> JS, re-encoding reproduces the first bytes, and a copy
//      that drops CACHE_DAYS or THEORIES is caught by the same comparison;
//   d. the 1.267.0 golden buffer (no epoch store) decodes in all three languages with the table absent.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, completeWithDefaults, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-pcf-epoch-store-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdspcfepoch\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');

  // ---- a. The IDL.
  const pcf = parseIdl(path.join(root, 'schema'), 'PCF');
  const fields = pcf.tables.get('PCFEpochStore').fields;
  assert.deepEqual(fields.map((f) => [f.name, f.elem, f.vector, f.def ?? null]), [
    ['CACHE_DAYS', 'double', false, '7'], ['MAX_SETS_PER_OBJECT', 'uint', false, '0'], ['SELECTION', 'pcfEpochSelection', false, 'NEAREST'],
    ['BLEND_WINDOW_SECONDS', 'double', false, '3600'], ['BLEND_SHAPE', 'pcfBlendShape', false, 'SMOOTHSTEP'], ['THEORIES', 'pcfTheory', true, null],
  ]);
  const top = pcf.tables.get('PCF').fields;
  assert.deepEqual([top.at(-1).name, top.at(-1).elem], ['EPOCH_STORE', 'PCFEpochStore'], 'EPOCH_STORE is appended last');
  const header = fs.readFileSync(path.join(root, 'schema/PCF/main.fbs'), 'utf8').match(/^\/\/ Version: (\d+)\.(\d+)\.(\d+)$/m);
  assert.ok(Number(header[3]) >= 3, `the $PCF schema version must be past 1.0.2, found ${header[0]}`);
  const P = await import(pathToFileURL(path.join(root, 'lib/js/PCF/main.js')));
  const d = new P.PCFEpochStoreT();
  assert.deepEqual([d.CACHE_DAYS, d.MAX_SETS_PER_OBJECT, d.SELECTION, d.BLEND_WINDOW_SECONDS, d.BLEND_SHAPE, d.THEORIES], [7, 0, P.pcfEpochSelection.NEAREST, 3600, P.pcfBlendShape.SMOOTHSTEP, []], 'generated JS defaults');

  // ---- b. Reads in three languages.
  const encode = (o) => { const b = new fb.Builder(512); P.PCF.finishPCFBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const store = (x) => Object.assign(new P.PCFT(), { EPOCH_STORE: Object.assign(new P.PCFEpochStoreT(), x) });
  const probes = [
    ['absent table', new P.PCFT(), [-1, 0, 0, 0, 0, 0]],
    ['unset fields', store({}), [7, 0, 0, 3600, 0, 0]],
    ['explicit values', store({ CACHE_DAYS: 3.5, MAX_SETS_PER_OBJECT: 12, SELECTION: P.pcfEpochSelection.LATEST_BEFORE, BLEND_WINDOW_SECONDS: 0, BLEND_SHAPE: P.pcfBlendShape.HERMITE, THEORIES: [P.pcfTheory.SGP4XP, P.pcfTheory.SDNAP] }), [3.5, 12, 1, 0, 1, 2]],
  ];
  const bytes = probes.map(([, o]) => encode(o));
  assert.equal(Buffer.compare(encode(store({})), encode(store({ CACHE_DAYS: 7, SELECTION: 0, BLEND_WINDOW_SECONDS: 3600 }))), 0, 'an unset field and its explicit default are the same bytes');
  const probeDir = path.join(tmp, 'probes'); fs.mkdirSync(probeDir);
  const files = bytes.map((b, i) => { const f = path.join(probeDir, `${i}.fb`); fs.writeFileSync(f, b); return f; });
  const readJs = (b) => { const t = P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(b))).EPOCH_STORE(); return t ? [t.CACHE_DAYS(), t.MAX_SETS_PER_OBJECT(), t.SELECTION(), t.BLEND_WINDOW_SECONDS(), t.BLEND_SHAPE(), t.theoriesLength()] : [-1, 0, 0, 0, 0, 0]; };
  const parse = (text) => text.trim().split('\n').map((l) => l.split(' ').map(Number));
  const cppRoot = path.join(tmp, 'cpp'); fs.mkdirSync(cppRoot);
  run('tar', ['-xzf', path.join(root, 'dist/PCF/PCF.cpp.tar.gz'), '-C', cppRoot]);
  fs.writeFileSync(path.join(tmp, 'read.cpp'), `#include <cstdio>
#include <fstream>
#include <iterator>
#include <vector>
#include "PCF/main_generated.h"
int main(int argc, char **argv) {
  for (int i = 1; i < argc; ++i) {
    std::ifstream in(argv[i], std::ios::binary); std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
    flatbuffers::Verifier v(bytes.data(), bytes.size()); if (!VerifyPCFBuffer(v)) return 2;
    const PCFEpochStore *t = GetPCF(bytes.data())->EPOCH_STORE();
    if (!t) { std::printf("-1 0 0 0 0 0\\n"); continue; }
    std::printf("%.17g %u %d %.17g %d %u\\n", t->CACHE_DAYS(), t->MAX_SETS_PER_OBJECT(), (int)t->SELECTION(), t->BLEND_WINDOW_SECONDS(), (int)t->BLEND_SHAPE(), t->THEORIES() ? t->THEORIES()->size() : 0u);
  }
}
`);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'read.cpp', '-o', 'read']);
  const viaCpp = parse(run(path.join(tmp, 'read'), files));
  const goDir = path.join(tmp, 'PCF');
  run('cp', ['-R', path.join(root, 'lib/go/PCF'), goDir]); run('chmod', ['-R', 'u+w', goDir]);
  fs.writeFileSync(path.join(goDir, 'read_e2e.go'), `package PCF
import ("fmt"; "os")
func ReadE2E(paths []string) {
  for _, p := range paths {
    data, err := os.ReadFile(p); if err != nil { panic(err) }
    t := GetRootAsPCF(data, 0).EPOCH_STORE(nil)
    if t == nil { fmt.Println("-1 0 0 0 0 0"); continue }
    fmt.Printf("%.17g %d %d %.17g %d %d\\n", t.CACHE_DAYS(), t.MAX_SETS_PER_OBJECT(), t.SELECTION(), t.BLEND_WINDOW_SECONDS(), t.BLEND_SHAPE(), t.THEORIESLength())
  }
}
`);
  fs.mkdirSync(path.join(tmp, 'readPCF')); fs.writeFileSync(path.join(tmp, 'readPCF/main.go'), 'package main\nimport (\n "os"\n p "sdspcfepoch/PCF"\n)\nfunc main() { p.ReadE2E(os.Args[1:]) }\n');
  const viaGo = parse(run('go', ['run', '-mod=mod', './readPCF', ...files]));
  probes.forEach(([label, , expected], i) => {
    assert.deepEqual(readJs(bytes[i]), expected, `${label}: JS`); assert.deepEqual(viaCpp[i], expected, `${label}: C++`); assert.deepEqual(viaGo[i], expected, `${label}: Go`);
  });

  // ---- c. Round trip, populated.
  const reachable = closure(pcf, 'PCF');
  const visited = new Set();
  const value = populate(pcf, P, 'PCF', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table populated');
  assert.ok(reachable.includes('PCFEpochStore'));
  const dir = path.join(tmp, 'work'); fs.mkdirSync(dir);
  const golden = fs.readFileSync(path.join(root, 'scripts/e2e/fixtures/pcf-1267.fb'));
  fs.writeFileSync(path.join(dir, 'populated.js.fb'), encode(value));
  fs.writeFileSync(path.join(dir, 'golden.js.fb'), golden);
  const populatedTables = [...new Set(['PCF', ...reachable])];
  const cppSource = cppCopySource({ model: pcf, root: 'PCF', include: 'PCF/main_generated.h', populated: populatedTables });
  fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), ['populated.js.fb', 'populated.cpp.fb', 'golden.js.fb', 'golden.cpp.fb'], dir);
  const goSource = goCopySource({ model: pcf, root: 'PCF', pkg: 'PCF', populated: populatedTables });
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
  fs.mkdirSync(path.join(tmp, 'runPCF')); fs.writeFileSync(path.join(tmp, 'runPCF/main.go'), 'package main\nimport (\n "os"\n p "sdspcfepoch/PCF"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runPCF', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'populated.go.fb'), path.join(dir, 'golden.cpp.fb'), path.join(dir, 'golden.go.fb')]);
  const decode = (f) => P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, f))))).unpack();
  const plain = (o) => JSON.parse(JSON.stringify(o, (_k, v) => (typeof v === 'bigint' ? { $int64: v.toString() } : v)), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v));
  const goldenExpected = completeWithDefaults(pcf, P, 'PCF', JSON.parse(fs.readFileSync(path.join(root, 'scripts/e2e/fixtures/pcf-1267.json'), 'utf8'), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v)));
  goldenExpected.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME = true;
  for (const rt of ['js', 'cpp', 'go']) {
    assert.deepStrictEqual(decode(`populated.${rt}.fb`), value, `populated: ${rt} changed a field`);
    assert.equal(decode(`populated.${rt}.fb`).EPOCH_STORE.THEORIES.length > 0, true);
    assert.deepStrictEqual(plain(decode(`golden.${rt}.fb`)), goldenExpected, `1.267.0 buffer after ${rt}`);
    assert.equal(decode(`golden.${rt}.fb`).EPOCH_STORE, null, `1.267.0 buffer: table absent after ${rt}`);
  }
  assert.equal(Buffer.compare(encode(decode('populated.go.fb')), fs.readFileSync(path.join(dir, 'populated.js.fb'))), 0, 'JS re-encoding reproduces the first bytes');
  for (const [field, cppLine, goLine] of [['CACHE_DAYS', 'x.add_CACHE_DAYS(s->CACHE_DAYS());', 'PCFEpochStoreAddCACHE_DAYS(b, s.CACHE_DAYS())']]) {
    const c = cppSource.replace(cppLine, ''); assert.notEqual(c, cppSource, `${field}: C++ control applies`);
    fs.writeFileSync(path.join(dir, 'control.cpp'), c);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'control.cpp', '-o', 'control'], dir);
    run(path.join(dir, 'control'), ['populated.js.fb', 'control.cpp.fb'], dir);
    assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), `a C++ copy that drops ${field} must differ`);
    const g = goSource.replace(goLine, ''); assert.notEqual(g, goSource, `${field}: Go control applies`);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), g);
    run('go', ['run', '-mod=mod', './runPCF', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'control.go.fb')]);
    assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), `a Go copy that drops ${field} must differ`);
  }
  const fbjson = fs.readFileSync(path.join(root, 'lib/fbjson/PCF/main.fb.schema.json'), 'utf8');
  for (const f of fields) assert.ok(fbjson.includes(`"${f.name}"`), `fbjson schema lacks ${f.name}`);
  console.log(`PASS: $PCF ${header[0].replace('// Version: ', '')} PCFEpochStore: IDL, defaults and explicit values read the same in JS, C++ and Go; populated PCF (${reachable.length} tables) round-trips JS -> C++ -> Go -> JS byte for byte; the 1.267.0 buffer decodes with the table absent`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
