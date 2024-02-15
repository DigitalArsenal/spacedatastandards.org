import * as flatbuffers from 'flatbuffers';
/**
 * Basic information about an organization
 */
export declare class Organization implements flatbuffers.IUnpackableObject<OrganizationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Organization;
    static getRootAsOrganization(bb: flatbuffers.ByteBuffer, obj?: Organization): Organization;
    static getSizePrefixedRootAsOrganization(bb: flatbuffers.ByteBuffer, obj?: Organization): Organization;
    /**
     * Common name of the organization
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Legal name of the organization
     */
    LEGAL_NAME(): string | null;
    LEGAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOrganization(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addLegalName(builder: flatbuffers.Builder, LEGAL_NAMEOffset: flatbuffers.Offset): void;
    static endOrganization(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOrganization(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, LEGAL_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OrganizationT;
    unpackTo(_o: OrganizationT): void;
}
export declare class OrganizationT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    LEGAL_NAME: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, LEGAL_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Organization.d.ts.map