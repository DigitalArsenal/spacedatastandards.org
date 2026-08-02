import * as flatbuffers from 'flatbuffers';
/**
 * Proves control of a DNS domain by the same HD wallet as the signing key —
 * the EPM-record mirror of the DNS TXT wire form (which is deliberately
 * NON-SDS: a base64 FlatBuffer would not fit a 255-byte TXT record). The
 * canonical statement is 6 fixed LF-terminated lines prefixed
 * "sdn-domain-proof/1", and it verifies by BYTE-REPLAY of the verbatim
 * SIGNED_PAYLOAD (ChainProof precedent) — never by JCS.
 */
export declare class DomainProof implements flatbuffers.IUnpackableObject<DomainProofT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DomainProof;
    static getRootAsDomainProof(bb: flatbuffers.ByteBuffer, obj?: DomainProof): DomainProof;
    static getSizePrefixedRootAsDomainProof(bb: flatbuffers.ByteBuffer, obj?: DomainProof): DomainProof;
    /**
     * Fully-qualified domain name the proof binds (e.g., "sdn.spaceaware.io")
     */
    DOMAIN(): string | null;
    DOMAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Public key for this proof (hex-encoded)
     */
    PUBLIC_KEY(): string | null;
    PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BIP-32 / SLIP-10 derivation path of the proving key. The signer is the
     * Ed25519 EPM/publication key at m/44'/0'/0'/0'/0'
     */
    KEY_PATH(): string | null;
    KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature over the attestation payload (hex-encoded)
     */
    SIGNATURE(): string | null;
    SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The canonical payload that was signed, verbatim (hex-encoded)
     */
    SIGNED_PAYLOAD(): string | null;
    SIGNED_PAYLOAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature algorithm. ABSENT means ed25519
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature encoding format. ABSENT means the canonical encoding of
     * ALGORITHM (raw-ed25519 for ed25519)
     */
    ENCODING(): string | null;
    ENCODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDomainProof(builder: flatbuffers.Builder): void;
    static addDomain(builder: flatbuffers.Builder, DOMAINOffset: flatbuffers.Offset): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addKeyPath(builder: flatbuffers.Builder, KEY_PATHOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static addSignedPayload(builder: flatbuffers.Builder, SIGNED_PAYLOADOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODINGOffset: flatbuffers.Offset): void;
    static endDomainProof(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDomainProof(builder: flatbuffers.Builder, DOMAINOffset: flatbuffers.Offset, PUBLIC_KEYOffset: flatbuffers.Offset, KEY_PATHOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNED_PAYLOADOffset: flatbuffers.Offset, ALGORITHMOffset: flatbuffers.Offset, ENCODINGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DomainProofT;
    unpackTo(_o: DomainProofT): void;
}
export declare class DomainProofT implements flatbuffers.IGeneratedObject {
    DOMAIN: string | Uint8Array | null;
    PUBLIC_KEY: string | Uint8Array | null;
    KEY_PATH: string | Uint8Array | null;
    SIGNATURE: string | Uint8Array | null;
    SIGNED_PAYLOAD: string | Uint8Array | null;
    ALGORITHM: string | Uint8Array | null;
    ENCODING: string | Uint8Array | null;
    constructor(DOMAIN?: string | Uint8Array | null, PUBLIC_KEY?: string | Uint8Array | null, KEY_PATH?: string | Uint8Array | null, SIGNATURE?: string | Uint8Array | null, SIGNED_PAYLOAD?: string | Uint8Array | null, ALGORITHM?: string | Uint8Array | null, ENCODING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DomainProof.d.ts.map