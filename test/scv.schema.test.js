import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("SCV sensor coverage schema", () => {
  it("defines the canonical coverage analytics ABI", async () => {
    const schemaPath = path.join(repoRoot, "schema", "SCV", "main.fbs");
    const tsMainPath = path.join(repoRoot, "lib", "ts", "SCV", "main.ts");
    const jsMainPath = path.join(repoRoot, "lib", "js", "SCV", "main.js");
    const jsonPath = path.join(repoRoot, "lib", "json", "SCV", "main.schema.json");
    const fbjsonPath = path.join(
      repoRoot,
      "lib",
      "fbjson",
      "SCV",
      "main.fb.schema.json",
    );

    const [schemaSource, tsMainSource, jsMainSource] = await Promise.all([
      fs.readFile(schemaPath, "utf8"),
      fs.readFile(tsMainPath, "utf8"),
      fs.readFile(jsMainPath, "utf8"),
    ]);

    await Promise.all([fs.access(jsonPath), fs.access(fbjsonPath)]);

    for (const token of [
      'file_identifier "$SCV";',
      "root_type SCV;",
      "table SCVCoverageRequest",
      "table SCVProgress",
      "table SCVCancel",
      "table SCVResult",
      "table SCVMemoryRegion",
      "table SCVPackedGeometryChunk",
      "table SCVTarget",
      "table SCVTargetStateSample",
      "table SCVCellStat",
      "table SCVInterval",
      "table SCVLatitudeBandStat",
      "table SCVTimeSeriesPoint",
      "table SCVHistogramBin",
      "table SCVHeatmapCell",
      "SAR_ANNULAR_SECTOR",
      "enum scvSensorAxisConvention",
      "LOCAL_X_RIGHT_Y_UP_Z_BORESIGHT",
      "enum scvSensorRangeBoundaryKind",
      "RADIAL_SPHERICAL",
      "LOCAL_Z_PLANE",
      "table SCVSensorShapeContract",
      "SHAPE_CONTRACT:SCVSensorShapeContract",
      "OUTER_HALF_ANGLE_DEG:double",
      "INNER_HALF_ANGLE_DEG:double",
      "MIN_CLOCK_ANGLE_DEG:double",
      "MAX_CLOCK_ANGLE_DEG:double = 360.0",
      "X_HALF_ANGLE_DEG:double",
      "Y_HALF_ANGLE_DEG:double",
      "INNER_LOOK_ANGLE_DEG:double",
      "OUTER_LOOK_ANGLE_DEG:double",
      "SAR_SAMPLING_DENSITY:double",
      "MIN_RANGE_M:double",
      "MAX_RANGE_M:double",
      "POLYGON_VERTICES:[SCVVec3]",
      "POLYGON_FRAME:scvCoordinateFrame",
      "SENSOR_IDS:[uint32]",
      "SENSOR_BITSET_WORDS:[uint64]",
      "POLYGON_VERTICES:[SCVVec3]",
      "TARGETS:[SCVTarget]",
      "TARGET_STATE_SAMPLES:[SCVTargetStateSample]",
      "MEMORY_REGIONS:[SCVMemoryRegion]",
      "REGION_ID:uint32",
      "RECORD_INDEX:uint32",
      "REGION_KEY:string",
      "POSITIONS_REGION_ID:uint32",
      "POSITIONS_RECORD_INDEX:uint32",
      "BYTE_OFFSET:uint64",
      "BYTE_LENGTH:uint64",
      "POSITIONS:[float]",
      "REVEAL_COORDS:[float]",
      "DOMAIN:scvGeometryDomain",
      "TARGET_BODY:SCVEllipsoid",
      "REQUEST:SCVCoverageRequest",
      "PROGRESS:SCVProgress",
      "CANCEL:SCVCancel",
      "RESULT:SCVResult",
      "GEOMETRY:SCVPackedGeometryChunk",
    ]) {
      assert.match(
        schemaSource,
        new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
      );
    }

    assert.doesNotMatch(schemaSource, /\bSENSOR_MASK\b/);
    assert.match(schemaSource, /\bSURFACE\b/);
    assert.match(schemaSource, /\bSPACE\b/);
    assert.match(schemaSource, /\bMOON\b/);
    assert.match(schemaSource, /\bMARS\b/);
    assert.match(tsMainSource, /\bSCV\b/);
    assert.match(jsMainSource, /\bSCV\b/);
  });

  it("generates sensor shape contract bindings without enum or field collisions", async () => {
    const jsMainPath = path.join(repoRoot, "lib", "js", "SCV", "main.js");
    const tsMainPath = path.join(repoRoot, "lib", "ts", "SCV", "main.ts");
    const jsShapeKindPath = path.join(repoRoot, "lib", "js", "SCV", "scvSensorShapeKind.js");
    const tsShapeKindPath = path.join(repoRoot, "lib", "ts", "SCV", "scvSensorShapeKind.ts");
    const cppHeaderPath = path.join(repoRoot, "lib", "cpp", "SCV", "main_generated.h");
    const [
      jsMainSource,
      tsMainSource,
      jsShapeKindSource,
      tsShapeKindSource,
      cppHeaderSource,
    ] = await Promise.all([
      fs.readFile(jsMainPath, "utf8"),
      fs.readFile(tsMainPath, "utf8"),
      fs.readFile(jsShapeKindPath, "utf8"),
      fs.readFile(tsShapeKindPath, "utf8"),
      fs.readFile(cppHeaderPath, "utf8"),
    ]);

    for (const source of [jsMainSource, tsMainSource]) {
      assert.match(source, /SCVSensorShapeContract/);
      assert.match(source, /scvSensorAxisConvention/);
      assert.match(source, /scvSensorRangeBoundaryKind/);
    }

    for (const source of [jsShapeKindSource, tsShapeKindSource]) {
      assert.match(source, /SAR_ANNULAR_SECTOR/);
    }

    assert.match(cppHeaderSource, /struct SCVSensorShapeContract/);
    assert.match(cppHeaderSource, /scvSensorShapeKind_SAR_ANNULAR_SECTOR/);
    assert.match(cppHeaderSource, /SHAPE_CONTRACT\(\)/);
  });

  it("appends SCV to REC without renumbering existing record union tags", async () => {
    const recRecordTypePath = path.join(repoRoot, "lib", "js", "REC", "RecordType.js");
    const recSchemaPath = path.join(repoRoot, "schema", "REC", "main.fbs");
    const [recordTypeSource, recSchemaSource] = await Promise.all([
      fs.readFile(recRecordTypePath, "utf8"),
      fs.readFile(recSchemaPath, "utf8"),
    ]);

    const valueFor = (recordName) => {
      const match = recordTypeSource.match(
        new RegExp(`RecordType\\[RecordType\\["${recordName}"\\]\\s*=\\s*(\\d+)\\]`),
      );
      assert.ok(match, `REC generated RecordType should include ${recordName}`);
      return Number(match[1]);
    };

    assert.equal(valueFor("SDF"), 132);
    assert.equal(valueFor("SDL"), 133);
    assert.equal(valueFor("SDR"), 134);
    assert.equal(valueFor("SEN"), 135);
    assert.equal(valueFor("SEO"), 136);
    assert.equal(valueFor("XTC"), 165);
    assert.ok(valueFor("SCV") > valueFor("XTC"));
    assert.match(
      recSchemaSource,
      /SAR,\s*SCM,\s*SDF,\s*SDL,\s*[\s\S]*WPN,\s*WTH,\s*XTC,\s*SCV/,
    );
  });
});
