#!/usr/bin/env node
// One E2E for $PCF 1.0.6's prior forms: PCFFitPolicy DRAG_PRIOR_FORM and SRP_PRIOR_FORM, enum pcfPriorForm.
//   a. the IDL: pcfPriorForm is GAUSSIAN_SIGNED = 0 and LOG_NORMAL = 1; the two fields are appended last in PCFFitPolicy, after
//      SRP_PRIOR, each defaulting to GAUSSIAN_SIGNED; the generated JS defaults agree;
//   b. an absent FIT table, a FIT with the forms unset and every explicit pair read as the schema says in JS, C++ and Go, from
//      buffers whose bytes show what was written (an unset form equals an explicit GAUSSIAN_SIGNED byte for byte);
//   c. a fully populated $PCF round-trips JS -> C++ -> Go -> JS, re-encoding reproduces the first bytes, and a copy that drops
//      DRAG_PRIOR_FORM is caught by the same comparison;
//   d. the fbjson schema carries both fields.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-pcf-prior-form-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdspcfprior\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');

  // ---- a. The IDL.
  const pcf = parseIdl(path.join(root, 'schema'), 'PCF');
  assert.deepEqual(pcf.enums.get('pcfPriorForm').members.map((m) => `${m.name}=${m.value}`), ['GAUSSIAN_SIGNED=0', 'LOG_NORMAL=1'], 'pcfPriorForm numbering');
  const fit = pcf.tables.get('PCFFitPolicy').fields;
  assert.deepEqual(fit.slice(-4).map((f) => [f.name, f.elem, f.vector, f.def ?? null]), [
    ['DRAG_PRIOR', 'PCFGaussianPrior', false, null], ['SRP_PRIOR', 'PCFGaussianPrior', false, null],
    ['DRAG_PRIOR_FORM', 'pcfPriorForm', false, 'GAUSSIAN_SIGNED'], ['SRP_PRIOR_FORM', 'pcfPriorForm', false, 'GAUSSIAN_SIGNED'],
  ], 'the two forms are appended last in PCFFitPolicy, after the priors they qualify');
  const header = fs.readFileSync(path.join(root, 'schema/PCF/main.fbs'), 'utf8').match(/^\/\/ Version: (\d+)\.(\d+)\.(\d+)$/m);
  assert.ok(Number(header[1]) === 1 && Number(header[2]) === 0 && Number(header[3]) >= 6, `the $PCF schema version must be 1.0.6 or later, found ${header[0]}`);
  const P = await import(pathToFileURL(path.join(root, 'lib/js/PCF/main.js')));
  assert.deepEqual([P.pcfPriorForm.GAUSSIAN_SIGNED, P.pcfPriorForm.LOG_NORMAL], [0, 1], 'generated JS enum');
  const d = new P.PCFFitPolicyT();
  assert.deepEqual([d.DRAG_PRIOR_FORM, d.SRP_PRIOR_FORM], [P.pcfPriorForm.GAUSSIAN_SIGNED, P.pcfPriorForm.GAUSSIAN_SIGNED], 'generated JS defaults');

  // ---- b. Reads in three languages.
  const encode = (o) => { const b = new fb.Builder(512); P.PCF.finishPCFBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const prior = (mean, sigma) => Object.assign(new P.PCFGaussianPriorT(), { MEAN: mean, SIGMA: sigma, HAS_SIGMA: true });
  const policy = (x) => Object.assign(new P.PCFT(), { FIT: Object.assign(new P.PCFFitPolicyT(), { DRAG_PRIOR: prior(0.01, Math.LN10), SRP_PRIOR: prior(0.01, 1e-9) }, x) });
  const { GAUSSIAN_SIGNED: G, LOG_NORMAL: L } = P.pcfPriorForm;
  // each row: [absent FIT (1/0), DRAG_PRIOR_FORM, SRP_PRIOR_FORM, DRAG_PRIOR MEAN, SRP_PRIOR SIGMA]
  const probes = [
    ['absent FIT', new P.PCFT(), [1, 0, 0, 0, 0]],
    ['forms unset', policy({}), [0, 0, 0, 0.01, 1e-9]],
    ['drag LOG_NORMAL', policy({ DRAG_PRIOR_FORM: L }), [0, 1, 0, 0.01, 1e-9]],
    ['srp LOG_NORMAL', policy({ SRP_PRIOR_FORM: L }), [0, 0, 1, 0.01, 1e-9]],
    ['both LOG_NORMAL', policy({ DRAG_PRIOR_FORM: L, SRP_PRIOR_FORM: L }), [0, 1, 1, 0.01, 1e-9]],
  ];
  const bytes = probes.map(([, o]) => encode(o));
  assert.equal(Buffer.compare(encode(policy({})), encode(policy({ DRAG_PRIOR_FORM: G, SRP_PRIOR_FORM: G }))), 0, 'an unset form and an explicit GAUSSIAN_SIGNED are the same bytes');
  assert.notEqual(Buffer.compare(bytes[1], bytes[2]), 0, 'an explicit LOG_NORMAL is written');
  const probeDir = path.join(tmp, 'probes'); fs.mkdirSync(probeDir);
  const files = bytes.map((b, i) => { const f = path.join(probeDir, `${i}.fb`); fs.writeFileSync(f, b); return f; });
  const readJs = (b) => {
    const t = P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(b))).FIT();
    return t ? [0, t.DRAG_PRIOR_FORM(), t.SRP_PRIOR_FORM(), t.DRAG_PRIOR()?.MEAN() ?? 0, t.SRP_PRIOR()?.SIGMA() ?? 0] : [1, 0, 0, 0, 0];
  };
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
    const PCFFitPolicy *t = GetPCF(bytes.data())->FIT();
    if (!t) { std::printf("1 0 0 0 0\\n"); continue; }
    const pcfPriorForm drag = t->DRAG_PRIOR_FORM(), srp = t->SRP_PRIOR_FORM();
    std::printf("0 %d %d %.17g %.17g\\n", (int)drag, (int)srp, t->DRAG_PRIOR() ? t->DRAG_PRIOR()->MEAN() : 0.0, t->SRP_PRIOR() ? t->SRP_PRIOR()->SIGMA() : 0.0);
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
    t := GetRootAsPCF(data, 0).FIT(nil)
    if t == nil { fmt.Println("1 0 0 0 0"); continue }
    mean, sigma := 0.0, 0.0
    if q := t.DRAG_PRIOR(nil); q != nil { mean = q.MEAN() }
    if q := t.SRP_PRIOR(nil); q != nil { sigma = q.SIGMA() }
    var drag, srp pcfPriorForm = t.DRAG_PRIOR_FORM(), t.SRP_PRIOR_FORM()
    fmt.Printf("0 %d %d %.17g %.17g\\n", drag, srp, mean, sigma)
  }
}
`);
  fs.mkdirSync(path.join(tmp, 'readPCF')); fs.writeFileSync(path.join(tmp, 'readPCF/main.go'), 'package main\nimport (\n "os"\n p "sdspcfprior/PCF"\n)\nfunc main() { p.ReadE2E(os.Args[1:]) }\n');
  const viaGo = parse(run('go', ['run', '-mod=mod', './readPCF', ...files]));
  probes.forEach(([label, , expected], i) => {
    assert.deepEqual(readJs(bytes[i]), expected, `${label}: JS`); assert.deepEqual(viaCpp[i], expected, `${label}: C++`); assert.deepEqual(viaGo[i], expected, `${label}: Go`);
  });

  // ---- c. Round trip, populated, with a negative control.
  const reachable = closure(pcf, 'PCF');
  const visited = new Set();
  const value = populate(pcf, P, 'PCF', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table populated');
  value.FIT.DRAG_PRIOR_FORM = L; value.FIT.SRP_PRIOR_FORM = L;  // the non-default member, so a dropped field shows
  const dir = path.join(tmp, 'work'); fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, 'populated.js.fb'), encode(value));
  const populatedTables = [...new Set(['PCF', ...reachable])];
  const cppSource = cppCopySource({ model: pcf, root: 'PCF', include: 'PCF/main_generated.h', populated: populatedTables });
  fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), ['populated.js.fb', 'populated.cpp.fb'], dir);
  const goSource = goCopySource({ model: pcf, root: 'PCF', pkg: 'PCF', populated: populatedTables });
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
  fs.mkdirSync(path.join(tmp, 'runPCF')); fs.writeFileSync(path.join(tmp, 'runPCF/main.go'), 'package main\nimport (\n "os"\n p "sdspcfprior/PCF"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runPCF', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'populated.go.fb')]);
  const decode = (f) => P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, f))))).unpack();
  for (const rt of ['js', 'cpp', 'go']) {
    const back = decode(`populated.${rt}.fb`);
    assert.deepStrictEqual(back, value, `populated: ${rt} changed a field`);
    assert.deepEqual([back.FIT.DRAG_PRIOR_FORM, back.FIT.SRP_PRIOR_FORM], [L, L], `populated: ${rt} keeps both forms`);
  }
  assert.equal(Buffer.compare(encode(decode('populated.go.fb')), fs.readFileSync(path.join(dir, 'populated.js.fb'))), 0, 'JS re-encoding reproduces the first bytes');
  for (const [field, cppLine, goLine] of [['DRAG_PRIOR_FORM', 'x.add_DRAG_PRIOR_FORM(s->DRAG_PRIOR_FORM());', 'PCFFitPolicyAddDRAG_PRIOR_FORM(b, s.DRAG_PRIOR_FORM())']]) {
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

  // ---- d. The JSON schema.
  const fbjson = fs.readFileSync(path.join(root, 'lib/fbjson/PCF/main.fb.schema.json'), 'utf8');
  for (const name of ['DRAG_PRIOR_FORM', 'SRP_PRIOR_FORM']) assert.ok(fbjson.includes(`"${name}"`), `fbjson schema lacks ${name}`);
  console.log(`PASS: $PCF ${header[0].replace('// Version: ', '')} prior forms: the IDL, the defaults and every explicit pair read the same in JS, C++ and Go; a populated PCF (${reachable.length} tables) round-trips JS -> C++ -> Go -> JS byte for byte, and a copy that drops DRAG_PRIOR_FORM is caught`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
