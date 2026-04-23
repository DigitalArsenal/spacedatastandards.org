import * as flatbuffers from 'flatbuffers';
/**
 * Path reconstruction result.
 */
export declare class FPCPathResult implements flatbuffers.IUnpackableObject<FPCPathResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCPathResult;
    static getRootAsFPCPathResult(bb: flatbuffers.ByteBuffer, obj?: FPCPathResult): FPCPathResult;
    static getSizePrefixedRootAsFPCPathResult(bb: flatbuffers.ByteBuffer, obj?: FPCPathResult): FPCPathResult;
    /**
     * Source vertex index from the latest SSSP solve.
     */
    SOURCE(): number;
    /**
     * Requested target vertex index.
     */
    TARGET(): number;
    /**
     * Whether a path exists from SOURCE to TARGET.
     */
    REACHABLE(): boolean;
    /**
     * Total distance from SOURCE to TARGET (Infinity if unreachable).
     */
    DISTANCE(): number;
    /**
     * Vertex sequence from SOURCE to TARGET.
     */
    PATH(index: number): number | null;
    pathLength(): number;
    pathArray(): Uint32Array | null;
    static startFPCPathResult(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCE: number): void;
    static addTarget(builder: flatbuffers.Builder, TARGET: number): void;
    static addReachable(builder: flatbuffers.Builder, REACHABLE: boolean): void;
    static addDistance(builder: flatbuffers.Builder, DISTANCE: number): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static createPathVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPathVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPathVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFPCPathResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCPathResult(builder: flatbuffers.Builder, SOURCE: number, TARGET: number, REACHABLE: boolean, DISTANCE: number, PATHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FPCPathResultT;
    unpackTo(_o: FPCPathResultT): void;
}
export declare class FPCPathResultT implements flatbuffers.IGeneratedObject {
    SOURCE: number;
    TARGET: number;
    REACHABLE: boolean;
    DISTANCE: number;
    PATH: (number)[];
    constructor(SOURCE?: number, TARGET?: number, REACHABLE?: boolean, DISTANCE?: number, PATH?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCPathResult.d.ts.map