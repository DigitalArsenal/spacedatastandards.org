import * as flatbuffers from 'flatbuffers';
import { KDF } from './KDF.js';
import { KeyExchange } from './KeyExchange.js';
import { SymmetricAlgo } from './SymmetricAlgo.js';
/**
 * Encryption Header containing all parameters needed for decryption
 */
export declare class ENC implements flatbuffers.IUnpackableObject<ENCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ENC;
    static getRootAsENC(bb: flatbuffers.ByteBuffer, obj?: ENC): ENC;
    static getSizePrefixedRootAsENC(bb: flatbuffers.ByteBuffer, obj?: ENC): ENC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Schema version for forward compatibility
     */
    VERSION(): number;
    /**
     * Key exchange algorithm used
     */
    KEY_EXCHANGE(): KeyExchange;
    /**
     * Symmetric encryption algorithm used
     */
    SYMMETRIC(): SymmetricAlgo;
    /**
     * Key derivation function used
     */
    KEY_DERIVATION(): KDF;
    /**
     * Ephemeral public key for ECDH key agreement (32-65 bytes depending on algorithm)
     */
    EPHEMERAL_PUBLIC_KEY(index: number): number | null;
    ephemeralPublicKeyLength(): number;
    ephemeralPublicKeyArray(): Uint8Array | null;
    /**
     * Random 12-byte nonce starting value. Incremented for each record in the stream to ensure unique nonces.
     */
    NONCE_START(index: number): number | null;
    nonceStartLength(): number;
    nonceStartArray(): Uint8Array | null;
    /**
     * Optional identifier for the recipient's public key (up to 32 bytes)
     */
    RECIPIENT_KEY_ID(index: number): number | null;
    recipientKeyIdLength(): number;
    recipientKeyIdArray(): Uint8Array | null;
    /**
     * Optional domain separation context string
     */
    CONTEXT(): string | null;
    CONTEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional SHA-256 hash of the FlatBuffers schema (32 bytes)
     */
    SCHEMA_HASH(index: number): number | null;
    schemaHashLength(): number;
    schemaHashArray(): Uint8Array | null;
    /**
     * Optional root type name from the schema
     */
    ROOT_TYPE(): string | null;
    ROOT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional Unix timestamp (milliseconds) when encryption was performed
     */
    TIMESTAMP(): bigint;
    static startENC(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addKeyExchange(builder: flatbuffers.Builder, KEY_EXCHANGE: KeyExchange): void;
    static addSymmetric(builder: flatbuffers.Builder, SYMMETRIC: SymmetricAlgo): void;
    static addKeyDerivation(builder: flatbuffers.Builder, KEY_DERIVATION: KDF): void;
    static addEphemeralPublicKey(builder: flatbuffers.Builder, EPHEMERAL_PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static createEphemeralPublicKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEphemeralPublicKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNonceStart(builder: flatbuffers.Builder, NONCE_STARTOffset: flatbuffers.Offset): void;
    static createNonceStartVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNonceStartVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRecipientKeyId(builder: flatbuffers.Builder, RECIPIENT_KEY_IDOffset: flatbuffers.Offset): void;
    static createRecipientKeyIdVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRecipientKeyIdVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContext(builder: flatbuffers.Builder, CONTEXTOffset: flatbuffers.Offset): void;
    static addSchemaHash(builder: flatbuffers.Builder, SCHEMA_HASHOffset: flatbuffers.Offset): void;
    static createSchemaHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSchemaHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRootType(builder: flatbuffers.Builder, ROOT_TYPEOffset: flatbuffers.Offset): void;
    static addTimestamp(builder: flatbuffers.Builder, TIMESTAMP: bigint): void;
    static endENC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishENCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedENCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createENC(builder: flatbuffers.Builder, VERSION: number, KEY_EXCHANGE: KeyExchange, SYMMETRIC: SymmetricAlgo, KEY_DERIVATION: KDF, EPHEMERAL_PUBLIC_KEYOffset: flatbuffers.Offset, NONCE_STARTOffset: flatbuffers.Offset, RECIPIENT_KEY_IDOffset: flatbuffers.Offset, CONTEXTOffset: flatbuffers.Offset, SCHEMA_HASHOffset: flatbuffers.Offset, ROOT_TYPEOffset: flatbuffers.Offset, TIMESTAMP: bigint): flatbuffers.Offset;
    unpack(): ENCT;
    unpackTo(_o: ENCT): void;
}
export declare class ENCT implements flatbuffers.IGeneratedObject {
    VERSION: number;
    KEY_EXCHANGE: KeyExchange;
    SYMMETRIC: SymmetricAlgo;
    KEY_DERIVATION: KDF;
    EPHEMERAL_PUBLIC_KEY: (number)[];
    NONCE_START: (number)[];
    RECIPIENT_KEY_ID: (number)[];
    CONTEXT: string | Uint8Array | null;
    SCHEMA_HASH: (number)[];
    ROOT_TYPE: string | Uint8Array | null;
    TIMESTAMP: bigint;
    constructor(VERSION?: number, KEY_EXCHANGE?: KeyExchange, SYMMETRIC?: SymmetricAlgo, KEY_DERIVATION?: KDF, EPHEMERAL_PUBLIC_KEY?: (number)[], NONCE_START?: (number)[], RECIPIENT_KEY_ID?: (number)[], CONTEXT?: string | Uint8Array | null, SCHEMA_HASH?: (number)[], ROOT_TYPE?: string | Uint8Array | null, TIMESTAMP?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ENC.d.ts.map