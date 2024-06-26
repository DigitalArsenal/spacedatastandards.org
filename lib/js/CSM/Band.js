// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { FrequencyRange } from './FrequencyRange.js';
/**
 * Table representing a frequency band with a name and frequency range
 */
export class Band {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsBand(bb, obj) {
        return (obj || new Band()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsBand(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Band()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * Frequency range of the band
     */
    FREQUENCY_RANGE(obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new FrequencyRange()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    static startBand(builder) {
        builder.startObject(2);
    }
    static addName(builder, NAMEOffset) {
        builder.addFieldOffset(0, NAMEOffset, 0);
    }
    static addFrequencyRange(builder, FREQUENCY_RANGEOffset) {
        builder.addFieldOffset(1, FREQUENCY_RANGEOffset, 0);
    }
    static endBand(builder) {
        const offset = builder.endObject();
        return offset;
    }
    unpack() {
        return new BandT(this.NAME(), (this.FREQUENCY_RANGE() !== null ? this.FREQUENCY_RANGE().unpack() : null));
    }
    unpackTo(_o) {
        _o.NAME = this.NAME();
        _o.FREQUENCY_RANGE = (this.FREQUENCY_RANGE() !== null ? this.FREQUENCY_RANGE().unpack() : null);
    }
}
export class BandT {
    constructor(NAME = null, FREQUENCY_RANGE = null) {
        this.NAME = NAME;
        this.FREQUENCY_RANGE = FREQUENCY_RANGE;
    }
    pack(builder) {
        const NAME = (this.NAME !== null ? builder.createString(this.NAME) : 0);
        const FREQUENCY_RANGE = (this.FREQUENCY_RANGE !== null ? this.FREQUENCY_RANGE.pack(builder) : 0);
        Band.startBand(builder);
        Band.addName(builder, NAME);
        Band.addFrequencyRange(builder, FREQUENCY_RANGE);
        return Band.endBand(builder);
    }
}
