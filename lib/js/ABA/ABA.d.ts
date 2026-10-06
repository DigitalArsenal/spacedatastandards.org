import * as flatbuffers from 'flatbuffers';
import { abaDisclosure } from './abaDisclosure.js';
/**
 * Address Book Attestation - one node's signed, byte-exact contact entry.
 */
export declare class ABA implements flatbuffers.IUnpackableObject<ABAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ABA;
    static getRootAsABA(bb: flatbuffers.ByteBuffer, obj?: ABA): ABA;
    static getSizePrefixedRootAsABA(bb: flatbuffers.ByteBuffer, obj?: ABA): ABA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable opaque entry identifier, unique within NODE_PEER_ID. Keep it
     * through profile updates and revocation; do not use the profile digest.
     */
    ENTRY_ID(): string;
    ENTRY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Issuing node's libp2p Peer ID, in base58btc multihash form.
     */
    NODE_PEER_ID(): string;
    NODE_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Literal public key bytes verifying SIGNATURE. For secp256k1 this is
     * the 33-byte compressed SEC1 public key, without a protobuf wrapper.
     */
    PUBLIC_KEY(index: number): number | null;
    publicKeyLength(): number;
    publicKeyArray(): Uint8Array;
    /**
     * Signature algorithm identifier. "secp256k1" means libp2p signing:
     * SHA-256 of canonical bytes followed by low-S ECDSA, encoded as ASN.1
     * DER. Reject unsupported algorithms; never guess from the key bytes.
     */
    SIGNATURE_ALGORITHM(): string;
    SIGNATURE_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The complete EPM FlatBuffer exactly as attested, including its $EPM
     * identifier and any size prefix. Preserve the bytes even in tombstones.
     */
    PROFILE_BYTES(index: number): number | null;
    profileBytesLength(): number;
    profileBytesArray(): Uint8Array;
    /**
     * Exactly 32 raw SHA-256 digest bytes of PROFILE_BYTES.
     */
    PROFILE_SHA256(index: number): number | null;
    profileSha256Length(): number;
    profileSha256Array(): Uint8Array;
    /**
     * Disclosure flag only. The node enforces PRIVATE by excluding the entry
     * and its attestation from everything it serves or synchronizes publicly.
     */
    VISIBILITY(): abaDisclosure;
    /**
     * Unix timestamp in milliseconds when this entry was first attested.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds of this signed revision; at least
     * CREATED_AT, and strictly greater than the preceding revision.
     */
    UPDATED_AT(): bigint;
    /**
     * True revokes the stable entry. A tombstone must still pass signature,
     * node identity and profile-digest verification.
     */
    DELETED(): boolean;
    /**
     * Optional short operator note; part of the signed record.
     */
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Node identity signature over UTF-8 RFC 8785 canonical JSON with every
     * ABA field present under its exact IDL name. Byte vectors are arrays of
     * integers in [0,255]; SIGNATURE is []. CREATED_AT and UPDATED_AT are
     * unsigned decimal strings without leading zeroes (except "0").
     * VISIBILITY is its numeric ordinal; DELETED is a boolean; remaining
     * fields are strings, with absent NOTE represented as "". Include defaults,
     * no extra keys, no Unicode normalization, BOM or trailing newline.
     * Empty is allowed only while signing; consumers reject unsigned records.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startABA(builder: flatbuffers.Builder): void;
    static addEntryId(builder: flatbuffers.Builder, ENTRY_IDOffset: flatbuffers.Offset): void;
    static addNodePeerId(builder: flatbuffers.Builder, NODE_PEER_IDOffset: flatbuffers.Offset): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static createPublicKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPublicKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignatureAlgorithm(builder: flatbuffers.Builder, SIGNATURE_ALGORITHMOffset: flatbuffers.Offset): void;
    static addProfileBytes(builder: flatbuffers.Builder, PROFILE_BYTESOffset: flatbuffers.Offset): void;
    static createProfileBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProfileBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProfileSha256(builder: flatbuffers.Builder, PROFILE_SHA256Offset: flatbuffers.Offset): void;
    static createProfileSha256Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProfileSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: abaDisclosure): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endABA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishABABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedABABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createABA(builder: flatbuffers.Builder, ENTRY_IDOffset: flatbuffers.Offset, NODE_PEER_IDOffset: flatbuffers.Offset, PUBLIC_KEYOffset: flatbuffers.Offset, SIGNATURE_ALGORITHMOffset: flatbuffers.Offset, PROFILE_BYTESOffset: flatbuffers.Offset, PROFILE_SHA256Offset: flatbuffers.Offset, VISIBILITY: abaDisclosure, CREATED_AT: bigint, UPDATED_AT: bigint, DELETED: boolean, NOTEOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ABAT;
    unpackTo(_o: ABAT): void;
}
export declare class ABAT implements flatbuffers.IGeneratedObject {
    ENTRY_ID: string | Uint8Array | null;
    NODE_PEER_ID: string | Uint8Array | null;
    PUBLIC_KEY: (number)[];
    SIGNATURE_ALGORITHM: string | Uint8Array | null;
    PROFILE_BYTES: (number)[];
    PROFILE_SHA256: (number)[];
    VISIBILITY: abaDisclosure;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    DELETED: boolean;
    NOTE: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(ENTRY_ID?: string | Uint8Array | null, NODE_PEER_ID?: string | Uint8Array | null, PUBLIC_KEY?: (number)[], SIGNATURE_ALGORITHM?: string | Uint8Array | null, PROFILE_BYTES?: (number)[], PROFILE_SHA256?: (number)[], VISIBILITY?: abaDisclosure, CREATED_AT?: bigint, UPDATED_AT?: bigint, DELETED?: boolean, NOTE?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ABA.d.ts.map