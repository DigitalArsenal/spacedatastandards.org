// $QRP RESUME_CURSOR end to end through lib/js: the last page of a complete
// scan carries an opaque resume cursor, and a Request sends it back. The field
// is appended (the last vtable slot, after BODY_REF_SIZE), so a frame written
// before it existed reads RESUME_CURSOR as null and every earlier field keeps
// its ordinal.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as flatbuffers from 'flatbuffers';
import { QRP, QRPT, qrpKind, qrpStatus } from '../lib/js/QRP/main.js';

const root = fileURLToPath(new URL('../', import.meta.url));

// Field order from the IDL itself: RESUME_CURSOR must be the last field.
const idl = readFileSync(`${root}schema/QRP/main.fbs`, 'utf8');
const body = idl.slice(idl.indexOf('table QRP {'));
const fields = [...body.slice(0, body.indexOf('\n}')).matchAll(/^\s+([A-Z][A-Z0-9_]*)\s*:/gm)].map((m) => m[1]);
assert.equal(fields.at(-1), 'RESUME_CURSOR', 'RESUME_CURSOR is appended');
assert.equal(fields.at(-2), 'BODY_REF_SIZE', 'BODY_REF_SIZE keeps its ordinal');
const slot = 4 + 2 * (fields.length - 1);

const finish = (build) => {
  const b = new flatbuffers.Builder(256);
  QRP.finishSizePrefixedQRPBuffer(b, build(b));
  return b.asUint8Array();
};
const read = (frame) => {
  const bb = new flatbuffers.ByteBuffer(frame);
  bb.setPosition(4);
  assert.ok(QRP.bufferHasIdentifier(bb), '$QRP file identifier');
  return QRP.getSizePrefixedRootAsQRP(new flatbuffers.ByteBuffer(frame));
};

const token = '01a7f3c2e9d84b10';

// 1. The last page of a complete scan: NEXT_CURSOR empty, RESUME_CURSOR set.
const page = read(finish((b) => {
  const schema = b.createString('WXF.fbs');
  const resume = b.createString(token);
  QRP.startQRP(b);
  QRP.addKind(b, qrpKind.Page);
  QRP.addStatus(b, qrpStatus.Ok);
  QRP.addSchemaName(b, schema);
  QRP.addRecordCount(b, 0);
  QRP.addBodyRefSize(b, 7n);
  QRP.addResumeCursor(b, resume);
  return QRP.endQRP(b);
}));
assert.equal(page.KIND(), qrpKind.Page);
assert.equal(page.NEXT_CURSOR(), null);
assert.equal(page.RESUME_CURSOR(), token);
assert.equal(page.BODY_REF_SIZE(), 7n);
assert.notEqual(page.bb.__offset(page.bb_pos, slot), 0, `RESUME_CURSOR is vtable slot ${slot}`);
console.log(`PASS page: RESUME_CURSOR ${page.RESUME_CURSOR()} in vtable slot ${slot}, NEXT_CURSOR empty`);

// 2. A Request carries it back (object API round trip).
const request = new QRPT();
request.KIND = qrpKind.Request;
request.SCHEMA_NAME = 'WXF.fbs';
request.LIMIT = 50000;
request.RESUME_CURSOR = token;
const sent = read(finish((b) => request.pack(b))).unpack();
assert.equal(sent.KIND, qrpKind.Request);
assert.equal(sent.RESUME_CURSOR, token);
assert.equal(sent.CURSOR, null);
assert.equal(sent.LIMIT, 50000);
console.log('PASS request: RESUME_CURSOR round-trips through the object API');

// 3. A frame without the field (a writer that never sets it) reads null.
const plain = read(finish((b) => {
  QRP.startQRP(b);
  QRP.addKind(b, qrpKind.Page);
  return QRP.endQRP(b);
}));
assert.equal(plain.RESUME_CURSOR(), null);
console.log('PASS absent: RESUME_CURSOR reads null when not written');
console.log('QRP-RESUME-CURSOR-E2E PASS');
