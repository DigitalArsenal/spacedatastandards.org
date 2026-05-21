import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readSchema(code) {
  const schemaPath = path.join(repoRoot, "schema", code, "main.fbs");
  try {
    return await fs.readFile(schemaPath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      assert.fail(`schema/${code}/main.fbs should exist`);
    }
    throw error;
  }
}

describe("reentry, launch-ascent, and hypersonics schemas", () => {
  it("defines HFC, REM, and LAM without reusing the HYP Hypothesis Message", async () => {
    const expectedSchemas = [
      {
        code: "HFC",
        table: "Hypersonic Flight Conditions",
        root: "HFC",
        identifier: "$HFC",
      },
      {
        code: "REM",
        table: "Reentry Evaluation Message",
        root: "REM",
        identifier: "$REM",
      },
      {
        code: "LAM",
        table: "Launch Ascent Message",
        root: "LAM",
        identifier: "$LAM",
      },
    ];

    const schemaSources = new Map();
    for (const schema of expectedSchemas) {
      const source = await readSchema(schema.code);
      schemaSources.set(schema.code, source);
      assert.match(source, new RegExp(`table\\s+${schema.root}\\b`));
      assert.match(source, new RegExp(`root_type\\s+${schema.root};`));
      assert.match(
        source,
        new RegExp(`file_identifier\\s+"\\$${schema.code}";`),
      );
      assert.match(source, new RegExp(schema.table.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    }

    for (const [code, source] of schemaSources) {
      assert.doesNotMatch(
        source,
        /include\s+"..\/HYP\/main\.fbs"|:\s*HYP\b|\[\s*HYP\s*\]/,
        `${code} must not reuse the SDS HYP Hypothesis Message for hypersonics`,
      );
    }
  });
});
