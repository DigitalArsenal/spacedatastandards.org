import * as flatbuffers from 'flatbuffers';
/**
 * Receipt from a content-addressed store (IPFS or similar) for bytes it
 * stored.
 */
export declare class SRGContentReceipt implements flatbuffers.IUnpackableObject<SRGContentReceiptT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRGContentReceipt;
    static getRootAsSRGContentReceipt(bb: flatbuffers.ByteBuffer, obj?: SRGContentReceipt): SRGContentReceipt;
    static getSizePrefixedRootAsSRGContentReceipt(bb: flatbuffers.ByteBuffer, obj?: SRGContentReceipt): SRGContentReceipt;
    /**
     * Content identifier the store assigned (a CID), e.g. "bafy...".
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name the store recorded with the content, if any.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Address of the content, e.g. "/ipfs/<CID>"; empty = derive from CID.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bytes stored; 0 = not reported.
     */
    BYTE_LENGTH(): bigint;
    /**
     * SHA-256 of the stored bytes, lower-case hex; empty = not computed.
     */
    SHA256(): string | null;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the store pinned the content (keeps it from eviction).
     */
    PINNED(): boolean;
    /**
     * Unix milliseconds the content was stored; 0 = not reported.
     */
    STORED_AT_MS(): bigint;
    /**
     * Store that issued the receipt, e.g. "ipfs", or a node identifier.
     */
    STORE_ID(): string | null;
    STORE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RESOURCE_ID of the resource the bytes came from, when they came from
     * one; empty for other content (e.g. a pinned discovery queue).
     */
    RESOURCE_ID(): string | null;
    RESOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSRGContentReceipt(builder: flatbuffers.Builder): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addPinned(builder: flatbuffers.Builder, PINNED: boolean): void;
    static addStoredAtMs(builder: flatbuffers.Builder, STORED_AT_MS: bigint): void;
    static addStoreId(builder: flatbuffers.Builder, STORE_IDOffset: flatbuffers.Offset): void;
    static addResourceId(builder: flatbuffers.Builder, RESOURCE_IDOffset: flatbuffers.Offset): void;
    static endSRGContentReceipt(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSRGContentReceipt(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, BYTE_LENGTH: bigint, SHA256Offset: flatbuffers.Offset, PINNED: boolean, STORED_AT_MS: bigint, STORE_IDOffset: flatbuffers.Offset, RESOURCE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SRGContentReceiptT;
    unpackTo(_o: SRGContentReceiptT): void;
}
export declare class SRGContentReceiptT implements flatbuffers.IGeneratedObject {
    CID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    BYTE_LENGTH: bigint;
    SHA256: string | Uint8Array | null;
    PINNED: boolean;
    STORED_AT_MS: bigint;
    STORE_ID: string | Uint8Array | null;
    RESOURCE_ID: string | Uint8Array | null;
    constructor(CID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, MULTIFORMAT_ADDRESS?: string | Uint8Array | null, BYTE_LENGTH?: bigint, SHA256?: string | Uint8Array | null, PINNED?: boolean, STORED_AT_MS?: bigint, STORE_ID?: string | Uint8Array | null, RESOURCE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRGContentReceipt.d.ts.map