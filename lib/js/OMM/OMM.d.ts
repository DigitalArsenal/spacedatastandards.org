import * as flatbuffers from 'flatbuffers';
import { ephemerisType } from './ephemerisType.js';
import { meanElementTheory } from './meanElementTheory.js';
import { referenceFrame } from './referenceFrame.js';
import { timeSystem } from './timeSystem.js';
/**
 * Orbit Mean Elements Message
 */
export declare class OMM implements flatbuffers.IUnpackableObject<OMMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OMM;
    static getRootAsOMM(bb: flatbuffers.ByteBuffer, obj?: OMM): OMM;
    static getSizePrefixedRootAsOMM(bb: flatbuffers.ByteBuffer, obj?: OMM): OMM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * OMM Header
     */
    CCSDS_OMM_VERS(): number;
    /**
     * Creation Date
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OMM Metadata
     * Satellite Name(s)
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International Designator (YYYY-NNNAAA)
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origin of reference frame (EARTH, MARS, MOON, etc.)
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the reference frame (TEME, EME2000, etc.)
     */
    REFERENCE_FRAME(): referenceFrame;
    /**
     * REFERENCE_FRAME_EPOCH
     */
    REFERENCE_FRAME_EPOCH(): string | null;
    REFERENCE_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used for the orbit state and covariance matrix. (UTC)
     */
    TIME_SYSTEM(): timeSystem;
    /**
     * Description of the Mean Element Theory. (SGP4,DSST,USM)
     */
    MEAN_ELEMENT_THEORY(): meanElementTheory;
    /**
     * Mean Keplerian Elements in the Specified Reference Frame
     * Plain-Text Comment
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of Mean Keplerian elements. (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Semi-major axis in km or mean motion in rev/day
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Mean motion
     */
    MEAN_MOTION(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Inclination
     */
    INCLINATION(): number;
    /**
     * Right ascension of ascending node
     */
    RA_OF_ASC_NODE(): number;
    /**
     * Argument of pericenter
     */
    ARG_OF_PERICENTER(): number;
    /**
     * Mean anomaly
     */
    MEAN_ANOMALY(): number;
    /**
     * Gravitational Coefficient (Gravitational Constant x Central Mass)
     */
    GM(): number;
    /**
     * Spacecraft Parameters
     * S/C Mass
     */
    MASS(): number;
    /**
     * Solar Radiation Pressure Area (AR) m**2
     */
    SOLAR_RAD_AREA(): number;
    /**
     * Solar Radiation Pressure Coefficient (CR)
     */
    SOLAR_RAD_COEFF(): number;
    /**
     * Drag Area (AD) m**2
     */
    DRAG_AREA(): number;
    /**
     * Drag Coefficient (CD)
     */
    DRAG_COEFF(): number;
    /**
     * TLE Related Parameters (This section is only required if MEAN_ELEMENT_THEORY=SGP/SGP4)
     * Default value = 0
     */
    EPHEMERIS_TYPE(): ephemerisType;
    /**
     * Default value = U
     */
    CLASSIFICATION_TYPE(): string | null;
    CLASSIFICATION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD Catalog Number (Satellite Number) an integer
     */
    NORAD_CAT_ID(): number;
    /**
     * Element set number for this satellite
     */
    ELEMENT_SET_NO(): number;
    /**
     * Revolution Number
     */
    REV_AT_EPOCH(): number;
    /**
     * SGP/SGP4 drag-like coefficient (in units 1/[Earth radii])
     */
    BSTAR(): number;
    /**
     * First Time Derivative of the Mean Motion
     */
    MEAN_MOTION_DOT(): number;
    /**
     * Second Time Derivative of Mean Motion
     */
    MEAN_MOTION_DDOT(): number;
    /**
     * Position/Velocity Covariance Matrix
     * Reference frame for the covariance matrix
     */
    COV_REFERENCE_FRAME(): referenceFrame;
    /**
     * Covariance matrix [1,1] km**2
     */
    CX_X(): number;
    /**
     * Covariance matrix [2,1] km**2
     */
    CY_X(): number;
    /**
     * Covariance matrix [2,2] km**2
     */
    CY_Y(): number;
    /**
     * Covariance matrix [3,1] km**2
     */
    CZ_X(): number;
    /**
     * Covariance matrix [3,2] km**2
     */
    CZ_Y(): number;
    /**
     * Covariance matrix [3,3] km**2
     */
    CZ_Z(): number;
    /**
     * Covariance matrix [4,1] km**2/s
     */
    CX_DOT_X(): number;
    /**
     * Covariance matrix [4,2] km**2/s
     */
    CX_DOT_Y(): number;
    /**
     * Covariance matrix [4,3] km**2/s
     */
    CX_DOT_Z(): number;
    /**
     * Covariance matrix [4,4] km**2/s**2
     */
    CX_DOT_X_DOT(): number;
    /**
     * Covariance matrix [5,1] km**2/s
     */
    CY_DOT_X(): number;
    /**
     * Covariance matrix [5,2] km**2/s
     */
    CY_DOT_Y(): number;
    /**
     * Covariance matrix [5,3] km**2/s
     */
    CY_DOT_Z(): number;
    /**
     * Covariance matrix [5,4] km**2/s**2
     */
    CY_DOT_X_DOT(): number;
    /**
     * Covariance matrix [5,5] km**2/s**2
     */
    CY_DOT_Y_DOT(): number;
    /**
     * Covariance matrix [6,1] km**2/s
     */
    CZ_DOT_X(): number;
    /**
     * Covariance matrix [6,2] km**2/s
     */
    CZ_DOT_Y(): number;
    /**
     * Covariance matrix [6,3] km**2/s
     */
    CZ_DOT_Z(): number;
    /**
     * Covariance matrix [6,4] km**2/s**2
     */
    CZ_DOT_X_DOT(): number;
    /**
     * Covariance matrix [6,5] km**2/s**2
     */
    CZ_DOT_Y_DOT(): number;
    /**
     * Covariance matrix [6,6] km**2/s**2
     */
    CZ_DOT_Z_DOT(): number;
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_BIP_0044_TYPE(): number;
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_OBJECT_DESIGNATOR(): string | null;
    USER_DEFINED_OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_EARTH_MODEL(): string | null;
    USER_DEFINED_EARTH_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_EPOCH_TIMESTAMP(): number;
    /**
     * User defined parameter, must be described in an ICD
     */
    USER_DEFINED_MICROSECONDS(): number;
    static startOMM(builder: flatbuffers.Builder): void;
    static addCcsdsOmmVers(builder: flatbuffers.Builder, CCSDS_OMM_VERS: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: referenceFrame): void;
    static addReferenceFrameEpoch(builder: flatbuffers.Builder, REFERENCE_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementTheory): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addSolarRadArea(builder: flatbuffers.Builder, SOLAR_RAD_AREA: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, SOLAR_RAD_COEFF: number): void;
    static addDragArea(builder: flatbuffers.Builder, DRAG_AREA: number): void;
    static addDragCoeff(builder: flatbuffers.Builder, DRAG_COEFF: number): void;
    static addEphemerisType(builder: flatbuffers.Builder, EPHEMERIS_TYPE: ephemerisType): void;
    static addClassificationType(builder: flatbuffers.Builder, CLASSIFICATION_TYPEOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addElementSetNo(builder: flatbuffers.Builder, ELEMENT_SET_NO: number): void;
    static addRevAtEpoch(builder: flatbuffers.Builder, REV_AT_EPOCH: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAME: referenceFrame): void;
    static addCxX(builder: flatbuffers.Builder, CX_X: number): void;
    static addCyX(builder: flatbuffers.Builder, CY_X: number): void;
    static addCyY(builder: flatbuffers.Builder, CY_Y: number): void;
    static addCzX(builder: flatbuffers.Builder, CZ_X: number): void;
    static addCzY(builder: flatbuffers.Builder, CZ_Y: number): void;
    static addCzZ(builder: flatbuffers.Builder, CZ_Z: number): void;
    static addCxDotX(builder: flatbuffers.Builder, CX_DOT_X: number): void;
    static addCxDotY(builder: flatbuffers.Builder, CX_DOT_Y: number): void;
    static addCxDotZ(builder: flatbuffers.Builder, CX_DOT_Z: number): void;
    static addCxDotXDot(builder: flatbuffers.Builder, CX_DOT_X_DOT: number): void;
    static addCyDotX(builder: flatbuffers.Builder, CY_DOT_X: number): void;
    static addCyDotY(builder: flatbuffers.Builder, CY_DOT_Y: number): void;
    static addCyDotZ(builder: flatbuffers.Builder, CY_DOT_Z: number): void;
    static addCyDotXDot(builder: flatbuffers.Builder, CY_DOT_X_DOT: number): void;
    static addCyDotYDot(builder: flatbuffers.Builder, CY_DOT_Y_DOT: number): void;
    static addCzDotX(builder: flatbuffers.Builder, CZ_DOT_X: number): void;
    static addCzDotY(builder: flatbuffers.Builder, CZ_DOT_Y: number): void;
    static addCzDotZ(builder: flatbuffers.Builder, CZ_DOT_Z: number): void;
    static addCzDotXDot(builder: flatbuffers.Builder, CZ_DOT_X_DOT: number): void;
    static addCzDotYDot(builder: flatbuffers.Builder, CZ_DOT_Y_DOT: number): void;
    static addCzDotZDot(builder: flatbuffers.Builder, CZ_DOT_Z_DOT: number): void;
    static addUserDefinedBip0044Type(builder: flatbuffers.Builder, USER_DEFINED_BIP_0044_TYPE: number): void;
    static addUserDefinedObjectDesignator(builder: flatbuffers.Builder, USER_DEFINED_OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addUserDefinedEarthModel(builder: flatbuffers.Builder, USER_DEFINED_EARTH_MODELOffset: flatbuffers.Offset): void;
    static addUserDefinedEpochTimestamp(builder: flatbuffers.Builder, USER_DEFINED_EPOCH_TIMESTAMP: number): void;
    static addUserDefinedMicroseconds(builder: flatbuffers.Builder, USER_DEFINED_MICROSECONDS: number): void;
    static endOMM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOMM(builder: flatbuffers.Builder, CCSDS_OMM_VERS: number, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, REFERENCE_FRAME: referenceFrame, REFERENCE_FRAME_EPOCHOffset: flatbuffers.Offset, TIME_SYSTEM: timeSystem, MEAN_ELEMENT_THEORY: meanElementTheory, COMMENTOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, SEMI_MAJOR_AXIS: number, MEAN_MOTION: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, MEAN_ANOMALY: number, GM: number, MASS: number, SOLAR_RAD_AREA: number, SOLAR_RAD_COEFF: number, DRAG_AREA: number, DRAG_COEFF: number, EPHEMERIS_TYPE: ephemerisType, CLASSIFICATION_TYPEOffset: flatbuffers.Offset, NORAD_CAT_ID: number, ELEMENT_SET_NO: number, REV_AT_EPOCH: number, BSTAR: number, MEAN_MOTION_DOT: number, MEAN_MOTION_DDOT: number, COV_REFERENCE_FRAME: referenceFrame, CX_X: number, CY_X: number, CY_Y: number, CZ_X: number, CZ_Y: number, CZ_Z: number, CX_DOT_X: number, CX_DOT_Y: number, CX_DOT_Z: number, CX_DOT_X_DOT: number, CY_DOT_X: number, CY_DOT_Y: number, CY_DOT_Z: number, CY_DOT_X_DOT: number, CY_DOT_Y_DOT: number, CZ_DOT_X: number, CZ_DOT_Y: number, CZ_DOT_Z: number, CZ_DOT_X_DOT: number, CZ_DOT_Y_DOT: number, CZ_DOT_Z_DOT: number, USER_DEFINED_BIP_0044_TYPE: number, USER_DEFINED_OBJECT_DESIGNATOROffset: flatbuffers.Offset, USER_DEFINED_EARTH_MODELOffset: flatbuffers.Offset, USER_DEFINED_EPOCH_TIMESTAMP: number, USER_DEFINED_MICROSECONDS: number): flatbuffers.Offset;
    unpack(): OMMT;
    unpackTo(_o: OMMT): void;
}
export declare class OMMT implements flatbuffers.IGeneratedObject {
    CCSDS_OMM_VERS: number;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    REFERENCE_FRAME: referenceFrame;
    REFERENCE_FRAME_EPOCH: string | Uint8Array | null;
    TIME_SYSTEM: timeSystem;
    MEAN_ELEMENT_THEORY: meanElementTheory;
    COMMENT: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SEMI_MAJOR_AXIS: number;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    GM: number;
    MASS: number;
    SOLAR_RAD_AREA: number;
    SOLAR_RAD_COEFF: number;
    DRAG_AREA: number;
    DRAG_COEFF: number;
    EPHEMERIS_TYPE: ephemerisType;
    CLASSIFICATION_TYPE: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    ELEMENT_SET_NO: number;
    REV_AT_EPOCH: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    COV_REFERENCE_FRAME: referenceFrame;
    CX_X: number;
    CY_X: number;
    CY_Y: number;
    CZ_X: number;
    CZ_Y: number;
    CZ_Z: number;
    CX_DOT_X: number;
    CX_DOT_Y: number;
    CX_DOT_Z: number;
    CX_DOT_X_DOT: number;
    CY_DOT_X: number;
    CY_DOT_Y: number;
    CY_DOT_Z: number;
    CY_DOT_X_DOT: number;
    CY_DOT_Y_DOT: number;
    CZ_DOT_X: number;
    CZ_DOT_Y: number;
    CZ_DOT_Z: number;
    CZ_DOT_X_DOT: number;
    CZ_DOT_Y_DOT: number;
    CZ_DOT_Z_DOT: number;
    USER_DEFINED_BIP_0044_TYPE: number;
    USER_DEFINED_OBJECT_DESIGNATOR: string | Uint8Array | null;
    USER_DEFINED_EARTH_MODEL: string | Uint8Array | null;
    USER_DEFINED_EPOCH_TIMESTAMP: number;
    USER_DEFINED_MICROSECONDS: number;
    constructor(CCSDS_OMM_VERS?: number, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, REFERENCE_FRAME?: referenceFrame, REFERENCE_FRAME_EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: timeSystem, MEAN_ELEMENT_THEORY?: meanElementTheory, COMMENT?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SEMI_MAJOR_AXIS?: number, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, GM?: number, MASS?: number, SOLAR_RAD_AREA?: number, SOLAR_RAD_COEFF?: number, DRAG_AREA?: number, DRAG_COEFF?: number, EPHEMERIS_TYPE?: ephemerisType, CLASSIFICATION_TYPE?: string | Uint8Array | null, NORAD_CAT_ID?: number, ELEMENT_SET_NO?: number, REV_AT_EPOCH?: number, BSTAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, COV_REFERENCE_FRAME?: referenceFrame, CX_X?: number, CY_X?: number, CY_Y?: number, CZ_X?: number, CZ_Y?: number, CZ_Z?: number, CX_DOT_X?: number, CX_DOT_Y?: number, CX_DOT_Z?: number, CX_DOT_X_DOT?: number, CY_DOT_X?: number, CY_DOT_Y?: number, CY_DOT_Z?: number, CY_DOT_X_DOT?: number, CY_DOT_Y_DOT?: number, CZ_DOT_X?: number, CZ_DOT_Y?: number, CZ_DOT_Z?: number, CZ_DOT_X_DOT?: number, CZ_DOT_Y_DOT?: number, CZ_DOT_Z_DOT?: number, USER_DEFINED_BIP_0044_TYPE?: number, USER_DEFINED_OBJECT_DESIGNATOR?: string | Uint8Array | null, USER_DEFINED_EARTH_MODEL?: string | Uint8Array | null, USER_DEFINED_EPOCH_TIMESTAMP?: number, USER_DEFINED_MICROSECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OMM.d.ts.map