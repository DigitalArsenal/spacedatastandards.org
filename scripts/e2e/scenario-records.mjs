#!/usr/bin/env node
// One E2E for a scenario carried as one $REC whose first record is its $SCN, and for the records it adds to:
//   a. the IDL: $SCN, $EGP, $RFL, $SNR and $ACW keep every type and field of 1.287.0 and gain exactly the
//      additions, last; $COA is new and is the wide record type 298;
//   b. one scenario $REC written and read back: a $SCN first (GROUP and AREA_OF_INTEREST references, clock,
//      analysis window, a pinned row, the propagator module, a 64-byte signature slot), an $EGP with an EGPWalker
//      and MEMBERSHIP_MODE GENERATED, a $COA of each kind (MANEUVER with lead and return, RIDE_OUT, RECOVERY
//      with three ordered steps) as wide records, an $RFL with RFLJamming, an $SNR with PHASED_ARRAY, an $ACW
//      request with TERRAIN_LINE_OF_SIGHT and ITU_R_P834, and the author $EPM; every stated value reads back
//      equal;
//   c. the signing rule of SCN.SIGNATURE on that record: the slot is found by the generated accessor, signing
//      changes only those 64 bytes, the bytes with the slot zeroed are identical before and after, the
//      signature verifies against the author $EPM's key, and a changed byte outside the slot fails;
//   d. JS -> C++ -> Go -> JS: fully populated $COA, $EGP, $RFL and $SNR records are byte-equal after every leg.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-scenario-records-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}${f.required ? '!' : ''}`;
const memberSig = (m) => `${m.name}=${m.value}`;
// Strict equality of two object-API values that names the first differing path. Classes are compared by name:
// lib/js/REC carries its own copy of every included standard's classes.
const diffPath = (a, b, at = '') => {
  if (Object.is(a, b)) return null;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return `${at || '.'}: ${String(a)} != ${String(b)}`;
  if (a.constructor?.name !== b.constructor?.name) return `${at || '.'}: ${a.constructor?.name} != ${b.constructor?.name}`;
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) { const d = diffPath(a[k], b[k], `${at}.${k}`); if (d) return d; }
  return null;
};
const same = (a, b, msg) => { const d = diffPath(a, b); assert.ok(d === null, `${msg}: ${d}`); };

// 1.287.0 (62f0004422): the types whose fields or members grow, with their counts then.
// $SCV's altitude ceiling (1.291.0, scv-altitude-ceiling.mjs) appends to two types $SNR includes.
const PREFIX = { scenarioReferenceKind: 9, SCN: 12, egpMembershipMode: 4, EGP: 11, RFL: 59, snrAntennaPattern: 12, acwRefractionModelKind: 2, acwConstraintKind: 10, scvSensorRangeBoundaryKind: 2, SCVSensorShapeContract: 17 };
// Per family: [number of types at 1.287.0, first 16 hex of the digest over their signatures].
const FAMILIES = { SCN: [101, '27a54940a9778c1e'], EGP: [5, 'de801ea262fd5729'], RFL: [33, 'f42843450a76033c'], SNR: [69, '6cd832e0113d0c1e'], ACW: [43, 'f301a07e60d74dad'] };
const NEW_TYPES = new Set(['SCNPinnedRow', 'egpWalkerPattern', 'EGPWalker', 'RFLJamming']);
const ADDITIONS = {
  scenarioReferenceKind: ['GROUP=9', 'AREA_OF_INTEREST=10'],
  SCN: ['START_EPOCH:string=', 'STOP_EPOCH:string=', 'ANIMATING:bool=', 'WINDOW_START:string=', 'WINDOW_STOP:string=', 'PROPAGATOR_MODULE_ID:string=', 'PINNED_ROWS:[SCNPinnedRow]=', 'SIGNATURE:[ubyte]='],
  egpMembershipMode: ['GENERATED=4'],
  EGP: ['WALKER:EGPWalker='],
  RFL: ['JAMMING:RFLJamming='],
  snrAntennaPattern: ['PHASED_ARRAY=12'],
  acwRefractionModelKind: ['ITU_R_P834=2'],
  acwConstraintKind: ['TERRAIN_LINE_OF_SIGHT=10'],
  scvSensorRangeBoundaryKind: ['ALTITUDE_SHELL=2'],
  SCVSensorShapeContract: ['MAX_ALTITUDE_M:double=', 'ALTITUDE_REFERENCE:SCVEllipsoid='],
};
const COA_TYPES = ['EcoaKind:byte|UNSPECIFIED=0;MANEUVER=1;RIDE_OUT=2;RECOVERY=3', 'TCOAStep:NAME:string=!;DURATION_SECONDS:double=',
  'TCOA:ID:string=!;NAME:string=;KIND:coaKind=UNSPECIFIED;NORAD_CAT_ID:uint=;GROUP_ID:string=;EVENT_STANDARD:string=;EVENT_ID:string=;'
  + 'EVENT_EPOCH:string=;LEAD_SECONDS:double=;RETURN_WITHIN_SECONDS:double=;PREPARATION_SECONDS:double=;CHECKOUT_SECONDS:double=;'
  + 'DELTA_V_BUDGET_M_S_PER_YEAR:double=;STEPS:[COAStep]=;PLAN_ID:string='];

try {
  // ---- a. The IDL.
  const types = (model) => [...[...model.tables].map(([n, t]) => [n, 'T', t.fields.map(fieldSig)]), ...[...model.enums].map(([n, e]) => [n, `E${e.base}`, e.members.map(memberSig)])];
  for (const [code, [count, digest]] of Object.entries(FAMILIES)) {
    const model = parseIdl(schemaRoot, code);
    const sigs = [];
    for (const [name, kind, items] of types(model)) {
      if (NEW_TYPES.has(name)) continue;
      const kept = name in PREFIX ? items.slice(0, PREFIX[name]) : items;
      if (name in PREFIX) assert.deepEqual(items.slice(PREFIX[name]), ADDITIONS[name], `${name}: the additions, last`);
      sigs.push(kind === 'T' ? `T${name}:${kept.join(';')}` : `E${name}:${kind.slice(1)}|${kept.join(';')}`);
    }
    sigs.sort();
    assert.deepEqual([sigs.length, sha(sigs.join('\n')).slice(0, 16)], [count, digest], `${code}: every 1.287.0 type and field is unchanged`);
  }
  const coa = parseIdl(schemaRoot, 'COA');
  assert.equal(coa.root, 'COA', '$COA: root type');
  assert.deepEqual(types(coa).map(([n, k, items]) => (k === 'T' ? `T${n}:${items.join(';')}` : `E${n}:${k.slice(1)}|${items.join(';')}`)).sort(), [...COA_TYPES].sort(), '$COA: its three types');
  assert.match(fs.readFileSync(path.join(schemaRoot, 'COA/main.fbs'), 'utf8'), /file_identifier "\$COA";/, '$COA: file identifier');
  const ordinals = JSON.parse(fs.readFileSync(path.join(schemaRoot, 'REC/RECORDTYPE_ORDINALS.json'), 'utf8'));
  assert.equal(ordinals.extended_ordinals.COA, 298, '$COA is wide record type 298');
  assert.deepEqual(Object.entries(ordinals.extended_ordinals).filter(([, v]) => v === 298).map(([k]) => k), ['COA'], 'no other standard holds 298');

  // ---- b. One scenario $REC, written and read back.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const js = async (code) => import(pathToFileURL(path.join(root, `lib/js/${code}/main.js`)));
  const R = await js('REC');
  const [S, G, C, L, N, A, E] = await Promise.all(['SCN', 'EGP', 'COA', 'RFL', 'SNR', 'ACW', 'EPM'].map(js));
  const T = (cls, v) => Object.assign(new cls(), v);
  const root32 = (finish, value) => { const b = new fb.Builder(1024); finish(b, value.pack(b)); return [...b.asUint8Array()]; };

  const EPOCH = '2026-10-31T12:00:00.000Z';
  const scn = T(S.SCNT, {
    SCENARIO_ID: 'scenario-e2e/2026-10-31', EPOCH, SIM_SPEED: 60,
    REFERENCES: [
      T(S.SCNReferenceT, { REFERENCE_ID: 'alpha', NAME: 'ALPHA', REFERENCE_KIND: S.scenarioReferenceKind.GROUP, DATA_MODES: ['selected'] }),
      T(S.SCNReferenceT, { REFERENCE_ID: 'italy', NAME: 'ITALY', REFERENCE_KIND: S.scenarioReferenceKind.AREA_OF_INTEREST, COUNTRY: 'IT' }),
    ],
    START_EPOCH: '2026-10-31T00:00:00.000Z', STOP_EPOCH: '2026-11-03T00:00:00.000Z', ANIMATING: true,
    WINDOW_START: '2026-10-31T06:00:00.000Z', WINDOW_STOP: '2026-10-31T18:00:00.000Z',
    PROPAGATOR_MODULE_ID: 'propagator-e2e',
    PINNED_ROWS: [T(S.SCNPinnedRowT, { ROW_ID: 'row-1', MODE_ID: 'mode-e2e', VERB_ID: 'verb-e2e', REFERENCE_IDS: ['alpha'], RECORD_CID: 'bafkreie2e' })],
    SIGNATURE: new Array(64).fill(0),
  });
  const walker = T(G.EGPWalkerT, { PATTERN: G.egpWalkerPattern.DELTA, TOTAL_SATELLITES: 6, PLANES: 2, PHASING: 1, INCLINATION: 53, ALTITUDE_KM: 550,
    RA_OF_ASC_NODE_SPREAD: 360, FIRST_RA_OF_ASC_NODE: 15.25, FIRST_MEAN_ANOMALY: 7.5, ECCENTRICITY: 0.0001, ARG_OF_PERICENTER: 90, EPOCH, FIRST_NORAD_CAT_ID: 900001 });
  const egp = T(G.EGPT, { GROUP_ID: 'alpha', NAME: 'ALPHA', UPDATED_AT: EPOCH, MEMBERSHIP_MODE: G.egpMembershipMode.GENERATED, WALKER: walker,
    MEMBERS: Array.from({ length: 6 }, (_, i) => T(G.EGPMemberT, { STANDARD: '$OMM', RECORD_ID: `ALPHA-${i + 1}`, NORAD_CAT_ID: 900001 + i })) });
  const coas = [
    T(C.COAT, { ID: 'maneuver-6h', NAME: 'Maneuver 6 h before', KIND: C.coaKind.MANEUVER, GROUP_ID: 'alpha', EVENT_STANDARD: '$CDM', EVENT_EPOCH: EPOCH,
      LEAD_SECONDS: 21600, RETURN_WITHIN_SECONDS: 86400, PREPARATION_SECONDS: 14400, CHECKOUT_SECONDS: 86400, DELTA_V_BUDGET_M_S_PER_YEAR: 5 }),
    T(C.COAT, { ID: 'ride-out', NAME: 'Ride it out', KIND: C.coaKind.RIDE_OUT, GROUP_ID: 'alpha', EVENT_STANDARD: '$CDM', EVENT_EPOCH: EPOCH }),
    T(C.COAT, { ID: 'plan-a', NAME: 'Plan A', KIND: C.coaKind.RECOVERY, NORAD_CAT_ID: 900003, EVENT_STANDARD: '$OOE', EVENT_ID: 'safe-mode', EVENT_EPOCH: '2026-10-31T21:00:00.000Z',
      STEPS: [['Diagnose', 21600], ['Restore attitude', 14400], ['Payload checkout', 28800]].map(([NAME, DURATION_SECONDS]) => T(C.COAStepT, { NAME, DURATION_SECONDS })) }),
  ];
  const endpoint = (ENDPOINT_ID, v) => T(L.RFLEndpointT, { ENDPOINT_ID, ...v });
  const rfl = T(L.RFLT, { RFL_ID: 'jam-e2e', SAMPLE_LINK_INDEXES: [], SAMPLE_EPOCHS: [],
    LINKS: [T(L.RFLLinkT, { LINK_ID: 'uplink', LINK_KIND: L.rflLinkKind.UPLINK, TRANSMIT_ENDPOINT: endpoint('terminal-a', { SIT_ID: 'terminal-a' }),
      RECEIVE_ENDPOINT: endpoint('alpha-1', { NORAD_CAT_ID: 900001 }), THRESHOLD_TERM: L.rflBudgetTerm.SIGNAL_TO_INTERFERENCE_PLUS_NOISE,
      THRESHOLD_VALUE: 10, THRESHOLD_UNITS: 'dB', THRESHOLD_COMPARISON: L.rflComparison.GREATER_THAN_OR_EQUAL })],
    PROVENANCE: T(L.RFLProvenanceT, { SOURCE: 'stated', SAMPLING_STEP_S: 10 }),
    JAMMING: T(L.RFLJammingT, { LINK_INDEX: 0, JAMMER_ENDPOINT: endpoint('jammer', { SIT_ID: 'jammer' }), PASS_INDEX: 0,
      TERMINAL_GAIN_TOWARD_JAMMER_DBI: 0, HAS_TERMINAL_GAIN_TOWARD_JAMMER_DBI: true, POWER_STEP_DB: 6, PROCESSING_GAIN_DB: 10, HAS_PROCESSING_GAIN_DB: true,
      ARRAY_PAP_ID: 'array-16', AREA_RADIUS_KM: 500, AREA_RESOLUTION: 20 }) });
  const snr = T(N.SNRT, { SENSOR_ID: 'terminal-a-radio', SITE_ID: 'terminal-a', TYPE: N.SensorType.COMMS_ANTENNA,
    RF: T(N.SNRRfParametersT, { ANTENNA_PATTERN: N.snrAntennaPattern.PHASED_ARRAY, PEAK_POWER_W: 20, ANTENNA_GAIN_DBI: 30 }) });
  const acw = T(A.ACWT, { REQUEST: T(A.ACWRequestT, { OPERATION: A.acwOperationCode.COMPUTE_ACCESS_WINDOWS,
    REFRACTION_MODEL: T(A.ACWRefractionModelT, { MODEL_KIND: A.acwRefractionModelKind.ITU_R_P834 }),
    CONSTRAINTS: T(A.ACWConstraintSetT, { OPERATOR: A.acwConstraintOperator.ALL_OF,
      CONSTRAINTS: [T(A.ACWConstraintT, { KIND: A.acwConstraintKind.TERRAIN_LINE_OF_SIGHT, LABEL: 'terrain' })] }) }) });
  const keys = crypto.generateKeyPairSync('ed25519');
  const publicHex = keys.publicKey.export({ format: 'der', type: 'spki' }).subarray(-32).toString('hex');
  const epm = T(E.EPMT, { KEYS: [T(E.CryptoKeyT, { PUBLIC_KEY: publicHex, ALGORITHM: 'ed25519', KEY_TYPE: E.KeyType.Signing })] });

  const union = (type, value, standard) => T(R.RecordT, { value_type: R.RecordType[type], value, standard });
  const wide = (type, bytes, standard) => T(R.RecordT, { value_type: R.RecordType.NONE, standard, EXTENDED_TYPE: R.RecordTypeExtended[type], EXTENDED_VALUE: bytes });
  const records = [union('SCN', scn, 'SCN'), union('EGP', egp, 'EGP'),
    ...coas.map((c) => wide('COA', root32((b, o) => C.COA.finishCOABuffer(b, o), c), 'COA')),
    union('RFL', rfl, 'RFL'), union('SNR', snr, 'SNR'), union('ACW', acw, 'ACW'), union('EPM', epm, 'EPM')];
  const builder = new fb.Builder(8192);
  R.REC.finishRECBuffer(builder, T(R.RECT, { version: 'scenario-e2e', RECORDS: records }).pack(builder));
  const unsigned = Buffer.from(builder.asUint8Array());
  assert.ok(R.REC.bufferHasIdentifier(new fb.ByteBuffer(new Uint8Array(unsigned))), 'the scenario is a $REC');

  const read = (bytes) => R.REC.getRootAsREC(new fb.ByteBuffer(new Uint8Array(bytes))).unpack();
  const back = read(unsigned);
  assert.equal(back.RECORDS.length, 9, 'nine records');
  assert.deepEqual(back.RECORDS.map((r) => r.standard), ['SCN', 'EGP', 'COA', 'COA', 'COA', 'RFL', 'SNR', 'ACW', 'EPM'], 'the $SCN first, then the others');
  assert.equal(back.RECORDS[0].value_type, R.RecordType.SCN, 'record 0 is the $SCN by the union');
  same(back.RECORDS[0].value, scn, '$SCN: every stated value');
  same(back.RECORDS[1].value, egp, '$EGP: the walker, GENERATED and the members');
  for (let i = 0; i < 3; i++) {
    const r = back.RECORDS[2 + i];
    assert.deepEqual([r.value_type, r.EXTENDED_TYPE], [R.RecordType.NONE, 298], `$COA ${i}: wide record type 298`);
    const bb = new fb.ByteBuffer(new Uint8Array(r.EXTENDED_VALUE));
    assert.ok(C.COA.bufferHasIdentifier(bb), `$COA ${i}: its own file identifier`);
    same(C.COA.getRootAsCOA(bb).unpack(), coas[i], `$COA ${i}: every stated value`);
  }
  same(back.RECORDS[5].value, rfl, '$RFL: the link and RFLJamming');
  same(back.RECORDS[6].value, snr, '$SNR: PHASED_ARRAY');
  same(back.RECORDS[7].value, acw, '$ACW: TERRAIN_LINE_OF_SIGHT and ITU_R_P834');
  same(back.RECORDS[8].value, epm, '$EPM: the author key');
  const plan = C.COA.getRootAsCOA(new fb.ByteBuffer(new Uint8Array(back.RECORDS[4].EXTENDED_VALUE)));
  assert.deepEqual(Array.from({ length: plan.stepsLength() }, (_, i) => [plan.STEPS(i).NAME(), plan.STEPS(i).DURATION_SECONDS()]),
    [['Diagnose', 21600], ['Restore attitude', 14400], ['Payload checkout', 28800]], 'RECOVERY: three steps in order, by the accessors');
  const accessors = R.REC.getRootAsREC(new fb.ByteBuffer(new Uint8Array(unsigned)));
  const scnView = accessors.RECORDS(0).value(new S.SCN());
  assert.deepEqual([scnView.REFERENCES(0).REFERENCE_KIND(), scnView.REFERENCES(1).REFERENCE_KIND()], [9, 10], 'GROUP is 9 and AREA_OF_INTEREST is 10 on the wire');
  const acwView = accessors.RECORDS(7).value(new A.ACW()).REQUEST();
  assert.deepEqual([acwView.REFRACTION_MODEL().MODEL_KIND(), acwView.CONSTRAINTS().CONSTRAINTS(0).KIND()], [2, 10], 'ITU_R_P834 is 2 and TERRAIN_LINE_OF_SIGHT is 10 on the wire');
  assert.equal(accessors.RECORDS(6).value(new N.SNR()).RF().ANTENNA_PATTERN(), 12, 'PHASED_ARRAY is 12 on the wire');

  // ---- c. The signing rule.
  const slotOf = (bytes) => {
    const view = R.REC.getRootAsREC(new fb.ByteBuffer(bytes)).RECORDS(0).value(new S.SCN()).signatureArray();
    assert.equal(view.length, 64, 'the slot is 64 bytes');
    return view.byteOffset - bytes.byteOffset;
  };
  const at = slotOf(new Uint8Array(unsigned));
  assert.ok(unsigned.subarray(at, at + 64).every((b) => b === 0), 'the slot is zero before signing');
  const domain = Buffer.from('$SCN\0', 'latin1');
  const signature = crypto.sign(null, Buffer.concat([domain, unsigned]), keys.privateKey);
  const signed = Buffer.from(unsigned);
  signed.set(signature, at);
  const changed = [...signed.keys()].filter((i) => signed[i] !== unsigned[i]);
  assert.ok(changed.length > 0 && changed.every((i) => i >= at && i < at + 64), 'signing changes only the 64 slot bytes');
  assert.equal(slotOf(new Uint8Array(signed)), at, 'the accessor finds the same slot in the signed record');
  const zeroed = Buffer.from(signed); zeroed.fill(0, at, at + 64);
  assert.equal(Buffer.compare(zeroed, unsigned), 0, 'the bytes with the slot zeroed are identical before and after');
  const author = read(signed).RECORDS[8].value.KEYS[0];
  const key = crypto.createPublicKey({ key: Buffer.concat([Buffer.from('302a300506032b6570032100', 'hex'), Buffer.from(author.PUBLIC_KEY, 'hex')]), format: 'der', type: 'spki' });
  const verify = (bytes) => { const z = Buffer.from(bytes); const s = z.subarray(at, at + 64); const sig = Buffer.from(s); z.fill(0, at, at + 64); return crypto.verify(null, Buffer.concat([domain, z]), key, sig); };
  assert.ok(verify(signed), 'the signature verifies with the author $EPM key');
  const tampered = Buffer.from(signed); tampered[at - 1] ^= 1;
  assert.equal(verify(tampered), false, 'a changed byte outside the slot fails');
  same(read(signed).RECORDS[1].value, egp, 'the signed record reads back the same records');
  const cid = sha(signed);

  // ---- d. JS -> C++ -> Go -> JS for $COA, $EGP, $RFL and $SNR.
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsscenario\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  const modules = { COA: C, EGP: G, RFL: L, SNR: N };
  const stated = { COA: coas[2], EGP: egp, RFL: rfl, SNR: snr };
  for (const code of Object.keys(modules)) {
    const M = modules[code];
    const model = parseIdl(schemaRoot, code);
    const encode = (o) => { const b = new fb.Builder(4096); M[code][`finish${code}Buffer`](b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
    const decode = (f) => M[code][`getRootAs${code}`](new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
    const visited = new Set();
    const populated = populate(model, M, code, visited);
    assert.deepEqual([...visited].sort(), closure(model, code).sort(), `${code}: every reachable table populated`);
    const dir = path.join(tmp, `wire-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    const messages = [['populated', populated], ['stated', stated[code]]];
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = closure(model, code);
    // The macros a libc defines are pushed aside, as in bindings-compile.mjs (see docs/name-collisions.md).
    fs.writeFileSync(path.join(dir, 'copy.cpp'), '#include <cmath>\n#include <ctime>\n#undef DOMAIN\n#undef TIME_UTC\n#undef BYTE_ORDER\n'
      + cppCopySource({ model, root: code, include: `${code}/main_generated.h`, populated: copyTables }));
    run('tar', ['-xzf', path.join(root, `dist/${code}/${code}.cpp.tar.gz`), '-C', path.join(dir, 'cpp')]);
    run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
    run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);
    const goDir = path.join(tmp, `go${code}`);
    run('cp', ['-R', path.join(root, 'lib/go', code), goDir]); run('chmod', ['-R', 'u+w', goDir]);
    fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: code, pkg: code, populated: copyTables }));
    fs.mkdirSync(path.join(tmp, `run${code}`));
    fs.writeFileSync(path.join(tmp, `run${code}/main.go`), `package main\nimport (\n "os"\n p "sdsscenario/go${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
    run('go', ['run', '-mod=mod', `./run${code}`, ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);
    for (const [name, o] of messages) {
      const bytes = fs.readFileSync(file(name, 'js'));
      same(decode(file(name, 'js')), o, `${code} ${name}: JS changed a field`);
      for (const leg of ['cpp', 'go']) {
        same(decode(file(name, leg)), o, `${code} ${name}: ${leg} changed a field`);
        assert.equal(Buffer.compare(encode(decode(file(name, leg))), bytes), 0, `${code} ${name}: the ${leg} leg re-encodes to the JS bytes`);
      }
    }
    summary.push(code);
  }

  const version = (code) => fs.readFileSync(path.join(schemaRoot, `${code}/main.fbs`), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} ($SCN ${version('SCN')}, $EGP ${version('EGP')}, $COA ${version('COA')}, $RFL ${version('RFL')}, $SNR ${version('SNR')}, $ACW ${version('ACW')}): `
    + `every 1.287.0 type and field unchanged, the additions last, $COA wide type 298; one scenario $REC of 9 records (${signed.length} B, sha256 ${cid.slice(0, 16)}) `
    + 'read back equal; the signature slot found by the accessor, signing changes only its 64 bytes, zeroed bytes identical before and after, '
    + `the signature verifies and a changed byte fails; byte-equal JS -> C++ -> Go -> JS: ${summary.join(', ')}`);
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
