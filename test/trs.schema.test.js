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

describe("TRS schema generation", () => {
  it("defines the terrain raster solve request/result envelope", async () => {
    const schemaSource = await readUtf8("schema/TRS/main.fbs");

    for (const token of [
      "enum trsSolverTier : byte",
      "LOS_OCCLUSION = 1",
      "DIFFRACTION_ASSISTED = 2",
      "SPECULAR_SINGLE_BOUNCE = 3",
      "enum trsPropagationModel : byte",
      "FREE_SPACE = 0",
      "TWO_RAY_GROUND = 1",
      "ITU_TERRAIN = 6",
      "KNIFE_EDGE = 7",
      "MULTI_KNIFE_EDGE = 8",
      "BULLINGTON = 9",
      "LONGLEY_RICE = 10",
      "CUSTOM = 99",
      "enum trsResultStatus : byte",
      "INVALID_INPUT = 1",
      "REFUSED = 2",
      "enum trsPathClass : byte",
      "OPEN = 0",
      "GRAZING = 1",
      "DIFFRACTED = 2",
      "table TRSRequest",
      "GRID_WIDTH: uint32",
      "GRID_HEIGHT: uint32",
      "PROFILE_WIDTH: uint32",
      "PROFILE_HEIGHT: uint32",
      "SOLVER_TIER: trsSolverTier",
      "PROPAGATION_MODEL: trsPropagationModel",
      "ATMOSPHERIC_MODEL_MASK: uint32",
      "THREAD_COUNT_HINT: uint32",
      "MIN_EAST_M: double",
      "MIN_NORTH_M: double",
      "PROFILE_CELL_WIDTH_M: double",
      "PROFILE_CELL_HEIGHT_M: double",
      "PROFILE_SPACING_M: double",
      "MINIMUM_STEP_M: double",
      "TX_LOCAL_X_M: double",
      "TX_ECEF_X_M: double",
      "TX_ABSOLUTE_HEIGHT_M: double",
      "TX_SURFACE_HEIGHT_M: double",
      "INVERSE_ENU_TRANSFORM: [double]",
      "TARGET_HEIGHT_M: double",
      "FREQUENCY_HZ: double",
      "BANDWIDTH_HZ: double",
      "TX_POWER_W: double",
      "TX_GAIN_DBI: double",
      "TX_LINE_LOSS_DB: double",
      "RX_GAIN_DBI: double",
      "RX_LINE_LOSS_DB: double",
      "RX_NOISE_FIGURE_DB: double",
      "EFFECTIVE_EARTH_RADIUS_FACTOR: double",
      "GRID_LONGITUDE_RAD: [double]",
      "GRID_LATITUDE_RAD: [double]",
      "GROUND_HEIGHTS_M: [float32]",
      "PROFILE_HEIGHTS_M: [float32]",
      "PROFILE_SURFACE_Z_M: [float32]",
      "table TRSResult",
      "STATUS: trsResultStatus",
      "ERROR_MESSAGE: string",
      "VISIBLE_MASK: [uint8]",
      "OCCLUDED_MASK: [uint8]",
      "POSITIVE_LINK_MASK: [uint8]",
      "PATH_CLASS: [trsPathClass]",
      "PATH_LOSS_DB: [float32]",
      "EXCESS_LOSS_DB: [float32]",
      "LINK_MARGIN_DB: [float32]",
      "DIFFRACTION_PARAMETER: [float32]",
      "REFLECTION_CONTRIBUTION_DB: [float32]",
      "TRACE_ID: string",
      "REQUEST: TRSRequest",
      "RESULT: TRSResult",
      "root_type TRS;",
      'file_identifier "$TRS";',
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("states the compute-envelope doctrine in the IDL", async () => {
    const schemaSource = await readUtf8("schema/TRS/main.fbs");

    for (const token of [
      "EPHEMERAL COMPUTE ENVELOPE",
      "RASTER-IN / RASTER-OUT",
      "REFUSAL, NEVER FALLBACK",
      "EVERY LAYER, EVERY CELL",
      "ABSENT IS NOT ZERO",
      "NaN is a non-default value",
      "dual-accept wire-format rule",
      "ITU-R P.526-15",
    ]) {
      assert.match(schemaSource, escapedTokenRegex(token));
    }
  });

  it("holds the TRS ordinal append at 209 in the wire-frozen union", async () => {
    const [ordinals, recSource, recordTypeTs] = await Promise.all([
      readUtf8("schema/REC/RECORDTYPE_ORDINALS.json"),
      readUtf8("schema/REC/main.fbs"),
      readUtf8("lib/ts/REC/RecordType.ts"),
    ]);

    const contract = JSON.parse(ordinals);
    assert.equal(contract.ordinals.TRS, 209);
    assert.equal(contract.ordinals.RFS, 208);
    assert.equal(contract.member_count, 209);
    assert.match(recSource, /RFL,\s*RFS,\s*TRS/s);
    assert.match(recordTypeTs, /RFS = 208/);
    assert.match(recordTypeTs, /TRS = 209/);
  });

  it("generates TRS bindings for TypeScript, C++, and JSON schema consumers", async () => {
    const [
      tsMainSource,
      tsRequestSource,
      tsResultSource,
      cppSource,
      jsonSchemaSource,
      fbJsonSchemaSource,
    ] = await Promise.all([
      readUtf8("lib/ts/TRS/main.ts"),
      readUtf8("lib/ts/TRS/TRSRequest.ts"),
      readUtf8("lib/ts/TRS/TRSResult.ts"),
      readUtf8("lib/cpp/TRS/main_generated.h"),
      readUtf8("lib/json/TRS/main.schema.json"),
      readUtf8("lib/fbjson/TRS/main.fb.schema.json"),
    ]);

    for (const token of [
      "from './TRS.js';",
      "from './TRSRequest.js';",
      "from './TRSResult.js';",
      "from './trsSolverTier.js';",
      "from './trsPropagationModel.js';",
      "from './trsResultStatus.js';",
      "from './trsPathClass.js';",
    ]) {
      assert.match(tsMainSource, escapedTokenRegex(token));
    }

    for (const token of [
      "GRID_WIDTH():number",
      "SOLVER_TIER():trsSolverTier",
      "PROPAGATION_MODEL():trsPropagationModel",
      "INVERSE_ENU_TRANSFORM(index: number",
      "GRID_LONGITUDE_RAD(index: number",
      "GROUND_HEIGHTS_M(index: number",
      "PROFILE_SURFACE_Z_M(index: number",
      "TRACE_ID():string|null",
    ]) {
      assert.match(tsRequestSource, escapedTokenRegex(token));
    }

    for (const token of [
      "STATUS():trsResultStatus",
      "VISIBLE_MASK(index: number",
      "PATH_CLASS(index: number",
      "PATH_LOSS_DB(index: number",
      "LINK_MARGIN_DB(index: number",
      "DIFFRACTION_PARAMETER(index: number",
      "REFLECTION_CONTRIBUTION_DB(index: number",
      "TRACE_ID():string|null",
    ]) {
      assert.match(tsResultSource, escapedTokenRegex(token));
    }

    for (const token of [
      "struct TRSRequest",
      "struct TRSResult",
      "struct TRS",
      "TRSIdentifier()",
    ]) {
      assert.match(cppSource, escapedTokenRegex(token));
    }

    for (const token of ['"TRSRequest"', '"TRSResult"', '"trsPathClass"']) {
      assert.match(jsonSchemaSource, escapedTokenRegex(token));
      assert.match(fbJsonSchemaSource, escapedTokenRegex(token));
    }
  });

  it("round-trips a request/result envelope through the generated JS bindings", async () => {
    const flatbuffers = await import("flatbuffers");
    const { TRS } = await import("../lib/js/TRS/TRS.js");
    const { TRSRequest } = await import("../lib/js/TRS/TRSRequest.js");
    const { TRSResult } = await import("../lib/js/TRS/TRSResult.js");
    const { trsSolverTier } = await import("../lib/js/TRS/trsSolverTier.js");
    const { trsPropagationModel } = await import(
      "../lib/js/TRS/trsPropagationModel.js"
    );
    const { trsResultStatus } = await import(
      "../lib/js/TRS/trsResultStatus.js"
    );
    const { trsPathClass } = await import("../lib/js/TRS/trsPathClass.js");

    const builder = new flatbuffers.Builder(1024);

    const traceId = builder.createString("trs-roundtrip-1");
    const inverseTransform = TRSRequest.createInverseEnuTransformVector(
      builder,
      Array.from({ length: 16 }, (_, index) => (index % 5 === 0 ? 1 : 0)),
    );
    const gridLon = TRSRequest.createGridLongitudeRadVector(builder, [
      -1.919, -1.918, -1.917, -1.916,
    ]);
    const gridLat = TRSRequest.createGridLatitudeRadVector(builder, [
      0.593, 0.593, 0.594, 0.594,
    ]);
    const groundHeights = TRSRequest.createGroundHeightsMVector(builder, [
      120.5, 130.25, 95.0, 88.75,
    ]);
    const profileHeights = TRSRequest.createProfileHeightsMVector(builder, [
      120.5, 135.0, 130.25, 99.5, 95.0, 90.0, 88.75, 87.5, 86.0,
    ]);
    const profileSurfaceZ = TRSRequest.createProfileSurfaceZMVector(
      builder,
      [20.5, 35.0, 30.25, -0.5, -5.0, -10.0, -11.25, -12.5, -14.0],
    );

    TRSRequest.startTRSRequest(builder);
    TRSRequest.addGridWidth(builder, 2);
    TRSRequest.addGridHeight(builder, 2);
    TRSRequest.addProfileWidth(builder, 3);
    TRSRequest.addProfileHeight(builder, 3);
    TRSRequest.addSolverTier(builder, trsSolverTier.DIFFRACTION_ASSISTED);
    TRSRequest.addPropagationModel(
      builder,
      trsPropagationModel.ITU_TERRAIN,
    );
    TRSRequest.addAtmosphericModelMask(builder, 0);
    TRSRequest.addThreadCountHint(builder, 8);
    TRSRequest.addMinEastM(builder, -2400.0);
    TRSRequest.addMinNorthM(builder, -2400.0);
    TRSRequest.addProfileCellWidthM(builder, 1600.0);
    TRSRequest.addProfileCellHeightM(builder, 1600.0);
    TRSRequest.addProfileSpacingM(builder, 25.0);
    TRSRequest.addMinimumStepM(builder, 25.0);
    TRSRequest.addTxLocalXM(builder, 0.0);
    TRSRequest.addTxLocalYM(builder, 0.0);
    TRSRequest.addTxLocalZM(builder, 30.0);
    TRSRequest.addTxEcefXM(builder, -1794906.5);
    TRSRequest.addTxEcefYM(builder, -4477624.0);
    TRSRequest.addTxEcefZM(builder, 3565246.75);
    TRSRequest.addTxAbsoluteHeightM(builder, 150.5);
    TRSRequest.addTxSurfaceHeightM(builder, 120.5);
    TRSRequest.addInverseEnuTransform(builder, inverseTransform);
    TRSRequest.addTargetHeightM(builder, 1.5);
    TRSRequest.addFrequencyHz(builder, 2.4e9);
    TRSRequest.addBandwidthHz(builder, Number.NaN);
    TRSRequest.addTxPowerW(builder, 10.0);
    TRSRequest.addTxGainDbi(builder, 12.0);
    TRSRequest.addTxLineLossDb(builder, 0.5);
    TRSRequest.addRxGainDbi(builder, 2.15);
    TRSRequest.addRxLineLossDb(builder, 0.0);
    TRSRequest.addRxNoiseFigureDb(builder, 3.0);
    TRSRequest.addEffectiveEarthRadiusFactor(builder, 4 / 3);
    TRSRequest.addGridLongitudeRad(builder, gridLon);
    TRSRequest.addGridLatitudeRad(builder, gridLat);
    TRSRequest.addGroundHeightsM(builder, groundHeights);
    TRSRequest.addProfileHeightsM(builder, profileHeights);
    TRSRequest.addProfileSurfaceZM(builder, profileSurfaceZ);
    TRSRequest.addTraceId(builder, traceId);
    const request = TRSRequest.endTRSRequest(builder);

    const resultTrace = builder.createString("trs-roundtrip-1");
    const visibleMask = TRSResult.createVisibleMaskVector(
      builder,
      [1, 0, 1, 1],
    );
    const occludedMask = TRSResult.createOccludedMaskVector(
      builder,
      [0, 1, 0, 0],
    );
    const positiveLinkMask = TRSResult.createPositiveLinkMaskVector(
      builder,
      [1, 0, 1, 0],
    );
    const pathClass = TRSResult.createPathClassVector(builder, [
      trsPathClass.OPEN,
      trsPathClass.DIFFRACTED,
      trsPathClass.GRAZING,
      trsPathClass.OPEN,
    ]);
    const pathLoss = TRSResult.createPathLossDbVector(builder, [
      110.25, 145.5, 118.75, 121.0,
    ]);
    const excessLoss = TRSResult.createExcessLossDbVector(builder, [
      0.0, 35.25, 8.5, 10.75,
    ]);
    const linkMargin = TRSResult.createLinkMarginDbVector(builder, [
      12.5, -22.75, 4.0, -0.25,
    ]);
    const diffractionParameter =
      TRSResult.createDiffractionParameterVector(builder, [
        -10.0, 2.5, -0.25, -10.0,
      ]);
    const reflectionContribution =
      TRSResult.createReflectionContributionDbVector(builder, [0, 0, 0, 0]);

    TRSResult.startTRSResult(builder);
    TRSResult.addStatus(builder, trsResultStatus.OK);
    TRSResult.addGridWidth(builder, 2);
    TRSResult.addGridHeight(builder, 2);
    TRSResult.addVisibleMask(builder, visibleMask);
    TRSResult.addOccludedMask(builder, occludedMask);
    TRSResult.addPositiveLinkMask(builder, positiveLinkMask);
    TRSResult.addPathClass(builder, pathClass);
    TRSResult.addPathLossDb(builder, pathLoss);
    TRSResult.addExcessLossDb(builder, excessLoss);
    TRSResult.addLinkMarginDb(builder, linkMargin);
    TRSResult.addDiffractionParameter(builder, diffractionParameter);
    TRSResult.addReflectionContributionDb(builder, reflectionContribution);
    TRSResult.addTraceId(builder, resultTrace);
    const result = TRSResult.endTRSResult(builder);

    TRS.startTRS(builder);
    TRS.addRequest(builder, request);
    TRS.addResult(builder, result);
    const envelope = TRS.endTRS(builder);
    TRS.finishTRSBuffer(builder, envelope);

    const bytes = builder.asUint8Array();
    const decoded = TRS.getRootAsTRS(
      new flatbuffers.ByteBuffer(bytes),
    );

    const decodedRequest = decoded.REQUEST();
    assert.equal(decodedRequest.GRID_WIDTH(), 2);
    assert.equal(decodedRequest.PROFILE_WIDTH(), 3);
    assert.equal(
      decodedRequest.SOLVER_TIER(),
      trsSolverTier.DIFFRACTION_ASSISTED,
    );
    assert.equal(
      decodedRequest.PROPAGATION_MODEL(),
      trsPropagationModel.ITU_TERRAIN,
    );
    assert.equal(decodedRequest.inverseEnuTransformLength(), 16);
    assert.equal(decodedRequest.INVERSE_ENU_TRANSFORM(0), 1);
    assert.equal(decodedRequest.FREQUENCY_HZ(), 2.4e9);
    assert.ok(Number.isNaN(decodedRequest.BANDWIDTH_HZ()));
    assert.equal(decodedRequest.GROUND_HEIGHTS_M(1), 130.25);
    assert.equal(decodedRequest.profileHeightsMLength(), 9);
    assert.equal(decodedRequest.TRACE_ID(), "trs-roundtrip-1");

    const decodedResult = decoded.RESULT();
    assert.equal(decodedResult.STATUS(), trsResultStatus.OK);
    assert.equal(decodedResult.VISIBLE_MASK(1), 0);
    assert.equal(decodedResult.OCCLUDED_MASK(1), 1);
    assert.equal(
      decodedResult.PATH_CLASS(1),
      trsPathClass.DIFFRACTED,
    );
    assert.equal(decodedResult.PATH_LOSS_DB(0), 110.25);
    assert.equal(decodedResult.LINK_MARGIN_DB(1), -22.75);
    assert.equal(decodedResult.DIFFRACTION_PARAMETER(0), -10.0);
    assert.equal(decodedResult.REFLECTION_CONTRIBUTION_DB(3), 0);
    assert.equal(decodedResult.TRACE_ID(), "trs-roundtrip-1");
  });
});
