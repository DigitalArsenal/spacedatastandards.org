import * as flatbuffers from 'flatbuffers';
import { davUnavailableReason } from './davUnavailableReason.js';
/**
 * Dataset Availability - the latest dataset of a lane, as one node holds it.
 */
export declare class DAV implements flatbuffers.IUnpackableObject<DAVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DAV;
    static getRootAsDAV(bb: flatbuffers.ByteBuffer, obj?: DAV): DAV;
    static getSizePrefixedRootAsDAV(bb: flatbuffers.ByteBuffer, obj?: DAV): DAV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Standard of the dataset, as its code, e.g. "OMM".
     */
    STANDARD(): string | null;
    STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Schema file name of its records, e.g. "OMM.fbs".
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the node knows of a publication of this lane.
     */
    KNOWN(): boolean;
    /**
     * True when the node can serve the dataset now.
     */
    AVAILABLE(): boolean;
    UNAVAILABLE_REASON(): davUnavailableReason;
    /**
     * True when the node published the dataset itself.
     */
    SELF_PUBLISHED(): boolean;
    /**
     * True when the node keeps the content (it is not evicted).
     */
    PINNED(): boolean;
    /**
     * True when the node's copy is the latest known publication.
     */
    FRESH(): boolean;
    /**
     * Batch identifier of the dataset.
     */
    BATCH_ID(): string | null;
    BATCH_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Records in the dataset.
     */
    RECORD_COUNT(): bigint;
    /**
     * Bytes of the dataset's record stream.
     */
    BYTE_COUNT(): bigint;
    /**
     * Parts the dataset is split into for transfer; 0 or 1 = one part.
     */
    PARTS(): number;
    /**
     * Unix milliseconds the dataset was published.
     */
    PUBLISHED_AT_MS(): bigint;
    /**
     * Content identifier of the $PNM that announced it.
     */
    PNM_CID(): string | null;
    PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice's FILE_ID.
     */
    PNM_FILE_ID(): string | null;
    PNM_FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds of the notice.
     */
    PNM_PUBLISHED_AT_MS(): bigint;
    /**
     * True when the notice's signature verified.
     */
    PNM_SIGNATURE_VERIFIED(): boolean;
    /**
     * Peer that published the notice.
     */
    PUBLISHER_PEER_ID(): string | null;
    PUBLISHER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entity tag of the dataset, for conditional requests.
     */
    ETAG(): string | null;
    ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the dataset's records are not inline but held by the serving node
     * for delivery out of band: the reference token the node resolves (single
     * use), and the byte size of what it refers to. 0 = inline.
     */
    BODY_REF_TOKEN(): bigint;
    BODY_REF_SIZE(): bigint;
    static startDAV(builder: flatbuffers.Builder): void;
    static addStandard(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addKnown(builder: flatbuffers.Builder, KNOWN: boolean): void;
    static addAvailable(builder: flatbuffers.Builder, AVAILABLE: boolean): void;
    static addUnavailableReason(builder: flatbuffers.Builder, UNAVAILABLE_REASON: davUnavailableReason): void;
    static addSelfPublished(builder: flatbuffers.Builder, SELF_PUBLISHED: boolean): void;
    static addPinned(builder: flatbuffers.Builder, PINNED: boolean): void;
    static addFresh(builder: flatbuffers.Builder, FRESH: boolean): void;
    static addBatchId(builder: flatbuffers.Builder, BATCH_IDOffset: flatbuffers.Offset): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: bigint): void;
    static addByteCount(builder: flatbuffers.Builder, BYTE_COUNT: bigint): void;
    static addParts(builder: flatbuffers.Builder, PARTS: number): void;
    static addPublishedAtMs(builder: flatbuffers.Builder, PUBLISHED_AT_MS: bigint): void;
    static addPnmCid(builder: flatbuffers.Builder, PNM_CIDOffset: flatbuffers.Offset): void;
    static addPnmFileId(builder: flatbuffers.Builder, PNM_FILE_IDOffset: flatbuffers.Offset): void;
    static addPnmPublishedAtMs(builder: flatbuffers.Builder, PNM_PUBLISHED_AT_MS: bigint): void;
    static addPnmSignatureVerified(builder: flatbuffers.Builder, PNM_SIGNATURE_VERIFIED: boolean): void;
    static addPublisherPeerId(builder: flatbuffers.Builder, PUBLISHER_PEER_IDOffset: flatbuffers.Offset): void;
    static addEtag(builder: flatbuffers.Builder, ETAGOffset: flatbuffers.Offset): void;
    static addBodyRefToken(builder: flatbuffers.Builder, BODY_REF_TOKEN: bigint): void;
    static addBodyRefSize(builder: flatbuffers.Builder, BODY_REF_SIZE: bigint): void;
    static endDAV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDAVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDAVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDAV(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, KNOWN: boolean, AVAILABLE: boolean, UNAVAILABLE_REASON: davUnavailableReason, SELF_PUBLISHED: boolean, PINNED: boolean, FRESH: boolean, BATCH_IDOffset: flatbuffers.Offset, RECORD_COUNT: bigint, BYTE_COUNT: bigint, PARTS: number, PUBLISHED_AT_MS: bigint, PNM_CIDOffset: flatbuffers.Offset, PNM_FILE_IDOffset: flatbuffers.Offset, PNM_PUBLISHED_AT_MS: bigint, PNM_SIGNATURE_VERIFIED: boolean, PUBLISHER_PEER_IDOffset: flatbuffers.Offset, ETAGOffset: flatbuffers.Offset, BODY_REF_TOKEN: bigint, BODY_REF_SIZE: bigint): flatbuffers.Offset;
    unpack(): DAVT;
    unpackTo(_o: DAVT): void;
}
export declare class DAVT implements flatbuffers.IGeneratedObject {
    STANDARD: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    KNOWN: boolean;
    AVAILABLE: boolean;
    UNAVAILABLE_REASON: davUnavailableReason;
    SELF_PUBLISHED: boolean;
    PINNED: boolean;
    FRESH: boolean;
    BATCH_ID: string | Uint8Array | null;
    RECORD_COUNT: bigint;
    BYTE_COUNT: bigint;
    PARTS: number;
    PUBLISHED_AT_MS: bigint;
    PNM_CID: string | Uint8Array | null;
    PNM_FILE_ID: string | Uint8Array | null;
    PNM_PUBLISHED_AT_MS: bigint;
    PNM_SIGNATURE_VERIFIED: boolean;
    PUBLISHER_PEER_ID: string | Uint8Array | null;
    ETAG: string | Uint8Array | null;
    BODY_REF_TOKEN: bigint;
    BODY_REF_SIZE: bigint;
    constructor(STANDARD?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, KNOWN?: boolean, AVAILABLE?: boolean, UNAVAILABLE_REASON?: davUnavailableReason, SELF_PUBLISHED?: boolean, PINNED?: boolean, FRESH?: boolean, BATCH_ID?: string | Uint8Array | null, RECORD_COUNT?: bigint, BYTE_COUNT?: bigint, PARTS?: number, PUBLISHED_AT_MS?: bigint, PNM_CID?: string | Uint8Array | null, PNM_FILE_ID?: string | Uint8Array | null, PNM_PUBLISHED_AT_MS?: bigint, PNM_SIGNATURE_VERIFIED?: boolean, PUBLISHER_PEER_ID?: string | Uint8Array | null, ETAG?: string | Uint8Array | null, BODY_REF_TOKEN?: bigint, BODY_REF_SIZE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DAV.d.ts.map