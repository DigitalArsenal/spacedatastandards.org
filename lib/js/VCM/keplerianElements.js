// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { anomalyType } from './anomalyType.js';
/**
 * Keplerian Elements
 */
export class keplerianElements {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAskeplerianElements(bb, obj) {
        return (obj || new keplerianElements()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAskeplerianElements(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new keplerianElements()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    SEMI_MAJOR_AXIS() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    ECCENTRICITY() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    INCLINATION() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    RA_OF_ASC_NODE() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    ARG_OF_PERICENTER() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    ANOMALY_TYPE() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : anomalyType.TRUE_ANOMALY;
    }
    ANOMALY() {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    static startkeplerianElements(builder) {
        builder.startObject(7);
    }
    static addSemiMajorAxis(builder, SEMI_MAJOR_AXIS) {
        builder.addFieldFloat64(0, SEMI_MAJOR_AXIS, 0.0);
    }
    static addEccentricity(builder, ECCENTRICITY) {
        builder.addFieldFloat64(1, ECCENTRICITY, 0.0);
    }
    static addInclination(builder, INCLINATION) {
        builder.addFieldFloat64(2, INCLINATION, 0.0);
    }
    static addRaOfAscNode(builder, RA_OF_ASC_NODE) {
        builder.addFieldFloat64(3, RA_OF_ASC_NODE, 0.0);
    }
    static addArgOfPericenter(builder, ARG_OF_PERICENTER) {
        builder.addFieldFloat64(4, ARG_OF_PERICENTER, 0.0);
    }
    static addAnomalyType(builder, ANOMALY_TYPE) {
        builder.addFieldInt8(5, ANOMALY_TYPE, anomalyType.TRUE_ANOMALY);
    }
    static addAnomaly(builder, ANOMALY) {
        builder.addFieldFloat64(6, ANOMALY, 0.0);
    }
    static endkeplerianElements(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createkeplerianElements(builder, SEMI_MAJOR_AXIS, ECCENTRICITY, INCLINATION, RA_OF_ASC_NODE, ARG_OF_PERICENTER, ANOMALY_TYPE, ANOMALY) {
        keplerianElements.startkeplerianElements(builder);
        keplerianElements.addSemiMajorAxis(builder, SEMI_MAJOR_AXIS);
        keplerianElements.addEccentricity(builder, ECCENTRICITY);
        keplerianElements.addInclination(builder, INCLINATION);
        keplerianElements.addRaOfAscNode(builder, RA_OF_ASC_NODE);
        keplerianElements.addArgOfPericenter(builder, ARG_OF_PERICENTER);
        keplerianElements.addAnomalyType(builder, ANOMALY_TYPE);
        keplerianElements.addAnomaly(builder, ANOMALY);
        return keplerianElements.endkeplerianElements(builder);
    }
    unpack() {
        return new keplerianElementsT(this.SEMI_MAJOR_AXIS(), this.ECCENTRICITY(), this.INCLINATION(), this.RA_OF_ASC_NODE(), this.ARG_OF_PERICENTER(), this.ANOMALY_TYPE(), this.ANOMALY());
    }
    unpackTo(_o) {
        _o.SEMI_MAJOR_AXIS = this.SEMI_MAJOR_AXIS();
        _o.ECCENTRICITY = this.ECCENTRICITY();
        _o.INCLINATION = this.INCLINATION();
        _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE();
        _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER();
        _o.ANOMALY_TYPE = this.ANOMALY_TYPE();
        _o.ANOMALY = this.ANOMALY();
    }
}
export class keplerianElementsT {
    constructor(SEMI_MAJOR_AXIS = 0.0, ECCENTRICITY = 0.0, INCLINATION = 0.0, RA_OF_ASC_NODE = 0.0, ARG_OF_PERICENTER = 0.0, ANOMALY_TYPE = anomalyType.TRUE_ANOMALY, ANOMALY = 0.0) {
        this.SEMI_MAJOR_AXIS = SEMI_MAJOR_AXIS;
        this.ECCENTRICITY = ECCENTRICITY;
        this.INCLINATION = INCLINATION;
        this.RA_OF_ASC_NODE = RA_OF_ASC_NODE;
        this.ARG_OF_PERICENTER = ARG_OF_PERICENTER;
        this.ANOMALY_TYPE = ANOMALY_TYPE;
        this.ANOMALY = ANOMALY;
    }
    pack(builder) {
        return keplerianElements.createkeplerianElements(builder, this.SEMI_MAJOR_AXIS, this.ECCENTRICITY, this.INCLINATION, this.RA_OF_ASC_NODE, this.ARG_OF_PERICENTER, this.ANOMALY_TYPE, this.ANOMALY);
    }
}
