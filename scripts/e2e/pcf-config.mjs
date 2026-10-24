#!/usr/bin/env node
// One E2E: a $PCF 1.0 with every table and every field populated, a $PRW
// execution request that carries the tables it shares with $PCF (integrator,
// forces, events) and a populated $PRW execution result, each written by the
// generated JS, copied field by field by the generated C++ readers and
// builders, copied again by the generated Go ones, and read back by JS:
// JS -> C++ -> Go -> JS, every value equal and the JS re-encoding byte for byte
// the buffer it started from. The enum sweeps send every value of the shared
// integrator algorithm, the theory and the event enums through the same three
// runtimes, and a negative control proves the comparison notices a dropped field.
// The same run covers the GNSS navigation message ($GNM), the GNSS observation
// ($GNO) and the native-container descriptor ($NCD) of the release that follows.
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
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: pcf-config.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-pcf-config-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
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
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdspcfconfige2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  // The shared definition: $PCF 1.0 replaces 0.0.2, and $PRW no longer declares the tables it shares.
  const pcfSource = fs.readFileSync(path.join(schemaRoot, 'PCF/main.fbs'), 'utf8');
  assert.match(pcfSource, /^\/\/ Version: 1\.0\.\d+$/m, '$PCF must be 1.0');
  assert.doesNotMatch(pcfSource, /enum IntegratorType\b/, 'the 0.0.2 integrator enum must be gone');
  const prwSource = fs.readFileSync(path.join(schemaRoot, 'PRW/main.fbs'), 'utf8');
  for (const gone of ['prwSolverAlgorithm', 'PRWIntegratorSettings', 'PRWForceConfiguration', 'PRWSpaceWeather ', 'PRWEcom2', 'prwGravitySelection', 'prwAtmosphereFamily'])
    assert.ok(!new RegExp(`(enum|table) ${gone.trim()}\\b`).test(prwSource), `$PRW must not declare ${gone} itself`);
  assert.match(prwSource, /include "\.\.\/PCF\/main\.fbs";/);
  assert.match(prwSource, /INTEGRATOR:PCFIntegratorSettings \(required\);/);
  assert.match(prwSource, /FORCES:PCFForceModel \(required\);/);

  // Each case: a root, the table whose closure is populated, and how to build the JS value.
  const cases = [
    { name: 'PCF', code: 'PCF', start: 'PCF', sweeps: 'config', build: (model, M, visited) => populate(model, M, 'PCF', visited) },
    {
      name: 'PRW', code: 'PRW', start: 'PRWExecutionRequest', sweeps: 'request',
      build: (model, M, visited) => Object.assign(new M.PRWT(), { EXECUTION_REQUEST: populate(model, M, 'PRWExecutionRequest', visited) }),
    },
    {
      name: 'PRW-result', code: 'PRW', start: 'PRWExecutionResult', sweeps: null,
      build: (model, M, visited) => Object.assign(new M.PRWT(), { EXECUTION_RESULT: populate(model, M, 'PRWExecutionResult', visited) }),
    },
    {
      name: 'GNM', code: 'GNM', start: 'GNM', sweeps: null, build: (model, M, visited) => populate(model, M, 'GNM', visited),
      enums: [['gnssNavMessageType', (M, v) => Object.assign(new M.GNMT(), { MESSAGE_TYPE: v })]],
      tails: { gnssNavMessageType: ['UNSPECIFIED=0', 'LNAV=1', 'CNAV=2', 'CNV1=3', 'CNV2=4', 'CNV3=5', 'FNAV=6', 'INAV=7', 'D1=8', 'D2=9', 'FDMA=10', 'SBAS=11'] },
    },
    {
      name: 'GNO', code: 'GNO', start: 'GNO', sweeps: null, build: (model, M, visited) => populate(model, M, 'GNO', visited),
      enums: [['gnssObsType', (M, v) => Object.assign(new M.GNOT(), { SAT_OBS: [Object.assign(new M.gnssSatObsT(), { OBSERVATIONS: [Object.assign(new M.gnssObsDataT(), { OBS_TYPE: v })] })] })]],
      tails: { gnssObsType: ['RAW_IF=4', 'IONOSPHERE_PHASE_DELAY=5', 'CHANNEL_NUMBER=6'] },
    },
    {
      name: 'NCD', code: 'NCD', start: 'NCD', sweeps: null, build: (model, M, visited) => populate(model, M, 'NCD', visited),
      enums: [['ncdContainerFormat', (M, v) => Object.assign(new M.NCDT(), { FORMAT: v })]],
      tails: { ncdContainerFormat: ['CCSDS_RDM_XML=26', 'SENTINEL_EOF_XML=27', 'NAIF_CK_DAF=28', 'NAIF_SCLK_KERNEL=29', 'RINEX_OBS=30', 'RINEX_NAV=31', 'PCK_DAF=32', 'PROVIDER_DEFINED=255'] },
    },
  ];

  for (const c of cases) {
    const M = await import(pathToFileURL(path.join(artifact, `lib/js/${c.code}/main.js`)));
    const Type = M[c.code];
    const model = parseIdl(schemaRoot, c.code);
    assert.equal(model.root, c.code);
    const reachable = closure(model, c.start);
    const visited = new Set();
    const value = c.build(model, M, visited);
    assert.deepEqual([...visited].sort(), [...reachable].sort(), `${c.name}: every reachable table must be populated`);
    const fieldCount = reachable.reduce((n, t) => n + model.tables.get(t).fields.length, 0);

    // The enums the two standards share keep their numbers; every member is then sent through the runtimes, one small buffer each.
    const sweeps = [];
    const sweep = (label, make) => sweeps.push([label, make]);
    const shared = c.code === 'PCF' || c.code === 'PRW';
    const algorithm = shared ? model.enums.get('pcfIntegratorAlgorithm') : { members: [] };
    const theory = model.enums.get('pcfTheory');
    if (shared) {
      assert.ok(algorithm, `${c.name}: pcfIntegratorAlgorithm is the one integrator enum`);
      assert.ok(!model.enums.has('prwSolverAlgorithm') && !model.enums.has('IntegratorType'), `${c.name}: no second integrator enum`);
      assert.deepEqual(algorithm.members.map((m) => m.value), algorithm.members.map((_, i) => i), 'algorithm numbering is dense and append-only');
      const frozen = ['UNSPECIFIED', 'RK4', 'RKF45', 'RKF78', 'RK78', 'RKDP87', 'ABM', 'BS', 'COWELL', 'ENCKE', 'EQUINOCTIAL_VOP'];
      assert.deepEqual(algorithm.members.slice(0, frozen.length).map((m) => m.name), frozen, 'values 0-10 keep the numbers $PRW carried');
      assert.deepEqual(algorithm.members.slice(frozen.length).map((m) => m.name),
        ['DOPRI5', 'RK65', 'RKV98', 'RKN1210', 'GAUSS_JACKSON_8', 'GAUSS_VOP', 'DROMO', 'STIEFEL', 'DOPRI853']);
      const expectEnum = (enumName, names) => assert.deepEqual(model.enums.get(enumName).members.map((m) => `${m.name}=${m.value}`), names, `${enumName} numbering`);
      expectEnum('pcfEventKind', ['UNSPECIFIED=0', 'APSIS=1', 'PLANE_CROSSING=2', 'TRUE_ANOMALY=3', 'ARGUMENT_OF_LATITUDE=4', 'LATITUDE_EXTREMUM=5', 'UMBRA=6', 'PENUMBRA=7', 'CLOSEST_APPROACH=8', 'EXPRESSION=9']);
      expectEnum('pcfEventDirection', ['ANY=0', 'INCREASING=1', 'DECREASING=2']);
      expectEnum('pcfEventAction', ['CONTINUE=0', 'RECORD=1', 'STOP=2']);
    }
    // Enums a case owns: the appended tail keeps its numbers, then every member is sent through the runtimes.
    for (const [enumName, expected] of Object.entries(c.tails ?? {})) {
      const members = model.enums.get(enumName).members.map((m) => `${m.name}=${m.value}`);
      assert.deepEqual(members.slice(members.length - expected.length), expected, `${enumName} tail numbering`);
    }
    for (const [enumName, make] of c.enums ?? []) for (const m of model.enums.get(enumName).members) {
      assert.equal(M[enumName][m.name], m.value, `generated JS enum ${enumName}.${m.name}`);
      sweep(`${enumName} ${m.name}`, () => make(M, m.value));
    }
    if (c.sweeps) for (const m of algorithm.members) {
      assert.equal(M.pcfIntegratorAlgorithm[m.name], m.value, `generated JS enum ${m.name}`);
      sweep(`algorithm ${m.name}`, () => c.sweeps === 'config'
        ? Object.assign(new M.PCFT(), { INTEGRATOR: Object.assign(new M.PCFIntegratorSettingsT(), { ALGORITHM: m.value, ABSOLUTE_TOLERANCES: [1e-9, 1e-9, 1e-9, 1e-12, 1e-12, 1e-12] }) })
        : Object.assign(new M.PRWT(), { EXECUTION_REQUEST: (() => { const r = populate(model, M, 'PRWExecutionRequest', new Set()); r.INTEGRATOR.ALGORITHM = m.value; return r; })() }));
    }
    if (c.sweeps === 'config') {
      for (const m of theory.members) {
        assert.equal(M.pcfTheory[m.name], m.value);
        sweep(`theory ${m.name}`, () => Object.assign(new M.PCFT(), { THEORY: m.value }));
      }
      assert.deepEqual(theory.members.map((m) => m.name), ['UNSPECIFIED', 'SGP4', 'SGP4XP', 'SDNAP', 'FFM', 'KEPLER']);
      for (const [enumName, field] of [['pcfEventKind', 'KIND'], ['pcfEventDirection', 'DIRECTION'], ['pcfEventAction', 'ACTION']]) {
        for (const m of model.enums.get(enumName).members) {
          assert.equal(M[enumName][m.name], m.value);
          sweep(`${enumName} ${m.name}`, () => Object.assign(new M.PCFT(), {
            EVENTS: [Object.assign(new M.PCFEventDefinitionT(), { [field]: m.value, TOLERANCE_SECONDS: 2.5e-7, OCCURRENCE: 3 })],
          }));
        }
      }
    } else if (c.sweeps === 'request') {
      // $PRW reads the very tables $PCF defines, events included.
      const req = value.EXECUTION_REQUEST;
      assert.ok(req.INTEGRATOR instanceof M.PCFIntegratorSettingsT && req.FORCES instanceof M.PCFForceModelT);
      assert.ok(req.EVENTS.every((e) => e instanceof M.PCFEventDefinitionT) && req.EVENTS.length > 0);
    }

    const dir = path.join(tmp, `work-${c.name}`);
    fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const jobs = [[c.name, value], ...sweeps.map(([label, make], i) => [`sweep-${i}`, make(), label])];
    for (const [name, object] of jobs) {
      const b = new fb.Builder(1024);
      Type[`finish${c.code}Buffer`](b, object.pack(b));
      fs.writeFileSync(path.join(dir, `${name}.js.fb`), b.asUint8Array());
    }

    run('tar', ['-xzf', path.join(artifact, `dist/${c.code}/${c.code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppProgram(model, c, reachable));
    run(process.env.CXX || 'c++', ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), jobs.flatMap(([name]) => [`${name}.js.fb`, `${name}.cpp.fb`]), dir);

    const goDir = path.join(tmp, c.code);
    // The Go module cache is read-only: copy the package and make it writable so the harness file can be added.
    run('cp', ['-R', path.join(goRoot, c.code), goDir]);
    run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goProgram(model, c, reachable));
    fs.mkdirSync(path.join(tmp, `run${c.code}`), { recursive: true });
    fs.writeFileSync(path.join(tmp, `run${c.code}`, 'main.go'),
      `package main\nimport (\n "os"\n p "sdspcfconfige2e/${c.code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${c.code}`, ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

    for (const [name, expected, label] of jobs) {
      const original = fs.readFileSync(path.join(dir, `${name}.js.fb`));
      for (const rt of ['js', 'cpp', 'go']) {
        const bytes = fs.readFileSync(path.join(dir, `${name}.${rt}.fb`));
        const bb = new fb.ByteBuffer(new Uint8Array(bytes));
        assert.ok(Type[`bufferHasIdentifier`](bb), `${c.name} ${label ?? 'full'}: file identifier after ${rt}`);
        const back = Type[`getRootAs${c.code}`](bb).unpack();
        assert.deepStrictEqual(back, expected, `${c.name} ${label ?? 'full'}: ${rt} changed a field`);
        if (rt === 'go') {
          // byte for byte: re-encoding what Go wrote reproduces the first buffer exactly
          const again = new fb.Builder(1024);
          Type[`finish${c.code}Buffer`](again, back.pack(again));
          assert.equal(Buffer.compare(Buffer.from(again.asUint8Array()), original), 0, `${c.name} ${label ?? 'full'}: JS re-encoding differs from the original bytes`);
        }
      }
    }

    if (c.name === 'PCF') {
      // Negative control: a copy that drops one field must be caught by the same comparison.
      const decode = (file) => Type.getRootAsPCF(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
      const cppControl = cppProgram(model, c, reachable).replace('x.add_THEORY(s->THEORY());', '');
      assert.notEqual(cppControl, cppProgram(model, c, reachable), 'control mutation must apply to the C++ copy');
      fs.writeFileSync(path.join(dir, 'control.cpp'), cppControl);
      run(process.env.CXX || 'c++', ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'control.cpp', '-o', 'control'], dir);
      run(path.join(dir, 'control'), [`${c.name}.js.fb`, 'control.cpp.fb'], dir);
      assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), 'a C++ copy that drops PCF.THEORY must differ');
      const goSource = goProgram(model, c, reachable);
      const goControl = goSource.replace('PCFAddTHEORY(b, s.THEORY())', '');
      assert.notEqual(goControl, goSource, 'control mutation must apply to the Go copy');
      fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goControl);
      run('go', ['run', '-mod=mod', `./run${c.code}`, path.join(dir, `${c.name}.cpp.fb`), path.join(dir, 'control.go.fb')]);
      assert.throws(() => assert.deepStrictEqual(decode('control.go.fb'), value), 'a Go copy that drops PCF.THEORY must differ');
    }

    // The JSON schema the registry serves carries every field name exactly as the IDL spells it.
    const fbjson = fs.readFileSync(path.join(artifact, `lib/fbjson/${c.code}/main.fb.schema.json`), 'utf8');
    for (const t of reachable) for (const f of model.tables.get(t).fields)
      assert.ok(fbjson.includes(`"${f.name}"`), `${c.code} fbjson schema lacks ${t}.${f.name}`);
    const full = fs.readFileSync(path.join(dir, `${c.name}.js.fb`));
    summary.push(`${c.name}: ${reachable.length} tables, ${fieldCount} fields, ${jobs.length - 1} enum-sweep buffers, ${full.length} bytes sha256 ${crypto.createHash('sha256').update(full).digest('hex').slice(0, 16)}`);
  }
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; JS -> C++ -> Go -> JS, byte for byte; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

function cppProgram(model, c, reachable) {
  return cppCopySource({ model, root: c.code, include: `${c.code}/main_generated.h`, populated: [...new Set([c.code, ...reachable])] });
}

function goProgram(model, c, reachable) {
  return goCopySource({ model, root: c.code, pkg: c.code, populated: [...new Set([c.code, ...reachable])] });
}
