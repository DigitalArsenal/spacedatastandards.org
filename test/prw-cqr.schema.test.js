import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as flatbuffers from "flatbuffers";

import * as PRW from "../lib/js/PRW/main.js";
import * as CQR from "../lib/js/CQR/main.js";
import * as TIM from "../lib/js/TIM/main.js";
import * as RFM from "../lib/js/RFM/main.js";
import * as REC from "../lib/js/REC/main.js";

function roundTrip(module, code, value) {
  const builder = new flatbuffers.Builder(1024);
  module[code][`finishSizePrefixed${code}Buffer`](builder, value.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), `$${code}`);
  return module[code][`getSizePrefixedRootAs${code}`](new flatbuffers.ByteBuffer(bytes)).unpack();
}

function roundTripTable(type, value) {
  const builder = new flatbuffers.Builder(256);
  builder.finish(value.pack(builder));
  return type[`getRootAs${type.name}`](new flatbuffers.ByteBuffer(builder.asUint8Array())).unpack();
}

function utcEpoch() {
  const instant = new TIM.TIMInstantT();
  instant.TIME_SYSTEM = TIM.timingStandard.UTC;
  instant.EPOCH_FORMAT = TIM.timEpochRepresentation.JULIAN_DATE;
  instant.JULIAN_DATE = 2461299.5;
  return instant;
}

function earthInertialFrame() {
  const origin = new RFM.RFMOriginT();
  origin.KIND = RFM.rfmOriginKind.CELESTIAL_BODY;
  origin.CELESTIAL_BODY_ID = 399;
  const frame = new RFM.RFMCoordinateSystemT();
  frame.NAME = "Earth-inertial";
  frame.AXIS_TYPE = RFM.rfmAxisType.ICRF;
  frame.ORIGIN = origin;
  return frame;
}

describe("PRW execution and CQR generated wire contracts", () => {
  it("decodes the three legacy PRW root slots without requiring appended arms", () => {
    const init = new PRW.PRWInitT();
    init.ENTITY_HANDLES = [7, 19];
    const request = new PRW.PRWBatchRequestT();
    request.EPOCH = 2461299.5;
    request.ENTITY_HANDLES = [19];
    request.OUTPUT_OFFSET = 4096;
    const response = new PRW.PRWBatchResponseT();
    response.COUNT = 1;
    response.OUTPUT_OFFSET = 4096;
    response.STATE_VECTOR_SIZE = 6;
    response.ERROR_CODE = PRW.propagatorErrorCode.UNKNOWN_ENTITY;

    const cases = [
      [0, "INIT", init, decoded => assert.deepEqual(decoded.ENTITY_HANDLES, [7, 19])],
      [1, "BATCH_REQUEST", request, decoded => {
        assert.equal(decoded.EPOCH, 2461299.5);
        assert.deepEqual(decoded.ENTITY_HANDLES, [19]);
        assert.equal(decoded.OUTPUT_OFFSET, 4096);
      }],
      [2, "BATCH_RESPONSE", response, decoded => {
        assert.equal(decoded.COUNT, 1);
        assert.equal(decoded.STATE_VECTOR_SIZE, 6);
        assert.equal(decoded.ERROR_CODE, PRW.propagatorErrorCode.UNKNOWN_ENTITY);
      }],
    ];
    for (const [slot, arm, value, check] of cases) {
      const builder = new flatbuffers.Builder(256);
      const payload = value.pack(builder);
      // Encode the frozen three-slot root independently of today's PRW writer.
      builder.startObject(3);
      builder.addFieldOffset(slot, payload, 0);
      builder.finish(builder.endObject(), "$PRW", true);
      const decoded = PRW.PRW.getSizePrefixedRootAsPRW(
        new flatbuffers.ByteBuffer(builder.asUint8Array()),
      ).unpack();
      check(decoded[arm]);
      for (const other of ["INIT", "BATCH_REQUEST", "BATCH_RESPONSE"].filter(name => name !== arm)) {
        assert.equal(decoded[other], null);
      }
      assert.equal(decoded.EXECUTION_REQUEST, null);
      assert.equal(decoded.VERSION_QUERY, false);
    }
  });

  it("preserves absent burn edges separately from an edge at elapsed time zero", () => {
    const report = new PRW.PRWBurnReportT();
    let decoded = roundTripTable(PRW.PRWBurnReport, report);
    assert.equal(decoded.HAS_START_SECONDS, false);
    assert.equal(decoded.HAS_STOP_SECONDS, false);
    assert.equal(decoded.START_EPOCH, null);

    report.STARTED = true;
    report.START_SECONDS = 0;
    report.HAS_START_SECONDS = true;
    report.START_EPOCH = utcEpoch();
    decoded = roundTripTable(PRW.PRWBurnReport, report);
    assert.equal(decoded.STARTED, true);
    assert.equal(decoded.HAS_START_SECONDS, true);
    assert.equal(decoded.START_SECONDS, 0);
    assert.equal(decoded.HAS_STOP_SECONDS, false);
    assert.equal(decoded.START_EPOCH.TIME_SYSTEM, TIM.timingStandard.UTC);
  });

  it("keeps unmeasured fit bounds absent and a measured zero residual present", () => {
    const instance = new PRW.PRWInstanceT();
    instance.MODULE_ID = "example.propagation";
    instance.INSTANCE_ID = "instance-12";
    instance.GENERATION = 9007199254740993n;
    const result = new PRW.PRWPrepareResultT();
    result.INSTANCE = instance;
    result.COVERAGE_COMPLETE = true;
    result.QUALITY = new PRW.PRWFitQualityT();
    const envelope = new PRW.PRWT();
    envelope.PREPARE_RESULT = result;

    let decoded = roundTrip(PRW, "PRW", envelope).PREPARE_RESULT;
    assert.equal(decoded.INSTANCE.GENERATION, 9007199254740993n);
    assert.equal(decoded.COVERAGE_COMPLETE, true);
    assert.equal(decoded.QUALITY.EVIDENCE_KIND, PRW.prwQualityEvidence.UNMEASURED);
    assert.equal(decoded.QUALITY.HAS_MAXIMUM_POSITION_ERROR_M, false);
    assert.equal(decoded.QUALITY.HAS_MAXIMUM_VELOCITY_ERROR_M_S, false);

    result.QUALITY.EVIDENCE_KIND = PRW.prwQualityEvidence.SAMPLED_RESIDUAL;
    result.QUALITY.MAXIMUM_POSITION_ERROR_M = 0;
    result.QUALITY.MAXIMUM_VELOCITY_ERROR_M_S = 0;
    result.QUALITY.HAS_MAXIMUM_POSITION_ERROR_M = true;
    result.QUALITY.HAS_MAXIMUM_VELOCITY_ERROR_M_S = true;
    result.QUALITY.METHOD = "sample comparison";
    result.QUALITY.REFERENCE_CONTENT_ID = "reference-12";
    decoded = roundTrip(PRW, "PRW", envelope).PREPARE_RESULT;
    assert.equal(decoded.QUALITY.HAS_MAXIMUM_POSITION_ERROR_M, true);
    assert.equal(decoded.QUALITY.MAXIMUM_POSITION_ERROR_M, 0);
    assert.equal(decoded.QUALITY.MAXIMUM_VELOCITY_ERROR_M_S, 0);
    assert.equal(decoded.QUALITY.REFERENCE_CONTENT_ID, "reference-12");
  });

  it("distinguishes an omitted catalog range from an explicit empty range", () => {
    const request = new CQR.CQRCatalogRequestT();
    request.CONTROLS = new CQR.CQRScreeningControlsT();
    request.CONTROLS.START_EPOCH = utcEpoch();
    request.EVALUATION_FRAME = earthInertialFrame();
    const envelope = new CQR.CQRT();
    envelope.CATALOG_REQUEST = request;

    let decoded = roundTrip(CQR, "CQR", envelope).CATALOG_REQUEST;
    assert.equal(decoded.HAS_START_ORDER_INDEX, false);
    assert.equal(decoded.HAS_END_ORDER_INDEX, false);
    assert.equal(decoded.HAS_SECONDARY_START_ORDER_INDEX, false);
    assert.equal(decoded.HAS_SECONDARY_END_ORDER_INDEX, false);

    request.START_ORDER_INDEX = 0;
    request.END_ORDER_INDEX = 0;
    request.HAS_START_ORDER_INDEX = true;
    request.HAS_END_ORDER_INDEX = true;
    decoded = roundTrip(CQR, "CQR", envelope).CATALOG_REQUEST;
    assert.equal(decoded.START_ORDER_INDEX, 0);
    assert.equal(decoded.END_ORDER_INDEX, 0);
    assert.equal(decoded.HAS_START_ORDER_INDEX, true);
    assert.equal(decoded.HAS_SECONDARY_END_ORDER_INDEX, false);
    assert.equal(decoded.EVALUATION_FRAME.ORIGIN.CELESTIAL_BODY_ID, 399);
  });

  it("round-trips typed native CDM bytes through a CQR envelope exactly", () => {
    const content = new TextEncoder().encode(
      "CCSDS_CDM_VERS = 1.0\nCREATION_DATE = 2026-09-15T00:00:00\nORIGINATOR = provider\nCOMMENT = Δ encounter\n",
    );
    const document = new CQR.CQRNativeDocumentT();
    document.SERIALIZATION = CQR.cqrDocumentSyntax.CCSDS_CDM_KVN;
    document.CONTENT = Array.from(content);
    const envelope = new CQR.CQRT();
    envelope.NATIVE_DOCUMENT = document;

    const decoded = roundTrip(CQR, "CQR", envelope);
    assert.equal(decoded.NATIVE_DOCUMENT.SERIALIZATION, CQR.cqrDocumentSyntax.CCSDS_CDM_KVN);
    assert.deepEqual(Array.from(decoded.NATIVE_DOCUMENT.CONTENT), Array.from(content));
    assert.equal(decoded.PROBABILITY_RESULT, null);
  });

  it("preserves probability provenance, algorithm, and optional squared distance", () => {
    const result = new CQR.CQRProbabilityResultT();
    result.PROBABILITY = 0.000125;
    result.ALGORITHM = CQR.cqrProbabilityAlgorithm.CHAN;
    result.UNCERTAINTY_SOURCE = CQR.cqrUncertaintyOrigin.SUPPLIED_COVARIANCE;
    result.CONVERGED = true;
    result.ITERATIONS = 23n;
    const envelope = new CQR.CQRT();
    envelope.PROBABILITY_RESULT = result;

    let decoded = roundTrip(CQR, "CQR", envelope).PROBABILITY_RESULT;
    assert.equal(decoded.PROBABILITY, 0.000125);
    assert.equal(decoded.ALGORITHM, CQR.cqrProbabilityAlgorithm.CHAN);
    assert.equal(decoded.UNCERTAINTY_SOURCE, CQR.cqrUncertaintyOrigin.SUPPLIED_COVARIANCE);
    assert.equal(decoded.ITERATIONS, 23n);
    assert.equal(decoded.HAS_MAXIMUM_PROBABILITY, false);
    assert.equal(decoded.HAS_MAHALANOBIS_SQUARED, false);

    result.PROBABILITY = 0;
    result.MAXIMUM_PROBABILITY = 0;
    result.MAHALANOBIS_SQUARED = 0;
    result.HAS_MAXIMUM_PROBABILITY = true;
    result.HAS_MAHALANOBIS_SQUARED = true;
    decoded = roundTrip(CQR, "CQR", envelope).PROBABILITY_RESULT;
    assert.equal(decoded.PROBABILITY, 0);
    assert.equal(decoded.HAS_MAXIMUM_PROBABILITY, true);
    assert.equal(decoded.MAXIMUM_PROBABILITY, 0);
    assert.equal(decoded.MAHALANOBIS_SQUARED, 0);
  });

  it("appends CQR at REC ordinal 248 and unpacks its generated union member", () => {
    const contract = JSON.parse(readFileSync(
      new URL("../schema/REC/RECORDTYPE_ORDINALS.json", import.meta.url), "utf8",
    ));
    assert.equal(contract.ordinals.GCT, 247);
    assert.equal(contract.ordinals.CQR, 248);
    assert.ok(contract.frozen_through >= 248);
    assert.equal(REC.RecordType.GCT, 247);
    assert.equal(REC.RecordType.CQR, 248);

    const query = new CQR.CQRT();
    query.VERSION_QUERY = true;
    const collection = new REC.RECT();
    collection.RECORDS = [new REC.RecordT(REC.RecordType.CQR, query, "CQR")];
    const decoded = roundTrip(REC, "REC", collection).RECORDS[0];
    assert.equal(decoded.value_type, 248);
    assert.equal(decoded.standard, "CQR");
    assert.equal(decoded.value.VERSION_QUERY, true);
  });
});
