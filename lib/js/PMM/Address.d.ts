import * as flatbuffers from 'flatbuffers';
/**
 * Represents a geographic address
 */
export declare class Address implements flatbuffers.IUnpackableObject<AddressT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Address;
    static getRootAsAddress(bb: flatbuffers.ByteBuffer, obj?: Address): Address;
    static getSizePrefixedRootAsAddress(bb: flatbuffers.ByteBuffer, obj?: Address): Address;
    /**
     * Country of the address
     */
    COUNTRY(): string | null;
    COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region of the address (e.g., state or province)
     */
    REGION(): string | null;
    REGION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Locality of the address (e.g., city or town)
     */
    LOCALITY(): string | null;
    LOCALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Postal code of the address
     */
    POSTAL_CODE(): string | null;
    POSTAL_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Street address
     */
    STREET(): string | null;
    STREET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Post office box number
     */
    POST_OFFICE_BOX_NUMBER(): string | null;
    POST_OFFICE_BOX_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAddress(builder: flatbuffers.Builder): void;
    static addCountry(builder: flatbuffers.Builder, COUNTRYOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static addLocality(builder: flatbuffers.Builder, LOCALITYOffset: flatbuffers.Offset): void;
    static addPostalCode(builder: flatbuffers.Builder, POSTAL_CODEOffset: flatbuffers.Offset): void;
    static addStreet(builder: flatbuffers.Builder, STREETOffset: flatbuffers.Offset): void;
    static addPostOfficeBoxNumber(builder: flatbuffers.Builder, POST_OFFICE_BOX_NUMBEROffset: flatbuffers.Offset): void;
    static endAddress(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAddress(builder: flatbuffers.Builder, COUNTRYOffset: flatbuffers.Offset, REGIONOffset: flatbuffers.Offset, LOCALITYOffset: flatbuffers.Offset, POSTAL_CODEOffset: flatbuffers.Offset, STREETOffset: flatbuffers.Offset, POST_OFFICE_BOX_NUMBEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AddressT;
    unpackTo(_o: AddressT): void;
}
export declare class AddressT implements flatbuffers.IGeneratedObject {
    COUNTRY: string | Uint8Array | null;
    REGION: string | Uint8Array | null;
    LOCALITY: string | Uint8Array | null;
    POSTAL_CODE: string | Uint8Array | null;
    STREET: string | Uint8Array | null;
    POST_OFFICE_BOX_NUMBER: string | Uint8Array | null;
    constructor(COUNTRY?: string | Uint8Array | null, REGION?: string | Uint8Array | null, LOCALITY?: string | Uint8Array | null, POSTAL_CODE?: string | Uint8Array | null, STREET?: string | Uint8Array | null, POST_OFFICE_BOX_NUMBER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Address.d.ts.map