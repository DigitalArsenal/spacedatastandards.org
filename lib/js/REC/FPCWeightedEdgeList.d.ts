import * as flatbuffers from 'flatbuffers';
import { weightedEdge, weightedEdgeT } from './weightedEdge.js';
/**
 * Bulk weighted-edge ingestion request.
 */
export declare class FPCWeightedEdgeList implements flatbuffers.IUnpackableObject<FPCWeightedEdgeListT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCWeightedEdgeList;
    static getRootAsFPCWeightedEdgeList(bb: flatbuffers.ByteBuffer, obj?: FPCWeightedEdgeList): FPCWeightedEdgeList;
    static getSizePrefixedRootAsFPCWeightedEdgeList(bb: flatbuffers.ByteBuffer, obj?: FPCWeightedEdgeList): FPCWeightedEdgeList;
    /**
     * Optional vertex capacity for implicit graph creation.
     */
    VERTEX_COUNT(): number;
    /**
     * Weighted directed edge records.
     */
    EDGES(index: number, obj?: weightedEdge): weightedEdge | null;
    edgesLength(): number;
    /**
     * Build a CSR representation after ingest.
     */
    BUILD_GRAPH(): boolean;
    static startFPCWeightedEdgeList(builder: flatbuffers.Builder): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: number): void;
    static addEdges(builder: flatbuffers.Builder, EDGESOffset: flatbuffers.Offset): void;
    static startEdgesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBuildGraph(builder: flatbuffers.Builder, BUILD_GRAPH: boolean): void;
    static endFPCWeightedEdgeList(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCWeightedEdgeList(builder: flatbuffers.Builder, VERTEX_COUNT: number, EDGESOffset: flatbuffers.Offset, BUILD_GRAPH: boolean): flatbuffers.Offset;
    unpack(): FPCWeightedEdgeListT;
    unpackTo(_o: FPCWeightedEdgeListT): void;
}
export declare class FPCWeightedEdgeListT implements flatbuffers.IGeneratedObject {
    VERTEX_COUNT: number;
    EDGES: (weightedEdgeT)[];
    BUILD_GRAPH: boolean;
    constructor(VERTEX_COUNT?: number, EDGES?: (weightedEdgeT)[], BUILD_GRAPH?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCWeightedEdgeList.d.ts.map