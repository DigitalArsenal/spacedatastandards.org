import * as flatbuffers from 'flatbuffers';
/**
 * Dual-form signature. Presence means both signatures are required and both
 * MUST verify independently; an invalid member rejects the record rather
 * than downgrading it to unsigned.
 */
export declare class MEMAttestation implements flatbuffers.IUnpackableObject<MEMAttestationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MEMAttestation;
    static getRootAsMEMAttestation(bb: flatbuffers.ByteBuffer, obj?: MEMAttestation): MEMAttestation;
    static getSizePrefixedRootAsMEMAttestation(bb: flatbuffers.ByteBuffer, obj?: MEMAttestation): MEMAttestation;
    SIGNING_PUBLIC_KEY(): string;
    SIGNING_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SIGNED_AT(): string | null;
    SIGNED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startMEMAttestation(builder: flatbuffers.Builder): void;
    static addSigningPublicKey(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addSignedAt(builder: flatbuffers.Builder, SIGNED_ATOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMEMAttestation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMEMAttestation(builder: flatbuffers.Builder, SIGNING_PUBLIC_KEYOffset: flatbuffers.Offset, SIGNED_ATOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MEMAttestationT;
    unpackTo(_o: MEMAttestationT): void;
}
export declare class MEMAttestationT implements flatbuffers.IGeneratedObject {
    SIGNING_PUBLIC_KEY: string | Uint8Array | null;
    SIGNED_AT: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(SIGNING_PUBLIC_KEY?: string | Uint8Array | null, SIGNED_AT?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MEMAttestation.d.ts.map