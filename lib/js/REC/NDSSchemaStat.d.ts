import * as flatbuffers from 'flatbuffers';
/**
 * One standard's record footprint in the node store.
 */
export declare class NDSSchemaStat implements flatbuffers.IUnpackableObject<NDSSchemaStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSSchemaStat;
    static getRootAsNDSSchemaStat(bb: flatbuffers.ByteBuffer, obj?: NDSSchemaStat): NDSSchemaStat;
    static getSizePrefixedRootAsNDSSchemaStat(bb: flatbuffers.ByteBuffer, obj?: NDSSchemaStat): NDSSchemaStat;
    /**
     * Standard code, e.g. "OMM".
     */
    SCHEMA(): string | null;
    SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RECORD_COUNT(): bigint;
    TOTAL_BYTES(): bigint;
    /**
     * Newest record epoch held, Unix milliseconds; 0 = unknown.
     */
    NEWEST_EPOCH_MS(): bigint;
    /**
     * Oldest record epoch held, Unix milliseconds; 0 = unknown.
     */
    OLDEST_EPOCH_MS(): bigint;
    static startNDSSchemaStat(builder: flatbuffers.Builder): void;
    static addSchema(builder: flatbuffers.Builder, SCHEMAOffset: flatbuffers.Offset): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: bigint): void;
    static addTotalBytes(builder: flatbuffers.Builder, TOTAL_BYTES: bigint): void;
    static addNewestEpochMs(builder: flatbuffers.Builder, NEWEST_EPOCH_MS: bigint): void;
    static addOldestEpochMs(builder: flatbuffers.Builder, OLDEST_EPOCH_MS: bigint): void;
    static endNDSSchemaStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSSchemaStat(builder: flatbuffers.Builder, SCHEMAOffset: flatbuffers.Offset, RECORD_COUNT: bigint, TOTAL_BYTES: bigint, NEWEST_EPOCH_MS: bigint, OLDEST_EPOCH_MS: bigint): flatbuffers.Offset;
    unpack(): NDSSchemaStatT;
    unpackTo(_o: NDSSchemaStatT): void;
}
export declare class NDSSchemaStatT implements flatbuffers.IGeneratedObject {
    SCHEMA: string | Uint8Array | null;
    RECORD_COUNT: bigint;
    TOTAL_BYTES: bigint;
    NEWEST_EPOCH_MS: bigint;
    OLDEST_EPOCH_MS: bigint;
    constructor(SCHEMA?: string | Uint8Array | null, RECORD_COUNT?: bigint, TOTAL_BYTES?: bigint, NEWEST_EPOCH_MS?: bigint, OLDEST_EPOCH_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSSchemaStat.d.ts.map