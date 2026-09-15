import * as flatbuffers from 'flatbuffers';
import { KeyType } from './KeyType.js';
/**
 * Represents cryptographic key information.
 *
 * The publication paradigm is "literal public keys, not derivation
 * material": a published EPM carries the PUBLIC_KEY bytes that verify
 * the record's SIGNATURE (signing) or encrypt to the entity (encryption),
 * and NOTHING about how those keys were derived. XPUB, KEY_PATH and
 * KEY_ADDRESS are PRIVATE / operational — they belong to the wallet that
 * produced the keys, never to the record a peer resolves.
 *
 * Requiredness is PROFILE-ENFORCED, never a flatc `(required)` attribute:
 * a `(required)` on PUBLIC_KEY would make the flatbuffers Verifier reject
 * every pre-flip secp256k1 record that legitimately omitted it (the
 * 2026-07-27 dual-curve regime allowed xpub-derivation for secp at
 * non-hardened paths). A published record is self-describing instead —
 * PUBLIC_KEY present, XPUB/KEY_PATH/KEY_ADDRESS absent — and a conformance
 * checker asserts that profile (see scripts/check-epm-published-profile.mjs).
 *
 * Rotation is by republish: a new signing or encryption key means a new
 * PUBLIC_KEY, a re-signed SIGNATURE, and a re-published EPM at the same
 * peer-addressed location. The PeerID (multihash of the libp2p identity
 * pubkey) is the stable anchor across rotations.
 */
export declare class CryptoKey implements flatbuffers.IUnpackableObject<CryptoKeyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CryptoKey;
    static getRootAsCryptoKey(bb: flatbuffers.ByteBuffer, obj?: CryptoKey): CryptoKey;
    static getSizePrefixedRootAsCryptoKey(bb: flatbuffers.ByteBuffer, obj?: CryptoKey): CryptoKey;
    /**
     * Public part of the cryptographic key, in hexadecimal format. AUTHORITATIVE
     * in a published record: this is the verifying/encrypting key, and no other
     * field yields it. Required-in-practice (profile-enforced, not flatc
     * `(required)`) so that pre-flip secp256k1 records without it still decode.
     */
    PUBLIC_KEY(): string | null;
    PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended public key, as specified by BIP-32 (hierarchical deterministic
     * wallets), "Extended keys". PRIVATE / operational: present only in the
     * wallet that derived the keys, ABSENT from published records. A verifier
     * never derives a child key from XPUB — the PUBLIC_KEY is the verification
     * material.
     */
    XPUB(): string | null;
    XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Private part of the cryptographic key in hexidecimal format, should be kept secret
     */
    PRIVATE_KEY(): string | null;
    PRIVATE_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended private key, as specified by BIP-32 (hierarchical deterministic wallets), "Extended keys".
     */
    XPRIV(): string | null;
    XPRIV(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Address generated from the cryptographic key. PRIVATE / operational in a
     * published EPM: a chain address is bound through a ChainProof attestation,
     * not carried as a standalone KEY_ADDRESS on the CryptoKey. ABSENT from
     * published records.
     */
    KEY_ADDRESS(): string | null;
    KEY_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the address generated from the cryptographic key. An address
     * format tag only — NOT a curve or algorithm designator; the algorithm
     * lives in ALGORITHM
     */
    ADDRESS_TYPE(): string | null;
    ADDRESS_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the cryptographic key (signing or encryption)
     */
    KEY_TYPE(): KeyType;
    /**
     * BIP-32 / SLIP-10 derivation path of this key from the entity root
     * (e.g., "m/44'/0'/0'/0/0" secp256k1 non-hardened, "m/44'/0'/0'/0'/0'"
     * ed25519 hardened). PRIVATE / operational: how the key was derived belongs
     * to the wallet, not to a published record. ABSENT from published records.
     */
    KEY_PATH(): string | null;
    KEY_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Key algorithm/curve (e.g., "ed25519", "secp256k1"). ABSENT means
     * ed25519: every record published before this field existed verifies
     * unchanged under that default. The verifier dispatches on ALGORITHM (not
     * on ADDRESS_TYPE, which is an address-format tag only).
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Signature encoding format produced by this key (e.g., "raw-ed25519",
     * "compact"). ABSENT means the canonical encoding of ALGORITHM
     * (raw-ed25519 for ed25519, compact for secp256k1)
     */
    ENCODING(): string | null;
    ENCODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCryptoKey(builder: flatbuffers.Builder): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addXpub(builder: flatbuffers.Builder, XPUBOffset: flatbuffers.Offset): void;
    static addPrivateKey(builder: flatbuffers.Builder, PRIVATE_KEYOffset: flatbuffers.Offset): void;
    static addXpriv(builder: flatbuffers.Builder, XPRIVOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, KEY_ADDRESSOffset: flatbuffers.Offset): void;
    static addAddressType(builder: flatbuffers.Builder, ADDRESS_TYPEOffset: flatbuffers.Offset): void;
    static addKeyType(builder: flatbuffers.Builder, KEY_TYPE: KeyType): void;
    static addKeyPath(builder: flatbuffers.Builder, KEY_PATHOffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODINGOffset: flatbuffers.Offset): void;
    static endCryptoKey(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCryptoKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset, XPUBOffset: flatbuffers.Offset, PRIVATE_KEYOffset: flatbuffers.Offset, XPRIVOffset: flatbuffers.Offset, KEY_ADDRESSOffset: flatbuffers.Offset, ADDRESS_TYPEOffset: flatbuffers.Offset, KEY_TYPE: KeyType, KEY_PATHOffset: flatbuffers.Offset, ALGORITHMOffset: flatbuffers.Offset, ENCODINGOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CryptoKeyT;
    unpackTo(_o: CryptoKeyT): void;
}
export declare class CryptoKeyT implements flatbuffers.IGeneratedObject {
    PUBLIC_KEY: string | Uint8Array | null;
    XPUB: string | Uint8Array | null;
    PRIVATE_KEY: string | Uint8Array | null;
    XPRIV: string | Uint8Array | null;
    KEY_ADDRESS: string | Uint8Array | null;
    ADDRESS_TYPE: string | Uint8Array | null;
    KEY_TYPE: KeyType;
    KEY_PATH: string | Uint8Array | null;
    ALGORITHM: string | Uint8Array | null;
    ENCODING: string | Uint8Array | null;
    constructor(PUBLIC_KEY?: string | Uint8Array | null, XPUB?: string | Uint8Array | null, PRIVATE_KEY?: string | Uint8Array | null, XPRIV?: string | Uint8Array | null, KEY_ADDRESS?: string | Uint8Array | null, ADDRESS_TYPE?: string | Uint8Array | null, KEY_TYPE?: KeyType, KEY_PATH?: string | Uint8Array | null, ALGORITHM?: string | Uint8Array | null, ENCODING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CryptoKey.d.ts.map