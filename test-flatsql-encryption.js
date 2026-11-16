/** End-to-end encrypted KMF storage, key exchange, authentication and signing. */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { randomBytes, hkdfSync, createCipheriv } from 'node:crypto';
import * as flatbuffers from 'flatbuffers';
import * as cryptoAPI from 'flatc-wasm';
import { FlatSQLDatabase, FlatcAccessor, StackedFlatBufferStore } from 'flatsql';
import { initFlatSQL } from 'flatsql/wasm';
import { KMF, KMFT, encryptKMFBuffer, decryptKMFBuffer } from './lib/js/KMF/main.js';

const failures = [];
async function step(name, check) {
  try {
    await check();
    console.log(`PASS ${name}`);
  } catch (error) {
    failures.push(name);
    // Assertion values can contain test key material; only print the step.
    console.error(`FAIL ${name}: ${error.code ?? error.name}${error.name === 'AssertionError' ? '' : ': ' + error.message}`);
  }
}
function required(name) {
  assert.equal(typeof cryptoAPI[name], 'function', `flatc-wasm export ${name}`);
  return cryptoAPI[name];
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
  let wasmDatabase;
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
          Array.from(randomBytes(32)), index + 1, 123456789n);
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

    await step('encrypted KMF SQL storage, query, export and byte-exact decryption', async () => {
      assert.equal(records.length, 5);
      database = FlatSQLDatabase.fromSchema(schema, new FlatcAccessor(flatc, schema), 'kmf-encryption-test');
      for (const record of records) database.insertRaw('KMF', record.encrypted);
      const result = database.query('SELECT KEY_ID, VERSION, KEY_BYTES FROM KMF ORDER BY VERSION');
      assert.equal(result.rows.length, 5);
      for (let i = 0; i < records.length; i++) {
        assert.equal(result.rows[i][0], records[i].object.KEY_ID);
        assert.equal(result.rows[i][1], records[i].object.VERSION);
        assert.deepEqual(result.rows[i][2], Array.from(KMF.getRootAsKMF(
          new flatbuffers.ByteBuffer(records[i].encrypted)).keyBytesArray()));
      }
      const restored = StackedFlatBufferStore.fromData(database.exportData());
      const stored = [...restored.iterateTableRecords('KMF')];
      assert.equal(stored.length, 5);
      for (let i = 0; i < stored.length; i++) {
        assert.deepEqual(stored[i].data, records[i].encrypted);
        const wrong = stored[i].data.slice();
        await decryptKMFBuffer(wrong, wrongKey, i);
        assert.notDeepEqual(wrong, records[i].plain);
        const decrypted = stored[i].data.slice();
        await decryptKMFBuffer(decrypted, key, i);
        assert.deepEqual(decrypted, records[i].plain);
      }
    });

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

    await step('FlatSQL WASM key and HMAC configuration', async () => {
      const engine = await initFlatSQL();
      wasmDatabase = engine.createDatabase(schema, 'kmf-wasm-test');
      wasmDatabase.registerFileId('$KMF', 'KMF');
      wasmDatabase.setEncryptionKey(key);
      assert.equal(wasmDatabase.isEncrypted(), true);
      wasmDatabase.setHMACVerification(true);
      assert.equal(wasmDatabase.isHMACEnabled(), true);
    });
    await step('FlatSQL WASM HMAC computation, verification and tamper rejection', async () => {
      assert.ok(wasmDatabase);
      assert.equal(records.length, 5);
      for (const { encrypted } of records) {
        const mac = wasmDatabase.computeHMAC(encrypted);
        assert.equal(mac.length, 32);
        assert.equal(wasmDatabase.verifyHMAC(encrypted, mac), true);
        const tampered = encrypted.slice();
        tampered[tampered.length - 1] ^= 1;
        assert.equal(wasmDatabase.verifyHMAC(tampered, mac), false);
      }
    });
    await step('FlatSQL WASM ingest counts, query and stored-record statistics', async () => {
      assert.ok(wasmDatabase);
      assert.equal(records.length, 5);
      const ingested = records.map(({ encrypted }) => wasmDatabase.ingestOne(encrypted));
      assert.deepEqual(ingested, [1, 2, 3, 4, 5], 'ingestOne returns consecutive row IDs');
      const result = wasmDatabase.query('SELECT KEY_ID, VERSION FROM KMF ORDER BY VERSION');
      console.log(`FlatSQL WASM query rows: ${result.rows.length}; stored records: ${wasmDatabase.getStats().find((table) => table.tableName === 'KMF')?.recordCount}`);
      assert.deepEqual(result.rows, records.map(({ object }) => [object.KEY_ID, object.VERSION]));
      assert.equal(wasmDatabase.getStats().find((table) => table.tableName === 'KMF').recordCount, 5);
      assert.ok(wasmDatabase.exportData().length > 0);
    });
  } finally {
    wasmDatabase?.destroy();
    key.fill(0);
    wrongKey.fill(0);
    for (const record of records) { record.plain.fill(0); record.object.KEY_BYTES.fill(0); }
  }
  assert.equal(failures.length, 0, `Failed steps: ${failures.join('; ')}`);
}
main().catch((error) => {
  console.error(failures.length ? `Encryption check failed: ${failures.join('; ')}` : `Encryption setup failed: ${error.name}`);
  process.exitCode = 1;
});
