import * as flatbuffers from 'flatbuffers';
import { KeyType } from './key-type.js';
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
     * Public part of the cryptographic key, in hexidecimal format
     */
    publicKey(): string | null;
    publicKey(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended public key https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
     */
    xpub(): string | null;
    xpub(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Private part of the cryptographic key in hexidecimal format, should be kept secret
     */
    privateKey(): string | null;
    privateKey(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extended private key https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
     */
    xpriv(): string | null;
    xpriv(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Address generated from the cryptographic key
     */
    keyAddress(): string | null;
    keyAddress(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the address generated from the cryptographic key
     */
    addressType(): string | null;
    addressType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the cryptographic key (signing or encryption)
     */
    keyType(): KeyType;
    static startCryptoKey(builder: flatbuffers.Builder): void;
    static addPublicKey(builder: flatbuffers.Builder, publicKeyOffset: flatbuffers.Offset): void;
    static addXpub(builder: flatbuffers.Builder, xpubOffset: flatbuffers.Offset): void;
    static addPrivateKey(builder: flatbuffers.Builder, privateKeyOffset: flatbuffers.Offset): void;
    static addXpriv(builder: flatbuffers.Builder, xprivOffset: flatbuffers.Offset): void;
    static addKeyAddress(builder: flatbuffers.Builder, keyAddressOffset: flatbuffers.Offset): void;
    static addAddressType(builder: flatbuffers.Builder, addressTypeOffset: flatbuffers.Offset): void;
    static addKeyType(builder: flatbuffers.Builder, keyType: KeyType): void;
    static endCryptoKey(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCryptoKey(builder: flatbuffers.Builder, publicKeyOffset: flatbuffers.Offset, xpubOffset: flatbuffers.Offset, privateKeyOffset: flatbuffers.Offset, xprivOffset: flatbuffers.Offset, keyAddressOffset: flatbuffers.Offset, addressTypeOffset: flatbuffers.Offset, keyType: KeyType): flatbuffers.Offset;
    unpack(): CryptoKeyT;
    unpackTo(_o: CryptoKeyT): void;
}
export declare class CryptoKeyT implements flatbuffers.IGeneratedObject {
    publicKey: string | Uint8Array | null;
    xpub: string | Uint8Array | null;
    privateKey: string | Uint8Array | null;
    xpriv: string | Uint8Array | null;
    keyAddress: string | Uint8Array | null;
    addressType: string | Uint8Array | null;
    keyType: KeyType;
    constructor(publicKey?: string | Uint8Array | null, xpub?: string | Uint8Array | null, privateKey?: string | Uint8Array | null, xpriv?: string | Uint8Array | null, keyAddress?: string | Uint8Array | null, addressType?: string | Uint8Array | null, keyType?: KeyType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=crypto-key.d.ts.map