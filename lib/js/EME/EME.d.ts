import * as flatbuffers from 'flatbuffers';
/**
 * Encrypted Message Envelope (EME)
 * Encrypted Message Envelope
 */
export declare class EME implements flatbuffers.IUnpackableObject<EMET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EME;
    static getRootAsEME(bb: flatbuffers.ByteBuffer, obj?: EME): EME;
    static getSizePrefixedRootAsEME(bb: flatbuffers.ByteBuffer, obj?: EME): EME;
    /**
     * Encrypted data blob, containing the ciphertext of the original plaintext message.
     */
    ENCRYPTED_BLOB(index: number): number | null;
    encryptedBlobLength(): number;
    encryptedBlobArray(): Uint8Array | null;
    /**
     * Temporary public key used for the encryption session, contributing to the derivation of the shared secret.
     */
    EPHEMERAL_PUBLIC_KEY(): string | null;
    EPHEMERAL_PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message Authentication Code to verify the integrity and authenticity of the encrypted message.
     */
    MAC(): string | null;
    MAC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique value used to ensure that the same plaintext produces a different ciphertext for each encryption.
     */
    NONCE(): string | null;
    NONCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional authentication tag used in some encryption schemes for integrity and authenticity verification.
     */
    TAG(): string | null;
    TAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initialization vector used to introduce randomness in the encryption process, enhancing security.
     */
    IV(): string | null;
    IV(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the public key used, aiding in recipient key management and message decryption.
     */
    PUBLIC_KEY_IDENTIFIER(): string | null;
    PUBLIC_KEY_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specifies the set of cryptographic algorithms used in the encryption process.
     */
    CIPHER_SUITE(): string | null;
    CIPHER_SUITE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters for the Key Derivation Function, guiding the process of deriving keys from the shared secret.
     */
    KDF_PARAMETERS(): string | null;
    KDF_PARAMETERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters defining specific settings for the encryption algorithm, such as block size or operation mode.
     */
    ENCRYPTION_ALGORITHM_PARAMETERS(): string | null;
    ENCRYPTION_ALGORITHM_PARAMETERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEME(builder: flatbuffers.Builder): void;
    static addEncryptedBlob(builder: flatbuffers.Builder, ENCRYPTED_BLOBOffset: flatbuffers.Offset): void;
    static createEncryptedBlobVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEncryptedBlobVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEphemeralPublicKey(builder: flatbuffers.Builder, EPHEMERAL_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addMac(builder: flatbuffers.Builder, MACOffset: flatbuffers.Offset): void;
    static addNonce(builder: flatbuffers.Builder, NONCEOffset: flatbuffers.Offset): void;
    static addTag(builder: flatbuffers.Builder, TAGOffset: flatbuffers.Offset): void;
    static addIv(builder: flatbuffers.Builder, IVOffset: flatbuffers.Offset): void;
    static addPublicKeyIdentifier(builder: flatbuffers.Builder, PUBLIC_KEY_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addCipherSuite(builder: flatbuffers.Builder, CIPHER_SUITEOffset: flatbuffers.Offset): void;
    static addKdfParameters(builder: flatbuffers.Builder, KDF_PARAMETERSOffset: flatbuffers.Offset): void;
    static addEncryptionAlgorithmParameters(builder: flatbuffers.Builder, ENCRYPTION_ALGORITHM_PARAMETERSOffset: flatbuffers.Offset): void;
    static endEME(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEME(builder: flatbuffers.Builder, ENCRYPTED_BLOBOffset: flatbuffers.Offset, EPHEMERAL_PUBLIC_KEYOffset: flatbuffers.Offset, MACOffset: flatbuffers.Offset, NONCEOffset: flatbuffers.Offset, TAGOffset: flatbuffers.Offset, IVOffset: flatbuffers.Offset, PUBLIC_KEY_IDENTIFIEROffset: flatbuffers.Offset, CIPHER_SUITEOffset: flatbuffers.Offset, KDF_PARAMETERSOffset: flatbuffers.Offset, ENCRYPTION_ALGORITHM_PARAMETERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EMET;
    unpackTo(_o: EMET): void;
}
export declare class EMET implements flatbuffers.IGeneratedObject {
    ENCRYPTED_BLOB: (number)[];
    EPHEMERAL_PUBLIC_KEY: string | Uint8Array | null;
    MAC: string | Uint8Array | null;
    NONCE: string | Uint8Array | null;
    TAG: string | Uint8Array | null;
    IV: string | Uint8Array | null;
    PUBLIC_KEY_IDENTIFIER: string | Uint8Array | null;
    CIPHER_SUITE: string | Uint8Array | null;
    KDF_PARAMETERS: string | Uint8Array | null;
    ENCRYPTION_ALGORITHM_PARAMETERS: string | Uint8Array | null;
    constructor(ENCRYPTED_BLOB?: (number)[], EPHEMERAL_PUBLIC_KEY?: string | Uint8Array | null, MAC?: string | Uint8Array | null, NONCE?: string | Uint8Array | null, TAG?: string | Uint8Array | null, IV?: string | Uint8Array | null, PUBLIC_KEY_IDENTIFIER?: string | Uint8Array | null, CIPHER_SUITE?: string | Uint8Array | null, KDF_PARAMETERS?: string | Uint8Array | null, ENCRYPTION_ALGORITHM_PARAMETERS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EME.d.ts.map