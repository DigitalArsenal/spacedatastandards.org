import * as flatbuffers from 'flatbuffers';
import { XMTEpochFitPolicy, XMTEpochFitPolicyT } from './XMTEpochFitPolicy.js';
import { xmtFitVerdict } from './xmtFitVerdict.js';
/**
 * Training and held-out residuals of an epoch state against a provider's
 * ephemeris.
 */
export declare class XMTEpochFitReport implements flatbuffers.IUnpackableObject<XMTEpochFitReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTEpochFitReport;
    static getRootAsXMTEpochFitReport(bb: flatbuffers.ByteBuffer, obj?: XMTEpochFitReport): XMTEpochFitReport;
    static getSizePrefixedRootAsXMTEpochFitReport(bb: flatbuffers.ByteBuffer, obj?: XMTEpochFitReport): XMTEpochFitReport;
    VERDICT(): xmtFitVerdict;
    TRAINING_SAMPLES(): number;
    HOLDOUT_SAMPLES(): number;
    /**
     * Position RMS on the training samples, km.
     */
    TRAINING_RMS_KM(): number;
    /**
     * Position RMS on the held-out samples, km.
     */
    HOLDOUT_RMS_KM(): number;
    MAXIMUM_TRAINING_RESIDUAL_KM(): number;
    MAXIMUM_HOLDOUT_RESIDUAL_KM(): number;
    /**
     * SHA-256 of the provider ephemeris compared against.
     */
    REFERENCE_SHA256(): string | null;
    REFERENCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the seed state record.
     */
    SEED_SHA256(): string | null;
    SEED_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-native object identifier.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the seed state, ISO 8601 UTC as the seed states it.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Samples on the arc.
     */
    SAMPLE_COUNT(): number;
    /**
     * Arc span, s.
     */
    SPAN_S(): number;
    POLICY(obj?: XMTEpochFitPolicy): XMTEpochFitPolicy | null;
    /**
     * True when a covariance accompanies the state (false: position
     * consistency only).
     */
    COVARIANCE_AVAILABLE(): boolean;
    /**
     * Proposed position correction, km (3 values, the seed's frame); empty
     * when no fit step ran.
     */
    POSITION_CORRECTION_KM(index: number): number | null;
    positionCorrectionKmLength(): number;
    positionCorrectionKmArray(): Float64Array | null;
    /**
     * Proposed velocity correction, km/s (3 values); empty when no fit step
     * ran.
     */
    VELOCITY_CORRECTION_KM_S(index: number): number | null;
    velocityCorrectionKmSLength(): number;
    velocityCorrectionKmSArray(): Float64Array | null;
    /**
     * Human-readable caveat.
     */
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startXMTEpochFitReport(builder: flatbuffers.Builder): void;
    static addVerdict(builder: flatbuffers.Builder, VERDICT: xmtFitVerdict): void;
    static addTrainingSamples(builder: flatbuffers.Builder, TRAINING_SAMPLES: number): void;
    static addHoldoutSamples(builder: flatbuffers.Builder, HOLDOUT_SAMPLES: number): void;
    static addTrainingRmsKm(builder: flatbuffers.Builder, TRAINING_RMS_KM: number): void;
    static addHoldoutRmsKm(builder: flatbuffers.Builder, HOLDOUT_RMS_KM: number): void;
    static addMaximumTrainingResidualKm(builder: flatbuffers.Builder, MAXIMUM_TRAINING_RESIDUAL_KM: number): void;
    static addMaximumHoldoutResidualKm(builder: flatbuffers.Builder, MAXIMUM_HOLDOUT_RESIDUAL_KM: number): void;
    static addReferenceSha256(builder: flatbuffers.Builder, REFERENCE_SHA256Offset: flatbuffers.Offset): void;
    static addSeedSha256(builder: flatbuffers.Builder, SEED_SHA256Offset: flatbuffers.Offset): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addSpanS(builder: flatbuffers.Builder, SPAN_S: number): void;
    static addPolicy(builder: flatbuffers.Builder, POLICYOffset: flatbuffers.Offset): void;
    static addCovarianceAvailable(builder: flatbuffers.Builder, COVARIANCE_AVAILABLE: boolean): void;
    static addPositionCorrectionKm(builder: flatbuffers.Builder, POSITION_CORRECTION_KMOffset: flatbuffers.Offset): void;
    static createPositionCorrectionKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCorrectionKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCorrectionKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityCorrectionKmS(builder: flatbuffers.Builder, VELOCITY_CORRECTION_KM_SOffset: flatbuffers.Offset): void;
    static createVelocityCorrectionKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityCorrectionKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityCorrectionKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static endXMTEpochFitReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTEpochFitReportT;
    unpackTo(_o: XMTEpochFitReportT): void;
}
export declare class XMTEpochFitReportT implements flatbuffers.IGeneratedObject {
    VERDICT: xmtFitVerdict;
    TRAINING_SAMPLES: number;
    HOLDOUT_SAMPLES: number;
    TRAINING_RMS_KM: number;
    HOLDOUT_RMS_KM: number;
    MAXIMUM_TRAINING_RESIDUAL_KM: number;
    MAXIMUM_HOLDOUT_RESIDUAL_KM: number;
    REFERENCE_SHA256: string | Uint8Array | null;
    SEED_SHA256: string | Uint8Array | null;
    NATIVE_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SAMPLE_COUNT: number;
    SPAN_S: number;
    POLICY: XMTEpochFitPolicyT | null;
    COVARIANCE_AVAILABLE: boolean;
    POSITION_CORRECTION_KM: (number)[];
    VELOCITY_CORRECTION_KM_S: (number)[];
    NOTE: string | Uint8Array | null;
    constructor(VERDICT?: xmtFitVerdict, TRAINING_SAMPLES?: number, HOLDOUT_SAMPLES?: number, TRAINING_RMS_KM?: number, HOLDOUT_RMS_KM?: number, MAXIMUM_TRAINING_RESIDUAL_KM?: number, MAXIMUM_HOLDOUT_RESIDUAL_KM?: number, REFERENCE_SHA256?: string | Uint8Array | null, SEED_SHA256?: string | Uint8Array | null, NATIVE_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SAMPLE_COUNT?: number, SPAN_S?: number, POLICY?: XMTEpochFitPolicyT | null, COVARIANCE_AVAILABLE?: boolean, POSITION_CORRECTION_KM?: (number)[], VELOCITY_CORRECTION_KM_S?: (number)[], NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTEpochFitReport.d.ts.map