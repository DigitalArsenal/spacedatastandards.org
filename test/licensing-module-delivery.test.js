import assert from 'node:assert/strict';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

describe('Licensing module delivery schemas', () => {
    const families = ['LCH', 'LPF', 'LGR', 'LWK', 'LMR'];
    const invokeFamilies = ['LCF', 'KRF', 'KMF'];
    const expectedSchemaFields = {
        LCH: ['REQUESTER_XPUB', 'REQUESTER_SIGNING_PUBKEY', 'REQUESTED_AT'],
        LPF: ['REQUESTER_XPUB', 'REQUESTED_DOMAIN', 'CHALLENGE_NONCE', 'CHALLENGE_EXPIRES_AT'],
        LGR: ['REQUESTER_XPUB', 'EXPIRES_AT', 'GRANT_VERIFIER_PUBKEY'],
        LWK: ['CONTENT_KEY_ID', 'RECIPIENT_KEY_ID'],
        LMR: ['ACTION', 'WASM_CID', 'MODULE_HASH']
    };
    const expectedInvokeFields = {
        LCF: [
            'PROVIDER_PEER_ID',
            'PROVIDER_SIGNING_KEY',
            'PROVIDER_WRAPPING_KEY',
            'ACTIVE_KEY_VERSION',
            'MAX_CLOCK_SKEW_MS',
            'CHALLENGE_TTL_MS',
            'INITIALIZED',
            'NEEDS_ROTATION'
        ],
        KRF: [
            'KEY_ID',
            'SLOT_ID',
            'ROLE',
            'ALGORITHM',
            'PUBLIC_KEY',
            'HOST_MANAGED'
        ],
        KMF: [
            'KEY_ID',
            'ROLE',
            'ALGORITHM',
            'ENCODING',
            'KEY_BYTES'
        ]
    };

    it('defines standards schema sources and generated outputs for each family', async () => {
        for (const family of families) {
            const schemaPath = path.join(repoRoot, 'schema', family, 'main.fbs');
            const tsPath = path.join(repoRoot, 'lib', 'ts', family, 'main.ts');
            const structTsPath = path.join(repoRoot, 'lib', 'ts', family, `${family}.ts`);
            const jsonPath = path.join(repoRoot, 'lib', 'json', family, 'main.schema.json');

            await fs.access(schemaPath);
            await fs.access(tsPath);
            await fs.access(structTsPath);
            await fs.access(jsonPath);

            const source = await fs.readFile(schemaPath, 'utf8');
            const generatedTs = await fs.readFile(structTsPath, 'utf8');
            for (const field of expectedSchemaFields[family]) {
                assert.match(source, new RegExp(`\\b${field}\\b`), `${family} missing ${field}`);
                assert.match(generatedTs, new RegExp(`\\b${field}\\b`), `${family} TS bindings missing ${field}`);
            }
        }
    });

    it('defines standards-backed invoke/config and key payload families for licensing modules', async () => {
        for (const family of invokeFamilies) {
            const schemaPath = path.join(repoRoot, 'schema', family, 'main.fbs');
            const tsPath = path.join(repoRoot, 'lib', 'ts', family, 'main.ts');
            const structTsPath = path.join(repoRoot, 'lib', 'ts', family, `${family}.ts`);
            const jsonPath = path.join(repoRoot, 'lib', 'json', family, 'main.schema.json');

            await fs.access(schemaPath);
            await fs.access(tsPath);
            await fs.access(structTsPath);
            await fs.access(jsonPath);

            const source = await fs.readFile(schemaPath, 'utf8');
            const generatedTs = await fs.readFile(structTsPath, 'utf8');
            for (const field of expectedInvokeFields[family]) {
                assert.match(source, new RegExp(`\\b${field}\\b`), `${family} missing ${field}`);
                assert.match(generatedTs, new RegExp(`\\b${field}\\b`), `${family} TS bindings missing ${field}`);
            }
        }
    });

    it('extends PLG with delivery policy and encrypted artifact metadata', async () => {
        const source = await fs.readFile(path.join(repoRoot, 'schema', 'PLG', 'main.fbs'), 'utf8');
        const generatedTs = await fs.readFile(path.join(repoRoot, 'lib', 'ts', 'PLG', 'PLG.ts'), 'utf8');
        for (const field of [
            'WASM_CID',
            'ENCRYPTED_WASM_HASH',
            'ENCRYPTED_WASM_SIZE',
            'REQUIRED_SCOPE',
            'KEY_ID',
            'ALLOWED_DOMAINS',
            'MAX_GRANT_TIMEOUT_MS'
        ]) {
            assert.match(source, new RegExp(`\\b${field}\\b`), `PLG missing ${field}`);
            assert.match(generatedTs, new RegExp(`\\b${field}\\b`), `PLG TS bindings missing ${field}`);
        }
    });
});
