import * as flatbuffers from 'flatbuffers';
import { irmValidatorMatch } from './irmValidatorMatch.js';
/**
 * The source object a job is reading, and the validators that prove a resumed
 * read is reading the same bytes.
 */
export declare class IRMSource implements flatbuffers.IUnpackableObject<IRMSourceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRMSource;
    static getRootAsIRMSource(bb: flatbuffers.ByteBuffer, obj?: IRMSource): IRMSource;
    static getSizePrefixedRootAsIRMSource(bb: flatbuffers.ByteBuffer, obj?: IRMSource): IRMSource;
    /**
     * Replayable locator of the source object, verbatim.
     */
    SOURCE_URL(): string;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source-native object, export, or product identifier verbatim, when the
     * provider names one independently of its locator.
     */
    SOURCE_OBJECT_ID(): string | null;
    SOURCE_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier pinning the exact source bytes, when the source is
     * content-addressed.
     */
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media type of the source object verbatim as the provider states it.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total length of the source object in bytes. 0 means the provider did not
     * state a length; it never means an empty object.
     */
    TOTAL_BYTES(): bigint;
    /**
     * Opaque entity validator verbatim as the provider published it.
     */
    ENTITY_TAG(): string | null;
    ENTITY_TAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-stated last-modification timestamp verbatim.
     */
    LAST_MODIFIED(): string | null;
    LAST_MODIFIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the complete source object as 64 lowercase hexadecimal
     * characters, when the provider publishes one. Never computed from a partial
     * read.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider-stated edition, revision, or release marker verbatim.
     */
    SOURCE_VERSION(): string | null;
    SOURCE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the publisher concluded when it last compared validators.
     */
    VALIDATOR_MATCH(): irmValidatorMatch;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp of that comparison.
     */
    VALIDATED_AT(): string | null;
    VALIDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIRMSource(builder: flatbuffers.Builder): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceObjectId(builder: flatbuffers.Builder, SOURCE_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addTotalBytes(builder: flatbuffers.Builder, TOTAL_BYTES: bigint): void;
    static addEntityTag(builder: flatbuffers.Builder, ENTITY_TAGOffset: flatbuffers.Offset): void;
    static addLastModified(builder: flatbuffers.Builder, LAST_MODIFIEDOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addSourceVersion(builder: flatbuffers.Builder, SOURCE_VERSIONOffset: flatbuffers.Offset): void;
    static addValidatorMatch(builder: flatbuffers.Builder, VALIDATOR_MATCH: irmValidatorMatch): void;
    static addValidatedAt(builder: flatbuffers.Builder, VALIDATED_ATOffset: flatbuffers.Offset): void;
    static endIRMSource(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIRMSource(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset, SOURCE_OBJECT_IDOffset: flatbuffers.Offset, SOURCE_CIDOffset: flatbuffers.Offset, MEDIA_TYPEOffset: flatbuffers.Offset, TOTAL_BYTES: bigint, ENTITY_TAGOffset: flatbuffers.Offset, LAST_MODIFIEDOffset: flatbuffers.Offset, SOURCE_SHA256Offset: flatbuffers.Offset, SOURCE_VERSIONOffset: flatbuffers.Offset, VALIDATOR_MATCH: irmValidatorMatch, VALIDATED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IRMSourceT;
    unpackTo(_o: IRMSourceT): void;
}
export declare class IRMSourceT implements flatbuffers.IGeneratedObject {
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_OBJECT_ID: string | Uint8Array | null;
    SOURCE_CID: string | Uint8Array | null;
    MEDIA_TYPE: string | Uint8Array | null;
    TOTAL_BYTES: bigint;
    ENTITY_TAG: string | Uint8Array | null;
    LAST_MODIFIED: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    SOURCE_VERSION: string | Uint8Array | null;
    VALIDATOR_MATCH: irmValidatorMatch;
    VALIDATED_AT: string | Uint8Array | null;
    constructor(SOURCE_URL?: string | Uint8Array | null, SOURCE_OBJECT_ID?: string | Uint8Array | null, SOURCE_CID?: string | Uint8Array | null, MEDIA_TYPE?: string | Uint8Array | null, TOTAL_BYTES?: bigint, ENTITY_TAG?: string | Uint8Array | null, LAST_MODIFIED?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, SOURCE_VERSION?: string | Uint8Array | null, VALIDATOR_MATCH?: irmValidatorMatch, VALIDATED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRMSource.d.ts.map