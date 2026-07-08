import { strict as assert } from "node:assert";
import { readdirSync, readFileSync } from "node:fs";

import {
  parseSchemaFieldDefinitions,
  parseSchemaFields,
  resolveSchemaRootDefinitionName,
} from "../website/src/lib/schemaFields.js";

function loadFbJsonSchema(name) {
  return JSON.parse(readFileSync(new URL(`../lib/fbjson/${name}/main.fb.schema.json`, import.meta.url), "utf8"));
}

describe("website schema field explorer", () => {
  it("can resolve the declared FlatBuffers root for every generated fbjson schema", () => {
    const fbjsonDir = new URL("../lib/fbjson/", import.meta.url);
    const standards = readdirSync(fbjsonDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    for (const name of standards) {
      const schema = loadFbJsonSchema(name);
      const rootName = schema["x-flatbuffer-root-type"];

      assert.equal(typeof rootName, "string", `${name} should declare x-flatbuffer-root-type`);
      assert.equal(resolveSchemaRootDefinitionName(schema, name), rootName, `${name} should resolve its declared root`);
      assert.ok(
        parseSchemaFields(schema, name).length > 0,
        `${name} should expose root fields in the Field Explorer`,
      );
    }
  });

  for (const [name, expectedFields] of [
    ["OMM", ["OBJECT_NAME", "NORAD_CAT_ID", "MEAN_MOTION"]],
    ["CAT", ["OBJECT_NAME", "NORAD_CAT_ID", "PAYLOADS"]],
    ["PLG", ["PLUGIN_ID", "NAME", "VERSION"]],
    ["OEM", ["CCSDS_OEM_VERS", "EPHEMERIS_DATA_BLOCK"]],
  ]) {
    it(`resolves ${name} fields from augmented FlatBuffers schema metadata`, () => {
      const schema = loadFbJsonSchema(name);
      assert.equal(resolveSchemaRootDefinitionName(schema, name), name);

      const fieldNames = parseSchemaFields(schema, name).map((field) => field.name);
      for (const expectedField of expectedFields) {
        assert.ok(
          fieldNames.includes(expectedField),
          `${name} should expose ${expectedField} in the Field Explorer`,
        );
      }
    });
  }

  it("keeps CAT table description scoped to the table doc comment", () => {
    const schema = loadFbJsonSchema("CAT");
    const description = schema.definitions?.CAT?.description;

    assert.equal(description, "Catalog Entity Message");
  });

  it("marks referenced field types as Field Explorer link targets", () => {
    const schema = loadFbJsonSchema("SCN");
    const definitions = parseSchemaFieldDefinitions(schema, "SCN");
    const definitionNames = definitions.map((definition) => definition.name);

    assert.equal(definitions[0].name, "SCN");
    assert.ok(definitionNames.includes("SCNReference"));
    assert.ok(definitionNames.includes("OMM"));

    const rootReferences = definitions[0].fields.find((field) => field.name === "REFERENCES");
    assert.equal(rootReferences.type, "[SCNReference]");
    assert.deepEqual(rootReferences.typeParts, [
      { text: "[" },
      { text: "SCNReference", definitionName: "SCNReference" },
      { text: "]" },
    ]);

    const epoch = definitions[0].fields.find((field) => field.name === "EPOCH");
    assert.deepEqual(epoch.typeParts, [{ text: "string" }]);

    const scnReference = definitions.find((definition) => definition.name === "SCNReference");
    const meanElements = scnReference.fields.find((field) => field.name === "MEAN_ELEMENTS");
    assert.equal(meanElements.type, "[OMM]");
    assert.deepEqual(meanElements.typeParts, [
      { text: "[" },
      { text: "OMM", definitionName: "OMM" },
      { text: "]" },
    ]);

    const sitePosition = scnReference.fields.find((field) => field.name === "SITE_POSITION");
    assert.equal(sitePosition.type, "GJNPosition");
    assert.deepEqual(sitePosition.typeParts, [
      { text: "GJNPosition", definitionName: "GJNPosition" },
    ]);
  });
});
