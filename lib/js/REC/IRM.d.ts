import * as flatbuffers from 'flatbuffers';
import { IRMChunk, IRMChunkT } from './IRMChunk.js';
import { IRMDecodeContext, IRMDecodeContextT } from './IRMDecodeContext.js';
import { IRMFault, IRMFaultT } from './IRMFault.js';
import { IRMSource, IRMSourceT } from './IRMSource.js';
import { irmJobState } from './irmJobState.js';
import { irmRangeMode } from './irmRangeMode.js';
/**
 * Ingest Resume Mark
 */
export declare class IRM implements flatbuffers.IUnpackableObject<IRMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRM;
    static getRootAsIRM(bb: flatbuffers.ByteBuffer, obj?: IRM): IRM;
    static getSizePrefixedRootAsIRM(bb: flatbuffers.ByteBuffer, obj?: IRM): IRM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of the ingest job. Together with the publishing
     * key it is the job's identity across every mark it emits.
     */
    JOB_ID(): string;
    JOB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Monotonic version of this mark within JOB_ID. Highest wins per publishing
     * key. Never reused, never decremented.
     */
    SEQUENCE(): bigint;
    /**
     * Publisher-stable identifier of the data provider being read, verbatim.
     * Publisher data: it may name a real provider.
     */
    PROVIDER_ID(): string;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Reverse-DNS identifier of the ingest module or flow that owns the job, so
     * two pipelines reading one provider do not share a resume point.
     */
    INGESTOR_ID(): string | null;
    INGESTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source object and its validators.
     */
    SOURCE(obj?: IRMSource): IRMSource | null;
    /**
     * Lifecycle of the job.
     */
    STATE(): irmJobState;
    /**
     * How byte positions in this mark are addressed.
     */
    RANGE_MODE(): irmRangeMode;
    /**
     * Byte offset at which the next read begins, in the SOURCE's own byte stream:
     * the compressed stream when DECODE_CONTEXT.COMPRESSION is non-empty, in
     * which case it is a record boundary only in company with the decoder state,
     * window and partial record. On an uncompressed source it is ALWAYS a
     * complete-record boundary, corrected backwards from the previous chunk's
     * byte budget. 0 is a valid value and means the job has committed nothing yet.
     */
    NEXT_OFFSET(): bigint;
    /**
     * Zero-based index of the next chunk to read. With PART_INDEX addressing this
     * is the only position.
     */
    NEXT_CHUNK_INDEX(): number;
    /**
     * Byte budget the publisher reads per chunk. Records the ceiling the job
     * actually ran under, which a host may have clamped below the configured one.
     */
    CHUNK_BYTE_BUDGET(): bigint;
    /**
     * Everything needed to decode the chunk at NEXT_OFFSET. REQUIRED in practice
     * whenever NEXT_OFFSET is past the source's own header; a consumer that finds
     * it absent there restarts from offset 0 rather than decoding blind.
     */
    DECODE_CONTEXT(obj?: IRMDecodeContext): IRMDecodeContext | null;
    /**
     * The chunk this mark was advanced from — the last one durably committed.
     */
    LAST_CHUNK(obj?: IRMChunk): IRMChunk | null;
    /**
     * Chunks durably committed by this job so far.
     */
    CHUNKS_COMMITTED(): number;
    /**
     * Source bytes accounted for by committed chunks.
     */
    BYTES_COMMITTED(): bigint;
    /**
     * Records durably committed by this job so far, across every chunk.
     */
    RECORDS_COMMITTED(): bigint;
    /**
     * Four-character standard code of the records this job writes, `$` included,
     * e.g. `$TBS`. Never a union ordinal.
     */
    TARGET_STANDARD(): string | null;
    TARGET_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reconciliation mode the storage lane was called with, verbatim, e.g.
     * `append`. A chunked job never reconciles per batch: reconciling would delete
     * every earlier chunk as the next one arrived.
     */
    RECONCILE_MODE(): string | null;
    RECONCILE_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Deduplication or merge policy the job applied, verbatim.
     */
    MERGE_POLICY(): string | null;
    MERGE_POLICY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The last unrecovered error, when there is one.
     */
    FAULT(obj?: IRMFault): IRMFault | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which the job was created.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which the first chunk was read.
     */
    STARTED_AT(): string | null;
    STARTED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which this mark was published.
     * With JOB_ID and SEQUENCE this is the version key; SEQUENCE breaks ties.
     */
    UPDATED_AT(): string;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which the job reached COMPLETE.
     */
    COMPLETED_AT(): string | null;
    COMPLETED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp after which a consumer treats the
     * mark as stale and re-validates the source before resuming. Empty means the
     * publisher states no expiry.
     */
    EXPIRES_AT(): string | null;
    EXPIRES_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `namespace:value` facets, sorted and deduplicated. See TAG GRAMMAR above.
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Publisher note about this job; never a substitute for a field.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIRM(builder: flatbuffers.Builder): void;
    static addJobId(builder: flatbuffers.Builder, JOB_IDOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addIngestorId(builder: flatbuffers.Builder, INGESTOR_IDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATE: irmJobState): void;
    static addRangeMode(builder: flatbuffers.Builder, RANGE_MODE: irmRangeMode): void;
    static addNextOffset(builder: flatbuffers.Builder, NEXT_OFFSET: bigint): void;
    static addNextChunkIndex(builder: flatbuffers.Builder, NEXT_CHUNK_INDEX: number): void;
    static addChunkByteBudget(builder: flatbuffers.Builder, CHUNK_BYTE_BUDGET: bigint): void;
    static addDecodeContext(builder: flatbuffers.Builder, DECODE_CONTEXTOffset: flatbuffers.Offset): void;
    static addLastChunk(builder: flatbuffers.Builder, LAST_CHUNKOffset: flatbuffers.Offset): void;
    static addChunksCommitted(builder: flatbuffers.Builder, CHUNKS_COMMITTED: number): void;
    static addBytesCommitted(builder: flatbuffers.Builder, BYTES_COMMITTED: bigint): void;
    static addRecordsCommitted(builder: flatbuffers.Builder, RECORDS_COMMITTED: bigint): void;
    static addTargetStandard(builder: flatbuffers.Builder, TARGET_STANDARDOffset: flatbuffers.Offset): void;
    static addReconcileMode(builder: flatbuffers.Builder, RECONCILE_MODEOffset: flatbuffers.Offset): void;
    static addMergePolicy(builder: flatbuffers.Builder, MERGE_POLICYOffset: flatbuffers.Offset): void;
    static addFault(builder: flatbuffers.Builder, FAULTOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addStartedAt(builder: flatbuffers.Builder, STARTED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addCompletedAt(builder: flatbuffers.Builder, COMPLETED_ATOffset: flatbuffers.Offset): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_ATOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endIRM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishIRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedIRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): IRMT;
    unpackTo(_o: IRMT): void;
}
export declare class IRMT implements flatbuffers.IGeneratedObject {
    JOB_ID: string | Uint8Array | null;
    SEQUENCE: bigint;
    PROVIDER_ID: string | Uint8Array | null;
    INGESTOR_ID: string | Uint8Array | null;
    SOURCE: IRMSourceT | null;
    STATE: irmJobState;
    RANGE_MODE: irmRangeMode;
    NEXT_OFFSET: bigint;
    NEXT_CHUNK_INDEX: number;
    CHUNK_BYTE_BUDGET: bigint;
    DECODE_CONTEXT: IRMDecodeContextT | null;
    LAST_CHUNK: IRMChunkT | null;
    CHUNKS_COMMITTED: number;
    BYTES_COMMITTED: bigint;
    RECORDS_COMMITTED: bigint;
    TARGET_STANDARD: string | Uint8Array | null;
    RECONCILE_MODE: string | Uint8Array | null;
    MERGE_POLICY: string | Uint8Array | null;
    FAULT: IRMFaultT | null;
    CREATED_AT: string | Uint8Array | null;
    STARTED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    COMPLETED_AT: string | Uint8Array | null;
    EXPIRES_AT: string | Uint8Array | null;
    TAGS: (string)[];
    NOTES: string | Uint8Array | null;
    constructor(JOB_ID?: string | Uint8Array | null, SEQUENCE?: bigint, PROVIDER_ID?: string | Uint8Array | null, INGESTOR_ID?: string | Uint8Array | null, SOURCE?: IRMSourceT | null, STATE?: irmJobState, RANGE_MODE?: irmRangeMode, NEXT_OFFSET?: bigint, NEXT_CHUNK_INDEX?: number, CHUNK_BYTE_BUDGET?: bigint, DECODE_CONTEXT?: IRMDecodeContextT | null, LAST_CHUNK?: IRMChunkT | null, CHUNKS_COMMITTED?: number, BYTES_COMMITTED?: bigint, RECORDS_COMMITTED?: bigint, TARGET_STANDARD?: string | Uint8Array | null, RECONCILE_MODE?: string | Uint8Array | null, MERGE_POLICY?: string | Uint8Array | null, FAULT?: IRMFaultT | null, CREATED_AT?: string | Uint8Array | null, STARTED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, COMPLETED_AT?: string | Uint8Array | null, EXPIRES_AT?: string | Uint8Array | null, TAGS?: (string)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRM.d.ts.map