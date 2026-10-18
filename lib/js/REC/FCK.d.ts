import * as flatbuffers from 'flatbuffers';
import { FCKCounters, FCKCountersT } from './FCKCounters.js';
import { FCKSegment, FCKSegmentT } from './FCKSegment.js';
/**
 * FlatSQL Checkpoint.
 */
export declare class FCK implements flatbuffers.IUnpackableObject<FCKT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FCK;
    static getRootAsFCK(bb: flatbuffers.ByteBuffer, obj?: FCK): FCK;
    static getSizePrefixedRootAsFCK(bb: flatbuffers.ByteBuffer, obj?: FCK): FCK;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stream offset of this frame's size prefix.
     */
    SELF_OFFSET(): bigint;
    /**
     * Stream offset of the previous non-record frame; 0xFFFFFFFFFFFFFFFF in genesis.
     */
    PREVIOUS(): bigint;
    FEED_ID(): number;
    /**
     * The feed's identity: its record type, provider and source.
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The stream generation (compactions write the next one).
     */
    GENERATION(): number;
    /**
     * Unix seconds.
     */
    COMMITTED_AT(): bigint;
    /**
     * End offset of the last FMB folded into the segments.
     */
    APPLIED_THROUGH(): bigint;
    /**
     * The type's highest seq issued so far.
     */
    TYPE_SEQ_HIGH(): bigint;
    COUNTERS(obj?: FCKCounters): FCKCounters | null;
    SEGMENTS(index: number, obj?: FCKSegment): FCKSegment | null;
    segmentsLength(): number;
    /**
     * sha2-256 of each segment frame, 32 bytes each, in SEGMENTS order.
     */
    SEGMENT_DIGESTS(index: number): number | null;
    segmentDigestsLength(): number;
    segmentDigestsArray(): Uint8Array | null;
    /**
     * Binary CID of the commits tree as of APPLIED_THROUGH.
     */
    COMMITS_ROOT_CID(index: number): number | null;
    commitsRootCidLength(): number;
    commitsRootCidArray(): Uint8Array | null;
    /**
     * Binary CID of the previous feed root.
     */
    PREVIOUS_FEED_ROOT_CID(index: number): number | null;
    previousFeedRootCidLength(): number;
    previousFeedRootCidArray(): Uint8Array | null;
    /**
     * Total record bytes of the feed's rows; 0 when COUNTERS.ROWS is 0.
     */
    RECORD_BYTES(): bigint;
    /**
     * Lowest and highest w over the feed's rows; 0 when COUNTERS.ROWS is 0.
     */
    MIN_W(): bigint;
    MAX_W(): bigint;
    static startFCK(builder: flatbuffers.Builder): void;
    static addSelfOffset(builder: flatbuffers.Builder, SELF_OFFSET: bigint): void;
    static addPrevious(builder: flatbuffers.Builder, PREVIOUS: bigint): void;
    static addFeedId(builder: flatbuffers.Builder, FEED_ID: number): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addGeneration(builder: flatbuffers.Builder, GENERATION: number): void;
    static addCommittedAt(builder: flatbuffers.Builder, COMMITTED_AT: bigint): void;
    static addAppliedThrough(builder: flatbuffers.Builder, APPLIED_THROUGH: bigint): void;
    static addTypeSeqHigh(builder: flatbuffers.Builder, TYPE_SEQ_HIGH: bigint): void;
    static addCounters(builder: flatbuffers.Builder, COUNTERSOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentDigests(builder: flatbuffers.Builder, SEGMENT_DIGESTSOffset: flatbuffers.Offset): void;
    static createSegmentDigestsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSegmentDigestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCommitsRootCid(builder: flatbuffers.Builder, COMMITS_ROOT_CIDOffset: flatbuffers.Offset): void;
    static createCommitsRootCidVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCommitsRootCidVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPreviousFeedRootCid(builder: flatbuffers.Builder, PREVIOUS_FEED_ROOT_CIDOffset: flatbuffers.Offset): void;
    static createPreviousFeedRootCidVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPreviousFeedRootCidVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRecordBytes(builder: flatbuffers.Builder, RECORD_BYTES: bigint): void;
    static addMinW(builder: flatbuffers.Builder, MIN_W: bigint): void;
    static addMaxW(builder: flatbuffers.Builder, MAX_W: bigint): void;
    static endFCK(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFCKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFCKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): FCKT;
    unpackTo(_o: FCKT): void;
}
export declare class FCKT implements flatbuffers.IGeneratedObject {
    SELF_OFFSET: bigint;
    PREVIOUS: bigint;
    FEED_ID: number;
    TYPE: string | Uint8Array | null;
    PROVIDER: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    GENERATION: number;
    COMMITTED_AT: bigint;
    APPLIED_THROUGH: bigint;
    TYPE_SEQ_HIGH: bigint;
    COUNTERS: FCKCountersT | null;
    SEGMENTS: (FCKSegmentT)[];
    SEGMENT_DIGESTS: (number)[];
    COMMITS_ROOT_CID: (number)[];
    PREVIOUS_FEED_ROOT_CID: (number)[];
    RECORD_BYTES: bigint;
    MIN_W: bigint;
    MAX_W: bigint;
    constructor(SELF_OFFSET?: bigint, PREVIOUS?: bigint, FEED_ID?: number, TYPE?: string | Uint8Array | null, PROVIDER?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, GENERATION?: number, COMMITTED_AT?: bigint, APPLIED_THROUGH?: bigint, TYPE_SEQ_HIGH?: bigint, COUNTERS?: FCKCountersT | null, SEGMENTS?: (FCKSegmentT)[], SEGMENT_DIGESTS?: (number)[], COMMITS_ROOT_CID?: (number)[], PREVIOUS_FEED_ROOT_CID?: (number)[], RECORD_BYTES?: bigint, MIN_W?: bigint, MAX_W?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FCK.d.ts.map