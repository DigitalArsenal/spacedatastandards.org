import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as flatbuffers from 'flatbuffers';
import { KMF } from '../lib/js/KMF/KMF.js';
import { decryptKMFBuffer, encryptKMFBuffer } from '../lib/js/KMF/flatbuffers-encryption.js';

const productionFiles = [
  'lib/ts/REC/flatbuffers-encryption.ts',
  'lib/ts/KMF/flatbuffers-encryption.ts',
  'lib/js/REC/flatbuffers-encryption.js',
  'lib/js/KMF/flatbuffers-encryption.js'
];

const forbidden = [
  /\bcrypto\.subtle\b/,
  /\bwebcrypto\.subtle\b/,
  /\bSubtleCrypto\b/,
  /\bderiveBits\b/,
  /\bderiveKey\b/,
  /\bimportKey\b/
];

describe('generated JS encryption runtime surface', () => {
  it('does not use WebCrypto APIs', () => {
    const failures = [];
    for (const file of productionFiles) {
      const source = readFileSync(resolve(file), 'utf8');
      for (const pattern of forbidden) {
        if (pattern.test(source)) failures.push(`${file} matches ${pattern}`);
      }
    }

    assert.deepEqual(failures, []);
  });

  it('round-trips field encryption through the WASM AES-CTR helper', async () => {
    const keyBytes = new TextEncoder().encode('protected flatbuffer field bytes');
    const builder = new flatbuffers.Builder(128);
    const keyBytesOffset = KMF.createKeyBytesVector(builder, keyBytes);
    KMF.startKMF(builder);
    KMF.addKeyBytes(builder, keyBytesOffset);
    KMF.finishKMFBuffer(builder, KMF.endKMF(builder));
    const plain = builder.asUint8Array().slice();
    const key = new Uint8Array(32);
    for (let i = 0; i < key.length; i += 1) key[i] = i + 1;

    const buffer = await encryptKMFBuffer(plain.slice(), key, 24);
    const read = (bytes) => KMF.getRootAsKMF(new flatbuffers.ByteBuffer(bytes)).keyBytesArray();
    assert.notDeepEqual(Array.from(read(buffer)), Array.from(keyBytes));

    await decryptKMFBuffer(buffer, key, 24);
    assert.deepEqual(Array.from(buffer), Array.from(plain));
    assert.deepEqual(Array.from(read(buffer)), Array.from(keyBytes));
  });
});
