import * as flatbuffers from 'flatbuffers';
import { FPCCSRGraph, FPCCSRGraphT } from './FPCCSRGraph.js';
import { FPCGraphDefinition, FPCGraphDefinitionT } from './FPCGraphDefinition.js';
import { FPCPathRequest, FPCPathRequestT } from './FPCPathRequest.js';
import { FPCPathResult, FPCPathResultT } from './FPCPathResult.js';
import { FPCShortestPathRequest, FPCShortestPathRequestT } from './FPCShortestPathRequest.js';
import { FPCShortestPathResult, FPCShortestPathResultT } from './FPCShortestPathResult.js';
import { FPCWeightedEdgeList, FPCWeightedEdgeListT } from './FPCWeightedEdgeList.js';
/**
 * Fastest Path Compute — envelope message for weighted graph ingestion and
 * single-source shortest path execution.
 */
export declare class FPC implements flatbuffers.IUnpackableObject<FPCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPC;
    static getRootAsFPC(bb: flatbuffers.ByteBuffer, obj?: FPC): FPC;
    static getSizePrefixedRootAsFPC(bb: flatbuffers.ByteBuffer, obj?: FPC): FPC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    GRAPH_DEFINITION(obj?: FPCGraphDefinition): FPCGraphDefinition | null;
    EDGES(obj?: FPCWeightedEdgeList): FPCWeightedEdgeList | null;
    CSR(obj?: FPCCSRGraph): FPCCSRGraph | null;
    SHORTEST_PATH_REQUEST(obj?: FPCShortestPathRequest): FPCShortestPathRequest | null;
    SHORTEST_PATH_RESULT(obj?: FPCShortestPathResult): FPCShortestPathResult | null;
    PATH_REQUEST(obj?: FPCPathRequest): FPCPathRequest | null;
    PATH_RESULT(obj?: FPCPathResult): FPCPathResult | null;
    static startFPC(builder: flatbuffers.Builder): void;
    static addGraphDefinition(builder: flatbuffers.Builder, GRAPH_DEFINITIONOffset: flatbuffers.Offset): void;
    static addEdges(builder: flatbuffers.Builder, EDGESOffset: flatbuffers.Offset): void;
    static addCsr(builder: flatbuffers.Builder, CSROffset: flatbuffers.Offset): void;
    static addShortestPathRequest(builder: flatbuffers.Builder, SHORTEST_PATH_REQUESTOffset: flatbuffers.Offset): void;
    static addShortestPathResult(builder: flatbuffers.Builder, SHORTEST_PATH_RESULTOffset: flatbuffers.Offset): void;
    static addPathRequest(builder: flatbuffers.Builder, PATH_REQUESTOffset: flatbuffers.Offset): void;
    static addPathResult(builder: flatbuffers.Builder, PATH_RESULTOffset: flatbuffers.Offset): void;
    static endFPC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFPCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFPCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): FPCT;
    unpackTo(_o: FPCT): void;
}
export declare class FPCT implements flatbuffers.IGeneratedObject {
    GRAPH_DEFINITION: FPCGraphDefinitionT | null;
    EDGES: FPCWeightedEdgeListT | null;
    CSR: FPCCSRGraphT | null;
    SHORTEST_PATH_REQUEST: FPCShortestPathRequestT | null;
    SHORTEST_PATH_RESULT: FPCShortestPathResultT | null;
    PATH_REQUEST: FPCPathRequestT | null;
    PATH_RESULT: FPCPathResultT | null;
    constructor(GRAPH_DEFINITION?: FPCGraphDefinitionT | null, EDGES?: FPCWeightedEdgeListT | null, CSR?: FPCCSRGraphT | null, SHORTEST_PATH_REQUEST?: FPCShortestPathRequestT | null, SHORTEST_PATH_RESULT?: FPCShortestPathResultT | null, PATH_REQUEST?: FPCPathRequestT | null, PATH_RESULT?: FPCPathResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPC.d.ts.map