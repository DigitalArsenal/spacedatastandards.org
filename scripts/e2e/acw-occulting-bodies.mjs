#!/usr/bin/env node
// One E2E for the occulting bodies of a $ACW request: bodies besides the central body that a LINE_OF_SIGHT
// constraint also tests, and the body that opens or closes each access window.
//   a. the IDL: ACWRequest keeps its 21 fields of 1.286.0 and gains OCCULTING_BODIES:[ACWOccultingBody], last;
//      ACWAccessWindow keeps its 13 fields and gains START_OCCULTING_BODY_ID:int and END_OCCULTING_BODY_ID:int, last;
//      ACWOccultingBody and ACWOrientationSample are new; the 39 other types of the $ACW family are unchanged;
//      no addition has a NaN default; LINE_OF_SIGHT (still 8) names the list;
//   b. JS -> C++ -> Go -> JS: a request with one ACWOccultingBody (the Moon, with states and an orientation sample)
//      and a result whose window is closed by the Moon (END_OCCULTING_BODY_ID 301), a record that states neither
//      (the list is empty, both ids read 0), and a fully populated $ACW, byte-equal after every leg; copies that drop
//      END_OCCULTING_BODY_ID are caught in C++ and Go;
//   c. fbjson: ACWRequest ends with OCCULTING_BODIES, ACWAccessWindow with the two ids, and both new tables exist.
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
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-acw-occulting-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}`;
const tableSig = (t) => t.fields.map(fieldSig).join(';');
const enumSig = (e) => `${e.base}|${e.members.map((m) => `${m.name}=${m.value}`).join(';')}`;

// 1.286.0 (f916487658): [table, field count, first 16 hex of sha256 of the signature of those fields, additions in order].
const APPENDED = [
  ['ACWRequest', 21, 'da125cf584d6c486', ['OCCULTING_BODIES:[ACWOccultingBody]=']],
  ['ACWAccessWindow', 13, '4af81d7b7df3ade5', ['START_OCCULTING_BODY_ID:int=', 'END_OCCULTING_BODY_ID:int=']],
];
const NEW = [
  ['ACWOccultingBody', ['BODY_NAIF_ID:int=', 'SEMI_MAJOR_M:double=', 'SEMI_INTERMEDIATE_M:double=', 'SEMI_MINOR_M:double=',
    'STATES:[ACWStateSample]=', 'ORIENTATION:[ACWOrientationSample]=']],
  ['ACWOrientationSample', ['JULIAN_DATE_TT:double=', 'Q1:double=', 'Q2:double=', 'Q3:double=', 'QC:double=']],
];
// Every other table (T) and enum (E) of the $ACW family at 1.286.0: count and one digest over their signatures.
const OTHERS = [39, '369bc1f49da2c164'];
const MOON = 301, EARTH = 399, MOON_RADIUS_M = 1737400;
const JD0 = 2461000.5, HOUR = 1 / 24;

try {
  // ---- a. The IDL.
  const acw = parseIdl(schemaRoot, 'ACW');
  const added = [];
  for (const [name, count, digest, additions] of APPENDED) {
    const fields = acw.tables.get(name).fields;
    assert.equal(sha(tableSig({ fields: fields.slice(0, count) })).slice(0, 16), digest, `${name}: the 1.286.0 fields are untouched`);
    assert.deepEqual(fields.slice(count).map(fieldSig), additions, `${name}: the additions, last`);
    added.push(...fields.slice(count));
  }
  for (const [name, sigs] of NEW) {
    assert.ok(acw.tables.has(name), `${name} exists`);
    assert.deepEqual(acw.tables.get(name).fields.map(fieldSig), sigs, `${name}: its fields`);
    added.push(...acw.tables.get(name).fields);
  }
  for (const f of added) assert.ok(!/nan/i.test(String(f.def ?? '')), `${f.name}: no NaN default`);
  const changed = [...APPENDED, ...NEW].map(([n]) => `T${n}`);
  const types = new Map();
  for (const [n, x] of acw.tables) types.set(`T${n}`, sha(tableSig(x)));
  for (const [n, e] of acw.enums) types.set(`E${n}`, sha(enumSig(e)));
  const others = [...types.keys()].filter((k) => !changed.includes(k)).sort();
  assert.deepEqual([others.length, sha(others.map((k) => `${k}:${types.get(k)}`).join('\n')).slice(0, 16)], OTHERS, 'the other $ACW types are unchanged');
  assert.equal(acw.enums.get('acwConstraintKind').members.find((m) => m.name === 'LINE_OF_SIGHT').value, 8, 'LINE_OF_SIGHT keeps its ordinal');
  // The doc comment (/// lines) right above a line of the schema, joined into one line.
  const lines = fs.readFileSync(path.join(schemaRoot, 'ACW/main.fbs'), 'utf8').split('\n');
  const docAbove = (re, from = 0) => {
    const at = lines.findIndex((l, i) => i >= from && re.test(l));
    assert.ok(at >= 0, `found ${re}`);
    const doc = [];
    for (let i = at - 1; i >= 0 && /^\s*\/\/\//.test(lines[i]); i--) doc.unshift(lines[i].replace(/^\s*\/\/\/\s?/, '').trim());
    return doc.join(' ');
  };
  assert.ok(docAbove(/^\s*LINE_OF_SIGHT = 8,/).includes('nor by any ACWRequest.OCCULTING_BODIES entry'), 'LINE_OF_SIGHT names the list');
  const bodyAt = lines.findIndex((l) => /^table ACWOccultingBody\b/.test(l));
  assert.ok(docAbove(/^\s*STATES:\[ACWStateSample\];/, bodyAt).includes('Absent for BODY_NAIF_ID 10 or 301 means SUN_STATES or MOON_STATES'), 'a Sun or Moon entry may take SUN_STATES or MOON_STATES');
  assert.ok(docAbove(/^\s*END_OCCULTING_BODY_ID:int;/).includes('Same, for the closing edge.'), 'END_OCCULTING_BODY_ID is documented');
  assert.ok(docAbove(/^\s*START_OCCULTING_BODY_ID:int;/).includes('0 when the opening edge is not an occultation'), '0 means no occultation');

  // ---- b. JS -> C++ -> Go -> JS.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const M = await import(pathToFileURL(path.join(root, 'lib/js/ACW/main.js')));
  const T = (cls, v) => Object.assign(new cls(), v);
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsacwocc\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const summary = [];
  const code = 'ACW';
  const encode = (o) => { const b = new fb.Builder(4096); M.ACW.finishACWBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const decode = (f) => M.ACW.getRootAsACW(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
  // Copies every message through the generated C++ and Go (optionally with one line removed from a copy program) and
  // checks each leg decodes and re-encodes to the JS bytes; returns each leg's decoded messages.
  const wire = (messages, { cppDrop = null, goDrop = null } = {}) => {
    const tag = cppDrop ? 'controlcpp' : goDrop ? 'controlgo' : 'wire';
    const dir = path.join(tmp, `${tag}-${code}`); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
    const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
    for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
    const copyTables = [...new Set([code, ...closure(acw, code, { arms: allArms })])];
    let cppSource = cppCopySource({ model: acw, root: code, include: `${code}/main_generated.h`, populated: copyTables });
    let goSource = goCopySource({ model: acw, root: code, pkg: code, populated: copyTables });
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
    fs.writeFileSync(path.join(tmp, `run${tag}${code}/main.go`), `package main\nimport (\n "os"\n p "sdsacwocc/${tag}${code}"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n`);
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

  // A spacecraft observer and a cislunar target, Earth-fixed meters, two samples an hour apart; the Moon passes
  // between them and closes the window.
  const state = (jd, x, y, z) => T(M.ACWStateSampleT, { JULIAN_DATE_TT: jd, POSITION_X_M: x, POSITION_Y_M: y, POSITION_Z_M: z });
  const moon = T(M.ACWOccultingBodyT, {
    BODY_NAIF_ID: MOON, SEMI_MAJOR_M: MOON_RADIUS_M, SEMI_INTERMEDIATE_M: MOON_RADIUS_M, SEMI_MINOR_M: MOON_RADIUS_M,
    STATES: [state(JD0, 361200000, 105600000, -21900000), state(JD0 + HOUR, 360100000, 108900000, -21400000)],
    ORIENTATION: [T(M.ACWOrientationSampleT, { JULIAN_DATE_TT: JD0, Q1: 0, Q2: 0, Q3: 0.3826834323650898, QC: 0.9238795325112867 })],
  });
  const losConstraints = T(M.ACWConstraintSetT, { OPERATOR: M.acwConstraintOperator.ALL_OF, LABEL: 'visible',
    CONSTRAINTS: [T(M.ACWConstraintT, { KIND: M.acwConstraintKind.LINE_OF_SIGHT, LABEL: 'line-of-sight' })] });
  const observer = T(M.ACWObserverTrajectoryT, { OBSERVER_ID: 'observer-1',
    STATES: [state(JD0, 42164137, 0, 0), state(JD0 + HOUR, 40727000, 10912000, 0)] });
  const request = (extra) => T(M.ACWRequestT, { OPERATION: M.acwOperationCode.COMPUTE_ACCESS_WINDOWS, TRACE_ID: 'occulting-bodies',
    STATES: [state(JD0, 450000000, 140000000, -28000000), state(JD0 + HOUR, 449000000, 143000000, -27500000)],
    CONSTRAINTS: losConstraints, OBSERVERS: [observer], EVALUATION_MODE: M.acwEvaluationMode.CONTINUOUS, ...extra });
  const window = (extra) => T(M.ACWAccessWindowT, { OBSERVER_ID: 'observer-1', START_JULIAN_DATE_TT: JD0,
    END_JULIAN_DATE_TT: JD0 + 0.6 * HOUR, SAMPLE_COUNT: 1, START_LIMITING_CONSTRAINT_INDEX: -1, END_LIMITING_CONSTRAINT_INDEX: 0,
    END_LIMITING_CONSTRAINT_LABEL: 'line-of-sight', EDGES_REFINED: true, ...extra });
  const result = (extra) => T(M.ACWResultT, { STATUS: M.acwResultStatus.OK, TRACE_ID: 'occulting-bodies',
    EVALUATION_MODE: M.acwEvaluationMode.CONTINUOUS, CONSTRAINT_LABELS: ['line-of-sight'], WINDOWS: [window(extra)] });
  const blocked = T(M.ACWT, { REQUEST: request({ OCCULTING_BODIES: [moon] }), RESULT: result({ END_OCCULTING_BODY_ID: MOON }) });
  // A second window opened by the central body leaving the line of sight.
  blocked.RESULT.WINDOWS.push(window({ START_JULIAN_DATE_TT: JD0 + 0.8 * HOUR, END_JULIAN_DATE_TT: JD0 + HOUR,
    START_LIMITING_CONSTRAINT_INDEX: 0, END_LIMITING_CONSTRAINT_INDEX: -1, START_LIMITING_CONSTRAINT_LABEL: 'line-of-sight',
    END_LIMITING_CONSTRAINT_LABEL: '', START_OCCULTING_BODY_ID: EARTH }));
  const unstated = T(M.ACWT, { REQUEST: request({}), RESULT: result({}) });
  // Every field of the new and the extended tables populated with a non-default value. The whole $ACW cannot be
  // populated by the harness (ACWConstraintSet.SETS nests the table in itself), so the populated record carries
  // these subtrees inside the request and the result above.
  const visited = new Set();
  const fullBody = populate(acw, M, 'ACWOccultingBody', visited);
  const fullWindow = populate(acw, M, 'ACWAccessWindow', visited);
  assert.deepEqual([...visited].sort(), ['ACWAccessWindow', 'ACWOccultingBody', 'ACWOrientationSample', 'ACWStateSample'], 'the new and extended tables populated');
  const populated = T(M.ACWT, { REQUEST: request({ OCCULTING_BODIES: [fullBody, moon] }), RESULT: result({}) });
  populated.RESULT.WINDOWS = [fullWindow, ...blocked.RESULT.WINDOWS];
  const back = wire([['blocked', blocked], ['unstated', unstated], ['populated', populated, true]]);
  const b = back.blocked.go, u = back.unstated.go;
  const body = b.REQUEST.OCCULTING_BODIES;
  assert.equal(body.length, 1, 'blocked: one occulting body after the Go leg');
  assert.deepEqual([body[0].BODY_NAIF_ID, body[0].SEMI_MAJOR_M, body[0].SEMI_INTERMEDIATE_M, body[0].SEMI_MINOR_M, body[0].STATES.length,
    body[0].STATES[1].POSITION_Y_M, body[0].ORIENTATION.length, body[0].ORIENTATION[0].Q3, body[0].ORIENTATION[0].QC],
  [MOON, MOON_RADIUS_M, MOON_RADIUS_M, MOON_RADIUS_M, 2, 108900000, 1, 0.3826834323650898, 0.9238795325112867], 'blocked: the Moon, its radii, states and orientation');
  assert.deepEqual(b.RESULT.WINDOWS.map((w) => [w.START_OCCULTING_BODY_ID, w.END_OCCULTING_BODY_ID, w.END_LIMITING_CONSTRAINT_LABEL]),
    [[0, MOON, 'line-of-sight'], [EARTH, 0, '']], 'blocked: the Moon closes the first window, the central body opens the second');
  assert.equal(u.REQUEST.OCCULTING_BODIES.length, 0, 'unstated: no occulting bodies');
  assert.deepEqual([u.RESULT.WINDOWS[0].START_OCCULTING_BODY_ID, u.RESULT.WINDOWS[0].END_OCCULTING_BODY_ID], [0, 0], 'unstated: both ids read 0');
  const raw = M.ACW.getRootAsACW(new fb.ByteBuffer(new Uint8Array(encode(b))));
  const rawBody = raw.REQUEST().OCCULTING_BODIES(0);
  assert.deepEqual([raw.REQUEST().occultingBodiesLength(), rawBody.BODY_NAIF_ID(), rawBody.statesLength(), rawBody.orientationLength(),
    raw.RESULT().WINDOWS(0).END_OCCULTING_BODY_ID(), raw.RESULT().WINDOWS(1).START_OCCULTING_BODY_ID()], [1, MOON, 2, 1, MOON, EARTH],
  'the new slots read by their accessors');
  // Controls: a copy that drops END_OCCULTING_BODY_ID reads 0 and the comparison catches it.
  const cppControl = wire([['blocked', blocked]], { cppDrop: 'x.add_END_OCCULTING_BODY_ID(s->END_OCCULTING_BODY_ID());' });
  assert.equal(cppControl.blocked.cpp.RESULT.WINDOWS[0].END_OCCULTING_BODY_ID, 0, 'a C++ copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(cppControl.blocked.cpp, b), 'a C++ copy that drops END_OCCULTING_BODY_ID must differ');
  const goControl = wire([['blocked', blocked]], { goDrop: 'ACWAccessWindowAddEND_OCCULTING_BODY_ID(b, s.END_OCCULTING_BODY_ID())' });
  assert.equal(goControl.blocked.go.RESULT.WINDOWS[0].END_OCCULTING_BODY_ID, 0, 'a Go copy without the slot reads 0');
  assert.throws(() => assert.deepStrictEqual(goControl.blocked.go, b), 'a Go copy that drops END_OCCULTING_BODY_ID must differ');

  // ---- c. fbjson.
  const defs = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/ACW/main.fb.schema.json'), 'utf8')).definitions;
  const props = (n) => Object.keys(defs[n].properties);
  assert.deepEqual(props('ACWRequest').slice(APPENDED[0][1]), ['OCCULTING_BODIES'], 'fbjson ACWRequest ends with OCCULTING_BODIES');
  assert.deepEqual(props('ACWAccessWindow').slice(APPENDED[1][1]), ['START_OCCULTING_BODY_ID', 'END_OCCULTING_BODY_ID'], 'fbjson ACWAccessWindow ends with both ids');
  for (const [name, sigs] of NEW) assert.deepEqual(props(name), sigs.map((s) => s.split(':')[0]), `fbjson ${name}`);

  const version = fs.readFileSync(path.join(schemaRoot, 'ACW/main.fbs'), 'utf8').match(/^\/\/ Version: (\S+)$/m)[1];
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version.split('+')[0];
  console.log(`PASS: SDS ${pkg} $ACW ${version} occulting bodies: ACWRequest 21 + 1 and ACWAccessWindow 13 + 2 fields, `
    + `ACWOccultingBody and ACWOrientationSample new, ${OTHERS[0]} other types unchanged, no NaN defaults; `
    + `byte-equal JS -> C++ -> Go -> JS: ${summary.join(', ')}; the Moon (301) closes a window, the central body (399) opens one; `
    + 'unstated ids read 0; dropped END_OCCULTING_BODY_ID caught in C++ and Go; fbjson names every addition');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
