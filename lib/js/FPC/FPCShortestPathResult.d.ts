import * as flatbuffers from 'flatbuffers';
/**
 * Single-source shortest-path result.
 */
export declare class FPCShortestPathResult implements flatbuffers.IUnpackableObject<FPCShortestPathResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCShortestPathResult;
    static getRootAsFPCShortestPathResult(bb: flatbuffers.ByteBuffer, obj?: FPCShortestPathResult): FPCShortestPathResult;
    static getSizePrefixedRootAsFPCShortestPathResult(bb: flatbuffers.ByteBuffer, obj?: FPCShortestPathResult): FPCShortestPathResult;
    /**
     * Source vertex index.
     */
    SOURCE(): number;
    /**
     * Number of vertices in the solved graph.
     */
    VERTEX_COUNT(): number;
    /**
     * Number of reachable vertices (finite distances).
     */
    REACHABLE_COUNT(): number;
    /**
     * Distance array (length == VERTEX_COUNT).
     */
    DISTANCES(index: number): number | null;
    distancesLength(): number;
    distancesArray(): Float64Array | null;
    /**
     * Predecessor array (length == VERTEX_COUNT; UINT32_MAX means none / source).
     */
    PREDECESSORS(index: number): number | null;
    predecessorsLength(): number;
    predecessorsArray(): Uint32Array | null;
    static startFPCShortestPathResult(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCE: number): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: number): void;
    static addReachableCount(builder: flatbuffers.Builder, REACHABLE_COUNT: number): void;
    static addDistances(builder: flatbuffers.Builder, DISTANCESOffset: flatbuffers.Offset): void;
    static createDistancesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDistancesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDistancesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPredecessors(builder: flatbuffers.Builder, PREDECESSORSOffset: flatbuffers.Offset): void;
    static createPredecessorsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPredecessorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPredecessorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFPCShortestPathResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCShortestPathResult(builder: flatbuffers.Builder, SOURCE: number, VERTEX_COUNT: number, REACHABLE_COUNT: number, DISTANCESOffset: flatbuffers.Offset, PREDECESSORSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FPCShortestPathResultT;
    unpackTo(_o: FPCShortestPathResultT): void;
}
export declare class FPCShortestPathResultT implements flatbuffers.IGeneratedObject {
    SOURCE: number;
    VERTEX_COUNT: number;
    REACHABLE_COUNT: number;
    DISTANCES: (number)[];
    PREDECESSORS: (number)[];
    constructor(SOURCE?: number, VERTEX_COUNT?: number, REACHABLE_COUNT?: number, DISTANCES?: (number)[], PREDECESSORS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCShortestPathResult.d.ts.map