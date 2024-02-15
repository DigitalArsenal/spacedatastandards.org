import * as flatbuffers from 'flatbuffers';
/**
 * Information about a person
 */
export declare class Person implements flatbuffers.IUnpackableObject<PersonT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Person;
    static getRootAsPerson(bb: flatbuffers.ByteBuffer, obj?: Person): Person;
    static getSizePrefixedRootAsPerson(bb: flatbuffers.ByteBuffer, obj?: Person): Person;
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
     * Honorific prefix preceding the person's name
     */
    HONORIFIC_PREFIX(): string | null;
    HONORIFIC_PREFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Honorific suffix following the person's name
     */
    HONORIFIC_SUFFIX(): string | null;
    HONORIFIC_SUFFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPerson(builder: flatbuffers.Builder): void;
    static addFamilyName(builder: flatbuffers.Builder, FAMILY_NAMEOffset: flatbuffers.Offset): void;
    static addGivenName(builder: flatbuffers.Builder, GIVEN_NAMEOffset: flatbuffers.Offset): void;
    static addAdditionalName(builder: flatbuffers.Builder, ADDITIONAL_NAMEOffset: flatbuffers.Offset): void;
    static addHonorificPrefix(builder: flatbuffers.Builder, HONORIFIC_PREFIXOffset: flatbuffers.Offset): void;
    static addHonorificSuffix(builder: flatbuffers.Builder, HONORIFIC_SUFFIXOffset: flatbuffers.Offset): void;
    static endPerson(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPerson(builder: flatbuffers.Builder, FAMILY_NAMEOffset: flatbuffers.Offset, GIVEN_NAMEOffset: flatbuffers.Offset, ADDITIONAL_NAMEOffset: flatbuffers.Offset, HONORIFIC_PREFIXOffset: flatbuffers.Offset, HONORIFIC_SUFFIXOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PersonT;
    unpackTo(_o: PersonT): void;
}
export declare class PersonT implements flatbuffers.IGeneratedObject {
    FAMILY_NAME: string | Uint8Array | null;
    GIVEN_NAME: string | Uint8Array | null;
    ADDITIONAL_NAME: string | Uint8Array | null;
    HONORIFIC_PREFIX: string | Uint8Array | null;
    HONORIFIC_SUFFIX: string | Uint8Array | null;
    constructor(FAMILY_NAME?: string | Uint8Array | null, GIVEN_NAME?: string | Uint8Array | null, ADDITIONAL_NAME?: string | Uint8Array | null, HONORIFIC_PREFIX?: string | Uint8Array | null, HONORIFIC_SUFFIX?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Person.d.ts.map