import * as flatbuffers from 'flatbuffers';
/**
 * Plugin capability declaration
 */
export declare class PluginCapability implements flatbuffers.IUnpackableObject<PluginCapabilityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PluginCapability;
    static getRootAsPluginCapability(bb: flatbuffers.ByteBuffer, obj?: PluginCapability): PluginCapability;
    static getSizePrefixedRootAsPluginCapability(bb: flatbuffers.ByteBuffer, obj?: PluginCapability): PluginCapability;
    /**
     * Capability name, e.g., "gpu_compute", "wasm_simd"
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Capability version
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether this capability is required
     */
    REQUIRED(): boolean;
    static startPluginCapability(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addRequired(builder: flatbuffers.Builder, REQUIRED: boolean): void;
    static endPluginCapability(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPluginCapability(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, REQUIRED: boolean): flatbuffers.Offset;
    unpack(): PluginCapabilityT;
    unpackTo(_o: PluginCapabilityT): void;
}
export declare class PluginCapabilityT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    REQUIRED: boolean;
    constructor(NAME?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, REQUIRED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PluginCapability.d.ts.map