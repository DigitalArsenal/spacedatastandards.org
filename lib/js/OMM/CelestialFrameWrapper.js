// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { CelestialFrame } from './CelestialFrame.js';
export class CelestialFrameWrapper {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsCelestialFrameWrapper(bb, obj) {
        return (obj || new CelestialFrameWrapper()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsCelestialFrameWrapper(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new CelestialFrameWrapper()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    frame() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : CelestialFrame.GCRF;
    }
    static startCelestialFrameWrapper(builder) {
        builder.startObject(1);
    }
    static addFrame(builder, frame) {
        builder.addFieldInt8(0, frame, CelestialFrame.GCRF);
    }
    static endCelestialFrameWrapper(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createCelestialFrameWrapper(builder, frame) {
        CelestialFrameWrapper.startCelestialFrameWrapper(builder);
        CelestialFrameWrapper.addFrame(builder, frame);
        return CelestialFrameWrapper.endCelestialFrameWrapper(builder);
    }
    unpack() {
        return new CelestialFrameWrapperT(this.frame());
    }
    unpackTo(_o) {
        _o.frame = this.frame();
    }
}
export class CelestialFrameWrapperT {
    constructor(frame = CelestialFrame.GCRF) {
        this.frame = frame;
    }
    pack(builder) {
        return CelestialFrameWrapper.createCelestialFrameWrapper(builder, this.frame);
    }
}
