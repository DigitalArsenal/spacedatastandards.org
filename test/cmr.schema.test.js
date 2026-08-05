import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

describe("CMR constellation membership schema", () => {
  it("defines one provenance-backed assertion per NORAD member", async () => {
    const source = await readFile("schema/CMR/main.fbs", "utf8");

    assert.match(source, /table CMR\s*\{/);
    assert.match(source, /file_identifier\s+"\$CMR";/);
    assert.match(source, /NORAD_CAT_ID:uint;/);
    assert.match(source, /CONSTELLATION_ID:string \(required\);/);
    assert.match(source, /CONSTELLATION_ALIASES:\[string\];/);
    assert.match(source, /OPERATOR_ID:string;/);
    assert.match(source, /OPERATOR_ALIASES:\[string\];/);
    assert.match(source, /PROVENANCE:\[CMRProvenance\] \(required\);/);
    assert.match(source, /SOURCE_DATASET:string \(required\);/);
    assert.match(source, /RETRIEVED_AT:string \(required\);/);
    assert.match(source, /MEMBERSHIP,/);
    assert.match(source, /OPERATOR,/);
    assert.match(source, /OBJECT_IDENTITY,/);
    assert.match(source, /BUS_IDENTITY/);
  });

  it("generates bindings and an augmented JSON schema", async () => {
    const [ts, go, cpp, jsonSchema] = await Promise.all([
      readFile("lib/ts/CMR/CMR.ts", "utf8"),
      readFile("lib/go/CMR/CMR.go", "utf8"),
      readFile("lib/cpp/CMR/main_generated.h", "utf8"),
      readFile("lib/fbjson/CMR/main.fb.schema.json", "utf8"),
    ]);

    assert.match(ts, /class CMR\b/);
    assert.match(go, /type CMR struct/);
    assert.match(cpp, /struct CMR FLATBUFFERS_FINAL_CLASS/);

    const schema = JSON.parse(jsonSchema);
    assert.equal(schema["x-flatbuffer-root-type"], "CMR");
    assert.ok(schema.definitions.CMR.properties.NORAD_CAT_ID);
    assert.ok(schema.definitions.CMR.properties.PROVENANCE);
  });
});
