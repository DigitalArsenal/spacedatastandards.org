#!/usr/bin/env node
// One E2E for a sensor shape that ends at an altitude ceiling ($SCV SCVSensorShapeContract, carried by $SNR as
// FIELD_OF_VIEW): a radar whose coverage is stated as the directions where it reaches a height above the Earth.
//   a. the IDL: scvSensorRangeBoundaryKind keeps RADIAL_SPHERICAL = 0 and LOCAL_Z_PLANE = 1 and appends
//      ALTITUDE_SHELL = 2; SCVSensorShapeContract keeps its 17 fields of 1.290.0 and appends MAX_ALTITUDE_M:double and
//      ALTITUDE_REFERENCE:SCVEllipsoid, last, with no NaN default; the 36 other types of $SCV are unchanged; no MIN or
//      MAX member; no field shares a name with an enum; the doc comments state the ceiling surface and the absent
//      reference;
//   b. JS -> C++ -> Go -> JS, byte-equal after every leg: a ground radar's outline (CUSTOM_POLYGON, SENSOR_LOCAL) cut at
//      2,000 km above the body's standard ellipsoid (no reference), a cone cut at 2,000 km above a 6378.16 km sphere
//      and bounded by a range, a shape of 1.290.0 (RADIAL_SPHERICAL, no ceiling: MAX_ALTITUDE_M reads 0 and
//      ALTITUDE_REFERENCE null), and every field of SCVSensorShapeContract populated; copies that drop MAX_ALTITUDE_M
//      (C++) or ALTITUDE_REFERENCE (Go) are caught;
//   c. fbjson: SCVSensorShapeContract ends with the two fields and scvSensorRangeBoundaryKind lists ALTITUDE_SHELL.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { allArms, closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-scv-ceiling-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.290.0 (c3d1bd0de): SCVSensorShapeContract's 17 fields (first 16 hex of the sha256 of their signature), and every
// other $SCV table (T) and enum (E): count and one digest over their signatures.
const SHAPE_1290 = [17, '89c8136232476e5b'];
const ADDED = ['MAX_ALTITUDE_M:double=', 'ALTITUDE_REFERENCE:SCVEllipsoid='];
const OTHERS = [36, '254a7940804b901a'];
const CEILING_M = 2000000;
const SPHERE_M = 6378160;

try {
  // ---- a. The IDL.
  const scv = parseIdl(schemaRoot, 'SCV');
  const snr = parseIdl(schemaRoot, 'SNR');
  const shape = scv.tables.get('SCVSensorShapeContract').fields;
  assert.equal(sha(tableSig({ fields: shape.slice(0, SHAPE_1290[0]) })).slice(0, 16), SHAPE_1290[1], 'SCVSensorShapeContract: the 1.290.0 fields are untouched');
  assert.deepEqual(shape.slice(SHAPE_1290[0]).map(fieldSig), ADDED, 'SCVSensorShapeContract: the two additions, last');
  for (const f of shape.slice(SHAPE_1290[0])) assert.ok(!/nan/i.test(String(f.def ?? '')), `${f.name}: no NaN default`);
  assert.equal(enumSig(scv.enums.get('scvSensorRangeBoundaryKind')), 'ubyte|RADIAL_SPHERICAL=0;LOCAL_Z_PLANE=1;ALTITUDE_SHELL=2', 'ALTITUDE_SHELL appended');
  const types = new Map();
  for (const [n, x] of scv.tables) types.set(`T${n}`, sha(tableSig(x)));
  for (const [n, e] of scv.enums) types.set(`E${n}`, sha(enumSig(e)));
  const others = [...types.keys()].filter((k) => !['TSCVSensorShapeContract', 'EscvSensorRangeBoundaryKind'].includes(k)).sort();
  assert.deepEqual([others.length, sha(others.map((k) => `${k}:${types.get(k)}`).join('\n')).slice(0, 16)], OTHERS, 'the other $SCV types are unchanged');
  for (const [n, e] of scv.enums) assert.ok(!e.members.some((m) => /^(MIN|MAX)$/i.test(m.name)), `${n}: no MIN/MAX member`);
  const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
  const enumNames = new Set([...scv.enums.keys()].map((n) => n.toLowerCase()));
  for (const f of shape) assert.ok(!enumNames.has(camel(f.name).toLowerCase()), `SCVSensorShapeContract.${f.name} shares a name with an enum`);
  assert.equal(snr.tables.get('SNR').fields.find((f) => f.name === 'FIELD_OF_VIEW').elem, 'SCVSensorShapeContract', '$SNR carries the same table');
  const lines = fs.readFileSync(path.join(schemaRoot, 'SCV/main.fbs'), 'utf8').split('\n');
  const docAbove = (re) => {
    const at = lines.findIndex((l) => re.test(l));
    assert.ok(at >= 0, `found ${re}`);
    const doc = [];
    for (let i = at - 1; i >= 0 && /^\s*\/\/\//.test(lines[i]); i--) doc.unshift(lines[i].replace(/^\s*\/\/\/\s?/, '').trim());
    return doc.join(' ');
  };
  assert.ok(docAbove(/^\s*ALTITUDE_SHELL\s*$/).includes('each direction ends at its own distance from the sensor'), 'ALTITUDE_SHELL: each direction at its own distance');
  assert.ok(docAbove(/^\s*ALTITUDE_SHELL\s*$/).includes('MAX_RANGE_M, when more than 0, still bounds every direction'), 'ALTITUDE_SHELL: the range still bounds');
  assert.ok(docAbove(/^\s*MAX_ALTITUDE_M:double;/).includes('every semi-axis made MAX_ALTITUDE_M longer'), 'MAX_ALTITUDE_M: the ceiling surface');
  assert.ok(docAbove(/^\s*ALTITUDE_REFERENCE:SCVEllipsoid;/).includes('Absent: the standard ellipsoid of the body the sensor is on'), 'ALTITUDE_REFERENCE: absent means the body');

  // ---- b. JS -> C++ -> Go -> JS.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/SNR/main.js')));
  const T = (cls, v) => Object.assign(new cls(), v);
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsscvceiling\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  const code = 'SNR';
  const encode = (o) => { const b = new fb.Builder(4096); M.SNR.finishSNRBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const decode = (f) => M.SNR.getRootAsSNR(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
  const wire = (messages, { cppDrop = null, goDrop = null } = {}) => {
    const tag = cppDrop ? 'controlcpp' : goDrop ? 'controlgo' : 'wire';
    const dir = path.join(tmp, `${tag}-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = [...new Set([code, ...closure(snr, code, { arms: allArms })])];
    // $SCV's SCVTarget has a field named DOMAIN, the macro a libc's <math.h> defines: pushed aside as the consumer does
    // (docs/name-collisions.md, as bindings-compile.mjs does for the umbrella header).
    let cppSource = '#include <flatbuffers/flatbuffers.h>\n#undef DOMAIN\n'
      + cppCopySource({ model: snr, root: code, include: `${code}/main_generated.h`, populated: copyTables });
    let goSource = goCopySource({ model: snr, root: code, pkg: code, populated: copyTables });
    if (cppDrop) { assert.ok(cppSource.includes(cppDrop), 'the C++ control applies'); cppSource = cppSource.replace(cppDrop, ''); }
    // The Go control keeps the child it built and only does not add it (Go refuses a variable left unused).
    if (goDrop) { assert.ok(goSource.includes(goDrop), 'the Go control applies'); goSource = goSource.replace(goDrop, goDrop.replace(/^.*\(b, (\w+)\).*$/, '_ = $1')); }
    run('tar', ['-xzf', path.join(root, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);
    const goDir = path.join(tmp, `${tag}${code}`);
    run('cp', ['-R', path.join(root, 'lib/go', code), goDir]); run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
    fs.mkdirSync(path.join(tmp, `run${tag}${code}`));
    fs.writeFileSync(path.join(tmp, `run${tag}${code}/main.go`), `package main\nimport (\n "os"\n p "sdsscvceiling/${tag}${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${tag}${code}`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);
    const back = {};
    for (const [name, o, populatedValue] of messages) {
      const js = fs.readFileSync(file(name, 'js'));
      const first = decode(file(name, 'js'));
      if (populatedValue) assert.deepStrictEqual(first, o, `${name}: JS changed a field`);
      back[name] = { cpp: decode(file(name, 'cpp')), go: decode(file(name, 'go')) };
      if (tag === 'wire') {
        for (const leg of ['cpp', 'go']) {
          assert.deepStrictEqual(back[name][leg], first, `${name}: ${leg} changed a field`);
          assert.equal(Buffer.compare(encode(back[name][leg]), js), 0, `${name}: the ${leg} leg re-encodes to the JS bytes`);
        }
        summary.push(`${name} ${js.length} B`);
      }
    }
    return back;
  };

  // A ground radar's outline: four points in the sensor's own axes, meters from the sensor (CUSTOM_POLYGON, SENSOR_LOCAL),
  // cut at 2,000 km above the Earth's standard ellipsoid (no reference given).
  const v = (X, Y, Z) => T(M.SCVVec3T, { X, Y, Z });
  const record = (SENSOR_ID, FIELD_OF_VIEW) => T(M.SNRT, { SENSOR_ID, NAME: SENSOR_ID, SITE_ID: 'e2e-site-ceiling', TYPE: M.SensorType.PHASED_ARRAY_EARLY_WARNING, FIELD_OF_VIEW });
  const outline = record('e2e-radar-outline', T(M.SCVSensorShapeContractT, {
    SHAPE_KIND: M.scvSensorShapeKind.CUSTOM_POLYGON, POLYGON_FRAME: M.scvCoordinateFrame.SENSOR_LOCAL,
    POLYGON_VERTICES: [v(2.1e6, 0, 2.0e6), v(0, 1.4e6, 2.2e6), v(-1.6e6, 0, 2.1e6), v(0, -1.4e6, 2.2e6)],
    RANGE_BOUNDARY: M.scvSensorRangeBoundaryKind.ALTITUDE_SHELL, MAX_ALTITUDE_M: CEILING_M,
  }));
  // A cone cut at 2,000 km above a 6378.16 km sphere and bounded by a 3,000 km range as well.
  const sphere = record('e2e-radar-sphere', T(M.SCVSensorShapeContractT, {
    SHAPE_KIND: M.scvSensorShapeKind.CONIC, OUTER_HALF_ANGLE_DEG: 40, MAX_RANGE_M: 3.0e6,
    RANGE_BOUNDARY: M.scvSensorRangeBoundaryKind.ALTITUDE_SHELL, MAX_ALTITUDE_M: CEILING_M,
    ALTITUDE_REFERENCE: T(M.SCVEllipsoidT, { BODY: M.scvBodyKind.EARTH, NAME: 'sphere 6378.16 km', SEMI_MAJOR_M: SPHERE_M, SEMI_MINOR_M: SPHERE_M }),
  }));
  // A shape as 1.290.0 wrote it: a sphere of range, no ceiling.
  const before = record('e2e-radar-1290', T(M.SCVSensorShapeContractT, { SHAPE_KIND: M.scvSensorShapeKind.CONIC, OUTER_HALF_ANGLE_DEG: 60, MAX_RANGE_M: 5.5e6 }));
  const visited = new Set();
  const full = record('e2e-radar-populated', populate(scv, M, 'SCVSensorShapeContract', visited));
  assert.ok(visited.has('SCVEllipsoid'), 'the populated shape carries ALTITUDE_REFERENCE');
  const back = wire([['outline', outline], ['sphere', sphere], ['before', before], ['populated', full, true]]);
  const o = back.outline.go.FIELD_OF_VIEW, s = back.sphere.go.FIELD_OF_VIEW, b = back.before.go.FIELD_OF_VIEW;
  assert.deepEqual([o.RANGE_BOUNDARY, o.MAX_ALTITUDE_M, o.ALTITUDE_REFERENCE, o.MAX_RANGE_M, o.POLYGON_VERTICES.length, o.POLYGON_VERTICES[0].X],
    [M.scvSensorRangeBoundaryKind.ALTITUDE_SHELL, CEILING_M, null, 0, 4, 2.1e6], 'outline: the ceiling, no reference, no range, every vertex');
  assert.deepEqual([s.RANGE_BOUNDARY, s.MAX_ALTITUDE_M, s.MAX_RANGE_M, s.ALTITUDE_REFERENCE.SEMI_MAJOR_M, s.ALTITUDE_REFERENCE.SEMI_MINOR_M, s.ALTITUDE_REFERENCE.SEMI_INTERMEDIATE_M],
    [M.scvSensorRangeBoundaryKind.ALTITUDE_SHELL, CEILING_M, 3.0e6, SPHERE_M, SPHERE_M, 0], 'sphere: the ceiling, the sphere, the range');
  assert.deepEqual([b.RANGE_BOUNDARY, b.MAX_ALTITUDE_M, b.ALTITUDE_REFERENCE, b.MAX_RANGE_M],
    [M.scvSensorRangeBoundaryKind.RADIAL_SPHERICAL, 0, null, 5.5e6], 'a 1.290.0 shape reads no ceiling');
  const raw = M.SNR.getRootAsSNR(new fb.ByteBuffer(new Uint8Array(encode(back.sphere.go)))).FIELD_OF_VIEW();
  assert.deepEqual([raw.RANGE_BOUNDARY(), raw.MAX_ALTITUDE_M(), raw.ALTITUDE_REFERENCE().SEMI_MAJOR_M(), raw.ALTITUDE_REFERENCE().BODY()],
    [M.scvSensorRangeBoundaryKind.ALTITUDE_SHELL, CEILING_M, SPHERE_M, M.scvBodyKind.EARTH], 'the new slots read by their accessors');
  // Controls: copies that drop a new slot read it absent and the comparison catches them.
  const cppControl = wire([['sphere', sphere]], { cppDrop: 'x.add_MAX_ALTITUDE_M(s->MAX_ALTITUDE_M());' });
  assert.equal(cppControl.sphere.cpp.FIELD_OF_VIEW.MAX_ALTITUDE_M, 0, 'a C++ copy without MAX_ALTITUDE_M reads 0');
  assert.throws(() => assert.deepStrictEqual(cppControl.sphere.cpp, back.sphere.go), 'a C++ copy that drops MAX_ALTITUDE_M must differ');
  const goDrop = goCopySourceLine(snr);
  const goControl = wire([['sphere', sphere]], { goDrop });
  assert.equal(goControl.sphere.go.FIELD_OF_VIEW.ALTITUDE_REFERENCE, null, 'a Go copy without ALTITUDE_REFERENCE reads none');
  assert.throws(() => assert.deepStrictEqual(goControl.sphere.go, back.sphere.go), 'a Go copy that drops ALTITUDE_REFERENCE must differ');

  // ---- c. fbjson.
  for (const code of ['SCV', 'SNR']) {
    const defs = JSON.parse(fs.readFileSync(path.join(root, `lib/fbjson/${code}/main.fb.schema.json`), 'utf8')).definitions;
    assert.deepEqual(Object.keys(defs.SCVSensorShapeContract.properties).slice(SHAPE_1290[0]), ['MAX_ALTITUDE_M', 'ALTITUDE_REFERENCE'], `fbjson ${code}: the shape ends with the two fields`);
    assert.deepEqual(defs.scvSensorRangeBoundaryKind.enum, ['RADIAL_SPHERICAL', 'LOCAL_Z_PLANE', 'ALTITUDE_SHELL'], `fbjson ${code}: ALTITUDE_SHELL listed`);
  }

  const version = fs.readFileSync(path.join(schemaRoot, 'SCV/main.fbs'), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} $SCV ${version} altitude ceiling: scvSensorRangeBoundaryKind + ALTITUDE_SHELL = 2, `
    + `SCVSensorShapeContract ${SHAPE_1290[0]} + 2 fields (MAX_ALTITUDE_M, ALTITUDE_REFERENCE), ${OTHERS[0]} other types unchanged, no NaN defaults; `
    + `byte-equal JS -> C++ -> Go -> JS in $SNR: ${summary.join(', ')}; a 1.290.0 shape reads no ceiling; `
    + 'dropped MAX_ALTITUDE_M caught in C++, dropped ALTITUDE_REFERENCE caught in Go; fbjson names both fields and the member');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

// The line of the generated Go copy program that writes ALTITUDE_REFERENCE (the control drops it).
function goCopySourceLine(model) {
  const source = goCopySource({ model, root: 'SNR', pkg: 'SNR', populated: [...new Set(['SNR', ...closure(model, 'SNR', { arms: allArms })])] });
  const line = source.split('\n').find((l) => l.includes('SCVSensorShapeContractAddALTITUDE_REFERENCE('));
  assert.ok(line, 'the Go copy writes ALTITUDE_REFERENCE');
  return line.trim();
}
