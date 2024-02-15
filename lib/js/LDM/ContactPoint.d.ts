import * as flatbuffers from 'flatbuffers';
/**
 * Information about a contact point
 */
export declare class ContactPoint implements flatbuffers.IUnpackableObject<ContactPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContactPoint;
    static getRootAsContactPoint(bb: flatbuffers.ByteBuffer, obj?: ContactPoint): ContactPoint;
    static getSizePrefixedRootAsContactPoint(bb: flatbuffers.ByteBuffer, obj?: ContactPoint): ContactPoint;
    /**
     * Name of the contact point or person
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of contact (e.g., customer service, technical support)
     */
    CONTACT_TYPE(): string | null;
    CONTACT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Email address
     */
    EMAIL(): string | null;
    EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Telephone number
     */
    TELEPHONE(): string | null;
    TELEPHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Available contact options (e.g., HearingImpairedSupported)
     */
    CONTACT_OPTION(): string | null;
    CONTACT_OPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geographic area where the service is available
     */
    AREA_SERVED(): string | null;
    AREA_SERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Language available for communication
     */
    AVAILABLE_LANGUAGE(): string | null;
    AVAILABLE_LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country of the address
     */
    ADDRESS_COUNTRY(): string | null;
    ADDRESS_COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region of the address (e.g., state or province)
     */
    ADDRESS_REGION(): string | null;
    ADDRESS_REGION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Locality of the address (e.g., city or town)
     */
    ADDRESS_LOCALITY(): string | null;
    ADDRESS_LOCALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Postal code of the address
     */
    POSTAL_CODE(): string | null;
    POSTAL_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Street address
     */
    STREET_ADDRESS(): string | null;
    STREET_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Post office box number
     */
    POST_OFFICE_BOX_NUMBER(): string | null;
    POST_OFFICE_BOX_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startContactPoint(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addContactType(builder: flatbuffers.Builder, CONTACT_TYPEOffset: flatbuffers.Offset): void;
    static addEmail(builder: flatbuffers.Builder, EMAILOffset: flatbuffers.Offset): void;
    static addTelephone(builder: flatbuffers.Builder, TELEPHONEOffset: flatbuffers.Offset): void;
    static addContactOption(builder: flatbuffers.Builder, CONTACT_OPTIONOffset: flatbuffers.Offset): void;
    static addAreaServed(builder: flatbuffers.Builder, AREA_SERVEDOffset: flatbuffers.Offset): void;
    static addAvailableLanguage(builder: flatbuffers.Builder, AVAILABLE_LANGUAGEOffset: flatbuffers.Offset): void;
    static addAddressCountry(builder: flatbuffers.Builder, ADDRESS_COUNTRYOffset: flatbuffers.Offset): void;
    static addAddressRegion(builder: flatbuffers.Builder, ADDRESS_REGIONOffset: flatbuffers.Offset): void;
    static addAddressLocality(builder: flatbuffers.Builder, ADDRESS_LOCALITYOffset: flatbuffers.Offset): void;
    static addPostalCode(builder: flatbuffers.Builder, POSTAL_CODEOffset: flatbuffers.Offset): void;
    static addStreetAddress(builder: flatbuffers.Builder, STREET_ADDRESSOffset: flatbuffers.Offset): void;
    static addPostOfficeBoxNumber(builder: flatbuffers.Builder, POST_OFFICE_BOX_NUMBEROffset: flatbuffers.Offset): void;
    static endContactPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createContactPoint(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, CONTACT_TYPEOffset: flatbuffers.Offset, EMAILOffset: flatbuffers.Offset, TELEPHONEOffset: flatbuffers.Offset, CONTACT_OPTIONOffset: flatbuffers.Offset, AREA_SERVEDOffset: flatbuffers.Offset, AVAILABLE_LANGUAGEOffset: flatbuffers.Offset, ADDRESS_COUNTRYOffset: flatbuffers.Offset, ADDRESS_REGIONOffset: flatbuffers.Offset, ADDRESS_LOCALITYOffset: flatbuffers.Offset, POSTAL_CODEOffset: flatbuffers.Offset, STREET_ADDRESSOffset: flatbuffers.Offset, POST_OFFICE_BOX_NUMBEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ContactPointT;
    unpackTo(_o: ContactPointT): void;
}
export declare class ContactPointT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    CONTACT_TYPE: string | Uint8Array | null;
    EMAIL: string | Uint8Array | null;
    TELEPHONE: string | Uint8Array | null;
    CONTACT_OPTION: string | Uint8Array | null;
    AREA_SERVED: string | Uint8Array | null;
    AVAILABLE_LANGUAGE: string | Uint8Array | null;
    ADDRESS_COUNTRY: string | Uint8Array | null;
    ADDRESS_REGION: string | Uint8Array | null;
    ADDRESS_LOCALITY: string | Uint8Array | null;
    POSTAL_CODE: string | Uint8Array | null;
    STREET_ADDRESS: string | Uint8Array | null;
    POST_OFFICE_BOX_NUMBER: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, CONTACT_TYPE?: string | Uint8Array | null, EMAIL?: string | Uint8Array | null, TELEPHONE?: string | Uint8Array | null, CONTACT_OPTION?: string | Uint8Array | null, AREA_SERVED?: string | Uint8Array | null, AVAILABLE_LANGUAGE?: string | Uint8Array | null, ADDRESS_COUNTRY?: string | Uint8Array | null, ADDRESS_REGION?: string | Uint8Array | null, ADDRESS_LOCALITY?: string | Uint8Array | null, POSTAL_CODE?: string | Uint8Array | null, STREET_ADDRESS?: string | Uint8Array | null, POST_OFFICE_BOX_NUMBER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContactPoint.d.ts.map