import { promises as fs } from "node:fs";
import path from "node:path";

import { fileURLToPath } from "node:url";

import { SCHEMA_DIR, listSchemaDirectories } from "./schemaGraph.mjs";

/**
 * A FlatBuffers union's type tag is one byte (flatc BASE_TYPE_UTYPE, uint8 in
 * every language), so union RecordType holds at most 255 members (0 is
 * NONE). Standards past that are numbered in enum RecordTypeExtended (ushort,
 * 256..65535) and carried in Record.EXTENDED_TYPE + EXTENDED_VALUE.
 */
export const UNION_CAPACITY = 255;
export const EXTENDED_FIRST = 256;
export const EXTENDED_LAST = 65535;

function generateIncludes(schemaNames) {
  return schemaNames.map((schemaName) => `include "../${schemaName}/main.fbs";`);
}

/**
 * The wire-freeze banner is emitted with the union so a regeneration can never
 * drop it. Ordinals are append-only forever; the guard is
 * scripts/checkRecordTypeOrdinals.mjs against schema/REC/RECORDTYPE_ORDINALS.json.
 */
const UNION_BANNER = [
  "/// ORDINAL FREEZE -- APPEND ONLY, FOREVER.",
  "/// A member's position IS its wire value: flatc writes it into the",
  "/// Record.value_type byte of every $REC ever serialized, including the",
  "/// publication trailer of every protected module artifact. Inserting,",
  "/// reordering or removing a member silently re-points every record ever",
  "/// written at the wrong standard. This has already happened three times;",
  "/// inserting $PGM mid-union (c1580d4700, 2026-07-08) moved $PNM 113 -> 114",
  "/// and broke protected-plugin decryption fleet-wide for three weeks.",
  "/// New standards are APPENDED at the end. A retired standard is deprecated",
  "/// in place, never deleted -- an ordinal is never reused.",
  "/// Contract: schema/REC/RECORDTYPE_ORDINALS.json",
  "/// Guard:    node scripts/checkRecordTypeOrdinals.mjs",
  "/// Records written before 2026-07-08 are only decodable via Record.standard,",
  "/// which is the sole discriminator that has never shifted.",
];

const EXTENDED_BANNER = [
  "/// WIDE RECORD TYPES -- APPEND ONLY, FOREVER.",
  "/// union RecordType holds at most 255 members (a FlatBuffers union tag is",
  "/// one byte). Every later standard gets an ordinal here, from 256, and its",
  "/// records carry it in Record.EXTENDED_TYPE with the record's own",
  "/// FlatBuffer in Record.EXTENDED_VALUE (Record.value stays NONE).",
  "/// Contract: schema/REC/RECORDTYPE_ORDINALS.json (extended_ordinals)",
  "/// Guard:    node scripts/checkRecordTypeOrdinals.mjs",
];

function generateExtended(entries) {
  return [
    ...EXTENDED_BANNER,
    "enum RecordTypeExtended : ushort {",
    `  NONE = 0${entries.length ? "," : ""}`,
    ...entries.map(([name, ordinal], index) => `  ${name} = ${ordinal}${index === entries.length - 1 ? "" : ","}`),
    "}  // Wide record types",
  ].join("\n");
}

function generateUnion(schemaNames) {
  const rows = [];
  for (let index = 0; index < schemaNames.length; index += 4) {
    rows.push(schemaNames.slice(index, index + 4).join(", "));
  }
  return [
    ...UNION_BANNER,
    "union RecordType {",
    ...rows.map((row, index) => `  ${row}${index === rows.length - 1 ? "" : ","}`),
    "}  // Union of all record types",
  ].join("\n");
}

function parseRecordUnionSchemaNames(source) {
  const match = source.match(/union\s+RecordType\s*\{([^}]+)\}/s);
  if (!match) {
    return [];
  }
  return match[1]
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
}

export function parseExtendedOrdinals(source) {
  const match = source.match(/enum\s+RecordTypeExtended\s*:\s*ushort\s*\{([^}]*)\}/s);
  const ordinals = {};
  if (!match) return ordinals;
  for (const raw of match[1].split(",")) {
    const entry = raw.replace(/\/\/.*$/gm, "").trim();
    const member = entry.match(/^([A-Z][A-Z0-9]{2})\s*=\s*(\d+)$/);
    if (member) ordinals[member[1]] = Number(member[2]);
  }
  return ordinals;
}

/**
 * Keep every union member and every extended ordinal where it is; fill the
 * union up to UNION_CAPACITY, then number the rest from the next extended
 * ordinal. Standards already in the union never move to the extended list.
 */
export function planRecordTypes(schemaNames, unionMembers, extendedOrdinals) {
  const names = new Set(schemaNames);
  const union = unionMembers.filter((name) => names.has(name));
  const extended = Object.entries(extendedOrdinals)
    .filter(([name]) => names.has(name) && !union.includes(name))
    .sort((a, b) => a[1] - b[1]);
  let next = extended.reduce((max, [, ordinal]) => Math.max(max, ordinal + 1), EXTENDED_FIRST);
  for (const name of schemaNames) {
    if (union.includes(name) || extended.some(([known]) => known === name)) continue;
    if (union.length < UNION_CAPACITY) {
      union.push(name);
    } else {
      if (next > EXTENDED_LAST) throw new Error(`RecordTypeExtended is full at ${EXTENDED_LAST}`);
      extended.push([name, next++]);
    }
  }
  return { union, extended };
}

function stableRecordUnionOrder(schemaNames, original) {
  const schemaNameSet = new Set(schemaNames);
  const ordered = [];
  for (const schemaName of parseRecordUnionSchemaNames(original)) {
    if (schemaNameSet.has(schemaName) && !ordered.includes(schemaName)) {
      ordered.push(schemaName);
    }
  }
  const appended = schemaNames.filter((schemaName) => !ordered.includes(schemaName));
  return [...ordered, ...appended];
}

function replaceSection(source, pattern, replacement) {
  return source.replace(pattern, replacement);
}

async function main() {
  const schemaNames = await listSchemaDirectories({ skip: ["REC"] });
  const recPath = path.join(SCHEMA_DIR, "REC", "main.fbs");
  const original = await fs.readFile(recPath, "utf8");
  const includes = generateIncludes(schemaNames).join("\n");
  const plan = planRecordTypes(
    schemaNames,
    stableRecordUnionOrder(schemaNames, original).filter((name) => parseRecordUnionSchemaNames(original).includes(name)),
    parseExtendedOrdinals(original),
  );
  const recordUnionOrder = plan.union;
  const union = generateUnion(recordUnionOrder);
  const extended = generateExtended(plan.extended);

  let updated = replaceSection(
    original,
    /(\/\/ -----------------------------------END_HEADER\n)(.*?)(?=\n(?:\/\/\/[^\n]*\n)*union RecordType\s*\{)/s,
    `$1${includes}\n`,
  );
  updated = replaceSection(
    updated,
    /(?:\/\/\/[^\n]*\n)*union\s+RecordType\s*\{[^}]+\}\s*\/\/\s*Union of all record types/s,
    union,
  );
  const extendedPattern = /(?:\/\/\/[^\n]*\n)*enum\s+RecordTypeExtended\s*:\s*ushort\s*\{[^}]*\}\s*\/\/\s*Wide record types/s;
  updated = extendedPattern.test(updated)
    ? replaceSection(updated, extendedPattern, extended)
    : updated.replace(/(\}\s*\/\/\s*Union of all record types)/, `$1\n\n${extended}`);

  if (updated !== original) {
    await fs.writeFile(recPath, updated, "utf8");
  }
  console.log(`Updated REC union with ${recordUnionOrder.length} schema types` +
    `${plan.extended.length ? ` and ${plan.extended.length} wide record types` : ""}.`);
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
