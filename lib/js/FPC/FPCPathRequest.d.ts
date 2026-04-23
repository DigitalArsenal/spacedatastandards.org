import * as flatbuffers from 'flatbuffers';
/**
 * Path reconstruction request.
 */
export declare class FPCPathRequest implements flatbuffers.IUnpackableObject<FPCPathRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCPathRequest;
    static getRootAsFPCPathRequest(bb: flatbuffers.ByteBuffer, obj?: FPCPathRequest): FPCPathRequest;
    static getSizePrefixedRootAsFPCPathRequest(bb: flatbuffers.ByteBuffer, obj?: FPCPathRequest): FPCPathRequest;
    /**
     * Target vertex index.
     */
    TARGET(): number;
    static startFPCPathRequest(builder: flatbuffers.Builder): void;
    static addTarget(builder: flatbuffers.Builder, TARGET: number): void;
    static endFPCPathRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCPathRequest(builder: flatbuffers.Builder, TARGET: number): flatbuffers.Offset;
    unpack(): FPCPathRequestT;
    unpackTo(_o: FPCPathRequestT): void;
}
export declare class FPCPathRequestT implements flatbuffers.IGeneratedObject {
    TARGET: number;
    constructor(TARGET?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCPathRequest.d.ts.map