import * as flatbuffers from 'flatbuffers';
/**
 * Attribution linking a computed trade metric to the exact WASM module build that produced it.
 */
export declare class DCOModuleAttribution implements flatbuffers.IUnpackableObject<DCOModuleAttributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DCOModuleAttribution;
    static getRootAsDCOModuleAttribution(bb: flatbuffers.ByteBuffer, obj?: DCOModuleAttribution): DCOModuleAttribution;
    static getSizePrefixedRootAsDCOModuleAttribution(bb: flatbuffers.ByteBuffer, obj?: DCOModuleAttribution): DCOModuleAttribution;
    /**
     * Name of the computed metric (e.g. "DELTA_V_MPS", "MARGIN_GAIN_DB", "RESIDUAL_SCORE").
     */
    METRIC_NAME(): string;
    METRIC_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical module identifier (e.g. "analysis/coa-synthesizer").
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Module semantic version string.
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lowercase hex SHA-256 of the executed portable WASM artifact.
     */
    WASM_SHA256(): string | null;
    WASM_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDCOModuleAttribution(builder: flatbuffers.Builder): void;
    static addMetricName(builder: flatbuffers.Builder, METRIC_NAMEOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addWasmSha256(builder: flatbuffers.Builder, WASM_SHA256Offset: flatbuffers.Offset): void;
    static endDCOModuleAttribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDCOModuleAttribution(builder: flatbuffers.Builder, METRIC_NAMEOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, WASM_SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DCOModuleAttributionT;
    unpackTo(_o: DCOModuleAttributionT): void;
}
export declare class DCOModuleAttributionT implements flatbuffers.IGeneratedObject {
    METRIC_NAME: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    WASM_SHA256: string | Uint8Array | null;
    constructor(METRIC_NAME?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, WASM_SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DCOModuleAttribution.d.ts.map