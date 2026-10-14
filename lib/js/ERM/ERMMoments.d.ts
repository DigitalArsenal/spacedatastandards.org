import * as flatbuffers from 'flatbuffers';
/**
 * First and second moments of error vectors.
 */
export declare class ERMMoments implements flatbuffers.IUnpackableObject<ERMMomentsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMMoments;
    static getRootAsERMMoments(bb: flatbuffers.ByteBuffer, obj?: ERMMoments): ERMMoments;
    static getSizePrefixedRootAsERMMoments(bb: flatbuffers.ByteBuffer, obj?: ERMMoments): ERMMoments;
    N(): bigint;
    /**
     * Sum of the 6 components.
     */
    SUM(index: number): number | null;
    sumLength(): number;
    sumArray(): Float64Array | null;
    /**
     * Sum of products, Lower21.
     */
    SQUARES(index: number): number | null;
    squaresLength(): number;
    squaresArray(): Float64Array | null;
    static startERMMoments(builder: flatbuffers.Builder): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addSum(builder: flatbuffers.Builder, SUMOffset: flatbuffers.Offset): void;
    static createSumVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSumVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSumVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSquares(builder: flatbuffers.Builder, SQUARESOffset: flatbuffers.Offset): void;
    static createSquaresVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSquaresVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSquaresVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMMoments(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMMoments(builder: flatbuffers.Builder, N: bigint, SUMOffset: flatbuffers.Offset, SQUARESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMMomentsT;
    unpackTo(_o: ERMMomentsT): void;
}
export declare class ERMMomentsT implements flatbuffers.IGeneratedObject {
    N: bigint;
    SUM: (number)[];
    SQUARES: (number)[];
    constructor(N?: bigint, SUM?: (number)[], SQUARES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMMoments.d.ts.map