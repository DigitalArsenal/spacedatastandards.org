import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("EPM schema generation", () => {
  it("defines entity type with node and user values across generated bindings", async () => {
    const schemaPath = path.join(repoRoot, "schema", "EPM", "main.fbs");
    const goPath = path.join(repoRoot, "lib", "go", "EPM", "EntityType.go");
    const tsPath = path.join(repoRoot, "lib", "ts", "EPM", "EntityType.ts");
    const jsPath = path.join(repoRoot, "lib", "js", "EPM", "EntityType.js");
    const epmGoPath = path.join(repoRoot, "lib", "go", "EPM", "EPM.go");
    const epmTsPath = path.join(repoRoot, "lib", "ts", "EPM", "EPM.ts");
    const epmJsPath = path.join(repoRoot, "lib", "js", "EPM", "EPM.js");
    const jsonPath = path.join(repoRoot, "lib", "json", "EPM", "main.schema.json");
    const goModPath = path.join(repoRoot, "lib", "go", "go.mod");

    const [
      schemaSource,
      goSource,
      tsSource,
      jsSource,
      epmGoSource,
      epmTsSource,
      epmJsSource,
      jsonSource,
      goModSource,
    ] = await Promise.all([
      fs.readFile(schemaPath, "utf8"),
      fs.readFile(goPath, "utf8"),
      fs.readFile(tsPath, "utf8"),
      fs.readFile(jsPath, "utf8"),
      fs.readFile(epmGoPath, "utf8"),
      fs.readFile(epmTsPath, "utf8"),
      fs.readFile(epmJsPath, "utf8"),
      fs.readFile(jsonPath, "utf8"),
      fs.readFile(goModPath, "utf8"),
    ]);

    assert.match(schemaSource, /enum EntityType\s*:\s*byte\s*\{[^}]*User[^}]*Node/s);
    assert.match(schemaSource, /\bENTITY_TYPE:\s*EntityType\s*=\s*User;/);
    assert.match(goSource, /\bEntityTypeUser\b/);
    assert.match(goSource, /\bEntityTypeNode\b/);
    assert.match(tsSource, /\bUser\s*=\s*0\b/);
    assert.match(tsSource, /\bNode\s*=\s*1\b/);
    assert.match(jsSource, /\bEntityType\["User"\]\s*=\s*0\b/);
    assert.match(jsSource, /\bEntityType\["Node"\]\s*=\s*1\b/);
    assert.match(epmGoSource, /\bENTITY_TYPE\(\)\s+EntityType\b/);
    assert.match(epmGoSource, /\bEPMAddENTITY_TYPE\b/);
    assert.match(epmTsSource, /\bENTITY_TYPE\(\):EntityType\b/);
    assert.match(epmTsSource, /\baddEntityType\b/);
    assert.match(epmJsSource, /\bENTITY_TYPE\(\)/);
    assert.match(epmJsSource, /\baddEntityType\b/);
    assert.match(jsonSource, /"ENTITY_TYPE"/);
    assert.match(goModSource, /github\.com\/google\/flatbuffers v25\.12\.19\+incompatible/);
  });
});
