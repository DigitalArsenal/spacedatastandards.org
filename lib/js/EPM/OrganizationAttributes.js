// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
/**
 * Specific attributes for an Organization
 */
export class OrganizationAttributes {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsOrganizationAttributes(bb, obj) {
        return (obj || new OrganizationAttributes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsOrganizationAttributes(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new OrganizationAttributes()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    LEGAL_NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    static startOrganizationAttributes(builder) {
        builder.startObject(1);
    }
    static addLegalName(builder, LEGAL_NAMEOffset) {
        builder.addFieldOffset(0, LEGAL_NAMEOffset, 0);
    }
    static endOrganizationAttributes(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createOrganizationAttributes(builder, LEGAL_NAMEOffset) {
        OrganizationAttributes.startOrganizationAttributes(builder);
        OrganizationAttributes.addLegalName(builder, LEGAL_NAMEOffset);
        return OrganizationAttributes.endOrganizationAttributes(builder);
    }
    unpack() {
        return new OrganizationAttributesT(this.LEGAL_NAME());
    }
    unpackTo(_o) {
        _o.LEGAL_NAME = this.LEGAL_NAME();
    }
}
export class OrganizationAttributesT {
    constructor(LEGAL_NAME = null) {
        this.LEGAL_NAME = LEGAL_NAME;
    }
    pack(builder) {
        const LEGAL_NAME = (this.LEGAL_NAME !== null ? builder.createString(this.LEGAL_NAME) : 0);
        return OrganizationAttributes.createOrganizationAttributes(builder, LEGAL_NAME);
    }
}