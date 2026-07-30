import * as flatbuffers from 'flatbuffers';
/**
 * Proves a blockchain key derives from the same HD wallet as the signing key
 */
export declare class ChainProof implements flatbuffers.IUnpackableObject<ChainProofT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ChainProof;
    static getRootAsChainProof(bb: flatbuffers.ByteBuffer, obj?: ChainProof): ChainProof;
    static getSizePrefixedRootAsChainProof(bb: flatbuffers.ByteBuffer, obj?: ChainProof): ChainProof;
    /**
     * Chain identifier (e.g., "bitcoin", "ethereum", "solana")
     */
    CHAIN(): string | null;
    CHAIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Derived blockchain address
     */
    ADDRESS(): string | null;
    ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Public key for this chain (hex-encoded)
     */
    PUBLIC_KEY(): string | null;
    PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BIP-44 derivation path (e.g., "m/44'/0'/0'/0/0")
     */
    KEY_PATH(): string | null;
    KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature over the attestation payload (hex-encoded)
     */
    SIGNATURE(): string | null;
    SIGNATURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The canonical payload that was signed (hex-encoded)
     */
    SIGNED_PAYLOAD(): string | null;
    SIGNED_PAYLOAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature algorithm (e.g., "secp256k1-compact-bitcoin", "secp256k1-compact-ethereum", "ed25519")
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature encoding format (e.g., "compact", "raw-ed25519")
     */
    ENCODING(): string | null;
    ENCODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startChainProof(builder: flatbuffers.Builder): void;
    static addChain(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, ADDRESSOffset: flatbuffers.Offset): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addKeyPath(builder: flatbuffers.Builder, KEY_PATHOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static addSignedPayload(builder: flatbuffers.Builder, SIGNED_PAYLOADOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODINGOffset: flatbuffers.Offset): void;
    static endChainProof(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createChainProof(builder: flatbuffers.Builder, CHAINOffset: flatbuffers.Offset, ADDRESSOffset: flatbuffers.Offset, PUBLIC_KEYOffset: flatbuffers.Offset, KEY_PATHOffset: flatbuffers.Offset, SIGNATUREOffset: flatbuffers.Offset, SIGNED_PAYLOADOffset: flatbuffers.Offset, ALGORITHMOffset: flatbuffers.Offset, ENCODINGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ChainProofT;
    unpackTo(_o: ChainProofT): void;
}
export declare class ChainProofT implements flatbuffers.IGeneratedObject {
    CHAIN: string | Uint8Array | null;
    ADDRESS: string | Uint8Array | null;
    PUBLIC_KEY: string | Uint8Array | null;
    KEY_PATH: string | Uint8Array | null;
    SIGNATURE: string | Uint8Array | null;
    SIGNED_PAYLOAD: string | Uint8Array | null;
    ALGORITHM: string | Uint8Array | null;
    ENCODING: string | Uint8Array | null;
    constructor(CHAIN?: string | Uint8Array | null, ADDRESS?: string | Uint8Array | null, PUBLIC_KEY?: string | Uint8Array | null, KEY_PATH?: string | Uint8Array | null, SIGNATURE?: string | Uint8Array | null, SIGNED_PAYLOAD?: string | Uint8Array | null, ALGORITHM?: string | Uint8Array | null, ENCODING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ChainProof.d.ts.map