import * as flatbuffers from 'flatbuffers';
/**
 * Interpolation settings for sampled data
 */
export declare class CZMInterpolation implements flatbuffers.IUnpackableObject<CZMInterpolationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMInterpolation;
    static getRootAsCZMInterpolation(bb: flatbuffers.ByteBuffer, obj?: CZMInterpolation): CZMInterpolation;
    static getSizePrefixedRootAsCZMInterpolation(bb: flatbuffers.ByteBuffer, obj?: CZMInterpolation): CZMInterpolation;
    /**
     * Algorithm: LINEAR, LAGRANGE, HERMITE
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polynomial degree (1=linear, 5=typical Lagrange)
     */
    DEGREE(): number;
    static startCZMInterpolation(builder: flatbuffers.Builder): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addDegree(builder: flatbuffers.Builder, DEGREE: number): void;
    static endCZMInterpolation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMInterpolation(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset, DEGREE: number): flatbuffers.Offset;
    unpack(): CZMInterpolationT;
    unpackTo(_o: CZMInterpolationT): void;
}
export declare class CZMInterpolationT implements flatbuffers.IGeneratedObject {
    ALGORITHM: string | Uint8Array | null;
    DEGREE: number;
    constructor(ALGORITHM?: string | Uint8Array | null, DEGREE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMInterpolation.d.ts.map