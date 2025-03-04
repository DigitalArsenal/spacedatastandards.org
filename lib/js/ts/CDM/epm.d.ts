import * as flatbuffers from 'flatbuffers';
import { Address, AddressT } from './address.js';
import { CryptoKey, CryptoKeyT } from './crypto-key.js';
/**
 * Entity Profile Message
 */
export declare class EPM implements flatbuffers.IUnpackableObject<EPMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPM;
    static getRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    static getSizePrefixedRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Distinguished Name of the entity
     */
    dn(): string | null;
    dn(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Common name of the entity (person or organization)
     */
    legalName(): string | null;
    legalName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Family name or surname of the person
     */
    familyName(): string | null;
    familyName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Given name or first name of the person
     */
    givenName(): string | null;
    givenName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional name or middle name of the person
     */
    additionalName(): string | null;
    additionalName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Honorific prefix preceding the person's name (e.g., Mr., Dr.)
     */
    honorificPrefix(): string | null;
    honorificPrefix(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Honorific suffix following the person's name (e.g., Jr., Sr.)
     */
    honorificSuffix(): string | null;
    honorificSuffix(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Job title of the person
     */
    jobTitle(): string | null;
    jobTitle(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Occupation of the person
     */
    occupation(): string | null;
    occupation(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Physical Address
     */
    address(obj?: Address): Address | null;
    /**
     * Alternate names for the entity
     */
    alternateNames(index: number): string;
    alternateNames(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateNamesLength(): number;
    /**
     * Email address of the entity
     */
    email(): string | null;
    email(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Telephone number of the entity
     */
    telephone(): string | null;
    telephone(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cryptographic keys associated with the entity
     */
    keys(index: number, obj?: CryptoKey): CryptoKey | null;
    keysLength(): number;
    /**
     * Multiformat addresses associated with the entity
     */
    multiformatAddress(index: number): string;
    multiformatAddress(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    multiformatAddressLength(): number;
    static startEPM(builder: flatbuffers.Builder): void;
    static addDn(builder: flatbuffers.Builder, dnOffset: flatbuffers.Offset): void;
    static addLegalName(builder: flatbuffers.Builder, legalNameOffset: flatbuffers.Offset): void;
    static addFamilyName(builder: flatbuffers.Builder, familyNameOffset: flatbuffers.Offset): void;
    static addGivenName(builder: flatbuffers.Builder, givenNameOffset: flatbuffers.Offset): void;
    static addAdditionalName(builder: flatbuffers.Builder, additionalNameOffset: flatbuffers.Offset): void;
    static addHonorificPrefix(builder: flatbuffers.Builder, honorificPrefixOffset: flatbuffers.Offset): void;
    static addHonorificSuffix(builder: flatbuffers.Builder, honorificSuffixOffset: flatbuffers.Offset): void;
    static addJobTitle(builder: flatbuffers.Builder, jobTitleOffset: flatbuffers.Offset): void;
    static addOccupation(builder: flatbuffers.Builder, occupationOffset: flatbuffers.Offset): void;
    static addAddress(builder: flatbuffers.Builder, addressOffset: flatbuffers.Offset): void;
    static addAlternateNames(builder: flatbuffers.Builder, alternateNamesOffset: flatbuffers.Offset): void;
    static createAlternateNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEmail(builder: flatbuffers.Builder, emailOffset: flatbuffers.Offset): void;
    static addTelephone(builder: flatbuffers.Builder, telephoneOffset: flatbuffers.Offset): void;
    static addKeys(builder: flatbuffers.Builder, keysOffset: flatbuffers.Offset): void;
    static createKeysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, multiformatAddressOffset: flatbuffers.Offset): void;
    static createMultiformatAddressVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiformatAddressVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EPMT;
    unpackTo(_o: EPMT): void;
}
export declare class EPMT implements flatbuffers.IGeneratedObject {
    dn: string | Uint8Array | null;
    legalName: string | Uint8Array | null;
    familyName: string | Uint8Array | null;
    givenName: string | Uint8Array | null;
    additionalName: string | Uint8Array | null;
    honorificPrefix: string | Uint8Array | null;
    honorificSuffix: string | Uint8Array | null;
    jobTitle: string | Uint8Array | null;
    occupation: string | Uint8Array | null;
    address: AddressT | null;
    alternateNames: (string)[];
    email: string | Uint8Array | null;
    telephone: string | Uint8Array | null;
    keys: (CryptoKeyT)[];
    multiformatAddress: (string)[];
    constructor(dn?: string | Uint8Array | null, legalName?: string | Uint8Array | null, familyName?: string | Uint8Array | null, givenName?: string | Uint8Array | null, additionalName?: string | Uint8Array | null, honorificPrefix?: string | Uint8Array | null, honorificSuffix?: string | Uint8Array | null, jobTitle?: string | Uint8Array | null, occupation?: string | Uint8Array | null, address?: AddressT | null, alternateNames?: (string)[], email?: string | Uint8Array | null, telephone?: string | Uint8Array | null, keys?: (CryptoKeyT)[], multiformatAddress?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=epm.d.ts.map