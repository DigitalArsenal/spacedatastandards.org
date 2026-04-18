import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("MBL schema generation", () => {
  it("defines the SDS MBL schema and generated bindings", async () => {
    const schemaPath = path.join(repoRoot, "schema", "MBL", "main.fbs");
    const recSchemaPath = path.join(repoRoot, "schema", "REC", "main.fbs");
    const tsMainPath = path.join(repoRoot, "lib", "ts", "MBL", "main.ts");
    const tsEntryPath = path.join(
      repoRoot,
      "lib",
      "ts",
      "MBL",
      "ModuleBundleEntry.ts",
    );
    const jsMainPath = path.join(repoRoot, "lib", "js", "MBL", "main.js");
    const recTsMainPath = path.join(repoRoot, "lib", "ts", "REC", "main.ts");
    const recJsMainPath = path.join(repoRoot, "lib", "js", "REC", "main.js");
    const recTsRecordTypePath = path.join(
      repoRoot,
      "lib",
      "ts",
      "REC",
      "RecordType.ts",
    );
    const recJsRecordTypePath = path.join(
      repoRoot,
      "lib",
      "js",
      "REC",
      "RecordType.js",
    );
    const jsonPath = path.join(repoRoot, "lib", "json", "MBL", "main.schema.json");
    const fbjsonPath = path.join(
      repoRoot,
      "lib",
      "fbjson",
      "MBL",
      "main.fb.schema.json",
    );

    const [
      schemaSource,
      recSource,
      tsMainSource,
      tsEntrySource,
      jsMainSource,
      recTsMainSource,
      recJsMainSource,
      recTsRecordTypeSource,
      recJsRecordTypeSource,
    ] = await Promise.all([
      fs.readFile(schemaPath, "utf8"),
      fs.readFile(recSchemaPath, "utf8"),
      fs.readFile(tsMainPath, "utf8"),
      fs.readFile(tsEntryPath, "utf8"),
      fs.readFile(jsMainPath, "utf8"),
      fs.readFile(recTsMainPath, "utf8"),
      fs.readFile(recJsMainPath, "utf8"),
      fs.readFile(recTsRecordTypePath, "utf8"),
      fs.readFile(recJsRecordTypePath, "utf8"),
    ]);

    await Promise.all([fs.access(jsonPath), fs.access(fbjsonPath)]);

    for (const token of [
      "table CanonicalizationRule",
      "enum ModuleBundleEntryRole",
      "enum ModulePayloadEncoding",
      "table ModuleBundleEntry",
      "type_ref: string",
      "table MBL",
      'root_type MBL;',
      'file_identifier "$MBL";',
    ]) {
      assert.match(
        schemaSource,
        new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
      );
    }

    assert.match(recSource, /include "\.\.\/MBL\/main\.fbs";/);
    assert.match(recSource, /\bMBL\b/);
    assert.match(tsMainSource, /\bMBL\b/);
    assert.match(tsEntrySource, /\btype_ref\b/);
    assert.match(jsMainSource, /\bMBL\b/);
    assert.match(recTsMainSource, /export \* from '\.\/MBL\.js';/);
    assert.match(recJsMainSource, /export \* from '\.\/MBL\.js';/);
    assert.match(recTsRecordTypeSource, /\bimport \{ MBL, MBLT \} from '\.\/MBL\.js';/);
    assert.match(recJsRecordTypeSource, /\bimport \{ MBL \} from '\.\/MBL\.js';/);
    assert.match(recTsRecordTypeSource, /\bMBL\s*=\s*\d+\b/);
    assert.match(recJsRecordTypeSource, /\bRecordType\["MBL"\]\s*=\s*\d+\b/);
  });
});
