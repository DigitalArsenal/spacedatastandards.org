import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

describe("TBS terrestrial base station site schema", () => {
  it("cannot encode a site without provenance and a consensus rule", async () => {
    const source = await readFile("schema/TBS/main.fbs", "utf8");

    assert.match(source, /table TBS\s*\{/);
    assert.match(source, /file_identifier\s+"\$TBS";/);
    assert.match(source, /root_type TBS;/);

    assert.match(source, /ID:string \(required\);/);
    assert.match(source, /RADIO:tbsRadioClass = UNKNOWN;/);
    assert.match(source, /MCC:uint;/);
    assert.match(source, /MNC:uint;/);
    assert.match(source, /LAC:uint;/);
    assert.match(source, /TAC:uint;/);
    assert.match(source, /CELL_ID:string;/);
    assert.match(source, /LATITUDE:double;/);
    assert.match(source, /LONGITUDE:double;/);
    assert.match(source, /RANGE_M:double;/);
    assert.match(source, /SAMPLES:uint;/);
    assert.match(source, /AVERAGE_SIGNAL_DBM:double;/);
    assert.match(source, /FREQUENCY_MHZ:double;/);
    assert.match(source, /SOURCES:\[TBSProvenance\] \(required\);/);
    assert.match(source, /CONSENSUS:TBSConsensus \(required\);/);

    assert.match(source, /table TBSProvenance\s*\{/);
    assert.match(source, /PROVIDER_ID:string \(required\);/);
    assert.match(source, /RETRIEVED_AT:string \(required\);/);
    assert.match(source, /LICENSE:string \(required\);/);
    assert.match(source, /NON_COMMERCIAL_ONLY:bool = false;/);
    assert.match(source, /CONTRIBUTED:bool = false;/);

    assert.match(source, /table TBSConsensus\s*\{/);
    assert.match(source, /METHOD:tbsMergeMethod = UNSPECIFIED;/);
    assert.match(source, /PROVIDERS_CONSULTED:uint;/);
    assert.match(source, /PROVIDERS_AGREEING:uint;/);
    assert.match(source, /POSITION_SPREAD_M:double;/);
  });

  it("keeps the enum ordinal-0 hazards defaulted away", async () => {
    const source = await readFile("schema/TBS/main.fbs", "utf8");

    const radio = source.match(/enum tbsRadioClass : byte \{([\s\S]*?)\}/);
    const merge = source.match(/enum tbsMergeMethod : byte \{([\s\S]*?)\}/);
    assert.ok(radio && merge);

    const members = (block) =>
      block
        .replace(/^\s*\/\/\/.*$/gm, "")
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);

    assert.deepEqual(members(radio[1]), [
      "GSM",
      "CDMA",
      "UMTS",
      "LTE",
      "NR",
      "OTHER",
      "UNKNOWN",
    ]);
    assert.deepEqual(members(merge[1]), [
      "SINGLE_SOURCE",
      "HIGHEST_SAMPLE_COUNT",
      "MOST_RECENT",
      "AUTHORITY_PRECEDENCE",
      "CENTROID",
      "UNSPECIFIED",
    ]);
  });

  it("names no provider, vendor, or site in its descriptions", async () => {
    const source = await readFile("schema/TBS/main.fbs", "utf8");
    const comments = source
      .split("\n")
      .filter((line) => line.trim().startsWith("///"))
      .join("\n");

    for (const banned of [
      "OpenCelliD",
      "Mozilla",
      "UnwiredLabs",
      "Google",
      "Apple",
      "Skyhook",
      "combain",
      "opencellid",
      "wigle",
    ]) {
      assert.ok(
        !new RegExp(banned, "i").test(comments),
        `TBS descriptions must name no provider (found ${banned})`
      );
    }
  });

  it("holds RecordType ordinal 203 in the frozen contract", async () => {
    const ordinals = JSON.parse(
      await readFile("schema/REC/RECORDTYPE_ORDINALS.json", "utf8")
    );
    const frozen = ordinals.ordinals ?? ordinals;
    assert.equal(frozen.TBS, 203);
    assert.equal(frozen.CMR, 202);
  });

  it("generates bindings and an augmented JSON schema", async () => {
    const [ts, go, cpp, jsonSchema] = await Promise.all([
      readFile("lib/ts/TBS/TBS.ts", "utf8"),
      readFile("lib/go/TBS/TBS.go", "utf8"),
      readFile("lib/cpp/TBS/main_generated.h", "utf8"),
      readFile("lib/fbjson/TBS/main.fb.schema.json", "utf8"),
    ]);

    assert.match(ts, /class TBS\b/);
    assert.match(go, /type TBS struct/);
    assert.match(cpp, /struct TBS FLATBUFFERS_FINAL_CLASS/);

    const schema = JSON.parse(jsonSchema);
    assert.equal(schema["x-flatbuffer-root-type"], "TBS");
    assert.ok(schema.definitions.TBS.properties.CELL_ID);
    assert.ok(schema.definitions.TBS.properties.SOURCES);
    assert.ok(schema.definitions.TBS.properties.CONSENSUS);
  });
});
