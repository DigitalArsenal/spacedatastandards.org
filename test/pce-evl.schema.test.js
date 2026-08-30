import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PCE_FBS = path.join(repoRoot, "schema", "PCE", "main.fbs");
const EVL_FBS = path.join(repoRoot, "schema", "EVL", "main.fbs");

/**
 * The IDL is the contract. Every assertion below reads names and values OUT of
 * the .fbs rather than restating them, so a rename or a renumber cannot pass
 * while a consumer keeps the old spelling.
 */
function idlFieldNames(source, tableName) {
  const block = source.match(
    new RegExp(`\\btable\\s+${tableName}\\s*\\{([\\s\\S]*?)\\n\\}`),
  );
  assert.ok(block, `table ${tableName} not found`);
  return block[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter((line) => /^[A-Z][A-Z0-9_]*\s*:/.test(line))
    .map((line) => line.split(":")[0].trim());
}

function idlEnumMembers(source, enumName) {
  const block = source.match(
    new RegExp(`\\benum\\s+${enumName}\\s*:[^{]*\\{([\\s\\S]*?)\\n\\}`),
  );
  assert.ok(block, `enum ${enumName} not found`);
  const members = new Map();
  let next = 0;
  for (const rawLine of block[1].split("\n")) {
    const line = rawLine.replace(/\/\/.*$/, "").trim();
    if (!line) continue;
    for (const rawEntry of line.split(",")) {
      const entry = rawEntry.trim();
      if (!entry) continue;
      const match = entry.match(/^([A-Z][A-Z0-9_]*)\s*(?:=\s*(\d+))?$/);
      if (!match) continue;
      const value = match[2] === undefined ? next : Number(match[2]);
      members.set(match[1], value);
      next = value + 1;
    }
  }
  return members;
}

function enumNames(source) {
  return [...source.matchAll(/\benum\s+([A-Za-z_][A-Za-z0-9_]*)\s*:/g)].map((m) => m[1]);
}

function tableNames(source) {
  return [...source.matchAll(/\btable\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{/g)].map((m) => m[1]);
}

describe("PCE parameter catalog and EVL event locator schemas", () => {
  let pce;
  let evl;
  let ordinals;

  before(async () => {
    pce = await fs.readFile(PCE_FBS, "utf8");
    evl = await fs.readFile(EVL_FBS, "utf8");
    const raw = JSON.parse(
      await fs.readFile(
        path.join(repoRoot, "schema", "REC", "RECORDTYPE_ORDINALS.json"),
        "utf8",
      ),
    );
    ordinals = raw.ordinals ?? raw;
  });

  it("is rooted, identified, and wire-frozen at its appended ordinal", async () => {
    assert.match(pce, /table PCE\s*\{/);
    assert.match(pce, /root_type PCE;/);
    assert.match(pce, /file_identifier\s+"\$PCE";/);
    assert.match(evl, /table EVL\s*\{/);
    assert.match(evl, /root_type EVL;/);
    assert.match(evl, /file_identifier\s+"\$EVL";/);

    assert.equal(ordinals.EVL, 228);
    assert.equal(ordinals.PCE, 229);
    // No other member may share either ordinal. A later mint appending 230,
    // 231, ... is the append law working, so this pins the ordinals these two
    // hold rather than asserting they are forever the newest standards.
    const collisions = Object.entries(ordinals).filter(
      ([code, ordinal]) => !["EVL", "PCE"].includes(code) && [228, 229].includes(ordinal),
    );
    assert.deepEqual(collisions, []);
    const union = (await fs.readFile(
      path.join(repoRoot, "schema", "REC", "main.fbs"),
      "utf8",
    )).match(/union\s+RecordType\s*\{([^}]+)\}/)[1];
    const members = union
      .split(",")
      .map((entry) => entry.trim())
      .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
    assert.equal(members.indexOf("EVL") + 1, 228);
    assert.equal(members.indexOf("PCE") + 1, 229);
  });

  it("reserves 0 for UNSPECIFIED in every vocabulary, so an unset byte is never a class", () => {
    for (const [source, label] of [[pce, "PCE"], [evl, "EVL"]]) {
      for (const name of enumNames(source)) {
        const members = idlEnumMembers(source, name);
        assert.equal(
          members.get("UNSPECIFIED"),
          0,
          `${label} ${name} must reserve 0 for UNSPECIFIED`,
        );
      }
    }
  });

  it("pins the roster: values are unique, never renumbered, and extensible only by name", () => {
    const roster = idlEnumMembers(pce, "pceParameter");
    const values = [...roster.values()];
    assert.equal(new Set(values).size, values.length, "duplicate pceParameter value");

    // Anchors of each family block. Changing one of these re-points every
    // stored catalog, request, report and event sample.
    const anchors = {
      POSITION_X: 1,
      RADIAL_VELOCITY: 16,
      SEMI_MAJOR_AXIS: 30,
      EQUINOCTIAL_H: 70,
      DELAUNAY_MEAN_ANOMALY: 90,
      GEODETIC_LATITUDE: 100,
      B_DOT_T: 120,
      BROUWER_SHORT_SEMI_MAJOR_AXIS: 140,
      ORBIT_STATE_TRANSITION_MATRIX: 160,
      EPOCH_A1_GREGORIAN: 180,
      DRY_MASS: 220,
      ATTITUDE_QUATERNION_1: 250,
      TANK_FUEL_MASS: 300,
      THRUSTER_DUTY_CYCLE: 320,
      IMPULSIVE_BURN_ELEMENT_1: 370,
      FINITE_BURN_THRUST_MAGNITUDE: 390,
      TOTAL_POWER_AVAILABLE: 410,
      TOTAL_TORQUE_X: 430,
      SOLVER_STATUS: 450,
      RELATIVE_RANGE: 470,
      ILLUMINATION_FRACTION: 483,
      PROVIDER_DEFINED: 65535,
    };
    for (const [member, value] of Object.entries(anchors)) {
      assert.equal(roster.get(member), value, `pceParameter.${member}`);
    }
    for (const member of roster.keys()) {
      assert.match(member, /^[A-Z][A-Z0-9_]*$/, `roster member ${member}`);
    }
    // A parameter outside the roster travels as PROVIDER_DEFINED plus a name,
    // never as an invented member value.
    assert.ok(idlFieldNames(pce, "PCEParameterRef").includes("PROVIDER_DEFINED_NAME"));
    assert.ok(
      idlFieldNames(pce, "PCEParameterDescriptor").includes("PROVIDER_DEFINED_NAME"),
    );
  });

  it("keeps the catalog SI: no degree, kilometre or minute unit member exists", () => {
    const units = [...idlEnumMembers(pce, "pceUnit").keys()];
    for (const forbidden of ["DEGREE", "DEGREES", "KILOMETRE", "KILOMETER", "MINUTE", "HOUR"]) {
      assert.ok(!units.includes(forbidden), `pceUnit must not declare ${forbidden}`);
    }
    assert.ok(units.includes("RADIAN") && units.includes("METRE"));
  });

  it("resolves a name against the frame vocabulary rather than restating it", () => {
    assert.match(pce, /include "\.\.\/RFM\/main\.fbs";/);
    assert.match(pce, /include "\.\.\/FRM\/main\.fbs";/);
    const descriptor = idlFieldNames(pce, "PCEParameterDescriptor");
    assert.ok(descriptor.includes("REQUIRED_AXIS_TYPE"));
    assert.ok(descriptor.includes("REQUIRED_ORIGIN_KIND"));
    assert.ok(descriptor.includes("STATE_REPRESENTATION"));
    assert.match(pce, /REQUIRED_AXIS_TYPE:\s*rfmAxisType/);
    assert.match(pce, /REQUIRED_ORIGIN_KIND:\s*rfmOriginKind/);
    assert.match(pce, /STATE_REPRESENTATION:\s*frmStateRepresentation/);
    // States and coordinate systems are the ratified tables, not copies.
    assert.match(pce, /STATES:\s*\[FRMStateVector\]/);
    assert.match(pce, /COORDINATE_SYSTEMS:\s*\[RFMCoordinateSystem\]/);
  });

  it("declares availability so an unimplemented name refuses instead of guessing", () => {
    const availability = idlEnumMembers(pce, "pceAvailability");
    assert.equal(availability.get("IMPLEMENTED"), 1);
    assert.equal(availability.get("DECLARED_UNAVAILABLE"), 2);
    const status = idlEnumMembers(pce, "pceResultStatus");
    assert.equal(status.get("UNSPECIFIED"), 0);
    assert.equal(status.get("OK"), 1);
    for (const member of [
      "UNKNOWN_PARAMETER",
      "NOT_IMPLEMENTED",
      "MISSING_DEPENDENCY",
      "MISSING_EOP_DATA",
      "SINGULAR_AT_STATE",
      "OUT_OF_DOMAIN",
      "GOAL_NOT_ATTAINED",
      "ROOT_REFINEMENT_FAILED",
    ]) {
      assert.ok(status.has(member), `pceResultStatus.${member}`);
    }
  });

  it("spells a stopping condition once, on the parameter it is a condition on", () => {
    assert.deepEqual(idlFieldNames(pce, "PCEParameterCondition"), [
      "PARAMETER",
      "GOAL_VALUE",
      "DIRECTION",
      "GOAL_TOLERANCE",
      "OCCURRENCE",
    ]);
    const stop = idlFieldNames(pce, "PCEStopRequest");
    assert.ok(stop.includes("CONDITIONS"));
    assert.ok(stop.includes("MAXIMUM_ELAPSED_SECONDS"));
    assert.ok(stop.includes("EPOCH_TOLERANCE_SECONDS"));
    assert.ok(stop.includes("SYNCHRONIZED_OBJECT_IDS"));
    const report = idlFieldNames(pce, "PCEStopReport");
    assert.ok(report.includes("ACHIEVED_VALUE"));
    assert.ok(report.includes("GOAL_RESIDUAL"));
    assert.ok(report.includes("SYNCHRONIZED_STATES"));
    // The propagator is a port the caller supplies; naming one here would
    // hardwire the surface to a single provider.
    assert.ok(!stop.includes("PROPAGATOR"));
    assert.ok(!/PROPAGATOR_(NAME|ID|TYPE)/.test(pce));
  });

  it("locates every event class through one request and one report", () => {
    const classes = idlEnumMembers(evl, "evlLocatorClass");
    assert.deepEqual(
      [...classes.entries()],
      [
        ["UNSPECIFIED", 0],
        ["ECLIPSE", 1],
        ["CONTACT", 2],
        ["INTRUSION", 3],
        ["APSIDES", 4],
        ["NODE_CROSSING", 5],
        ["PARAMETER_CONDITION", 6],
      ],
    );
    const types = idlEnumMembers(evl, "evlEventType");
    assert.deepEqual(
      [...types.entries()],
      [
        ["UNSPECIFIED", 0],
        ["UMBRA", 1],
        ["PENUMBRA", 2],
        ["ANTUMBRA", 3],
        ["RISE", 4],
        ["SET", 5],
        ["ENTRY", 6],
        ["EXIT", 7],
        ["APOAPSIS", 8],
        ["PERIAPSIS", 9],
        ["ASCENDING_NODE", 10],
        ["DESCENDING_NODE", 11],
        ["CONDITION_SATISFIED", 12],
      ],
    );
    assert.deepEqual(idlFieldNames(evl, "EVL"), ["LOCATION_REQUEST", "EVENT_REPORT"]);
    for (const config of [
      "ECLIPSE_CONFIGURATION",
      "CONTACT_CONFIGURATION",
      "INTRUSION_CONFIGURATION",
      "APSIDES_CONFIGURATION",
      "NODE_CROSSING_CONFIGURATION",
      "PARAMETER_CONDITION_CONFIGURATION",
    ]) {
      assert.ok(
        idlFieldNames(evl, "EVLEventLocationRequest").includes(config),
        `EVLEventLocationRequest.${config}`,
      );
    }
    const event = idlFieldNames(evl, "EVLEvent");
    for (const field of [
      "EVENT_TYPE",
      "START_EPOCH",
      "STOP_EPOCH",
      "DURATION_SECONDS",
      "OCCULTING_BODY_ID",
      "OBSERVED_OBJECT_ID",
      "SAMPLES",
    ]) {
      assert.ok(event.includes(field), `EVLEvent.${field}`);
    }
  });

  it("reuses the parameter vocabulary instead of minting a second one", () => {
    assert.match(evl, /include "\.\.\/PCE\/main\.fbs";/);
    assert.match(evl, /CONDITIONS:\s*\[PCEParameterCondition\]/);
    assert.match(evl, /SAMPLE:\s*PCEParameterSample/);
    assert.match(evl, /REPORT_PARAMETERS:\s*\[PCEParameterRef\]/);
    assert.match(evl, /CONTEXT:\s*PCEEvaluationContext/);
    // No second spelling of the predicate, and no private parameter roster.
    assert.ok(!/\bGOAL_VALUE\s*:/.test(evl));
    assert.ok(!/\benum\s+evlParameter\b/.test(evl));
  });

  it("names capability classes only, never a product or organization", () => {
    const forbidden =
      /\b(GMAT|NASA|AGI|STK|ANSYS|ORE?KIT|SPICE|CELESTRAK|SPACE-?TRACK|MATLAB|FREEFLYER|OREKIT)\b/i;
    for (const [source, label] of [[pce, "PCE"], [evl, "EVL"]]) {
      const hit = source.split("\n").findIndex((line) => forbidden.test(line));
      assert.equal(hit, -1, `${label} line ${hit + 1} names a product or organization`);
    }
  });

  it("projects to JSON with the IDL's exact capitalization", async () => {
    for (const [code, source] of [["PCE", pce], ["EVL", evl]]) {
      const schema = JSON.parse(
        await fs.readFile(
          path.join(repoRoot, "lib", "fbjson", code, "main.fb.schema.json"),
          "utf8",
        ),
      );
      for (const table of tableNames(source)) {
        const definition = schema.definitions?.[table];
        if (!definition?.properties) continue;
        const idl = idlFieldNames(source, table);
        for (const key of Object.keys(definition.properties)) {
          assert.ok(
            idl.includes(key),
            `${code}.${table} JSON key ${key} is not the IDL spelling`,
          );
        }
      }
    }
  });
});
