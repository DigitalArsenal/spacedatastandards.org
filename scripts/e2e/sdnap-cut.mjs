#!/usr/bin/env node
// One E2E for the cut of the SDN-AP theory (owner 2026-10-25: "let's just drop AP completely"):
//   a. the IDL: $MET meanElementSource ends at USM; pcfTheory keeps the numbers of SGP4, SGP4XP, FFM and KEPLER and
//      has no value 3; $PCF carries THEORY, INTEGRATOR, FORCES, FIT, EVENTS, OUTPUT and EPOCH_STORE and none of the
//      six tables and two enums that existed for the theory; PCFForceModel ends at the third body's field order;
//      no schema/*/main.fbs names SDNAP;
//   b. the bindings: no file under lib/ (every language) and no archive of dist/{MET,OMM,PCF,PRW} names a removed
//      identifier, in any of its spellings, and the generated C++ $MET enum ends at USM;
//   c. what is kept reads: an $OMM with each remaining meanElementSource, and a $PCF with THEORY SGP4XP, an
//      epoch store and a fit policy, decode in the generated JS to the values written.
// The wire round trip of the whole $PCF and $PRW through JS, C++ and Go is scripts/e2e/pcf-config.mjs.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { parseIdl } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const members = (model, name) => model.enums.get(name).members.map((m) => `${m.name}=${m.value}`);
const fieldNames = (model, table) => model.tables.get(table).fields.map((f) => f.name);
// Every spelling of a removed identifier: UpperCamel (Go, Java, C#, Swift, Kotlin, Dart, Python, JS, TS, C++), snake_case (Rust, PHP) and the field names.
const REMOVED = 'sdnap|pcf_?empirical_?terms|pcf_?mean_?element_?options|pcf_?segment_?options|pcf_?maneuver_?detection|pcf_?reentry|pcf_?launch|pcf_?innovation_?correlation|innovation_?correlation|reentry_?window_?method|empirical_?terms';
const grepFiles = (args) => {
  const r = spawnSync('grep', ['-rIl', '-i', '-E', REMOVED, ...args], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  assert.ok(r.status === 0 || r.status === 1, `grep failed: ${r.stderr}`);
  return r.stdout.split('\n').filter(Boolean);
};

// a. The IDL.
const met = parseIdl(schemaRoot, 'MET');
assert.deepEqual(members(met, 'meanElementSource'), ['SGP4=0', 'SGP4XP=1', 'DSST=2', 'USM=3'], 'meanElementSource ends at USM');
const pcf = parseIdl(schemaRoot, 'PCF');
assert.deepEqual(members(pcf, 'pcfTheory'), ['UNSPECIFIED=0', 'SGP4=1', 'SGP4XP=2', 'FFM=4', 'KEPLER=5'], 'pcfTheory keeps its numbers and leaves 3 unused');
assert.deepEqual(fieldNames(pcf, 'PCF'), ['CONFIGURATION_ID', 'PROFILE', 'THEORY', 'INTEGRATOR', 'FORCES', 'FIT', 'EVENTS', 'OUTPUT', 'EPOCH_STORE']);
const forces = fieldNames(pcf, 'PCFForceModel');
assert.ok(!forces.includes('EMPIRICAL_TERMS'));
assert.deepEqual(forces.slice(-2), ['THIRD_BODY_MAXIMUM_DEGREE', 'THIRD_BODY_MAXIMUM_ORDER']);
for (const table of ['PCFEmpiricalTerms', 'PCFMeanElementOptions', 'PCFSegmentOptions', 'PCFManeuverDetection', 'PCFReentry', 'PCFLaunch'])
  assert.ok(!pcf.tables.has(table), `${table} is cut`);
for (const name of ['pcfInnovationCorrelation', 'pcfReentryWindowMethod']) assert.ok(!pcf.enums.has(name), `${name} is cut`);
for (const table of ['PCFFitPolicy', 'PCFEpochStore', 'PCFEventDefinition', 'PCFOutput', 'PCFIntegratorSettings']) assert.ok(pcf.tables.has(table), `${table} stays`);
assert.deepEqual(grepFiles([schemaRoot]), [], 'no schema names a removed identifier');

// b. The bindings.
assert.deepEqual(grepFiles([path.join(root, 'lib')]).map((f) => path.relative(root, f)), [], 'lib/ names no removed identifier');
const names = execFileSync('find', [path.join(root, 'lib'), '-type', 'f'], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 }).split('\n')
  .filter((f) => new RegExp(`(^|/)[^/]*(${REMOVED})[^/]*$`, 'i').test(f));
assert.deepEqual(names, [], 'no generated file is named for a removed table');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-sdnap-cut-e2e-'));
try {
  let archives = 0;
  for (const code of ['MET', 'OMM', 'PCF', 'PRW']) {
    for (const file of fs.readdirSync(path.join(root, 'dist', code)).filter((f) => f.endsWith('.tar.gz'))) {
      const dir = path.join(tmp, file);
      fs.mkdirSync(dir);
      execFileSync('tar', ['-xzf', path.join(root, 'dist', code, file), '-C', dir]);
      assert.deepEqual(grepFiles([dir]), [], `dist/${code}/${file} names no removed identifier`);
      archives += 1;
    }
  }
  const cppDir = path.join(tmp, 'MET.cpp.tar.gz');
  const header = fs.readFileSync(path.join(cppDir, 'MET/main_generated.h'), 'utf8');
  assert.match(header, /meanElementSource_MAX = meanElementSource_USM/, 'the generated C++ meanElementSource ends at USM');

  // c. What is kept reads.
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const O = await import(pathToFileURL(path.join(root, 'lib/js/OMM/main.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/MET/main.js')));
  for (const [name, value] of Object.entries({ SGP4: 0, SGP4XP: 1, DSST: 2, USM: 3 })) {
    assert.equal(M.meanElementSource[name], value);
    const omm = Object.assign(new O.OMMT(), { OBJECT_NAME: 'PROBE', MEAN_ELEMENT_THEORY: value });
    const b = new fb.Builder(256);
    O.OMM.finishOMMBuffer(b, omm.pack(b));
    assert.equal(O.OMM.getRootAsOMM(new fb.ByteBuffer(b.asUint8Array())).MEAN_ELEMENT_THEORY(), value, `OMM ${name}`);
  }
  assert.equal(M.meanElementSource.SDNAP, undefined);
  const P = await import(pathToFileURL(path.join(root, 'lib/js/PCF/main.js')));
  assert.equal(P.pcfTheory.SDNAP, undefined);
  assert.deepEqual([P.pcfTheory.SGP4, P.pcfTheory.SGP4XP, P.pcfTheory.FFM, P.pcfTheory.KEPLER], [1, 2, 4, 5]);
  const config = Object.assign(new P.PCFT(), {
    CONFIGURATION_ID: 'sgp4xp-fit', THEORY: P.pcfTheory.SGP4XP,
    FIT: Object.assign(new P.PCFFitPolicyT(), { DEFAULT_SPAN_HOURS: 72, DRAG_PRIOR: Object.assign(new P.PCFGaussianPriorT(), { MEAN: 0, SIGMA: 0.05, HAS_SIGMA: true }) }),
    EPOCH_STORE: Object.assign(new P.PCFEpochStoreT(), { CACHE_DAYS: 5, THEORIES: [P.pcfTheory.SGP4, P.pcfTheory.SGP4XP] }),
  });
  const b = new fb.Builder(512);
  P.PCF.finishPCFBuffer(b, config.pack(b));
  const back = P.PCF.getRootAsPCF(new fb.ByteBuffer(b.asUint8Array())).unpack();
  assert.deepEqual([back.THEORY, back.FIT.DEFAULT_SPAN_HOURS, back.FIT.DRAG_PRIOR.SIGMA, back.EPOCH_STORE.CACHE_DAYS, back.EPOCH_STORE.THEORIES], [2, 72, 0.05, 5, [1, 2]]);
  for (const removed of ['MEAN_ELEMENT', 'SEGMENTS', 'MANEUVER_DETECTION', 'REENTRY', 'LAUNCH']) assert.ok(!(removed in back), `${removed} is not a PCF field`);
  assert.ok(!('EMPIRICAL_TERMS' in new P.PCFForceModelT()), 'EMPIRICAL_TERMS is not a PCFForceModel field');
  const version = fs.readFileSync(path.join(schemaRoot, 'PCF/main.fbs'), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  console.log(`PASS: SDN-AP cut: $MET ends at USM, pcfTheory SGP4 SGP4XP FFM KEPLER, $PCF ${version} without its six tables and two enums; lib/ and ${archives} archives of MET OMM PCF PRW name none of them; the kept tables read`);
} catch (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
