import * as flatbuffers from 'flatbuffers';
import { shortestPathAlgorithm } from './shortestPathAlgorithm.js';
/**
 * Single-source shortest-path request.
 */
export declare class FPCShortestPathRequest implements flatbuffers.IUnpackableObject<FPCShortestPathRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCShortestPathRequest;
    static getRootAsFPCShortestPathRequest(bb: flatbuffers.ByteBuffer, obj?: FPCShortestPathRequest): FPCShortestPathRequest;
    static getSizePrefixedRootAsFPCShortestPathRequest(bb: flatbuffers.ByteBuffer, obj?: FPCShortestPathRequest): FPCShortestPathRequest;
    /**
     * Source vertex index.
     */
    SOURCE(): number;
    /**
     * Algorithm selection hint.
     */
    ALGORITHM(): shortestPathAlgorithm;
    static startFPCShortestPathRequest(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCE: number): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: shortestPathAlgorithm): void;
    static endFPCShortestPathRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCShortestPathRequest(builder: flatbuffers.Builder, SOURCE: number, ALGORITHM: shortestPathAlgorithm): flatbuffers.Offset;
    unpack(): FPCShortestPathRequestT;
    unpackTo(_o: FPCShortestPathRequestT): void;
}
export declare class FPCShortestPathRequestT implements flatbuffers.IGeneratedObject {
    SOURCE: number;
    ALGORITHM: shortestPathAlgorithm;
    constructor(SOURCE?: number, ALGORITHM?: shortestPathAlgorithm);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCShortestPathRequest.d.ts.map