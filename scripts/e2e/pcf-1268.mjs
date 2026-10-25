#!/usr/bin/env node
// One E2E for SDS 1.268.0's two $PCF changes.
//   1. PCFEmpiricalTerms.HELD_ABOVE_DRAG_REGIME defaults to true, in its own
//      slot. An omitted field is not stored on the wire, so every buffer that
//      omits it reads differently now: a $PCF that carries EMPIRICAL_TERMS with
//      the field unset used to decay the empirical terms above the drag regime
//      and now holds them. Explicit values written by 1.268.0 keep their
//      meaning, because the builder stores whichever value differs from the
//      default.
//   2. PCFReentry gains HANDOFF_SAWTOOTH_KM (default 0.5) and
//      HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY (default 0.02) after
//      OSCULATING_STEP_SECONDS.
// This run proves:
//   a. the IDL: the flag keeps its slot and its type, now defaulting to true; the
//      two reentry fields are appended last, doubles with those defaults; the
//      $PCF schema version moved past 1.0.1, the one that defaulted it to false;
//   b. an unset flag reads true, and unset reentry fields read 0.5 and 0.02, in
//      JS, C++ and Go, read directly from buffers whose bytes show the field was
//      never written; explicit false and explicit zeros are stored and read back;
//      a C++ reader built with the old default fails the same check;
//   c. a $PCF with both changes populated, and the sweeps around them, round-trip
//      JS -> C++ -> Go -> JS, and JS re-encoding reproduces the first buffer byte
//      for byte;
//   d. buffers 1.266.0 and 1.267.0 wrote (fixtures/pcf-1266.fb, pcf-1267.fb, the
//      generated JS of those releases) decode in JS, C++ and Go: the 1.267.0
//      buffer never stored the flag and now reads true, the 1.266.0 buffer stored
//      an explicit true and still reads true, and both read the new reentry
//      fields at their defaults with everything else intact.
// Default: candidate (lib/ and dist/ of this tree). --published VERSION: the
// immutable npm archive and Go module of that release.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, completeWithDefaults, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: pcf-1268.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-pcf-1268-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
// The buffers earlier releases wrote, pinned so they cannot be regenerated under the new schema by accident.
const GOLDEN = [
  { release: '1.266.0', file: 'pcf-1266', sha256: '727c42ee4a1cac6fc37b9ef7416c0c144b42c9beb70308e8a84f729e74387694', storedFlag: true },
  { release: '1.267.0', file: 'pcf-1267', sha256: 'f414402fdada25cfdeda4ef70063948e39a2b9c9b9ba1caf6a756c605450301e', storedFlag: false },
];
const summary = [];

try {
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  let artifact = root;
  let goRoot = path.join(root, 'lib/go');
  if (published) {
    const packed = JSON.parse(run('npm', ['pack', `spacedatastandards.org@${published}`, '--json', '--ignore-scripts', '--pack-destination', tmp]));
    assert.equal(packed[0].version, published);
    run('tar', ['-xzf', path.join(tmp, packed[0].filename), '-C', tmp]);
    artifact = path.join(tmp, 'package');
    const mod = JSON.parse(run('go', ['mod', 'download', '-json', `github.com/DigitalArsenal/spacedatastandards.org/lib/go@v${published}`]));
    assert.equal(mod.Version, `v${published}`);
    assert.ok(mod.Dir, mod.Error);
    goRoot = mod.Dir;
  }
  const version = JSON.parse(fs.readFileSync(path.join(artifact, 'package.json'))).version.split('+')[0];
  if (published) assert.equal(version, published);
  assert.match(version, /^1\.\d+\.\d+$/);

  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  assert.ok(runtime.Dir, runtime.Error);
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdspcf1268e2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  // ---- a. The IDL.
  const pcf = parseIdl(schemaRoot, 'PCF');
  const terms = pcf.tables.get('PCFEmpiricalTerms').fields;
  assert.deepEqual(terms.slice(0, 5).map((f) => f.name), ['ONCE_PER_REVOLUTION', 'TAU0_RULE_LIMIT_M2_KG', 'HAS_TAU0_RULE_LIMIT_M2_KG', 'HELD_ABOVE_DRAG_REGIME', 'PERSISTENCE_HOURS'], 'the flag keeps its slot');
  const held = terms[3];
  assert.deepEqual([held.elem, held.vector, held.def, held.required], ['bool', false, 'true', false], 'HELD_ABOVE_DRAG_REGIME is a bool defaulting to true');
  const reentry = pcf.tables.get('PCFReentry').fields;
  const step = reentry.findIndex((f) => f.name === 'OSCULATING_STEP_SECONDS');
  assert.deepEqual(reentry.slice(step, step + 3).map((f) => [f.name, f.elem, f.vector, f.def]), [
    ['OSCULATING_STEP_SECONDS', 'double', false, '10'], ['HANDOFF_SAWTOOTH_KM', 'double', false, '0.5'], ['HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY', 'double', false, '0.02'],
  ], 'the reentry fields are appended after OSCULATING_STEP_SECONDS');
  const header = fs.readFileSync(path.join(schemaRoot, 'PCF/main.fbs'), 'utf8').match(/^\/\/ Version: (\d+)\.(\d+)\.(\d+)$/m);
  assert.ok(header && Number(header[1]) === 1 && Number(header[2]) === 0 && Number(header[3]) >= 2, `the $PCF schema version must be past 1.0.1, found ${header?.[0]}`);
  const P = await import(pathToFileURL(path.join(artifact, 'lib/js/PCF/main.js')));
  assert.equal(new P.PCFEmpiricalTermsT().HELD_ABOVE_DRAG_REGIME, true, 'generated JS defaults the flag to true');
  assert.deepEqual([new P.PCFReentryT().HANDOFF_SAWTOOTH_KM, new P.PCFReentryT().HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY], [0.5, 0.02], 'generated JS defaults the reentry fields');

  // ---- b. Direct reads of buffers whose fields were never written, and of ones whose fields were.
  const configuration = (empirical, reentryTable) => Object.assign(new P.PCFT(), {
    FORCES: Object.assign(new P.PCFForceModelT(), { EPHEMERIS_SOURCE: 'DE440', EMPIRICAL_TERMS: empirical }),
    REENTRY: reentryTable,
  });
  const terms_ = (flag) => Object.assign(new P.PCFEmpiricalTermsT(), flag === undefined ? {} : { HELD_ABOVE_DRAG_REGIME: flag });
  const reentry_ = (km, eccentricity) => Object.assign(new P.PCFReentryT(), km === undefined ? {} : { HANDOFF_SAWTOOTH_KM: km, HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY: eccentricity });
  const probes = [
    ['unset', configuration(terms_(), reentry_()), [1, 0.5, 0.02]],
    ['explicit true', configuration(terms_(true), reentry_(0.5, 0.02)), [1, 0.5, 0.02]],
    ['explicit false and zeros', configuration(terms_(false), reentry_(0, 0)), [0, 0, 0]],
    ['explicit values', configuration(terms_(true), reentry_(2.5, 0.125)), [1, 2.5, 0.125]],
  ];
  const encode = (object) => { const b = new fb.Builder(1024); P.PCF.finishPCFBuffer(b, object.pack(b)); return Buffer.from(b.asUint8Array()); };
  const probeDir = path.join(tmp, 'probes');
  fs.mkdirSync(probeDir);
  const probeBytes = probes.map(([label, object], i) => { const bytes = encode(object); fs.writeFileSync(path.join(probeDir, `${i}.fb`), bytes); return bytes; });
  // On the wire: unset and explicit true are the same bytes (the default is not stored); explicit false and explicit values are not.
  assert.equal(Buffer.compare(probeBytes[0], probeBytes[1]), 0, 'an unset flag and the default value have the same bytes: the field is never written');
  assert.notEqual(Buffer.compare(probeBytes[0], probeBytes[2]), 0, 'an explicit false is stored');
  assert.notEqual(Buffer.compare(probeBytes[0], probeBytes[3]), 0, 'explicit reentry values are stored');

  const readJs = (bytes) => {
    const c = P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(bytes)));
    return [c.FORCES().EMPIRICAL_TERMS().HELD_ABOVE_DRAG_REGIME() ? 1 : 0, c.REENTRY().HANDOFF_SAWTOOTH_KM(), c.REENTRY().HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY()];
  };
  const parse = (text) => text.trim().split('\n').map((line) => line.split(' ').map(Number));
  const files = probes.map((_p, i) => path.join(probeDir, `${i}.fb`));

  const cppRoot = path.join(tmp, 'cpp');
  fs.mkdirSync(cppRoot);
  run('tar', ['-xzf', path.join(artifact, 'dist/PCF/PCF.cpp.tar.gz'), '-C', cppRoot]);
  const readerCpp = `#include <cstdio>
#include <fstream>
#include <iterator>
#include <vector>
#include "PCF/main_generated.h"
int main(int argc, char **argv) {
  for (int i = 1; i < argc; ++i) {
    std::ifstream in(argv[i], std::ios::binary); std::vector<uint8_t> bytes((std::istreambuf_iterator<char>(in)), {});
    flatbuffers::Verifier v(bytes.data(), bytes.size());
    if (!VerifyPCFBuffer(v)) return 2;
    const PCF *c = GetPCF(bytes.data());
    const PCFEmpiricalTerms *e = c->FORCES() ? c->FORCES()->EMPIRICAL_TERMS() : nullptr;
    const PCFReentry *r = c->REENTRY();
    if (!e || !r) return 3;
    std::printf("%d %.17g %.17g\\n", e->HELD_ABOVE_DRAG_REGIME() ? 1 : 0, r->HANDOFF_SAWTOOTH_KM(), r->HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY());
  }
  return 0;
}
`;
  fs.writeFileSync(path.join(tmp, 'read.cpp'), readerCpp);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'read.cpp', '-o', 'read']);
  const viaCpp = parse(run(path.join(tmp, 'read'), files));

  const goDirRead = path.join(tmp, 'PCF');
  // The Go module cache is read-only: copy the package and make it writable so the harness files can be added.
  run('cp', ['-R', path.join(goRoot, 'PCF'), goDirRead]);
  run('chmod', ['-R', 'u+w', goDirRead]);
  fs.writeFileSync(path.join(goDirRead, 'read_e2e.go'), `package PCF
import ("fmt"; "os")
func ReadE2E(paths []string) {
  for _, path := range paths {
    data, err := os.ReadFile(path); if err != nil { panic(err) }
    c := GetRootAsPCF(data, 0)
    e := c.FORCES(nil).EMPIRICAL_TERMS(nil)
    r := c.REENTRY(nil)
    held := 0
    if e.HELD_ABOVE_DRAG_REGIME() { held = 1 }
    fmt.Printf("%d %.17g %.17g\\n", held, r.HANDOFF_SAWTOOTH_KM(), r.HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY())
  }
}
`);
  fs.mkdirSync(path.join(tmp, 'readPCF'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'readPCF', 'main.go'), 'package main\nimport (\n "os"\n p "sdspcf1268e2e/PCF"\n)\nfunc main() { p.ReadE2E(os.Args[1:]) }\n');
  const viaGo = parse(run('go', ['run', '-mod=mod', './readPCF', ...files]));
  probes.forEach(([label, , expected], i) => {
    assert.deepEqual(readJs(probeBytes[i]), expected, `${label}: JS read`);
    assert.deepEqual(viaCpp[i], expected, `${label}: C++ read`);
    assert.deepEqual(viaGo[i], expected, `${label}: Go read`);
  });
  // Control: a C++ reader whose header still defaults the flag to false reads the unset buffer wrong, so the check above can fail.
  const headerPath = path.join(cppRoot, 'PCF/main_generated.h');
  const header_ = fs.readFileSync(headerPath, 'utf8');
  const stale = header_.replace(/(GetField<uint8_t>\(VT_HELD_ABOVE_DRAG_REGIME, )1(\) != 0)/, (_m, a, b) => `${a}0${b}`);
  assert.notEqual(stale, header_, 'the generated header carries the flag default');
  const staleRoot = path.join(tmp, 'cpp-stale');
  fs.cpSync(cppRoot, staleRoot, { recursive: true });
  fs.writeFileSync(path.join(staleRoot, 'PCF/main_generated.h'), stale);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', staleRoot, 'read.cpp', '-o', 'read-stale']);
  assert.equal(parse(run(path.join(tmp, 'read-stale'), files))[0][0], 0, 'a reader with the old default reads an unset flag as false');
  summary.push(`unset flag reads true and unset reentry fields read 0.5 and 0.02 in JS, C++ and Go (${probes.length} buffers; the unset buffer equals the explicit-default one byte for byte; explicit false and zeros are stored)`);

  // ---- c and d. Round trips and the golden buffers.
  const reachable = closure(pcf, 'PCF');
  const visited = new Set();
  const value = populate(pcf, P, 'PCF', visited);
  assert.deepEqual([...visited].sort(), [...reachable].sort(), 'every reachable table must be populated');
  assert.equal(value.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME, false, 'the populated flag is the non-default value');
  assert.ok(value.REENTRY.HANDOFF_SAWTOOTH_KM !== 0.5 && value.REENTRY.HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY !== 0.02, 'the populated reentry fields are not the defaults');
  const fieldCount = reachable.reduce((n, t) => n + pcf.tables.get(t).fields.length, 0);

  const sweeps = [];
  for (const flag of [undefined, true, false]) sweeps.push([`flag ${flag === undefined ? 'unset' : flag}`, () => configuration(terms_(flag), reentry_())]);
  for (const [km, eccentricity] of [[0.5, 0.02], [0, 0], [2, 0.1], [1e-9, 0.999999], [1e6, 1e-9]]) sweeps.push([`sawtooth ${km} ${eccentricity}`, () => configuration(terms_(), reentry_(km, eccentricity))]);

  const plain = (object) => JSON.parse(JSON.stringify(object, (_k, v) => (typeof v === 'bigint' ? { $int64: v.toString() } : v)), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v));
  const dir = path.join(tmp, 'work');
  fs.mkdirSync(dir);
  const jobs = [['populated', value, null, null], ...sweeps.map(([label, make], i) => [`sweep-${i}`, make(), label, null])];
  for (const g of GOLDEN) {
    const bytes = fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${g.file}.fb`));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), g.sha256, `the ${g.release} golden buffer is pinned`);
    const before = JSON.parse(fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${g.file}.json`), 'utf8'), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v));
    assert.ok(!('HANDOFF_SAWTOOTH_KM' in before.REENTRY), `${g.release} had no sawtooth field`);
    // What the current schema reads from it: the new reentry fields at their defaults, and the flag as the wire says.
    const expected = completeWithDefaults(pcf, P, 'PCF', before);
    assert.deepEqual([expected.REENTRY.HANDOFF_SAWTOOTH_KM, expected.REENTRY.HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY], [0.5, 0.02]);
    if (g.storedFlag) assert.equal(before.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME, true, `${g.release} stored an explicit true`);
    else {
      // 1.267.0 read its default false and never wrote the field; the current schema reads that omission as true.
      assert.equal(before.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME, false);
      expected.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME = true;
    }
    jobs.push([g.file, P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(bytes))).unpack(), `${g.release} buffer`, { bytes, expected, g }]);
  }
  for (const [name, object, , golden] of jobs) {
    if (golden) { fs.writeFileSync(path.join(dir, `${name}.js.fb`), golden.bytes); continue; }
    fs.writeFileSync(path.join(dir, `${name}.js.fb`), encode(object));
  }

  const populatedTables = [...new Set(['PCF', ...reachable])];
  const cppSource = cppCopySource({ model: pcf, root: 'PCF', include: 'PCF/main_generated.h', populated: populatedTables });
  fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), jobs.flatMap(([name]) => [`${name}.js.fb`, `${name}.cpp.fb`]), dir);

  const goSource = goCopySource({ model: pcf, root: 'PCF', pkg: 'PCF', populated: populatedTables });
  fs.writeFileSync(path.join(goDirRead, 'wire_e2e.go'), goSource);
  fs.mkdirSync(path.join(tmp, 'runPCF'), { recursive: true });
  fs.writeFileSync(path.join(tmp, 'runPCF', 'main.go'), 'package main\nimport (\n "os"\n p "sdspcf1268e2e/PCF"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runPCF', ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

  for (const [name, expected, label, golden] of jobs) {
    const original = fs.readFileSync(path.join(dir, `${name}.js.fb`));
    for (const rt of ['js', 'cpp', 'go']) {
      const bytes = fs.readFileSync(path.join(dir, `${name}.${rt}.fb`));
      const bb = new fb.ByteBuffer(new Uint8Array(bytes));
      assert.ok(P.PCF.bufferHasIdentifier(bb), `${label ?? 'full'}: file identifier after ${rt}`);
      const back = P.PCF.getRootAsPCF(bb).unpack();
      if (golden) {
        assert.deepStrictEqual(plain(back), golden.expected, `${label}: ${rt} did not decode to what ${golden.g.release} wrote under the current defaults`);
        assert.equal(back.FORCES.EMPIRICAL_TERMS.HELD_ABOVE_DRAG_REGIME, true, `${label}: the flag reads true after ${rt}`);
        assert.deepEqual([back.REENTRY.HANDOFF_SAWTOOTH_KM, back.REENTRY.HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY], [0.5, 0.02], `${label}: the reentry fields read their defaults after ${rt}`);
      } else {
        assert.deepStrictEqual(back, expected, `${label ?? 'full'}: ${rt} changed a field`);
      }
      if (rt === 'go' && (!golden || !golden.g.storedFlag)) {
        // byte for byte: re-encoding what Go wrote reproduces the first buffer exactly. (The 1.266.0 buffer stored a true that is the default now, so it re-encodes smaller.)
        const again = encode(back);
        assert.equal(Buffer.compare(again, original), 0, `${label ?? 'full'}: JS re-encoding differs from the original bytes`);
      }
    }
  }

  // Negative controls: a copy that drops the flag or a reentry field must be caught by the same comparison.
  const decode = (file) => P.PCF.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
  const controls = [
    ['HELD_ABOVE_DRAG_REGIME', 'x.add_HELD_ABOVE_DRAG_REGIME(s->HELD_ABOVE_DRAG_REGIME());', 'PCFEmpiricalTermsAddHELD_ABOVE_DRAG_REGIME(b, s.HELD_ABOVE_DRAG_REGIME())'],
    ['HANDOFF_SAWTOOTH_KM', 'x.add_HANDOFF_SAWTOOTH_KM(s->HANDOFF_SAWTOOTH_KM());', 'PCFReentryAddHANDOFF_SAWTOOTH_KM(b, s.HANDOFF_SAWTOOTH_KM())'],
    ['HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY', 'x.add_HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY(s->HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY());', 'PCFReentryAddHANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY(b, s.HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY())'],
  ];
  for (const [field, cppLine, goLine] of controls) {
    const cppControl = cppSource.replace(cppLine, '');
    assert.notEqual(cppControl, cppSource, `${field}: control mutation must apply to the C++ copy`);
    fs.writeFileSync(path.join(dir, 'control.cpp'), cppControl);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', cppRoot, 'control.cpp', '-o', 'control'], dir);
    run(path.join(dir, 'control'), ['populated.js.fb', 'control.cpp.fb'], dir);
    assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), `a C++ copy that drops ${field} must differ`);
    const goControl = goSource.replace(goLine, '');
    assert.notEqual(goControl, goSource, `${field}: control mutation must apply to the Go copy`);
    fs.writeFileSync(path.join(goDirRead, 'wire_e2e.go'), goControl);
    run('go', ['run', '-mod=mod', './runPCF', path.join(dir, 'populated.cpp.fb'), path.join(dir, 'control.go.fb')]);
    assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), `a Go copy that drops ${field} must differ`);
  }

  // The JSON schema the registry serves carries every field name exactly as the IDL spells it.
  const fbjson = fs.readFileSync(path.join(artifact, 'lib/fbjson/PCF/main.fb.schema.json'), 'utf8');
  for (const t of reachable) for (const f of pcf.tables.get(t).fields) assert.ok(fbjson.includes(`"${f.name}"`), `PCF fbjson schema lacks ${t}.${f.name}`);
  const full = fs.readFileSync(path.join(dir, 'populated.js.fb'));
  summary.push(`PCF: ${reachable.length} tables, ${fieldCount} fields, ${sweeps.length} sweep buffers, ${full.length} bytes sha256 ${crypto.createHash('sha256').update(full).digest('hex').slice(0, 16)}`);
  summary.push(`earlier buffers (${GOLDEN.map((g) => g.release).join(', ')}): decode in JS, C++ and Go; the flag reads true in both, the reentry fields read 0.5 and 0.02, everything else intact`);
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; $PCF ${header[0].replace('// Version: ', '')}; JS -> C++ -> Go -> JS, byte for byte; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
