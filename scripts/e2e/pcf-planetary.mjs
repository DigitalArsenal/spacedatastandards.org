#!/usr/bin/env node
// One E2E for the planetary fields of $PCF and $NCD (SDS 1.267.0), all appended,
// none retyped or renumbered: pcfGravitySelection MRO120F = 8,
// pcfAtmosphereFamily MARS_EXPONENTIAL = 7, PCFForceModel
// THIRD_BODY_MAXIMUM_DEGREE and THIRD_BODY_MAXIMUM_ORDER (ushort, default 0,
// after EMPIRICAL_TERMS), ncdContainerFormat PCK_DAF = 32 (before the
// PROVIDER_DEFINED sentinel). This run proves:
//   1. the numbering is append-only: each new member sits after the old tail
//      with its number, the two fields are the last of PCFForceModel, and the
//      generated JS carries the numbers;
//   2. a $PCF that configures FFM about Mars (central body 499, MRO120F,
//      MARS_EXPONENTIAL, a third-body field of degree 20 and order 15) and an
//      $NCD whose FORMAT is PCK_DAF round-trip JS -> C++ -> Go -> JS, every
//      member of both $PCF enums and the ushort extremes (0, 1, 65535) included,
//      and JS re-encoding reproduces the first buffer byte for byte;
//   3. a buffer SDS 1.266.0 wrote (fixtures/pcf-1266.fb, the generated JS of
//      that release) decodes in JS, C++ and Go with the new fields at their
//      defaults and everything else intact, and re-encodes to the same bytes.
// Default: candidate (lib/ and dist/ of this tree). --published VERSION: the
// immutable npm archive and Go module of that release.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: pcf-planetary.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-pcf-planetary-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
// The buffer 1.266.0 wrote, pinned so it cannot be regenerated under the new schema by accident.
const GOLDEN = { release: '1.266.0', file: 'pcf-1266', sha256: '727c42ee4a1cac6fc37b9ef7416c0c144b42c9beb70308e8a84f729e74387694' };
const MARS = 499;
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
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdspcfplanetarye2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  // ---- 1. Append-only numbering, in the IDL and in the generated JS.
  const pcf = parseIdl(schemaRoot, 'PCF');
  const ncd = parseIdl(schemaRoot, 'NCD');
  const members = (model, name) => model.enums.get(name).members.map((m) => `${m.name}=${m.value}`);
  assert.deepEqual(members(pcf, 'pcfGravitySelection'), ['INFER_FLAGS=0', 'POINT_MASS=1', 'J2_ONLY=2', 'J2_TO_J4=3', 'SPHERICAL_HARMONICS=4', 'EGM2008=5', 'EGM96=6', 'GRGM660PRIM=7', 'MRO120F=8']);
  assert.deepEqual(members(pcf, 'pcfAtmosphereFamily'), ['UNSPECIFIED=0', 'NRLMSISE00=1', 'EXPONENTIAL=2', 'USSA1976=3', 'HARRIS_PRIESTER=4', 'JACCHIA_ROBERTS=5', 'JB2008=6', 'MARS_EXPONENTIAL=7']);
  assert.deepEqual(members(ncd, 'ncdContainerFormat').slice(-4), ['RINEX_OBS=30', 'RINEX_NAV=31', 'PCK_DAF=32', 'PROVIDER_DEFINED=255'], 'PCK_DAF takes the next free ordinal, ahead of the sentinel');
  assert.equal(new Set(members(ncd, 'ncdContainerFormat').map((m) => m.split('=')[1])).size, members(ncd, 'ncdContainerFormat').length, 'no ordinal is used twice');
  const forceFields = pcf.tables.get('PCFForceModel').fields;
  assert.deepEqual(forceFields.slice(-3).map((f) => f.name), ['EMPIRICAL_TERMS', 'THIRD_BODY_MAXIMUM_DEGREE', 'THIRD_BODY_MAXIMUM_ORDER'], 'the new fields are appended after EMPIRICAL_TERMS');
  for (const f of forceFields.slice(-2)) assert.deepEqual([f.elem, f.vector, f.def, f.required], ['ushort', false, '0', false], `${f.name} is a ushort defaulting to 0`);
  const P = await import(pathToFileURL(path.join(artifact, 'lib/js/PCF/main.js')));
  const N = await import(pathToFileURL(path.join(artifact, 'lib/js/NCD/main.js')));
  assert.equal(P.pcfGravitySelection.MRO120F, 8);
  assert.equal(P.pcfAtmosphereFamily.MARS_EXPONENTIAL, 7);
  assert.equal(N.ncdContainerFormat.PCK_DAF, 32);
  assert.equal(new P.PCFForceModelT().THIRD_BODY_MAXIMUM_DEGREE, 0);
  assert.equal(new P.PCFForceModelT().THIRD_BODY_MAXIMUM_ORDER, 0);

  // ---- 2 and 3. Round trips through the generated C++ and Go readers and builders.
  const plain = (object) => JSON.parse(JSON.stringify(object, (_k, v) => (typeof v === 'bigint' ? { $int64: v.toString() } : v)), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v));
  const forces = (extra) => Object.assign(new P.PCFForceModelT(), { EPHEMERIS_SOURCE: 'DE440' }, extra);
  const config = (extra) => Object.assign(new P.PCFT(), { FORCES: forces(extra) });

  // The sweeps: every member of both $PCF enums, then the ushort extremes, each in a small buffer.
  const pcfSweeps = [];
  for (const m of pcf.enums.get('pcfGravitySelection').members) {
    assert.equal(P.pcfGravitySelection[m.name], m.value);
    pcfSweeps.push([`gravity ${m.name}`, () => config({ GRAVITY_CHOICE: m.value, CENTRAL_BODY_NAIF_ID: m.name === 'MRO120F' ? MARS : 399 })]);
  }
  for (const m of pcf.enums.get('pcfAtmosphereFamily').members) {
    assert.equal(P.pcfAtmosphereFamily[m.name], m.value);
    pcfSweeps.push([`atmosphere ${m.name}`, () => config({ ATMOSPHERE_MODEL: m.value, ENABLE_DRAG: true, CENTRAL_BODY_NAIF_ID: m.name === 'MARS_EXPONENTIAL' ? MARS : 399 })]);
  }
  for (const [degree, order] of [[0, 0], [1, 0], [20, 15], [65535, 65535]]) pcfSweeps.push([`third body ${degree}x${order}`, () => config({ THIRD_BODY_MAXIMUM_DEGREE: degree, THIRD_BODY_MAXIMUM_ORDER: order })]);
  const ncdSweeps = [];
  for (const m of ncd.enums.get('ncdContainerFormat').members) {
    assert.equal(N.ncdContainerFormat[m.name], m.value);
    ncdSweeps.push([`format ${m.name}`, () => Object.assign(new N.NCDT(), { FORMAT: m.value })]);
  }

  // The golden 1.266.0 buffer: what that release decoded, plus the two new fields at their defaults.
  const goldenBytes = fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${GOLDEN.file}.fb`));
  assert.equal(crypto.createHash('sha256').update(goldenBytes).digest('hex'), GOLDEN.sha256, `the ${GOLDEN.release} golden buffer is pinned`);
  const goldenBefore = JSON.parse(fs.readFileSync(path.join(root, `scripts/e2e/fixtures/${GOLDEN.file}.json`), 'utf8'), (_k, v) => (v && typeof v === 'object' && typeof v.$int64 === 'string' ? BigInt(v.$int64) : v));
  assert.ok(!('THIRD_BODY_MAXIMUM_DEGREE' in goldenBefore.FORCES), `${GOLDEN.release} had no third-body field`);
  const goldenExpected = structuredClone(goldenBefore);
  Object.assign(goldenExpected.FORCES, { THIRD_BODY_MAXIMUM_DEGREE: 0, THIRD_BODY_MAXIMUM_ORDER: 0 });

  const cases = [
    {
      name: 'PCF', code: 'PCF', model: pcf, M: P, sweeps: pcfSweeps,
      build: (visited) => {
        const value = populate(pcf, P, 'PCF', visited);
        // FFM about Mars: MRO120F, the Mars atmosphere and a third-body field of degree 20 and order 15.
        Object.assign(value.FORCES, { CENTRAL_BODY_NAIF_ID: MARS, GRAVITY_CHOICE: P.pcfGravitySelection.MRO120F, ATMOSPHERE_MODEL: P.pcfAtmosphereFamily.MARS_EXPONENTIAL, THIRD_BODY_MAXIMUM_DEGREE: 20, THIRD_BODY_MAXIMUM_ORDER: 15 });
        return value;
      },
      check: (back) => assert.deepEqual([back.FORCES.GRAVITY_CHOICE, back.FORCES.ATMOSPHERE_MODEL, back.FORCES.CENTRAL_BODY_NAIF_ID, back.FORCES.THIRD_BODY_MAXIMUM_DEGREE, back.FORCES.THIRD_BODY_MAXIMUM_ORDER], [8, 7, MARS, 20, 15]),
      control: { cpp: 'x.add_THIRD_BODY_MAXIMUM_DEGREE(s->THIRD_BODY_MAXIMUM_DEGREE());', go: 'PCFForceModelAddTHIRD_BODY_MAXIMUM_DEGREE(b, s.THIRD_BODY_MAXIMUM_DEGREE())' },
      golden: true,
    },
    {
      name: 'NCD', code: 'NCD', model: ncd, M: N, sweeps: ncdSweeps,
      build: (visited) => Object.assign(populate(ncd, N, 'NCD', visited), { FORMAT: N.ncdContainerFormat.PCK_DAF }),
      check: (back) => assert.equal(back.FORMAT, 32),
      control: { cpp: 'x.add_FORMAT(s->FORMAT());', go: 'NCDAddFORMAT(b, s.FORMAT())' },
    },
  ];

  for (const c of cases) {
    const Type = c.M[c.code];
    assert.equal(c.model.root, c.code);
    const reachable = closure(c.model, c.code);
    const visited = new Set();
    const value = c.build(visited);
    assert.deepEqual([...visited].sort(), [...reachable].sort(), `${c.name}: every reachable table must be populated`);
    const fieldCount = reachable.reduce((n, t) => n + c.model.tables.get(t).fields.length, 0);

    const dir = path.join(tmp, `work-${c.name}`);
    fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const jobs = [[c.name, value, null], ...c.sweeps.map(([label, make], i) => [`sweep-${i}`, make(), label])];
    if (c.golden) jobs.push(['golden', Type.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(goldenBytes))).unpack(), `${GOLDEN.release} buffer`]);
    for (const [name, object, label] of jobs) {
      if (name === 'golden') { fs.writeFileSync(path.join(dir, `${name}.js.fb`), goldenBytes); continue; }
      const b = new fb.Builder(1024);
      Type[`finish${c.code}Buffer`](b, object.pack(b));
      fs.writeFileSync(path.join(dir, `${name}.js.fb`), b.asUint8Array());
    }

    const populated = [...new Set([c.code, ...reachable])];
    run('tar', ['-xzf', path.join(artifact, `dist/${c.code}/${c.code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    const cppSource = cppCopySource({ model: c.model, root: c.code, include: `${c.code}/main_generated.h`, populated });
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), jobs.flatMap(([name]) => [`${name}.js.fb`, `${name}.cpp.fb`]), dir);

    const goDir = path.join(tmp, c.code);
    // The Go module cache is read-only: copy the package and make it writable so the harness file can be added.
    run('cp', ['-R', path.join(goRoot, c.code), goDir]);
    run('chmod', ['-R', 'u+w', goDir]);
    const goSource = goCopySource({ model: c.model, root: c.code, pkg: c.code, populated });
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
    fs.mkdirSync(path.join(tmp, `run${c.code}`), { recursive: true });
    fs.writeFileSync(path.join(tmp, `run${c.code}`, 'main.go'), `package main\nimport (\n "os"\n p "sdspcfplanetarye2e/${c.code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${c.code}`, ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

    for (const [name, expected, label] of jobs) {
      const original = fs.readFileSync(path.join(dir, `${name}.js.fb`));
      for (const rt of ['js', 'cpp', 'go']) {
        const bytes = fs.readFileSync(path.join(dir, `${name}.${rt}.fb`));
        const bb = new fb.ByteBuffer(new Uint8Array(bytes));
        assert.ok(Type.bufferHasIdentifier(bb), `${c.name} ${label ?? 'full'}: file identifier after ${rt}`);
        const back = Type[`getRootAs${c.code}`](bb).unpack();
        if (name === 'golden') {
          // Written before the fields existed: they read as 0, everything else as written.
          assert.deepStrictEqual(plain(back), goldenExpected, `${GOLDEN.release} buffer: ${rt} did not decode to what ${GOLDEN.release} wrote, plus the new defaults`);
        } else {
          assert.deepStrictEqual(back, expected, `${c.name} ${label ?? 'full'}: ${rt} changed a field`);
          if (name === c.name) c.check(back);
        }
        if (rt === 'go') {
          // byte for byte: re-encoding what Go wrote reproduces the first buffer exactly (for the golden buffer too: the new fields at 0 add no bytes)
          const again = new fb.Builder(1024);
          Type[`finish${c.code}Buffer`](again, back.pack(again));
          assert.equal(Buffer.compare(Buffer.from(again.asUint8Array()), original), 0, `${c.name} ${label ?? 'full'}: JS re-encoding differs from the original bytes`);
        }
      }
    }

    // Negative control: a copy that drops the new field (or the new member's carrier) must be caught by the same comparison.
    const decode = (file) => Type[`getRootAs${c.code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
    const cppControl = cppSource.replace(c.control.cpp, '');
    assert.notEqual(cppControl, cppSource, `${c.name}: control mutation must apply to the C++ copy`);
    fs.writeFileSync(path.join(dir, 'control.cpp'), cppControl);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'control.cpp', '-o', 'control'], dir);
    run(path.join(dir, 'control'), [`${c.name}.js.fb`, 'control.cpp.fb'], dir);
    assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), `${c.name}: a C++ copy that drops a field must differ`);
    const goControl = goSource.replace(c.control.go, '');
    assert.notEqual(goControl, goSource, `${c.name}: control mutation must apply to the Go copy`);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goControl);
    run('go', ['run', '-mod=mod', `./run${c.code}`, path.join(dir, `${c.name}.cpp.fb`), path.join(dir, 'control.go.fb')]);
    assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), `${c.name}: a Go copy that drops a field must differ`);

    // The JSON schema the registry serves carries every field name exactly as the IDL spells it.
    const fbjson = fs.readFileSync(path.join(artifact, `lib/fbjson/${c.code}/main.fb.schema.json`), 'utf8');
    for (const t of reachable) for (const f of c.model.tables.get(t).fields) assert.ok(fbjson.includes(`"${f.name}"`), `${c.code} fbjson schema lacks ${t}.${f.name}`);
    const full = fs.readFileSync(path.join(dir, `${c.name}.js.fb`));
    summary.push(`${c.name}: ${reachable.length} tables, ${fieldCount} fields, ${jobs.length - 1} sweep buffers${c.golden ? ` (the ${GOLDEN.release} buffer among them)` : ''}, ${full.length} bytes sha256 ${crypto.createHash('sha256').update(full).digest('hex').slice(0, 16)}`);
  }
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; JS -> C++ -> Go -> JS, byte for byte; MRO120F=8, MARS_EXPONENTIAL=7, THIRD_BODY_MAXIMUM_DEGREE/ORDER, PCK_DAF=32; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
