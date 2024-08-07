// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
/**
 * Sustainer Details
 */
export class SUSTAINER {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsSUSTAINER(bb, obj) {
        return (obj || new SUSTAINER()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsSUSTAINER(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SUSTAINER()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    SUSTAINER_NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * Thrust Produced by the Sustainer (in Newtons)
     */
    THRUST() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Duration of the Burn (in Seconds)
     */
    BURN_DURATION() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    static startSUSTAINER(builder) {
        builder.startObject(3);
    }
    static addSustainerName(builder, SUSTAINER_NAMEOffset) {
        builder.addFieldOffset(0, SUSTAINER_NAMEOffset, 0);
    }
    static addThrust(builder, THRUST) {
        builder.addFieldFloat64(1, THRUST, 0.0);
    }
    static addBurnDuration(builder, BURN_DURATION) {
        builder.addFieldFloat64(2, BURN_DURATION, 0.0);
    }
    static endSUSTAINER(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createSUSTAINER(builder, SUSTAINER_NAMEOffset, THRUST, BURN_DURATION) {
        SUSTAINER.startSUSTAINER(builder);
        SUSTAINER.addSustainerName(builder, SUSTAINER_NAMEOffset);
        SUSTAINER.addThrust(builder, THRUST);
        SUSTAINER.addBurnDuration(builder, BURN_DURATION);
        return SUSTAINER.endSUSTAINER(builder);
    }
    unpack() {
        return new SUSTAINERT(this.SUSTAINER_NAME(), this.THRUST(), this.BURN_DURATION());
    }
    unpackTo(_o) {
        _o.SUSTAINER_NAME = this.SUSTAINER_NAME();
        _o.THRUST = this.THRUST();
        _o.BURN_DURATION = this.BURN_DURATION();
    }
}
export class SUSTAINERT {
    constructor(SUSTAINER_NAME = null, THRUST = 0.0, BURN_DURATION = 0.0) {
        this.SUSTAINER_NAME = SUSTAINER_NAME;
        this.THRUST = THRUST;
        this.BURN_DURATION = BURN_DURATION;
    }
    pack(builder) {
        const SUSTAINER_NAME = (this.SUSTAINER_NAME !== null ? builder.createString(this.SUSTAINER_NAME) : 0);
        return SUSTAINER.createSUSTAINER(builder, SUSTAINER_NAME, this.THRUST, this.BURN_DURATION);
    }
}
