#!/usr/bin/env node
/**
 * PUBLISHED-EPM CONFORMANCE CHECKER — literal-key publication profile
 * (owner ruling 2026-08-19; task sds-epm-literal-key-publication-profile).
 *
 * The publication profile is SELF-DESCRIBING — no version marker. A published
 * EPM is conformant when every CryptoKey in KEYS[] carries a hex-decodable
 * PUBLIC_KEY whose byte length matches its curve, and carries NO private /
 * operational derivation material (XPUB, KEY_PATH, KEY_ADDRESS, XPRIV,
 * PRIVATE_KEY). Requiredness is ASSERTED HERE, never a flatc `(required)`
 * attribute, so that pre-flip secp256k1 records without PUBLIC_KEY still
 * decode in the flatbuffers Verifier.
 *
 * WHAT THIS CHECKS (per Themis ruling):
 *   Per KEYS[] entry:
 *     - PUBLIC_KEY present, hex-decodable, byte length matches curve:
 *         ed25519 → 32 bytes; secp256k1 → 33 (compressed) or 65 (uncompressed)
 *         ALGORITHM absent → ed25519 default (32 bytes)
 *     - XPUB, KEY_PATH, KEY_ADDRESS, XPRIV, PRIVATE_KEY all empty/absent
 *     - KEY_TYPE present (enum name: "Signing" or "Encryption")
 *   Record-level:
 *     - SIGNATURE present (hex)
 *     - SIGNATURE_TIMESTAMP nonzero
 *     - JSON mirror keys are UPPER_SNAKE_CASE (IDL-exact)
 *     - KEYS[] in canonical order: (KEY_TYPE name, ALGORITHM, PUBLIC_KEY)
 *
 * This does NOT verify the signature (that is the verifier's job, and needs the
 * preimage). It asserts the SHAPE a published record must have so that a
 * verifier built for the literal-key profile can actually verify it.
 *
 * Usage:
 *   node scripts/check-epm-published-profile.mjs <file.json>   # check one record
 *   node scripts/check-epm-published-profile.mjs --dir <dir>   # check all *.epm.json
 *   node scripts/check-epm-published-profile.mjs --self        # self-test
 *
 * Exit code: 0 = conformant, 1 = violations found.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

// ── profile rules ──────────────────────────────────────────────────────────

const PRIVATE_FIELDS = ["XPUB", "KEY_PATH", "KEY_ADDRESS", "XPRIV", "PRIVATE_KEY"];

const CURVE_BYTES = {
  ed25519: [32],
  secp256k1: [33, 65],
};

/** Absent or empty-after-trim → the field is not published. */
const absent = (v) => v == null || String(v).trim() === "";

/** Hex-decodable → returns the byte length, or -1. */
function hexByteLen(v) {
  const s = String(v ?? "").trim();
  if (!/^[0-9a-fA-F]+$/.test(s) || s.length % 2 !== 0) return -1;
  return s.length / 2;
}

/**
 * Assert the literal-key publication profile against one EPM record (the
 * IDL-exact JSON mirror shape: UPPER_SNAKE keys).
 * @returns {{ ok: boolean, violations: string[] }}
 */
export function checkPublishedEPM(record) {
  const violations = [];

  if (!record || typeof record !== "object") {
    return { ok: false, violations: ["record is not an object"] };
  }

  // Record-level: SIGNATURE + SIGNATURE_TIMESTAMP
  if (absent(record.SIGNATURE)) {
    violations.push("SIGNATURE is absent (a published EPM must be signed)");
  }
  if (!Number.isInteger(record.SIGNATURE_TIMESTAMP) || record.SIGNATURE_TIMESTAMP === 0) {
    violations.push("SIGNATURE_TIMESTAMP is absent or zero");
  }

  const keys = Array.isArray(record.KEYS) ? record.KEYS : [];
  if (keys.length === 0) {
    violations.push("KEYS[] is empty (a published EPM must carry at least one key)");
  }

  // JSON mirror key casing: UPPER_SNAKE_CASE (IDL-exact). A lowercase or
  // camelCase key is a non-canonical mirror — the JCS preimage would sort it
  // differently and the signature would not re-verify.
  for (const topKey of Object.keys(record)) {
    if (!/^[A-Z][A-Z0-9_]*$/.test(topKey)) {
      violations.push(`non-IDL key casing: "${topKey}" (expected UPPER_SNAKE_CASE)`);
    }
  }

  // Per-key checks
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const ctx = `KEYS[${i}]`;

    if (!key || typeof key !== "object") {
      violations.push(`${ctx} is not an object`);
      continue;
    }

    // Mirror-key casing inside CryptoKey too
    for (const k of Object.keys(key)) {
      if (!/^[A-Z][A-Z0-9_]*$/.test(k)) {
        violations.push(`${ctx} non-IDL key casing: "${k}"`);
      }
    }

    // KEY_TYPE present
    const keyType = key.KEY_TYPE;
    if (keyType !== "Signing" && keyType !== "Encryption") {
      violations.push(`${ctx} KEY_TYPE must be "Signing" or "Encryption", got ${JSON.stringify(keyType)}`);
    }

    // PRIVATE / operational fields must be absent
    for (const field of PRIVATE_FIELDS) {
      if (!absent(key[field])) {
        violations.push(`${ctx} ${field} is present (private/operational — must be absent from a published record)`);
      }
    }

    // PUBLIC_KEY present, hex, curve-matched
    if (absent(key.PUBLIC_KEY)) {
      violations.push(`${ctx} PUBLIC_KEY is absent (required in a published record)`);
    } else {
      const blen = hexByteLen(key.PUBLIC_KEY);
      if (blen < 0) {
        violations.push(`${ctx} PUBLIC_KEY is not hex-decodable`);
      } else {
        const curve = absent(key.ALGORITHM) ? "ed25519" : String(key.ALGORITHM).trim();
        const allowed = CURVE_BYTES[curve];
        if (!allowed) {
          violations.push(`${ctx} ALGORITHM "${curve}" is not a recognized curve (ed25519 | secp256k1)`);
        } else if (!allowed.includes(blen)) {
          violations.push(
            `${ctx} PUBLIC_KEY is ${blen} bytes; ${curve} expects ${allowed.join(" or ")}`
          );
        }
      }
    }
  }

  // Canonical KEYS[] order: (KEY_TYPE name, ALGORITHM, PUBLIC_KEY).
  // ALGORITHM sorts before PUBLIC_KEY because absent ALGORITHM (ed25519 default)
  // compares as the empty string and must precede any named curve.
  for (let i = 1; i < keys.length; i += 1) {
    const a = sortTuple(keys[i - 1]);
    const b = sortTuple(keys[i]);
    if (a > b) {
      violations.push(
        `KEYS[] is not in canonical order at index ${i}: (${a}) should precede (${b})`
      );
      break; // one order violation is enough to name
    }
  }

  return { ok: violations.length === 0, violations };
}

/** The canonical sort tuple for a CryptoKey, as a comparable string. */
function sortTuple(key) {
  const kt = String(key?.KEY_TYPE ?? "").trim();
  const alg = String(key?.ALGORITHM ?? "").trim();
  const pk = String(key?.PUBLIC_KEY ?? "").trim().toLowerCase();
  return `${kt}\0${alg}\0${pk}`;
}

// ── CLI ─────────────────────────────────────────────────────────────────────

async function checkFile(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  let record;
  try {
    record = JSON.parse(raw);
  } catch (e) {
    return { ok: false, violations: [`not valid JSON: ${e.message}`] };
  }
  return checkPublishedEPM(record);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--self")) {
    return selfTest();
  }

  let files = [];
  if (args.includes("--dir")) {
    const dir = args[args.indexOf("--dir") + 1];
    const entries = await fs.readdir(dir);
    files = entries.filter((f) => f.endsWith(".epm.json")).map((f) => path.join(dir, f));
  } else {
    files = args.filter((a) => !a.startsWith("-"));
  }

  if (files.length === 0) {
    console.error("usage: check-epm-published-profile.mjs <file.json> | --dir <dir> | --self");
    process.exit(2);
  }

  let allOk = true;
  for (const file of files) {
    const { ok, violations } = await checkFile(file);
    if (ok) {
      console.log(`  ok  ${file}`);
    } else {
      allOk = false;
      console.error(`FAIL  ${file}`);
      for (const v of violations) console.error(`      · ${v}`);
    }
  }
  process.exit(allOk ? 0 : 1);
}

// ── self-test ───────────────────────────────────────────────────────────────

function selfTest() {
  const cases = [
    {
      name: "conformant ed25519 + secp signing key",
      record: {
        DN: "test-node",
        KEYS: [
          { KEY_TYPE: "Encryption", PUBLIC_KEY: "b".repeat(66), ALGORITHM: "secp256k1" },
          { KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64), ALGORITHM: "ed25519" },
        ],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: true,
    },
    {
      name: "XPUB present (violation)",
      record: {
        KEYS: [{ KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64), XPUB: "tpub..." }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
    {
      name: "PUBLIC_KEY absent (violation)",
      record: {
        KEYS: [{ KEY_TYPE: "Signing", XPUB: "tpub..." }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
    {
      name: "ed25519 key with 33 bytes (wrong length)",
      record: {
        KEYS: [{ KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(66), ALGORITHM: "ed25519" }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
    {
      name: "KEY_PATH present (violation)",
      record: {
        KEYS: [{ KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64), KEY_PATH: "m/44'/0'/0'/0/0" }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
    {
      name: "absent ALGORITHM defaults to ed25519 (32 bytes ok)",
      record: {
        KEYS: [{ KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64) }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: true,
    },
    {
      name: "non-canonical KEYS order (Signing/secp before Signing/ed25519)",
      record: {
        KEYS: [
          { KEY_TYPE: "Signing", PUBLIC_KEY: "b".repeat(64), ALGORITHM: "ed25519" },
          { KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64), ALGORITHM: "ed25519" },
        ],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
    {
      name: "lowercase mirror key (violation)",
      record: {
        keys: [{ KEY_TYPE: "Signing", PUBLIC_KEY: "a".repeat(64) }],
        SIGNATURE: "deadbeef",
        SIGNATURE_TIMESTAMP: 1700000000,
      },
      expectOk: false,
    },
  ];

  let pass = 0;
  for (const c of cases) {
    const { ok, violations } = checkPublishedEPM(c.record);
    if (ok === c.expectOk) {
      pass += 1;
      console.log(`  ok  ${c.name}`);
    } else {
      console.error(`FAIL  ${c.name}: expected ${c.expectOk}, got ${ok}`);
      for (const v of violations) console.error(`      · ${v}`);
    }
  }
  console.log(`\n${pass}/${cases.length} self-tests passed`);
  process.exit(pass === cases.length ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
