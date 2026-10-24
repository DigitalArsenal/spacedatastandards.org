#!/usr/bin/env node
// One E2E: an $OMM that carries the SDN-AP theory (MEAN_ELEMENT_THEORY SDNAP)
// about the Moon (CENTER_NAME MOON) in the Earth-Moon synodic frame (an
// RFMCoordinateSystem of AXIS_TYPE OBJECT_REFERENCED), a $LAM whose insertion
// orbit carries inclination and semi-major-axis sigmas, and the $MET theory
// enum, each written by the generated JS, copied field by field by the
// generated C++ readers and builders, copied again by the generated Go ones, and
// read back by JS: JS -> C++ -> Go -> JS, every value equal. Every member of
// meanElementSource and every arm of the reference-frame union is sent through
// the same three runtimes, and a negative control proves the comparison notices
// a dropped CENTER_NAME.
// Default: candidate (lib/ and dist/ of this tree). --published VERSION: the
// immutable npm archive and Go module of that release.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { allArms, closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const published = process.argv[2] === '--published' ? process.argv[3] : null;
if (process.argv.length > 2) assert.match(published ?? '', /^\d+\.\d+\.\d+$/, 'usage: met-sdnap.mjs [--published VERSION]');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-met-sdnap-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
const summary = [];

// The arm of the reference-frame union to build: the full coordinate system by default.
const armNamed = (name) => (_table, _field, union) => {
  const index = union.arms.findIndex((a) => a.name === name);
  return [index >= 0 ? index : union.arms.length - 1];
};
const synodicArm = armNamed('RFMCoordinateSystemWrapper');

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
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsmetsdnape2e\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const schemaRoot = path.join(artifact, 'schema');

  const cases = [
    {
      name: 'OMM', code: 'OMM', start: 'OMM', pick: synodicArm,
      // The values the task is about: SDNAP, the Moon, and the Earth-Moon synodic frame.
      build: (model, M, visited) => {
        const omm = populate(model, M, 'OMM', visited, { n: 1 }, [], synodicArm);
        omm.MEAN_ELEMENT_THEORY = M.meanElementSource.SDNAP;
        omm.CENTER_NAME = 'MOON';
        assert.equal(omm.REFERENCE_FRAME.REFERENCE_FRAME_type, model.unions.get('RFMUnion').arms.findIndex((a) => a.name === 'RFMCoordinateSystemWrapper') + 1);
        const frame = omm.REFERENCE_FRAME.REFERENCE_FRAME.COORDINATE_SYSTEM;
        Object.assign(frame, { NAME: 'EARTH_MOON_SYNODIC', AXIS_TYPE: M.rfmAxisType.OBJECT_REFERENCED });
        Object.assign(frame.ORIGIN, { KIND: M.rfmOriginKind.CELESTIAL_BODY, CELESTIAL_BODY_ID: 301 });
        Object.assign(frame.OBJECT_REFERENCED_AXES, {
          PRIMARY_OBJECT_ID: '399', SECONDARY_OBJECT_ID: '301',
          X_AXIS: M.rfmVectorSpecification.RADIAL, Y_AXIS: M.rfmVectorSpecification.UNSPECIFIED, Z_AXIS: M.rfmVectorSpecification.ORBIT_NORMAL,
        });
        return omm;
      },
      check: (M, back) => {
        assert.equal(back.MEAN_ELEMENT_THEORY, M.meanElementSource.SDNAP);
        assert.equal(back.CENTER_NAME, 'MOON');
        assert.equal(back.REFERENCE_FRAME.REFERENCE_FRAME_type, M.RFMUnion.RFMCoordinateSystemWrapper);
        const frame = back.REFERENCE_FRAME.REFERENCE_FRAME.COORDINATE_SYSTEM;
        assert.equal(frame.AXIS_TYPE, M.rfmAxisType.OBJECT_REFERENCED);
        assert.equal(frame.ORIGIN.CELESTIAL_BODY_ID, 301);
        assert.deepEqual([frame.OBJECT_REFERENCED_AXES.PRIMARY_OBJECT_ID, frame.OBJECT_REFERENCED_AXES.SECONDARY_OBJECT_ID], ['399', '301']);
        assert.equal(frame.OBJECT_REFERENCED_AXES.X_AXIS, M.rfmVectorSpecification.RADIAL);
        assert.equal(frame.OBJECT_REFERENCED_AXES.Z_AXIS, M.rfmVectorSpecification.ORBIT_NORMAL);
      },
      sweeps: (model, M) => [
        ...model.enums.get('meanElementSource').members.map((m) => [`meanElementSource ${m.name}`,
          () => Object.assign(new M.OMMT(), { MEAN_ELEMENT_THEORY: m.value, CENTER_NAME: 'MOON' })]),
        ...model.unions.get('RFMUnion').arms.map((arm, i) => [`RFMUnion ${arm.name}`,
          () => Object.assign(new M.OMMT(), { REFERENCE_FRAME: populate(model, M, 'RFM', new Set(), { n: 40 + i }, [], armNamed(arm.name)) })]),
      ],
    },
    {
      name: 'LAM', code: 'LAM', start: 'lamInsertionOrbit',
      build: (model, M, visited) => {
        const insertion = populate(model, M, 'lamInsertionOrbit', visited);
        Object.assign(insertion, {
          SEMI_MAJOR_AXIS_UNCERTAINTY_M: 250.5, HAS_SEMI_MAJOR_AXIS_UNCERTAINTY_M: true,
          INCLINATION_UNCERTAINTY_DEG: 0.015625, HAS_INCLINATION_UNCERTAINTY_DEG: true,
        });
        return Object.assign(new M.LAMT(), { INSERTION: insertion });
      },
      check: (M, back) => {
        const i = back.INSERTION;
        assert.deepEqual([i.SEMI_MAJOR_AXIS_UNCERTAINTY_M, i.HAS_SEMI_MAJOR_AXIS_UNCERTAINTY_M], [250.5, true]);
        assert.deepEqual([i.INCLINATION_UNCERTAINTY_DEG, i.HAS_INCLINATION_UNCERTAINTY_DEG], [0.015625, true]);
      },
      // A sigma of zero with its flag false stays absent, not "exact".
      sweeps: (model, M) => [['absent sigmas', () => Object.assign(new M.LAMT(), { INSERTION: Object.assign(new M.lamInsertionOrbitT(), { EPOCH: '2026-10-24T00:00:00Z' }) })]],
    },
    {
      name: 'MET', code: 'MET', start: 'MET',
      build: (model, M, visited) => populate(model, M, 'MET', visited),
      sweeps: (model, M) => model.enums.get('meanElementSource').members.map((m) => [`meanElementSource ${m.name}`, () => Object.assign(new M.METT(), { MEAN_ELEMENT_THEORY: m.value })]),
    },
  ];

  for (const c of cases) {
    const M = await import(pathToFileURL(path.join(artifact, `lib/js/${c.code}/main.js`)));
    const Type = M[c.code];
    const model = parseIdl(schemaRoot, c.code);
    assert.equal(model.root, c.code);
    const theory = model.enums.get('meanElementSource');
    if (c.code !== 'LAM') assert.deepEqual(theory.members.map((m) => `${m.name}=${m.value}`), ['SGP4=0', 'SGP4XP=1', 'DSST=2', 'USM=3', 'SDNAP=4'], 'SDNAP is appended to meanElementSource');
    const reachable = closure(model, c.start, { arms: c.pick ?? undefined });
    const populated = closure(model, c.start, { arms: allArms });
    const visited = new Set();
    const value = c.build(model, M, visited);
    assert.deepEqual([...visited].sort(), [...reachable].sort(), `${c.name}: every reachable table must be populated`);
    const fieldCount = reachable.reduce((n, t) => n + model.tables.get(t).fields.length, 0);

    const dir = path.join(tmp, `work-${c.name}`);
    fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const jobs = [[c.name, value], ...(c.sweeps?.(model, M) ?? []).map(([label, make], i) => [`sweep-${i}`, make(), label])];
    for (const [name, object] of jobs) {
      const b = new fb.Builder(1024);
      Type[`finish${c.code}Buffer`](b, object.pack(b));
      fs.writeFileSync(path.join(dir, `${name}.js.fb`), b.asUint8Array());
    }
    const program = cppCopySource({ model, root: c.code, include: `${c.code}/main_generated.h`, populated: [...new Set([c.code, ...populated])] });
    const compile = (source, file) => {
      fs.writeFileSync(path.join(dir, `${file}.cpp`), source);
      run(process.env.CXX || 'c++', ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), `${file}.cpp`, '-o', file], dir);
    };
    run('tar', ['-xzf', path.join(artifact, `dist/${c.code}/${c.code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    compile(program, 'copy');
    run(path.join(dir, 'copy'), jobs.flatMap(([name]) => [`${name}.js.fb`, `${name}.cpp.fb`]), dir);

    const goDir = path.join(tmp, c.code);
    fs.cpSync(path.join(goRoot, c.code), goDir, { recursive: true });
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: c.code, pkg: c.code, populated: [...new Set([c.code, ...populated])] }));
    fs.mkdirSync(path.join(tmp, `run${c.code}`), { recursive: true });
    fs.writeFileSync(path.join(tmp, `run${c.code}`, 'main.go'),
      `package main\nimport (\n "os"\n p "sdsmetsdnape2e/${c.code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${c.code}`, ...jobs.flatMap(([name]) => [path.join(dir, `${name}.cpp.fb`), path.join(dir, `${name}.go.fb`)])]);

    const decode = (file) => Type[`getRootAs${c.code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(dir, file))))).unpack();
    for (const [name, expected, label] of jobs) {
      for (const rt of ['js', 'cpp', 'go']) {
        const bytes = new Uint8Array(fs.readFileSync(path.join(dir, `${name}.${rt}.fb`)));
        assert.ok(Type.bufferHasIdentifier(new fb.ByteBuffer(bytes)), `${c.name} ${label ?? 'full'}: file identifier after ${rt}`);
        const back = decode(`${name}.${rt}.fb`);
        assert.deepStrictEqual(back, expected, `${c.name} ${label ?? 'full'}: ${rt} changed a field`);
        if (name === c.name && c.check) c.check(M, back);
      }
    }

    if (c.name === 'OMM') {
      // Negative control: a C++ copy that drops CENTER_NAME must be caught by the same comparison.
      const dropped = program.replace('x.add_CENTER_NAME(v_CENTER_NAME);', '');
      assert.notEqual(dropped, program, 'control mutation must apply to the C++ copy');
      compile(dropped, 'control');
      run(path.join(dir, 'control'), [`${c.name}.js.fb`, 'control.cpp.fb'], dir);
      assert.throws(() => assert.deepStrictEqual(decode('control.cpp.fb'), value), 'a C++ copy that drops OMM.CENTER_NAME must differ');
    }

    // The JSON schema the registry serves carries every field name exactly as the IDL spells it.
    const fbjson = fs.readFileSync(path.join(artifact, `lib/fbjson/${c.code}/main.fb.schema.json`), 'utf8');
    for (const t of reachable) for (const f of model.tables.get(t).fields) assert.ok(fbjson.includes(`"${f.name}"`), `${c.code} fbjson schema lacks ${t}.${f.name}`);
    summary.push(`${c.name}: ${reachable.length} tables, ${fieldCount} fields, ${jobs.length - 1} sweep buffers`);
  }
  console.log(`PASS: ${published ? 'published' : 'candidate'} SDS ${version}; JS -> C++ -> Go -> JS; SDNAP about the Moon in the Earth-Moon synodic frame; ${summary.join('; ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
