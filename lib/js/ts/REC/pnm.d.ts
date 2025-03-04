import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message
 */
export declare class PNM implements flatbuffers.IUnpackableObject<PNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM;
    static getRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static getSizePrefixedRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Multiformat Address
     * https://multiformats.io/multiaddr/
     * A universal address format for representing multiple network protocols. Examples include:
     * - /ip4/192.168.1.1/tcp/80 for an IPv4 address with TCP protocol
     * - /ip6zone/x/ip6/::1 for an IPv6 address with a zone
     * - /dns4/example.com for a domain name resolvable only to IPv4 addresses
     * - /ipfs/bafybeiccfclkdtucu6y4yc5cpr6y3yuinr67svmii46v5cfcrkp47ihehy/README.txt -IPFS address w/CID and path to `README.txt`.
     */
    multiformatAddress(): string | null;
    multiformatAddress(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publish Time OF THE Publish Notification Message
     */
    publishTimestamp(): string | null;
    publishTimestamp(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Concatenated Content Identifier (CID)
     * This field is a unique ID for distributed systems (CID).
     * The CID provides a unique identifier within distributed systems, as detailed at https://github.com/multiformats/cid.
     */
    cid(): string | null;
    cid(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File ID
     * This field is the Name
     */
    fileName(): string | null;
    fileName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File ID
     * This field is the file ID / Standard Type
     */
    fileId(): string | null;
    fileId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Digital Signature of the CID
     * This is the digital signature of the CID, signed using the specified cryptographic method.
     */
    signature(): string | null;
    signature(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp Signature
     * Digital signature of the publish timestamp, using the specified cryptographic method for timestamp verification.
     */
    timestampSignature(): string | null;
    timestampSignature(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Cryptographic Signature Used
     * Specifies the type of cryptographic signature used for the SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
     */
    signatureType(): string | null;
    signatureType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Cryptographic Signature Used for Timestamp
     * Specifies the type of cryptographic signature used for the TIMESTAMP_SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
     */
    timestampSignatureType(): string | null;
    timestampSignatureType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, multiformatAddressOffset: flatbuffers.Offset): void;
    static addPublishTimestamp(builder: flatbuffers.Builder, publishTimestampOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, cidOffset: flatbuffers.Offset): void;
    static addFileName(builder: flatbuffers.Builder, fileNameOffset: flatbuffers.Offset): void;
    static addFileId(builder: flatbuffers.Builder, fileIdOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, signatureOffset: flatbuffers.Offset): void;
    static addTimestampSignature(builder: flatbuffers.Builder, timestampSignatureOffset: flatbuffers.Offset): void;
    static addSignatureType(builder: flatbuffers.Builder, signatureTypeOffset: flatbuffers.Offset): void;
    static addTimestampSignatureType(builder: flatbuffers.Builder, timestampSignatureTypeOffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPNM(builder: flatbuffers.Builder, multiformatAddressOffset: flatbuffers.Offset, publishTimestampOffset: flatbuffers.Offset, cidOffset: flatbuffers.Offset, fileNameOffset: flatbuffers.Offset, fileIdOffset: flatbuffers.Offset, signatureOffset: flatbuffers.Offset, timestampSignatureOffset: flatbuffers.Offset, signatureTypeOffset: flatbuffers.Offset, timestampSignatureTypeOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    multiformatAddress: string | Uint8Array | null;
    publishTimestamp: string | Uint8Array | null;
    cid: string | Uint8Array | null;
    fileName: string | Uint8Array | null;
    fileId: string | Uint8Array | null;
    signature: string | Uint8Array | null;
    timestampSignature: string | Uint8Array | null;
    signatureType: string | Uint8Array | null;
    timestampSignatureType: string | Uint8Array | null;
    constructor(multiformatAddress?: string | Uint8Array | null, publishTimestamp?: string | Uint8Array | null, cid?: string | Uint8Array | null, fileName?: string | Uint8Array | null, fileId?: string | Uint8Array | null, signature?: string | Uint8Array | null, timestampSignature?: string | Uint8Array | null, signatureType?: string | Uint8Array | null, timestampSignatureType?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=pnm.d.ts.map