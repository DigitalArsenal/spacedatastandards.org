import * as flatbuffers from 'flatbuffers';
export declare class PSSAttestation implements flatbuffers.IUnpackableObject<PSSAttestationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSAttestation;
    static getRootAsPSSAttestation(bb: flatbuffers.ByteBuffer, obj?: PSSAttestation): PSSAttestation;
    static getSizePrefixedRootAsPSSAttestation(bb: flatbuffers.ByteBuffer, obj?: PSSAttestation): PSSAttestation;
    /**
     * Literal Ed25519 public key, encoded as 64 lowercase hexadecimal characters.
     */
    SIGNING_PUBLIC_KEY(): string;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SIGNED_AT(): string | null;
    SIGNED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both signature
     * payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON in IDL field order and capitalization,
     * with both signature fields omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startPSSAttestation(builder: flatbuffers.Builder): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSignedAt(builder: flatbuffers.Builder, SIGNED_ATOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPSSAttestation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPSSAttestation(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, SIGNED_ATOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PSSAttestationT;
    unpackTo(_o: PSSAttestationT): void;
}
export declare class PSSAttestationT implements flatbuffers.IGeneratedObject {
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    SIGNED_AT: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(SIGNING_PUBLIC_KEY?: string | Uint8Array | null, SIGNED_AT?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSAttestation.d.ts.map