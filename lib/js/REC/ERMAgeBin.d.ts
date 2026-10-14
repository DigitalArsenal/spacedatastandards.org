import * as flatbuffers from 'flatbuffers';
/**
 * A prediction-age bin, days, half-open (the last bin includes its upper
 * edge).
 */
export declare class ERMAgeBin implements flatbuffers.IUnpackableObject<ERMAgeBinT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAgeBin;
    static getRootAsERMAgeBin(bb: flatbuffers.ByteBuffer, obj?: ERMAgeBin): ERMAgeBin;
    static getSizePrefixedRootAsERMAgeBin(bb: flatbuffers.ByteBuffer, obj?: ERMAgeBin): ERMAgeBin;
    MIN_DAYS(): number;
    MAX_DAYS(): number;
    static startERMAgeBin(builder: flatbuffers.Builder): void;
    static addMinDays(builder: flatbuffers.Builder, MIN_DAYS: number): void;
    static addMaxDays(builder: flatbuffers.Builder, MAX_DAYS: number): void;
    static endERMAgeBin(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMAgeBin(builder: flatbuffers.Builder, MIN_DAYS: number, MAX_DAYS: number): flatbuffers.Offset;
    unpack(): ERMAgeBinT;
    unpackTo(_o: ERMAgeBinT): void;
}
export declare class ERMAgeBinT implements flatbuffers.IGeneratedObject {
    MIN_DAYS: number;
    MAX_DAYS: number;
    constructor(MIN_DAYS?: number, MAX_DAYS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAgeBin.d.ts.map