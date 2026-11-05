#!/usr/bin/env node
// One E2E for the SGP4-XP element-set fields of $OMM (CCSDS 502.0-B-3 BTERM and AGOM) and the record's amendment, the
// orbit-determination reference of an $OEM block.
//   a. the IDL: OMM keeps its 45 fields of 1.276.0 and gains BTERM:double and AGOM:double, last; the 37 other types of
//      its family are unchanged; ephemerisDataBlock keeps its 21 fields and gains ORBIT_DETERMINATION:OEMOrbitDetermination,
//      last; OEMOrbitDetermination is exactly OD_OBSERVATIONS_USED:uint, OD_ARC_START:string, OD_ARC_STOP:string,
//      OD_METHOD:string; the 58 other types of the $OEM family are unchanged; no new name contains USER_DEFINED;
//   b. JS -> C++ -> Go -> JS: an SGP4-XP $OMM (MEAN_ELEMENT_THEORY SGP4XP, BTERM and AGOM set, BSTAR and
//      MEAN_MOTION_DDOT unset), an SGP4 $OMM (the reverse), a populated $OMM, an $OEM whose block carries
//      ORBIT_DETERMINATION and a populated $OEM, byte-equal after every leg; copies that drop BTERM are caught in C++ and Go;
//   c. KVN: the SDS codec (src/cpp, run as wasm/node) renders an SGP4-XP message with BTERM and AGOM and without BSTAR
//      and MEAN_MOTION_DDOT, the SGP4 sample (wasm/fixtures/omm-sample.kvn) with BSTAR and MEAN_MOTION_DDOT and without
//      BTERM and AGOM, and an SGP4-XP XML message to KVN with BTERM and AGOM;
//   d. fbjson: $OMM ends with BTERM, AGOM; $OEM ephemerisDataBlock ends with ORBIT_DETERMINATION, and
//      OEMOrbitDetermination names its four fields.
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
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-omm-xp-fields-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.276.0 (a39d51f52d): [count, first 16 hex of sha256 of the signature of the first `count` fields, additions in order].
const OMM_TABLE = ['OMM', 45, 'a0263f2458c20052', ['BTERM:double=', 'AGOM:double=']];
const OEM_TABLE = ['ephemerisDataBlock', 21, '594806ca1b23b65a', ['ORBIT_DETERMINATION:OEMOrbitDetermination=']];
const NEW_TABLE = ['OEMOrbitDetermination', 'OD_OBSERVATIONS_USED:uint=;OD_ARC_START:string=;OD_ARC_STOP:string=;OD_METHOD:string='];
// Every other table (T) and enum (E) of each family at 1.276.0: count and one digest over their signatures.
const OMM_OTHERS = [37, '11786f12e1deba67'];
const OEM_OTHERS = [58, '41dca4590dd0a474'];
const BTERM = 0.0123, AGOM = 0.0045, BSTAR = 0.000020128;

const typesOf = (model) => {
  const t = new Map();
  for (const [n, x] of model.tables) t.set(`T${n}`, sha(tableSig(x)));
  for (const [n, e] of model.enums) t.set(`E${n}`, sha(enumSig(e)));
  return t;
};
const digest = (types, exclude) => {
  const names = [...types.keys()].filter((k) => !exclude.includes(k)).sort();
  return [names.length, sha(names.map((k) => `${k}:${types.get(k)}`).join('\n')).slice(0, 16)];
};
// KVN text as keyword -> value (the unit bracket dropped), for the lines that carry a keyword.
const kv = (text) => Object.fromEntries(text.split('\n').filter((l) => /^\s*[A-Z_]+\s*=/.test(l)).map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).replace(/\[.*$/, '').trim()]; }));

try {
  // ---- a. The IDL.
  const omm = parseIdl(schemaRoot, 'OMM'), oem = parseIdl(schemaRoot, 'OEM');
  for (const [model, [name, count, digest16, added]] of [[omm, OMM_TABLE], [oem, OEM_TABLE]]) {
    const fields = model.tables.get(name).fields;
    assert.equal(sha(tableSig({ fields: fields.slice(0, count) })).slice(0, 16), digest16, `${name}: the 1.276.0 fields are untouched`);
    assert.deepEqual(fields.slice(count).map(fieldSig), added, `${name}: the additions, last`);
  }
  assert.equal(tableSig(oem.tables.get(NEW_TABLE[0])), NEW_TABLE[1], `new table ${NEW_TABLE[0]}`);
  assert.deepEqual(digest(typesOf(omm), ['TOMM']), OMM_OTHERS, 'the other $OMM types are unchanged');
  assert.deepEqual(digest(typesOf(oem), ['TephemerisDataBlock', `T${NEW_TABLE[0]}`]), OEM_OTHERS, 'the other $OEM types are unchanged');
  const newNames = [...OMM_TABLE[3], ...OEM_TABLE[3], NEW_TABLE[0], ...NEW_TABLE[1].split(';')].map((s) => s.split(':')[0]);
  assert.deepEqual(newNames.filter((n) => /USER_DEFINED/i.test(n)), [], 'no new name contains USER_DEFINED');
  // The doc comment (/// lines) right above OMM.BTERM, joined into one line.
  const ommLines = fs.readFileSync(path.join(schemaRoot, 'OMM/main.fbs'), 'utf8').split('\n');
  const btermAt = ommLines.findIndex((l) => /^\s*BTERM\s*:/.test(l));
  const btermDoc = [];
  for (let i = btermAt - 1; i >= 0 && /^\s*\/\/\//.test(ommLines[i]); i--) btermDoc.unshift(ommLines[i].replace(/^\s*\/\/\/\s?/, '').trim());
  assert.ok(btermDoc.join(' ').includes('A writer sets BSTAR and MEAN_MOTION_DDOT for SGP4 and BTERM and AGOM for SGP4-XP, never both pairs'), '$OMM states the writer rule');

  // ---- b. JS -> C++ -> Go -> JS.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/OMM/main.js')));
  const E = await import(pathToFileURL(path.join(root, 'lib/js/OEM/main.js')));
  const T = (cls, v) => Object.assign(new cls(), v);
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsommxp\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  // Copies every message of a root through the generated C++ and Go (optionally with one line removed from a copy program) and
  // checks each leg decodes and re-encodes to the JS bytes; returns the Go leg's decoded messages and the sources.
  const wire = (code, Bindings, model, messages, { cppDrop = null, goDrop = null } = {}) => {
    const Type = Bindings[code];
    const tag = cppDrop ? 'controlcpp' : goDrop ? 'controlgo' : 'wire';
    const dir = path.join(tmp, `${tag}-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    const encode = (o) => { const b = new fb.Builder(4096); Type[`finish${code}Buffer`](b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
    const decode = (f) => Type[`getRootAs${code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = [...new Set([code, ...closure(model, code, { arms: allArms })])];
    let cppSource = cppCopySource({ model, root: code, include: `${code}/main_generated.h`, populated: copyTables });
    let goSource = goCopySource({ model, root: code, pkg: code, populated: copyTables });
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
    fs.writeFileSync(path.join(tmp, `run${tag}${code}/main.go`), `package main\nimport (\n "os"\n p "sdsommxp/${tag}${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${tag}${code}`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);
    const back = {};
    for (const [name, o, populatedValue] of messages) {
      const js = fs.readFileSync(file(name, 'js'));
      const first = decode(file(name, 'js'));
      if (populatedValue) assert.deepStrictEqual(first, o, `${code} ${name}: JS changed a field`);
      back[name] = { cpp: decode(file(name, 'cpp')), go: decode(file(name, 'go')) };
      if (tag === 'wire') {
        for (const leg of ['cpp', 'go']) {
          assert.deepStrictEqual(back[name][leg], first, `${code} ${name}: ${leg} changed a field`);
          assert.equal(Buffer.compare(encode(back[name][leg]), js), 0, `${code} ${name}: the ${leg} leg re-encodes to the JS bytes`);
        }
        summary.push(`${code} ${name} ${js.length} B`);
      }
    }
    return back;
  };

  const elements = { OBJECT_NAME: 'ISS (ZARYA)', OBJECT_ID: '1998-067A', CENTER_NAME: 'EARTH', CREATION_DATE: '2026-11-04T00:00:00.000Z', ORIGINATOR: 'SDN',
    EPOCH: '2026-11-04T10:34:41.426Z', MEAN_MOTION: 15.72125391, ECCENTRICITY: 0.0006703, INCLINATION: 51.6416, RA_OF_ASC_NODE: 247.4627,
    ARG_OF_PERICENTER: 130.536, MEAN_ANOMALY: 325.0288, NORAD_CAT_ID: 25544, ELEMENT_SET_NO: 999, REV_AT_EPOCH: 48170, MEAN_MOTION_DOT: -0.00002182 };
  const xpOmm = T(M.OMMT, { ...elements, MEAN_ELEMENT_THEORY: M.meanElementSource.SGP4XP, BTERM, AGOM });
  const sgp4Omm = T(M.OMMT, { ...elements, MEAN_ELEMENT_THEORY: M.meanElementSource.SGP4, BSTAR, MEAN_MOTION_DDOT: 1e-9 });
  const ommVisited = new Set();
  const ommPopulated = populate(omm, M, 'OMM', ommVisited);
  assert.deepEqual([...ommVisited].sort(), closure(omm, 'OMM').sort(), '$OMM: every reachable table populated');
  const ommBack = wire('OMM', M, omm, [['sgp4xp', xpOmm], ['sgp4', sgp4Omm], ['populated', ommPopulated, true]]);
  const xp = ommBack.sgp4xp.go, s4 = ommBack.sgp4.go;
  assert.deepEqual([xp.MEAN_ELEMENT_THEORY, xp.BTERM, xp.AGOM, xp.BSTAR, xp.MEAN_MOTION_DDOT], [1, BTERM, AGOM, 0, 0], 'SGP4-XP: BTERM and AGOM after the Go leg, BSTAR and MEAN_MOTION_DDOT unset');
  assert.deepEqual([s4.MEAN_ELEMENT_THEORY, s4.BSTAR, s4.MEAN_MOTION_DDOT, s4.BTERM, s4.AGOM], [0, BSTAR, 1e-9, 0, 0], 'SGP4: BSTAR and MEAN_MOTION_DDOT after the Go leg, BTERM and AGOM unset');
  const xpRaw = M.OMM.getRootAsOMM(new fb.ByteBuffer(new Uint8Array((() => { const b = new fb.Builder(1024); M.OMM.finishOMMBuffer(b, xp.pack(b)); return b.asUint8Array(); })())));
  assert.deepEqual([xpRaw.BTERM(), xpRaw.AGOM()], [BTERM, AGOM], 'the last two slots read by their accessors');
  // Controls: a copy that drops BTERM reads 0 and the comparison catches it.
  const cppControl = wire('OMM', M, omm, [['sgp4xp', xpOmm]], { cppDrop: 'x.add_BTERM(s->BTERM());' });
  assert.equal(cppControl.sgp4xp.cpp.BTERM, 0, 'a C++ copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(cppControl.sgp4xp.cpp, xp), 'a C++ copy that drops BTERM must differ');
  const goControl = wire('OMM', M, omm, [['sgp4xp', xpOmm]], { goDrop: 'OMMAddBTERM(b, s.BTERM())' });
  assert.equal(goControl.sgp4xp.go.BTERM, 0, 'a Go copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(goControl.sgp4xp.go, xp), 'a Go copy that drops BTERM must differ');

  const determined = T(E.OEMT, { CCSDS_OEM_VERS: 3, CREATION_DATE: '2026-11-04T00:00:00.000Z', ORIGINATOR: 'SDN', EPHEMERIS_DATA_BLOCK: [T(E.ephemerisDataBlockT, {
    CENTER_NAME: 'EARTH', START_TIME: '2026-11-04T00:00:00.000Z', STOP_TIME: '2026-11-04T00:01:00.000Z', STEP_SIZE: 60, STATE_VECTOR_SIZE: 6,
    EPHEMERIS_DATA: [6878.1, 0, 0, 0, 7.6127, 0, 6877.9, 456.7, 0, -0.5, 7.6125, 0],
    ORBIT_DETERMINATION: T(E.OEMOrbitDeterminationT, { OD_OBSERVATIONS_USED: 412, OD_ARC_START: '2026-10-28T00:00:00.000Z', OD_ARC_STOP: '2026-11-04T00:00:00.000Z', OD_METHOD: 'BATCH_LEAST_SQUARES' }) })] });
  const oemVisited = new Set();
  const oemPopulated = populate(oem, E, 'OEM', oemVisited);
  assert.deepEqual([...oemVisited].sort(), closure(oem, 'OEM').sort(), '$OEM: every reachable table populated');
  const oemBack = wire('OEM', E, oem, [['determined', determined], ['populated', oemPopulated, true]]);
  const od = oemBack.determined.go.EPHEMERIS_DATA_BLOCK[0].ORBIT_DETERMINATION;
  assert.deepEqual([od.OD_OBSERVATIONS_USED, od.OD_ARC_START, od.OD_ARC_STOP, od.OD_METHOD], [412, '2026-10-28T00:00:00.000Z', '2026-11-04T00:00:00.000Z', 'BATCH_LEAST_SQUARES'], '$OEM: the determination after the Go leg');

  // ---- c. KVN through the SDS codec.
  const { init } = await import(pathToFileURL(path.join(root, 'wasm/node/index.mjs')));
  const sds = await init();
  const sgp4Kvn = fs.readFileSync(path.join(root, 'wasm/fixtures/omm-sample.kvn'), 'utf8');
  assert.ok(/^BSTAR = /m.test(sgp4Kvn) && /^MEAN_MOTION_DDOT = /m.test(sgp4Kvn) && /MEAN_ELEMENT_THEORY = SGP4$/m.test(sgp4Kvn), 'the SGP4 sample as committed');
  const xpKvn = sgp4Kvn.replace(/^MEAN_ELEMENT_THEORY = SGP4$/m, 'MEAN_ELEMENT_THEORY = SGP4-XP').replace(/^EPHEMERIS_TYPE = 0$/m, 'EPHEMERIS_TYPE = 4')
    .replace(/^BSTAR = .*$/m, `BTERM = ${BTERM} [m**2/kg]`).replace(/^MEAN_MOTION_DDOT = .*$/m, `AGOM = ${AGOM} [m**2/kg]`);
  const xpOut = kv(sds.ommKvnRoundtrip(xpKvn));
  assert.deepEqual([xpOut.MEAN_ELEMENT_THEORY, 'BTERM' in xpOut, 'AGOM' in xpOut, 'BSTAR' in xpOut, 'MEAN_MOTION_DDOT' in xpOut], ['SGP4-XP', true, true, false, false], 'KVN SGP4-XP: BTERM and AGOM, no BSTAR or MEAN_MOTION_DDOT');
  // The writer prints six decimals.
  assert.ok(Math.abs(parseFloat(xpOut.BTERM) - BTERM) < 1e-6 && Math.abs(parseFloat(xpOut.AGOM) - AGOM) < 1e-6, 'KVN SGP4-XP: the values');
  const s4Out = kv(sds.ommKvnRoundtrip(sgp4Kvn));
  assert.deepEqual([s4Out.MEAN_ELEMENT_THEORY, 'BSTAR' in s4Out, 'MEAN_MOTION_DDOT' in s4Out, 'BTERM' in s4Out, 'AGOM' in s4Out], ['SGP4', true, true, false, false], 'KVN SGP4: BSTAR and MEAN_MOTION_DDOT, no BTERM or AGOM');
  assert.ok(Math.abs(parseFloat(s4Out.BSTAR) - BSTAR) < 1e-6, 'KVN SGP4: the value');
  const xpXml = '<?xml version="1.0" encoding="UTF-8"?><omm id="CCSDS_OMM_VERS" version="3.0"><header><CREATION_DATE>2026-11-04T00:00:00</CREATION_DATE><ORIGINATOR>SDN</ORIGINATOR></header>'
    + '<body><segment><metadata><OBJECT_NAME>ISS (ZARYA)</OBJECT_NAME><OBJECT_ID>1998-067A</OBJECT_ID><CENTER_NAME>EARTH</CENTER_NAME><REF_FRAME>TEME</REF_FRAME><TIME_SYSTEM>UTC</TIME_SYSTEM>'
    + '<MEAN_ELEMENT_THEORY>SGP4-XP</MEAN_ELEMENT_THEORY></metadata><data><meanElements><EPOCH>2026-11-04T10:34:41.426</EPOCH><MEAN_MOTION>15.72125391</MEAN_MOTION>'
    + '<ECCENTRICITY>0.0006703</ECCENTRICITY><INCLINATION>51.6416</INCLINATION><RA_OF_ASC_NODE>247.4627</RA_OF_ASC_NODE><ARG_OF_PERICENTER>130.5360</ARG_OF_PERICENTER>'
    + `<MEAN_ANOMALY>325.0288</MEAN_ANOMALY></meanElements><tleParameters><EPHEMERIS_TYPE>4</EPHEMERIS_TYPE><NORAD_CAT_ID>25544</NORAD_CAT_ID><BTERM>${BTERM}</BTERM>`
    + `<MEAN_MOTION_DOT>-0.00002182</MEAN_MOTION_DOT><AGOM>${AGOM}</AGOM></tleParameters></data></segment></body></omm>`;
  const xmlOut = kv(sds.ommXmlToKvn(xpXml));
  assert.deepEqual([xmlOut.MEAN_ELEMENT_THEORY, 'BTERM' in xmlOut, 'AGOM' in xmlOut, 'BSTAR' in xmlOut, 'MEAN_MOTION_DDOT' in xmlOut], ['SGP4-XP', true, true, false, false], 'XML -> KVN SGP4-XP: BTERM and AGOM');
  assert.ok(Math.abs(parseFloat(xmlOut.BTERM) - BTERM) < 1e-6 && Math.abs(parseFloat(xmlOut.AGOM) - AGOM) < 1e-6, 'XML -> KVN SGP4-XP: the values');

  // ---- d. fbjson.
  const props = (code, table) => Object.keys(JSON.parse(fs.readFileSync(path.join(root, `lib/fbjson/${code}/main.fb.schema.json`), 'utf8')).definitions[table].properties);
  assert.deepEqual(props('OMM', 'OMM').slice(OMM_TABLE[1]), ['BTERM', 'AGOM'], 'fbjson $OMM ends with BTERM, AGOM');
  assert.deepEqual(props('OEM', 'ephemerisDataBlock').slice(OEM_TABLE[1]), ['ORBIT_DETERMINATION'], 'fbjson $OEM block ends with ORBIT_DETERMINATION');
  assert.deepEqual(props('OEM', NEW_TABLE[0]), NEW_TABLE[1].split(';').map((s) => s.split(':')[0]), `fbjson ${NEW_TABLE[0]}`);

  const version = (code) => fs.readFileSync(path.join(schemaRoot, `${code}/main.fbs`), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} $OMM ${version('OMM')} BTERM and AGOM, $OEM ${version('OEM')} ORBIT_DETERMINATION: OMM 45 + 2 fields and ${OMM_OTHERS[0]} other types unchanged; `
    + `ephemerisDataBlock 21 + 1 fields, OEMOrbitDetermination (4 fields) and ${OEM_OTHERS[0]} other types unchanged; byte-equal JS -> C++ -> Go -> JS: ${summary.join(', ')}; `
    + 'dropped BTERM caught in C++ and Go; KVN: SGP4-XP renders BTERM and AGOM, SGP4 renders BSTAR and MEAN_MOTION_DDOT, XML -> KVN carries BTERM and AGOM; fbjson names every addition');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
