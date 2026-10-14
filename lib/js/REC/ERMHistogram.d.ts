import * as flatbuffers from 'flatbuffers';
import { ERMHistogramBin, ERMHistogramBinT } from './ERMHistogramBin.js';
/**
 * Histogram of one error component.
 */
export declare class ERMHistogram implements flatbuffers.IUnpackableObject<ERMHistogramT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMHistogram;
    static getRootAsERMHistogram(bb: flatbuffers.ByteBuffer, obj?: ERMHistogram): ERMHistogram;
    static getSizePrefixedRootAsERMHistogram(bb: flatbuffers.ByteBuffer, obj?: ERMHistogram): ERMHistogram;
    BINS(index: number, obj?: ERMHistogramBin): ERMHistogramBin | null;
    binsLength(): number;
    static startERMHistogram(builder: flatbuffers.Builder): void;
    static addBins(builder: flatbuffers.Builder, BINSOffset: flatbuffers.Offset): void;
    static startBinsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMHistogram(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMHistogram(builder: flatbuffers.Builder, BINSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMHistogramT;
    unpackTo(_o: ERMHistogramT): void;
}
export declare class ERMHistogramT implements flatbuffers.IGeneratedObject {
    BINS: (ERMHistogramBinT)[];
    constructor(BINS?: (ERMHistogramBinT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMHistogram.d.ts.map