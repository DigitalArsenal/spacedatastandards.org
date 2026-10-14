import * as flatbuffers from 'flatbuffers';
import { srgRetrievalState } from './srgRetrievalState.js';
/**
 * Progress of a retriever through a provider's resources.
 */
export declare class SRGRetrievalStatus implements flatbuffers.IUnpackableObject<SRGRetrievalStatusT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRGRetrievalStatus;
    static getRootAsSRGRetrievalStatus(bb: flatbuffers.ByteBuffer, obj?: SRGRetrievalStatus): SRGRetrievalStatus;
    static getSizePrefixedRootAsSRGRetrievalStatus(bb: flatbuffers.ByteBuffer, obj?: SRGRetrievalStatus): SRGRetrievalStatus;
    /**
     * SOURCE_ID of the provider.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATE(): srgRetrievalState;
    /**
     * True when retrieval is turned on.
     */
    ENABLED(): boolean;
    /**
     * Unix milliseconds of this status; 0 = not stated.
     */
    GENERATED_AT_MS(): bigint;
    /**
     * Resources fetched in the run that produced this status.
     */
    RETRIEVED_COUNT(): number;
    /**
     * Resources of the current discovery queue processed so far.
     */
    COMPLETED_COUNT(): number;
    /**
     * Resources in the current discovery queue; 0 = no queue or unknown.
     */
    TOTAL_COUNT(): number;
    /**
     * Resources still to process (TOTAL_COUNT - COMPLETED_COUNT).
     */
    REMAINING_COUNT(): number;
    /**
     * CID of the stored discovery queue (an SRG with RESOURCES) the retriever
     * works through; empty = none.
     */
    QUEUE_CID(): string | null;
    QUEUE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bytes stored (or reserved) against ARCHIVE_MAX_BYTES so far.
     */
    ARCHIVE_RESERVED_BYTES(): bigint;
    /**
     * The storage budget, bytes; 0 = unlimited or not stated.
     */
    ARCHIVE_MAX_BYTES(): bigint;
    /**
     * Normalized SDS records produced from the retrieved resources (raw
     * preservation produces none).
     */
    NORMALIZED_RECORDS(): bigint;
    /**
     * The resource the status concerns, when it concerns one (e.g. a
     * ProviderPageOnly answer): its URL, size and SHA-256 (lower-case hex).
     */
    RESOURCE_URL(): string | null;
    RESOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BYTE_LENGTH(): bigint;
    SHA256(): string | null;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * For a paged pass over stored resources (rebuilding coverage from
     * archived descriptors): items scanned in this page, items of a supported
     * format among them, and the offset the next page starts at. STATE is
     * Complete on the last page.
     */
    SCANNED_COUNT(): number;
    SUPPORTED_COUNT(): number;
    NEXT_OFFSET(): number;
    /**
     * Human-readable detail.
     */
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSRGRetrievalStatus(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATE: srgRetrievalState): void;
    static addEnabled(builder: flatbuffers.Builder, ENABLED: boolean): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addRetrievedCount(builder: flatbuffers.Builder, RETRIEVED_COUNT: number): void;
    static addCompletedCount(builder: flatbuffers.Builder, COMPLETED_COUNT: number): void;
    static addTotalCount(builder: flatbuffers.Builder, TOTAL_COUNT: number): void;
    static addRemainingCount(builder: flatbuffers.Builder, REMAINING_COUNT: number): void;
    static addQueueCid(builder: flatbuffers.Builder, QUEUE_CIDOffset: flatbuffers.Offset): void;
    static addArchiveReservedBytes(builder: flatbuffers.Builder, ARCHIVE_RESERVED_BYTES: bigint): void;
    static addArchiveMaxBytes(builder: flatbuffers.Builder, ARCHIVE_MAX_BYTES: bigint): void;
    static addNormalizedRecords(builder: flatbuffers.Builder, NORMALIZED_RECORDS: bigint): void;
    static addResourceUrl(builder: flatbuffers.Builder, RESOURCE_URLOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addScannedCount(builder: flatbuffers.Builder, SCANNED_COUNT: number): void;
    static addSupportedCount(builder: flatbuffers.Builder, SUPPORTED_COUNT: number): void;
    static addNextOffset(builder: flatbuffers.Builder, NEXT_OFFSET: number): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static endSRGRetrievalStatus(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSRGRetrievalStatus(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, STATE: srgRetrievalState, ENABLED: boolean, GENERATED_AT_MS: bigint, RETRIEVED_COUNT: number, COMPLETED_COUNT: number, TOTAL_COUNT: number, REMAINING_COUNT: number, QUEUE_CIDOffset: flatbuffers.Offset, ARCHIVE_RESERVED_BYTES: bigint, ARCHIVE_MAX_BYTES: bigint, NORMALIZED_RECORDS: bigint, RESOURCE_URLOffset: flatbuffers.Offset, BYTE_LENGTH: bigint, SHA256Offset: flatbuffers.Offset, SCANNED_COUNT: number, SUPPORTED_COUNT: number, NEXT_OFFSET: number, NOTEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SRGRetrievalStatusT;
    unpackTo(_o: SRGRetrievalStatusT): void;
}
export declare class SRGRetrievalStatusT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    STATE: srgRetrievalState;
    ENABLED: boolean;
    GENERATED_AT_MS: bigint;
    RETRIEVED_COUNT: number;
    COMPLETED_COUNT: number;
    TOTAL_COUNT: number;
    REMAINING_COUNT: number;
    QUEUE_CID: string | Uint8Array | null;
    ARCHIVE_RESERVED_BYTES: bigint;
    ARCHIVE_MAX_BYTES: bigint;
    NORMALIZED_RECORDS: bigint;
    RESOURCE_URL: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    SHA256: string | Uint8Array | null;
    SCANNED_COUNT: number;
    SUPPORTED_COUNT: number;
    NEXT_OFFSET: number;
    NOTE: string | Uint8Array | null;
    constructor(SOURCE_ID?: string | Uint8Array | null, STATE?: srgRetrievalState, ENABLED?: boolean, GENERATED_AT_MS?: bigint, RETRIEVED_COUNT?: number, COMPLETED_COUNT?: number, TOTAL_COUNT?: number, REMAINING_COUNT?: number, QUEUE_CID?: string | Uint8Array | null, ARCHIVE_RESERVED_BYTES?: bigint, ARCHIVE_MAX_BYTES?: bigint, NORMALIZED_RECORDS?: bigint, RESOURCE_URL?: string | Uint8Array | null, BYTE_LENGTH?: bigint, SHA256?: string | Uint8Array | null, SCANNED_COUNT?: number, SUPPORTED_COUNT?: number, NEXT_OFFSET?: number, NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRGRetrievalStatus.d.ts.map