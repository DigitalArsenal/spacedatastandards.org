// Field-encryption format 3: the TS/JS FlatbuffersEncryption helper that
// scripts/createTSIndex.js writes into lib/{ts,js}/{KMF,REC}.
//
// test/fixtures/encryption_v3 holds the schemas and buffers of flatbuffers
// tests/encryption_v3 at 6894800e (flatc-wasm 26.1.36): node.bin and bag.bin
// are that directory's node.json and bag.json built by flatc (the JSON files
// are JSON5, so they stay there); node_r0.bin, node_r1.bin and bag_r0.bin are those
// buffers encrypted by the C++ walker (EncryptBuffer, version 3) with the key
// 00 01 .. 1f and record indexes 0 and 1. Every language's generated helper
// must reproduce them byte for byte.

import { strict as assert } from 'node:assert';
import crypto from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatcRunner } from 'flatc-wasm';

import * as KMFHelper from '../lib/js/KMF/flatbuffers-encryption.js';
import * as RECHelper from '../lib/js/REC/flatbuffers-encryption.js';
import { loadSchemaInput } from '../scripts/schemaGraph.mjs';

const { FlatbuffersEncryption } = RECHelper;

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixtures = path.join(repoRoot, 'test', 'fixtures', 'encryption_v3');
const fixture = (name) => new Uint8Array(readFileSync(path.join(fixtures, name)));
const fixtureText = (name) => readFileSync(path.join(fixtures, name), 'utf8');
const key = Uint8Array.from({ length: 32 }, (_, i) => i);
const hex = (bytes) => Buffer.from(bytes).toString('hex');

// The walk program flatc writes into a table's generated Python module.
function pythonProgram(files, table) {
  const name = Object.keys(files).find((file) => path.basename(file) === `${table}.py`);
  assert.ok(name, `flatc emitted no ${table}.py`);
  const match = files[name].match(/_FLATBUFFERS_ENCRYPTION_PROGRAM = \(([\d,\s]+)\)/);
  assert.ok(match, `flatc emitted no walk program for ${table}`);
  return match[1].split(',').map((value) => value.trim()).filter(Boolean).map(Number);
}

// Session key of generateBinaryEncrypted: HKDF-SHA256(X25519(recipient,
// sender), no salt, context), computed with node:crypto, independently of
// flatc-wasm and of the helper under test.
function x25519Pair() {
  const { privateKey } = crypto.generateKeyPairSync('x25519');
  const jwk = privateKey.export({ format: 'jwk' });
  return {
    keyObject: privateKey,
    publicKey: new Uint8Array(Buffer.from(jwk.x, 'base64url')),
    privateKey: new Uint8Array(Buffer.from(jwk.d, 'base64url')),
  };
}
function sessionKey(privateKeyObject, publicKey, context) {
  const shared = crypto.diffieHellman({
    privateKey: privateKeyObject,
    publicKey: crypto.createPublicKey({
      key: { kty: 'OKP', crv: 'X25519', x: Buffer.from(publicKey).toString('base64url') },
      format: 'jwk',
    }),
  });
  return new Uint8Array(crypto.hkdfSync('sha256', shared, new Uint8Array(0), Buffer.from(context), 32));
}

describe('FlatBuffers field-encryption format 3 (TS/JS helper)', function () {
  this.timeout(120000);

  let runner;
  const fixtureSchema = {
    entry: '/encryption_v3/bag.fbs',
    files: {
      '/encryption_v3/node.fbs': fixtureText('node.fbs'),
      '/encryption_v3/bag.fbs': fixtureText('bag.fbs'),
    },
  };
  let nodeProgram;
  let bagProgram;

  before(async () => {
    runner = await FlatcRunner.init();
    const files = runner.generateCode(fixtureSchema, 'python', { genAll: true });
    nodeProgram = pythonProgram(files, 'Node');
    bagProgram = pythonProgram(files, 'Bag');
  });

  it('derives the buffer key HKDF-SHA256(key, no salt, "flatbuffers-buffer-v3" || BE32(record))', async () => {
    // The vectors flatbuffers tests/encryption_test.cpp and flatc-wasm check.
    assert.equal(hex(await FlatbuffersEncryption.bufferKey(key, 0)),
      'c4c46faf2e2a1f24f04b70f54031ca2ce4bdcc70a57898619ae60981c968c32e');
    assert.equal(hex(await FlatbuffersEncryption.bufferKey(key, 7)),
      '96dc099cb3f069b6bb6f67567a4bbe5f5c0e83d8257c714278e3da3f8086ba13');
  });

  it('reproduces the C++ walker ciphertext of the flatbuffers fixtures, and decrypts it', async () => {
    const plain = fixture('node.bin');
    for (const [record, name] of [[0, 'node_r0.bin'], [1, 'node_r1.bin']]) {
      const buffer = new Uint8Array(plain);
      await FlatbuffersEncryption.cryptBuffer(buffer, key, record, nodeProgram);
      assert.equal(hex(buffer), hex(fixture(name)), `record ${record}: ${name}`);
      await FlatbuffersEncryption.cryptBuffer(buffer, key, record, nodeProgram);
      assert.equal(hex(buffer), hex(plain), `record ${record}: decrypting restores node.bin`);
    }
    // A vector of unions.
    const bag = fixture('bag.bin');
    await FlatbuffersEncryption.cryptBuffer(bag, key, 0, bagProgram);
    assert.equal(hex(bag), hex(fixture('bag_r0.bin')));
    await FlatbuffersEncryption.cryptBuffer(bag, key, 0, bagProgram);
    assert.equal(hex(bag), hex(fixture('bag.bin')));
  });

  it('refuses a bad key, record index or buffer before changing a byte', async () => {
    const plain = fixture('node.bin');
    const buffer = new Uint8Array(plain);
    await assert.rejects(FlatbuffersEncryption.cryptBuffer(buffer, key.subarray(0, 31), 0, nodeProgram), /32 bytes/);
    await assert.rejects(FlatbuffersEncryption.cryptBuffer(buffer, key, 2 ** 32, nodeProgram), /32 bits/);
    // A string length that runs past the end: found by the dry run.
    const view = new DataView(buffer.buffer);
    const root = view.getUint32(0, true);
    const vtable = root - view.getInt32(root, true);
    const secretField = root + view.getUint16(vtable + 6, true);
    const secret = secretField + view.getUint32(secretField, true);
    view.setUint32(secret, buffer.length, true);
    const malformed = new Uint8Array(buffer);
    await assert.rejects(FlatbuffersEncryption.cryptBuffer(buffer, key, 0, nodeProgram), /malformed/);
    assert.equal(hex(buffer), hex(malformed));
  });

  it('carries the walk programs flatc 26.1.36 emits for KMF', async () => {
    const files = runner.generateCode(await loadSchemaInput('KMF'), 'python', { preserveCase: true });
    assert.deepEqual([...KMFHelper.FLATBUFFERS_ENCRYPTION_PROGRAMS.KMF], pythonProgram(files, 'KMF'));
    assert.deepEqual(Object.keys(KMFHelper.FLATBUFFERS_ENCRYPTION_PROGRAMS), ['KMF']);
    assert.deepEqual(Object.keys(RECHelper.FLATBUFFERS_ENCRYPTION_PROGRAMS).sort(), ['KMF', 'REC', 'Record']);
    assert.deepEqual(RECHelper.FLATBUFFERS_ENCRYPTION_PROGRAMS.KMF, KMFHelper.FLATBUFFERS_ENCRYPTION_PROGRAMS.KMF);
  });

  for (const [what, schemaName, json, encrypt, decrypt] of [
    ['KMF', 'KMF',
      { KEY_ID: 'publication-key', ROLE: 'DecryptKey', ALGORITHM: 'Aes256Gcm', ENCODING: 'RawBytes',
        KEY_BYTES: Array.from({ length: 32 }, (_, i) => 255 - i), VERSION: 3, EXPIRES_AT: 1790000000000 },
      KMFHelper.encryptKMFBuffer, KMFHelper.decryptKMFBuffer],
    ['REC holding two KMF records', 'REC',
      { version: '1', RECORDS: [
        { value_type: 'KMF', standard: 'KMF',
          value: { KEY_ID: 'a', ENCODING: 'RawBytes', KEY_BYTES: Array.from({ length: 32 }, () => 7) } },
        { value_type: 'KMF', standard: 'KMF',
          value: { KEY_ID: 'b', ENCODING: 'RawBytes', KEY_BYTES: Array.from({ length: 32 }, () => 7) } },
      ] },
      RECHelper.encryptRECBuffer, RECHelper.decryptRECBuffer],
  ]) {
    it(`matches the C++ walker (flatc-wasm generateBinaryEncrypted) on ${what}, both ways`, async () => {
      const schema = await loadSchemaInput(schemaName);
      const text = JSON.stringify(json);
      const plain = runner.generateBinary(schema, text, { sizePrefix: false });
      const recipient = x25519Pair();

      // C++ encrypts, the helper decrypts and re-encrypts.
      const { header, data } = runner.generateBinaryEncrypted(schema, text, {
        publicKey: recipient.publicKey, algorithm: 'x25519', context: 'sds-kmf' });
      const parsed = JSON.parse(new TextDecoder().decode(header));
      assert.equal(parsed.version, 3);
      assert.notEqual(hex(data), hex(plain), 'the C++ walker encrypted something');
      const session = sessionKey(recipient.keyObject, Buffer.from(parsed.senderPublicKey, 'hex'), 'sds-kmf');
      const decrypted = await decrypt(new Uint8Array(data), session, 0);
      assert.equal(hex(decrypted), hex(plain));
      assert.equal(hex(await encrypt(new Uint8Array(plain), session, 0)), hex(data));

      // The helper encrypts, C++ decrypts.
      const sender = x25519Pair();
      const jsData = await encrypt(new Uint8Array(plain), sessionKey(sender.keyObject, recipient.publicKey, 'sds-kmf'), 0);
      const jsHeader = JSON.stringify({ version: 3, algorithm: 'x25519', senderPublicKey: hex(sender.publicKey),
        recipientKeyId: '', nonceStart: '00'.repeat(12), context: 'sds-kmf' });
      const json2 = runner.generateJSONDecrypted(schema, { path: `/sds-${schemaName}.bin`, data: jsData },
        { privateKey: recipient.privateKey, header: jsHeader });
      const plainJson = runner.generateJSON(schema, { path: `/sds-${schemaName}-plain.bin`, data: plain });
      assert.equal(json2, plainJson);
    });
  }

  it('gives equal KEY_BYTES in two records of one REC different ciphertext', async () => {
    const schema = await loadSchemaInput('REC');
    const kmf = (id) => ({ value_type: 'KMF', standard: 'KMF',
      value: { KEY_ID: id, KEY_BYTES: Array.from({ length: 32 }, () => 7) } });
    const plain = runner.generateBinary(schema, JSON.stringify({ RECORDS: [kmf('a'), kmf('b')] }), { sizePrefix: false });
    const needle = Buffer.alloc(32, 7);
    const first = Buffer.from(plain).indexOf(needle);
    const second = Buffer.from(plain).indexOf(needle, first + 32);
    assert.ok(first > 0 && second > first, 'both KEY_BYTES are in the plaintext');
    const cipher = await RECHelper.encryptRECBuffer(new Uint8Array(plain), key, 0);
    const a = hex(cipher.subarray(first, first + 32));
    const b = hex(cipher.subarray(second, second + 32));
    assert.notEqual(a, hex(needle));
    assert.notEqual(b, hex(needle));
    assert.notEqual(a, b);
  });
});
