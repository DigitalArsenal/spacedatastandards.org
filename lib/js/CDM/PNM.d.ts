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
    /**
     * Multiformat Address
     * https://multiformats.io/multiaddr/
     * A universal address format for representing multiple network protocols. Examples include:
     * - /ip4/192.168.1.1/tcp/80 for an IPv4 address with TCP protocol
     * - /ip6zone/x/ip6/::1 for an IPv6 address with a zone
     * - /dns4/example.com for a domain name resolvable only to IPv4 addresses
     * - /ipfs/bafybeiccfclkdtucu6y4yc5cpr6y3yuinr67svmii46v5cfcrkp47ihehy/README.txt -IPFS address w/CID and path to `README.txt`.
     */
    MULTIFORMAT_ADDRESS(): string | null;
    MULTIFORMAT_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Publish Time OF THE Publish Notification Message
     */
    PUBLISH_TIMESTAMP(): string | null;
    PUBLISH_TIMESTAMP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Concatenated Content Identifier (CID)
     * This field is a unique ID for distributed systems (CID).
     * The CID provides a unique identifier within distributed systems, as detailed at https://github.com/multiformats/cid.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File ID
     * This field is the file ID / Name
     */
    FID(): string | null;
    FID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Digital Signature of the CID
     * This is the digital signature of the CID, signed using the specified cryptographic method.
     */
    SIGNATURE(): string | null;
    SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp Signature
     * Digital signature of the publish timestamp, using the specified cryptographic method for timestamp verification.
     */
    TIMESTAMP_SIGNATURE(): string | null;
    TIMESTAMP_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Cryptographic Signature Used
     * Specifies the type of cryptographic signature used for the SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
     */
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of Cryptographic Signature Used for Timestamp
     * Specifies the type of cryptographic signature used for the TIMESTAMP_SIGNATURE field, indicating the specific blockchain technology, such as Ethereum or BTC.
     */
    TIMESTAMP_SIGNATURE_TYPE(): string | null;
    TIMESTAMP_SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static addPublishTimestamp(builder: flatbuffers.Builder, PUBLISH_TIMESTAMPOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addFid(builder: flatbuffers.Builder, FIDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static addTimestampSignature(builder: flatbuffers.Builder, TIMESTAMP_SIGNATUREOffset: flatbuffers.Offset): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addTimestampSignatureType(builder: flatbuffers.Builder, TIMESTAMP_SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNM(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, PUBLISH_TIMESTAMPOffset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, FIDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, TIMESTAMP_SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset, TIMESTAMP_SIGNATURE_TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    PUBLISH_TIMESTAMP: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    FID: string | Uint8Array | null;
    SIGNATURE: string | Uint8Array | null;
    TIMESTAMP_SIGNATURE: string | Uint8Array | null;
    SIGNATURE_TYPE: string | Uint8Array | null;
    TIMESTAMP_SIGNATURE_TYPE: string | Uint8Array | null;
    constructor(MULTIFORMAT_ADDRESS?: string | Uint8Array | null, PUBLISH_TIMESTAMP?: string | Uint8Array | null, CID?: string | Uint8Array | null, FID?: string | Uint8Array | null, SIGNATURE?: string | Uint8Array | null, TIMESTAMP_SIGNATURE?: string | Uint8Array | null, SIGNATURE_TYPE?: string | Uint8Array | null, TIMESTAMP_SIGNATURE_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map