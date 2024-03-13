import * as flatbuffers from 'flatbuffers';
import { KeyType } from './KeyType.js';
/**
 * Represents cryptographic key information
 */
export declare class CryptoKey implements flatbuffers.IUnpackableObject<CryptoKeyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CryptoKey;
    static getRootAsCryptoKey(bb: flatbuffers.ByteBuffer, obj?: CryptoKey): CryptoKey;
    static getSizePrefixedRootAsCryptoKey(bb: flatbuffers.ByteBuffer, obj?: CryptoKey): CryptoKey;
    /**
     * Public part of the cryptographic key
     */
    PUBLIC_KEY(): string | null;
    PUBLIC_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended public key
     */
    XPUB(): string | null;
    XPUB(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Private part of the cryptographic key, should be kept secret
     */
    PRIVATE_KEY(): string | null;
    PRIVATE_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended private key
     */
    XPRIV(): string | null;
    XPRIV(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Address generated from the cryptographic key
     */
    KEY_ADDRESS(): string | null;
    KEY_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the address generated from the cryptographic key
     */
    ADDRESS_TYPE(): string | null;
    ADDRESS_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the cryptographic key (signing or encryption)
     */
    KEY_TYPE(): KeyType;
    static startCryptoKey(builder: flatbuffers.Builder): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static addXpub(builder: flatbuffers.Builder, XPUBOffset: flatbuffers.Offset): void;
    static addPrivateKey(builder: flatbuffers.Builder, PRIVATE_KEYOffset: flatbuffers.Offset): void;
    static addXpriv(builder: flatbuffers.Builder, XPRIVOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, KEY_ADDRESSOffset: flatbuffers.Offset): void;
    static addAddressType(builder: flatbuffers.Builder, ADDRESS_TYPEOffset: flatbuffers.Offset): void;
    static addKeyType(builder: flatbuffers.Builder, KEY_TYPE: KeyType): void;
    static endCryptoKey(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCryptoKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset, XPUBOffset: flatbuffers.Offset, PRIVATE_KEYOffset: flatbuffers.Offset, XPRIVOffset: flatbuffers.Offset, KEY_ADDRESSOffset: flatbuffers.Offset, ADDRESS_TYPEOffset: flatbuffers.Offset, KEY_TYPE: KeyType): flatbuffers.Offset;
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
    constructor(PUBLIC_KEY?: string | Uint8Array | null, XPUB?: string | Uint8Array | null, PRIVATE_KEY?: string | Uint8Array | null, XPRIV?: string | Uint8Array | null, KEY_ADDRESS?: string | Uint8Array | null, ADDRESS_TYPE?: string | Uint8Array | null, KEY_TYPE?: KeyType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CryptoKey.d.ts.map