// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
import { ephemerisType } from './ephemerisType.js';
import { manCovRefFrame } from './manCovRefFrame.js';
import { meanElementTheory } from './meanElementTheory.js';
import { referenceFrame } from './referenceFrame.js';
import { timeSystem } from './timeSystem.js';
/**
 * Orbit Mean Elements Message
 */
export class OMM {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsOMM(bb, obj) {
        return (obj || new OMM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsOMM(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new OMM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static bufferHasIdentifier(bb) {
        return bb.__has_identifier('$OMM');
    }
    /**
     * OMM Header
     */
    CCSDS_OMM_VERS() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    CREATION_DATE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    ORIGINATOR(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    OBJECT_NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    OBJECT_ID(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    CENTER_NAME(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    REF_FRAME() {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : referenceFrame.TEME;
    }
    REF_FRAME_EPOCH(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    TIME_SYSTEM() {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : timeSystem.UTC;
    }
    /**
     * Description of the Mean Element Theory. (SGP4,DSST,USM)
     */
    MEAN_ELEMENT_THEORY() {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : meanElementTheory.SGP4;
    }
    COMMENT(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    EPOCH(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * Semi-major axis in km or mean motion in rev/day
     */
    SEMI_MAJOR_AXIS() {
        const offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Mean motion
     */
    MEAN_MOTION() {
        const offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Eccentricity
     */
    ECCENTRICITY() {
        const offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Inclination
     */
    INCLINATION() {
        const offset = this.bb.__offset(this.bb_pos, 34);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Right ascension of ascending node
     */
    RA_OF_ASC_NODE() {
        const offset = this.bb.__offset(this.bb_pos, 36);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Argument of pericenter
     */
    ARG_OF_PERICENTER() {
        const offset = this.bb.__offset(this.bb_pos, 38);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Mean anomaly
     */
    MEAN_ANOMALY() {
        const offset = this.bb.__offset(this.bb_pos, 40);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Gravitational Coefficient (Gravitational Constant x Central Mass)
     */
    GM() {
        const offset = this.bb.__offset(this.bb_pos, 42);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Spacecraft Parameters
     * S/C Mass
     */
    MASS() {
        const offset = this.bb.__offset(this.bb_pos, 44);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Solar Radiation Pressure Area (AR) m**2
     */
    SOLAR_RAD_AREA() {
        const offset = this.bb.__offset(this.bb_pos, 46);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Solar Radiation Pressure Coefficient (CR)
     */
    SOLAR_RAD_COEFF() {
        const offset = this.bb.__offset(this.bb_pos, 48);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Drag Area (AD) m**2
     */
    DRAG_AREA() {
        const offset = this.bb.__offset(this.bb_pos, 50);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Drag Coefficient (CD)
     */
    DRAG_COEFF() {
        const offset = this.bb.__offset(this.bb_pos, 52);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * TLE Related Parameters (This section is only required if MEAN_ELEMENT_THEORY=SGP/SGP4)
     * Default value = 0
     */
    EPHEMERIS_TYPE() {
        const offset = this.bb.__offset(this.bb_pos, 54);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : ephemerisType.SGP4;
    }
    CLASSIFICATION_TYPE(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 56);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * NORAD Catalog Number (Satellite Number) an integer
     */
    NORAD_CAT_ID() {
        const offset = this.bb.__offset(this.bb_pos, 58);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    /**
     * Element set number for this satellite
     */
    ELEMENT_SET_NO() {
        const offset = this.bb.__offset(this.bb_pos, 60);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    /**
     * Revolution Number
     */
    REV_AT_EPOCH() {
        const offset = this.bb.__offset(this.bb_pos, 62);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
     */
    BSTAR() {
        const offset = this.bb.__offset(this.bb_pos, 64);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * First Time Derivative of the Mean Motion
     */
    MEAN_MOTION_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 66);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Second Time Derivative of Mean Motion
     */
    MEAN_MOTION_DDOT() {
        const offset = this.bb.__offset(this.bb_pos, 68);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Position/Velocity Covariance Matrix
     * Reference frame for the covariance matrix
     */
    COV_REF_FRAME() {
        const offset = this.bb.__offset(this.bb_pos, 70);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : manCovRefFrame.RSW;
    }
    /**
     * Covariance matrix [1,1] km**2
     */
    CX_X() {
        const offset = this.bb.__offset(this.bb_pos, 72);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [2,1] km**2
     */
    CY_X() {
        const offset = this.bb.__offset(this.bb_pos, 74);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [2,2] km**2
     */
    CY_Y() {
        const offset = this.bb.__offset(this.bb_pos, 76);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [3,1] km**2
     */
    CZ_X() {
        const offset = this.bb.__offset(this.bb_pos, 78);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [3,2] km**2
     */
    CZ_Y() {
        const offset = this.bb.__offset(this.bb_pos, 80);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [3,3] km**2
     */
    CZ_Z() {
        const offset = this.bb.__offset(this.bb_pos, 82);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [4,1] km**2/s
     */
    CX_DOT_X() {
        const offset = this.bb.__offset(this.bb_pos, 84);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [4,2] km**2/s
     */
    CX_DOT_Y() {
        const offset = this.bb.__offset(this.bb_pos, 86);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [4,3] km**2/s
     */
    CX_DOT_Z() {
        const offset = this.bb.__offset(this.bb_pos, 88);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [4,4] km**2/s**2
     */
    CX_DOT_X_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 90);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [5,1] km**2/s
     */
    CY_DOT_X() {
        const offset = this.bb.__offset(this.bb_pos, 92);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [5,2] km**2/s
     */
    CY_DOT_Y() {
        const offset = this.bb.__offset(this.bb_pos, 94);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [5,3] km**2/s
     */
    CY_DOT_Z() {
        const offset = this.bb.__offset(this.bb_pos, 96);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [5,4] km**2/s**2
     */
    CY_DOT_X_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 98);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [5,5] km**2/s**2
     */
    CY_DOT_Y_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 100);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,1] km**2/s
     */
    CZ_DOT_X() {
        const offset = this.bb.__offset(this.bb_pos, 102);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,2] km**2/s
     */
    CZ_DOT_Y() {
        const offset = this.bb.__offset(this.bb_pos, 104);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,3] km**2/s
     */
    CZ_DOT_Z() {
        const offset = this.bb.__offset(this.bb_pos, 106);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,4] km**2/s**2
     */
    CZ_DOT_X_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 108);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,5] km**2/s**2
     */
    CZ_DOT_Y_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 110);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * Covariance matrix [6,6] km**2/s**2
     */
    CZ_DOT_Z_DOT() {
        const offset = this.bb.__offset(this.bb_pos, 112);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_BIP_0044_TYPE() {
        const offset = this.bb.__offset(this.bb_pos, 114);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    USER_DEFINED_OBJECT_DESIGNATOR(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 116);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    USER_DEFINED_EARTH_MODEL(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 118);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_EPOCH_TIMESTAMP() {
        const offset = this.bb.__offset(this.bb_pos, 120);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_MICROSECONDS() {
        const offset = this.bb.__offset(this.bb_pos, 122);
        return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
    }
    static startOMM(builder) {
        builder.startObject(60);
    }
    static addCcsdsOmmVers(builder, CCSDS_OMM_VERS) {
        builder.addFieldFloat64(0, CCSDS_OMM_VERS, 0.0);
    }
    static addCreationDate(builder, CREATION_DATEOffset) {
        builder.addFieldOffset(1, CREATION_DATEOffset, 0);
    }
    static addOriginator(builder, ORIGINATOROffset) {
        builder.addFieldOffset(2, ORIGINATOROffset, 0);
    }
    static addObjectName(builder, OBJECT_NAMEOffset) {
        builder.addFieldOffset(3, OBJECT_NAMEOffset, 0);
    }
    static addObjectId(builder, OBJECT_IDOffset) {
        builder.addFieldOffset(4, OBJECT_IDOffset, 0);
    }
    static addCenterName(builder, CENTER_NAMEOffset) {
        builder.addFieldOffset(5, CENTER_NAMEOffset, 0);
    }
    static addRefFrame(builder, REF_FRAME) {
        builder.addFieldInt8(6, REF_FRAME, referenceFrame.TEME);
    }
    static addRefFrameEpoch(builder, REF_FRAME_EPOCHOffset) {
        builder.addFieldOffset(7, REF_FRAME_EPOCHOffset, 0);
    }
    static addTimeSystem(builder, TIME_SYSTEM) {
        builder.addFieldInt8(8, TIME_SYSTEM, timeSystem.UTC);
    }
    static addMeanElementTheory(builder, MEAN_ELEMENT_THEORY) {
        builder.addFieldInt8(9, MEAN_ELEMENT_THEORY, meanElementTheory.SGP4);
    }
    static addComment(builder, COMMENTOffset) {
        builder.addFieldOffset(10, COMMENTOffset, 0);
    }
    static addEpoch(builder, EPOCHOffset) {
        builder.addFieldOffset(11, EPOCHOffset, 0);
    }
    static addSemiMajorAxis(builder, SEMI_MAJOR_AXIS) {
        builder.addFieldFloat64(12, SEMI_MAJOR_AXIS, 0.0);
    }
    static addMeanMotion(builder, MEAN_MOTION) {
        builder.addFieldFloat64(13, MEAN_MOTION, 0.0);
    }
    static addEccentricity(builder, ECCENTRICITY) {
        builder.addFieldFloat64(14, ECCENTRICITY, 0.0);
    }
    static addInclination(builder, INCLINATION) {
        builder.addFieldFloat64(15, INCLINATION, 0.0);
    }
    static addRaOfAscNode(builder, RA_OF_ASC_NODE) {
        builder.addFieldFloat64(16, RA_OF_ASC_NODE, 0.0);
    }
    static addArgOfPericenter(builder, ARG_OF_PERICENTER) {
        builder.addFieldFloat64(17, ARG_OF_PERICENTER, 0.0);
    }
    static addMeanAnomaly(builder, MEAN_ANOMALY) {
        builder.addFieldFloat64(18, MEAN_ANOMALY, 0.0);
    }
    static addGm(builder, GM) {
        builder.addFieldFloat64(19, GM, 0.0);
    }
    static addMass(builder, MASS) {
        builder.addFieldFloat64(20, MASS, 0.0);
    }
    static addSolarRadArea(builder, SOLAR_RAD_AREA) {
        builder.addFieldFloat64(21, SOLAR_RAD_AREA, 0.0);
    }
    static addSolarRadCoeff(builder, SOLAR_RAD_COEFF) {
        builder.addFieldFloat64(22, SOLAR_RAD_COEFF, 0.0);
    }
    static addDragArea(builder, DRAG_AREA) {
        builder.addFieldFloat64(23, DRAG_AREA, 0.0);
    }
    static addDragCoeff(builder, DRAG_COEFF) {
        builder.addFieldFloat64(24, DRAG_COEFF, 0.0);
    }
    static addEphemerisType(builder, EPHEMERIS_TYPE) {
        builder.addFieldInt8(25, EPHEMERIS_TYPE, ephemerisType.SGP4);
    }
    static addClassificationType(builder, CLASSIFICATION_TYPEOffset) {
        builder.addFieldOffset(26, CLASSIFICATION_TYPEOffset, 0);
    }
    static addNoradCatId(builder, NORAD_CAT_ID) {
        builder.addFieldInt32(27, NORAD_CAT_ID, 0);
    }
    static addElementSetNo(builder, ELEMENT_SET_NO) {
        builder.addFieldInt32(28, ELEMENT_SET_NO, 0);
    }
    static addRevAtEpoch(builder, REV_AT_EPOCH) {
        builder.addFieldFloat64(29, REV_AT_EPOCH, 0.0);
    }
    static addBstar(builder, BSTAR) {
        builder.addFieldFloat64(30, BSTAR, 0.0);
    }
    static addMeanMotionDot(builder, MEAN_MOTION_DOT) {
        builder.addFieldFloat64(31, MEAN_MOTION_DOT, 0.0);
    }
    static addMeanMotionDdot(builder, MEAN_MOTION_DDOT) {
        builder.addFieldFloat64(32, MEAN_MOTION_DDOT, 0.0);
    }
    static addCovRefFrame(builder, COV_REF_FRAME) {
        builder.addFieldInt8(33, COV_REF_FRAME, manCovRefFrame.RSW);
    }
    static addCxX(builder, CX_X) {
        builder.addFieldFloat64(34, CX_X, 0.0);
    }
    static addCyX(builder, CY_X) {
        builder.addFieldFloat64(35, CY_X, 0.0);
    }
    static addCyY(builder, CY_Y) {
        builder.addFieldFloat64(36, CY_Y, 0.0);
    }
    static addCzX(builder, CZ_X) {
        builder.addFieldFloat64(37, CZ_X, 0.0);
    }
    static addCzY(builder, CZ_Y) {
        builder.addFieldFloat64(38, CZ_Y, 0.0);
    }
    static addCzZ(builder, CZ_Z) {
        builder.addFieldFloat64(39, CZ_Z, 0.0);
    }
    static addCxDotX(builder, CX_DOT_X) {
        builder.addFieldFloat64(40, CX_DOT_X, 0.0);
    }
    static addCxDotY(builder, CX_DOT_Y) {
        builder.addFieldFloat64(41, CX_DOT_Y, 0.0);
    }
    static addCxDotZ(builder, CX_DOT_Z) {
        builder.addFieldFloat64(42, CX_DOT_Z, 0.0);
    }
    static addCxDotXDot(builder, CX_DOT_X_DOT) {
        builder.addFieldFloat64(43, CX_DOT_X_DOT, 0.0);
    }
    static addCyDotX(builder, CY_DOT_X) {
        builder.addFieldFloat64(44, CY_DOT_X, 0.0);
    }
    static addCyDotY(builder, CY_DOT_Y) {
        builder.addFieldFloat64(45, CY_DOT_Y, 0.0);
    }
    static addCyDotZ(builder, CY_DOT_Z) {
        builder.addFieldFloat64(46, CY_DOT_Z, 0.0);
    }
    static addCyDotXDot(builder, CY_DOT_X_DOT) {
        builder.addFieldFloat64(47, CY_DOT_X_DOT, 0.0);
    }
    static addCyDotYDot(builder, CY_DOT_Y_DOT) {
        builder.addFieldFloat64(48, CY_DOT_Y_DOT, 0.0);
    }
    static addCzDotX(builder, CZ_DOT_X) {
        builder.addFieldFloat64(49, CZ_DOT_X, 0.0);
    }
    static addCzDotY(builder, CZ_DOT_Y) {
        builder.addFieldFloat64(50, CZ_DOT_Y, 0.0);
    }
    static addCzDotZ(builder, CZ_DOT_Z) {
        builder.addFieldFloat64(51, CZ_DOT_Z, 0.0);
    }
    static addCzDotXDot(builder, CZ_DOT_X_DOT) {
        builder.addFieldFloat64(52, CZ_DOT_X_DOT, 0.0);
    }
    static addCzDotYDot(builder, CZ_DOT_Y_DOT) {
        builder.addFieldFloat64(53, CZ_DOT_Y_DOT, 0.0);
    }
    static addCzDotZDot(builder, CZ_DOT_Z_DOT) {
        builder.addFieldFloat64(54, CZ_DOT_Z_DOT, 0.0);
    }
    static addUserDefinedBip0044Type(builder, USER_DEFINED_BIP_0044_TYPE) {
        builder.addFieldInt32(55, USER_DEFINED_BIP_0044_TYPE, 0);
    }
    static addUserDefinedObjectDesignator(builder, USER_DEFINED_OBJECT_DESIGNATOROffset) {
        builder.addFieldOffset(56, USER_DEFINED_OBJECT_DESIGNATOROffset, 0);
    }
    static addUserDefinedEarthModel(builder, USER_DEFINED_EARTH_MODELOffset) {
        builder.addFieldOffset(57, USER_DEFINED_EARTH_MODELOffset, 0);
    }
    static addUserDefinedEpochTimestamp(builder, USER_DEFINED_EPOCH_TIMESTAMP) {
        builder.addFieldFloat64(58, USER_DEFINED_EPOCH_TIMESTAMP, 0.0);
    }
    static addUserDefinedMicroseconds(builder, USER_DEFINED_MICROSECONDS) {
        builder.addFieldFloat64(59, USER_DEFINED_MICROSECONDS, 0.0);
    }
    static endOMM(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishOMMBuffer(builder, offset) {
        builder.finish(offset, '$OMM');
    }
    static finishSizePrefixedOMMBuffer(builder, offset) {
        builder.finish(offset, '$OMM', true);
    }
    static createOMM(builder, CCSDS_OMM_VERS, CREATION_DATEOffset, ORIGINATOROffset, OBJECT_NAMEOffset, OBJECT_IDOffset, CENTER_NAMEOffset, REF_FRAME, REF_FRAME_EPOCHOffset, TIME_SYSTEM, MEAN_ELEMENT_THEORY, COMMENTOffset, EPOCHOffset, SEMI_MAJOR_AXIS, MEAN_MOTION, ECCENTRICITY, INCLINATION, RA_OF_ASC_NODE, ARG_OF_PERICENTER, MEAN_ANOMALY, GM, MASS, SOLAR_RAD_AREA, SOLAR_RAD_COEFF, DRAG_AREA, DRAG_COEFF, EPHEMERIS_TYPE, CLASSIFICATION_TYPEOffset, NORAD_CAT_ID, ELEMENT_SET_NO, REV_AT_EPOCH, BSTAR, MEAN_MOTION_DOT, MEAN_MOTION_DDOT, COV_REF_FRAME, CX_X, CY_X, CY_Y, CZ_X, CZ_Y, CZ_Z, CX_DOT_X, CX_DOT_Y, CX_DOT_Z, CX_DOT_X_DOT, CY_DOT_X, CY_DOT_Y, CY_DOT_Z, CY_DOT_X_DOT, CY_DOT_Y_DOT, CZ_DOT_X, CZ_DOT_Y, CZ_DOT_Z, CZ_DOT_X_DOT, CZ_DOT_Y_DOT, CZ_DOT_Z_DOT, USER_DEFINED_BIP_0044_TYPE, USER_DEFINED_OBJECT_DESIGNATOROffset, USER_DEFINED_EARTH_MODELOffset, USER_DEFINED_EPOCH_TIMESTAMP, USER_DEFINED_MICROSECONDS) {
        OMM.startOMM(builder);
        OMM.addCcsdsOmmVers(builder, CCSDS_OMM_VERS);
        OMM.addCreationDate(builder, CREATION_DATEOffset);
        OMM.addOriginator(builder, ORIGINATOROffset);
        OMM.addObjectName(builder, OBJECT_NAMEOffset);
        OMM.addObjectId(builder, OBJECT_IDOffset);
        OMM.addCenterName(builder, CENTER_NAMEOffset);
        OMM.addRefFrame(builder, REF_FRAME);
        OMM.addRefFrameEpoch(builder, REF_FRAME_EPOCHOffset);
        OMM.addTimeSystem(builder, TIME_SYSTEM);
        OMM.addMeanElementTheory(builder, MEAN_ELEMENT_THEORY);
        OMM.addComment(builder, COMMENTOffset);
        OMM.addEpoch(builder, EPOCHOffset);
        OMM.addSemiMajorAxis(builder, SEMI_MAJOR_AXIS);
        OMM.addMeanMotion(builder, MEAN_MOTION);
        OMM.addEccentricity(builder, ECCENTRICITY);
        OMM.addInclination(builder, INCLINATION);
        OMM.addRaOfAscNode(builder, RA_OF_ASC_NODE);
        OMM.addArgOfPericenter(builder, ARG_OF_PERICENTER);
        OMM.addMeanAnomaly(builder, MEAN_ANOMALY);
        OMM.addGm(builder, GM);
        OMM.addMass(builder, MASS);
        OMM.addSolarRadArea(builder, SOLAR_RAD_AREA);
        OMM.addSolarRadCoeff(builder, SOLAR_RAD_COEFF);
        OMM.addDragArea(builder, DRAG_AREA);
        OMM.addDragCoeff(builder, DRAG_COEFF);
        OMM.addEphemerisType(builder, EPHEMERIS_TYPE);
        OMM.addClassificationType(builder, CLASSIFICATION_TYPEOffset);
        OMM.addNoradCatId(builder, NORAD_CAT_ID);
        OMM.addElementSetNo(builder, ELEMENT_SET_NO);
        OMM.addRevAtEpoch(builder, REV_AT_EPOCH);
        OMM.addBstar(builder, BSTAR);
        OMM.addMeanMotionDot(builder, MEAN_MOTION_DOT);
        OMM.addMeanMotionDdot(builder, MEAN_MOTION_DDOT);
        OMM.addCovRefFrame(builder, COV_REF_FRAME);
        OMM.addCxX(builder, CX_X);
        OMM.addCyX(builder, CY_X);
        OMM.addCyY(builder, CY_Y);
        OMM.addCzX(builder, CZ_X);
        OMM.addCzY(builder, CZ_Y);
        OMM.addCzZ(builder, CZ_Z);
        OMM.addCxDotX(builder, CX_DOT_X);
        OMM.addCxDotY(builder, CX_DOT_Y);
        OMM.addCxDotZ(builder, CX_DOT_Z);
        OMM.addCxDotXDot(builder, CX_DOT_X_DOT);
        OMM.addCyDotX(builder, CY_DOT_X);
        OMM.addCyDotY(builder, CY_DOT_Y);
        OMM.addCyDotZ(builder, CY_DOT_Z);
        OMM.addCyDotXDot(builder, CY_DOT_X_DOT);
        OMM.addCyDotYDot(builder, CY_DOT_Y_DOT);
        OMM.addCzDotX(builder, CZ_DOT_X);
        OMM.addCzDotY(builder, CZ_DOT_Y);
        OMM.addCzDotZ(builder, CZ_DOT_Z);
        OMM.addCzDotXDot(builder, CZ_DOT_X_DOT);
        OMM.addCzDotYDot(builder, CZ_DOT_Y_DOT);
        OMM.addCzDotZDot(builder, CZ_DOT_Z_DOT);
        OMM.addUserDefinedBip0044Type(builder, USER_DEFINED_BIP_0044_TYPE);
        OMM.addUserDefinedObjectDesignator(builder, USER_DEFINED_OBJECT_DESIGNATOROffset);
        OMM.addUserDefinedEarthModel(builder, USER_DEFINED_EARTH_MODELOffset);
        OMM.addUserDefinedEpochTimestamp(builder, USER_DEFINED_EPOCH_TIMESTAMP);
        OMM.addUserDefinedMicroseconds(builder, USER_DEFINED_MICROSECONDS);
        return OMM.endOMM(builder);
    }
    unpack() {
        return new OMMT(this.CCSDS_OMM_VERS(), this.CREATION_DATE(), this.ORIGINATOR(), this.OBJECT_NAME(), this.OBJECT_ID(), this.CENTER_NAME(), this.REF_FRAME(), this.REF_FRAME_EPOCH(), this.TIME_SYSTEM(), this.MEAN_ELEMENT_THEORY(), this.COMMENT(), this.EPOCH(), this.SEMI_MAJOR_AXIS(), this.MEAN_MOTION(), this.ECCENTRICITY(), this.INCLINATION(), this.RA_OF_ASC_NODE(), this.ARG_OF_PERICENTER(), this.MEAN_ANOMALY(), this.GM(), this.MASS(), this.SOLAR_RAD_AREA(), this.SOLAR_RAD_COEFF(), this.DRAG_AREA(), this.DRAG_COEFF(), this.EPHEMERIS_TYPE(), this.CLASSIFICATION_TYPE(), this.NORAD_CAT_ID(), this.ELEMENT_SET_NO(), this.REV_AT_EPOCH(), this.BSTAR(), this.MEAN_MOTION_DOT(), this.MEAN_MOTION_DDOT(), this.COV_REF_FRAME(), this.CX_X(), this.CY_X(), this.CY_Y(), this.CZ_X(), this.CZ_Y(), this.CZ_Z(), this.CX_DOT_X(), this.CX_DOT_Y(), this.CX_DOT_Z(), this.CX_DOT_X_DOT(), this.CY_DOT_X(), this.CY_DOT_Y(), this.CY_DOT_Z(), this.CY_DOT_X_DOT(), this.CY_DOT_Y_DOT(), this.CZ_DOT_X(), this.CZ_DOT_Y(), this.CZ_DOT_Z(), this.CZ_DOT_X_DOT(), this.CZ_DOT_Y_DOT(), this.CZ_DOT_Z_DOT(), this.USER_DEFINED_BIP_0044_TYPE(), this.USER_DEFINED_OBJECT_DESIGNATOR(), this.USER_DEFINED_EARTH_MODEL(), this.USER_DEFINED_EPOCH_TIMESTAMP(), this.USER_DEFINED_MICROSECONDS());
    }
    unpackTo(_o) {
        _o.CCSDS_OMM_VERS = this.CCSDS_OMM_VERS();
        _o.CREATION_DATE = this.CREATION_DATE();
        _o.ORIGINATOR = this.ORIGINATOR();
        _o.OBJECT_NAME = this.OBJECT_NAME();
        _o.OBJECT_ID = this.OBJECT_ID();
        _o.CENTER_NAME = this.CENTER_NAME();
        _o.REF_FRAME = this.REF_FRAME();
        _o.REF_FRAME_EPOCH = this.REF_FRAME_EPOCH();
        _o.TIME_SYSTEM = this.TIME_SYSTEM();
        _o.MEAN_ELEMENT_THEORY = this.MEAN_ELEMENT_THEORY();
        _o.COMMENT = this.COMMENT();
        _o.EPOCH = this.EPOCH();
        _o.SEMI_MAJOR_AXIS = this.SEMI_MAJOR_AXIS();
        _o.MEAN_MOTION = this.MEAN_MOTION();
        _o.ECCENTRICITY = this.ECCENTRICITY();
        _o.INCLINATION = this.INCLINATION();
        _o.RA_OF_ASC_NODE = this.RA_OF_ASC_NODE();
        _o.ARG_OF_PERICENTER = this.ARG_OF_PERICENTER();
        _o.MEAN_ANOMALY = this.MEAN_ANOMALY();
        _o.GM = this.GM();
        _o.MASS = this.MASS();
        _o.SOLAR_RAD_AREA = this.SOLAR_RAD_AREA();
        _o.SOLAR_RAD_COEFF = this.SOLAR_RAD_COEFF();
        _o.DRAG_AREA = this.DRAG_AREA();
        _o.DRAG_COEFF = this.DRAG_COEFF();
        _o.EPHEMERIS_TYPE = this.EPHEMERIS_TYPE();
        _o.CLASSIFICATION_TYPE = this.CLASSIFICATION_TYPE();
        _o.NORAD_CAT_ID = this.NORAD_CAT_ID();
        _o.ELEMENT_SET_NO = this.ELEMENT_SET_NO();
        _o.REV_AT_EPOCH = this.REV_AT_EPOCH();
        _o.BSTAR = this.BSTAR();
        _o.MEAN_MOTION_DOT = this.MEAN_MOTION_DOT();
        _o.MEAN_MOTION_DDOT = this.MEAN_MOTION_DDOT();
        _o.COV_REF_FRAME = this.COV_REF_FRAME();
        _o.CX_X = this.CX_X();
        _o.CY_X = this.CY_X();
        _o.CY_Y = this.CY_Y();
        _o.CZ_X = this.CZ_X();
        _o.CZ_Y = this.CZ_Y();
        _o.CZ_Z = this.CZ_Z();
        _o.CX_DOT_X = this.CX_DOT_X();
        _o.CX_DOT_Y = this.CX_DOT_Y();
        _o.CX_DOT_Z = this.CX_DOT_Z();
        _o.CX_DOT_X_DOT = this.CX_DOT_X_DOT();
        _o.CY_DOT_X = this.CY_DOT_X();
        _o.CY_DOT_Y = this.CY_DOT_Y();
        _o.CY_DOT_Z = this.CY_DOT_Z();
        _o.CY_DOT_X_DOT = this.CY_DOT_X_DOT();
        _o.CY_DOT_Y_DOT = this.CY_DOT_Y_DOT();
        _o.CZ_DOT_X = this.CZ_DOT_X();
        _o.CZ_DOT_Y = this.CZ_DOT_Y();
        _o.CZ_DOT_Z = this.CZ_DOT_Z();
        _o.CZ_DOT_X_DOT = this.CZ_DOT_X_DOT();
        _o.CZ_DOT_Y_DOT = this.CZ_DOT_Y_DOT();
        _o.CZ_DOT_Z_DOT = this.CZ_DOT_Z_DOT();
        _o.USER_DEFINED_BIP_0044_TYPE = this.USER_DEFINED_BIP_0044_TYPE();
        _o.USER_DEFINED_OBJECT_DESIGNATOR = this.USER_DEFINED_OBJECT_DESIGNATOR();
        _o.USER_DEFINED_EARTH_MODEL = this.USER_DEFINED_EARTH_MODEL();
        _o.USER_DEFINED_EPOCH_TIMESTAMP = this.USER_DEFINED_EPOCH_TIMESTAMP();
        _o.USER_DEFINED_MICROSECONDS = this.USER_DEFINED_MICROSECONDS();
    }
}
export class OMMT {
    constructor(CCSDS_OMM_VERS = 0.0, CREATION_DATE = null, ORIGINATOR = null, OBJECT_NAME = null, OBJECT_ID = null, CENTER_NAME = null, REF_FRAME = referenceFrame.TEME, REF_FRAME_EPOCH = null, TIME_SYSTEM = timeSystem.UTC, MEAN_ELEMENT_THEORY = meanElementTheory.SGP4, COMMENT = null, EPOCH = null, SEMI_MAJOR_AXIS = 0.0, MEAN_MOTION = 0.0, ECCENTRICITY = 0.0, INCLINATION = 0.0, RA_OF_ASC_NODE = 0.0, ARG_OF_PERICENTER = 0.0, MEAN_ANOMALY = 0.0, GM = 0.0, MASS = 0.0, SOLAR_RAD_AREA = 0.0, SOLAR_RAD_COEFF = 0.0, DRAG_AREA = 0.0, DRAG_COEFF = 0.0, EPHEMERIS_TYPE = ephemerisType.SGP4, CLASSIFICATION_TYPE = null, NORAD_CAT_ID = 0, ELEMENT_SET_NO = 0, REV_AT_EPOCH = 0.0, BSTAR = 0.0, MEAN_MOTION_DOT = 0.0, MEAN_MOTION_DDOT = 0.0, COV_REF_FRAME = manCovRefFrame.RSW, CX_X = 0.0, CY_X = 0.0, CY_Y = 0.0, CZ_X = 0.0, CZ_Y = 0.0, CZ_Z = 0.0, CX_DOT_X = 0.0, CX_DOT_Y = 0.0, CX_DOT_Z = 0.0, CX_DOT_X_DOT = 0.0, CY_DOT_X = 0.0, CY_DOT_Y = 0.0, CY_DOT_Z = 0.0, CY_DOT_X_DOT = 0.0, CY_DOT_Y_DOT = 0.0, CZ_DOT_X = 0.0, CZ_DOT_Y = 0.0, CZ_DOT_Z = 0.0, CZ_DOT_X_DOT = 0.0, CZ_DOT_Y_DOT = 0.0, CZ_DOT_Z_DOT = 0.0, USER_DEFINED_BIP_0044_TYPE = 0, USER_DEFINED_OBJECT_DESIGNATOR = null, USER_DEFINED_EARTH_MODEL = null, USER_DEFINED_EPOCH_TIMESTAMP = 0.0, USER_DEFINED_MICROSECONDS = 0.0) {
        this.CCSDS_OMM_VERS = CCSDS_OMM_VERS;
        this.CREATION_DATE = CREATION_DATE;
        this.ORIGINATOR = ORIGINATOR;
        this.OBJECT_NAME = OBJECT_NAME;
        this.OBJECT_ID = OBJECT_ID;
        this.CENTER_NAME = CENTER_NAME;
        this.REF_FRAME = REF_FRAME;
        this.REF_FRAME_EPOCH = REF_FRAME_EPOCH;
        this.TIME_SYSTEM = TIME_SYSTEM;
        this.MEAN_ELEMENT_THEORY = MEAN_ELEMENT_THEORY;
        this.COMMENT = COMMENT;
        this.EPOCH = EPOCH;
        this.SEMI_MAJOR_AXIS = SEMI_MAJOR_AXIS;
        this.MEAN_MOTION = MEAN_MOTION;
        this.ECCENTRICITY = ECCENTRICITY;
        this.INCLINATION = INCLINATION;
        this.RA_OF_ASC_NODE = RA_OF_ASC_NODE;
        this.ARG_OF_PERICENTER = ARG_OF_PERICENTER;
        this.MEAN_ANOMALY = MEAN_ANOMALY;
        this.GM = GM;
        this.MASS = MASS;
        this.SOLAR_RAD_AREA = SOLAR_RAD_AREA;
        this.SOLAR_RAD_COEFF = SOLAR_RAD_COEFF;
        this.DRAG_AREA = DRAG_AREA;
        this.DRAG_COEFF = DRAG_COEFF;
        this.EPHEMERIS_TYPE = EPHEMERIS_TYPE;
        this.CLASSIFICATION_TYPE = CLASSIFICATION_TYPE;
        this.NORAD_CAT_ID = NORAD_CAT_ID;
        this.ELEMENT_SET_NO = ELEMENT_SET_NO;
        this.REV_AT_EPOCH = REV_AT_EPOCH;
        this.BSTAR = BSTAR;
        this.MEAN_MOTION_DOT = MEAN_MOTION_DOT;
        this.MEAN_MOTION_DDOT = MEAN_MOTION_DDOT;
        this.COV_REF_FRAME = COV_REF_FRAME;
        this.CX_X = CX_X;
        this.CY_X = CY_X;
        this.CY_Y = CY_Y;
        this.CZ_X = CZ_X;
        this.CZ_Y = CZ_Y;
        this.CZ_Z = CZ_Z;
        this.CX_DOT_X = CX_DOT_X;
        this.CX_DOT_Y = CX_DOT_Y;
        this.CX_DOT_Z = CX_DOT_Z;
        this.CX_DOT_X_DOT = CX_DOT_X_DOT;
        this.CY_DOT_X = CY_DOT_X;
        this.CY_DOT_Y = CY_DOT_Y;
        this.CY_DOT_Z = CY_DOT_Z;
        this.CY_DOT_X_DOT = CY_DOT_X_DOT;
        this.CY_DOT_Y_DOT = CY_DOT_Y_DOT;
        this.CZ_DOT_X = CZ_DOT_X;
        this.CZ_DOT_Y = CZ_DOT_Y;
        this.CZ_DOT_Z = CZ_DOT_Z;
        this.CZ_DOT_X_DOT = CZ_DOT_X_DOT;
        this.CZ_DOT_Y_DOT = CZ_DOT_Y_DOT;
        this.CZ_DOT_Z_DOT = CZ_DOT_Z_DOT;
        this.USER_DEFINED_BIP_0044_TYPE = USER_DEFINED_BIP_0044_TYPE;
        this.USER_DEFINED_OBJECT_DESIGNATOR = USER_DEFINED_OBJECT_DESIGNATOR;
        this.USER_DEFINED_EARTH_MODEL = USER_DEFINED_EARTH_MODEL;
        this.USER_DEFINED_EPOCH_TIMESTAMP = USER_DEFINED_EPOCH_TIMESTAMP;
        this.USER_DEFINED_MICROSECONDS = USER_DEFINED_MICROSECONDS;
    }
    pack(builder) {
        const CREATION_DATE = (this.CREATION_DATE !== null ? builder.createString(this.CREATION_DATE) : 0);
        const ORIGINATOR = (this.ORIGINATOR !== null ? builder.createString(this.ORIGINATOR) : 0);
        const OBJECT_NAME = (this.OBJECT_NAME !== null ? builder.createString(this.OBJECT_NAME) : 0);
        const OBJECT_ID = (this.OBJECT_ID !== null ? builder.createString(this.OBJECT_ID) : 0);
        const CENTER_NAME = (this.CENTER_NAME !== null ? builder.createString(this.CENTER_NAME) : 0);
        const REF_FRAME_EPOCH = (this.REF_FRAME_EPOCH !== null ? builder.createString(this.REF_FRAME_EPOCH) : 0);
        const COMMENT = (this.COMMENT !== null ? builder.createString(this.COMMENT) : 0);
        const EPOCH = (this.EPOCH !== null ? builder.createString(this.EPOCH) : 0);
        const CLASSIFICATION_TYPE = (this.CLASSIFICATION_TYPE !== null ? builder.createString(this.CLASSIFICATION_TYPE) : 0);
        const USER_DEFINED_OBJECT_DESIGNATOR = (this.USER_DEFINED_OBJECT_DESIGNATOR !== null ? builder.createString(this.USER_DEFINED_OBJECT_DESIGNATOR) : 0);
        const USER_DEFINED_EARTH_MODEL = (this.USER_DEFINED_EARTH_MODEL !== null ? builder.createString(this.USER_DEFINED_EARTH_MODEL) : 0);
        return OMM.createOMM(builder, this.CCSDS_OMM_VERS, CREATION_DATE, ORIGINATOR, OBJECT_NAME, OBJECT_ID, CENTER_NAME, this.REF_FRAME, REF_FRAME_EPOCH, this.TIME_SYSTEM, this.MEAN_ELEMENT_THEORY, COMMENT, EPOCH, this.SEMI_MAJOR_AXIS, this.MEAN_MOTION, this.ECCENTRICITY, this.INCLINATION, this.RA_OF_ASC_NODE, this.ARG_OF_PERICENTER, this.MEAN_ANOMALY, this.GM, this.MASS, this.SOLAR_RAD_AREA, this.SOLAR_RAD_COEFF, this.DRAG_AREA, this.DRAG_COEFF, this.EPHEMERIS_TYPE, CLASSIFICATION_TYPE, this.NORAD_CAT_ID, this.ELEMENT_SET_NO, this.REV_AT_EPOCH, this.BSTAR, this.MEAN_MOTION_DOT, this.MEAN_MOTION_DDOT, this.COV_REF_FRAME, this.CX_X, this.CY_X, this.CY_Y, this.CZ_X, this.CZ_Y, this.CZ_Z, this.CX_DOT_X, this.CX_DOT_Y, this.CX_DOT_Z, this.CX_DOT_X_DOT, this.CY_DOT_X, this.CY_DOT_Y, this.CY_DOT_Z, this.CY_DOT_X_DOT, this.CY_DOT_Y_DOT, this.CZ_DOT_X, this.CZ_DOT_Y, this.CZ_DOT_Z, this.CZ_DOT_X_DOT, this.CZ_DOT_Y_DOT, this.CZ_DOT_Z_DOT, this.USER_DEFINED_BIP_0044_TYPE, USER_DEFINED_OBJECT_DESIGNATOR, USER_DEFINED_EARTH_MODEL, this.USER_DEFINED_EPOCH_TIMESTAMP, this.USER_DEFINED_MICROSECONDS);
    }
}