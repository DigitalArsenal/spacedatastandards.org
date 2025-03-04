import * as flatbuffers from 'flatbuffers';
/**
 * Encrypted Message Envelope
 */
export declare class EME implements flatbuffers.IUnpackableObject<EMET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EME;
    static getRootAsEME(bb: flatbuffers.ByteBuffer, obj?: EME): EME;
    static getSizePrefixedRootAsEME(bb: flatbuffers.ByteBuffer, obj?: EME): EME;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Encrypted data blob, containing the ciphertext of the original plaintext message.
     */
    encryptedBlob(index: number): number | null;
    encryptedBlobLength(): number;
    encryptedBlobArray(): Uint8Array | null;
    /**
     * Temporary public key used for the encryption session, contributing to the derivation of the shared secret.
     */
    ephemeralPublicKey(): string | null;
    ephemeralPublicKey(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message Authentication Code to verify the integrity and authenticity of the encrypted message.
     */
    mac(): string | null;
    mac(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique value used to ensure that the same plaintext produces a different ciphertext for each encryption.
     */
    nonce(): string | null;
    nonce(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional authentication tag used in some encryption schemes for integrity and authenticity verification.
     */
    tag(): string | null;
    tag(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initialization vector used to introduce randomness in the encryption process, enhancing security.
     */
    iv(): string | null;
    iv(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the public key used, aiding in recipient key management and message decryption.
     */
    publicKeyIdentifier(): string | null;
    publicKeyIdentifier(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specifies the set of cryptographic algorithms used in the encryption process.
     */
    cipherSuite(): string | null;
    cipherSuite(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters for the Key Derivation Function, guiding the process of deriving keys from the shared secret.
     */
    kdfParameters(): string | null;
    kdfParameters(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameters defining specific settings for the encryption algorithm, such as block size or operation mode.
     */
    encryptionAlgorithmParameters(): string | null;
    encryptionAlgorithmParameters(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEME(builder: flatbuffers.Builder): void;
    static addEncryptedBlob(builder: flatbuffers.Builder, encryptedBlobOffset: flatbuffers.Offset): void;
    static createEncryptedBlobVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEncryptedBlobVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEphemeralPublicKey(builder: flatbuffers.Builder, ephemeralPublicKeyOffset: flatbuffers.Offset): void;
    static addMac(builder: flatbuffers.Builder, macOffset: flatbuffers.Offset): void;
    static addNonce(builder: flatbuffers.Builder, nonceOffset: flatbuffers.Offset): void;
    static addTag(builder: flatbuffers.Builder, tagOffset: flatbuffers.Offset): void;
    static addIv(builder: flatbuffers.Builder, ivOffset: flatbuffers.Offset): void;
    static addPublicKeyIdentifier(builder: flatbuffers.Builder, publicKeyIdentifierOffset: flatbuffers.Offset): void;
    static addCipherSuite(builder: flatbuffers.Builder, cipherSuiteOffset: flatbuffers.Offset): void;
    static addKdfParameters(builder: flatbuffers.Builder, kdfParametersOffset: flatbuffers.Offset): void;
    static addEncryptionAlgorithmParameters(builder: flatbuffers.Builder, encryptionAlgorithmParametersOffset: flatbuffers.Offset): void;
    static endEME(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEMEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEME(builder: flatbuffers.Builder, encryptedBlobOffset: flatbuffers.Offset, ephemeralPublicKeyOffset: flatbuffers.Offset, macOffset: flatbuffers.Offset, nonceOffset: flatbuffers.Offset, tagOffset: flatbuffers.Offset, ivOffset: flatbuffers.Offset, publicKeyIdentifierOffset: flatbuffers.Offset, cipherSuiteOffset: flatbuffers.Offset, kdfParametersOffset: flatbuffers.Offset, encryptionAlgorithmParametersOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EMET;
    unpackTo(_o: EMET): void;
}
export declare class EMET implements flatbuffers.IGeneratedObject {
    encryptedBlob: (number)[];
    ephemeralPublicKey: string | Uint8Array | null;
    mac: string | Uint8Array | null;
    nonce: string | Uint8Array | null;
    tag: string | Uint8Array | null;
    iv: string | Uint8Array | null;
    publicKeyIdentifier: string | Uint8Array | null;
    cipherSuite: string | Uint8Array | null;
    kdfParameters: string | Uint8Array | null;
    encryptionAlgorithmParameters: string | Uint8Array | null;
    constructor(encryptedBlob?: (number)[], ephemeralPublicKey?: string | Uint8Array | null, mac?: string | Uint8Array | null, nonce?: string | Uint8Array | null, tag?: string | Uint8Array | null, iv?: string | Uint8Array | null, publicKeyIdentifier?: string | Uint8Array | null, cipherSuite?: string | Uint8Array | null, kdfParameters?: string | Uint8Array | null, encryptionAlgorithmParameters?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=eme.d.ts.map