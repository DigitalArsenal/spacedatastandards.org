import * as flatbuffers from 'flatbuffers';
/**
 * Specific attributes for a Person
 */
export declare class PersonAttributes implements flatbuffers.IUnpackableObject<PersonAttributesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PersonAttributes;
    static getRootAsPersonAttributes(bb: flatbuffers.ByteBuffer, obj?: PersonAttributes): PersonAttributes;
    static getSizePrefixedRootAsPersonAttributes(bb: flatbuffers.ByteBuffer, obj?: PersonAttributes): PersonAttributes;
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
    static startPersonAttributes(builder: flatbuffers.Builder): void;
    static addFamilyName(builder: flatbuffers.Builder, FAMILY_NAMEOffset: flatbuffers.Offset): void;
    static addGivenName(builder: flatbuffers.Builder, GIVEN_NAMEOffset: flatbuffers.Offset): void;
    static addAdditionalName(builder: flatbuffers.Builder, ADDITIONAL_NAMEOffset: flatbuffers.Offset): void;
    static addHonorificPrefix(builder: flatbuffers.Builder, HONORIFIC_PREFIXOffset: flatbuffers.Offset): void;
    static addHonorificSuffix(builder: flatbuffers.Builder, HONORIFIC_SUFFIXOffset: flatbuffers.Offset): void;
    static addJobTitle(builder: flatbuffers.Builder, JOB_TITLEOffset: flatbuffers.Offset): void;
    static addOccupation(builder: flatbuffers.Builder, OCCUPATIONOffset: flatbuffers.Offset): void;
    static endPersonAttributes(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPersonAttributes(builder: flatbuffers.Builder, FAMILY_NAMEOffset: flatbuffers.Offset, GIVEN_NAMEOffset: flatbuffers.Offset, ADDITIONAL_NAMEOffset: flatbuffers.Offset, HONORIFIC_PREFIXOffset: flatbuffers.Offset, HONORIFIC_SUFFIXOffset: flatbuffers.Offset, JOB_TITLEOffset: flatbuffers.Offset, OCCUPATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PersonAttributesT;
    unpackTo(_o: PersonAttributesT): void;
}
export declare class PersonAttributesT implements flatbuffers.IGeneratedObject {
    FAMILY_NAME: string | Uint8Array | null;
    GIVEN_NAME: string | Uint8Array | null;
    ADDITIONAL_NAME: string | Uint8Array | null;
    HONORIFIC_PREFIX: string | Uint8Array | null;
    HONORIFIC_SUFFIX: string | Uint8Array | null;
    JOB_TITLE: string | Uint8Array | null;
    OCCUPATION: string | Uint8Array | null;
    constructor(FAMILY_NAME?: string | Uint8Array | null, GIVEN_NAME?: string | Uint8Array | null, ADDITIONAL_NAME?: string | Uint8Array | null, HONORIFIC_PREFIX?: string | Uint8Array | null, HONORIFIC_SUFFIX?: string | Uint8Array | null, JOB_TITLE?: string | Uint8Array | null, OCCUPATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PersonAttributes.d.ts.map