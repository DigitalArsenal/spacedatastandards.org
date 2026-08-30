import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fbs = (code) => path.join(repoRoot, "schema", code, "main.fbs");

/**
 * The IDL is the contract. Every assertion reads names OUT of the .fbs rather
 * than restating them, so a rename cannot pass while a consumer keeps the old
 * spelling. These records are read and written against PUBLISHED example
 * messages (CCSDS 504.0-B-2 annex G2; CCSDS 503.0-B-2 Cor.1 annex E), so the
 * assertions are about what those files provably require.
 */
function idlFieldNames(source, tableName) {
  const block = source.match(
    new RegExp(`\\btable\\s+${tableName}\\s*\\{([\\s\\S]*?)\\n\\}`),
  );
  assert.ok(block, `table ${tableName} not found`);
  return block[1]
    .split("\n")
    .map((line) => line.replace(/\/\/.*$/, "").trim())
    .filter((line) => /^[A-Za-z][A-Za-z0-9_]*\s*:/.test(line))
    .map((line) => line.split(":")[0].trim());
}

function tableNames(source) {
  return [...source.matchAll(/\btable\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{/g)].map((m) => m[1]);
}

describe("AEM/TDM/OEM message-format extensions and the NCD container descriptor", () => {
  let aem;
  let tdm;
  let oem;
  let ncd;
  let ordinals;

  before(async () => {
    aem = await fs.readFile(fbs("AEM"), "utf8");
    tdm = await fs.readFile(fbs("TDM"), "utf8");
    oem = await fs.readFile(fbs("OEM"), "utf8");
    ncd = await fs.readFile(fbs("NCD"), "utf8");
    ordinals = JSON.parse(
      await fs.readFile(
        path.join(repoRoot, "schema", "REC", "RECORDTYPE_ORDINALS.json"),
        "utf8",
      ),
    );
  });

  // ── $AEM ────────────────────────────────────────────────────────────────────

  it("AEM carries an explicit per-state epoch, which non-uniform published AEMs require", () => {
    // CCSDS 504.0-B-2 figure G-4 steps 21:29:07.2555 -> 22:08:03.5555 ->
    // 22:08:04.5555: 2339 s then 1 s. START_TIME + i*STEP_SIZE cannot express it.
    const line = idlFieldNames(aem, "attitudeDataLine");
    assert.ok(line.includes("EPOCH"), "attitudeDataLine must carry EPOCH");
    assert.ok(idlFieldNames(aem, "AEMSegment").includes("ATTITUDE_DATA_LINES"));
  });

  it("AEM data lines cover every column of CCSDS 504.0-B-2 table 4-4", () => {
    const line = idlFieldNames(aem, "attitudeDataLine");
    for (const column of [
      "Q1", "Q2", "Q3", "QC",
      "Q1_DOT", "Q2_DOT", "Q3_DOT", "QC_DOT",
      "ANGLE_1", "ANGLE_2", "ANGLE_3",
      "ANGLE_1_DOT", "ANGLE_2_DOT", "ANGLE_3_DOT",
      "ANGVEL_X", "ANGVEL_Y", "ANGVEL_Z",
      "SPIN_ALPHA", "SPIN_DELTA", "SPIN_ANGLE", "SPIN_ANGLE_VEL",
      "NUTATION", "NUTATION_PER", "NUTATION_PHASE",
      "MOMENTUM_ALPHA", "MOMENTUM_DELTA", "NUTATION_VEL",
    ]) {
      assert.ok(line.includes(column), `attitudeDataLine is missing ${column}`);
    }
  });

  it("AEM carries the 504.0-B-2 keywords the published examples use", () => {
    const segment = idlFieldNames(aem, "AEMSegment");
    for (const keyword of [
      "CENTER_NAME", "COMMENT", "USEABLE_START_TIME", "USEABLE_STOP_TIME",
      "INTERPOLATION_METHOD", "INTERPOLATION_DEGREE", "EULER_ROT_SEQ",
      "ANGVEL_FRAME", "CLASSIFICATION",
    ]) {
      assert.ok(segment.includes(keyword), `AEMSegment is missing ${keyword}`);
    }
    assert.ok(idlFieldNames(aem, "AEM").includes("MESSAGE_ID"));
  });

  it("AEM does not invent keywords 504.0-B-2 removed or never defined", () => {
    // Change 7 of the B-1 -> B-2 change list REMOVED QUATERNION_TYPE: the order
    // is fixed at Q1,Q2,Q3,QC. RATE_FRAME is a B-1 spelling that B-2 does not
    // define at all; ANGVEL_FRAME is the ratified one.
    assert.ok(!/^\s*QUATERNION_TYPE\s*:/m.test(aem), "QUATERNION_TYPE was removed by B-2");
    assert.ok(!/^\s*RATE_FRAME\s*:/m.test(aem), "RATE_FRAME is not a 504.0-B-2 keyword");
  });

  it("AEM preserves its pre-existing fields and their order (append-only)", () => {
    const segment = idlFieldNames(aem, "AEMSegment");
    const frozen = [
      "OBJECT_NAME", "OBJECT_ID", "REF_FRAME_A", "REF_FRAME_B", "ATTITUDE_DIR",
      "TIME_SYSTEM", "ATTITUDE_TYPE", "START_TIME", "STOP_TIME", "STEP_SIZE",
      "ATTITUDE_COMPONENTS", "ATTITUDE_DATA",
    ];
    assert.deepEqual(segment.slice(0, frozen.length), frozen);
    assert.deepEqual(
      idlFieldNames(aem, "AEM").slice(0, 4),
      ["CCSDS_AEM_VERS", "CREATION_DATE", "ORIGINATOR", "SEGMENTS"],
    );
  });

  // ── $TDM ────────────────────────────────────────────────────────────────────

  it("TDM carries one epoch per observation, which published TDMs require", () => {
    // CCSDS 503.0-B-2 Cor.1 figure E-17: RCS's final line repeats the EARLIER
    // epoch 10:26:33.7008 after a 10:26:33.9686 line, so observation epochs are
    // chosen independently per keyword and no single uniform grid can hold them.
    const observation = idlFieldNames(tdm, "TDMObservation");
    assert.deepEqual(observation, ["KEYWORD", "EPOCH", "VALUE"]);
    assert.ok(idlFieldNames(tdm, "TDM").includes("OBSERVATIONS"));
  });

  it("TDM can hold a multi-segment file", () => {
    // Figures E-16 and E-18 carry more than one META/DATA block.
    assert.ok(tableNames(tdm).includes("TDMSegment"));
    assert.ok(idlFieldNames(tdm, "TDM").includes("SEGMENTS"));
    assert.ok(idlFieldNames(tdm, "TDMSegment").includes("OBSERVATIONS"));
  });

  it("TDM carries the metadata keywords the published corpus uses", () => {
    const root = idlFieldNames(tdm, "TDM");
    const segment = idlFieldNames(tdm, "TDMSegment");
    for (const keyword of [
      "RANGE_UNITS", "REFERENCE_FRAME", "EPHEMERIS_NAME_1", "CORRECTION_RANGE",
      "INTERPOLATION", "INTERPOLATION_DEGREE", "FREQ_OFFSET", "PATH",
      "TURNAROUND_NUMERATOR", "TURNAROUND_DENOMINATOR", "MESSAGE_ID",
      "TRANSMIT_DELAY_1", "RECEIVE_DELAY_1", "TRACK_ID", "DATA_TYPES",
    ]) {
      assert.ok(root.includes(keyword), `TDM is missing ${keyword}`);
      assert.ok(segment.includes(keyword), `TDMSegment is missing ${keyword}`);
    }
  });

  it("TDM keeps TRANSMIT_RAMPS absent-not-empty for a ramp-free record", () => {
    assert.ok(idlFieldNames(tdm, "TDM").includes("TRANSMIT_RAMPS"));
    assert.match(tdm, /Absent for unramped tracking, which\s*\n\s*\/\/\/ leaves the record exactly CCSDS-conformant\./);
  });

  it("TDM preserves its pre-existing fields and their order (append-only)", () => {
    const root = idlFieldNames(tdm, "TDM");
    const frozen = [
      "OBSERVER_ID", "OBSERVER_X", "OBSERVER_Y", "OBSERVER_Z",
      "OBSERVER_VX", "OBSERVER_VY", "OBSERVER_VZ",
      "OBSERVER_POSITION_REFERENCE_FRAME", "OBS_REFERENCE_FRAME", "EPOCH",
    ];
    assert.deepEqual(root.slice(0, frozen.length), frozen);
    assert.equal(root[root.indexOf("TRANSMIT_RAMPS") + 1], "OBSERVATIONS");
  });

  // ── $OEM ────────────────────────────────────────────────────────────────────

  it("OEM carries the per-state clock and accuracy columns an SP3 rewrite needs", () => {
    const line = idlFieldNames(oem, "ephemerisDataLine");
    for (const column of [
      "CLOCK_BIAS_MICROSECONDS", "CLOCK_RATE_MICROSECONDS_PER_SECOND",
      "CLOCK_BIAS_SIGMA_PICOSECONDS", "CLOCK_RATE_SIGMA_PICOSECONDS_PER_SECOND",
      "X_SIGMA_EXPONENT", "Y_SIGMA_EXPONENT", "Z_SIGMA_EXPONENT",
      "X_DOT_SIGMA_EXPONENT", "Y_DOT_SIGMA_EXPONENT", "Z_DOT_SIGMA_EXPONENT",
    ]) {
      assert.ok(line.includes(column), `ephemerisDataLine is missing ${column}`);
    }
    assert.deepEqual(
      line.slice(0, 10),
      ["EPOCH", "X", "Y", "Z", "X_DOT", "Y_DOT", "Z_DOT", "X_DDOT", "Y_DDOT", "Z_DDOT"],
    );
  });

  it("OEM carries integer body codes, which a segment descriptor cannot infer from a name", () => {
    const block = idlFieldNames(oem, "ephemerisDataBlock");
    assert.ok(block.includes("OBJECT_NAIF_ID"));
    assert.ok(block.includes("CENTER_NAIF_ID"));
  });

  // ── $NCD ────────────────────────────────────────────────────────────────────

  it("NCD keeps its frozen RecordType ordinal when later records append", async () => {
    const rec = await fs.readFile(fbs("REC"), "utf8");
    const union = rec.match(/union\s+RecordType\s*\{([\s\S]*?)\n\}/);
    assert.ok(union, "RecordType union not found");
    const members = union[1]
      .split(/[\n,]/)
      .map((entry) => entry.replace(/\/\/.*$/, "").trim())
      .filter((entry) => /^[A-Z][A-Z0-9]{2}$/.test(entry));
    // A member's position IS its wire value. NCD remains 230; additive
    // standards must follow it instead of preserving a stale "last" claim.
    assert.equal(members.indexOf("NCD") + 1, 230);
    assert.equal(ordinals.ordinals.NCD, 230);
    assert.deepEqual(members.slice(230), ["MEM", "ODR", "TRH"]);
    assert.equal(ordinals.ordinals.PCE, 229);
    assert.equal(ordinals.ordinals.EVL, 228);
    assert.equal(ordinals.ordinals.BPF, 227);
  });

  it("NCD holds the file-level facts the message records cannot", () => {
    const root = idlFieldNames(ncd, "NCD");
    for (const field of [
      "FORMAT", "FORMAT_VERSION", "PRODUCER", "INTERNAL_FILE_NAME",
      "COMMENT_AREA", "SEGMENTS", "SP3_HEADER", "SCENARIO_CONTAINER",
      "CODE_500_HEADER", "NATIVE_FRAME_NAME", "NATIVE_FRAME_ID",
      "NATIVE_TIME_SYSTEM", "SOURCE_SHA256", "SOURCE_CID",
    ]) {
      assert.ok(root.includes(field), `NCD is missing ${field}`);
    }
    const segment = idlFieldNames(ncd, "NCDSegmentDescriptor");
    for (const field of [
      "TARGET_NAIF_ID", "CENTER_NAIF_ID", "SEGMENT_TYPE",
      "INITIAL_ADDRESS", "FINAL_ADDRESS",
    ]) {
      assert.ok(segment.includes(field), `NCDSegmentDescriptor is missing ${field}`);
    }
  });

  it("NCD names capability classes only, never a product or organization", () => {
    const forbidden =
      /\b(GMAT|NASA|AGI|STK|ANSYS|ORE?KIT|SPICE|CELESTRAK|SPACE-?TRACK|MATLAB|FREEFLYER|OREKIT)\b/i;
    const hit = ncd.split("\n").findIndex((line) => forbidden.test(line));
    assert.equal(hit, -1, `NCD line ${hit + 1} names a product or organization`);
  });

  it("projects to JSON with the IDL's exact capitalization", async () => {
    for (const [code, source] of [["AEM", aem], ["TDM", tdm], ["OEM", oem], ["NCD", ncd]]) {
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
