import * as flatbuffers from 'flatbuffers';
import { iqcCustody } from './iqcCustody.js';
import { iqcPayloadRole } from './iqcPayloadRole.js';
/**
 * A retrievable file belonging to this capture.
 *
 * The record NEVER carries sample bytes. It carries where they are, how big
 * they are, and what they hash to, so a consumer can decide for itself
 * whether to fetch 400 kB or 127 GB.
 */
export declare class IQCPayloadRef implements flatbuffers.IUnpackableObject<IQCPayloadRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCPayloadRef;
    static getRootAsIQCPayloadRef(bb: flatbuffers.ByteBuffer, obj?: IQCPayloadRef): IQCPayloadRef;
    static getSizePrefixedRootAsIQCPayloadRef(bb: flatbuffers.ByteBuffer, obj?: IQCPayloadRef): IQCPayloadRef;
    /**
     * What this file is.
     */
    ROLE(): iqcPayloadRole;
    /**
     * Upstream retrieval URL, verbatim.
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File name as the source publishes it.
     */
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IANA media type when the source declares one.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Byte length. 0 means the source did not publish a size — it never means
     * an empty file.
     */
    BYTE_LENGTH(): bigint;
    /**
     * SHA-256 of the exact bytes, lowercase hex. Populated only when computed
     * or published; never guessed.
     */
    BYTE_SHA256(): string | null;
    BYTE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-512 of the exact bytes, lowercase hex. SigMF `core:sha512` is a
     * SHA-512 over the dataset file, so it is carried in its own field rather
     * than converted or discarded.
     */
    BYTE_SHA512(): string | null;
    BYTE_SHA512(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CIDv1 when, and only when, this SDN pinned the bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Multiformat address, usually /ipfs/{CID}.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Custody of these bytes.
     */
    CUSTODY(): iqcCustody;
    /**
     * ISO 8601 UTC time at which URL was last confirmed retrievable.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQCPayloadRef(builder: flatbuffers.Builder): void;
    static addRole(builder: flatbuffers.Builder, ROLE: iqcPayloadRole): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addByteSha256(builder: flatbuffers.Builder, BYTE_SHA256Offset: flatbuffers.Offset): void;
    static addByteSha512(builder: flatbuffers.Builder, BYTE_SHA512Offset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addCustody(builder: flatbuffers.Builder, CUSTODY: iqcCustody): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endIQCPayloadRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCPayloadRef(builder: flatbuffers.Builder, ROLE: iqcPayloadRole, URLOffset: flatbuffers.Offset, FILE_NAMEOffset: flatbuffers.Offset, MEDIA_TYPEOffset: flatbuffers.Offset, BYTE_LENGTH: bigint, BYTE_SHA256Offset: flatbuffers.Offset, BYTE_SHA512Offset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, CUSTODY: iqcCustody, RETRIEVED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IQCPayloadRefT;
    unpackTo(_o: IQCPayloadRefT): void;
}
export declare class IQCPayloadRefT implements flatbuffers.IGeneratedObject {
    ROLE: iqcPayloadRole;
    URL: string | Uint8Array | null;
    FILE_NAME: string | Uint8Array | null;
    MEDIA_TYPE: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    BYTE_SHA256: string | Uint8Array | null;
    BYTE_SHA512: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    CUSTODY: iqcCustody;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(ROLE?: iqcPayloadRole, URL?: string | Uint8Array | null, FILE_NAME?: string | Uint8Array | null, MEDIA_TYPE?: string | Uint8Array | null, BYTE_LENGTH?: bigint, BYTE_SHA256?: string | Uint8Array | null, BYTE_SHA512?: string | Uint8Array | null, CID?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: string | Uint8Array | null, CUSTODY?: iqcCustody, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCPayloadRef.d.ts.map