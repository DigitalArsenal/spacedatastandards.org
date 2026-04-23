import * as flatbuffers from 'flatbuffers';
/**
 * Weighted directed edge (16 bytes, 8-byte aligned for zero-copy ingestion).
 */
export declare class weightedEdge implements flatbuffers.IUnpackableObject<weightedEdgeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): weightedEdge;
    SRC(): number;
    DST(): number;
    WEIGHT(): number;
    static sizeOf(): number;
    static createweightedEdge(builder: flatbuffers.Builder, SRC: number, DST: number, WEIGHT: number): flatbuffers.Offset;
    unpack(): weightedEdgeT;
    unpackTo(_o: weightedEdgeT): void;
}
export declare class weightedEdgeT implements flatbuffers.IGeneratedObject {
    SRC: number;
    DST: number;
    WEIGHT: number;
    constructor(SRC?: number, DST?: number, WEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=weightedEdge.d.ts.map