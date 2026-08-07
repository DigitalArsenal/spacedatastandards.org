#!/usr/bin/env node
/**
 * RESERVED SENTINEL-NAME GUARD -- every schema/<CODE>/main.fbs
 *
 * flatc appends an automatic MIN/MAX convenience pair to every generated enum
 * and union. When a schema declares a real member literally named MIN or MAX,
 * the sentinel's generated name collides byte-for-byte with the real member's:
 *
 *   C++    enum cesPoolingKind : int8_t { ..._MAX = 2, ..., ..._MAX = 3 };
 *          -> error: redefinition of enumerator
 *   Swift  static var max = ... / static var max = ...
 *          -> error: invalid redeclaration of 'max'
 *
 * $CES `cesPoolingKind` did exactly this. The generated C++ headers would not
 * compile, so the reader that needed rebuilding onto the moved $REC union
 * ordinals could not be rebuilt at all -- the two defects compounded into a
 * three-week fleet-wide protected-plugin outage.
 *
 * spacedatastandards.org post-processes its own generated C++/Swift to drop the
 * redundant sentinel, but ANY downstream generator that calls flatc directly
 * (e.g. a consumer's own header-generation script) bypasses that repair and
 * resurrects the collision. The only fix that binds every consumer is the IDL
 * itself: MIN and MAX are RESERVED and must never be declared as member names.
 *
 * Use a descriptive member name instead (MAX_POOL, MAXIMUM, UPPER_BOUND, ...).
 *
 * Usage: node scripts/checkReservedEnumNames.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..");
const SCHEMA_DIR = path.join(REPO_ROOT, "schema");

/** flatc synthesises these for every enum and union, in every target language. */
const RESERVED = new Set(["MIN", "MAX"]);

const DECL = /\b(enum|union)\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?::\s*[A-Za-z0-9_]+\s*)?(?:\([^)]*\)\s*)?\{([^}]*)\}/g;

export function findReservedMembers(source, label) {
  const findings = [];
  for (const declaration of source.matchAll(DECL)) {
    const [, kind, typeName, body] = declaration;
    const lineOffset = source.slice(0, declaration.index).split("\n").length;
    const bodyLines = body.split("\n");
    bodyLines.forEach((rawLine, index) => {
      const line = rawLine.replace(/\/\/.*$/, "");
      for (const rawEntry of line.split(",")) {
        const entry = rawEntry.trim();
        if (!entry) continue;
        const member = entry.match(/^([A-Za-z_][A-Za-z0-9_]*)/);
        if (!member) continue;
        if (RESERVED.has(member[1].toUpperCase())) {
          findings.push({
            label,
            kind,
            typeName,
            member: member[1],
            line: lineOffset + index,
          });
        }
      }
    });
  }
  return findings;
}

async function main() {
  const entries = await fs.readdir(SCHEMA_DIR, { withFileTypes: true });
  const findings = [];
  let scanned = 0;

  for (const entry of entries.filter((candidate) => candidate.isDirectory())) {
    const schemaPath = path.join(SCHEMA_DIR, entry.name, "main.fbs");
    const source = await fs.readFile(schemaPath, "utf8").catch((error) => {
      if (error.code === "ENOENT") return null;
      throw error;
    });
    if (source === null) continue;
    scanned += 1;
    findings.push(...findReservedMembers(source, `schema/${entry.name}/main.fbs`));
  }

  if (findings.length > 0) {
    console.error(`\nRESERVED SENTINEL-NAME VIOLATION -- flatc owns MIN and MAX.\n`);
    for (const finding of findings) {
      console.error(
        `  ${finding.label}:${finding.line} ${finding.kind} ${finding.typeName} declares ` +
          `member "${finding.member}", which collides with the MIN/MAX sentinel flatc ` +
          `appends to every ${finding.kind}. The generated C++ and Swift will not compile, ` +
          `for this repo AND for every downstream generator that calls flatc directly.`,
      );
    }
    console.error(
      `\nRename the member to something descriptive (MAX_POOL, MAXIMUM, UPPER_BOUND). ` +
        `Keep its ordinal: the value is wire data, the name is not.\n`,
    );
    process.exitCode = 1;
    return;
  }

  console.log(`No reserved MIN/MAX member names in ${scanned} schemas.`);
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
