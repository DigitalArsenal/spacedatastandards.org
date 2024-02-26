import * as flatbuffers from 'flatbuffers';
/**
 * Specific attributes for an Organization
 */
export declare class OrganizationAttributes implements flatbuffers.IUnpackableObject<OrganizationAttributesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OrganizationAttributes;
    static getRootAsOrganizationAttributes(bb: flatbuffers.ByteBuffer, obj?: OrganizationAttributes): OrganizationAttributes;
    static getSizePrefixedRootAsOrganizationAttributes(bb: flatbuffers.ByteBuffer, obj?: OrganizationAttributes): OrganizationAttributes;
    /**
     * Legal name of the organization
     */
    LEGAL_NAME(): string | null;
    LEGAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOrganizationAttributes(builder: flatbuffers.Builder): void;
    static addLegalName(builder: flatbuffers.Builder, LEGAL_NAMEOffset: flatbuffers.Offset): void;
    static endOrganizationAttributes(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOrganizationAttributes(builder: flatbuffers.Builder, LEGAL_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OrganizationAttributesT;
    unpackTo(_o: OrganizationAttributesT): void;
}
export declare class OrganizationAttributesT implements flatbuffers.IGeneratedObject {
    LEGAL_NAME: string | Uint8Array | null;
    constructor(LEGAL_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OrganizationAttributes.d.ts.map