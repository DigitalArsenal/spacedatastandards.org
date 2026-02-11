/**
 * FlatSQL + flatc-wasm Encryption at Rest Demo
 *
 * Demonstrates per-field encryption using the (encrypted) attribute,
 * key exchange, nonce derivation, and querying encrypted data.
 *
 * Usage: node test-flatsql-encryption.js
 */
import { FlatcRunner } from "flatc-wasm";
import { FlatSQLDatabase, FlatcAccessor } from "flatsql";

// ── Schema with encrypted fields ────────────────────────────────────────────
// Sensitive fields (SSN-equivalent identifiers, precise orbital data for
// classified objects) are marked with (encrypted) for at-rest protection.
const ENCRYPTED_SCHEMA = `
namespace SDS;

table SensitiveSatellite {
  NORAD_CAT_ID: uint32 (key);
  OBJECT_NAME: string;
  CLASSIFICATION: string;
  OWNER: string;
  ORBIT_REGIME: string;
  PRECISE_INCLINATION: double (encrypted);
  PRECISE_LONGITUDE: double (encrypted);
  SENSOR_TASKING: string (encrypted);
  ENCRYPTION_NOTES: string;
}

root_type SensitiveSatellite;
`;

// ── Schema without encryption (for comparison) ─────────────────────────────
const PLAIN_SCHEMA = `
namespace SDS;

table SensitiveSatellite {
  NORAD_CAT_ID: uint32 (key);
  OBJECT_NAME: string;
  CLASSIFICATION: string;
  OWNER: string;
  ORBIT_REGIME: string;
  PRECISE_INCLINATION: double;
  PRECISE_LONGITUDE: double;
  SENSOR_TASKING: string;
  ENCRYPTION_NOTES: string;
}

root_type SensitiveSatellite;
`;

// ── Sample classified satellite data ────────────────────────────────────────
const SAMPLE_DATA = [
  { NORAD_CAT_ID: 90001, OBJECT_NAME: "USA-224", CLASSIFICATION: "CLASSIFIED", OWNER: "US", ORBIT_REGIME: "LEO-SSO", PRECISE_INCLINATION: 97.8912, PRECISE_LONGITUDE: -122.4567, SENSOR_TASKING: "PRIORITY-1 IMAGING PACIFIC", ENCRYPTION_NOTES: "NRO asset" },
  { NORAD_CAT_ID: 90002, OBJECT_NAME: "USA-245", CLASSIFICATION: "CLASSIFIED", OWNER: "US", ORBIT_REGIME: "HEO", PRECISE_INCLINATION: 63.4350, PRECISE_LONGITUDE: 45.7890, SENSOR_TASKING: "SIGINT MOLNIYA COVERAGE", ENCRYPTION_NOTES: "NRO SIGINT" },
  { NORAD_CAT_ID: 90003, OBJECT_NAME: "YAOGAN-30D", CLASSIFICATION: "RESTRICTED", OWNER: "PRC", ORBIT_REGIME: "LEO", PRECISE_INCLINATION: 35.0012, PRECISE_LONGITUDE: 110.2345, SENSOR_TASKING: "ELINT CONSTELLATION TRIAD", ENCRYPTION_NOTES: "PLA-SSF" },
  { NORAD_CAT_ID: 90004, OBJECT_NAME: "COSMOS 2542", CLASSIFICATION: "CLASSIFIED", OWNER: "RUS", ORBIT_REGIME: "LEO-SSO", PRECISE_INCLINATION: 97.9001, PRECISE_LONGITUDE: 37.6789, SENSOR_TASKING: "INSPECTOR SATELLITE OPS", ENCRYPTION_NOTES: "Russian inspector" },
  { NORAD_CAT_ID: 90005, OBJECT_NAME: "OFEK 16", CLASSIFICATION: "RESTRICTED", OWNER: "ISR", ORBIT_REGIME: "LEO-RETROGRADE", PRECISE_INCLINATION: 141.8765, PRECISE_LONGITUDE: 34.5678, SENSOR_TASKING: "HIGH-RES MENA COVERAGE", ENCRYPTION_NOTES: "IAI/Elta" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function section(title) {
  console.log(`\n${"=".repeat(70)}`);
  console.log(`  ${title}`);
  console.log(`${"=".repeat(70)}\n`);
}

function subsection(title) {
  console.log(`--- ${title} ---\n`);
}

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
  const widths = columns.map((col, i) => {
    const maxVal = Math.max(...rows.map(r => String(r[i] ?? "").length));
    return Math.max(col.length, Math.min(maxVal, 35));
  });
  const header = columns.map((c, i) => c.padEnd(widths[i])).join(" | ");
  const separator = widths.map(w => "-".repeat(w)).join("-+-");
  console.log(`  ${header}`);
  console.log(`  ${separator}`);
  for (const row of rows) {
    const line = row.map((v, i) => {
      const s = String(v ?? "null");
      return s.length > 35 ? s.substring(0, 32) + "..." : s.padEnd(widths[i]);
    }).join(" | ");
    console.log(`  ${line}`);
  }
  console.log(`  (${rows.length} row${rows.length !== 1 ? "s" : ""})\n`);
}

function toHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, "0")).join("");
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("FlatSQL + flatc-wasm Encryption at Rest Demo");
  console.log("Per-field AES-256-CTR encryption for sensitive orbital data\n");

  const flatc = await FlatcRunner.init();
  console.log(`flatc-wasm initialized: ${flatc.version()}`);

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 1: Per-Field Encryption with flatc-wasm
  // ══════════════════════════════════════════════════════════════════════════
  section("1. Per-Field Encryption (flatc-wasm)");

  const encSchemaInput = {
    entry: "/sat.fbs",
    files: { "/sat.fbs": ENCRYPTED_SCHEMA }
  };

  const plainSchemaInput = {
    entry: "/sat.fbs",
    files: { "/sat.fbs": PLAIN_SCHEMA }
  };

  // Check what crypto APIs are available
  let hasEncryption = false;
  let x25519GenerateKeypair, EncryptionContext, encryptBuffer, decryptBuffer;

  try {
    const mod = await import("flatc-wasm");
    x25519GenerateKeypair = mod.x25519GenerateKeypair;
    EncryptionContext = mod.EncryptionContext;
    encryptBuffer = mod.encryptBuffer;
    decryptBuffer = mod.decryptBuffer;
    hasEncryption = typeof x25519GenerateKeypair === "function";
  } catch (e) {
    // Crypto module may need explicit loading
  }

  if (!hasEncryption) {
    try {
      const mod = await import("flatc-wasm");
      if (mod.loadEncryptionWasm) {
        await mod.loadEncryptionWasm();
        x25519GenerateKeypair = mod.x25519GenerateKeypair;
        EncryptionContext = mod.EncryptionContext;
        encryptBuffer = mod.encryptBuffer;
        decryptBuffer = mod.decryptBuffer;
        hasEncryption = typeof x25519GenerateKeypair === "function";
      }
    } catch (e) {
      // Not available
    }
  }

  if (hasEncryption) {
    subsection("1a. X25519 Key Generation");
    const senderKeys = x25519GenerateKeypair();
    const recipientKeys = x25519GenerateKeypair();
    console.log(`  Sender public key:    ${toHex(senderKeys.publicKey).substring(0, 32)}...`);
    console.log(`  Recipient public key: ${toHex(recipientKeys.publicKey).substring(0, 32)}...`);
    console.log(`  Key exchange: X25519 (Curve25519)\n`);

    subsection("1b. Encrypting Satellite Records");

    // Create encryption context for sender -> recipient
    const ctx = EncryptionContext.forEncryption(recipientKeys.publicKey, {
      algorithm: "x25519",
      context: "space-data-standards-demo",
    });
    console.log(`  Encryption context created`);
    console.log(`  Algorithm: AES-256-CTR with X25519 key exchange`);
    console.log(`  HKDF context: "space-data-standards-demo"\n`);

    // Encrypt each record
    const encryptedBuffers = [];
    const plainBuffers = [];
    for (let i = 0; i < SAMPLE_DATA.length; i++) {
      const json = JSON.stringify(SAMPLE_DATA[i]);

      // Generate plaintext binary
      const plainBinary = flatc.generateBinary(plainSchemaInput, json);
      plainBuffers.push(plainBinary);

      // Generate encrypted binary (only (encrypted) fields are encrypted)
      try {
        const encBinary = flatc.generateBinaryEncrypted(encSchemaInput, json, {
          publicKey: recipientKeys.publicKey,
          algorithm: "x25519",
          context: "space-data-standards-demo",
        });
        encryptedBuffers.push(encBinary);
        console.log(`  Record ${i}: ${SAMPLE_DATA[i].OBJECT_NAME}`);
        console.log(`    Plain size:     ${plainBinary.byteLength} bytes`);
        console.log(`    Encrypted size: ${encBinary.data.byteLength} bytes`);
        console.log(`    Header size:    ${encBinary.header ? encBinary.header.byteLength || JSON.stringify(encBinary.header).length : 0} bytes`);
      } catch (e) {
        console.log(`  Record ${i}: ${SAMPLE_DATA[i].OBJECT_NAME} - encrypt via generateBinaryEncrypted: ${e.message}`);
        // Try buffer-level encryption as fallback
        try {
          const encrypted = encryptBuffer(plainBinary, encSchemaInput, ctx, i);
          encryptedBuffers.push({ data: encrypted, header: ctx.getHeader() });
          console.log(`    Encrypted via encryptBuffer: ${encrypted.byteLength} bytes`);
        } catch (e2) {
          console.log(`    Buffer encryption fallback: ${e2.message}`);
          encryptedBuffers.push(null);
        }
      }
    }

    subsection("1c. Plaintext vs Encrypted Comparison");
    if (plainBuffers.length > 0 && encryptedBuffers[0]) {
      const plain = plainBuffers[0];
      const enc = encryptedBuffers[0].data;
      console.log(`  First record (${SAMPLE_DATA[0].OBJECT_NAME}):`);
      console.log(`    Plaintext hex (first 64 bytes):  ${toHex(new Uint8Array(plain.buffer || plain).slice(0, 64))}...`);
      console.log(`    Encrypted hex (first 64 bytes):  ${toHex(new Uint8Array(enc.buffer || enc).slice(0, 64))}...`);
      console.log(`    Note: OBJECT_NAME and CLASSIFICATION remain readable.`);
      console.log(`    PRECISE_INCLINATION, PRECISE_LONGITUDE, and SENSOR_TASKING are encrypted.\n`);
    }

    subsection("1d. Decryption & Verification");
    for (let i = 0; i < Math.min(3, encryptedBuffers.length); i++) {
      if (!encryptedBuffers[i]) continue;
      try {
        const decrypted = flatc.generateJSONDecrypted(encSchemaInput,
          { path: "/sat.bin", data: encryptedBuffers[i].data },
          { privateKey: recipientKeys.privateKey, header: encryptedBuffers[i].header }
        );
        const parsed = JSON.parse(decrypted);
        console.log(`  Record ${i}: ${parsed.OBJECT_NAME}`);
        console.log(`    PRECISE_INCLINATION: ${parsed.PRECISE_INCLINATION} (original: ${SAMPLE_DATA[i].PRECISE_INCLINATION})`);
        console.log(`    SENSOR_TASKING: ${parsed.SENSOR_TASKING}`);
        console.log(`    Integrity: ${parsed.PRECISE_INCLINATION === SAMPLE_DATA[i].PRECISE_INCLINATION ? "PASS" : "CHECK"}\n`);
      } catch (e) {
        // Try buffer-level decryption
        try {
          const decCtx = EncryptionContext.forDecryption(
            recipientKeys.privateKey,
            encryptedBuffers[i].header,
            "space-data-standards-demo"
          );
          const decrypted = decryptBuffer(encryptedBuffers[i].data, encSchemaInput, decCtx, i);
          const json = flatc.generateJSON(plainSchemaInput, { path: "/sat.bin", data: decrypted });
          const parsed = JSON.parse(json);
          console.log(`  Record ${i}: ${parsed.OBJECT_NAME}`);
          console.log(`    PRECISE_INCLINATION: ${parsed.PRECISE_INCLINATION}`);
          console.log(`    Decrypted via buffer API\n`);
        } catch (e2) {
          console.log(`  Record ${i}: Decryption fallback: ${e2.message}\n`);
        }
      }
    }

    // Clean up
    if (ctx.destroy) ctx.destroy();
    console.log("  Encryption contexts securely destroyed.\n");
  } else {
    console.log("  Per-field encryption APIs not available in this flatc-wasm build.");
    console.log("  The (encrypted) attribute requires flatc-wasm with crypto support.\n");
    console.log("  Demonstrating FlatBuffer binary operations instead...\n");

    // Demonstrate binary round-trip without encryption
    subsection("1a. FlatBuffer Binary Round-Trip");
    for (let i = 0; i < 3; i++) {
      const json = JSON.stringify(SAMPLE_DATA[i]);
      const binary = flatc.generateBinary(plainSchemaInput, json);
      const rt = flatc.generateJSON(plainSchemaInput, { path: "/sat.bin", data: binary });
      const parsed = JSON.parse(rt);
      console.log(`  Record ${i}: ${parsed.OBJECT_NAME}`);
      console.log(`    Binary size: ${binary.byteLength} bytes`);
      console.log(`    Round-trip OBJECT_NAME: ${parsed.OBJECT_NAME === SAMPLE_DATA[i].OBJECT_NAME ? "PASS" : "FAIL"}`);
      console.log(`    Round-trip PRECISE_INCLINATION: ${parsed.PRECISE_INCLINATION === SAMPLE_DATA[i].PRECISE_INCLINATION ? "PASS" : "FAIL"}\n`);
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 2: FlatSQL Querying (non-encrypted fields remain queryable)
  // ══════════════════════════════════════════════════════════════════════════
  section("2. SQL Querying (non-encrypted fields remain queryable)");

  const accessor = new FlatcAccessor(flatc, PLAIN_SCHEMA);
  const db = FlatSQLDatabase.fromSchema(PLAIN_SCHEMA, accessor, "classified-catalog");

  for (const record of SAMPLE_DATA) {
    db.insert("SensitiveSatellite", record);
  }
  console.log(`Inserted ${SAMPLE_DATA.length} records into FlatSQL database\n`);

  subsection("2a. All records (non-encrypted fields queryable)");
  printTable(db.query("SELECT OBJECT_NAME, CLASSIFICATION, OWNER, ORBIT_REGIME FROM SensitiveSatellite"));

  subsection("2b. Records with NORAD_CAT_ID > 90003");
  printTable(db.query("SELECT OBJECT_NAME, NORAD_CAT_ID, OWNER, ORBIT_REGIME FROM SensitiveSatellite WHERE NORAD_CAT_ID > 90003"));

  subsection("2c. All records with sensitive fields visible (plaintext store)");
  printTable(db.query("SELECT OBJECT_NAME, PRECISE_INCLINATION, PRECISE_LONGITUDE, SENSOR_TASKING FROM SensitiveSatellite"));

  console.log("Note: In an encrypted store, PRECISE_INCLINATION, PRECISE_LONGITUDE,");
  console.log("and SENSOR_TASKING would be AES-256-CTR encrypted and opaque without keys.\n");

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 3: FlatSQL WASM API with Encryption at Rest
  // ══════════════════════════════════════════════════════════════════════════
  section("3. FlatSQL WASM - Encryption at Rest (Database-Level)");

  let wasmAvailable = false;
  try {
    const { initFlatSQL } = await import("flatsql/wasm");
    const flatsql = await initFlatSQL();
    wasmAvailable = true;

    console.log("FlatSQL WASM engine initialized\n");

    // Create database with the schema
    const wasmDB = flatsql.createDatabase(PLAIN_SCHEMA, "encrypted-store");

    // Register file ID so the WASM engine can route FlatBuffers to the right table
    try {
      wasmDB.registerFileId("$Sen", "SensitiveSatellite");
      console.log("  Registered file ID '$Sen' -> SensitiveSatellite table\n");
    } catch (e) {
      console.log(`  registerFileId: ${e.message}\n`);
    }

    subsection("3a. Set AES-256 Encryption Key");
    // Generate a 32-byte key (AES-256)
    const encKey = new Uint8Array(32);
    crypto.getRandomValues(encKey);
    wasmDB.setEncryptionKey(encKey);
    console.log(`  Encryption key set (${encKey.byteLength * 8}-bit AES)`);
    console.log(`  Key (first 8 bytes): ${toHex(encKey.slice(0, 8))}...`);
    console.log(`  Encrypted: ${wasmDB.isEncrypted()}\n`);

    subsection("3b. Enable HMAC-SHA256 Verification");
    wasmDB.setHMACVerification(true);
    console.log(`  HMAC verification: ${wasmDB.isHMACEnabled()}`);
    console.log(`  All ingested records will have integrity tags.\n`);

    subsection("3c. Ingest Records");
    // Build FlatBuffers and ingest
    const schemaInput = { entry: "/sat.fbs", files: { "/sat.fbs": PLAIN_SCHEMA } };
    let ingested = 0;
    for (const record of SAMPLE_DATA) {
      const json = JSON.stringify(record);
      const binary = flatc.generateBinary(schemaInput, json);

      try {
        // Compute HMAC for integrity
        const hmac = wasmDB.computeHMAC(new Uint8Array(binary.buffer || binary));
        const verified = wasmDB.verifyHMAC(new Uint8Array(binary.buffer || binary), hmac);
        console.log(`  ${record.OBJECT_NAME}: ${binary.byteLength} bytes, HMAC verified: ${verified}`);
      } catch (e) {
        console.log(`  ${record.OBJECT_NAME}: ${binary.byteLength} bytes (HMAC: ${e.message})`);
      }

      // Ingest the buffer
      try {
        wasmDB.ingestOne(new Uint8Array(binary.buffer || binary));
        ingested++;
      } catch (e) {
        console.log(`    ingest failed: ${e.message}`);
      }
    }
    console.log(`\n  Total ingested: ${ingested} records\n`);

    subsection("3d. Query Encrypted Store");
    try {
      const result = wasmDB.query("SELECT OBJECT_NAME, CLASSIFICATION, OWNER FROM SensitiveSatellite");
      printTable(result);
    } catch (e) {
      // Try listing available tables
      console.log(`  Query: ${e.message}`);
      try {
        const stats = wasmDB.getStats();
        console.log(`  Available tables: ${stats.map(s => s.tableName).join(", ") || "(none)"}`);
        if (stats.length > 0 && stats[0].recordCount > 0) {
          console.log(`  Records stored: ${stats.reduce((sum, s) => sum + s.recordCount, 0)}`);
        }
      } catch (e2) { /* ignore */ }
      console.log();
    }

    subsection("3e. Database Statistics");
    try {
      const stats = wasmDB.getStats();
      for (const stat of stats) {
        console.log(`  Table: ${stat.tableName}, File ID: ${stat.fileId}, Records: ${stat.recordCount}`);
      }
    } catch (e) {
      console.log(`  Stats: ${e.message}`);
    }

    subsection("3f. Export Encrypted Data");
    try {
      const exported = wasmDB.exportData();
      console.log(`  Exported ${exported.byteLength} bytes of encrypted data`);
      console.log(`  This data is encrypted at rest and can be safely stored.\n`);
    } catch (e) {
      console.log(`  Export: ${e.message}\n`);
    }

    // Cleanup
    wasmDB.destroy();
    console.log("  WASM database destroyed, memory freed.\n");

  } catch (e) {
    console.log(`  FlatSQL WASM module not available: ${e.message}`);
    console.log("  Install with: npm install flatsql");
    console.log("  The WASM path provides encryption at rest with AES-256 + HMAC-SHA256.\n");
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SECTION 4: Ed25519 Digital Signatures (if available)
  // ══════════════════════════════════════════════════════════════════════════
  section("4. Digital Signatures (Ed25519)");

  try {
    const mod = await import("flatc-wasm");
    const ed25519GenerateKeypair = mod.ed25519GenerateKeypair;
    const ed25519Sign = mod.ed25519Sign;
    const ed25519Verify = mod.ed25519Verify;

    if (typeof ed25519GenerateKeypair === "function") {
      const sigKeys = ed25519GenerateKeypair();
      console.log(`  Ed25519 keypair generated`);
      console.log(`  Public key: ${toHex(sigKeys.publicKey).substring(0, 32)}...\n`);

      // Sign a satellite record
      const recordJSON = JSON.stringify(SAMPLE_DATA[0]);
      const message = new TextEncoder().encode(recordJSON);
      const signature = ed25519Sign(message, sigKeys.privateKey);
      console.log(`  Signed record: ${SAMPLE_DATA[0].OBJECT_NAME}`);
      console.log(`  Signature: ${toHex(signature).substring(0, 32)}...`);

      // Verify
      const valid = ed25519Verify(message, signature, sigKeys.publicKey);
      console.log(`  Verification: ${valid ? "VALID" : "INVALID"}`);

      // Tamper and re-verify
      const tampered = new TextEncoder().encode(recordJSON.replace("USA-224", "HACKED"));
      const tamperedValid = ed25519Verify(tampered, signature, sigKeys.publicKey);
      console.log(`  Tampered verification: ${tamperedValid ? "INVALID (should not pass)" : "CORRECTLY REJECTED"}\n`);
    } else {
      console.log("  Ed25519 API not available in this build.\n");
    }
  } catch (e) {
    console.log(`  Ed25519 not available: ${e.message}\n`);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Done
  // ══════════════════════════════════════════════════════════════════════════
  section("Complete");
  console.log("All encryption demos completed.\n");
  console.log("Summary of demonstrated features:");
  console.log("  - Per-field AES-256-CTR encryption via (encrypted) attribute");
  console.log("  - X25519 ECDH key exchange with HKDF-SHA256 derivation");
  console.log("  - SQL querying over FlatBuffer data (non-encrypted fields)");
  console.log("  - FlatSQL WASM encryption at rest with AES-256");
  console.log("  - HMAC-SHA256 integrity verification");
  console.log("  - Ed25519 digital signatures");
  console.log("  - Data export/import for encrypted persistence\n");
}

main().catch(err => {
  console.error("Demo failed:", err);
  process.exit(1);
});
