// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
import { meanElementTheory } from './meanElementTheory.js';
export class MET {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsMET(bb, obj) {
        return (obj || new MET()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsMET(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new MET()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static bufferHasIdentifier(bb) {
        return bb.__has_identifier('$MET');
    }
    MEAN_ELEMENT_THEORY() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : meanElementTheory.SGP4;
    }
    static startMET(builder) {
        builder.startObject(1);
    }
    static addMeanElementTheory(builder, MEAN_ELEMENT_THEORY) {
        builder.addFieldInt8(0, MEAN_ELEMENT_THEORY, meanElementTheory.SGP4);
    }
    static endMET(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishMETBuffer(builder, offset) {
        builder.finish(offset, '$MET');
    }
    static finishSizePrefixedMETBuffer(builder, offset) {
        builder.finish(offset, '$MET', true);
    }
    static createMET(builder, MEAN_ELEMENT_THEORY) {
        MET.startMET(builder);
        MET.addMeanElementTheory(builder, MEAN_ELEMENT_THEORY);
        return MET.endMET(builder);
    }
    unpack() {
        return new METT(this.MEAN_ELEMENT_THEORY());
    }
    unpackTo(_o) {
        _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY();
    }
}
export class METT {
    constructor(MEAN_ELEMENT_THEORY = meanElementTheory.SGP4) {
        this.MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;
    }
    pack(builder) {
        return MET.createMET(builder, this.MEAN_ELEMENT_THEORY);
    }
}