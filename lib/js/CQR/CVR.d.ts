import * as flatbuffers from 'flatbuffers';
import { covarianceCalibration } from './covarianceCalibration.js';
import { covarianceRule } from './covarianceRule.js';
/**
 * Covariance Realism
 */
export declare class CVR implements flatbuffers.IUnpackableObject<CVRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVR;
    static getRootAsCVR(bb: flatbuffers.ByteBuffer, obj?: CVR): CVR;
    static getSizePrefixedRootAsCVR(bb: flatbuffers.ByteBuffer, obj?: CVR): CVR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The rule that produced the covariance. In a CCSDS covariance block,
     * Operator keeps the operator's COV_BASIS, ScaledFit is DETERMINED, and
     * SourceModel and PooledModel are EMPIRICAL with MODEL_ID as COV_BASIS_ID.
     */
    RULE(): covarianceRule;
    /**
     * Identifier of the error model (SourceModel, PooledModel) or of the
     * measured realism factor (ScaledFit) the covariance came from. Empty for
     * Operator.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit regime of the cell, as the model names it.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Age of the element set at the covariance's epoch, in days. NaN when the
     * covariance is not an element set's.
     */
    AGE_DAYS(): number;
    /**
     * Prediction horizon of the cell, in days: the element-set age its
     * statistics were measured at. NaN when no cell applies.
     */
    HORIZON_DAYS(): number;
    /**
     * Lineage of the reference data the cell was measured on (a PVN LINEAGE).
     * The test speaks for a covariance whose source has this lineage; for any
     * other lineage the numbers are the cell's, and CALIBRATION is Uncalibrated.
     */
    MEASURED_LINEAGE(): string | null;
    MEASURED_LINEAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Window of the held-out reference states the test used: an ISO 8601 UTC
     * interval, start/end.
     */
    TEST_WINDOW(): string | null;
    TEST_WINDOW(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mean of d2/3 over the held-out samples. NaN when not measured.
     */
    MEAN_D2_OVER_3(): number;
    /**
     * Share of the held-out samples inside the 95 % region, 0 to 1. NaN when
     * not measured.
     */
    COVERAGE_95(): number;
    /**
     * Number of held-out samples the test used.
     */
    SAMPLES(): number;
    /**
     * Number of distinct objects the samples came from.
     */
    OBJECTS(): number;
    /**
     * Factor the covariance was multiplied by to make it realistic. NaN when
     * none was applied.
     */
    SCALE_FACTOR(): number;
    /**
     * The verdict. Calibrated when MEAN_D2_OVER_3 lies in [0.8, 1.25] and
     * COVERAGE_95 in [0.93, 0.97], from at least 30 samples of at least 3
     * objects of MEASURED_LINEAGE; Uncalibrated otherwise, including a cell
     * never measured.
     */
    CALIBRATION(): covarianceCalibration;
    /**
     * Identifier of the report or record that holds the test.
     */
    EVIDENCE(): string | null;
    EVIDENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCVR(builder: flatbuffers.Builder): void;
    static addRule(builder: flatbuffers.Builder, RULE: covarianceRule): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addHorizonDays(builder: flatbuffers.Builder, HORIZON_DAYS: number): void;
    static addMeasuredLineage(builder: flatbuffers.Builder, MEASURED_LINEAGEOffset: flatbuffers.Offset): void;
    static addTestWindow(builder: flatbuffers.Builder, TEST_WINDOWOffset: flatbuffers.Offset): void;
    static addMeanD2Over3(builder: flatbuffers.Builder, MEAN_D2_OVER_3: number): void;
    static addCoverage95(builder: flatbuffers.Builder, COVERAGE_95: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addScaleFactor(builder: flatbuffers.Builder, SCALE_FACTOR: number): void;
    static addCalibration(builder: flatbuffers.Builder, CALIBRATION: covarianceCalibration): void;
    static addEvidence(builder: flatbuffers.Builder, EVIDENCEOffset: flatbuffers.Offset): void;
    static endCVR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCVRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCVRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCVR(builder: flatbuffers.Builder, RULE: covarianceRule, MODEL_IDOffset: flatbuffers.Offset, REGIMEOffset: flatbuffers.Offset, AGE_DAYS: number, HORIZON_DAYS: number, MEASURED_LINEAGEOffset: flatbuffers.Offset, TEST_WINDOWOffset: flatbuffers.Offset, MEAN_D2_OVER_3: number, COVERAGE_95: number, SAMPLES: number, OBJECTS: number, SCALE_FACTOR: number, CALIBRATION: covarianceCalibration, EVIDENCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CVRT;
    unpackTo(_o: CVRT): void;
}
export declare class CVRT implements flatbuffers.IGeneratedObject {
    RULE: covarianceRule;
    MODEL_ID: string | Uint8Array | null;
    REGIME: string | Uint8Array | null;
    AGE_DAYS: number;
    HORIZON_DAYS: number;
    MEASURED_LINEAGE: string | Uint8Array | null;
    TEST_WINDOW: string | Uint8Array | null;
    MEAN_D2_OVER_3: number;
    COVERAGE_95: number;
    SAMPLES: number;
    OBJECTS: number;
    SCALE_FACTOR: number;
    CALIBRATION: covarianceCalibration;
    EVIDENCE: string | Uint8Array | null;
    constructor(RULE?: covarianceRule, MODEL_ID?: string | Uint8Array | null, REGIME?: string | Uint8Array | null, AGE_DAYS?: number, HORIZON_DAYS?: number, MEASURED_LINEAGE?: string | Uint8Array | null, TEST_WINDOW?: string | Uint8Array | null, MEAN_D2_OVER_3?: number, COVERAGE_95?: number, SAMPLES?: number, OBJECTS?: number, SCALE_FACTOR?: number, CALIBRATION?: covarianceCalibration, EVIDENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVR.d.ts.map