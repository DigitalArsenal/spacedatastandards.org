import * as flatbuffers from 'flatbuffers';
/**
 * Pre-built CSR graph ingestion request.
 */
export declare class FPCCSRGraph implements flatbuffers.IUnpackableObject<FPCCSRGraphT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCCSRGraph;
    static getRootAsFPCCSRGraph(bb: flatbuffers.ByteBuffer, obj?: FPCCSRGraph): FPCCSRGraph;
    static getSizePrefixedRootAsFPCCSRGraph(bb: flatbuffers.ByteBuffer, obj?: FPCCSRGraph): FPCCSRGraph;
    /**
     * Number of vertices in the graph.
     */
    VERTEX_COUNT(): number;
    /**
     * CSR row offsets (V + 1 entries).
     */
    OFFSETS(index: number): number | null;
    offsetsLength(): number;
    offsetsArray(): Uint32Array | null;
    /**
     * CSR destination indices.
     */
    DESTINATIONS(index: number): number | null;
    destinationsLength(): number;
    destinationsArray(): Uint32Array | null;
    /**
     * CSR edge weights.
     */
    WEIGHTS(index: number): number | null;
    weightsLength(): number;
    weightsArray(): Float64Array | null;
    static startFPCCSRGraph(builder: flatbuffers.Builder): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: number): void;
    static addOffsets(builder: flatbuffers.Builder, OFFSETSOffset: flatbuffers.Offset): void;
    static createOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOffsetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDestinations(builder: flatbuffers.Builder, DESTINATIONSOffset: flatbuffers.Offset): void;
    static createDestinationsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDestinationsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDestinationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWeights(builder: flatbuffers.Builder, WEIGHTSOffset: flatbuffers.Offset): void;
    static createWeightsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWeightsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWeightsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFPCCSRGraph(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCCSRGraph(builder: flatbuffers.Builder, VERTEX_COUNT: number, OFFSETSOffset: flatbuffers.Offset, DESTINATIONSOffset: flatbuffers.Offset, WEIGHTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FPCCSRGraphT;
    unpackTo(_o: FPCCSRGraphT): void;
}
export declare class FPCCSRGraphT implements flatbuffers.IGeneratedObject {
    VERTEX_COUNT: number;
    OFFSETS: (number)[];
    DESTINATIONS: (number)[];
    WEIGHTS: (number)[];
    constructor(VERTEX_COUNT?: number, OFFSETS?: (number)[], DESTINATIONS?: (number)[], WEIGHTS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCCSRGraph.d.ts.map