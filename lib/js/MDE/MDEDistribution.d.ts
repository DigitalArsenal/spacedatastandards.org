import * as flatbuffers from 'flatbuffers';
/**
 * Summary of a distribution.
 */
export declare class MDEDistribution implements flatbuffers.IUnpackableObject<MDEDistributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEDistribution;
    static getRootAsMDEDistribution(bb: flatbuffers.ByteBuffer, obj?: MDEDistribution): MDEDistribution;
    static getSizePrefixedRootAsMDEDistribution(bb: flatbuffers.ByteBuffer, obj?: MDEDistribution): MDEDistribution;
    COUNT(): number;
    MEDIAN(): number;
    P10(): number;
    P90(): number;
    static startMDEDistribution(builder: flatbuffers.Builder): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addMedian(builder: flatbuffers.Builder, MEDIAN: number): void;
    static addP10(builder: flatbuffers.Builder, P10: number): void;
    static addP90(builder: flatbuffers.Builder, P90: number): void;
    static endMDEDistribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEDistribution(builder: flatbuffers.Builder, COUNT: number, MEDIAN: number, P10: number, P90: number): flatbuffers.Offset;
    unpack(): MDEDistributionT;
    unpackTo(_o: MDEDistributionT): void;
}
export declare class MDEDistributionT implements flatbuffers.IGeneratedObject {
    COUNT: number;
    MEDIAN: number;
    P10: number;
    P90: number;
    constructor(COUNT?: number, MEDIAN?: number, P10?: number, P90?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEDistribution.d.ts.map