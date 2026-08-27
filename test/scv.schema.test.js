import assert from "node:assert/strict";
import { execFile as execFileCallback } from "node:child_process";
import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const execFile = promisify(execFileCallback);
const archiveLanguages = [
  "cpp",
  "cs",
  "dart",
  "go",
  "java",
  "js",
  "json",
  "kt",
  "lob",
  "php",
  "py",
  "rs",
  "sw",
  "ts",
];

const headerMarker = "// -----------------------------------END_HEADER";

function parseSchemaHeader(schemaSource) {
  const [header, body] = schemaSource.split(headerMarker);
  assert.ok(body, "schema should contain a generated header marker");
  const hash = header.match(/^\/\/ Hash: ([a-f0-9]{64})$/m)?.[1];
  const version = header.match(/^\/\/ Version: ([^\n]+)$/m)?.[1];
  assert.ok(hash, "schema should contain a generated hash header");
  assert.ok(version, "schema should contain a generated version header");
  return { hash, version, body: body.trim() };
}

async function readJson(relativePath) {
  return JSON.parse(await fs.readFile(path.join(repoRoot, relativePath), "utf8"));
}

async function readTarText(archivePath) {
  const { stdout: listing } = await execFile("tar", ["-tzf", archivePath], {
    maxBuffer: 1024 * 1024 * 8,
  });
  const entries = listing
    .split("\n")
    .map((entry) => entry.trim())
    .filter((entry) => entry && !entry.endsWith("/"));
  assert.ok(entries.length > 0, `${archivePath} should contain files`);
  const { stdout } = await execFile("tar", ["-xOf", archivePath, ...entries], {
    maxBuffer: 1024 * 1024 * 80,
  });
  return `${listing}\n${stdout}`;
}

async function listFiles(dir, extension) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listFiles(entryPath, extension);
      }
      return entry.name.endsWith(extension) ? [entryPath] : [];
    }),
  );
  return files.flat();
}

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
      "table SCVHistogramBin",
      "enum scvRasterProductKind",
      "enum scvRasterProductEncoding",
      "table SCVPackedRasterBand",
      "table SCVPackedRasterProducts",
      "RASTER_PRODUCTS:SCVPackedRasterProducts",
      "ROWS:uint32",
      "COLUMNS:uint32",
      "CELL_BOUNDS_DEG",
      "CELL_CENTERS_DEG",
      "PASS_COUNT_RGBA",
      "CURRENT_ACCESS_BITSET",
      "CURRENT_ACCESS_RGBA",
      "BUCKET_ACTIVE_CELL_COUNT",
      "UINT8",
      "SAR_ANNULAR_SECTOR",
      "enum scvSensorAxisConvention",
      "LOCAL_X_RIGHT_Y_UP_Z_BORESIGHT",
      "enum scvSensorRangeBoundaryKind",
      "RADIAL_SPHERICAL",
      "LOCAL_Z_PLANE",
      "table SCVSensorShapeContract",
      "SHAPE_CONTRACT:SCVSensorShapeContract",
      "SHAPE_KIND:scvSensorShapeKind",
      "RANGE_BOUNDARY:scvSensorRangeBoundaryKind",
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
    const shapeContractMatch = schemaSource.match(
      /table SCVSensorShapeContract \{\n([\s\S]*?)\n\}/,
    );
    assert.ok(shapeContractMatch, "schema should define SCVSensorShapeContract");
    const shapeContractBody = shapeContractMatch[1];
    assert.doesNotMatch(shapeContractBody, /^\s*SHAPE:scvSensorShapeKind;/m);
    assert.doesNotMatch(
      shapeContractBody,
      /^\s*RANGE_BOUNDARY_KIND:scvSensorRangeBoundaryKind;/m,
    );

    const axisConventionMatch = schemaSource.match(
      /enum scvSensorAxisConvention : ubyte \{\n([\s\S]*?)\n\}/,
    );
    assert.ok(axisConventionMatch, "schema should define scvSensorAxisConvention");
    assert.deepEqual(
      axisConventionMatch[1]
        .trim()
        .split(/\s*,\s*/)
        .filter(Boolean),
      ["LOCAL_X_RIGHT_Y_UP_Z_BORESIGHT"],
    );

    assert.match(schemaSource, /\bSURFACE\b/);
    assert.match(schemaSource, /\bSPACE\b/);
    assert.match(schemaSource, /\bMOON\b/);
    assert.match(schemaSource, /\bMARS\b/);
    assert.match(tsMainSource, /\bSCV\b/);
    assert.match(jsMainSource, /\bSCV\b/);
  });

  it("generates packed raster product bindings for module-authored coverage surfaces", async () => {
    const files = [
      "lib/js/SCV/SCVPackedRasterProducts.js",
      "lib/ts/SCV/SCVPackedRasterProducts.ts",
      "lib/js/SCV/SCVPackedRasterBand.js",
      "lib/ts/SCV/SCVPackedRasterBand.ts",
      "lib/js/SCV/scvRasterProductKind.js",
      "lib/ts/SCV/scvRasterProductKind.ts",
      "lib/cpp/SCV/main_generated.h",
      "lib/js/REC/SCVPackedRasterProducts.js",
      "lib/ts/REC/SCVPackedRasterProducts.ts",
      "lib/cpp/REC/main_generated.h",
    ];
    const sources = await Promise.all(
      files.map((relativePath) => fs.readFile(path.join(repoRoot, relativePath), "utf8")),
    );
    const combined = sources.join("\n");
    const rasterKindSources = await Promise.all(
      [
        "schema/SCV/main.fbs",
        "lib/js/SCV/scvRasterProductKind.js",
        "lib/ts/SCV/scvRasterProductKind.ts",
        "lib/cpp/SCV/main_generated.h",
        "lib/js/REC/scvRasterProductKind.js",
        "lib/ts/REC/scvRasterProductKind.ts",
      ].map((relativePath) =>
        fs.readFile(path.join(repoRoot, relativePath), "utf8"),
      ),
    );

    for (const token of [
      "SCVPackedRasterProducts",
      "SCVPackedRasterBand",
      "scvRasterProductKind",
      "scvRasterProductEncoding",
      "CELL_BOUNDS_DEG",
      "CELL_CENTERS_DEG",
      "PERCENT_COVERAGE",
      "PASS_COUNT",
      "PASS_COUNT_RGBA",
      "CURRENT_ACCESS_BITSET",
      "CURRENT_ACCESS_RGBA",
      "BUCKET_START_SECONDS",
      "BUCKET_STOP_SECONDS",
      "BUCKET_ACTIVE_CELL_COUNT",
      "LATITUDE_BAND_COVERAGE",
      "UINT8",
      "FLOAT32_VALUES",
      "FLOAT64_VALUES",
      "UINT32_VALUES",
      "RASTER_PRODUCTS",
    ]) {
      assert.match(
        combined,
        new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
      );
    }

    for (const source of rasterKindSources) {
      assert.match(
        source,
        /\bLATITUDE_BAND_COVERAGE\b/,
        "scvRasterProductKind must expose LATITUDE_BAND_COVERAGE in schema and generated bindings",
      );
    }
  });

  it("does not preserve retired inline result-vector schemas", async () => {
    const files = [
      "schema/SCV/main.fbs",
      "lib/js/SCV/main.js",
      "lib/js/SCV/SCVResult.js",
      "lib/ts/SCV/main.ts",
      "lib/ts/SCV/SCVResult.ts",
      "lib/cpp/SCV/main_generated.h",
      "lib/js/REC/main.js",
      "lib/js/REC/SCVResult.js",
      "lib/ts/REC/main.ts",
      "lib/ts/REC/SCVResult.ts",
      "lib/cpp/REC/main_generated.h",
    ];
    const combined = (
      await Promise.all(
        files.map((relativePath) =>
          fs.readFile(path.join(repoRoot, relativePath), "utf8"),
        ),
      )
    ).join("\n");

    for (const retiredToken of [
      "SCVCellStat",
      "SCVInterval",
      "SCVLatitudeBandStat",
      "SCVTimeSeriesPoint",
      "CELL_STATS",
      "INTERVALS",
      "LATITUDE_BANDS",
      "TIME_SERIES",
      "cellStatsLength",
      "intervalsLength",
      "latitudeBandsLength",
      "timeSeriesLength",
      "createCellStatsVector",
      "createIntervalsVector",
      "createLatitudeBandsVector",
      "createTimeSeriesVector",
      "addCellStats",
      "addIntervals",
      "addLatitudeBands",
      "addTimeSeries",
    ]) {
      assert.doesNotMatch(
        combined,
        new RegExp(`\\b${retiredToken}\\b`),
        `${retiredToken} must not remain in SDS/SCV generated result bindings`,
      );
    }
  });

  it("records the generated schema hash in the SCV header and manifest", async () => {
    const schemaPath = path.join(repoRoot, "schema", "SCV", "main.fbs");
    const [schemaSource, packageJson, manifest] = await Promise.all([
      fs.readFile(schemaPath, "utf8"),
      readJson("package.json"),
      readJson("dist/manifest.json"),
    ]);
    const { hash } = parseSchemaHeader(schemaSource);
    const actualHash = createHash("sha256").update(parseSchemaHeader(schemaSource).body).digest("hex");

    assert.equal(hash, actualHash);
    assert.equal(manifest.version, packageJson.version);
    assert.equal(manifest.STANDARDS.SCV.IDL, schemaSource);
    assert.match(manifest.STANDARDS.SCV.IDL, /table SCVSensorShapeContract/);
    assert.match(manifest.STANDARDS.SCV.IDL, /SHAPE_CONTRACT:SCVSensorShapeContract/);
    assert.match(manifest.STANDARDS.SCV.IDL, new RegExp(`// Hash: ${actualHash}`));
  });

  it("keeps SCV and REC distribution archives in generated binding parity", async () => {
    const requiredTokens = [
      "SCVSensorShapeContract",
      "scvSensorAxisConvention",
      "scvSensorRangeBoundaryKind",
    ];

    for (const standard of ["SCV", "REC"]) {
      for (const language of archiveLanguages) {
        const archivePath = path.join(repoRoot, "dist", standard, `${standard}.${language}.tar.gz`);
        const archiveText = await readTarText(archivePath);
        for (const token of requiredTokens) {
          assert.match(
            archiveText,
            new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            `${archivePath} should include ${token}`,
          );
        }
        assert.match(
          archiveText,
          /\b(?:SHAPE_CONTRACT|SHAPECONTRACT|shapeContract|ShapeContract)\b/,
          `${archivePath} should include the SCVSensor.SHAPE_CONTRACT binding`,
        );
        assert.match(
          archiveText,
          /(?:LOCAL_X_RIGHT_Y_UP_Z_BORESIGHT|localXRightYUpZBoresight|LocalXRightYUpZBoresight)\b/,
          `${archivePath} should include the scvSensorAxisConvention value`,
        );
        assert.match(
          archiveText,
          /(?:SAR_ANNULAR_SECTOR|sarAnnularSector|SarAnnularSector)\b/,
          `${archivePath} should include the SAR annular sector shape kind`,
        );
        assert.match(
          archiveText,
          /\b(?:SHAPE_KIND|SHAPEKIND|shapeKind|ShapeKind)\b/,
          `${archivePath} should include the SCVSensorShapeContract.SHAPE_KIND binding`,
        );
        assert.match(
          archiveText,
          /\b(?:RANGE_BOUNDARY|RANGEBOUNDARY|rangeBoundary|RangeBoundary)\b/,
          `${archivePath} should include the SCVSensorShapeContract.RANGE_BOUNDARY binding`,
        );
        assert.doesNotMatch(archiveText, /\bRANGE_BOUNDARY_KIND\b/);
      }
    }
  });

  it("adds complete fbjson metadata for sensor shape contract defaults", async () => {
    const [scvFbjson, recFbjson] = await Promise.all([
      readJson("lib/fbjson/SCV/main.fb.schema.json"),
      readJson("lib/fbjson/REC/main.fb.schema.json"),
    ]);

    for (const [label, schema] of [
      ["SCV", scvFbjson],
      ["REC", recFbjson],
    ]) {
      const props = schema.definitions.SCVSensorShapeContract.properties;
      assert.ok(props.MAX_CLOCK_ANGLE_DEG, `${label} should expose MAX_CLOCK_ANGLE_DEG`);
      assert.deepEqual(props.MAX_CLOCK_ANGLE_DEG, {
        type: "number",
        "x-flatbuffer-type": "double",
        "x-flatbuffer-default": "360.0",
      });
    }
  });

  it("does not emit blank lines at EOF in generated C# and Java bindings", async () => {
    const files = (
      await Promise.all([
        listFiles(path.join(repoRoot, "lib", "cs", "SCV"), ".cs"),
        listFiles(path.join(repoRoot, "lib", "cs", "REC"), ".cs"),
        listFiles(path.join(repoRoot, "lib", "java", "SCV"), ".java"),
        listFiles(path.join(repoRoot, "lib", "java", "REC"), ".java"),
      ])
    ).flat();

    for (const file of files) {
      const source = await fs.readFile(file, "utf8");
      assert.doesNotMatch(source, /\n[ \t]*\n$/, file);
    }
  });

  it("generates sensor shape contract bindings without enum or field collisions", async () => {
    const jsMainPath = path.join(repoRoot, "lib", "js", "SCV", "main.js");
    const tsMainPath = path.join(repoRoot, "lib", "ts", "SCV", "main.ts");
    const jsShapeKindPath = path.join(repoRoot, "lib", "js", "SCV", "scvSensorShapeKind.js");
    const tsShapeKindPath = path.join(repoRoot, "lib", "ts", "SCV", "scvSensorShapeKind.ts");
    const jsAxisConventionPath = path.join(
      repoRoot,
      "lib",
      "js",
      "SCV",
      "scvSensorAxisConvention.js",
    );
    const tsAxisConventionPath = path.join(
      repoRoot,
      "lib",
      "ts",
      "SCV",
      "scvSensorAxisConvention.ts",
    );
    const jsShapeContractPath = path.join(
      repoRoot,
      "lib",
      "js",
      "SCV",
      "SCVSensorShapeContract.js",
    );
    const tsShapeContractPath = path.join(
      repoRoot,
      "lib",
      "ts",
      "SCV",
      "SCVSensorShapeContract.ts",
    );
    const cppHeaderPath = path.join(repoRoot, "lib", "cpp", "SCV", "main_generated.h");
    const [
      jsMainSource,
      tsMainSource,
      jsShapeKindSource,
      tsShapeKindSource,
      jsAxisConventionSource,
      tsAxisConventionSource,
      jsShapeContractSource,
      tsShapeContractSource,
      cppHeaderSource,
    ] = await Promise.all([
      fs.readFile(jsMainPath, "utf8"),
      fs.readFile(tsMainPath, "utf8"),
      fs.readFile(jsShapeKindPath, "utf8"),
      fs.readFile(tsShapeKindPath, "utf8"),
      fs.readFile(jsAxisConventionPath, "utf8"),
      fs.readFile(tsAxisConventionPath, "utf8"),
      fs.readFile(jsShapeContractPath, "utf8"),
      fs.readFile(tsShapeContractPath, "utf8"),
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

    for (const source of [jsAxisConventionSource, tsAxisConventionSource]) {
      assert.match(source, /LOCAL_X_RIGHT_Y_UP_Z_BORESIGHT/);
      assert.doesNotMatch(source, /\bUNKNOWN\b/);
    }

    for (const source of [jsShapeContractSource, tsShapeContractSource]) {
      assert.match(source, /SHAPE_KIND/);
      assert.match(source, /RANGE_BOUNDARY/);
      assert.doesNotMatch(source, /RANGE_BOUNDARY_KIND/);
    }

    assert.match(cppHeaderSource, /struct SCVSensorShapeContract/);
    assert.match(cppHeaderSource, /scvSensorShapeKind_SAR_ANNULAR_SECTOR/);
    assert.match(cppHeaderSource, /SHAPE_KIND\(\)/);
    assert.match(cppHeaderSource, /RANGE_BOUNDARY\(\)/);
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
