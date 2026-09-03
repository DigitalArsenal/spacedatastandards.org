import * as flatbuffers from 'flatbuffers';
/**
 * One histogram bin over [LOW, HIGH).
 */
export declare class AGRBin implements flatbuffers.IUnpackableObject<AGRBinT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGRBin;
    static getRootAsAGRBin(bb: flatbuffers.ByteBuffer, obj?: AGRBin): AGRBin;
    static getSizePrefixedRootAsAGRBin(bb: flatbuffers.ByteBuffer, obj?: AGRBin): AGRBin;
    LOW(): number;
    HIGH(): number;
    COUNT(): bigint;
    SUM(): number;
    MIN(): number;
    MAX(): number;
    MEAN(): number;
    static startAGRBin(builder: flatbuffers.Builder): void;
    static addLow(builder: flatbuffers.Builder, LOW: number): void;
    static addHigh(builder: flatbuffers.Builder, HIGH: number): void;
    static addCount(builder: flatbuffers.Builder, COUNT: bigint): void;
    static addSum(builder: flatbuffers.Builder, SUM: number): void;
    static addMin(builder: flatbuffers.Builder, MIN: number): void;
    static addMax(builder: flatbuffers.Builder, MAX: number): void;
    static addMean(builder: flatbuffers.Builder, MEAN: number): void;
    static endAGRBin(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGRBin(builder: flatbuffers.Builder, LOW: number, HIGH: number, COUNT: bigint, SUM: number, MIN: number, MAX: number, MEAN: number): flatbuffers.Offset;
    unpack(): AGRBinT;
    unpackTo(_o: AGRBinT): void;
}
export declare class AGRBinT implements flatbuffers.IGeneratedObject {
    LOW: number;
    HIGH: number;
    COUNT: bigint;
    SUM: number;
    MIN: number;
    MAX: number;
    MEAN: number;
    constructor(LOW?: number, HIGH?: number, COUNT?: bigint, SUM?: number, MIN?: number, MAX?: number, MEAN?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGRBin.d.ts.map