import { promises as fs } from "node:fs";
import path from "node:path";

import { SCHEMA_DIR, listSchemaDirectories } from "./schemaGraph.mjs";

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
  const recordUnionOrder = stableRecordUnionOrder(schemaNames, original);
  const union = generateUnion(recordUnionOrder);

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

  if (updated !== original) {
    await fs.writeFile(recPath, updated, "utf8");
  }
  console.log(`Updated REC union with ${recordUnionOrder.length} schema types.`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
