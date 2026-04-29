import { strict as assert } from 'node:assert';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { FlatbuffersEncryption } from '../lib/js/REC/flatbuffers-encryption.js';

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
    const data = new TextEncoder().encode('protected flatbuffer field');
    const ctx = new Uint8Array(40);
    for (let i = 0; i < ctx.length; i += 1) ctx[i] = i + 1;

    const encrypted = await FlatbuffersEncryption.encryptBytes(data, ctx, 24);
    assert.notDeepEqual(Array.from(encrypted), Array.from(data));

    const decrypted = await FlatbuffersEncryption.decryptBytes(encrypted, ctx, 24);
    assert.deepEqual(Array.from(decrypted), Array.from(data));
  });
});
