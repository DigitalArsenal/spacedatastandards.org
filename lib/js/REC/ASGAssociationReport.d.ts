import * as flatbuffers from 'flatbuffers';
import { ASGAssociationOptions, ASGAssociationOptionsT } from './ASGAssociationOptions.js';
import { ASGGateThreshold, ASGGateThresholdT } from './ASGGateThreshold.js';
import { ASGObservation, ASGObservationT } from './ASGObservation.js';
/**
 * The evidence of one association run. The association list and the
 * uncorrelated list are OBSERVATIONS filtered by OUTCOME.
 */
export declare class ASGAssociationReport implements flatbuffers.IUnpackableObject<ASGAssociationReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGAssociationReport;
    static getRootAsASGAssociationReport(bb: flatbuffers.ByteBuffer, obj?: ASGAssociationReport): ASGAssociationReport;
    static getSizePrefixedRootAsASGAssociationReport(bb: flatbuffers.ByteBuffer, obj?: ASGAssociationReport): ASGAssociationReport;
    /**
     * Method, e.g. "chi-square gate on S = H P H^T + R, global nearest
     * neighbour per scan (Hungarian), gate as the non-assignment cost".
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The options the run used, defaults filled in.
     */
    OPTIONS(obj?: ASGAssociationOptions): ASGAssociationOptions | null;
    /**
     * Gate thresholds by degrees of freedom.
     */
    GATE_THRESHOLDS(index: number, obj?: ASGGateThreshold): ASGGateThreshold | null;
    gateThresholdsLength(): number;
    /**
     * Earth orientation rows supplied.
     */
    EARTH_ORIENTATION_ROWS(): number;
    /**
     * Observations read.
     */
    OBSERVATION_COUNT(): number;
    /**
     * Predicted objects (prediction blocks) read.
     */
    PREDICTION_COUNT(): number;
    /**
     * Scans solved.
     */
    SCAN_COUNT(): number;
    /**
     * Observations associated.
     */
    ASSOCIATED_COUNT(): number;
    /**
     * Observations left uncorrelated.
     */
    UNCORRELATED_COUNT(): number;
    /**
     * Observations marked ambiguous.
     */
    AMBIGUOUS_COUNT(): number;
    OBSERVATIONS(index: number, obj?: ASGObservation): ASGObservation | null;
    observationsLength(): number;
    static startASGAssociationReport(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static addGateThresholds(builder: flatbuffers.Builder, GATE_THRESHOLDSOffset: flatbuffers.Offset): void;
    static createGateThresholdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGateThresholdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEarthOrientationRows(builder: flatbuffers.Builder, EARTH_ORIENTATION_ROWS: number): void;
    static addObservationCount(builder: flatbuffers.Builder, OBSERVATION_COUNT: number): void;
    static addPredictionCount(builder: flatbuffers.Builder, PREDICTION_COUNT: number): void;
    static addScanCount(builder: flatbuffers.Builder, SCAN_COUNT: number): void;
    static addAssociatedCount(builder: flatbuffers.Builder, ASSOCIATED_COUNT: number): void;
    static addUncorrelatedCount(builder: flatbuffers.Builder, UNCORRELATED_COUNT: number): void;
    static addAmbiguousCount(builder: flatbuffers.Builder, AMBIGUOUS_COUNT: number): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endASGAssociationReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ASGAssociationReportT;
    unpackTo(_o: ASGAssociationReportT): void;
}
export declare class ASGAssociationReportT implements flatbuffers.IGeneratedObject {
    METHOD: string | Uint8Array | null;
    OPTIONS: ASGAssociationOptionsT | null;
    GATE_THRESHOLDS: (ASGGateThresholdT)[];
    EARTH_ORIENTATION_ROWS: number;
    OBSERVATION_COUNT: number;
    PREDICTION_COUNT: number;
    SCAN_COUNT: number;
    ASSOCIATED_COUNT: number;
    UNCORRELATED_COUNT: number;
    AMBIGUOUS_COUNT: number;
    OBSERVATIONS: (ASGObservationT)[];
    constructor(METHOD?: string | Uint8Array | null, OPTIONS?: ASGAssociationOptionsT | null, GATE_THRESHOLDS?: (ASGGateThresholdT)[], EARTH_ORIENTATION_ROWS?: number, OBSERVATION_COUNT?: number, PREDICTION_COUNT?: number, SCAN_COUNT?: number, ASSOCIATED_COUNT?: number, UNCORRELATED_COUNT?: number, AMBIGUOUS_COUNT?: number, OBSERVATIONS?: (ASGObservationT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGAssociationReport.d.ts.map