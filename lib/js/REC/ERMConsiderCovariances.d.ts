import * as flatbuffers from 'flatbuffers';
import { ERMConsiderCovariance, ERMConsiderCovarianceT } from './ERMConsiderCovariance.js';
import { ERMConsiderEpoch, ERMConsiderEpochT } from './ERMConsiderEpoch.js';
import { ERMDensitySegment, ERMDensitySegmentT } from './ERMDensitySegment.js';
/**
 * Density-forecast consider covariance: request and result.
 */
export declare class ERMConsiderCovariances implements flatbuffers.IUnpackableObject<ERMConsiderCovariancesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMConsiderCovariances;
    static getRootAsERMConsiderCovariances(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderCovariances): ERMConsiderCovariances;
    static getSizePrefixedRootAsERMConsiderCovariances(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderCovariances): ERMConsiderCovariances;
    /**
     * Number of lead days K.
     */
    LEAD_DAYS(): number;
    /**
     * Covariance of the daily ln-density error by lead day, K x K row-major.
     */
    LEAD_COVARIANCE(index: number): number | null;
    leadCovarianceLength(): number;
    leadCovarianceArray(): Float64Array | null;
    /**
     * Forecast start.
     */
    START(): string | null;
    START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SEGMENTS(index: number, obj?: ERMDensitySegment): ERMDensitySegment | null;
    segmentsLength(): number;
    BALLISTIC_COEFFICIENT(): number;
    /**
     * STM (36) and dx/dB (6) at the start; empty = none.
     */
    START_STM(index: number): number | null;
    startStmLength(): number;
    startStmArray(): Float64Array | null;
    START_S(index: number): number | null;
    startSLength(): number;
    startSArray(): Float64Array | null;
    EPOCHS(index: number, obj?: ERMConsiderEpoch): ERMConsiderEpoch | null;
    epochsLength(): number;
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RESULTS(index: number, obj?: ERMConsiderCovariance): ERMConsiderCovariance | null;
    resultsLength(): number;
    static startERMConsiderCovariances(builder: flatbuffers.Builder): void;
    static addLeadDays(builder: flatbuffers.Builder, LEAD_DAYS: number): void;
    static addLeadCovariance(builder: flatbuffers.Builder, LEAD_COVARIANCEOffset: flatbuffers.Offset): void;
    static createLeadCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLeadCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLeadCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBallisticCoefficient(builder: flatbuffers.Builder, BALLISTIC_COEFFICIENT: number): void;
    static addStartStm(builder: flatbuffers.Builder, START_STMOffset: flatbuffers.Offset): void;
    static createStartStmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStartStmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStartStmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStartS(builder: flatbuffers.Builder, START_SOffset: flatbuffers.Offset): void;
    static createStartSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStartSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStartSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEpochs(builder: flatbuffers.Builder, EPOCHSOffset: flatbuffers.Offset): void;
    static createEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMConsiderCovariances(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMConsiderCovariances(builder: flatbuffers.Builder, LEAD_DAYS: number, LEAD_COVARIANCEOffset: flatbuffers.Offset, STARTOffset: flatbuffers.Offset, SEGMENTSOffset: flatbuffers.Offset, BALLISTIC_COEFFICIENT: number, START_STMOffset: flatbuffers.Offset, START_SOffset: flatbuffers.Offset, EPOCHSOffset: flatbuffers.Offset, RULEOffset: flatbuffers.Offset, RESULTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMConsiderCovariancesT;
    unpackTo(_o: ERMConsiderCovariancesT): void;
}
export declare class ERMConsiderCovariancesT implements flatbuffers.IGeneratedObject {
    LEAD_DAYS: number;
    LEAD_COVARIANCE: (number)[];
    START: string | Uint8Array | null;
    SEGMENTS: (ERMDensitySegmentT)[];
    BALLISTIC_COEFFICIENT: number;
    START_STM: (number)[];
    START_S: (number)[];
    EPOCHS: (ERMConsiderEpochT)[];
    RULE: string | Uint8Array | null;
    RESULTS: (ERMConsiderCovarianceT)[];
    constructor(LEAD_DAYS?: number, LEAD_COVARIANCE?: (number)[], START?: string | Uint8Array | null, SEGMENTS?: (ERMDensitySegmentT)[], BALLISTIC_COEFFICIENT?: number, START_STM?: (number)[], START_S?: (number)[], EPOCHS?: (ERMConsiderEpochT)[], RULE?: string | Uint8Array | null, RESULTS?: (ERMConsiderCovarianceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMConsiderCovariances.d.ts.map