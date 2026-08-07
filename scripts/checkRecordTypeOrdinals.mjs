#!/usr/bin/env node
/**
 * ORDINAL FREEZE GUARD -- `union RecordType` (schema/REC/main.fbs)
 *
 * Union member ordinals are WIRE DATA. FlatBuffers writes the member's ordinal
 * into the `Record.value_type` byte of every `$REC` record collection ever
 * serialized -- including the publication trailer appended to every protected
 * module artifact. A reader compiled against a different ordinal assignment
 * decodes a record as the WRONG standard and rejects the buffer as malformed.
 *
 * This has happened three times. The last shift (SDS c1580d4700, 2026-07-08)
 * inserted $PGM into the middle of the union, moved $PNM 113 -> 114, and broke
 * protected-plugin decryption fleet-wide for three weeks: every reader built
 * before that commit read a PNM record as PPE, PPE::Verify failed, and the
 * whole trailer was rejected.
 *
 * THE LAW: union members are APPEND-ONLY, FOREVER.
 *   - never insert a member anywhere but the end
 *   - never reorder members
 *   - never remove a member (deprecate in place: keep the member, mark it
 *     deprecated in the standard's own IDL/description)
 *   - never reuse an ordinal
 *
 * `schema/REC/RECORDTYPE_ORDINALS.json` is the contract. This guard diffs the
 * live union against it and fails the build on any non-append change. An
 * intentional append is recorded with `--update`, which refuses to run when the
 * diff is anything other than an append.
 *
 * Usage:
 *   node scripts/checkRecordTypeOrdinals.mjs            # verify (CI/build/test)
 *   node scripts/checkRecordTypeOrdinals.mjs --update   # record an append
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..");
const SCHEMA_PATH = path.join(REPO_ROOT, "schema", "REC", "main.fbs");
const BASELINE_PATH = path.join(REPO_ROOT, "schema", "REC", "RECORDTYPE_ORDINALS.json");
const UNION_NAME = "RecordType";

/**
 * Parse `union RecordType { ... }` into ordered members with their ordinals.
 * FlatBuffers reserves 0 for the implicit NONE; declared members start at 1 and
 * increment, unless a member carries an explicit `= N` assignment (which then
 * re-bases the sequence, exactly as flatc does).
 */
export function parseUnionOrdinals(source) {
  const match = source.match(new RegExp(`union\\s+${UNION_NAME}\\s*\\{([^}]*)\\}`, "s"));
  if (!match) {
    throw new Error(`union ${UNION_NAME} not found in ${SCHEMA_PATH}`);
  }
  const ordinals = {};
  let next = 1;
  for (const rawEntry of match[1].split(",")) {
    const entry = rawEntry.replace(/\/\/.*$/gm, "").trim();
    if (!entry) continue;
    const member = entry.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(?:=\s*(\d+))?$/);
    if (!member) {
      throw new Error(`unparseable union ${UNION_NAME} member: ${JSON.stringify(entry)}`);
    }
    const [, name, explicit] = member;
    const ordinal = explicit === undefined ? next : Number(explicit);
    if (ordinals[name] !== undefined) {
      throw new Error(`duplicate union ${UNION_NAME} member: ${name}`);
    }
    ordinals[name] = ordinal;
    next = ordinal + 1;
  }
  return ordinals;
}

function compare(baseline, current) {
  const moved = [];
  const removed = [];
  const added = [];
  const baselineMax = Object.values(baseline).reduce((max, value) => Math.max(max, value), 0);

  for (const [name, ordinal] of Object.entries(baseline)) {
    if (current[name] === undefined) {
      removed.push({ name, ordinal });
    } else if (current[name] !== ordinal) {
      moved.push({ name, from: ordinal, to: current[name] });
    }
  }
  for (const [name, ordinal] of Object.entries(current)) {
    if (baseline[name] === undefined) {
      added.push({ name, ordinal, appended: ordinal > baselineMax });
    }
  }
  added.sort((a, b) => a.ordinal - b.ordinal);
  return { moved, removed, added, baselineMax };
}

function report(diff) {
  const lines = [];
  for (const entry of diff.moved) {
    lines.push(
      `  WIRE-BREAKING: union member ${entry.name} MOVED ${entry.from} -> ${entry.to}. ` +
        `Every $REC ever written with ${entry.name} at ${entry.from} now decodes as the ` +
        `wrong standard.`,
    );
  }
  for (const entry of diff.removed) {
    lines.push(
      `  WIRE-BREAKING: union member ${entry.name} (ordinal ${entry.ordinal}) was REMOVED. ` +
        `Ordinals are never freed. Deprecate in place instead: keep the member and mark ` +
        `the standard deprecated.`,
    );
  }
  for (const entry of diff.added.filter((candidate) => !candidate.appended)) {
    lines.push(
      `  WIRE-BREAKING: union member ${entry.name} was INSERTED at ordinal ${entry.ordinal}, ` +
        `inside the frozen range 1..${diff.baselineMax}. New members go at the END of the ` +
        `union, never in the middle -- an insertion shifts every member after it.`,
    );
  }
  return lines;
}

async function main() {
  const update = process.argv.includes("--update");
  const [schemaSource, baselineSource] = await Promise.all([
    fs.readFile(SCHEMA_PATH, "utf8"),
    fs.readFile(BASELINE_PATH, "utf8").catch((error) => {
      if (error.code === "ENOENT") return null;
      throw error;
    }),
  ]);

  const current = parseUnionOrdinals(schemaSource);

  if (baselineSource === null) {
    if (!update) {
      throw new Error(
        `ordinal baseline missing: ${path.relative(REPO_ROOT, BASELINE_PATH)}. ` +
          `Run: node scripts/checkRecordTypeOrdinals.mjs --update`,
      );
    }
    await writeBaseline(current, []);
    console.log(`Recorded new ${UNION_NAME} ordinal baseline (${Object.keys(current).length} members).`);
    return;
  }

  const baselineDoc = JSON.parse(baselineSource);
  const baseline = baselineDoc.ordinals ?? {};
  const diff = compare(baseline, current);
  const violations = report(diff);

  if (violations.length > 0) {
    console.error(
      `\nORDINAL FREEZE VIOLATION -- union ${UNION_NAME} is append-only and wire-frozen.\n`,
    );
    for (const line of violations) console.error(line);
    console.error(
      `\nContract: ${path.relative(REPO_ROOT, BASELINE_PATH)}\n` +
        `Schema:   ${path.relative(REPO_ROOT, SCHEMA_PATH)}\n` +
        `Fix the schema so existing members keep their ordinals. A member may only be ` +
        `APPENDED after ordinal ${diff.baselineMax}. There is no --force.\n`,
    );
    process.exitCode = 1;
    return;
  }

  if (diff.added.length === 0) {
    console.log(`${UNION_NAME} ordinals unchanged (${Object.keys(current).length} members, frozen 1..${diff.baselineMax}).`);
    return;
  }

  const appended = diff.added.map((entry) => `${entry.name}=${entry.ordinal}`);
  if (!update) {
    console.error(
      `\n${UNION_NAME} appended ${diff.added.length} member(s) not in the contract: ` +
        `${appended.join(", ")}\n` +
        `The append is legal, but the contract must record it. Run:\n` +
        `  node scripts/checkRecordTypeOrdinals.mjs --update\n`,
    );
    process.exitCode = 1;
    return;
  }

  await writeBaseline(current, baselineDoc.history ?? []);
  console.log(`Recorded appended ${UNION_NAME} members: ${appended.join(", ")}.`);
}

async function writeBaseline(ordinals, history) {
  const sorted = Object.entries(ordinals).sort((a, b) => a[1] - b[1]);
  const doc = {
    $comment:
      "WIRE CONTRACT -- DO NOT HAND-EDIT. Ordinals of union RecordType (schema/REC/main.fbs) " +
      "are written into the Record.value_type byte of every $REC ever serialized. They are " +
      "APPEND-ONLY FOREVER: never insert, never reorder, never remove, never reuse. Append a " +
      "new member at the end of the union, then run: node scripts/checkRecordTypeOrdinals.mjs --update",
    union: UNION_NAME,
    source: "schema/REC/main.fbs",
    note: "Ordinal 0 is the implicit FlatBuffers union NONE and is not listed.",
    frozen_through: sorted.length > 0 ? sorted[sorted.length - 1][1] : 0,
    member_count: sorted.length,
    history,
    ordinals: Object.fromEntries(sorted),
  };
  await fs.writeFile(BASELINE_PATH, `${JSON.stringify(doc, null, 2)}\n`, "utf8");
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
