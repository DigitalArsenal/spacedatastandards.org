/**
 * FlatSQL 3.12.6 has no HMAC entry point; this storage check does not authenticate ciphertext.
 * docs/API-3.12.md requires retrying the entire full-text query on BUSY; this check bounds that wait to 60 seconds.
 */
import assert from 'node:assert/strict';
import { readFile, mkdtemp, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomBytes, hkdfSync, createCipheriv } from 'node:crypto';
import * as flatbuffers from 'flatbuffers';
import * as cryptoAPI from 'flatc-wasm';
import { FlatSQL, FlatSQLError } from 'flatsql';
import { setTimeout as delay } from 'node:timers/promises';
import { binarySchema, frame, frames, request, query, result } from './scripts/flatsql-binary.mjs';
import { KMF, KMFT, encryptKMFBuffer, decryptKMFBuffer } from './lib/js/KMF/main.js';

const failures = [];
async function step(name, check) {
  try {
    await check();
    console.log(`PASS ${name}`);
  } catch (error) {
    failures.push(name);
    // Assertion values can contain test key material; only print the step.
    console.error(`FAIL ${name}: ${error.code ?? error.name}${error.status === undefined ? '' : ' status=' + error.status}${error.name === 'AssertionError' ? '' : ': ' + error.message}`);
  }
}
function required(name) {
  assert.equal(typeof cryptoAPI[name], 'function', `flatc-wasm export ${name}`);
  return cryptoAPI[name];
}

async function fullTextQuery(db, sql, parameters) {
  const started = performance.now();
  const deadline = started + 60000;
  const signal = AbortSignal.timeout(60000);
  const bytes = request(sql, parameters);
  let busy = 0;
  let lastBusy;
  try {
    for (;;) {
      const remaining = deadline - performance.now();
      if (remaining <= 0) throw new Error('Full-text query exceeded the 60000 ms BUSY bound', { cause: lastBusy });
      try {
        // execute discards collected pages on failure; result requires a complete terminal summary.
        const answer = result(await db.execute(bytes, { signal, timeoutMs: Math.min(30000, Math.ceil(remaining)) }));
        if (performance.now() >= deadline) throw new Error('Full-text query exceeded the 60000 ms bound');
        return answer;
      } catch (error) {
        if (!(error instanceof FlatSQLError) || error.status !== -6) throw error;
        busy++;
        lastBusy = error;
      }
      await delay(Math.min(100, Math.max(0, deadline - performance.now())));
    }
  } finally {
    console.log(`Full-text query: waited ${(performance.now() - started).toFixed(1)} ms; BUSY answers: ${busy}`);
  }
}

async function main() {
  for (const name of ['flatc-wasm', 'flatsql', 'hd-wallet-wasm']) {
    const metadata = JSON.parse(await readFile(new URL(`./node_modules/${name}/package.json`, import.meta.url), 'utf8'));
    console.log(`${name} ${metadata.version}`);
  }
  const schema = await readFile(new URL('./schema/KMF/main.fbs', import.meta.url), 'utf8');
  const schemaInput = { entry: '/KMF.fbs', files: { '/KMF.fbs': schema } };
  const flatc = await cryptoAPI.FlatcRunner.init();
  const key = new Uint8Array(randomBytes(32));
  const wrongKey = new Uint8Array(randomBytes(32));
  const records = [];
  let database;
  const directory = await mkdtemp(join(tmpdir(), 'sds-kmf-'));
  const encryptedRoot = join(directory, 'encrypted');
  const controlRoot = join(directory, 'plaintext');
  try {
    await step('X25519 exchange and derived-key agreement (flatc-wasm)', async () => {
      await required('loadEncryptionWasm')();
      const sender = required('x25519GenerateKeyPair')();
      const receiver = required('x25519GenerateKeyPair')();
      let left, right, leftKey, rightKey;
      try {
        left = required('x25519SharedSecret')(sender.privateKey, receiver.publicKey);
        right = required('x25519SharedSecret')(receiver.privateKey, sender.publicKey);
        assert.equal(left.length, 32);
        assert.deepEqual(left, right);
        leftKey = required('x25519DeriveKey')(left, 'sds-kmf-storage-test');
        rightKey = required('x25519DeriveKey')(right, 'sds-kmf-storage-test');
        assert.equal(leftKey.length, 32);
        assert.deepEqual(leftKey, rightKey);
      } finally {
        for (const bytes of [sender.privateKey, receiver.privateKey, left, right, leftKey, rightKey]) bytes?.fill(0);
      }
    });

    await step('generated KMF encryption, valid FlatBuffers, unchanged public fields', async () => {
      for (let index = 0; index < 5; index++) {
        const object = new KMFT(`test-key-${index}`, 0, 0, 0,
          Array.from(Buffer.from(`privatekmfsecret${index}unsearchabletoken`)), index + 1, 123456789n);
        const builder = new flatbuffers.Builder(256);
        KMF.finishKMFBuffer(builder, object.pack(builder));
        const plain = new Uint8Array(builder.asUint8Array());
        const encrypted = plain.slice();
        await encryptKMFBuffer(encrypted, key, index);
        const decoded = KMF.getRootAsKMF(new flatbuffers.ByteBuffer(encrypted)).unpack();
        assert.notDeepEqual(decoded.KEY_BYTES, object.KEY_BYTES);
        assert.deepEqual({ ...decoded, KEY_BYTES: [] }, { ...object, KEY_BYTES: [] });
        // flatc parses the encrypted buffer independently of the generated reader.
        const json = JSON.parse(flatc.generateJSON(schemaInput, { path: '/KMF.bin', data: encrypted }));
        assert.equal(json.KEY_ID, object.KEY_ID);
        assert.deepEqual(json.KEY_BYTES, decoded.KEY_BYTES);
        // Only vector payload bytes change; offsets, lengths and every other byte stay intact.
        const accessor = KMF.getRootAsKMF(new flatbuffers.ByteBuffer(plain));
        const payload = accessor.keyBytesArray();
        const start = payload.byteOffset - plain.byteOffset;
        assert.deepEqual(encrypted.slice(0, start), plain.slice(0, start));
        assert.deepEqual(encrypted.slice(start + payload.length), plain.slice(start + payload.length));
        // An independent platform cipher checks the generated format's KDF and IV.
        const label = Buffer.from('flatbuffers-buffer-v3');
        const info = Buffer.alloc(label.length + 4);
        label.copy(info);
        info.writeUInt32BE(index, label.length);
        const derived = new Uint8Array(hkdfSync('sha256', key, new Uint8Array(), info, 32));
        try {
          const iv = Buffer.alloc(16);
          iv.writeUInt32BE(start);
          const cipher = createCipheriv('aes-256-ctr', derived, iv);
          const expected = Buffer.concat([cipher.update(payload), cipher.final()]);
          assert.deepEqual(encrypted.slice(start, start + payload.length), new Uint8Array(expected));
        } finally { derived.fill(0); }
        records.push({ plain, encrypted, object, index });
      }
      assert.equal(records.length, 5);
    });

    const bfbs = binarySchema(flatc, schemaInput);
    const open = root => FlatSQL.open({ root });
    const register = db => db.registerSchema({ name: 'KMF', fileIdentifier: '$KMF', bfbs, fullText: true });
    async function verifyStored(db, encrypted) {
      const listed = await query(db, 'SELECT KEY_ID, VERSION, _cid FROM KMF ORDER BY VERSION');
      assert.equal(listed.rows.length, 5, 'SQL finds every public field');
      for (const [i, record] of records.entries()) {
        const [id, version, cid] = listed.rows[i];
        assert.equal(id, record.object.KEY_ID);
        assert.equal(version, BigInt(record.object.VERSION));
        assert.equal(typeof cid, 'string');
        assert.ok(cid.length);
        const byCid = frames(await db.execute(request('SELECT _data FROM KMF WHERE _cid = ?1', [cid]), { records: true }));
        assert.equal(byCid.length, 1, 'content-address lookup returns one record');
        assert.deepEqual(byCid[0], encrypted ? record.encrypted : record.plain);
        const byKey = frames(await db.execute(request('SELECT _data FROM KMF WHERE KEY_ID = ?1', [id]), { records: true }));
        assert.deepEqual(byKey, byCid, 'public key and content address return identical bytes');
        const selected = await query(db, 'SELECT KEY_BYTES FROM KMF WHERE KEY_ID = ?1', [id]);
        const wanted = KMF.getRootAsKMF(new flatbuffers.ByteBuffer(byCid[0])).keyBytesArray();
        assert.deepEqual(selected.rows, [[wanted]], 'projection preserves the stored field');
        const secret = new Uint8Array(record.object.KEY_BYTES);
        const matches = await query(db, 'SELECT KEY_ID FROM KMF WHERE KEY_BYTES = ?1', [secret]);
        assert.deepEqual(matches.rows, encrypted ? [] : [[id]], 'plaintext equality has a positive control');
        const text = Buffer.from(secret).toString('utf8');
        const textMatches = await query(db, 'SELECT KEY_ID FROM KMF WHERE CAST(KEY_BYTES AS TEXT) LIKE ?1', [`%${text}%`]);
        assert.deepEqual(textMatches.rows, encrypted ? [] : [[id]], 'text query has a positive control');
        if (encrypted) {
          const wrong = byCid[0].slice();
          await decryptKMFBuffer(wrong, wrongKey, record.index);
          assert.notDeepEqual(wrong, record.plain);
          const decrypted = byCid[0].slice();
          await decryptKMFBuffer(decrypted, key, record.index);
          assert.deepEqual(decrypted, record.plain);
        }
      }
    }
    async function verifySearch(db) {
      // Public text is a positive control for the same full-text index.
      const publicMatches = await fullTextQuery(db, 'SELECT KEY_ID FROM KMF WHERE _search MATCH ?1 ORDER BY VERSION', ['"test-key"']);
      assert.deepEqual(publicMatches.rows, records.map(({ object }) => [object.KEY_ID]));
      for (const record of records) {
        const text = Buffer.from(record.object.KEY_BYTES).toString('utf8');
        assert.deepEqual((await fullTextQuery(db, 'SELECT KEY_ID FROM KMF WHERE _search MATCH ?1', [text])).rows, []);
      }
    }
    async function scanFiles(root, expectPlaintext) {
      let count = 0;
      const found = new Set();
      async function walk(path) {
        for (const entry of await readdir(path, { withFileTypes: true })) {
          const file = join(path, entry.name);
          if (entry.isDirectory()) await walk(file);
          else {
            assert.ok(entry.isFile(), 'store contains only directories and regular files');
            const bytes = await readFile(file);
            count++;
            for (const record of records) {
              if (bytes.includes(Buffer.from(record.object.KEY_BYTES))) found.add(record.index);
            }
          }
        }
      }
      await walk(root);
      assert.ok(count > 0, 'persistent store wrote files');
      assert.equal(found.size, expectPlaintext ? records.length : 0, 'disk scan includes every store file');
      console.log(`Scanned ${count} ${expectPlaintext ? 'control' : 'encrypted'} store files`);
    }
    for (const encrypted of [false, true]) {
      const label = encrypted ? 'encrypted' : 'plaintext control';
      const root = encrypted ? encryptedRoot : controlRoot;
      await step(`${label} FlatSQL 3.12.6 open, register and ingest`, async () => {
        assert.equal(records.length, 5);
        database = await open(root);
        await register(database);
        for (const record of records) result(await database.ingest('KMF', frame(encrypted ? record.encrypted : record.plain)));
      });
      await step(`${label} SQL, key/CID bytes and decryption`, () => verifyStored(database, encrypted));
      await step(`${label} full-text public control and secret exclusion`, () => verifySearch(database));
      await step(`${label} live store plaintext scan`, () => scanFiles(root, !encrypted));
      await step(`${label} close and reopen`, async () => {
        await database.close();
        database = undefined;
        database = await open(root);
      });
      await step(`${label} reopened SQL, key/CID bytes and decryption`, () => verifyStored(database, encrypted));
      await step(`${label} reopened full-text control and secret exclusion`, () => verifySearch(database));
      await step(`${label} reopened plaintext scan`, () => scanFiles(root, !encrypted));
      await database?.close();
      database = undefined;
      await step(`${label} closed plaintext scan`, () => scanFiles(root, !encrypted));
    }

    await step('record-index separation, reuse behavior and unauthenticated tampering', async () => {
      assert.equal(records.length, 5);
      const { plain, encrypted, index } = records[0];
      const repeated = plain.slice();
      await encryptKMFBuffer(repeated, key, index);
      assert.deepEqual(repeated, encrypted);
      const separate = plain.slice();
      await encryptKMFBuffer(separate, key, index + 100);
      assert.notDeepEqual(separate, encrypted);
      const tampered = encrypted.slice();
      const payload = KMF.getRootAsKMF(new flatbuffers.ByteBuffer(tampered)).keyBytesArray();
      const start = payload.byteOffset - tampered.byteOffset;
      tampered[start] ^= 1;
      await decryptKMFBuffer(tampered, key, index);
      const expected = plain.slice();
      expected[start] ^= 1;
      assert.deepEqual(tampered, expected);
    });

    await step('Ed25519 signature verification and tamper rejection (flatc-wasm)', async () => {
      await required('loadEncryptionWasm')();
      assert.equal(records.length, 5);
      const keys = required('ed25519GenerateKeyPair')();
      try {
        const message = records[0].encrypted;
        const signature = required('ed25519Sign')(keys.privateKey, message);
        assert.equal(signature.length, 64);
        assert.equal(required('ed25519Verify')(keys.publicKey, message, signature), true);
        const tampered = message.slice();
        tampered[tampered.length - 1] ^= 1;
        assert.equal(required('ed25519Verify')(keys.publicKey, tampered, signature), false);
      } finally { keys.privateKey.fill(0); }
    });

  } finally {
    await database?.close();
    await rm(directory, { recursive: true, force: true });
    key.fill(0);
    wrongKey.fill(0);
    for (const record of records) { record.plain.fill(0); record.object.KEY_BYTES.fill(0); }
  }
  assert.equal(failures.length, 0, `Failed steps: ${failures.join('; ')}`);
}
main().catch((error) => {
  console.error(failures.length ? `Encryption check failed: ${failures.join('; ')}` : `Encryption setup failed: ${error.name}: ${error.message}`);
  process.exitCode = 1;
});
