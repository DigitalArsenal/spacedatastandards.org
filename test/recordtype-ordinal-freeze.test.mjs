import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseUnionOrdinals } from "../scripts/checkRecordTypeOrdinals.mjs";
import { findReservedMembers } from "../scripts/checkReservedEnumNames.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTRACT = JSON.parse(
  readFileSync(path.join(REPO_ROOT, "schema", "REC", "RECORDTYPE_ORDINALS.json"), "utf8"),
);
const REC_SCHEMA = readFileSync(path.join(REPO_ROOT, "schema", "REC", "main.fbs"), "utf8");

function runGuard(script) {
  try {
    execFileSync(process.execPath, [path.join(REPO_ROOT, "scripts", script)], {
      cwd: REPO_ROOT,
      stdio: "pipe",
    });
    return { ok: true, output: "" };
  } catch (error) {
    return { ok: false, output: `${error.stdout ?? ""}${error.stderr ?? ""}` };
  }
}

describe("RecordType union ordinal freeze", () => {
  it("the live union matches the committed wire contract", () => {
    assert.deepEqual(parseUnionOrdinals(REC_SCHEMA), CONTRACT.ordinals);
  });

  it("the guard passes on the committed schema", () => {
    assert.equal(runGuard("checkRecordTypeOrdinals.mjs").ok, true);
  });

  it("pins the ordinals recovered from deployed artifacts", () => {
    // Forensic anchors from the 2026-08-07 protected-plugin outage. If any of
    // these three change, every $REC ever written is being re-pointed.
    assert.equal(CONTRACT.ordinals.ENC, 39);
    assert.equal(CONTRACT.ordinals.MBL, 80);
    assert.equal(CONTRACT.ordinals.PNM, 114);
  });

  it("ordinals are contiguous from 1 with no reuse", () => {
    const values = Object.values(CONTRACT.ordinals);
    assert.equal(new Set(values).size, values.length, "an ordinal is reused");
    assert.deepEqual(
      [...values].sort((a, b) => a - b),
      values.map((_, index) => index + 1),
    );
  });

  it("detects a mid-union insertion as wire-breaking", () => {
    const shifted = REC_SCHEMA.replace("  PGM, PIV, PLD, PLG,", "  XXX, PGM, PIV, PLD, PLG,");
    assert.notEqual(shifted, REC_SCHEMA);
    const current = parseUnionOrdinals(shifted);
    assert.equal(current.XXX, CONTRACT.ordinals.PGM);
    assert.equal(current.PNM, CONTRACT.ordinals.PNM + 1, "PNM must be seen to move");
  });

  it("detects a removal as wire-breaking", () => {
    const removed = REC_SCHEMA.replace("PGM, PIV,", "PIV,");
    const current = parseUnionOrdinals(removed);
    assert.equal(current.PGM, undefined);
    assert.equal(current.PNM, CONTRACT.ordinals.PNM - 1);
  });

  it("accepts an append without moving anything", () => {
    const appended = REC_SCHEMA.replace("  CNP, CMR\n}", "  CNP, CMR, ZZZ\n}");
    const current = parseUnionOrdinals(appended);
    assert.equal(current.ZZZ, CONTRACT.frozen_through + 1);
    for (const [name, ordinal] of Object.entries(CONTRACT.ordinals)) {
      assert.equal(current[name], ordinal, `${name} moved`);
    }
  });

  it("keeps the freeze banner in the schema", () => {
    assert.match(REC_SCHEMA, /ORDINAL FREEZE -- APPEND ONLY, FOREVER\./);
    assert.match(REC_SCHEMA, /RECORDTYPE_ORDINALS\.json/);
  });
});

describe("flatc reserved sentinel names", () => {
  it("no schema declares an enum or union member named MIN or MAX", () => {
    assert.equal(runGuard("checkReservedEnumNames.mjs").ok, true);
  });

  it("$CES pooling keeps its wire value under a non-colliding name", () => {
    const ces = readFileSync(path.join(REPO_ROOT, "schema", "CES", "main.fbs"), "utf8");
    assert.match(ces, /enum cesPoolingKind : byte \{\s*MEAN,\s*CLS,\s*MAX_POOL,\s*UNKNOWN\s*\}/);
  });

  it("detects a reintroduced MAX member", () => {
    const findings = findReservedMembers("enum k : byte {\n  MEAN,\n  MAX\n}\n", "probe.fbs");
    assert.equal(findings.length, 1);
    assert.equal(findings[0].member, "MAX");
    assert.equal(findings[0].typeName, "k");
  });
});
