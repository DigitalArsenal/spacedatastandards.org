#!/usr/bin/env node
// One E2E for the propellant inputs of a $MPL request: the spacecraft's mass at the plan's start and the specific
// impulse, from which a planner fills mplBurn.DELTA_MASS_KG and MPL.TOTAL_DELTA_MASS_KG.
//   a. the IDL: mplRequest keeps its 7 fields of 1.283.0 and gains INITIAL_MASS_KG:double and SPECIFIC_IMPULSE_S:double,
//      last; the 109 other types of the $MPL family are unchanged; the request states the rocket-equation rule;
//   b. JS -> C++ -> Go -> JS: a Hohmann request with both inputs stated, the same request with neither (they read 0,
//      "not stated"), and a populated $MPL, byte-equal after every leg; copies that drop SPECIFIC_IMPULSE_S are caught
//      in C++ and Go;
//   c. fbjson: mplRequest ends with INITIAL_MASS_KG, SPECIFIC_IMPULSE_S.
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
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-mpl-propellant-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.283.0 (264606d95d): [count, first 16 hex of sha256 of the signature of the first `count` fields, additions in order].
const REQUEST = ['mplRequest', 7, '880f3e29738e7d16', ['INITIAL_MASS_KG:double=', 'SPECIFIC_IMPULSE_S:double=']];
// Every other table (T) and enum (E) of the $MPL family: count and one digest over their signatures. Baseline 1.283.0
// ([109, '363e8a801081c7af']), refreshed for 1.289.0 after appends only (1.285.0): PPEPositionRecord EPOCH_MID_SECONDS,
// POS_COEFF_HEAD_COUNT, VEL_COEFF_HEAD_COUNT; PPE REFERENCE_EPOCH, BUILD, UNSERVED_MID_SECONDS, UNSERVED_HALF_SPAN,
// UNSERVED_STATUS; the new PPEBuild and ppeWindowStatus.
const OTHERS = [111, 'b24e80907111b3b6'];
const MASS = 1250.5, ISP = 228.75;

try {
  // ---- a. The IDL.
  const mpl = parseIdl(schemaRoot, 'MPL');
  const fields = mpl.tables.get(REQUEST[0]).fields;
  assert.equal(sha(tableSig({ fields: fields.slice(0, REQUEST[1]) })).slice(0, 16), REQUEST[2], 'mplRequest: the 1.283.0 fields are untouched');
  assert.deepEqual(fields.slice(REQUEST[1]).map(fieldSig), REQUEST[3], 'mplRequest: the additions, last');
  const types = new Map();
  for (const [n, x] of mpl.tables) types.set(`T${n}`, sha(tableSig(x)));
  for (const [n, e] of mpl.enums) types.set(`E${n}`, sha(enumSig(e)));
  const others = [...types.keys()].filter((k) => k !== `T${REQUEST[0]}`).sort();
  assert.deepEqual([others.length, sha(others.map((k) => `${k}:${types.get(k)}`).join('\n')).slice(0, 16)], OTHERS, 'the other $MPL types are unchanged');
  // The doc comment (/// lines) right above mplRequest.SPECIFIC_IMPULSE_S, joined into one line.
  const lines = fs.readFileSync(path.join(schemaRoot, 'MPL/main.fbs'), 'utf8').split('\n');
  const at = lines.findIndex((l) => /^\s*SPECIFIC_IMPULSE_S\s*:/.test(l));
  const doc = [];
  for (let i = at - 1; i >= 0 && /^\s*\/\/\//.test(lines[i]); i--) doc.unshift(lines[i].replace(/^\s*\/\/\/\s?/, '').trim());
  const rule = doc.join(' ');
  for (const s of ['m * (1 - exp(-dv / (SPECIFIC_IMPULSE_S * g0)))', "dv is the burn's delta-v in m/s (MAGNITUDE_KM_S * 1000)", 'g0 = 9.80665 m/s^2 exactly', 'taking BURNS in plan order from INITIAL_MASS_KG', 'stay 0 (not computed)']) {
    assert.ok(rule.includes(s), `$MPL states the rule: ${s}`);
  }

  // ---- b. JS -> C++ -> Go -> JS.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/MPL/main.js')));
  const T = (cls, v) => Object.assign(new cls(), v);
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsmplprop\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  const code = 'MPL';
  const encode = (o) => { const b = new fb.Builder(4096); M.MPL.finishMPLBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const decode = (f) => M.MPL.getRootAsMPL(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
  // Copies every message through the generated C++ and Go (optionally with one line removed from a copy program) and
  // checks each leg decodes and re-encodes to the JS bytes; returns each leg's decoded messages.
  const wire = (messages, { cppDrop = null, goDrop = null } = {}) => {
    const tag = cppDrop ? 'controlcpp' : goDrop ? 'controlgo' : 'wire';
    const dir = path.join(tmp, `${tag}-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = [...new Set([code, ...closure(mpl, code, { arms: allArms })])];
    let cppSource = cppCopySource({ model: mpl, root: code, include: `${code}/main_generated.h`, populated: copyTables });
    let goSource = goCopySource({ model: mpl, root: code, pkg: code, populated: copyTables });
    if (cppDrop) { assert.ok(cppSource.includes(cppDrop), 'the C++ control applies'); cppSource = cppSource.replace(cppDrop, ''); }
    if (goDrop) { assert.ok(goSource.includes(goDrop), 'the Go control applies'); goSource = goSource.replace(goDrop, ''); }
    run('tar', ['-xzf', path.join(root, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);
    const goDir = path.join(tmp, `${tag}${code}`);
    run('cp', ['-R', path.join(root, 'lib/go', code), goDir]); run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goSource);
    fs.mkdirSync(path.join(tmp, `run${tag}${code}`));
    fs.writeFileSync(path.join(tmp, `run${tag}${code}/main.go`), `package main\nimport (\n "os"\n p "sdsmplprop/${tag}${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
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

  // A Hohmann transfer from a 300 km circular orbit to geostationary radius, as a request.
  const hohmann = (extra) => T(M.MPLT, { ID: 'hohmann-leo-geo', PROBLEM: M.mplProblem.Hohmann, OBJECT_ID: '2026-001A',
    REQUEST: T(M.mplRequestT, { TRANSFER: T(M.mplTransferRequestT, { INITIAL_RADIUS_KM: 6678.137, FINAL_RADIUS_KM: 42164.137 }), ...extra }) });
  const stated = hohmann({ INITIAL_MASS_KG: MASS, SPECIFIC_IMPULSE_S: ISP });
  const unstated = hohmann({});
  const visited = new Set();
  const populated = populate(mpl, M, 'MPL', visited);
  assert.deepEqual([...visited].sort(), closure(mpl, 'MPL').sort(), '$MPL: every reachable table populated');
  const back = wire([['stated', stated], ['unstated', unstated], ['populated', populated, true]]);
  const s = back.stated.go.REQUEST, u = back.unstated.go.REQUEST;
  assert.deepEqual([s.INITIAL_MASS_KG, s.SPECIFIC_IMPULSE_S, s.TRANSFER.FINAL_RADIUS_KM], [MASS, ISP, 42164.137], 'stated: both inputs after the Go leg');
  assert.deepEqual([u.INITIAL_MASS_KG, u.SPECIFIC_IMPULSE_S], [0, 0], 'unstated: both inputs read 0 (not stated)');
  const raw = M.MPL.getRootAsMPL(new fb.ByteBuffer(new Uint8Array(encode(back.stated.go)))).REQUEST();
  assert.deepEqual([raw.INITIAL_MASS_KG(), raw.SPECIFIC_IMPULSE_S()], [MASS, ISP], 'the last two slots read by their accessors');
  // Controls: a copy that drops SPECIFIC_IMPULSE_S reads 0 and the comparison catches it.
  const cppControl = wire([['stated', stated]], { cppDrop: 'x.add_SPECIFIC_IMPULSE_S(s->SPECIFIC_IMPULSE_S());' });
  assert.equal(cppControl.stated.cpp.REQUEST.SPECIFIC_IMPULSE_S, 0, 'a C++ copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(cppControl.stated.cpp, back.stated.go), 'a C++ copy that drops SPECIFIC_IMPULSE_S must differ');
  const goControl = wire([['stated', stated]], { goDrop: 'mplRequestAddSPECIFIC_IMPULSE_S(b, s.SPECIFIC_IMPULSE_S())' });
  assert.equal(goControl.stated.go.REQUEST.SPECIFIC_IMPULSE_S, 0, 'a Go copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(goControl.stated.go, back.stated.go), 'a Go copy that drops SPECIFIC_IMPULSE_S must differ');

  // ---- c. fbjson.
  const props = Object.keys(JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/MPL/main.fb.schema.json'), 'utf8')).definitions.mplRequest.properties);
  assert.deepEqual(props.slice(REQUEST[1]), ['INITIAL_MASS_KG', 'SPECIFIC_IMPULSE_S'], 'fbjson mplRequest ends with INITIAL_MASS_KG, SPECIFIC_IMPULSE_S');

  const version = fs.readFileSync(path.join(schemaRoot, 'MPL/main.fbs'), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} $MPL ${version} INITIAL_MASS_KG and SPECIFIC_IMPULSE_S: mplRequest 7 + 2 fields and ${OTHERS[0]} other types unchanged; `
    + `the rocket-equation rule stated; byte-equal JS -> C++ -> Go -> JS: ${summary.join(', ')}; unstated inputs read 0; `
    + 'dropped SPECIFIC_IMPULSE_S caught in C++ and Go; fbjson names both additions');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
