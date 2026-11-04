import * as flatbuffers from 'flatbuffers';
/**
 * Instance identity is host-provided, opaque, and not a physical quantity.
 */
export declare class PRWInstance implements flatbuffers.IUnpackableObject<PRWInstanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWInstance;
    static getRootAsPRWInstance(bb: flatbuffers.ByteBuffer, obj?: PRWInstance): PRWInstance;
    static getSizePrefixedRootAsPRWInstance(bb: flatbuffers.ByteBuffer, obj?: PRWInstance): PRWInstance;
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    INSTANCE_ID(): string;
    INSTANCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Incremented on reinitialization or configuration invalidation.
     */
    GENERATION(): bigint;
    static startPRWInstance(builder: flatbuffers.Builder): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addInstanceId(builder: flatbuffers.Builder, INSTANCE_IDOffset: flatbuffers.Offset): void;
    static addGeneration(builder: flatbuffers.Builder, GENERATION: bigint): void;
    static endPRWInstance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWInstance(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset, INSTANCE_IDOffset: flatbuffers.Offset, GENERATION: bigint): flatbuffers.Offset;
    unpack(): PRWInstanceT;
    unpackTo(_o: PRWInstanceT): void;
}
export declare class PRWInstanceT implements flatbuffers.IGeneratedObject {
    MODULE_ID: string | Uint8Array | null;
    INSTANCE_ID: string | Uint8Array | null;
    GENERATION: bigint;
    constructor(MODULE_ID?: string | Uint8Array | null, INSTANCE_ID?: string | Uint8Array | null, GENERATION?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWInstance.d.ts.map