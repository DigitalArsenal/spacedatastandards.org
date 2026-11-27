#!/usr/bin/env node
// One E2E for canonical $AIS (AI Session Event) SDS schema (#1199):
//   a. IDL, ordinals & THEMIS rules: AIS=306 in RecordTypeExtended (union RecordType
//      frozen at 255), file_identifier "$AIS", root_type AIS, leading scalar/string run
//      before nested tables so FlatSQL projects every filterable column, no reserved
//      MIN/MAX, no libc macro collisions, no enum/field shadows, fbjson root type = AIS.
//   b. JS -> C++ -> Go -> JS byte-exact wire round-trip of a realistic populated $AIS
//      record carrying server-observed IP/CF headers, public SDN identity, browser
//      fingerprint signals, prompt/answer/metrics, and structured MESSAGES/TOOL_CALLS/EDGE_HEADERS.
//   c. Flatc JSON <-> binary round-trip verifying IDL-exact UPPER_SNAKE_CASE keys.
//   d. $REC wide-record dispatch (EXTENDED_TYPE = 306).
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { FlatcRunner } from 'flatc-wasm';
import { closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-ais-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, {
  cwd,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
  maxBuffer: 256 * 1024 * 1024,
});
const CXX = process.env.CXX || 'c++';
const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
const LIBC_MACROS = new Set(['DOMAIN', 'TIME_UTC', 'BYTE_ORDER', 'MIN', 'MAX', 'BIG_ENDIAN', 'LITTLE_ENDIAN']);

const diffPath = (a, b, at = '') => {
  if (Object.is(a, b)) return null;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return `${at || '.'}: ${String(a)} != ${String(b)}`;
  }
  if (a.constructor?.name !== b.constructor?.name) {
    return `${at || '.'}: ${a.constructor?.name} != ${b.constructor?.name}`;
  }
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const d = diffPath(a[k], b[k], `${at}.${k}`);
    if (d) return d;
  }
  return null;
};

try {
  // ---- a. IDL, ordinals & FlatSQL leading-run rules.
  const ordinalsDoc = JSON.parse(fs.readFileSync(path.join(schemaRoot, 'REC/RECORDTYPE_ORDINALS.json'), 'utf8'));
  assert.equal(ordinalsDoc.union_capacity, 255);
  assert.equal(ordinalsDoc.member_count, 255);
  assert.equal(ordinalsDoc.frozen_through, 255);
  assert.equal(ordinalsDoc.extended_ordinals.AIS, 306, 'AIS must hold wide ordinal 306');
  assert.equal(ordinalsDoc.ordinals.AIS, undefined, 'AIS must not enter frozen union RecordType');

  const rawIdl = fs.readFileSync(path.join(schemaRoot, 'AIS/main.fbs'), 'utf8');
  assert.match(rawIdl, /file_identifier "\$AIS";/);
  assert.match(rawIdl, /root_type AIS;/);
  assert.ok(!/=\s*[-+]?nan\b/i.test(rawIdl), 'AIS: no = nan default');

  const model = parseIdl(schemaRoot, 'AIS');
  assert.equal(model.root, 'AIS');
  assert.equal(model.unsupported.size, 0, 'AIS: no unsupported struct fields');
  for (const [enumName, e] of model.enums) {
    assert.ok(
      !e.members.some((m) => m.name.toUpperCase() === 'MIN' || m.name.toUpperCase() === 'MAX'),
      `AIS.${enumName}: no reserved MIN/MAX member`,
    );
  }
  for (const [tableName, t] of model.tables) {
    for (const f of t.fields) {
      assert.ok(!LIBC_MACROS.has(f.name), `AIS.${tableName}.${f.name}: no libc macro collision`);
      if (model.enums.has(f.elem)) {
        assert.notEqual(camel(f.name).toLowerCase(), f.elem.toLowerCase(), `AIS.${tableName}.${f.name}: enum shadow`);
      }
    }
  }

  // Verify FlatSQL leading scalar/string/enum run: EVERY non-nested field precedes
  // the first vector/nested table so enginecatalog projects every filter column.
  const rootFields = model.tables.get('AIS').fields;
  const isNested = (f) => f.vector || model.tables.has(f.elem);
  const firstNestedIdx = rootFields.findIndex(isNested);
  assert.ok(firstNestedIdx >= 75, `Expected >=75 leading scalar/string/enum fields before nested tables, got ${firstNestedIdx}`);
  const trailingScalars = rootFields.slice(firstNestedIdx).filter((f) => !isNested(f)).map((f) => f.name);
  assert.deepEqual(trailingScalars, [], `No scalar/string/enum field may appear after first nested field: ${trailingScalars.join(', ')}`);
  const leadingNames = new Set(rootFields.slice(0, firstNestedIdx).map((f) => f.name));
  for (const requiredCol of [
    'EVENT_ID', 'SESSION_ID', 'REQUEST_ID', 'SEQUENCE_NO', 'EVENT_KIND',
    'RECEIVED_UTC', 'RECEIVED_UNIX_MS', 'CLIENT_IP', 'CLIENT_IP_HASH',
    'CF_COUNTRY', 'SDN_SIGNED_IN', 'SDN_PUBLIC_KEY_HEX', 'SDN_KEY_ID',
    'FINGERPRINT_HASH', 'CANVAS_HASH', 'AUDIO_HASH', 'FONT_HASH', 'INSTALL_ID',
    'PROMPT_TEXT', 'ANSWER_TEXT', 'STATUS', 'INPUT_TOKENS', 'OUTPUT_TOKENS', 'TOTAL_TOKENS', 'COST_USD',
  ]) {
    assert.ok(leadingNames.has(requiredCol), `AIS leading FlatSQL run must include ${requiredCol}`);
  }

  // Requirement 3: refuse any secret/credential-bearing field name across all tables.
  const SECRET_PATTERN = /(PRIVATE_KEY|MNEMONIC|SEED_PHRASE|SECRET|PASSWORD|PASSKEY|API_KEY|AUTH_TOKEN|COOKIE_VALUE|AUTHORIZATION)/i;
  for (const [tableName, t] of model.tables) {
    for (const f of t.fields) {
      assert.ok(!SECRET_PATTERN.test(f.name), `AIS.${tableName}.${f.name}: secret/credential field name forbidden`);
    }
  }

  const fbjson = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/AIS/main.fb.schema.json'), 'utf8'));
  assert.equal(fbjson['x-flatbuffer-root-type'], 'AIS');

  // ---- b. JS -> C++ -> Go -> JS wire round-trip.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const [AIS, REC] = await Promise.all([
    import(pathToFileURL(path.join(root, 'lib/js/AIS/main.js'))),
    import(pathToFileURL(path.join(root, 'lib/js/REC/main.js'))),
  ]);
  const T = (cls, v) => Object.assign(new cls(), v);

  const stated = T(AIS.AIST, {
    EVENT_ID: 'evt-01j9ais000000000000000001',
    SESSION_ID: 'sess-spaceaware-20261127-01',
    REQUEST_ID: 'req-spaceaware-0001',
    SEQUENCE_NO: 2,
    TURN_INDEX: 1,
    EVENT_KIND: AIS.aisEventKind.ANSWER_COMPLETED,
    RECEIVED_UTC: '2026-11-27T12:20:00.123Z',
    RECEIVED_UNIX_MS: 1795782000123n,
    CLIENT_UTC: '2026-11-27T12:20:00.050Z',
    CLIENT_UNIX_MS: 1795782000050n,
    CLIENT_IP: '203.0.113.42',
    CLIENT_IP_HASH: 'a'.repeat(64),
    REMOTE_ADDR: '172.70.114.9:51234',
    X_FORWARDED_FOR: '203.0.113.42, 172.70.114.9',
    CF_RAY: '8f1234567890abcd-IAD',
    CF_COUNTRY: 'US',
    CF_REGION: 'VA',
    CF_CITY: 'Ashburn',
    CF_ASN: 'AS7922',
    CF_TLS_VERSION: 'TLSv1.3',
    HTTP_ORIGIN: 'https://spaceaware.io',
    HTTP_REFERER: 'https://spaceaware.io/#/console',
    HTTP_USER_AGENT: 'Mozilla/5.0 SpaceAwareE2E/1.0',
    HTTP_ACCEPT_LANGUAGE: 'en-US,en;q=0.9',
    SEC_CH_UA: '"Chromium";v="131"',
    SEC_CH_UA_PLATFORM: '"macOS"',
    SEC_CH_UA_MOBILE: '?0',
    SDN_SIGNED_IN: true,
    SDN_IDENTITY_SCHEME: 'hd-wallet',
    SDN_SIGN_IN_METHOD: 'passkey',
    SDN_PUBLIC_KEY_HEX: '0123456789abcdef'.repeat(4),
    SDN_KEY_ID: 'key-ed25519-test',
    SDN_DERIVATION_PATH: "m/44'/9999'/0'/0/0",
    EXTERNAL_WALLET_ADDRESS: '0x1111111111111111111111111111111111111111',
    EXTERNAL_WALLET_NAME: 'MetaMask',
    EXTERNAL_WALLET_CHAIN: 'eip155:1',
    FINGERPRINT_HASH: 'b'.repeat(64),
    INSTALL_ID: 'inst-1111-2222-3333-444444444444',
    PAGE_URL: 'https://spaceaware.io/#/console',
    APP_NAME: 'SpaceAware',
    APP_VERSION: '2026.11.27',
    PLATFORM: 'MacIntel',
    TIMEZONE: 'America/New_York',
    TZ_OFFSET_MIN: 300,
    LANGUAGES: 'en-US,en',
    SCREEN_WIDTH: 2560,
    SCREEN_HEIGHT: 1440,
    VIEWPORT_WIDTH: 1440,
    VIEWPORT_HEIGHT: 900,
    COLOR_DEPTH: 24,
    DEVICE_PIXEL_RATIO: 2,
    HARDWARE_CONCURRENCY: 12,
    DEVICE_MEMORY_GB: 8,
    MAX_TOUCH_POINTS: 0,
    WEBGL_VENDOR: 'Apple Inc.',
    WEBGL_RENDERER: 'Apple M3 Max',
    CANVAS_HASH: 'c'.repeat(64),
    AUDIO_HASH: 'd'.repeat(64),
    FONT_HASH: 'e'.repeat(64),
    COOKIES_ENABLED: true,
    DO_NOT_TRACK: '1',
    WEBDRIVER: false,
    LOCAL_STORAGE_WRITABLE: true,
    MODEL_PROVIDER: 'spaceaware-proxy',
    MODEL_ID: 'Claude Opus 5.5',
    PROMPT_TEXT: 'Show all commercial SAR coverage of Paris over the next 48 hours',
    ANSWER_TEXT: 'Commercial SAR coverage computed across 102 operational spacecraft.',
    SUMMARY_TEXT: 'Paris SAR 48h',
    STATUS: AIS.aisEventStatus.OK,
    ERROR_CODE: '',
    ERROR_MESSAGE: '',
    INPUT_TOKENS: 4120,
    OUTPUT_TOKENS: 385,
    TOTAL_TOKENS: 4505,
    COST_USD: 0.0425,
    LATENCY_MS: 3420,
    TOOL_CALL_COUNT: 2,
    COLLECTOR_NODE_ID: '16Uiu2HAm1LbvwjEHW2GDP2ZQZvwHLZrz2jbYoRLQmJEQ3wZ5Fm45',
    MESSAGES: [
      T(AIS.AISMessageT, {
        ROLE: AIS.aisMessageRole.USER,
        CONTENT: 'Show all commercial SAR coverage of Paris over the next 48 hours',
        TIMESTAMP_UTC: '2026-11-27T12:19:56.600Z',
        TOOL_CALL_ID: '',
        TOOL_NAME: '',
      }),
      T(AIS.AISMessageT, {
        ROLE: AIS.aisMessageRole.ASSISTANT,
        CONTENT: 'Commercial SAR coverage computed across 102 operational spacecraft.',
        TIMESTAMP_UTC: '2026-11-27T12:20:00.050Z',
        TOOL_CALL_ID: '',
        TOOL_NAME: '',
      }),
    ],
    TOOL_CALLS: [
      T(AIS.AISToolCallT, {
        CALL_ID: 'call-1',
        TOOL_NAME: 'start_request',
        ARGUMENTS_TEXT: '{"prompt":"Show all commercial SAR coverage of Paris over the next 48 hours"}',
        RESULT_TEXT: '{"ok":true}',
        IS_ERROR: false,
        DURATION_MS: 12,
      }),
      T(AIS.AISToolCallT, {
        CALL_ID: 'call-2',
        TOOL_NAME: 'answer',
        ARGUMENTS_TEXT: '{"say":"Commercial SAR coverage computed across 102 operational spacecraft."}',
        RESULT_TEXT: '{"ok":true}',
        IS_ERROR: false,
        DURATION_MS: 18,
      }),
    ],
    EDGE_HEADERS: [
      T(AIS.AISHeaderT, { NAME: 'cf-connecting-ip', VALUE: '203.0.113.42' }),
      T(AIS.AISHeaderT, { NAME: 'cf-ipcountry', VALUE: 'US' }),
    ],
  });

  const encode = (o) => {
    const b = new fb.Builder(4096);
    AIS.AIS.finishAISBuffer(b, o.pack(b));
    return Buffer.from(b.asUint8Array());
  };
  const decode = (f) => AIS.AIS.getRootAsAIS(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();

  const visited = new Set();
  const populated = populate(model, AIS, 'AIS', visited);
  assert.deepEqual([...visited].sort(), closure(model, 'AIS').sort(), 'AIS: every reachable table populated');

  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'FlatBuffers C++ headers present');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsais\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');

  const dir = path.join(tmp, 'wire-AIS');
  fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
  const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
  const messages = [['populated', populated], ['stated', stated]];
  for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), encode(o));
  const jsBytes = fs.readFileSync(file('stated', 'js'));
  assert.ok(AIS.AIS.bufferHasIdentifier(new fb.ByteBuffer(jsBytes)), '$AIS file identifier present');

  const copyTables = closure(model, 'AIS');
  fs.writeFileSync(
    path.join(dir, 'copy.cpp'),
    '#include <cmath>\n#include <ctime>\n#undef DOMAIN\n#undef TIME_UTC\n#undef BYTE_ORDER\n'
      + cppCopySource({ model, root: 'AIS', include: 'AIS/main_generated.h', populated: copyTables }),
  );
  run('tar', ['-xzf', path.join(root, 'dist/AIS/AIS.cpp.tar.gz'), '-C', path.join(dir, 'cpp')]);
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);

  const goDir = path.join(tmp, 'goAIS');
  run('cp', ['-R', path.join(root, 'lib/go/AIS'), goDir]);
  run('chmod', ['-R', 'u+w', goDir]);
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model, root: 'AIS', pkg: 'AIS', populated: copyTables }));
  fs.mkdirSync(path.join(tmp, 'runAIS'));
  fs.writeFileSync(
    path.join(tmp, 'runAIS/main.go'),
    'package main\nimport (\n "os"\n p "sdsais/goAIS"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n',
  );
  run('go', ['run', '-mod=mod', './runAIS', ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);

  for (const [name, o] of messages) {
    const bytes = fs.readFileSync(file(name, 'js'));
    const dJs = diffPath(decode(file(name, 'js')), o);
    assert.ok(dJs === null, `AIS ${name}: JS round-trip mismatch: ${dJs}`);
    for (const leg of ['cpp', 'go']) {
      const dLeg = diffPath(decode(file(name, leg)), o);
      assert.ok(dLeg === null, `AIS ${name}: ${leg} round-trip mismatch: ${dLeg}`);
      assert.equal(Buffer.compare(encode(decode(file(name, leg))), bytes), 0, `AIS ${name}: ${leg} re-encodes byte-identical to JS`);
    }
  }

  // ---- c. Flatc JSON <-> binary round-trip verifying UPPER_SNAKE_CASE keys.
  const flatc = await FlatcRunner.init();
  const schemaInput = {
    entry: '/schema/AIS/main.fbs',
    files: { '/schema/AIS/main.fbs': rawIdl },
  };
  const sizedBytes = new Uint8Array(4 + jsBytes.length);
  new DataView(sizedBytes.buffer).setUint32(0, jsBytes.length, true);
  sizedBytes.set(jsBytes, 4);
  const jsonText = flatc.generateJSON(schemaInput, { path: '/AIS.bin', data: sizedBytes }, { strictJson: true });
  const parsedJson = JSON.parse(jsonText);
  for (const key of Object.keys(parsedJson)) {
    assert.equal(key, key.toUpperCase(), `AIS JSON key ${key} must be UPPER_SNAKE_CASE`);
  }
  const backSized = flatc.generateBinary(schemaInput, jsonText);
  const backBare = backSized.subarray(4);
  assert.ok(AIS.AIS.bufferHasIdentifier(new fb.ByteBuffer(backBare)), 'AIS binary from JSON has $AIS identifier');
  const dJson = diffPath(AIS.AIS.getRootAsAIS(new fb.ByteBuffer(backBare)).unpack(), stated);
  assert.ok(dJson === null, `AIS JSON <-> binary round-trip mismatch: ${dJson}`);

  // ---- d. $REC wide-record dispatch (EXTENDED_TYPE = 306).
  const recBuilder = new fb.Builder(8192);
  const recObj = T(REC.RECT, {
    version: 'ais-e2e',
    RECORDS: [
      T(REC.RecordT, {
        value_type: REC.RecordType.NONE,
        standard: 'AIS',
        EXTENDED_TYPE: REC.RecordTypeExtended.AIS,
        EXTENDED_VALUE: [...jsBytes],
      }),
    ],
  });
  REC.REC.finishRECBuffer(recBuilder, recObj.pack(recBuilder));
  const recBytes = recBuilder.asUint8Array();
  assert.ok(REC.REC.bufferHasIdentifier(new fb.ByteBuffer(recBytes)), '$REC identifier present');
  const recBack = REC.REC.getRootAsREC(new fb.ByteBuffer(recBytes)).unpack();
  assert.equal(recBack.RECORDS.length, 1);
  assert.equal(recBack.RECORDS[0].value_type, REC.RecordType.NONE);
  assert.equal(recBack.RECORDS[0].standard, 'AIS');
  assert.equal(recBack.RECORDS[0].EXTENDED_TYPE, 306);
  const innerBB = new fb.ByteBuffer(new Uint8Array(recBack.RECORDS[0].EXTENDED_VALUE));
  assert.ok(AIS.AIS.bufferHasIdentifier(innerBB));
  const dRec = diffPath(AIS.AIS.getRootAsAIS(innerBB).unpack(), stated);
  assert.ok(dRec === null, `$REC wide dispatch mismatch: ${dRec}`);

  console.log('PASS: $AIS (wide ordinal 306) IDL/FlatSQL leading-run, JS<->C++<->Go wire parity, Flatc JSON<->binary, and $REC wide dispatch verified.');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
