import * as flatbuffers from 'flatbuffers';
import { CryptoKey, CryptoKeyT } from './CryptoKey.js';
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
    DN(): string | null;
    DN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Common name of the entity (person or organization)
     */
    LEGAL_NAME(): string | null;
    LEGAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Family name or surname of the person
     */
    FAMILY_NAME(): string | null;
    FAMILY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Given name or first name of the person
     */
    GIVEN_NAME(): string | null;
    GIVEN_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional name or middle name of the person
     */
    ADDITIONAL_NAME(): string | null;
    ADDITIONAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Honorific prefix preceding the person's name (e.g., Mr., Dr.)
     */
    HONORIFIC_PREFIX(): string | null;
    HONORIFIC_PREFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Honorific suffix following the person's name (e.g., Jr., Sr.)
     */
    HONORIFIC_SUFFIX(): string | null;
    HONORIFIC_SUFFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Job title of the person
     */
    JOB_TITLE(): string | null;
    JOB_TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Occupation of the person
     */
    OCCUPATION(): string | null;
    OCCUPATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alternate names for the entity
     */
    ALTERNATE_NAMES(index: number): string;
    ALTERNATE_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateNamesLength(): number;
    /**
     * Email address of the entity
     */
    EMAIL(): string | null;
    EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Telephone number of the entity
     */
    TELEPHONE(): string | null;
    TELEPHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cryptographic keys associated with the entity
     */
    KEYS(index: number, obj?: CryptoKey): CryptoKey | null;
    keysLength(): number;
    /**
     * Multiformat addresses associated with the entity
     */
    MULTIFORMAT_ADDRESS(index: number): string;
    MULTIFORMAT_ADDRESS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    multiformatAddressLength(): number;
    static startEPM(builder: flatbuffers.Builder): void;
    static addDn(builder: flatbuffers.Builder, DNOffset: flatbuffers.Offset): void;
    static addLegalName(builder: flatbuffers.Builder, LEGAL_NAMEOffset: flatbuffers.Offset): void;
    static addFamilyName(builder: flatbuffers.Builder, FAMILY_NAMEOffset: flatbuffers.Offset): void;
    static addGivenName(builder: flatbuffers.Builder, GIVEN_NAMEOffset: flatbuffers.Offset): void;
    static addAdditionalName(builder: flatbuffers.Builder, ADDITIONAL_NAMEOffset: flatbuffers.Offset): void;
    static addHonorificPrefix(builder: flatbuffers.Builder, HONORIFIC_PREFIXOffset: flatbuffers.Offset): void;
    static addHonorificSuffix(builder: flatbuffers.Builder, HONORIFIC_SUFFIXOffset: flatbuffers.Offset): void;
    static addJobTitle(builder: flatbuffers.Builder, JOB_TITLEOffset: flatbuffers.Offset): void;
    static addOccupation(builder: flatbuffers.Builder, OCCUPATIONOffset: flatbuffers.Offset): void;
    static addAlternateNames(builder: flatbuffers.Builder, ALTERNATE_NAMESOffset: flatbuffers.Offset): void;
    static createAlternateNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEmail(builder: flatbuffers.Builder, EMAILOffset: flatbuffers.Offset): void;
    static addTelephone(builder: flatbuffers.Builder, TELEPHONEOffset: flatbuffers.Offset): void;
    static addKeys(builder: flatbuffers.Builder, KEYSOffset: flatbuffers.Offset): void;
    static createKeysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMultiformatAddress(builder: flatbuffers.Builder, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): void;
    static createMultiformatAddressVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiformatAddressVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEPM(builder: flatbuffers.Builder, DNOffset: flatbuffers.Offset, LEGAL_NAMEOffset: flatbuffers.Offset, FAMILY_NAMEOffset: flatbuffers.Offset, GIVEN_NAMEOffset: flatbuffers.Offset, ADDITIONAL_NAMEOffset: flatbuffers.Offset, HONORIFIC_PREFIXOffset: flatbuffers.Offset, HONORIFIC_SUFFIXOffset: flatbuffers.Offset, JOB_TITLEOffset: flatbuffers.Offset, OCCUPATIONOffset: flatbuffers.Offset, ALTERNATE_NAMESOffset: flatbuffers.Offset, EMAILOffset: flatbuffers.Offset, TELEPHONEOffset: flatbuffers.Offset, KEYSOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EPMT;
    unpackTo(_o: EPMT): void;
}
export declare class EPMT implements flatbuffers.IGeneratedObject {
    DN: string | Uint8Array | null;
    LEGAL_NAME: string | Uint8Array | null;
    FAMILY_NAME: string | Uint8Array | null;
    GIVEN_NAME: string | Uint8Array | null;
    ADDITIONAL_NAME: string | Uint8Array | null;
    HONORIFIC_PREFIX: string | Uint8Array | null;
    HONORIFIC_SUFFIX: string | Uint8Array | null;
    JOB_TITLE: string | Uint8Array | null;
    OCCUPATION: string | Uint8Array | null;
    ALTERNATE_NAMES: (string)[];
    EMAIL: string | Uint8Array | null;
    TELEPHONE: string | Uint8Array | null;
    KEYS: (CryptoKeyT)[];
    MULTIFORMAT_ADDRESS: (string)[];
    constructor(DN?: string | Uint8Array | null, LEGAL_NAME?: string | Uint8Array | null, FAMILY_NAME?: string | Uint8Array | null, GIVEN_NAME?: string | Uint8Array | null, ADDITIONAL_NAME?: string | Uint8Array | null, HONORIFIC_PREFIX?: string | Uint8Array | null, HONORIFIC_SUFFIX?: string | Uint8Array | null, JOB_TITLE?: string | Uint8Array | null, OCCUPATION?: string | Uint8Array | null, ALTERNATE_NAMES?: (string)[], EMAIL?: string | Uint8Array | null, TELEPHONE?: string | Uint8Array | null, KEYS?: (CryptoKeyT)[], MULTIFORMAT_ADDRESS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPM.d.ts.map