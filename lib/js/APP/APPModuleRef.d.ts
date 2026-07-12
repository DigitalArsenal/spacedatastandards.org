import * as flatbuffers from 'flatbuffers';
/**
 * One member WASM module of the app. References module identity; never
 * embeds the module artifact itself (delivery is the module-bundle lane).
 */
export declare class APPModuleRef implements flatbuffers.IUnpackableObject<APPModuleRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APPModuleRef;
    static getRootAsAPPModuleRef(bb: flatbuffers.ByteBuffer, obj?: APPModuleRef): APPModuleRef;
    static getSizePrefixedRootAsAPPModuleRef(bb: flatbuffers.ByteBuffer, obj?: APPModuleRef): APPModuleRef;
    /**
     * App-local stable reference for this module. Required, unique within
     * the manifest.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Plugin identifier of the module as published in its plugin listing.
     */
    PLUGIN_ID(): string | null;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the module's
     * portable (pre-AOT, publication-trailer-stripped) WASM bytes. This is
     * the identity capability policies and signature policies key on.
     */
    CONTENT_HASH(): string | null;
    CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Module version expected by the app.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text launcher hint, for example primary, worker, or ui-host.
     */
    ROLE(): string | null;
    ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-invocation wall-clock budget override in milliseconds. Zero means
     * the host runtime default applies.
     */
    MAX_WALL_CLOCK_MS(): bigint;
    /**
     * Per-invocation execution-cost (fuel) budget override. Zero means the
     * host runtime default applies.
     */
    MAX_COST_UNITS(): bigint;
    /**
     * Linear-memory ceiling override in 64 KiB WASM pages. Zero means the
     * host runtime default applies.
     */
    MAX_MEMORY_PAGES(): number;
    static startAPPModuleRef(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addContentHash(builder: flatbuffers.Builder, CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addMaxWallClockMs(builder: flatbuffers.Builder, MAX_WALL_CLOCK_MS: bigint): void;
    static addMaxCostUnits(builder: flatbuffers.Builder, MAX_COST_UNITS: bigint): void;
    static addMaxMemoryPages(builder: flatbuffers.Builder, MAX_MEMORY_PAGES: number): void;
    static endAPPModuleRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPPModuleRef(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, PLUGIN_IDOffset: flatbuffers.Offset, CONTENT_HASHOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, ROLEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, MAX_WALL_CLOCK_MS: bigint, MAX_COST_UNITS: bigint, MAX_MEMORY_PAGES: number): flatbuffers.Offset;
    unpack(): APPModuleRefT;
    unpackTo(_o: APPModuleRefT): void;
}
export declare class APPModuleRefT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PLUGIN_ID: string | Uint8Array | null;
    CONTENT_HASH: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    ROLE: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    MAX_WALL_CLOCK_MS: bigint;
    MAX_COST_UNITS: bigint;
    MAX_MEMORY_PAGES: number;
    constructor(ID?: string | Uint8Array | null, PLUGIN_ID?: string | Uint8Array | null, CONTENT_HASH?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, ROLE?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, MAX_WALL_CLOCK_MS?: bigint, MAX_COST_UNITS?: bigint, MAX_MEMORY_PAGES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APPModuleRef.d.ts.map