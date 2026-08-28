import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";

const TXS_FBS = "schema/TXS/main.fbs";
const STX_FBS = "schema/STX/main.fbs";
const ORDINALS = "schema/REC/RECORDTYPE_ORDINALS.json";

/** Field names declared on one table, in IDL order. */
function fieldsOf(source, table) {
  const body = source.match(
    new RegExp(`table ${table}\\s*\\{([\\s\\S]*?)\\n\\}`)
  );
  assert.ok(body, `table ${table} not found`);
  return [...body[1].matchAll(/^\s{2}([A-Z][A-Z0-9_]*):/gm)].map((m) => m[1]);
}

describe("TXS terrestrial transmitter site schema", () => {
  it("carries the record shape a transmitting facility needs", async () => {
    const source = await readFile(TXS_FBS, "utf8");

    assert.match(source, /table TXS\s*\{/);
    assert.match(source, /root_type TXS;/);
    assert.match(source, /file_identifier\s+"\$TXS";/);

    const fields = fieldsOf(source, "TXS");
    for (const required of [
      "ID",
      "SITE_NAME",
      "STATION_IDENTITY",
      "SERVICE",
      "STATUS",
      "LATITUDE",
      "LONGITUDE",
      "POSITION_AUTHORITY",
      "POSITION_UNCERTAINTY_M",
      "POSITION_DISPUTED",
      "PRIOR_POSITIONS",
      "GROUND_ELEVATION_AMSL_M",
      "STRUCTURE_HEIGHT_AGL_M",
      "STRUCTURE",
      "EMISSIONS",
      "SOURCES",
      "CONSENSUS",
    ]) {
      assert.ok(fields.includes(required), `TXS is missing ${required}`);
    }
  });

  it("cannot be re-serialized unattributed", async () => {
    const source = await readFile(TXS_FBS, "utf8");

    // Provenance and merge rule are both required on the facility record.
    assert.match(source, /SOURCES:\[TXSProvenance\] \(required\);/);
    assert.match(source, /CONSENSUS:TXSConsensus \(required\);/);
    // Licence terms are required PER SOURCE: unstated terms are never a grant.
    assert.match(source, /LICENSE:string \(required\);/);
    assert.match(source, /RETRIEVED_AT:string \(required\);/);
    assert.match(source, /NON_COMMERCIAL_ONLY:bool = false;/);
  });

  it("states position authority as a first-class class, not a confidence", async () => {
    const source = await readFile(TXS_FBS, "utf8");

    // A community assertion and a regulator coordinate are different objects
    // and must be distinguishable on the wire without reading prose.
    assert.match(source, /enum txsPositionAuthorityClass : byte \{/);
    for (const member of [
      "UNSPECIFIED = 0",
      "REGULATOR_PUBLISHED",
      "COORDINATION_FILING",
      "LICENSEE_PUBLISHED",
      "SURVEYED_INDEPENDENT",
      "DERIVED_FROM_IMAGERY",
      "INFERRED_FROM_OBSERVATION",
      "COMMUNITY_ASSERTED",
      "COMMUNITY_ASSERTED_HISTORICAL",
      "UNDISCLOSED",
    ]) {
      assert.ok(
        source.includes(`  ${member}`),
        `txsPositionAuthorityClass is missing ${member}`
      );
    }
    // Corroboration counts are published beside authority, never instead of it.
    assert.match(source, /PROVIDERS_AGREEING:uint;/);
    assert.match(source, /PROVIDERS_DISAGREEING:uint;/);
    assert.match(source, /POSITION_DISPUTED:bool = false;/);
  });

  it("keeps every enum's zero ordinal unreadable as a real value", async () => {
    const source = await readFile(TXS_FBS, "utf8");
    const enums = [...source.matchAll(/enum (txs[A-Za-z]+) : byte \{([\s\S]*?)\n\}/g)];
    assert.ok(enums.length >= 6);
    for (const [, name, body] of enums) {
      const first = body
        .split("\n")
        .map((line) => line.replace(/\/\/.*$/, "").trim())
        .filter(Boolean)[0];
      assert.equal(first, "UNSPECIFIED = 0,", `${name} does not open UNSPECIFIED = 0`);
    }
  });
});

describe("STX scheduled transmission schema", () => {
  it("is one row per transmission window, joined to the facility", async () => {
    const source = await readFile(STX_FBS, "utf8");

    assert.match(source, /table STX\s*\{/);
    assert.match(source, /root_type STX;/);
    assert.match(source, /file_identifier\s+"\$STX";/);

    const fields = fieldsOf(source, "STX");
    for (const required of [
      "ID",
      "SITE_ID",
      "FREQUENCY_KHZ",
      "TIME_START_UTC",
      "TIME_STOP_UTC",
      "DAYS",
      "IRREGULAR",
      "VALID_FROM",
      "VALID_UNTIL",
      "TARGET_AREA",
      "LANGUAGE",
      "TRANSMITTER_POWER_KW",
      "ANTENNA_AZIMUTH_DEG",
      "AUTHORITY",
      "STATUS",
      "SOURCES",
    ]) {
      assert.ok(fields.includes(required), `STX is missing ${required}`);
    }

    // The schedule is a SEPARATE record: a facility must not carry its rows.
    const facility = await readFile(TXS_FBS, "utf8");
    const facilityFields = fieldsOf(facility, "TXS");
    assert.ok(!facilityFields.some((name) => /SCHEDULE/.test(name)));
    assert.ok(!/:\s*\[STX\]/.test(facility));
    // ...and a row is publishable with no facility identified at all.
    assert.ok(!/SITE_ID:string \(required\)/.test(source));
    assert.match(source, /SOURCES:\[TXSProvenance\] \(required\);/);
  });

  it("carries the day pattern as flags, not as one row per day", async () => {
    const source = await readFile(STX_FBS, "utf8");
    assert.match(source, /enum stxDayMask : ubyte \(bit_flags\) \{/);
    for (const day of [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ]) {
      assert.ok(source.includes(day), `stxDayMask is missing ${day}`);
    }
  });
});

describe("TXS/STX wire registration", () => {
  it("appended RecordType ordinals and reused none", async () => {
    const frozen = JSON.parse(await readFile(ORDINALS, "utf8"));
    const ordinals = frozen.ordinals;

    assert.equal(ordinals.STX, 225);
    assert.equal(ordinals.TXS, 226);
    assert.equal(
      new Set(Object.values(ordinals)).size,
      Object.keys(ordinals).length
    );

    const rec = await readFile("schema/REC/main.fbs", "utf8");
    const members = rec
      .match(/union RecordType \{([\s\S]*?)\n\}/)[1]
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
    assert.equal(members.indexOf("STX") + 1, 225);
    assert.equal(members.indexOf("TXS") + 1, 226);
    assert.equal(members.length, Object.keys(ordinals).length);
  });

  it("emits JSON keys with the IDL's exact capitalization", async () => {
    // SDS law: a JSON key IS the IDL field name. A lower-cased mirror is a
    // different key and a consumer reading it reads nothing.
    for (const [code, fbs] of [
      ["TXS", TXS_FBS],
      ["STX", STX_FBS],
    ]) {
      const schema = JSON.parse(
        await readFile(`lib/json/${code}/main.schema.json`, "utf8")
      );
      const definitions = schema.definitions ?? schema.$defs ?? {};
      const source = await readFile(fbs, "utf8");

      for (const [table, definition] of Object.entries(definitions)) {
        const properties = definition.properties;
        if (!properties) continue;
        const declared = new Set(fieldsOfSafe(source, table));
        if (!declared.size) continue;
        for (const key of Object.keys(properties)) {
          assert.ok(
            declared.has(key),
            `${code}.${table}.${key} is not the IDL spelling`
          );
        }
      }
    }
  });
});

/** fieldsOf, but tolerant of tables the JSON schema names and the IDL does not. */
function fieldsOfSafe(source, table) {
  const body = source.match(
    new RegExp(`table ${table}\\s*\\{([\\s\\S]*?)\\n\\}`)
  );
  if (!body) return [];
  return [...body[1].matchAll(/^\s{2}([A-Z][A-Z0-9_]*):/gm)].map((m) => m[1]);
}
