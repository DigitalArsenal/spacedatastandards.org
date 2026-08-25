import * as flatbuffers from 'flatbuffers';
/**
 * One chunk that was read and durably committed.
 */
export declare class IRMChunk implements flatbuffers.IUnpackableObject<IRMChunkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRMChunk;
    static getRootAsIRMChunk(bb: flatbuffers.ByteBuffer, obj?: IRMChunk): IRMChunk;
    static getSizePrefixedRootAsIRMChunk(bb: flatbuffers.ByteBuffer, obj?: IRMChunk): IRMChunk;
    /**
     * Zero-based position of the chunk in the job's read sequence.
     */
    CHUNK_INDEX(): number;
    /**
     * Publisher-stable batch identifier the chunk's records were stored under,
     * verbatim, so a consumer can join the mark to the stored rows.
     */
    BATCH_ID(): string | null;
    BATCH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First byte of the range that was read.
     */
    RANGE_FIRST_BYTE(): bigint;
    /**
     * Last byte of the range that was read. Interpreted per RANGE_MODE:
     * inclusive under INCLUSIVE_BYTE_RANGE, exclusive under OFFSET_LENGTH.
     */
    RANGE_LAST_BYTE(): bigint;
    /**
     * Bytes the read actually returned, which may be shorter than the range
     * requested.
     */
    BYTE_LENGTH(): bigint;
    /**
     * SHA-256 of the chunk's bytes as 64 lowercase hexadecimal characters.
     */
    CHUNK_SHA256(): string | null;
    CHUNK_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Records the decoder produced from the chunk.
     */
    RECORDS_DECODED(): number;
    /**
     * Records the storage lane reported as durably committed. A chunk whose
     * stored count is 0 is not marked at all.
     */
    RECORDS_STORED(): number;
    /**
     * Records the storage lane rejected or collapsed as duplicates.
     */
    RECORDS_REJECTED(): number;
    /**
     * Number of read attempts this chunk cost, including the successful one.
     */
    ATTEMPTS(): number;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which the storage lane
     * confirmed the commit.
     */
    COMMITTED_AT(): string | null;
    COMMITTED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIRMChunk(builder: flatbuffers.Builder): void;
    static addChunkIndex(builder: flatbuffers.Builder, CHUNK_INDEX: number): void;
    static addBatchId(builder: flatbuffers.Builder, BATCH_IDOffset: flatbuffers.Offset): void;
    static addRangeFirstByte(builder: flatbuffers.Builder, RANGE_FIRST_BYTE: bigint): void;
    static addRangeLastByte(builder: flatbuffers.Builder, RANGE_LAST_BYTE: bigint): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addChunkSha256(builder: flatbuffers.Builder, CHUNK_SHA256Offset: flatbuffers.Offset): void;
    static addRecordsDecoded(builder: flatbuffers.Builder, RECORDS_DECODED: number): void;
    static addRecordsStored(builder: flatbuffers.Builder, RECORDS_STORED: number): void;
    static addRecordsRejected(builder: flatbuffers.Builder, RECORDS_REJECTED: number): void;
    static addAttempts(builder: flatbuffers.Builder, ATTEMPTS: number): void;
    static addCommittedAt(builder: flatbuffers.Builder, COMMITTED_ATOffset: flatbuffers.Offset): void;
    static endIRMChunk(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIRMChunk(builder: flatbuffers.Builder, CHUNK_INDEX: number, BATCH_IDOffset: flatbuffers.Offset, RANGE_FIRST_BYTE: bigint, RANGE_LAST_BYTE: bigint, BYTE_LENGTH: bigint, CHUNK_SHA256Offset: flatbuffers.Offset, RECORDS_DECODED: number, RECORDS_STORED: number, RECORDS_REJECTED: number, ATTEMPTS: number, COMMITTED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IRMChunkT;
    unpackTo(_o: IRMChunkT): void;
}
export declare class IRMChunkT implements flatbuffers.IGeneratedObject {
    CHUNK_INDEX: number;
    BATCH_ID: string | Uint8Array | null;
    RANGE_FIRST_BYTE: bigint;
    RANGE_LAST_BYTE: bigint;
    BYTE_LENGTH: bigint;
    CHUNK_SHA256: string | Uint8Array | null;
    RECORDS_DECODED: number;
    RECORDS_STORED: number;
    RECORDS_REJECTED: number;
    ATTEMPTS: number;
    COMMITTED_AT: string | Uint8Array | null;
    constructor(CHUNK_INDEX?: number, BATCH_ID?: string | Uint8Array | null, RANGE_FIRST_BYTE?: bigint, RANGE_LAST_BYTE?: bigint, BYTE_LENGTH?: bigint, CHUNK_SHA256?: string | Uint8Array | null, RECORDS_DECODED?: number, RECORDS_STORED?: number, RECORDS_REJECTED?: number, ATTEMPTS?: number, COMMITTED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRMChunk.d.ts.map