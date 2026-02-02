import { expect } from 'chai';
import { generateData } from './utilities/data.generator.js';
import { promises as fs } from 'fs';
import path from 'path';
import { readFB, readFBStream } from '../index.js';
import standardsJSON from '../lib/json/index.json' with { type: 'json' };
import { resolver } from '../src/js/resolver.js';
import { createReadStream } from 'fs';

const dataPath = path.resolve('./.temp');

describe('Data Generation and Verification', () => {
    before(async () => {
        await fs.mkdir(dataPath, { recursive: true });
    });

    after(async () => {
        const files = await fs.readdir(dataPath);
        for (const file of files) {
            await fs.unlink(path.join(dataPath, file));
        }
    });

    const checkPropertyType = (value, schemaProp, jsonSchema) => {
        const resolvedProp = resolver(schemaProp, jsonSchema);
        const type = resolvedProp.type;

        if (value === null || value === undefined) return;
        if (resolvedProp.enum) {
            expect(resolvedProp.enum.length).to.greaterThan(Number(value));
        } else if (type === 'integer') {
            expect(typeof parseFloat(Number(value))).to.equal('number');
        } else if (type === 'number') {
            expect(typeof parseFloat(value)).to.equal('number');
        } else if (type === 'boolean') {
            expect(typeof !!value).to.equal('boolean');
        } else if (type === 'string') {
            expect(typeof value.toString()).to.equal('string');
        } else if (type === 'array') {
            expect(Array.isArray(value)).to.be.true;
            value.forEach(item => {
                checkPropertyType(item, resolvedProp.items, jsonSchema);
            });
        } else if (type === 'object' || resolvedProp.$ref) {
            if (Array.isArray(value)) {
                expect(value).to.be.an('array');
                value.forEach(item => {
                    expect(item).to.be.an('object');
                    for (const [key, val] of Object.entries(item)) {
                        const propSchema = resolvedProp.properties ? resolvedProp.properties[key] : null;
                        if (propSchema) {
                            checkPropertyType(val, propSchema, jsonSchema);
                        }
                    }
                });
            } else {
                expect(value).to.be.an('object');
                for (const [key, val] of Object.entries(value)) {
                    const propSchema = resolvedProp.properties ? resolvedProp.properties[key] : null;
                    if (propSchema) {
                        checkPropertyType(val, propSchema, jsonSchema);
                    }
                }
            }
        } else {
            if (!resolvedProp.anyOf) {
                throw new Error(`Unsupported type: ${type}`);
            }
        }
    };

    it('should generate flatbuffers and verify against JSON schemas', async function () {
        this.timeout(500000); // Increase timeout for this test
        await generateData(10, 5, dataPath);

        const files = await fs.readdir(dataPath);
        for (const file of files) {
            const buffer = await fs.readFile(path.join(dataPath, file));
            const flatbuffers = readFB(buffer);

            const schemaName = file.split('.')[1].toUpperCase();
            const jsonSchema = standardsJSON.STANDARDS[schemaName];

            if (!jsonSchema) {
                throw new Error(`Schema not found for ${schemaName}`);
            }

            for (const record of flatbuffers) {
                for (const [key, value] of Object.entries(record)) {
                    const schemaProp = jsonSchema.definitions[schemaName].properties[key];
                    if (schemaProp) {
                        checkPropertyType(value, schemaProp, jsonSchema);
                    }
                }
            }
        }
    });

    it('should handle multiple flatbuffers appended together', async function () {
        this.timeout(500000); // Increase timeout for this test

        await generateData(5, 2, dataPath);

        const files = await fs.readdir(dataPath);
        for (const file of files) {
            const buffer = await fs.readFile(path.join(dataPath, file));
            const flatbuffers = readFB(buffer);

            const schemaName = file.split('.')[1].toUpperCase();
            const jsonSchema = standardsJSON.STANDARDS[schemaName];

            if (!jsonSchema) {
                throw new Error(`Schema not found for ${schemaName}`);
            }

            for (const record of flatbuffers) {
                for (const [key, value] of Object.entries(record)) {
                    const schemaProp = jsonSchema.definitions[schemaName].properties[key];
                    if (schemaProp) {
                        checkPropertyType(value, schemaProp, jsonSchema);
                    }
                }
            }
        }
    });

    it('should handle reading flatbuffers from a stream', async function () {
        this.timeout(500000); // Increase timeout for this test

        await generateData(10, 1, dataPath);

        const files = await fs.readdir(dataPath);
        for (const file of files) {
            const filePath = path.join(dataPath, file);
            const readStream = createReadStream(filePath);

            const flatbuffers = await readFBStream(readStream);

            const schemaName = file.split('.')[1].toUpperCase();
            const jsonSchema = standardsJSON.STANDARDS[schemaName];

            if (!jsonSchema) {
                throw new Error(`Schema not found for ${schemaName}`);
            }

            for (const record of flatbuffers) {
                for (const [key, value] of Object.entries(record)) {
                    const schemaProp = jsonSchema.definitions[schemaName].properties[key];
                    if (schemaProp) {
                        checkPropertyType(value, schemaProp, jsonSchema);
                    }
                }
            }
        }
    });
});