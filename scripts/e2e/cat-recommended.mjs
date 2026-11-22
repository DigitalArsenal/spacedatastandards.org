#!/usr/bin/env node
// $CAT recommendations end to end: the frozen 1.292.0 fields, the exact additive IDL,
// published JS -> C++ -> Go -> JS with size prefixes and $CAT identifiers, and a real
// 1.292.0 buffer that has no RECOMMENDED slot. Run: node scripts/e2e/cat-recommended.mjs
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import * as fb from 'flatbuffers';
import * as M from '../../lib/js/CAT/main.js';
import { closure, cppCopySource, goCopySource, parseIdl } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-cat-recommended-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}${f.required ? '!' : ''}`;
const T = (cls, values) => Object.assign(new cls(), values);
// SDS 1.292.0, commit 8660fa8cf: all 28 CAT fields, in order, including types and defaults.
const CAT_1292 = [28, '3827bd7c41efdb0b16fcf15ab09c9f407a72d337613bbf8cce982853a47ca819'];
// Written by lib/js/CAT/main.js at that commit, before regeneration. PRODUCTS_AS_OF
// occupies the last old slot; there is no new writer involved in this fixture.
const LEGACY = 'pAAAAEQAAAAkQ0FUPAAcABgAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAIAAQAPAAAABgAAAAwAAAAMAAAAJFfAQAsAAAAOAAAABQAAAAyMDI2LTExLTIxVDAwOjAwOjAwWgAAAAAAAAAAAAAAAAkAAAAyMDI2LTAwMUEAAAAIAAAARTJFLTEyOTIAAAAA';
const RECOMMENDATION_FIELDS = ['KIND:catalogProductKind=Unspecified', 'LEAD_START_HOURS:double=',
  'LEAD_END_HOURS:double=', 'RULE:string=', 'MEASURED:bool=false'];

function read(bytes) {
  assert.equal(bytes.readUInt32LE(0), bytes.length - 4, 'size prefix');
  assert.equal(bytes.subarray(8, 12).toString(), '$CAT', 'file identifier');
  return M.CAT.getSizePrefixedRootAsCAT(new fb.ByteBuffer(bytes));
}
function encode(value) {
  const b = new fb.Builder(4096);
  M.CAT.finishSizePrefixedCATBuffer(b, value.pack(b));
  return Buffer.from(b.asUint8Array());
}

try {
  const model = parseIdl(path.join(root, 'schema'), 'CAT');
  const fields = model.tables.get('CAT').fields;
  assert.equal(model.root, 'CAT');
  assert.equal(sha(fields.slice(0, CAT_1292[0]).map(fieldSig).join(';')), CAT_1292[1], 'all 1.292.0 CAT fields unchanged');
  assert.deepEqual(fields.slice(CAT_1292[0]).map(fieldSig), ['RECOMMENDED:[CATRecommendation]='], 'RECOMMENDED is the only append and is last');
  assert.deepEqual(model.tables.get('CATRecommendation').fields.map(fieldSig), RECOMMENDATION_FIELDS, 'exactly five recommendation fields, types and defaults, in order');
  const idl = fs.readFileSync(path.join(root, 'schema/CAT/main.fbs'), 'utf8');
  assert.ok(!/=\s*[-+]?nan\b/i.test(idl), 'no NaN default');
  assert.deepEqual([...idl.matchAll(/\btable\s+(\w+)\s*\{/g)].map((m) => m[1]), ['CATProduct', 'CATRecommendation', 'CAT'], 'recommendation follows CATProduct');
  assert.match(idl, /file_identifier "\$CAT";/);
  // The parser skips deprecated fields, so also count the declarations to catch a hidden extra slot.
  for (const [name, count] of [['CAT', 29], ['CATRecommendation', 5]]) {
    const body = idl.match(new RegExp(`\\btable ${name} \\{([^}]+)\\}`))[1].replace(/\/\/[^\n]*/g, '');
    assert.equal(body.split(';').filter((s) => s.trim()).length, count, `${name}: exact slot count`);
  }
  console.log('PASS: IDL: all 28 CAT fields of 1.292.0 unchanged; RECOMMENDED last; CATRecommendation has the five stated fields and defaults; no NaN default');

  const epoch = '2026-11-21T00:00:00Z';
  const products = [M.catalogProductKind.ApElements, M.catalogProductKind.Sgp4Elements, M.catalogProductKind.StateCovariance]
    .map((KIND, i) => T(M.CATProductT, { KIND,
      RECORD_CID: ['bafkreigh2akiscaildc3h3wzuw2a67p5ud6dbvztpyq74z4nbgquhxn3ca',
        'bafkreiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'bafkreibaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'][i],
      SOURCE_ID: `e2e-source-${i}`, EPOCH: epoch, SELECTION_REASON: `e2e selection ${i}`, STALE: i === 2 }));
  const recommendations = [
    T(M.CATRecommendationT, { KIND: M.catalogProductKind.ApElements, LEAD_START_HOURS: 0, LEAD_END_HOURS: 72, RULE: 'catalog-serve/2 public/meo', MEASURED: true }),
    T(M.CATRecommendationT, { KIND: M.catalogProductKind.Sgp4Elements, LEAD_START_HOURS: 72, LEAD_END_HOURS: 120, RULE: 'catalog-serve/2 public/meo', MEASURED: true }),
    T(M.CATRecommendationT, { KIND: M.catalogProductKind.StateCovariance, LEAD_START_HOURS: 120, LEAD_END_HOURS: 168, RULE: 'catalog-serve/2 public/meo default', MEASURED: false }),
  ];
  const catalog = T(M.CATT, { OBJECT_NAME: 'E2E recommended', OBJECT_ID: '2026-001A', NORAD_CAT_ID: 90001,
    PRODUCTS_AS_OF: epoch, PRODUCTS: products, RECOMMENDED: recommendations });
  const checkCatalog = (raw, label) => {
    for (const field of ['OBJECT_NAME', 'OBJECT_ID', 'NORAD_CAT_ID', 'PRODUCTS_AS_OF']) assert.equal(raw[field](), catalog[field], `${label}: ${field}`);
    assert.equal(raw.productsLength(), 3, `${label}: three products`);
    assert.equal(raw.recommendedLength(), 3, `${label}: three recommendations`);
    for (let i = 0; i < 3; i++) {
      const p = raw.PRODUCTS(i), r = raw.RECOMMENDED(i);
      for (const field of ['KIND', 'RECORD_CID', 'SOURCE_ID', 'EPOCH', 'SELECTION_REASON', 'STALE']) assert.equal(p[field](), products[i][field], `${label}: PRODUCTS[${i}].${field}`);
      for (const field of ['KIND', 'LEAD_START_HOURS', 'LEAD_END_HOURS', 'RULE', 'MEASURED']) assert.equal(r[field](), recommendations[i][field], `${label}: RECOMMENDED[${i}].${field}`);
      assert.ok(products.some((p) => p.KIND === r.KIND()), `${label}: recommended kind names a product`);
      assert.ok(r.LEAD_START_HOURS() < r.LEAD_END_HOURS(), `${label}: nonempty span`);
      if (i) assert.ok(raw.RECOMMENDED(i - 1).LEAD_END_HOURS() <= r.LEAD_START_HOURS(), `${label}: ordered, nonoverlapping spans`);
    }
  };
  const bytes = encode(catalog);
  checkCatalog(read(bytes), 'JS');
  console.log(`PASS: published JS: size-prefixed $CAT (${bytes.length} B), three products and three recommendations read field by field; ApElements 0-72 h, Sgp4Elements 72-120 h, StateCovariance 120-168 h with MEASURED false`);

  const oldBytes = Buffer.from(LEGACY, 'base64');
  const old = read(oldBytes);
  assert.deepEqual([old.OBJECT_NAME(), old.OBJECT_ID(), old.NORAD_CAT_ID(), old.PRODUCTS_AS_OF()], ['E2E-1292', '2026-001A', 90001, epoch]);
  assert.equal(old.bb.readInt16(old.bb_pos - old.bb.readInt32(old.bb_pos)), 4 + 2 * CAT_1292[0], 'old vtable stops at PRODUCTS_AS_OF');
  assert.equal(old.recommendedLength(), 0, 'old CAT has no recommendations');
  assert.deepEqual(old.unpack().RECOMMENDED, [], 'old CAT unpacks to an empty list');
  console.log(`PASS: real 1.292.0 $CAT (${oldBytes.length} B): old fields intact, RECOMMENDED absent/empty`);

  // The same copy helpers as scv-altitude-ceiling.mjs, using each binding's
  // size-prefixed verifier, reader and writer for this catalog transport.
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'pinned C++ runtime headers available');
  fs.mkdirSync(path.join(tmp, 'cpp'));
  run('tar', ['-xzf', path.join(root, 'dist/CAT/CAT.cpp.tar.gz'), '-C', path.join(tmp, 'cpp')]);
  const populated = closure(model, 'CAT');
  const replace = (source, before, after) => { assert.ok(source.includes(before), `copy helper contains ${before}`); return source.replace(before, after); };
  let cpp = cppCopySource({ model, root: 'CAT', include: 'CAT/main_generated.h', populated });
  for (const [before, after] of [['VerifyCATBuffer(v)', 'VerifySizePrefixedCATBuffer(v)'],
    ['CATBufferHasIdentifier(bytes.data())', 'SizePrefixedCATBufferHasIdentifier(bytes.data())'],
    ['FinishCATBuffer(', 'FinishSizePrefixedCATBuffer('], ['GetCAT(bytes.data())', 'GetSizePrefixedCAT(bytes.data())']]) cpp = replace(cpp, before, after);
  fs.writeFileSync(path.join(tmp, 'copy.cpp'), cpp);
  run(process.env.CXX || 'c++', ['-std=c++17', '-O0', '-I', include, '-I', path.join(tmp, 'cpp'), 'copy.cpp', '-o', 'copy']);

  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdscatrecommended\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  fs.cpSync(path.join(root, 'lib/go/CAT'), path.join(tmp, 'CAT'), { recursive: true });
  let go = goCopySource({ model, root: 'CAT', pkg: 'CAT', populated });
  for (const [before, after] of [['CATBufferHasIdentifier(data)', 'SizePrefixedCATBufferHasIdentifier(data)'],
    ['FinishCATBuffer(', 'FinishSizePrefixedCATBuffer('], ['GetRootAsCAT(data, 0)', 'GetSizePrefixedRootAsCAT(data, 0)']]) go = replace(go, before, after);
  fs.writeFileSync(path.join(tmp, 'CAT/wire_e2e.go'), go);
  fs.mkdirSync(path.join(tmp, 'runner'));
  fs.writeFileSync(path.join(tmp, 'runner/main.go'), 'package main\nimport ("os"; p "sdscatrecommended/CAT")\nfunc main() { p.WireE2E(os.Args[1:]) }\n');

  const defaults = T(M.CATT, { RECOMMENDED: [new M.CATRecommendationT()] });
  const messages = [['recommended', catalog], ['defaults', defaults]];
  const file = (name, leg) => path.join(tmp, `${name}.${leg}.cat`);
  for (const [name, value] of messages) fs.writeFileSync(file(name, 'js'), encode(value));
  run(path.join(tmp, 'copy'), messages.flatMap(([name]) => [file(name, 'js'), file(name, 'cpp')]));
  run('go', ['run', '-mod=mod', './runner', ...messages.flatMap(([name]) => [file(name, 'cpp'), file(name, 'go')])]);
  for (const [name, expected] of messages) {
    const original = fs.readFileSync(file(name, 'js'));
    assert.deepEqual(read(original).unpack(), expected, `${name}: JS preserves every field`);
    for (const leg of ['cpp', 'go']) {
      const raw = read(fs.readFileSync(file(name, leg)));
      assert.deepEqual(raw.unpack(), expected, `${name}: ${leg} preserves every field`);
      // As in scv-altitude-ceiling.mjs, use the JS builder's byte order for the
      // comparison: valid FlatBuffers builders may lay out the same fields differently.
      assert.deepEqual(encode(raw.unpack()), original, `${name}: ${leg} re-encodes byte for byte to JS`);
      if (name === 'recommended') checkCatalog(raw, leg);
      else {
        const r = raw.RECOMMENDED(0);
        assert.deepEqual([r.KIND(), r.LEAD_START_HOURS(), r.LEAD_END_HOURS(), r.RULE(), r.MEASURED()], [M.catalogProductKind.Unspecified, 0, 0, null, false], `${leg}: all recommendation defaults`);
      }
    }
  }
  console.log('PASS: JS -> C++ -> Go -> JS: every field preserved and JS bytes equal after each native leg, including size prefix, $CAT identifier and all recommendation defaults');

  const defs = JSON.parse(fs.readFileSync(path.join(root, 'lib/fbjson/CAT/main.fb.schema.json'), 'utf8')).definitions;
  assert.deepEqual(Object.keys(defs.CAT.properties).slice(CAT_1292[0]), ['RECOMMENDED']);
  assert.deepEqual(Object.keys(defs.CATRecommendation.properties), ['KIND', 'LEAD_START_HOURS', 'LEAD_END_HOURS', 'RULE', 'MEASURED']);
  console.log('PASS: generated CAT field catalog lists RECOMMENDED last and all five CATRecommendation fields');
} catch (error) {
  console.error(error.stderr?.toString() || error.stack || error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
