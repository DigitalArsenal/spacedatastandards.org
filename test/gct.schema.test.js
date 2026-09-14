import assert from "node:assert/strict";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readUtf8(relativePath) {
  return fs.readFile(path.join(repoRoot, relativePath), "utf8");
}

function escapedTokenRegex(token) {
  return new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

describe("GCT schema generation", () => {
  it("defines the Gaussian cloud tile record", async () => {
    const schemaSource = await readUtf8("schema/GCT/main.fbs");

    for (const token of [
      'include "../WXF/main.fbs";',
      "enum gctTilingScheme : byte",
      "GEOGRAPHIC_QUADTREE = 0",
      "enum gctRefinement : byte",
      "REPLACE = 0",
      "ADD = 1",
      "enum gctFieldQuantity : byte",
      "CLOUD_EXTINCTION = 1",
      "VOLCANIC_ASH_EXTINCTION = 2",
      "CONDENSATE_MIXING_RATIO = 5",
      "OTHER = 99",
      "enum gctCloudGenus : byte",
      "CUMULUS_HUMILIS = 1",
      "CUMULONIMBUS = 4",
      "STRATOCUMULUS = 5",
      "CIRRUS = 8",
      "TILE_MIXTURE = 10",
      "enum gctLevelDerivation : byte",
      "GRID_MERGE = 2",
      "CLUSTER_MERGE = 3",
      "enum gctSampleEncoding : byte",
      "INLINE_FLOAT32 = 0",
      "CONTENT_ADDRESSED_CHUNK = 1",
      "enum gctVariantScope : byte",
      "SHARED_LIBRARY = 1",
      "table GCTLevel",
      "GAUSSIAN_COUNT: uint32",
      "MERGE_CELL_M: float",
      "DERIVATION: gctLevelDerivation",
      "ENCODING: gctSampleEncoding",
      "CENTERS: [float]",
      "SIGMAS: [float]",
      "BOUNDARY: [float]",
      "FINE_NORMAL: [float]",
      "OPTICAL_DEPTH_POS: [float]",
      "OPTICAL_DEPTH_NEG: [float]",
      "table GCTDistanceField",
      "DISTANCE_SCALE_M: float",
      "DATA: [int8]",
      "table GCTDensityVolume",
      "DATA: [uint16]",
      "table GCTVariant",
      "VARIANT_ID: string (required)",
      "SCOPE: gctVariantScope",
      "VARIANT_CID: string",
      "GENUS: gctCloudGenus",
      "LEVELS: [GCTLevel]",
      "MASS: double",
      "DISTANCE_FIELD: GCTDistanceField",
      "DENSITY_VOLUME: GCTDensityVolume",
      "table GCTInstance",
      "VARIANT: uint32",
      "X_M: float",
      "SCALE_X: float = 1",
      "YAW_RAD: float",
      "SYMMETRY: uint8",
      "EROSION: float",
      "CLOUD_ID: uint64",
      "CLUSTER_ID: uint32",
      "SHAPE_ERROR_M: float",
      "WIDTH_M: float",
      "table GCTCoverGrid",
      "LOW_COVER: [float]",
      "BASE_HEIGHT_M: [float]",
      "TOP_HEIGHT_M: [float]",
      "COLUMN_OPTICAL_DEPTH: [float]",
      "table GCT",
      "FIELD_ID: string (required)",
      "TILING: gctTilingScheme",
      "LEVEL: uint8",
      "X: uint32",
      "Y: uint32",
      "CHILD_MASK: uint8",
      "MAX_LEVEL: uint8 = 255",
      "REFINE: gctRefinement",
      "GEOMETRIC_ERROR_M: float",
      "WEST_RAD: double",
      "MIN_HEIGHT_M: double",
      "ORIGIN_LON_RAD: double",
      "ENU_TO_ECEF: [double]",
      "FIELD_QUANTITY: gctFieldQuantity",
      "AMPLITUDE_UNITS: string (required)",
      "MASS_TOLERANCE: float",
      "VARIANTS: [GCTVariant]",
      "INSTANCES: [GCTInstance]",
      "COVER: GCTCoverGrid",
      "VALID_TIME_MS: uint64",
      "TIME_BASIS: wxfTimeBasis",
      "MODEL_CLASS: wxfModelClass",
      "SOURCE_FIELD_IDS: [string]",
      "PRODUCER_VERSION: string",
      "AUTHORING_SEED: uint32",
      "LICENSE_CLASS: wxfLicenseClass",
      "root_type GCT;",
      'file_identifier "$GCT";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("states the tile doctrine and the aligned-binary twin in the IDL", async () => {
    const schemaSource = await readUtf8("schema/GCT/main.fbs");

    for (const token of [
      "DURABLE DERIVED PRODUCT",
      "DIVISION OF LABOUR",
      "GEOMETRIC ERROR IS THE MERGE CELL",
      "REFINEMENT IS EXACT",
      "UNITS ARE NAMED",
      "ABSENT IS NOT ZERO",
      "THE ALIGNED-BINARY TWIN (normative)",
      "TAB.ALIGNMENT` = 64",
      "SECTION_KIND",
      "ROW_TEXELS",
      "REQUIRED_ALIGNMENT 64",
      "ORDINALS ARE WIRE VALUES",
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("holds the GCT ordinal append at 247 in the wire-frozen union", async () => {
    const [ordinals, recSource, recordTypeTs] = await Promise.all([
      readUtf8("schema/REC/RECORDTYPE_ORDINALS.json"),
      readUtf8("schema/REC/main.fbs"),
      readUtf8("lib/ts/REC/RecordType.ts"),
    ]);

    const contract = JSON.parse(ordinals);
    assert.equal(contract.ordinals.GCT, 247);
    assert.equal(contract.ordinals.CLM, 246);
    assert.ok(contract.member_count >= 247);
    assert.match(recSource, /CLM,\s*GCT/s);
    assert.match(recordTypeTs, /CLM = 246/);
    assert.match(recordTypeTs, /GCT = 247/);
  });

  it("generates GCT bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [tsMainSource, tsTileSource, tsLevelSource, cppSource, jsonSchemaSource, fbJsonSchemaSource] =
      await Promise.all([
        readUtf8("lib/ts/GCT/main.ts"),
        readUtf8("lib/ts/GCT/GCT.ts"),
        readUtf8("lib/ts/GCT/GCTLevel.ts"),
        readUtf8("lib/cpp/GCT/main_generated.h"),
        readUtf8("lib/json/GCT/main.schema.json"),
        readUtf8("lib/fbjson/GCT/main.fb.schema.json"),
      ]);

    for (const token of [
      "from './GCT.js';",
      "from './GCTLevel.js';",
      "from './GCTVariant.js';",
      "from './GCTInstance.js';",
      "from './GCTCoverGrid.js';",
      "from './gctFieldQuantity.js';",
      "from './gctCloudGenus.js';",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(token));
    }

    for (const token of [
      "LEVEL():number",
      "GEOMETRIC_ERROR_M():number",
      "ENU_TO_ECEF(index: number",
      "FIELD_QUANTITY():gctFieldQuantity",
      "AMPLITUDE_UNITS():string",
    ]) {
      assert.match(tsTileSource, escapedTokenRegex(token));
    }

    for (const token of [
      "GAUSSIAN_COUNT():number",
      "MERGE_CELL_M():number",
      "CENTERS(index: number",
      "centersArray():Float32Array|null",
      "SIGMAS(index: number",
      "sigmasArray():Float32Array|null",
    ]) {
      assert.match(tsLevelSource, escapedTokenRegex(token));
    }

    for (const token of ["struct GCTLevel", "struct GCTVariant", "struct GCTInstance", "struct GCT", "GCTIdentifier()"]) {
      assert.match(cppSource, escapedTokenRegex(token));
    }

    for (const token of ['"GCTLevel"', '"GCTInstance"', '"gctCloudGenus"']) {
      assert.match(jsonSchemaSource, escapedTokenRegex(token));
      assert.match(fbJsonSchemaSource, escapedTokenRegex(token));
    }
  });

  it("round-trips a tile through the generated JS bindings with zero-copy texel views", async () => {
    const flatbuffers = await import("flatbuffers");
    const { GCT } = await import("../lib/js/GCT/GCT.js");
    const { GCTLevel } = await import("../lib/js/GCT/GCTLevel.js");
    const { GCTVariant } = await import("../lib/js/GCT/GCTVariant.js");
    const { GCTInstance } = await import("../lib/js/GCT/GCTInstance.js");
    const { gctFieldQuantity } = await import("../lib/js/GCT/gctFieldQuantity.js");
    const { gctCloudGenus } = await import("../lib/js/GCT/gctCloudGenus.js");
    const { gctLevelDerivation } = await import("../lib/js/GCT/gctLevelDerivation.js");

    const builder = new flatbuffers.Builder(4096);

    // Two Gaussians: one texel each for centers (x, y, z, amplitude) and sigmas (sx, sy, sz, seed).
    const centers = GCTLevel.createCentersVector(builder, [100, 200, 1500, 0.01, -300, 50, 1800, 0.008]);
    const sigmas = GCTLevel.createSigmasVector(builder, [80, 80, 60, 0.25, 120, 90, 70, 0.75]);
    GCTLevel.startGCTLevel(builder);
    GCTLevel.addGaussianCount(builder, 2);
    GCTLevel.addMergeCellM(builder, 160);
    GCTLevel.addDerivation(builder, gctLevelDerivation.GRID_MERGE);
    GCTLevel.addCenters(builder, centers);
    GCTLevel.addSigmas(builder, sigmas);
    const level = GCTLevel.endGCTLevel(builder);

    const variantId = builder.createString("cluster-42");
    const levels = GCTVariant.createLevelsVector(builder, [level]);
    const boundsMin = GCTVariant.createBoundsMinMVector(builder, [-2200, -2600, -50]);
    const boundsMax = GCTVariant.createBoundsMaxMVector(builder, [2100, 2600, 2500]);
    GCTVariant.startGCTVariant(builder);
    GCTVariant.addVariantId(builder, variantId);
    GCTVariant.addGenus(builder, gctCloudGenus.CUMULUS_MEDIOCRIS);
    GCTVariant.addLevels(builder, levels);
    GCTVariant.addBoundsMinM(builder, boundsMin);
    GCTVariant.addBoundsMaxM(builder, boundsMax);
    GCTVariant.addMass(builder, 2.04e7);
    GCTVariant.addAuthoringSeed(builder, 7351);
    const variant = GCTVariant.endGCTVariant(builder);

    GCTInstance.startGCTInstance(builder);
    GCTInstance.addVariant(builder, 0);
    GCTInstance.addXM(builder, 4200.5);
    GCTInstance.addYM(builder, -1800.25);
    GCTInstance.addZM(builder, 1450);
    GCTInstance.addScaleX(builder, 1.1);
    GCTInstance.addScaleY(builder, 0.95);
    GCTInstance.addScaleZ(builder, 1);
    GCTInstance.addYawRad(builder, 0.4);
    GCTInstance.addSymmetry(builder, 5);
    GCTInstance.addErosion(builder, 1);
    GCTInstance.addCloudId(builder, BigInt("0x9e3779b97f4a7c15"));
    GCTInstance.addClusterId(builder, 42);
    GCTInstance.addShapeErrorM(builder, 0);
    GCTInstance.addWidthM(builder, 4300);
    const instance = GCTInstance.endGCTInstance(builder);

    const fieldId = builder.createString("gfs-2026-09-14T12Z-clouds");
    const units = builder.createString("m-1");
    const producerVersion = builder.createString("orbpro-gaussian-clouds 0.13.0");
    const sourceIds = GCT.createSourceFieldIdsVector(builder, [
      builder.createString("wxf-lcc"),
      builder.createString("wxf-t2m"),
      builder.createString("wxf-td2m"),
    ]);
    const enuToEcef = GCT.createEnuToEcefVector(
      builder,
      Array.from({ length: 16 }, (_, index) => (index % 5 === 0 ? 1 : 0)),
    );
    const variants = GCT.createVariantsVector(builder, [variant]);
    const instances = GCT.createInstancesVector(builder, [instance]);

    GCT.startGCT(builder);
    GCT.addFieldId(builder, fieldId);
    GCT.addLevel(builder, 12);
    GCT.addX(builder, 1543);
    GCT.addY(builder, 1226);
    GCT.addChildMask(builder, 0b1011);
    GCT.addMaxLevel(builder, 13);
    GCT.addGeometricErrorM(builder, 160);
    GCT.addWestRad(builder, -1.9575);
    GCT.addSouthRad(builder, 0.6299);
    GCT.addEastRad(builder, -1.9565);
    GCT.addNorthRad(builder, 0.6309);
    GCT.addMinHeightM(builder, 1000);
    GCT.addMaxHeightM(builder, 4200);
    GCT.addOriginLonRad(builder, -1.957);
    GCT.addOriginLatRad(builder, 0.6304);
    GCT.addOriginHeightM(builder, 0);
    GCT.addEnuToEcef(builder, enuToEcef);
    GCT.addFieldQuantity(builder, gctFieldQuantity.CLOUD_EXTINCTION);
    GCT.addAmplitudeUnits(builder, units);
    GCT.addMassTolerance(builder, 0.01);
    GCT.addVariants(builder, variants);
    GCT.addInstances(builder, instances);
    GCT.addValidTimeMs(builder, BigInt(1789387200000));
    GCT.addInitTimeMs(builder, BigInt(1789344000000));
    GCT.addLeadHours(builder, 12);
    GCT.addSourceFieldIds(builder, sourceIds);
    GCT.addProducerVersion(builder, producerVersion);
    GCT.addAuthoringSeed(builder, 7351);
    const tile = GCT.endGCT(builder);
    GCT.finishGCTBuffer(builder, tile);

    const bytes = builder.asUint8Array();
    assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), "$GCT");
    const decoded = GCT.getRootAsGCT(new flatbuffers.ByteBuffer(bytes));

    assert.equal(decoded.FIELD_ID(), "gfs-2026-09-14T12Z-clouds");
    assert.equal(decoded.LEVEL(), 12);
    assert.equal(decoded.X(), 1543);
    assert.equal(decoded.Y(), 1226);
    assert.equal(decoded.CHILD_MASK(), 0b1011);
    assert.equal(decoded.MAX_LEVEL(), 13);
    assert.equal(decoded.GEOMETRIC_ERROR_M(), 160);
    assert.equal(decoded.enuToEcefLength(), 16);
    assert.equal(decoded.ENU_TO_ECEF(5), 1);
    assert.equal(decoded.FIELD_QUANTITY(), gctFieldQuantity.CLOUD_EXTINCTION);
    assert.equal(decoded.AMPLITUDE_UNITS(), "m-1");
    assert.equal(decoded.sourceFieldIdsLength(), 3);
    assert.equal(decoded.SOURCE_FIELD_IDS(1), "wxf-t2m");
    assert.equal(decoded.VALID_TIME_MS(), BigInt(1789387200000));
    assert.equal(decoded.LEAD_HOURS(), 12);

    const decodedInstance = decoded.INSTANCES(0);
    assert.equal(decodedInstance.VARIANT(), 0);
    assert.equal(decodedInstance.X_M(), 4200.5);
    assert.equal(decodedInstance.SYMMETRY(), 5);
    assert.equal(decodedInstance.CLOUD_ID(), BigInt("0x9e3779b97f4a7c15"));
    assert.equal(decodedInstance.CLUSTER_ID(), 42);
    assert.equal(decodedInstance.WIDTH_M(), 4300);

    const decodedVariant = decoded.VARIANTS(0);
    assert.equal(decodedVariant.VARIANT_ID(), "cluster-42");
    assert.equal(decodedVariant.GENUS(), gctCloudGenus.CUMULUS_MEDIOCRIS);
    assert.equal(decodedVariant.MASS(), 2.04e7);
    assert.equal(decodedVariant.BOUNDS_MAX_M(2), 2500);

    const decodedLevel = decodedVariant.LEVELS(0);
    assert.equal(decodedLevel.GAUSSIAN_COUNT(), 2);
    assert.equal(decodedLevel.MERGE_CELL_M(), 160);
    assert.equal(decodedLevel.DERIVATION(), gctLevelDerivation.GRID_MERGE);
    assert.equal(decodedLevel.centersLength(), 8);
    assert.equal(decodedLevel.CENTERS(2), 1500);
    assert.equal(decodedLevel.SIGMAS(7), 0.75);
    // A level whose optional layers were not computed has them ABSENT, not zero.
    assert.equal(decodedLevel.boundaryLength(), 0);
    assert.equal(decodedLevel.boundaryArray(), null);

    // Zero copy: the texel arrays are Float32Array views on the received bytes themselves — one RGBA32F texel
    // per Gaussian, 4-byte aligned as a Float32Array and texSubImage2D require — never a copy.
    const centersView = decodedLevel.centersArray();
    const sigmasView = decodedLevel.sigmasArray();
    assert.ok(centersView instanceof Float32Array);
    assert.equal(centersView.buffer, bytes.buffer);
    assert.equal(centersView.byteOffset % 4, 0);
    assert.equal(centersView.length, 8);
    assert.deepEqual(Array.from(centersView), [100, 200, 1500, Math.fround(0.01), -300, 50, 1800, Math.fround(0.008)]);
    assert.equal(sigmasView.buffer, bytes.buffer);
    assert.deepEqual(Array.from(sigmasView.subarray(4, 8)), [120, 90, 70, 0.75]);
  });
});
