#!/usr/bin/env node
// One E2E for the products program's schema record: $PRW prwDynamicParameter gains OUTGASSING_ACCELERATION = 16,
// $OCM documents the covariance rules, $ODR gains the per-input residual listing (P9) columns.
//   a. the IDL: prwDynamicParameter keeps its 16 members of 1.276.0 and gains OUTGASSING_ACCELERATION = 16, last;
//      PRWStateMatrix states that its parameter rows are the request's DYNAMIC_PARAMETERS in order, each in the unit
//      the enum defines; the $OCM root and OrbitDetermination carry the five sentences (COV_PARAMETERS solved-only in
//      the fixed order, COV_UNITS of COV_SIZE entries, OD_DYNAMIC_PARAMETERS naming every row with SOLVED_FOR truthful,
//      COV_REF_FRAME UVW, COV_ORDERING LTM) and no longer say a row not solved for is zero, with no $OCM field added,
//      removed or retyped; ODREditedObservation keeps its five fields and gains the seven P9 columns, last, the
//      observation type keyed on $MEM's measurement class; every other type of the three families is unchanged
//      (254 types, one digest); no new name contains USER_DEFINED;
//   b. the bindings: the value 16 under its name in the TS (lib/js), Python, C++ and Go outputs and in fbjson;
//   c. JS -> C++ -> Go -> JS: a $PRW execution result whose DYNAMIC_PARAMETERS end in OUTGASSING_ACCELERATION with an
//      11 x 11 covariance, an $ODR whose EDITED_OBSERVATIONS carry the P9 columns (an accepted laser range and an
//      edited angle pair), and the fully populated closure of each root, byte-equal after every leg;
//   d. fbjson: $ODR names the seven columns after REASON as the IDL does.
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
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-products-schema-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.276.0 (a39d51f52d): [count, first 16 hex of sha256 of the signature of the first `count` members or fields, additions in order].
const PRW_ENUM = ['prwDynamicParameter', 16, '3f42d5adcac9d8f7', ['OUTGASSING_ACCELERATION=16']];
const ODR_TABLE = ['ODREditedObservation', 5, '01715a23d9a69e95', ['EPOCH:string=', 'OBSERVATION_TYPE:memMeasurementType=UNSPECIFIED',
  'OBSERVED_VALUE:double=', 'COMPUTED_VALUE:double=', 'WEIGHT:double=', 'ACCEPTED:bool=false', 'PERTURBATION_MODEL_CODE:string=']];
// Every other table (T) and enum (E) of the $PRW, $ODR and $OCM families at 1.276.0: count and one digest over their signatures.
const UNCHANGED = [254, '92b068e7d15a4186'];
// $ODR now includes $MEM for the measurement class: these types are new to its closure and nothing else is.
const MEM_TYPES = ['EmemEditingAction', 'EmemEditingReason', 'EmemIonosphereModel', 'EmemMeasurementType', 'EmemTroposphereModel', 'TMEM', 'TMEMAttestation', 'TMEMEditingDecision', 'TMEMErrorModel'];
const OCM_SENTENCES = [
  ['OCM', 'COV_PARAMETERS', 'COV_PARAMETERS lists only the parameters the orbit determination solved for, in the fixed order DRAG_AREA_OVER_MASS, DRAG_AREA_OVER_MASS_RATE, SRP_AREA_OVER_MASS, IN_TRACK_ACCELERATION, OUTGASSING_ACCELERATION'],
  ['OCM', 'COV_UNITS', 'COV_UNITS has exactly COV_SIZE entries'],
  ['OrbitDetermination', 'OD_DYNAMIC_PARAMETERS', 'OD_DYNAMIC_PARAMETERS names every COV_PARAMETERS row, and SOLVED_FOR is truthful'],
  ['OCM', 'COV_REF_FRAME', 'COV_REF_FRAME UVW is the frame of a local-orbital covariance'],
  ['OCM', 'COV_ORDERING', 'COV_ORDERING LTM is the only ordering the product writers (lib/js/PROD) accept'],
];
const GONE = 'A row the orbit determination did not solve for is zero';
const STATE_MATRIX_SENTENCE = 'then the execution request\'s DYNAMIC_PARAMETERS in order, one row per parameter, each in the unit prwDynamicParameter defines for it (m**2/kg, m**2/kg/s, m**2/kg, m/s**2 and km/s**2 for DRAG_AREA_OVER_MASS, DRAG_AREA_OVER_MASS_RATE, SRP_AREA_OVER_MASS, IN_TRACK_ACCELERATION and OUTGASSING_ACCELERATION)';

// The doc comment (/// lines) right above a field of a table, or above a table, joined into one line.
function docOf(text, table, field = null) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => new RegExp(`^table ${table}\\b`).test(l));
  assert.ok(start >= 0, `table ${table}`);
  let at = start;
  if (field) {
    const end = lines.indexOf('}', start);
    at = lines.findIndex((l, i) => i > start && i < end && new RegExp(`^\\s*${field}\\s*:`).test(l));
    assert.ok(at > start, `${table}.${field}`);
  }
  const doc = [];
  for (let i = at - 1; i >= 0 && /^\s*\/\/\//.test(lines[i]); i--) doc.unshift(lines[i].replace(/^\s*\/\/\/\s?/, '').trim());
  return doc.join(' ');
}

try {
  // ---- a. The IDL.
  const models = Object.fromEntries(['PRW', 'ODR', 'OCM', 'MEM'].map((c) => [c, parseIdl(schemaRoot, c)]));
  const types = new Map();
  for (const c of ['PRW', 'ODR', 'OCM']) { for (const [n, t] of models[c].tables) types.set(`T${n}`, sha(tableSig(t))); for (const [n, e] of models[c].enums) types.set(`E${n}`, sha(enumSig(e))); }
  const [enumName, enumCount, enumDigest, enumAdded] = PRW_ENUM;
  const dyn = models.PRW.enums.get(enumName);
  assert.equal(sha(enumSig({ base: dyn.base, members: dyn.members.slice(0, enumCount) })).slice(0, 16), enumDigest, `${enumName}: the 1.276.0 members are untouched`);
  assert.deepEqual(dyn.members.slice(enumCount).map((m) => `${m.name}=${m.value}`), enumAdded, `${enumName}: OUTGASSING_ACCELERATION = 16, last`);
  const [tableName, fieldCount, tableDigest, fieldsAdded] = ODR_TABLE;
  const edited = models.ODR.tables.get(tableName);
  assert.equal(sha(tableSig({ fields: edited.fields.slice(0, fieldCount) })).slice(0, 16), tableDigest, `${tableName}: the 1.276.0 fields are untouched`);
  assert.deepEqual(edited.fields.slice(fieldCount).map(fieldSig), fieldsAdded, `${tableName}: the seven P9 columns, last`);
  assert.ok(models.ODR.enums.has('memMeasurementType') && models.MEM.enums.get('memMeasurementType').members.some((m) => m.name === 'LASER_RANGE' && m.value === 19), '$ODR includes $MEM');
  const memTypes = [...models.MEM.tables.keys()].map((n) => `T${n}`).concat([...models.MEM.enums.keys()].map((n) => `E${n}`)).sort();
  assert.deepEqual(memTypes, MEM_TYPES, 'the $MEM types are the ones listed');
  const other = [...types.keys()].filter((k) => k !== `E${enumName}` && k !== `T${tableName}` && !MEM_TYPES.includes(k)).sort();
  assert.equal(other.length, UNCHANGED[0], 'the other types of the three families are the 1.276.0 ones');
  assert.equal(sha(other.map((k) => `${k}:${types.get(k)}`).join('\n')).slice(0, 16), UNCHANGED[1], `the other ${UNCHANGED[0]} types are unchanged`);
  assert.deepEqual([...enumAdded, ...fieldsAdded].map((s) => s.split(/[:=]/)[0]).filter((n) => /USER_DEFINED/i.test(n)), [], 'no new name contains USER_DEFINED');
  const prwText = fs.readFileSync(path.join(schemaRoot, 'PRW/main.fbs'), 'utf8');
  assert.ok(docOf(prwText, 'PRWStateMatrix').includes(STATE_MATRIX_SENTENCE), 'PRWStateMatrix states the parameter rows and their units');
  const ocmText = fs.readFileSync(path.join(schemaRoot, 'OCM/main.fbs'), 'utf8');
  for (const [table, field, sentence] of OCM_SENTENCES) assert.ok(docOf(ocmText, table, field).includes(sentence), `$OCM ${table}.${field} states: ${sentence}`);
  assert.ok(!ocmText.includes(GONE), `$OCM no longer says "${GONE}"`);
  assert.ok(docOf(ocmText, 'OCMDynamicParameter', 'UNITS').includes('km/s**2 for OUTGASSING_ACCELERATION'), 'OCMDynamicParameter.UNITS names the outgassing unit');

  // ---- b. The bindings.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const P = await import(pathToFileURL(path.join(root, 'lib/js/PRW/main.js')));
  const D = await import(pathToFileURL(path.join(root, 'lib/js/ODR/main.js')));
  assert.equal(P.prwDynamicParameter.OUTGASSING_ACCELERATION, 16, 'TS binding: prwDynamicParameter.OUTGASSING_ACCELERATION');
  assert.equal(P.prwDynamicParameter[16], 'OUTGASSING_ACCELERATION', 'TS binding: 16 reads back by name');
  assert.equal(D.memMeasurementType.LASER_RANGE, 19, 'TS binding: $ODR carries memMeasurementType');
  const py = fs.readFileSync(path.join(root, 'lib/py/PRW/prwDynamicParameter.py'), 'utf8');
  assert.match(py, /^\s+OUTGASSING_ACCELERATION = 16$/m, 'Python output');
  const cpp = fs.readFileSync(path.join(root, 'lib/cpp/PRW/main_generated.h'), 'utf8');
  assert.match(cpp, /prwDynamicParameter_OUTGASSING_ACCELERATION = 16,/, 'C++ output');
  assert.match(cpp, /prwDynamicParameter_MAX = prwDynamicParameter_OUTGASSING_ACCELERATION/, 'C++ output ends at OUTGASSING_ACCELERATION');
  const go = fs.readFileSync(path.join(root, 'lib/go/PRW/prwDynamicParameter.go'), 'utf8');
  assert.match(go, /prwDynamicParameterOUTGASSING_ACCELERATION\s+prwDynamicParameter = 16/, 'Go output');
  const prwSchema = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/PRW/main.fb.schema.json'), 'utf8'));
  assert.equal(prwSchema.definitions.prwDynamicParameter.enum.at(-1), 'OUTGASSING_ACCELERATION', 'fbjson $PRW enum ends at OUTGASSING_ACCELERATION');

  // ---- c. JS -> C++ -> Go -> JS.
  const T = (cls, v) => Object.assign(new cls(), v);
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsproductsschema\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  // Copies every message of a root through the generated C++ and Go, and checks each leg decodes and re-encodes to the JS bytes.
  const wire = (code, M, model, start, messages) => {
    const Type = M[code];
    const dir = path.join(tmp, `work-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    const encode = (o) => { const b = new fb.Builder(4096); Type[`finish${code}Buffer`](b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
    const decode = (f) => Type[`getRootAs${code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = [...new Set([code, ...closure(model, start, { arms: allArms })])];
    run('tar', ['-xzf', path.join(root, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppCopySource({ model, root: code, include: `${code}/main_generated.h`, populated: copyTables }));
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);
    const goDir = path.join(tmp, code);
    run('cp', ['-R', path.join(root, 'lib/go', code), goDir]); run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: code, pkg: code, populated: copyTables }));
    fs.mkdirSync(path.join(tmp, `run${code}`));
    fs.writeFileSync(path.join(tmp, `run${code}/main.go`), `package main\nimport (\n "os"\n p "sdsproductsschema/${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${code}`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);
    const back = {};
    for (const [name, o, populatedValue] of messages) {
      const js = fs.readFileSync(file(name, 'js'));
      const first = decode(file(name, 'js'));
      if (populatedValue) assert.deepStrictEqual(first, o, `${code} ${name}: JS changed a field`);
      for (const leg of ['cpp', 'go']) {
        const b = decode(file(name, leg));
        assert.deepStrictEqual(b, first, `${code} ${name}: ${leg} changed a field`);
        assert.equal(Buffer.compare(encode(b), js), 0, `${code} ${name}: the ${leg} leg re-encodes to the JS bytes`);
      }
      back[name] = decode(file(name, 'go'));
      summary.push(`${code} ${name} ${js.length} B`);
    }
    return back;
  };

  // $PRW: a populated execution result, and one whose parameter rows are the five orbit-determination parameters, outgassing last.
  const prwVisited = new Set();
  const prwPopulated = T(P.PRWT, { EXECUTION_RESULT: populate(models.PRW, P, 'PRWExecutionResult', prwVisited) });
  assert.deepEqual([...prwVisited].sort(), closure(models.PRW, 'PRWExecutionResult').sort(), '$PRW: every reachable table populated');
  const five = [P.prwDynamicParameter.DRAG_AREA_OVER_MASS, P.prwDynamicParameter.DRAG_AREA_OVER_MASS_RATE, P.prwDynamicParameter.SRP_AREA_OVER_MASS,
    P.prwDynamicParameter.IN_TRACK_ACCELERATION, P.prwDynamicParameter.OUTGASSING_ACCELERATION];
  const outgassing = T(P.PRWT, { EXECUTION_RESULT: populate(models.PRW, P, 'PRWExecutionResult', new Set()) });
  outgassing.EXECUTION_RESULT.DYNAMIC_PARAMETERS = five;
  outgassing.EXECUTION_RESULT.FINAL_SAMPLE.COVARIANCE = T(P.PRWStateMatrixT, { DIMENSION: 11, VALUES: Array.from({ length: 121 }, (_, i) => (i % 11 === Math.floor(i / 11) ? 1 : 0.001) * (1 + i / 256)) });
  const prwBack = wire('PRW', P, models.PRW, 'PRWExecutionResult', [['populated', prwPopulated, true], ['outgassing', outgassing, false]]);
  assert.deepEqual(prwBack.outgassing.EXECUTION_RESULT.DYNAMIC_PARAMETERS, [1, 2, 3, 4, 16], '$PRW: the five parameters after the Go leg, OUTGASSING_ACCELERATION = 16 last');
  assert.deepEqual([prwBack.outgassing.EXECUTION_RESULT.FINAL_SAMPLE.COVARIANCE.DIMENSION, prwBack.outgassing.EXECUTION_RESULT.FINAL_SAMPLE.COVARIANCE.VALUES.length], [11, 121], '$PRW: 11 x 11 covariance');

  // $ODR: a populated report, and a fit's residual listing of two inputs.
  const odrVisited = new Set();
  const odrPopulated = populate(models.ODR, D, 'ODR', odrVisited);
  assert.deepEqual([...odrVisited].sort(), closure(models.ODR, 'ODR').sort(), '$ODR: every reachable table populated');
  const rows = [
    T(D.ODREditedObservationT, { OBSERVATION_ID: 'station-7090:np:000412', ITERATION: 3, PREFIT_RESIDUAL: 0.0023, NORMALIZED_RESIDUAL: 0.9, REASON: '',
      EPOCH: '2026-11-01T00:00:00.000Z', OBSERVATION_TYPE: D.memMeasurementType.LASER_RANGE, OBSERVED_VALUE: 1234.567891, COMPUTED_VALUE: 1234.565791,
      WEIGHT: 1e6, ACCEPTED: true, PERTURBATION_MODEL_CODE: '4' }),
    T(D.ODREditedObservationT, { OBSERVATION_ID: 'sensor-0421:angles:000002', ITERATION: 3, PREFIT_RESIDUAL: 0.03, NORMALIZED_RESIDUAL: 4.2, REASON: 'SIGMA_EDIT',
      EPOCH: '2026-11-01T00:05:00.000Z', OBSERVATION_TYPE: D.memMeasurementType.RIGHT_ASCENSION_DECLINATION, OBSERVED_VALUE: 12.345678, COMPUTED_VALUE: 12.315678,
      WEIGHT: 2500, ACCEPTED: false, PERTURBATION_MODEL_CODE: '4' }),
  ];
  const listing = T(D.ODRT, { RUN_ID: 'fit-25544-1', OCM_CONTENT_ID: 'bafkreiocm', CONVERGENCE_REASON: D.odrConvergenceReason.CONVERGED, RESIDUAL_RMS: 0.0021, EDITED_OBSERVATIONS: rows });
  const odrBack = wire('ODR', D, models.ODR, 'ODR', [['populated', odrPopulated, true], ['listing', listing, false]]);
  const got = odrBack.listing.EDITED_OBSERVATIONS;
  assert.deepEqual(got.map((r) => [r.OBSERVATION_TYPE, r.ACCEPTED, r.PERTURBATION_MODEL_CODE, r.EPOCH, r.WEIGHT]),
    [[19, true, '4', '2026-11-01T00:00:00.000Z', 1e6], [7, false, '4', '2026-11-01T00:05:00.000Z', 2500]], '$ODR: the P9 columns after the Go leg');
  assert.ok(Math.abs((got[0].OBSERVED_VALUE - got[0].COMPUTED_VALUE) - 0.0021) < 1e-9, '$ODR: the residual is observed minus computed');

  // ---- d. fbjson.
  const odrSchema = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/ODR/main.fb.schema.json'), 'utf8'));
  assert.deepEqual(Object.keys(odrSchema.definitions.ODREditedObservation.properties).slice(fieldCount), fieldsAdded.map((s) => s.split(':')[0]), 'fbjson $ODR: the seven columns, as the IDL names them');

  const version = (code) => fs.readFileSync(path.join(schemaRoot, `${code}/main.fbs`), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} products schema ($PRW ${version('PRW')}, $OCM ${version('OCM')}, $ODR ${version('ODR')}): prwDynamicParameter.OUTGASSING_ACCELERATION = 16 in TS, Python, C++, Go and fbjson, `
    + `16 members untouched; PRWStateMatrix states the parameter rows and units; $OCM carries the five covariance sentences and no zero-row sentence, no field changed; `
    + `ODREditedObservation keeps 5 fields and gains ${fieldsAdded.length} P9 columns (${fieldsAdded.map((s) => s.split(':')[0]).join(', ')}) keyed on $MEM; ${UNCHANGED[0]} other types unchanged; `
    + `byte-equal JS -> C++ -> Go -> JS: ${summary.join(', ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
