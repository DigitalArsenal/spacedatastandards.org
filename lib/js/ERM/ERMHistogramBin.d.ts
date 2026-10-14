import * as flatbuffers from 'flatbuffers';
/**
 * One histogram bin: |x| in 20 bins per decade from 1e-9 to 1e5, signed bin
 * number (0 = |x| < 1e-9, +-k for k = 1..280).
 */
export declare class ERMHistogramBin implements flatbuffers.IUnpackableObject<ERMHistogramBinT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMHistogramBin;
    BIN(): number;
    COUNT(): bigint;
    static sizeOf(): number;
    static createERMHistogramBin(builder: flatbuffers.Builder, BIN: number, COUNT: bigint): flatbuffers.Offset;
    unpack(): ERMHistogramBinT;
    unpackTo(_o: ERMHistogramBinT): void;
}
export declare class ERMHistogramBinT implements flatbuffers.IGeneratedObject {
    BIN: number;
    COUNT: bigint;
    constructor(BIN?: number, COUNT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMHistogramBin.d.ts.map