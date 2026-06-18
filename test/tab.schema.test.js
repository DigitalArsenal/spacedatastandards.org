import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

describe("TAB schema generation", () => {
  it("defines the full FlatBufferTypeRef invoke ABI contract", async () => {
    const schemaSource = await fs.readFile(
      path.join(repoRoot, "schema", "TAB", "main.fbs"),
      "utf8",
    );
    const generatedTs = await fs.readFile(
      path.join(repoRoot, "lib", "ts", "TAB", "FlatBufferTypeRef.ts"),
      "utf8",
    );
    const generatedGo = await fs.readFile(
      path.join(repoRoot, "lib", "go", "TAB", "FlatBufferTypeRef.go"),
      "utf8",
    );

    for (const field of [
      "SCHEMA_HASH",
      "ACCEPTS_ANY_FLATBUFFER",
      "WIRE_FORMAT",
      "FIXED_STRING_LENGTH",
      "BYTE_LENGTH",
      "REQUIRED_ALIGNMENT",
    ]) {
      assert.match(schemaSource, new RegExp(`\\b${field}\\b`));
      assert.match(generatedTs, new RegExp(`\\b${field}\\b`));
      assert.match(generatedGo, new RegExp(`\\b${field}\\b`));
    }

    assert.match(schemaSource, /\bWIRE_FORMAT:payloadWireFormat\b/);
    assert.match(generatedTs, /import \{ payloadWireFormat \}/);
  });
});
