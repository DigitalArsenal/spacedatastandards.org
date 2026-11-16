/** FlatSQL 3.12.6 binary ingestion, SQL, persistence and schema conversion. */
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { FlatcRunner } from 'flatc-wasm';
import { FlatSQL } from 'flatsql';
import { binarySchema, frame, frames, query, request, result } from './scripts/flatsql-binary.mjs';

const OMM_SCHEMA = `
namespace SDS;

table OMM {
  OBJECT_NAME: string;
  OBJECT_ID: string;
  NORAD_CAT_ID: uint32 (key);
  CENTER_NAME: string;
  EPOCH: string;
  MEAN_MOTION: double;
  ECCENTRICITY: double;
  INCLINATION: double;
  RA_OF_ASC_NODE: double;
  ARG_OF_PERICENTER: double;
  MEAN_ANOMALY: double;
  BSTAR: double;
  MEAN_MOTION_DOT: double;
  MEAN_MOTION_DDOT: double;
  CLASSIFICATION_TYPE: string;
  REV_AT_EPOCH: double;
}

root_type OMM;
file_identifier "$OMM";
`;

// ── Simplified CAT schema (self-contained, no includes) ─────────────────────
const CAT_SCHEMA = `
namespace SDS;

table CAT {
  OBJECT_NAME: string;
  OBJECT_ID: string;
  NORAD_CAT_ID: uint32 (key);
  OBJECT_TYPE: string;
  OPS_STATUS_CODE: string;
  OWNER: string;
  LAUNCH_DATE: string;
  LAUNCH_SITE: string;
  DECAY_DATE: string;
  PERIOD: double;
  INCLINATION: double;
  APOGEE: double;
  PERIGEE: double;
  RCS: double;
  ORBIT_CENTER: string;
  MANEUVERABLE: bool;
  SIZE: double;
  MASS: double;
}

root_type CAT;
file_identifier "$CAT";
`;


const omms = Array.from({ length: 10 }, (_, index) => ({
  OBJECT_NAME: `synthetic-${index}`, OBJECT_ID: `fixture-${index}`, NORAD_CAT_ID: 90000 + index,
  CENTER_NAME: 'EARTH', EPOCH: '2000-01-01T00:00:00Z', MEAN_MOTION: index * 2 + 1,
  ECCENTRICITY: index * 0.003, INCLINATION: index * 15, BSTAR: index * 0.00001,
}));
const cats = omms.map((record, index) => ({
  OBJECT_NAME: record.OBJECT_NAME, OBJECT_ID: record.OBJECT_ID, NORAD_CAT_ID: record.NORAD_CAT_ID,
  OBJECT_TYPE: 'TEST', OWNER: 'TEST', APOGEE: index * 300, PERIGEE: index * 200,
  PERIOD: 90 + index, INCLINATION: record.INCLINATION, RCS: index * 0.5,
  MASS: index * 400, SIZE: index + 1,
}));

async function main() {
  const flatc = await FlatcRunner.init();
  const root = await mkdtemp(join(tmpdir(), 'sds-flatsql-'));
  let db;
  const originals = new Map();
  try {
    db = await FlatSQL.open({ root });
    for (const [name, schema, records] of [['OMM', OMM_SCHEMA, omms], ['CAT', CAT_SCHEMA, cats]]) {
      const input = { entry: `/${name}.fbs`, files: { [`/${name}.fbs`]: schema } };
      await db.registerSchema({ name, fileIdentifier: `$${name}`, bfbs: binarySchema(flatc, input) });
      const encoded = records.map(object => new Uint8Array(flatc.generateBinary(input, JSON.stringify(object), { sizePrefix: false })));
      originals.set(name, encoded);
      for (const bytes of encoded) result(await db.ingest(name, frame(bytes)));
      assert.equal((await query(db, `SELECT COUNT(*) FROM ${name}`)).rows[0][0], BigInt(records.length));
      const decoded = JSON.parse(flatc.generateJSON(input, { path: `/${name}.bin`, data: encoded[0] }));
      for (const [field, value] of Object.entries(records[0])) {
        if (value !== 0) assert.equal(decoded[field], value, `${name} binary round trip ${field}`);
      }
      assert.ok(Object.keys(flatc.generateCode(input, 'ts', { genObjectApi: true })).length);
    }
    const cases = [
      ['OMM', '', () => true],
      ['OMM', 'MEAN_MOTION > 11', r => r.MEAN_MOTION > 11],
      ['OMM', 'INCLINATION > 95', r => r.INCLINATION > 95],
      ['OMM', 'ECCENTRICITY > 0.01', r => r.ECCENTRICITY > 0.01],
      ['OMM', 'MEAN_MOTION < 2', r => r.MEAN_MOTION < 2],
      ['OMM', 'BSTAR < 0.00005', r => r.BSTAR < 0.00005],
      ['CAT', '', () => true],
      ['CAT', 'RCS > 0', r => r.RCS > 0],
      ['CAT', 'APOGEE > 1000', r => r.APOGEE > 1000],
      ['CAT', 'MASS > 1000', r => r.MASS > 1000],
      ['CAT', 'INCLINATION < 30', r => r.INCLINATION < 30],
    ];
    for (const [name, where, predicate] of cases) {
      const actual = await query(db, `SELECT OBJECT_NAME FROM ${name}${where ? ` WHERE ${where}` : ''} ORDER BY INCLINATION`);
      const records = name === 'OMM' ? omms : cats;
      assert.deepEqual(actual.rows, records.filter(predicate).map(r => [r.OBJECT_NAME]));
    }
    const surface = result(await db.surface());
    assert.ok(surface.rows.length > 0, 'binary schema catalog returns rows');
    for (const name of ['OMM', 'CAT'])
      assert.ok(surface.rows.some(row => row.includes(name)), `binary schema catalog includes ${name}`);
    await db.close();
    db = await FlatSQL.open({ root });
    for (const name of ['OMM', 'CAT']) {
      const stored = frames(await db.execute(request(`SELECT _data FROM ${name} ORDER BY NORAD_CAT_ID`), { records: true }));
      assert.deepEqual(stored, originals.get(name), 'reopened store preserves every byte');
    }
    console.log('PASS FlatSQL 3.12.6: 20 synthetic records, 11 SQL selections, schema catalog, code generation and persisted byte equality');
  } finally {
    await db?.close();
    await rm(root, { recursive: true, force: true });
  }
}
main().catch(error => {
  console.error(`FlatSQL check failed: ${error.name}: ${error.message}`);
  process.exitCode = 1;
});
