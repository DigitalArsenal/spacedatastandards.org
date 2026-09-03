import * as flatbuffers from 'flatbuffers';
/**
 * Runtime counters for one installed module or flow.
 */
export declare class NDSModuleStat implements flatbuffers.IUnpackableObject<NDSModuleStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSModuleStat;
    static getRootAsNDSModuleStat(bb: flatbuffers.ByteBuffer, obj?: NDSModuleStat): NDSModuleStat;
    static getSizePrefixedRootAsNDSModuleStat(bb: flatbuffers.ByteBuffer, obj?: NDSModuleStat): NDSModuleStat;
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Runtime state, e.g. "running", "installed", "error".
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RUN_COUNT(): bigint;
    ERROR_COUNT(): bigint;
    /**
     * Unix seconds; 0 = never.
     */
    LAST_RUN_AT(): bigint;
    /**
     * Unix seconds; 0 = not scheduled.
     */
    NEXT_RUN_AT(): bigint;
    static startNDSModuleStat(builder: flatbuffers.Builder): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addRunCount(builder: flatbuffers.Builder, RUN_COUNT: bigint): void;
    static addErrorCount(builder: flatbuffers.Builder, ERROR_COUNT: bigint): void;
    static addLastRunAt(builder: flatbuffers.Builder, LAST_RUN_AT: bigint): void;
    static addNextRunAt(builder: flatbuffers.Builder, NEXT_RUN_AT: bigint): void;
    static endNDSModuleStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSModuleStat(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset, RUN_COUNT: bigint, ERROR_COUNT: bigint, LAST_RUN_AT: bigint, NEXT_RUN_AT: bigint): flatbuffers.Offset;
    unpack(): NDSModuleStatT;
    unpackTo(_o: NDSModuleStatT): void;
}
export declare class NDSModuleStatT implements flatbuffers.IGeneratedObject {
    MODULE_ID: string | Uint8Array | null;
    STATUS: string | Uint8Array | null;
    RUN_COUNT: bigint;
    ERROR_COUNT: bigint;
    LAST_RUN_AT: bigint;
    NEXT_RUN_AT: bigint;
    constructor(MODULE_ID?: string | Uint8Array | null, STATUS?: string | Uint8Array | null, RUN_COUNT?: bigint, ERROR_COUNT?: bigint, LAST_RUN_AT?: bigint, NEXT_RUN_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSModuleStat.d.ts.map