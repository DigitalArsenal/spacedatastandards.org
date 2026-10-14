import * as flatbuffers from 'flatbuffers';
/**
 * Running realism test of one stratum.
 */
export declare class ERMCoverageTally implements flatbuffers.IUnpackableObject<ERMCoverageTallyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCoverageTally;
    static getRootAsERMCoverageTally(bb: flatbuffers.ByteBuffer, obj?: ERMCoverageTally): ERMCoverageTally;
    static getSizePrefixedRootAsERMCoverageTally(bb: flatbuffers.ByteBuffer, obj?: ERMCoverageTally): ERMCoverageTally;
    N(): bigint;
    /**
     * Samples without a model covariance.
     */
    MISSING(): bigint;
    /**
     * Sum of d2.
     */
    SUM_D2(): number;
    /**
     * Samples inside the 1, 2, 3 sigma regions (3 values).
     */
    INSIDE(index: number): bigint | null;
    insideLength(): number;
    /**
     * Probability-integral-transform histogram (20 values).
     */
    PIT(index: number): bigint | null;
    pitLength(): number;
    /**
     * NORAD numbers of the objects sampled.
     */
    OBJECTS(index: number): number | null;
    objectsLength(): number;
    objectsArray(): Uint32Array | null;
    static startERMCoverageTally(builder: flatbuffers.Builder): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addMissing(builder: flatbuffers.Builder, MISSING: bigint): void;
    static addSumD2(builder: flatbuffers.Builder, SUM_D2: number): void;
    static addInside(builder: flatbuffers.Builder, INSIDEOffset: flatbuffers.Offset): void;
    static createInsideVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startInsideVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPit(builder: flatbuffers.Builder, PITOffset: flatbuffers.Offset): void;
    static createPitVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startPitVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createObjectsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCoverageTally(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCoverageTally(builder: flatbuffers.Builder, N: bigint, MISSING: bigint, SUM_D2: number, INSIDEOffset: flatbuffers.Offset, PITOffset: flatbuffers.Offset, OBJECTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCoverageTallyT;
    unpackTo(_o: ERMCoverageTallyT): void;
}
export declare class ERMCoverageTallyT implements flatbuffers.IGeneratedObject {
    N: bigint;
    MISSING: bigint;
    SUM_D2: number;
    INSIDE: (bigint)[];
    PIT: (bigint)[];
    OBJECTS: (number)[];
    constructor(N?: bigint, MISSING?: bigint, SUM_D2?: number, INSIDE?: (bigint)[], PIT?: (bigint)[], OBJECTS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCoverageTally.d.ts.map