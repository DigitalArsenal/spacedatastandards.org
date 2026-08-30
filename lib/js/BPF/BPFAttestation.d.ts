import * as flatbuffers from 'flatbuffers';
/**
 * The publisher's attestation over this profile, in BOTH ratified forms.
 *
 * PRESENCE IS THE STATEMENT. A profile is SIGNED if and only if this table
 * is present; a profile whose `ATTESTATION` is absent is UNSIGNED, and a
 * consumer marks it as such. There is deliberately no boolean saying so: a
 * self-asserted "signed" flag is attacker-controlled and proves nothing,
 * while presence of the table is checkable.
 *
 * FAIL CLOSED. When this table is present, every field below MUST be
 * present and BOTH signatures MUST verify independently against
 * `SIGNING_PUBLIC_KEY`. A profile whose attestation is incomplete, or
 * whose either signature fails, is REJECTED — it is NEVER downgraded to
 * "unsigned and therefore acceptable", which would let stripping one
 * signature launder a tampered profile past an importer that admits
 * unsigned input.
 */
export declare class BPFAttestation implements flatbuffers.IUnpackableObject<BPFAttestationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BPFAttestation;
    static getRootAsBPFAttestation(bb: flatbuffers.ByteBuffer, obj?: BPFAttestation): BPFAttestation;
    static getSizePrefixedRootAsBPFAttestation(bb: flatbuffers.ByteBuffer, obj?: BPFAttestation): BPFAttestation;
    /**
     * The signer's LITERAL Ed25519 public key, 64 lowercase hexadecimal
     * characters. A derivation ancestor is structurally absent from this
     * standard: publishing one lets any holder of a child key walk the
     * signer's whole key tree. Rotation is republication.
     */
    SIGNING_PUBLIC_KEY(): string;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * at which the attestation was produced.
     */
    SIGNED_AT(): string | null;
    SIGNED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both 64-byte
     * signature payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON with IDL field order and
     * capitalization, no insignificant whitespace, and both signature fields
     * omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startBPFAttestation(builder: flatbuffers.Builder): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSignedAt(builder: flatbuffers.Builder, SIGNED_ATOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBPFAttestation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBPFAttestation(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, SIGNED_ATOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BPFAttestationT;
    unpackTo(_o: BPFAttestationT): void;
}
export declare class BPFAttestationT implements flatbuffers.IGeneratedObject {
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    SIGNED_AT: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(SIGNING_PUBLIC_KEY?: string | Uint8Array | null, SIGNED_AT?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BPFAttestation.d.ts.map