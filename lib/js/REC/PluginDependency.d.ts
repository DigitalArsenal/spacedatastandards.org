import * as flatbuffers from 'flatbuffers';
/**
 * Plugin dependency on another plugin
 */
export declare class PluginDependency implements flatbuffers.IUnpackableObject<PluginDependencyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PluginDependency;
    static getRootAsPluginDependency(bb: flatbuffers.ByteBuffer, obj?: PluginDependency): PluginDependency;
    static getSizePrefixedRootAsPluginDependency(bb: flatbuffers.ByteBuffer, obj?: PluginDependency): PluginDependency;
    /**
     * Plugin ID of the dependency
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum version required (semver)
     */
    MIN_VERSION(): string | null;
    MIN_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maximum version allowed (optional)
     */
    MAX_VERSION(): string | null;
    MAX_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPluginDependency(builder: flatbuffers.Builder): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addMinVersion(builder: flatbuffers.Builder, MIN_VERSIONOffset: flatbuffers.Offset): void;
    static addMaxVersion(builder: flatbuffers.Builder, MAX_VERSIONOffset: flatbuffers.Offset): void;
    static endPluginDependency(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPluginDependency(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset, MIN_VERSIONOffset: flatbuffers.Offset, MAX_VERSIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PluginDependencyT;
    unpackTo(_o: PluginDependencyT): void;
}
export declare class PluginDependencyT implements flatbuffers.IGeneratedObject {
    PLUGIN_ID: string | Uint8Array | null;
    MIN_VERSION: string | Uint8Array | null;
    MAX_VERSION: string | Uint8Array | null;
    constructor(PLUGIN_ID?: string | Uint8Array | null, MIN_VERSION?: string | Uint8Array | null, MAX_VERSION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PluginDependency.d.ts.map