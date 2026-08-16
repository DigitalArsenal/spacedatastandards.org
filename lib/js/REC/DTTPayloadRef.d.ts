import * as flatbuffers from 'flatbuffers';
/**
 * Where a block of bytes lives and how it is verified. The payload lane is
 * CID-first: a tile record addresses its bytes so an epoch can be verified
 * rather than trusted, and carries them inline only when the block is small
 * enough that a second fetch costs more than it saves. Exactly one of CID or
 * BYTES is the authority for a given ref; when both are present the bytes
 * MUST hash to the CID.
 */
export declare class DTTPayloadRef implements flatbuffers.IUnpackableObject<DTTPayloadRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DTTPayloadRef;
    static getRootAsDTTPayloadRef(bb: flatbuffers.ByteBuffer, obj?: DTTPayloadRef): DTTPayloadRef;
    static getSizePrefixedRootAsDTTPayloadRef(bb: flatbuffers.ByteBuffer, obj?: DTTPayloadRef): DTTPayloadRef;
    /**
     * Content identifier of the block in the dataset lane.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The block inline. Reserved for small blocks; a tile pyramid is
     * distributed by CID, never by embedding megabytes per record.
     */
    BYTES(index: number): number | null;
    bytesLength(): number;
    bytesArray(): Uint8Array | null;
    /**
     * Length of the block in bytes, whether inline or referenced, so a
     * consumer can budget a fetch before making it.
     */
    SIZE_BYTES(): bigint;
    /**
     * Multihash of the block, lowercase hexadecimal, when the publisher states
     * one independently of the CID.
     */
    DIGEST(): string | null;
    DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content encoding applied to the block before hashing, verbatim, when the
     * bytes are stored compressed.
     */
    CONTENT_ENCODING(): string | null;
    CONTENT_ENCODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media type of the block as the publisher serves it.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDTTPayloadRef(builder: flatbuffers.Builder): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addBytes(builder: flatbuffers.Builder, BYTESOffset: flatbuffers.Offset): void;
    static createBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSizeBytes(builder: flatbuffers.Builder, SIZE_BYTES: bigint): void;
    static addDigest(builder: flatbuffers.Builder, DIGESTOffset: flatbuffers.Offset): void;
    static addContentEncoding(builder: flatbuffers.Builder, CONTENT_ENCODINGOffset: flatbuffers.Offset): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static endDTTPayloadRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDTTPayloadRef(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset, BYTESOffset: flatbuffers.Offset, SIZE_BYTES: bigint, DIGESTOffset: flatbuffers.Offset, CONTENT_ENCODINGOffset: flatbuffers.Offset, MEDIA_TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DTTPayloadRefT;
    unpackTo(_o: DTTPayloadRefT): void;
}
export declare class DTTPayloadRefT implements flatbuffers.IGeneratedObject {
    CID: string | Uint8Array | null;
    BYTES: (number)[];
    SIZE_BYTES: bigint;
    DIGEST: string | Uint8Array | null;
    CONTENT_ENCODING: string | Uint8Array | null;
    MEDIA_TYPE: string | Uint8Array | null;
    constructor(CID?: string | Uint8Array | null, BYTES?: (number)[], SIZE_BYTES?: bigint, DIGEST?: string | Uint8Array | null, CONTENT_ENCODING?: string | Uint8Array | null, MEDIA_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DTTPayloadRef.d.ts.map