// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { LCC } from './LCC.js';
export class LCCCOLLECTION {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsLCCCOLLECTION(bb, obj) {
        return (obj || new LCCCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsLCCCOLLECTION(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new LCCCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    RECORDS(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new LCC()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    recordsLength() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startLCCCOLLECTION(builder) {
        builder.startObject(1);
    }
    static addRecords(builder, RECORDSOffset) {
        builder.addFieldOffset(0, RECORDSOffset, 0);
    }
    static createRecordsVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startRecordsVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endLCCCOLLECTION(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createLCCCOLLECTION(builder, RECORDSOffset) {
        LCCCOLLECTION.startLCCCOLLECTION(builder);
        LCCCOLLECTION.addRecords(builder, RECORDSOffset);
        return LCCCOLLECTION.endLCCCOLLECTION(builder);
    }
    unpack() {
        return new LCCCOLLECTIONT(this.bb.createObjList(this.RECORDS.bind(this), this.recordsLength()));
    }
    unpackTo(_o) {
        _o.RECORDS = this.bb.createObjList(this.RECORDS.bind(this), this.recordsLength());
    }
}
export class LCCCOLLECTIONT {
    constructor(RECORDS = []) {
        this.RECORDS = RECORDS;
    }
    pack(builder) {
        const RECORDS = LCCCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));
        return LCCCOLLECTION.createLCCCOLLECTION(builder, RECORDS);
    }
}
