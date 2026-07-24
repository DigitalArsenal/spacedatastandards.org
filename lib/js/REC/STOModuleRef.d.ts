import * as flatbuffers from 'flatbuffers';
/**
 * Reference to the store module that runs a store.
 */
export declare class STOModuleRef implements flatbuffers.IUnpackableObject<STOModuleRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STOModuleRef;
    static getRootAsSTOModuleRef(bb: flatbuffers.ByteBuffer, obj?: STOModuleRef): STOModuleRef;
    static getSizePrefixedRootAsSTOModuleRef(bb: flatbuffers.ByteBuffer, obj?: STOModuleRef): STOModuleRef;
    /**
     * `$PLG.PLUGIN_ID` of the store module
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content hash of the (encrypted) store module artifact
     */
    CONTENT_HASH(): string | null;
    CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Module version
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSTOModuleRef(builder: flatbuffers.Builder): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static endSTOModuleRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSTOModuleRef(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset, CONTENT_HASHOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): STOModuleRefT;
    unpackTo(_o: STOModuleRefT): void;
}
export declare class STOModuleRefT implements flatbuffers.IGeneratedObject {
    PLUGIN_ID: string | Uint8Array | null;
    CONTENT_HASH: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    constructor(PLUGIN_ID?: string | Uint8Array | null, CONTENT_HASH?: string | Uint8Array | null, VERSION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STOModuleRef.d.ts.map