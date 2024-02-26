import * as flatbuffers from 'flatbuffers';
import { CryptoKey, CryptoKeyT } from './CryptoKey.js';
import { OrganizationAttributesT } from './OrganizationAttributes.js';
import { PersonAttributesT } from './PersonAttributes.js';
import { SpecificAttributes } from './SpecificAttributes.js';
/**
 * Represents an entity with common fields and specific attributes for Person or Organization
 */
export declare class EPM implements flatbuffers.IUnpackableObject<EPMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPM;
    static getRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    static getSizePrefixedRootAsEPM(bb: flatbuffers.ByteBuffer, obj?: EPM): EPM;
    /**
     * Common name of the entity (person or organization)
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    attributesType(): SpecificAttributes;
    /**
     * Specific attributes for the entity, either Person or Organization
     */
    ATTRIBUTES<T extends flatbuffers.Table>(obj: any): any | null;
    static startEPM(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
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
    static addAttributesType(builder: flatbuffers.Builder, attributesType: SpecificAttributes): void;
    static addAttributes(builder: flatbuffers.Builder, ATTRIBUTESOffset: flatbuffers.Offset): void;
    static endEPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEPM(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, ALTERNATE_NAMESOffset: flatbuffers.Offset, EMAILOffset: flatbuffers.Offset, TELEPHONEOffset: flatbuffers.Offset, KEYSOffset: flatbuffers.Offset, MULTIFORMAT_ADDRESSOffset: flatbuffers.Offset, attributesType: SpecificAttributes, ATTRIBUTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EPMT;
    unpackTo(_o: EPMT): void;
}
export declare class EPMT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ALTERNATE_NAMES: (string)[];
    EMAIL: string | Uint8Array | null;
    TELEPHONE: string | Uint8Array | null;
    KEYS: (CryptoKeyT)[];
    MULTIFORMAT_ADDRESS: (string)[];
    attributesType: SpecificAttributes;
    ATTRIBUTES: OrganizationAttributesT | PersonAttributesT | null;
    constructor(NAME?: string | Uint8Array | null, ALTERNATE_NAMES?: (string)[], EMAIL?: string | Uint8Array | null, TELEPHONE?: string | Uint8Array | null, KEYS?: (CryptoKeyT)[], MULTIFORMAT_ADDRESS?: (string)[], attributesType?: SpecificAttributes, ATTRIBUTES?: OrganizationAttributesT | PersonAttributesT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPM.d.ts.map