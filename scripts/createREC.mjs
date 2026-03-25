import { promises as fs } from "node:fs";
import path from "node:path";

import { SCHEMA_DIR, listSchemaDirectories } from "./schemaGraph.mjs";

function generateIncludes(schemaNames) {
  return schemaNames.map((schemaName) => `include "../${schemaName}/main.fbs";`);
}

function generateUnion(schemaNames) {
  const rows = [];
  for (let index = 0; index < schemaNames.length; index += 4) {
    rows.push(schemaNames.slice(index, index + 4).join(", "));
  }
  return [
    "union RecordType {",
    ...rows.map((row, index) => `  ${row}${index === rows.length - 1 ? "" : ","}`),
    "}  // Union of all record types",
  ].join("\n");
}

function replaceSection(source, pattern, replacement) {
  return source.replace(pattern, replacement);
}

async function main() {
  const schemaNames = await listSchemaDirectories({ skip: ["REC"] });
  const recPath = path.join(SCHEMA_DIR, "REC", "main.fbs");
  const original = await fs.readFile(recPath, "utf8");
  const includes = generateIncludes(schemaNames).join("\n");
  const union = generateUnion(schemaNames);

  let updated = replaceSection(
    original,
    /(\/\/ -----------------------------------END_HEADER\n)(.*?)(?=\nunion RecordType\s*\{)/s,
    `$1${includes}\n`,
  );
  updated = replaceSection(
    updated,
    /union\s+RecordType\s*\{[^}]+\}\s*\/\/\s*Union of all record types/s,
    union,
  );

  if (updated !== original) {
    await fs.writeFile(recPath, updated, "utf8");
  }
  console.log(`Updated REC union with ${schemaNames.length} schema types.`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});

