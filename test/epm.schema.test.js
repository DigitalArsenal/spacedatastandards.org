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

  it("declares dual-curve signing fields (CryptoKey KEY_PATH/ALGORITHM/ENCODING, EPM SIGNATURE_ALGORITHM) as optional appended fields", async () => {
    const schemaPath = path.join(repoRoot, "schema", "EPM", "main.fbs");
    const keyGoPath = path.join(repoRoot, "lib", "go", "EPM", "CryptoKey.go");
    const keyTsPath = path.join(repoRoot, "lib", "ts", "EPM", "CryptoKey.ts");
    const keyJsPath = path.join(repoRoot, "lib", "js", "EPM", "CryptoKey.js");
    const epmGoPath = path.join(repoRoot, "lib", "go", "EPM", "EPM.go");
    const epmTsPath = path.join(repoRoot, "lib", "ts", "EPM", "EPM.ts");
    const jsonPath = path.join(repoRoot, "lib", "json", "EPM", "main.schema.json");

    const [
      schemaSource,
      keyGoSource,
      keyTsSource,
      keyJsSource,
      epmGoSource,
      epmTsSource,
      jsonSource,
    ] = await Promise.all([
      fs.readFile(schemaPath, "utf8"),
      fs.readFile(keyGoPath, "utf8"),
      fs.readFile(keyTsPath, "utf8"),
      fs.readFile(keyJsPath, "utf8"),
      fs.readFile(epmGoPath, "utf8"),
      fs.readFile(epmTsPath, "utf8"),
      fs.readFile(jsonPath, "utf8"),
    ]);

    // CryptoKey carries the sanctioned derivation-path/algorithm/encoding fields,
    // appended AFTER KEY_TYPE so every pre-field record decodes unchanged.
    assert.match(
      schemaSource,
      /table CryptoKey \{[^}]*KEY_TYPE:\s*KeyType;[^}]*KEY_PATH:\s*string;[^}]*ALGORITHM:\s*string;[^}]*ENCODING:\s*string;[^}]*\}/s
    );
    // EPM declares the signature algorithm, appended AFTER ENTITY_TYPE.
    assert.match(
      schemaSource,
      /table EPM \{[^}]*ENTITY_TYPE:\s*EntityType\s*=\s*User;[^}]*SIGNATURE_ALGORITHM:\s*string;[^}]*\}/s
    );
    // ABSENT means ed25519 — the whole backward-compatibility mechanism — so the
    // fields must never be (required).
    assert.doesNotMatch(schemaSource, /ALGORITHM:\s*string\s*\(required\)/);
    assert.doesNotMatch(schemaSource, /SIGNATURE_ALGORITHM:\s*string\s*\(required\)/);
    // The permanent-by-design asymmetry is stated in the spec text.
    assert.match(schemaSource, /no public derivation/i);

    assert.match(keyGoSource, /\bKEY_PATH\(\)/);
    assert.match(keyGoSource, /\bALGORITHM\(\)/);
    assert.match(keyGoSource, /\bENCODING\(\)/);
    assert.match(keyTsSource, /\bKEY_PATH\(\)/);
    assert.match(keyTsSource, /\baddKeyPath\b/);
    assert.match(keyTsSource, /\baddAlgorithm\b/);
    assert.match(keyTsSource, /\baddEncoding\b/);
    assert.match(keyJsSource, /\bKEY_PATH\(\)/);
    assert.match(keyJsSource, /\baddKeyPath\b/);
    assert.match(epmGoSource, /\bSIGNATURE_ALGORITHM\(\)/);
    assert.match(epmTsSource, /\bSIGNATURE_ALGORITHM\(\)/);
    assert.match(epmTsSource, /\baddSignatureAlgorithm\b/);

    const jsonSchema = JSON.parse(jsonSource);
    const defs = jsonSchema.definitions ?? jsonSchema.$defs ?? {};
    const cryptoKeyDef = defs.CryptoKey ?? defs["EPM_CryptoKey"];
    assert.ok(cryptoKeyDef, "CryptoKey definition missing from JSON schema");
    for (const field of ["KEY_PATH", "ALGORITHM", "ENCODING"]) {
      assert.ok(
        cryptoKeyDef.properties?.[field],
        `CryptoKey.${field} missing from JSON schema`
      );
      assert.ok(
        !(cryptoKeyDef.required ?? []).includes(field),
        `CryptoKey.${field} must stay optional (absent = ed25519 default)`
      );
    }
    const epmDef = defs.EPM ?? defs["EPM_EPM"];
    assert.ok(epmDef, "EPM definition missing from JSON schema");
    assert.ok(
      epmDef.properties?.SIGNATURE_ALGORITHM,
      "EPM.SIGNATURE_ALGORITHM missing from JSON schema"
    );
    assert.ok(
      !(epmDef.required ?? []).includes("SIGNATURE_ALGORITHM"),
      "EPM.SIGNATURE_ALGORITHM must stay optional (absent = ed25519 default)"
    );
  });
});
