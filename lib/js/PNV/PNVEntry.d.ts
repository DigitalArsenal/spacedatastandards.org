import * as flatbuffers from 'flatbuffers';
import { pnvAttribution } from './pnvAttribution.js';
import { pnvKeySource } from './pnvKeySource.js';
/**
 * One received notice and the verdict on it.
 */
export declare class PNVEntry implements flatbuffers.IUnpackableObject<PNVEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNVEntry;
    static getRootAsPNVEntry(bb: flatbuffers.ByteBuffer, obj?: PNVEntry): PNVEntry;
    static getSizePrefixedRootAsPNVEntry(bb: flatbuffers.ByteBuffer, obj?: PNVEntry): PNVEntry;
    /**
     * Content identifier of the $PNM the verdict is about.
     */
    PNM_CID(): string | null;
    PNM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer that signed and published the notice.
     */
    PUBLISHER_PEER_ID(): string | null;
    PUBLISHER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peer the notice arrived from (gossip or direct).
     */
    RECEIVED_FROM_PEER_ID(): string | null;
    RECEIVED_FROM_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standard the publication is in, as its code, e.g. "OMM".
     */
    STANDARD(): string | null;
    STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Schema file name of the published records, e.g. "OMM.fbs".
     */
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice's FILE_ID (publication or update identity).
     */
    FILE_ID(): string | null;
    FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice's FILE_NAME.
     */
    FILE_NAME(): string | null;
    FILE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice's CID (the published content or its manifest).
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds of publication, from the notice.
     */
    PUBLISHED_AT_MS(): bigint;
    /**
     * Unix milliseconds the receiving node received the notice.
     */
    RECEIVED_AT_MS(): bigint;
    /**
     * Signature scheme of the notice, verbatim from the $PNM, e.g. "Ed25519",
     * "Secp256k1". The signature is over the notice's signed bytes, hashed
     * once: Ed25519 signs the bytes themselves; Secp256k1 is a DER ECDSA
     * signature over ONE SHA-256 of the bytes (the libp2p secp256k1 key form).
     * A signature over SHA-256(SHA-256(bytes)) does not verify.
     */
    SIGNATURE_TYPE(): string | null;
    SIGNATURE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice's signature, verbatim.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    /**
     * True when the signature verified against PUBLISHER_KEY.
     */
    SIGNATURE_VERIFIED(): boolean;
    ATTRIBUTION(): pnvAttribution;
    /**
     * The public key the signature was checked against.
     */
    PUBLISHER_KEY(index: number): number | null;
    publisherKeyLength(): number;
    publisherKeyArray(): Uint8Array | null;
    KEY_SOURCE(): pnvKeySource;
    /**
     * Why verification failed or was not attempted; empty when it verified.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The notice itself as received, a size-prefixed $PNM, so a reader can
     * verify the signature on its own instead of trusting this verdict.
     */
    PNM_BYTES(index: number): number | null;
    pnmBytesLength(): number;
    pnmBytesArray(): Uint8Array | null;
    static startPNVEntry(builder: flatbuffers.Builder): void;
    static addPnmCid(builder: flatbuffers.Builder, PNM_CIDOffset: flatbuffers.Offset): void;
    static addPublisherPeerId(builder: flatbuffers.Builder, PUBLISHER_PEER_IDOffset: flatbuffers.Offset): void;
    static addReceivedFromPeerId(builder: flatbuffers.Builder, RECEIVED_FROM_PEER_IDOffset: flatbuffers.Offset): void;
    static addStandard(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileId(builder: flatbuffers.Builder, FILE_IDOffset: flatbuffers.Offset): void;
    static addFileName(builder: flatbuffers.Builder, FILE_NAMEOffset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static addPublishedAtMs(builder: flatbuffers.Builder, PUBLISHED_AT_MS: bigint): void;
    static addReceivedAtMs(builder: flatbuffers.Builder, RECEIVED_AT_MS: bigint): void;
    static addSignatureType(builder: flatbuffers.Builder, SIGNATURE_TYPEOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureVerified(builder: flatbuffers.Builder, SIGNATURE_VERIFIED: boolean): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTION: pnvAttribution): void;
    static addPublisherKey(builder: flatbuffers.Builder, PUBLISHER_KEYOffset: flatbuffers.Offset): void;
    static createPublisherKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPublisherKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeySource(builder: flatbuffers.Builder, KEY_SOURCE: pnvKeySource): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addPnmBytes(builder: flatbuffers.Builder, PNM_BYTESOffset: flatbuffers.Offset): void;
    static createPnmBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPnmBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPNVEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNVEntry(builder: flatbuffers.Builder, PNM_CIDOffset: flatbuffers.Offset, PUBLISHER_PEER_IDOffset: flatbuffers.Offset, RECEIVED_FROM_PEER_IDOffset: flatbuffers.Offset, STANDARDOffset: flatbuffers.Offset, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDOffset: flatbuffers.Offset, FILE_NAMEOffset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset, PUBLISHED_AT_MS: bigint, RECEIVED_AT_MS: bigint, SIGNATURE_TYPEOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNATURE_VERIFIED: boolean, ATTRIBUTION: pnvAttribution, PUBLISHER_KEYOffset: flatbuffers.Offset, KEY_SOURCE: pnvKeySource, REASONOffset: flatbuffers.Offset, PNM_BYTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNVEntryT;
    unpackTo(_o: PNVEntryT): void;
}
export declare class PNVEntryT implements flatbuffers.IGeneratedObject {
    PNM_CID: string | Uint8Array | null;
    PUBLISHER_PEER_ID: string | Uint8Array | null;
    RECEIVED_FROM_PEER_ID: string | Uint8Array | null;
    STANDARD: string | Uint8Array | null;
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_ID: string | Uint8Array | null;
    FILE_NAME: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    PUBLISHED_AT_MS: bigint;
    RECEIVED_AT_MS: bigint;
    SIGNATURE_TYPE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    SIGNATURE_VERIFIED: boolean;
    ATTRIBUTION: pnvAttribution;
    PUBLISHER_KEY: (number)[];
    KEY_SOURCE: pnvKeySource;
    REASON: string | Uint8Array | null;
    PNM_BYTES: (number)[];
    constructor(PNM_CID?: string | Uint8Array | null, PUBLISHER_PEER_ID?: string | Uint8Array | null, RECEIVED_FROM_PEER_ID?: string | Uint8Array | null, STANDARD?: string | Uint8Array | null, SCHEMA_NAME?: string | Uint8Array | null, FILE_ID?: string | Uint8Array | null, FILE_NAME?: string | Uint8Array | null, CID?: string | Uint8Array | null, PUBLISHED_AT_MS?: bigint, RECEIVED_AT_MS?: bigint, SIGNATURE_TYPE?: string | Uint8Array | null, SIGNATURE?: (number)[], SIGNATURE_VERIFIED?: boolean, ATTRIBUTION?: pnvAttribution, PUBLISHER_KEY?: (number)[], KEY_SOURCE?: pnvKeySource, REASON?: string | Uint8Array | null, PNM_BYTES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNVEntry.d.ts.map