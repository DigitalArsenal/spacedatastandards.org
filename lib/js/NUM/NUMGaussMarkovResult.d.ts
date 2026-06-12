import * as flatbuffers from 'flatbuffers';
import { numResultStatus } from './numResultStatus.js';
/**
 * Result of one Basilisk-compatible Gauss-Markov random sequence.
 */
export declare class NUMGaussMarkovResult implements flatbuffers.IUnpackableObject<NUMGaussMarkovResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMGaussMarkovResult;
    static getRootAsNUMGaussMarkovResult(bb: flatbuffers.ByteBuffer, obj?: NUMGaussMarkovResult): NUMGaussMarkovResult;
    static getSizePrefixedRootAsNUMGaussMarkovResult(bb: flatbuffers.ByteBuffer, obj?: NUMGaussMarkovResult): NUMGaussMarkovResult;
    STATUS(): numResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Post-warmup per-state sample means.
     */
    MEAN(index: number): number | null;
    meanLength(): number;
    meanArray(): Float64Array | null;
    /**
     * Post-warmup per-state sample standard deviations with n - 1 denominator.
     */
    STANDARD_DEVIATION(index: number): number | null;
    standardDeviationLength(): number;
    standardDeviationArray(): Float64Array | null;
    /**
     * Post-warmup per-state minima.
     */
    MINIMUM(index: number): number | null;
    minimumLength(): number;
    minimumArray(): Float64Array | null;
    /**
     * Post-warmup per-state maxima.
     */
    MAXIMUM(index: number): number | null;
    maximumLength(): number;
    maximumArray(): Float64Array | null;
    /**
     * State after the final generated sample.
     */
    FINAL_STATE(index: number): number | null;
    finalStateLength(): number;
    finalStateArray(): Float64Array | null;
    /**
     * Optional flattened sample-major state history.
     */
    SAMPLES(index: number): number | null;
    samplesLength(): number;
    samplesArray(): Float64Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMGaussMarkovResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: numResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addMean(builder: flatbuffers.Builder, MEANOffset: flatbuffers.Offset): void;
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMeanVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStandardDeviation(builder: flatbuffers.Builder, STANDARD_DEVIATIONOffset: flatbuffers.Offset): void;
    static createStandardDeviationVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStandardDeviationVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStandardDeviationVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinimum(builder: flatbuffers.Builder, MINIMUMOffset: flatbuffers.Offset): void;
    static createMinimumVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMinimumVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMinimumVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaximum(builder: flatbuffers.Builder, MAXIMUMOffset: flatbuffers.Offset): void;
    static createMaximumVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMaximumVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaximumVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFinalState(builder: flatbuffers.Builder, FINAL_STATEOffset: flatbuffers.Offset): void;
    static createFinalStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFinalStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFinalStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSamplesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMGaussMarkovResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMGaussMarkovResult(builder: flatbuffers.Builder, STATUS: numResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, MEANOffset: flatbuffers.Offset, STANDARD_DEVIATIONOffset: flatbuffers.Offset, MINIMUMOffset: flatbuffers.Offset, MAXIMUMOffset: flatbuffers.Offset, FINAL_STATEOffset: flatbuffers.Offset, SAMPLESOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMGaussMarkovResultT;
    unpackTo(_o: NUMGaussMarkovResultT): void;
}
export declare class NUMGaussMarkovResultT implements flatbuffers.IGeneratedObject {
    STATUS: numResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    MEAN: (number)[];
    STANDARD_DEVIATION: (number)[];
    MINIMUM: (number)[];
    MAXIMUM: (number)[];
    FINAL_STATE: (number)[];
    SAMPLES: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: numResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, MEAN?: (number)[], STANDARD_DEVIATION?: (number)[], MINIMUM?: (number)[], MAXIMUM?: (number)[], FINAL_STATE?: (number)[], SAMPLES?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMGaussMarkovResult.d.ts.map