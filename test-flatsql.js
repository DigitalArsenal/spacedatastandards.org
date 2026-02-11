/**
 * FlatSQL + flatc-wasm Integration Demo
 *
 * Demonstrates SQL querying over FlatBuffer data using Space Data Standards schemas.
 * Uses the pure-JS FlatSQL path with FlatcAccessor backed by flatc-wasm.
 *
 * Usage: node test-flatsql.js
 */
import { FlatcRunner } from "flatc-wasm";
import { FlatSQLDatabase, FlatcAccessor } from "flatsql";

// ── Simplified OMM schema (self-contained, no includes) ─────────────────────
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
`;

// ── Sample OMM data (real-ish orbital elements) ─────────────────────────────
const SAMPLE_OMMS = [
  { OBJECT_NAME: "ISS (ZARYA)", OBJECT_ID: "1998-067A", NORAD_CAT_ID: 25544, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T12:00:00.000Z", MEAN_MOTION: 15.489, ECCENTRICITY: 0.0001234, INCLINATION: 51.6416, RA_OF_ASC_NODE: 200.1234, ARG_OF_PERICENTER: 120.5678, MEAN_ANOMALY: 240.9012, BSTAR: 0.000031, MEAN_MOTION_DOT: 0.00001, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 47890 },
  { OBJECT_NAME: "STARLINK-1007", OBJECT_ID: "2019-074A", NORAD_CAT_ID: 44713, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T10:30:00.000Z", MEAN_MOTION: 15.06, ECCENTRICITY: 0.0001567, INCLINATION: 53.0536, RA_OF_ASC_NODE: 145.678, ARG_OF_PERICENTER: 90.123, MEAN_ANOMALY: 270.456, BSTAR: 0.000045, MEAN_MOTION_DOT: 0.000005, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 28100 },
  { OBJECT_NAME: "STARLINK-1008", OBJECT_ID: "2019-074B", NORAD_CAT_ID: 44714, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T10:30:00.000Z", MEAN_MOTION: 15.06, ECCENTRICITY: 0.0001601, INCLINATION: 53.0541, RA_OF_ASC_NODE: 145.679, ARG_OF_PERICENTER: 90.234, MEAN_ANOMALY: 270.567, BSTAR: 0.000044, MEAN_MOTION_DOT: 0.000005, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 28100 },
  { OBJECT_NAME: "HUBBLE SPACE TELESCOPE", OBJECT_ID: "1990-037B", NORAD_CAT_ID: 20580, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T08:00:00.000Z", MEAN_MOTION: 15.09, ECCENTRICITY: 0.0002789, INCLINATION: 28.4698, RA_OF_ASC_NODE: 310.456, ARG_OF_PERICENTER: 50.789, MEAN_ANOMALY: 309.234, BSTAR: 0.000067, MEAN_MOTION_DOT: 0.00002, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 55200 },
  { OBJECT_NAME: "TERRA", OBJECT_ID: "1999-068A", NORAD_CAT_ID: 25994, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T06:00:00.000Z", MEAN_MOTION: 14.57, ECCENTRICITY: 0.0001123, INCLINATION: 98.2104, RA_OF_ASC_NODE: 45.678, ARG_OF_PERICENTER: 80.123, MEAN_ANOMALY: 280.456, BSTAR: 0.000023, MEAN_MOTION_DOT: 0.000003, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 41200 },
  { OBJECT_NAME: "LANDSAT 9", OBJECT_ID: "2021-088A", NORAD_CAT_ID: 49260, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T07:00:00.000Z", MEAN_MOTION: 14.57, ECCENTRICITY: 0.0001056, INCLINATION: 98.2207, RA_OF_ASC_NODE: 46.123, ARG_OF_PERICENTER: 81.456, MEAN_ANOMALY: 279.789, BSTAR: 0.000021, MEAN_MOTION_DOT: 0.000002, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 17800 },
  { OBJECT_NAME: "COSMOS 2251 DEB", OBJECT_ID: "1993-036BKC", NORAD_CAT_ID: 34567, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T09:00:00.000Z", MEAN_MOTION: 14.35, ECCENTRICITY: 0.0123456, INCLINATION: 74.0356, RA_OF_ASC_NODE: 180.234, ARG_OF_PERICENTER: 200.567, MEAN_ANOMALY: 159.890, BSTAR: 0.00012, MEAN_MOTION_DOT: 0.00005, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 62000 },
  { OBJECT_NAME: "TIANGONG", OBJECT_ID: "2021-035A", NORAD_CAT_ID: 48274, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T11:00:00.000Z", MEAN_MOTION: 15.60, ECCENTRICITY: 0.0003456, INCLINATION: 41.4700, RA_OF_ASC_NODE: 220.567, ARG_OF_PERICENTER: 150.890, MEAN_ANOMALY: 210.123, BSTAR: 0.000035, MEAN_MOTION_DOT: 0.00001, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 20500 },
  { OBJECT_NAME: "GPS BIIR-2", OBJECT_ID: "1997-035A", NORAD_CAT_ID: 24876, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T05:00:00.000Z", MEAN_MOTION: 2.0056, ECCENTRICITY: 0.0065432, INCLINATION: 55.7234, RA_OF_ASC_NODE: 260.123, ARG_OF_PERICENTER: 40.456, MEAN_ANOMALY: 320.789, BSTAR: 0.0, MEAN_MOTION_DOT: 0.0, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 18900 },
  { OBJECT_NAME: "GOES 16", OBJECT_ID: "2016-071A", NORAD_CAT_ID: 41866, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T04:00:00.000Z", MEAN_MOTION: 1.0027, ECCENTRICITY: 0.0001789, INCLINATION: 0.0523, RA_OF_ASC_NODE: 75.234, ARG_OF_PERICENTER: 300.567, MEAN_ANOMALY: 60.890, BSTAR: 0.0, MEAN_MOTION_DOT: 0.0, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 3100 },
  { OBJECT_NAME: "FENGYUN 1C DEB", OBJECT_ID: "1999-025DPZ", NORAD_CAT_ID: 39012, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T09:30:00.000Z", MEAN_MOTION: 14.10, ECCENTRICITY: 0.0234567, INCLINATION: 99.1234, RA_OF_ASC_NODE: 130.456, ARG_OF_PERICENTER: 170.789, MEAN_ANOMALY: 190.012, BSTAR: 0.00015, MEAN_MOTION_DOT: 0.00006, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 58000 },
  { OBJECT_NAME: "IRIDIUM 33 DEB", OBJECT_ID: "1997-051QF", NORAD_CAT_ID: 36789, CENTER_NAME: "EARTH", EPOCH: "2025-01-15T09:15:00.000Z", MEAN_MOTION: 14.28, ECCENTRICITY: 0.0156789, INCLINATION: 86.3967, RA_OF_ASC_NODE: 90.123, ARG_OF_PERICENTER: 250.456, MEAN_ANOMALY: 110.789, BSTAR: 0.00013, MEAN_MOTION_DOT: 0.00004, MEAN_MOTION_DDOT: 0, CLASSIFICATION_TYPE: "U", REV_AT_EPOCH: 60100 },
];

// ── Sample CAT data ─────────────────────────────────────────────────────────
const SAMPLE_CATS = [
  { OBJECT_NAME: "ISS (ZARYA)", OBJECT_ID: "1998-067A", NORAD_CAT_ID: 25544, OBJECT_TYPE: "PAYLOAD", OPS_STATUS_CODE: "OPERATIONAL", OWNER: "ISS", LAUNCH_DATE: "1998-11-20", LAUNCH_SITE: "TTMTR", DECAY_DATE: "", PERIOD: 92.9, INCLINATION: 51.64, APOGEE: 422, PERIGEE: 418, RCS: 0, ORBIT_CENTER: "EARTH", MANEUVERABLE: true, SIZE: 109, MASS: 420000 },
  { OBJECT_NAME: "HUBBLE SPACE TELESCOPE", OBJECT_ID: "1990-037B", NORAD_CAT_ID: 20580, OBJECT_TYPE: "PAYLOAD", OPS_STATUS_CODE: "OPERATIONAL", OWNER: "US", LAUNCH_DATE: "1990-04-24", LAUNCH_SITE: "AFETR", DECAY_DATE: "", PERIOD: 95.4, INCLINATION: 28.47, APOGEE: 540, PERIGEE: 537, RCS: 0, ORBIT_CENTER: "EARTH", MANEUVERABLE: false, SIZE: 13.2, MASS: 11110 },
  { OBJECT_NAME: "STARLINK-1007", OBJECT_ID: "2019-074A", NORAD_CAT_ID: 44713, OBJECT_TYPE: "PAYLOAD", OPS_STATUS_CODE: "OPERATIONAL", OWNER: "US", LAUNCH_DATE: "2019-11-11", LAUNCH_SITE: "AFETR", DECAY_DATE: "", PERIOD: 95.6, INCLINATION: 53.05, APOGEE: 550, PERIGEE: 545, RCS: 0, ORBIT_CENTER: "EARTH", MANEUVERABLE: true, SIZE: 3.2, MASS: 260 },
  { OBJECT_NAME: "COSMOS 2251 DEB", OBJECT_ID: "1993-036BKC", NORAD_CAT_ID: 34567, OBJECT_TYPE: "DEBRIS", OPS_STATUS_CODE: "DECAYED", OWNER: "CIS", LAUNCH_DATE: "1993-06-16", LAUNCH_SITE: "PKMTR", DECAY_DATE: "", PERIOD: 100.5, INCLINATION: 74.04, APOGEE: 850, PERIGEE: 780, RCS: 0.01, ORBIT_CENTER: "EARTH", MANEUVERABLE: false, SIZE: 0.1, MASS: 0.05 },
  { OBJECT_NAME: "FENGYUN 1C DEB", OBJECT_ID: "1999-025DPZ", NORAD_CAT_ID: 39012, OBJECT_TYPE: "DEBRIS", OPS_STATUS_CODE: "UNKNOWN", OWNER: "PRC", LAUNCH_DATE: "1999-05-10", LAUNCH_SITE: "TSC", DECAY_DATE: "", PERIOD: 102.1, INCLINATION: 99.12, APOGEE: 900, PERIGEE: 830, RCS: 0.005, ORBIT_CENTER: "EARTH", MANEUVERABLE: false, SIZE: 0.05, MASS: 0.02 },
  { OBJECT_NAME: "GOES 16", OBJECT_ID: "2016-071A", NORAD_CAT_ID: 41866, OBJECT_TYPE: "PAYLOAD", OPS_STATUS_CODE: "OPERATIONAL", OWNER: "US", LAUNCH_DATE: "2016-11-19", LAUNCH_SITE: "AFETR", DECAY_DATE: "", PERIOD: 1436, INCLINATION: 0.05, APOGEE: 35791, PERIGEE: 35781, RCS: 0, ORBIT_CENTER: "EARTH", MANEUVERABLE: true, SIZE: 6.1, MASS: 5192 },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function printTable(result) {
  if (!result || !result.columns || !result.rows) {
    console.log("  (no results)");
    return;
  }
  const { columns, rows } = result;
  if (rows.length === 0) {
    console.log(`  Columns: ${columns.join(", ")}`);
    console.log("  (0 rows)");
    return;
  }

  // Calculate column widths
  const widths = columns.map((col, i) => {
    const maxVal = Math.max(...rows.map(r => String(r[i] ?? "").length));
    return Math.max(col.length, Math.min(maxVal, 30));
  });

  const header = columns.map((c, i) => c.padEnd(widths[i])).join(" | ");
  const separator = widths.map(w => "-".repeat(w)).join("-+-");
  console.log(`  ${header}`);
  console.log(`  ${separator}`);
  for (const row of rows) {
    const line = row.map((v, i) => {
      const s = String(v ?? "null");
      return s.length > 30 ? s.substring(0, 27) + "..." : s.padEnd(widths[i]);
    }).join(" | ");
    console.log(`  ${line}`);
  }
  console.log(`  (${rows.length} row${rows.length !== 1 ? "s" : ""})\n`);
}

function section(title) {
  console.log(`\n${"=".repeat(70)}`);
  console.log(`  ${title}`);
  console.log(`${"=".repeat(70)}\n`);
}

function subsection(title) {
  console.log(`--- ${title} ---\n`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("FlatSQL + flatc-wasm Integration Demo");
  console.log("Space Data Standards - SQL over FlatBuffers\n");

  // Initialize flatc-wasm
  const flatc = await FlatcRunner.init();
  console.log(`flatc-wasm initialized: ${flatc.version()}`);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 1: OMM SQL Querying
  // ══════════════════════════════════════════════════════════════════════════
  section("1. SQL Querying - Orbit Mean Elements (OMM)");

  const ommAccessor = new FlatcAccessor(flatc, OMM_SCHEMA);
  const ommDB = FlatSQLDatabase.fromSchema(OMM_SCHEMA, ommAccessor, "omm-catalog");

  console.log(`Created OMM database. Tables: ${ommDB.listTables().join(", ")}`);

  // Insert sample data
  for (const omm of SAMPLE_OMMS) {
    ommDB.insert("OMM", omm);
  }

  const ommStats = ommDB.getStats();
  console.log(`Inserted ${ommStats[0]?.recordCount ?? 0} OMM records\n`);

  // Query 1: All objects
  subsection("1a. All tracked objects");
  printTable(ommDB.query("SELECT OBJECT_NAME, NORAD_CAT_ID, INCLINATION, MEAN_MOTION FROM OMM"));

  // Query 2: LEO objects (mean motion > 11 rev/day)
  subsection("1b. LEO objects (mean motion > 11 rev/day)");
  printTable(ommDB.query("SELECT OBJECT_NAME, MEAN_MOTION, INCLINATION, ECCENTRICITY FROM OMM WHERE MEAN_MOTION > 11 ORDER BY INCLINATION"));

  // Query 3: Sun-synchronous orbits (inclination > 95)
  subsection("1c. Sun-synchronous orbits (inclination > 95)");
  printTable(ommDB.query("SELECT OBJECT_NAME, INCLINATION, MEAN_MOTION FROM OMM WHERE INCLINATION > 95"));

  // Query 4: High-eccentricity objects (potential debris)
  subsection("1d. High eccentricity objects (> 0.01)");
  printTable(ommDB.query("SELECT OBJECT_NAME, ECCENTRICITY, BSTAR FROM OMM WHERE ECCENTRICITY > 0.01"));

  // Query 5: GEO objects (mean motion ~1 rev/day)
  subsection("1e. GEO objects (mean motion < 2 rev/day)");
  printTable(ommDB.query("SELECT OBJECT_NAME, MEAN_MOTION, INCLINATION, ECCENTRICITY FROM OMM WHERE MEAN_MOTION < 2"));

  // Query 6: Low-drag objects
  subsection("1f. Low-drag objects (BSTAR < 0.00005)");
  printTable(ommDB.query("SELECT OBJECT_NAME, BSTAR, MEAN_MOTION FROM OMM WHERE BSTAR < 0.00005"));

  // Query 7: All objects sorted by inclination
  subsection("1g. All objects sorted by inclination");
  printTable(ommDB.query("SELECT OBJECT_NAME, INCLINATION FROM OMM ORDER BY INCLINATION"));

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 2: CAT SQL Querying
  // ══════════════════════════════════════════════════════════════════════════
  section("2. SQL Querying - Satellite Catalog (CAT)");

  const catAccessor = new FlatcAccessor(flatc, CAT_SCHEMA);
  const catDB = FlatSQLDatabase.fromSchema(CAT_SCHEMA, catAccessor, "sat-catalog");

  for (const cat of SAMPLE_CATS) {
    catDB.insert("CAT", cat);
  }

  const catStats = catDB.getStats();
  console.log(`Inserted ${catStats[0]?.recordCount ?? 0} CAT records\n`);

  // Query: All catalog entries
  subsection("2a. Full satellite catalog");
  printTable(catDB.query("SELECT OBJECT_NAME, OBJECT_TYPE, OWNER, APOGEE, PERIGEE FROM CAT"));

  // Query: Objects with notable RCS
  subsection("2b. Objects with small RCS (potential debris)");
  printTable(catDB.query("SELECT OBJECT_NAME, OBJECT_TYPE, RCS, MASS, OWNER FROM CAT WHERE RCS > 0"));

  // Query: High-altitude objects (GEO)
  subsection("2c. High-altitude objects (apogee > 1000 km)");
  printTable(catDB.query("SELECT OBJECT_NAME, APOGEE, PERIGEE, PERIOD FROM CAT WHERE APOGEE > 1000"));

  // Query: Large objects by mass
  subsection("2d. Massive objects (mass > 1000 kg)");
  printTable(catDB.query("SELECT OBJECT_NAME, MASS, SIZE, OWNER FROM CAT WHERE MASS > 1000"));

  // Query: Low inclination objects
  subsection("2e. Low inclination objects (< 30 deg)");
  printTable(catDB.query("SELECT OBJECT_NAME, INCLINATION, PERIOD, OWNER FROM CAT WHERE INCLINATION < 30"));

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 3: Data Export & Import
  // ══════════════════════════════════════════════════════════════════════════
  section("3. Data Export & Import");

  // Export OMM data
  const exported = ommDB.exportData();
  console.log(`Exported OMM data: ${exported.byteLength} bytes`);

  // Database statistics
  subsection("3a. OMM Database Stats");
  for (const stat of ommDB.getStats()) {
    console.log(`  Table: ${stat.tableName}`);
    console.log(`  Records: ${stat.recordCount}`);
    console.log(`  Indexes: ${JSON.stringify(stat.indexes)}\n`);
  }

  subsection("3b. CAT Database Stats");
  for (const stat of catDB.getStats()) {
    console.log(`  Table: ${stat.tableName}`);
    console.log(`  Records: ${stat.recordCount}`);
    console.log(`  Indexes: ${JSON.stringify(stat.indexes)}\n`);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 4: Binary Round-Trip via flatc-wasm
  // ══════════════════════════════════════════════════════════════════════════
  section("4. FlatBuffer Binary Round-Trip (flatc-wasm)");

  const schemaInput = {
    entry: "/omm.fbs",
    files: { "/omm.fbs": OMM_SCHEMA }
  };

  // JSON -> Binary -> JSON round-trip
  const sampleJSON = JSON.stringify(SAMPLE_OMMS[0]);
  const binary = flatc.generateBinary(schemaInput, sampleJSON);
  console.log(`JSON -> FlatBuffer binary: ${binary.byteLength} bytes`);

  const roundtripped = flatc.generateJSON(schemaInput, { path: "/omm.bin", data: binary });
  const parsed = JSON.parse(roundtripped);
  console.log(`FlatBuffer -> JSON round-trip:`);
  console.log(`  OBJECT_NAME: ${parsed.OBJECT_NAME}`);
  console.log(`  NORAD_CAT_ID: ${parsed.NORAD_CAT_ID}`);
  console.log(`  MEAN_MOTION: ${parsed.MEAN_MOTION}`);
  console.log(`  INCLINATION: ${parsed.INCLINATION}`);
  console.log(`  Round-trip integrity: ${parsed.OBJECT_NAME === SAMPLE_OMMS[0].OBJECT_NAME ? "PASS" : "FAIL"}\n`);

  // Code generation
  subsection("4a. Code Generation");
  const tsCode = flatc.generateCode(schemaInput, "ts", { genObjectApi: true });
  const tsFiles = Object.keys(tsCode);
  console.log(`  Generated TypeScript files: ${tsFiles.join(", ")}`);
  if (tsFiles.length > 0) {
    const firstFile = tsCode[tsFiles[0]];
    console.log(`  First file preview (${tsFiles[0]}, ${firstFile.length} chars):`);
    console.log(`  ${firstFile.substring(0, 200).replace(/\n/g, "\n  ")}...\n`);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 5: Schema Introspection
  // ══════════════════════════════════════════════════════════════════════════
  section("5. Schema Introspection");

  const ommSchema = ommDB.getSchema();
  console.log(`Database: ${ommSchema.name}`);
  console.log(`Version: ${ommSchema.version}`);
  for (const table of ommSchema.tables) {
    console.log(`\nTable: ${table.name} (FlatBuffer: ${table.fbTableName})`);
    console.log(`  Namespace: ${table.fbNamespace}`);
    console.log(`  Primary Key: ${table.primaryKey.join(", ") || "(none)"}`);
    console.log(`  Indexed: ${table.indexes.join(", ") || "(none)"}`);
    console.log(`  Columns:`);
    for (const col of table.columns) {
      const flags = [
        col.isPrimaryKey ? "PK" : "",
        col.isIndexed ? "IDX" : "",
        col.nullable ? "NULL" : "NOT NULL",
      ].filter(Boolean).join(", ");
      console.log(`    ${col.name.padEnd(25)} ${col.sqlType.toString().padEnd(8)} [${flags}]`);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Done
  // ══════════════════════════════════════════════════════════════════════════
  section("Complete");
  console.log("All FlatSQL + flatc-wasm demos completed successfully.\n");
}

main().catch(err => {
  console.error("Demo failed:", err);
  process.exit(1);
});
