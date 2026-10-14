import * as flatbuffers from 'flatbuffers';
import { dclFitStatistics, dclFitStatisticsT } from './dclFitStatistics.js';
/**
 * One harmonic correction segment: dT(lat, h) = sum over l <= DEGREE, m <=
 * l of P_l^m(sin lat) (a_lm cos m h + b_lm sin m h), Schmidt
 * semi-normalised, h the hour angle from the Sun (local solar time = 12 h +
 * h). It applies from FROM_MS (inclusive) to TO_MS (exclusive).
 */
export declare class dclHarmonicSegment implements flatbuffers.IUnpackableObject<dclHarmonicSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclHarmonicSegment;
    static getRootAsdclHarmonicSegment(bb: flatbuffers.ByteBuffer, obj?: dclHarmonicSegment): dclHarmonicSegment;
    static getSizePrefixedRootAsdclHarmonicSegment(bb: flatbuffers.ByteBuffer, obj?: dclHarmonicSegment): dclHarmonicSegment;
    FROM_MS(): bigint;
    TO_MS(): bigint;
    /**
     * Coefficients, K, (DEGREE + 1)^2 values in the order (0,0), (1,0),
     * (1,1)c, (1,1)s, (2,0), (2,1)c, ...; the first is the global mean. Empty
     * = the bin had too few points and was not fitted.
     */
    COEFFICIENTS_K(index: number): number | null;
    coefficientsKLength(): number;
    coefficientsKArray(): Float64Array | null;
    /**
     * Formal posterior standard deviation of each coefficient, K; empty = not
     * computed.
     */
    SIGMAS_K(index: number): number | null;
    sigmasKLength(): number;
    sigmasKArray(): Float64Array | null;
    /**
     * The fit of this segment.
     */
    FIT(obj?: dclFitStatistics): dclFitStatistics | null;
    static startdclHarmonicSegment(builder: flatbuffers.Builder): void;
    static addFromMs(builder: flatbuffers.Builder, FROM_MS: bigint): void;
    static addToMs(builder: flatbuffers.Builder, TO_MS: bigint): void;
    static addCoefficientsK(builder: flatbuffers.Builder, COEFFICIENTS_KOffset: flatbuffers.Offset): void;
    static createCoefficientsKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoefficientsKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoefficientsKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmasK(builder: flatbuffers.Builder, SIGMAS_KOffset: flatbuffers.Offset): void;
    static createSigmasKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmasKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmasKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFit(builder: flatbuffers.Builder, FITOffset: flatbuffers.Offset): void;
    static enddclHarmonicSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): dclHarmonicSegmentT;
    unpackTo(_o: dclHarmonicSegmentT): void;
}
export declare class dclHarmonicSegmentT implements flatbuffers.IGeneratedObject {
    FROM_MS: bigint;
    TO_MS: bigint;
    COEFFICIENTS_K: (number)[];
    SIGMAS_K: (number)[];
    FIT: dclFitStatisticsT | null;
    constructor(FROM_MS?: bigint, TO_MS?: bigint, COEFFICIENTS_K?: (number)[], SIGMAS_K?: (number)[], FIT?: dclFitStatisticsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclHarmonicSegment.d.ts.map