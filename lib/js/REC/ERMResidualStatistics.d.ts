import * as flatbuffers from 'flatbuffers';
import { ERMResidualSample, ERMResidualSampleT } from './ERMResidualSample.js';
/**
 * Residual statistics over a span.
 */
export declare class ERMResidualStatistics implements flatbuffers.IUnpackableObject<ERMResidualStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMResidualStatistics;
    static getRootAsERMResidualStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMResidualStatistics): ERMResidualStatistics;
    static getSizePrefixedRootAsERMResidualStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMResidualStatistics): ERMResidualStatistics;
    /**
     * Window label and bounds (when for a window).
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FROM_EPOCH(): string | null;
    FROM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TO_EPOCH(): string | null;
    TO_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    N(): number;
    FAILURES(): number;
    SPAN_START(): string | null;
    SPAN_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SPAN_STOP(): string | null;
    SPAN_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RMS_3D_KM(): number;
    /**
     * RMS_3D_KM / sqrt(3).
     */
    RMS_PER_COORDINATE_KM(): number;
    RMS_RTN_KM(index: number): number | null;
    rmsRtnKmLength(): number;
    rmsRtnKmArray(): Float64Array | null;
    MEAN_RTN_KM(index: number): number | null;
    meanRtnKmLength(): number;
    meanRtnKmArray(): Float64Array | null;
    MAX_3D_KM(): number;
    MAX_AT(): string | null;
    MAX_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MAX_RTN_KM(index: number): number | null;
    maxRtnKmLength(): number;
    maxRtnKmArray(): Float64Array | null;
    RMS_VELOCITY_KM_S(): number;
    SAMPLES(index: number, obj?: ERMResidualSample): ERMResidualSample | null;
    samplesLength(): number;
    static startERMResidualStatistics(builder: flatbuffers.Builder): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addFromEpoch(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset): void;
    static addToEpoch(builder: flatbuffers.Builder, TO_EPOCHOffset: flatbuffers.Offset): void;
    static addN(builder: flatbuffers.Builder, N: number): void;
    static addFailures(builder: flatbuffers.Builder, FAILURES: number): void;
    static addSpanStart(builder: flatbuffers.Builder, SPAN_STARTOffset: flatbuffers.Offset): void;
    static addSpanStop(builder: flatbuffers.Builder, SPAN_STOPOffset: flatbuffers.Offset): void;
    static addRms3DKm(builder: flatbuffers.Builder, RMS_3D_KM: number): void;
    static addRmsPerCoordinateKm(builder: flatbuffers.Builder, RMS_PER_COORDINATE_KM: number): void;
    static addRmsRtnKm(builder: flatbuffers.Builder, RMS_RTN_KMOffset: flatbuffers.Offset): void;
    static createRmsRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRmsRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRmsRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeanRtnKm(builder: flatbuffers.Builder, MEAN_RTN_KMOffset: flatbuffers.Offset): void;
    static createMeanRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMeanRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMeanRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMax3DKm(builder: flatbuffers.Builder, MAX_3D_KM: number): void;
    static addMaxAt(builder: flatbuffers.Builder, MAX_ATOffset: flatbuffers.Offset): void;
    static addMaxRtnKm(builder: flatbuffers.Builder, MAX_RTN_KMOffset: flatbuffers.Offset): void;
    static createMaxRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMaxRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaxRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRmsVelocityKmS(builder: flatbuffers.Builder, RMS_VELOCITY_KM_S: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMResidualStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMResidualStatistics(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset, FROM_EPOCHOffset: flatbuffers.Offset, TO_EPOCHOffset: flatbuffers.Offset, N: number, FAILURES: number, SPAN_STARTOffset: flatbuffers.Offset, SPAN_STOPOffset: flatbuffers.Offset, RMS_3D_KM: number, RMS_PER_COORDINATE_KM: number, RMS_RTN_KMOffset: flatbuffers.Offset, MEAN_RTN_KMOffset: flatbuffers.Offset, MAX_3D_KM: number, MAX_ATOffset: flatbuffers.Offset, MAX_RTN_KMOffset: flatbuffers.Offset, RMS_VELOCITY_KM_S: number, SAMPLESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMResidualStatisticsT;
    unpackTo(_o: ERMResidualStatisticsT): void;
}
export declare class ERMResidualStatisticsT implements flatbuffers.IGeneratedObject {
    LABEL: string | Uint8Array | null;
    FROM_EPOCH: string | Uint8Array | null;
    TO_EPOCH: string | Uint8Array | null;
    N: number;
    FAILURES: number;
    SPAN_START: string | Uint8Array | null;
    SPAN_STOP: string | Uint8Array | null;
    RMS_3D_KM: number;
    RMS_PER_COORDINATE_KM: number;
    RMS_RTN_KM: (number)[];
    MEAN_RTN_KM: (number)[];
    MAX_3D_KM: number;
    MAX_AT: string | Uint8Array | null;
    MAX_RTN_KM: (number)[];
    RMS_VELOCITY_KM_S: number;
    SAMPLES: (ERMResidualSampleT)[];
    constructor(LABEL?: string | Uint8Array | null, FROM_EPOCH?: string | Uint8Array | null, TO_EPOCH?: string | Uint8Array | null, N?: number, FAILURES?: number, SPAN_START?: string | Uint8Array | null, SPAN_STOP?: string | Uint8Array | null, RMS_3D_KM?: number, RMS_PER_COORDINATE_KM?: number, RMS_RTN_KM?: (number)[], MEAN_RTN_KM?: (number)[], MAX_3D_KM?: number, MAX_AT?: string | Uint8Array | null, MAX_RTN_KM?: (number)[], RMS_VELOCITY_KM_S?: number, SAMPLES?: (ERMResidualSampleT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMResidualStatistics.d.ts.map