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
    country(): string | null;
    country(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region of the address (e.g., state or province)
     */
    region(): string | null;
    region(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Locality of the address (e.g., city or town)
     */
    locality(): string | null;
    locality(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Postal code of the address
     */
    postalCode(): string | null;
    postalCode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Street address
     */
    street(): string | null;
    street(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Post office box number
     */
    postOfficeBoxNumber(): string | null;
    postOfficeBoxNumber(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAddress(builder: flatbuffers.Builder): void;
    static addCountry(builder: flatbuffers.Builder, countryOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, regionOffset: flatbuffers.Offset): void;
    static addLocality(builder: flatbuffers.Builder, localityOffset: flatbuffers.Offset): void;
    static addPostalCode(builder: flatbuffers.Builder, postalCodeOffset: flatbuffers.Offset): void;
    static addStreet(builder: flatbuffers.Builder, streetOffset: flatbuffers.Offset): void;
    static addPostOfficeBoxNumber(builder: flatbuffers.Builder, postOfficeBoxNumberOffset: flatbuffers.Offset): void;
    static endAddress(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAddress(builder: flatbuffers.Builder, countryOffset: flatbuffers.Offset, regionOffset: flatbuffers.Offset, localityOffset: flatbuffers.Offset, postalCodeOffset: flatbuffers.Offset, streetOffset: flatbuffers.Offset, postOfficeBoxNumberOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AddressT;
    unpackTo(_o: AddressT): void;
}
export declare class AddressT implements flatbuffers.IGeneratedObject {
    country: string | Uint8Array | null;
    region: string | Uint8Array | null;
    locality: string | Uint8Array | null;
    postalCode: string | Uint8Array | null;
    street: string | Uint8Array | null;
    postOfficeBoxNumber: string | Uint8Array | null;
    constructor(country?: string | Uint8Array | null, region?: string | Uint8Array | null, locality?: string | Uint8Array | null, postalCode?: string | Uint8Array | null, street?: string | Uint8Array | null, postOfficeBoxNumber?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=address.d.ts.map