// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { legacyCountryCode } from './legacyCountryCode.js';
/**
 * Legacy Country Code
 */
export class LCC {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsLCC(bb, obj) {
        return (obj || new LCC()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsLCC(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new LCC()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static bufferHasIdentifier(bb) {
        return bb.__has_identifier('$LCC');
    }
    OWNER() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : legacyCountryCode.AB;
    }
    static startLCC(builder) {
        builder.startObject(1);
    }
    static addOwner(builder, OWNER) {
        builder.addFieldInt8(0, OWNER, legacyCountryCode.AB);
    }
    static endLCC(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishLCCBuffer(builder, offset) {
        builder.finish(offset, '$LCC');
    }
    static finishSizePrefixedLCCBuffer(builder, offset) {
        builder.finish(offset, '$LCC', true);
    }
    static createLCC(builder, OWNER) {
        LCC.startLCC(builder);
        LCC.addOwner(builder, OWNER);
        return LCC.endLCC(builder);
    }
    unpack() {
        return new LCCT(this.OWNER());
    }
    unpackTo(_o) {
        _o.OWNER = this.OWNER();
    }
}
export class LCCT {
    constructor(OWNER = legacyCountryCode.AB) {
        this.OWNER = OWNER;
    }
    pack(builder) {
        return LCC.createLCC(builder, this.OWNER);
    }
}
