import * as flatbuffers from 'flatbuffers';
/**
 * Publish Notification Message.
 *
 * PNM is the compact network announcement for a published record, manifest, or
 * dataset update. For dataset updates, FILE_ID is the complete canonical
 * identity for the published update and CID usually points to a small DPM
 * manifest or digest. The DPM carries the full verification contract:
 * provider identity, retrieval protocol, canonical query, result hash, Merkle
 * roots, completeness-capable indexes, file_id partition key, and signature.
 * Large or paid dataset updates do not need to be published as globally
 * discoverable IPFS files; a PNM may instead advertise a provider-mediated SDN
 * query protocol. In that mode the PNM is only the announcement. The DPM is
 * the signed commitment, and each provider response carries records plus
 * Merkle proof material that the subscriber verifies against the DPM roots and
 * the announced FILE_ID before import.
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
     * For dataset-update PNMs this SHOULD identify a compact DPM manifest,
     * manifest digest, or other small verification object, not necessarily the
     * full dataset bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File ID
     * This field is the Name
     */
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File ID
     * Canonical publication/update partition identity. For dataset-update PNMs,
     * this MUST match DPM.FILE_ID and is the stable key used everywhere an SDN
     * component refers to the update: PNMs, DPMs, assets, entitlements, provider
     * query requests, subscriber caches, replay, audit, and completeness
     * verification. Provider-mediated query requests and responses MUST bind
     * their Merkle leaves and proof paths to this FILE_ID, and subscribers MUST
     * reject responses whose DPM, records, or proofs bind to a different FILE_ID.
     * Example: celestrak:gp:OMM.fbs:2026-05-06T03:00:00Z.
     */
    FILE_ID(): string | null;
    FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addFileId(builder: flatbuffers.Builder, FILE_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static addTimestampSignature(builder: flatbuffers.Builder, TIMESTAMP_SIGNATUREOffset: flatbuffers.Offset): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addTimestampSignatureType(builder: flatbuffers.Builder, TIMESTAMP_SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPNM(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, PUBLISH_TIMESTAMPOffset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, FILE_NAMEOffset: flatbuffers.Offset, FILE_IDOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, TIMESTAMP_SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_TYPEOffset: flatbuffers.Offset, TIMESTAMP_SIGNATURE_TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    MULTIFORMAT_ADDRESS: string | Uint8Array | null;
    PUBLISH_TIMESTAMP: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    FILE_NAME: string | Uint8Array | null;
    FILE_ID: string | Uint8Array | null;
    SIGNATURE: string | Uint8Array | null;
    TIMESTAMP_SIGNATURE: string | Uint8Array | null;
    SIGNATURE_TYPE: string | Uint8Array | null;
    TIMESTAMP_SIGNATURE_TYPE: string | Uint8Array | null;
    constructor(MULTIFORMAT_ADDRESS?: string | Uint8Array | null, PUBLISH_TIMESTAMP?: string | Uint8Array | null, CID?: string | Uint8Array | null, FILE_NAME?: string | Uint8Array | null, FILE_ID?: string | Uint8Array | null, SIGNATURE?: string | Uint8Array | null, TIMESTAMP_SIGNATURE?: string | Uint8Array | null, SIGNATURE_TYPE?: string | Uint8Array | null, TIMESTAMP_SIGNATURE_TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map