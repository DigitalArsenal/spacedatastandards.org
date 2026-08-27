import * as flatbuffers from 'flatbuffers';
/**
 * The profile this card projects, and the provenance that binds them.
 */
export declare class VCFSubject implements flatbuffers.IUnpackableObject<VCFSubjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCFSubject;
    static getRootAsVCFSubject(bb: flatbuffers.ByteBuffer, obj?: VCFSubject): VCFSubject;
    static getSizePrefixedRootAsVCFSubject(bb: flatbuffers.ByteBuffer, obj?: VCFSubject): VCFSubject;
    /**
     * Network peer identifier the profile is anchored to, verbatim.
     */
    PEER_ID(): string | null;
    PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The profile's distinguished name verbatim, as published.
     */
    DN(): string | null;
    DN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Content identifier of the exact, size-prefixed profile bytes projected.
     * With PROFILE_SHA256 this is what makes a card re-derivable.
     */
    PROFILE_CID(): string | null;
    PROFILE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of those same profile bytes as 64 lowercase hexadecimal
     * characters.
     */
    PROFILE_SHA256(): string | null;
    PROFILE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The profile's signature value verbatim.
     */
    PROFILE_SIGNATURE(): string | null;
    PROFILE_SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm of that signature verbatim.
     */
    PROFILE_SIGNATURE_ALGORITHM(): string | null;
    PROFILE_SIGNATURE_ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The profile's signature timestamp as the publisher stated it, in
     * milliseconds since the Unix epoch. 0 means unpublished.
     */
    PROFILE_SIGNATURE_TIMESTAMP(): bigint;
    /**
     * Literal public key that produced PROFILE_SIGNATURE, verbatim from the
     * profile. Never an extended public key, never a derivation path.
     */
    SIGNING_PUBLIC_KEY(): string | null;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Literal public key a correspondent encrypts to, verbatim from the profile.
     * Never an extended public key, never a derivation path.
     */
    ENCRYPTION_PUBLIC_KEY(): string | null;
    ENCRYPTION_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Four-character standard code of the projected profile record, `$`
     * included. Carried so the projection is not silently assumed.
     */
    SOURCE_STANDARD(): string | null;
    SOURCE_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVCFSubject(builder: flatbuffers.Builder): void;
    static addPeerId(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset): void;
    static addDn(builder: flatbuffers.Builder, DNOffset: flatbuffers.Offset): void;
    static addProfileCid(builder: flatbuffers.Builder, PROFILE_CIDOffset: flatbuffers.Offset): void;
    static addProfileSha256(builder: flatbuffers.Builder, PROFILE_SHA256Offset: flatbuffers.Offset): void;
    static addProfileSignature(builder: flatbuffers.Builder, PROFILE_SIGNATUREOffset: flatbuffers.Offset): void;
    static addProfileSignatureAlgorithm(builder: flatbuffers.Builder, PROFILE_SIGNATURE_ALGORITHMOffset: flatbuffers.Offset): void;
    static addProfileSignatureTimestamp(builder: flatbuffers.Builder, PROFILE_SIGNATURE_TIMESTAMP: bigint): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addEncryptionPublicKey(builder: flatbuffers.Builder, ENCRYPTION_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSourceStandard(builder: flatbuffers.Builder, SOURCE_STANDARDOffset: flatbuffers.Offset): void;
    static endVCFSubject(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCFSubject(builder: flatbuffers.Builder, PEER_IDOffset: flatbuffers.Offset, DNOffset: flatbuffers.Offset, PROFILE_CIDOffset: flatbuffers.Offset, PROFILE_SHA256Offset: flatbuffers.Offset, PROFILE_SIGNATUREOffset: flatbuffers.Offset, PROFILE_SIGNATURE_ALGORITHMOffset: flatbuffers.Offset, PROFILE_SIGNATURE_TIMESTAMP: bigint, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, ENCRYPTION_PUBLIC_KEYOffset: flatbuffers.Offset, SOURCE_STANDARDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VCFSubjectT;
    unpackTo(_o: VCFSubjectT): void;
}
export declare class VCFSubjectT implements flatbuffers.IGeneratedObject {
    PEER_ID: string | Uint8Array | null;
    DN: string | Uint8Array | null;
    PROFILE_CID: string | Uint8Array | null;
    PROFILE_SHA256: string | Uint8Array | null;
    PROFILE_SIGNATURE: string | Uint8Array | null;
    PROFILE_SIGNATURE_ALGORITHM: string | Uint8Array | null;
    PROFILE_SIGNATURE_TIMESTAMP: bigint;
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    ENCRYPTION_PUBLIC_KEY: string | Uint8Array | null;
    SOURCE_STANDARD: string | Uint8Array | null;
    constructor(PEER_ID?: string | Uint8Array | null, DN?: string | Uint8Array | null, PROFILE_CID?: string | Uint8Array | null, PROFILE_SHA256?: string | Uint8Array | null, PROFILE_SIGNATURE?: string | Uint8Array | null, PROFILE_SIGNATURE_ALGORITHM?: string | Uint8Array | null, PROFILE_SIGNATURE_TIMESTAMP?: bigint, SIGNING_PUBLIC_KEY?: string | Uint8Array | null, ENCRYPTION_PUBLIC_KEY?: string | Uint8Array | null, SOURCE_STANDARD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCFSubject.d.ts.map