import * as flatbuffers from 'flatbuffers';
import { numOperationCode } from './numOperationCode.js';
/**
 * Request for one Basilisk-compatible Gauss-Markov random sequence.
 */
export declare class NUMGaussMarkovRequest implements flatbuffers.IUnpackableObject<NUMGaussMarkovRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMGaussMarkovRequest;
    static getRootAsNUMGaussMarkovRequest(bb: flatbuffers.ByteBuffer, obj?: NUMGaussMarkovRequest): NUMGaussMarkovRequest;
    static getSizePrefixedRootAsNUMGaussMarkovRequest(bb: flatbuffers.ByteBuffer, obj?: NUMGaussMarkovRequest): NUMGaussMarkovRequest;
    /**
     * GAUSS_MARKOV_SEQUENCE.
     */
    OPERATION(): numOperationCode;
    /**
     * Number of scalar states per sample.
     */
    DIMENSION(): number;
    /**
     * Number of post-warmup samples used in the result statistics.
     */
    SAMPLE_COUNT(): number;
    /**
     * Number of initial state propagations excluded from the result statistics.
     */
    WARMUP_COUNT(): number;
    /**
     * Seed for the Basilisk-compatible standard normal generator.
     */
    RNG_SEED(): number;
    /**
     * Row-major DIMENSION x DIMENSION state propagation matrix.
     */
    PROPAGATION_MATRIX(index: number): number | null;
    propagationMatrixLength(): number;
    propagationMatrixArray(): Float64Array | null;
    /**
     * Row-major DIMENSION x DIMENSION standard-normal noise mixing matrix.
     */
    NOISE_MATRIX(index: number): number | null;
    noiseMatrixLength(): number;
    noiseMatrixArray(): Float64Array | null;
    /**
     * Per-state symmetric bounds. Values <= 0 disable clamping for that state.
     */
    STATE_BOUNDS(index: number): number | null;
    stateBoundsLength(): number;
    stateBoundsArray(): Float64Array | null;
    /**
     * When true, emit flattened sample-major states in SAMPLES.
     */
    EMIT_SAMPLES(): boolean;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMGaussMarkovRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: numOperationCode): void;
    static addDimension(builder: flatbuffers.Builder, DIMENSION: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addWarmupCount(builder: flatbuffers.Builder, WARMUP_COUNT: number): void;
    static addRngSeed(builder: flatbuffers.Builder, RNG_SEED: number): void;
    static addPropagationMatrix(builder: flatbuffers.Builder, PROPAGATION_MATRIXOffset: flatbuffers.Offset): void;
    static createPropagationMatrixVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPropagationMatrixVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPropagationMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNoiseMatrix(builder: flatbuffers.Builder, NOISE_MATRIXOffset: flatbuffers.Offset): void;
    static createNoiseMatrixVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNoiseMatrixVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoiseMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStateBounds(builder: flatbuffers.Builder, STATE_BOUNDSOffset: flatbuffers.Offset): void;
    static createStateBoundsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateBoundsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateBoundsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEmitSamples(builder: flatbuffers.Builder, EMIT_SAMPLES: boolean): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMGaussMarkovRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMGaussMarkovRequest(builder: flatbuffers.Builder, OPERATION: numOperationCode, DIMENSION: number, SAMPLE_COUNT: number, WARMUP_COUNT: number, RNG_SEED: number, PROPAGATION_MATRIXOffset: flatbuffers.Offset, NOISE_MATRIXOffset: flatbuffers.Offset, STATE_BOUNDSOffset: flatbuffers.Offset, EMIT_SAMPLES: boolean, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMGaussMarkovRequestT;
    unpackTo(_o: NUMGaussMarkovRequestT): void;
}
export declare class NUMGaussMarkovRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: numOperationCode;
    DIMENSION: number;
    SAMPLE_COUNT: number;
    WARMUP_COUNT: number;
    RNG_SEED: number;
    PROPAGATION_MATRIX: (number)[];
    NOISE_MATRIX: (number)[];
    STATE_BOUNDS: (number)[];
    EMIT_SAMPLES: boolean;
    TRACE_ID: string | Uint8Array | null;
    constructor(OPERATION?: numOperationCode, DIMENSION?: number, SAMPLE_COUNT?: number, WARMUP_COUNT?: number, RNG_SEED?: number, PROPAGATION_MATRIX?: (number)[], NOISE_MATRIX?: (number)[], STATE_BOUNDS?: (number)[], EMIT_SAMPLES?: boolean, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMGaussMarkovRequest.d.ts.map