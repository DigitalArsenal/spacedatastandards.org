import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './RFM.js';
import { ephemerisType } from './ephemerisType.js';
import { meanElementTheory } from './meanElementTheory.js';
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
     * CCSDS OMM Version
     */
    CCSDS_OMM_VERS(): number;
    /**
     * Creation Date (ISO 8601 UTC format)
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
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
     * Center Name (e.g. EARTH, MARS)
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference Frame
     * Typically TEMEOFDATE
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Reference Frame Epoch (ISO 8601 UTC format)
     */
    REFERENCE_FRAME_EPOCH(): string | null;
    REFERENCE_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time System [M, UTC]
     */
    TIME_SYSTEM(): timeSystem;
    /**
     * Mean Element Theory
     */
    MEAN_ELEMENT_THEORY(): meanElementTheory;
    /**
     * COMMENT (O)
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EPOCH of Mean Keplerian elements (ISO 8601 UTC format)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Semi-major axis in km or Mean Motion in rev/day
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Mean motion in rev/day if MEAN_ELEMENT_THEORY=SGP/SGP4 else unused
     */
    MEAN_MOTION(): number;
    /**
     * Eccentricity (unitless)
     */
    ECCENTRICITY(): number;
    /**
     * Inclination in degrees
     */
    INCLINATION(): number;
    /**
     * RA_OF_ASC_NODE in degrees
     */
    RA_OF_ASC_NODE(): number;
    /**
     * ARG_OF_PERICENTER in degrees
     */
    ARG_OF_PERICENTER(): number;
    /**
     * MEAN_ANOMALY in degrees
     */
    MEAN_ANOMALY(): number;
    /**
     * GM in km**3/s**2
     */
    GM(): number;
    /**
     * MASS in kg
     */
    MASS(): number;
    /**
     * SOLAR_RAD_AREA in m**2
     */
    SOLAR_RAD_AREA(): number;
    /**
     * SOLAR_RAD_COEFF (unitless)
     */
    SOLAR_RAD_COEFF(): number;
    /**
     * DRAG_AREA in m**2
     */
    DRAG_AREA(): number;
    /**
     * DRAG_COEFF (unitless)
     */
    DRAG_COEFF(): number;
    /**
     * TLE Related Parameters (Only if MEAN_ELEMENT_THEORY=SGP/SGP4)
     * EPHEMERIS_TYPE Default=0
     */
    EPHEMERIS_TYPE(): ephemerisType;
    /**
     * CLASSIFICATION_TYPE Default=U
     */
    CLASSIFICATION_TYPE(): string | null;
    CLASSIFICATION_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD_CAT_ID (integer) [O if SGP/SGP4]
     */
    NORAD_CAT_ID(): number;
    /**
     * ELEMENT_SET_NO [O if SGP/SGP4]
     */
    ELEMENT_SET_NO(): number;
    /**
     * REV_AT_EPOCH [O if SGP/SGP4]
     */
    REV_AT_EPOCH(): number;
    /**
     * BSTAR in 1/Earth radii or BTERM in m²/kg depending on MEAN_ELEMENT_THEORY [C]
     */
    BSTAR(): number;
    /**
     * MEAN_MOTION_DOT in rev/day² [C if SGP or PPT3]
     */
    MEAN_MOTION_DOT(): number;
    /**
     * MEAN_MOTION_DDOT in rev/day³ if SGP/PPT3 or AGOM in m²/kg if SGP4-XP [C]
     */
    MEAN_MOTION_DDOT(): number;
    /**
     * Position/Velocity Covariance Matrix (6x6 Lower Triangular) [C if any covariance provided]
     * COV_REF_FRAME reference frame for covariance [C if covariance given]
     * Typically RSW
     */
    COV_REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * CX_X [km**2]
     */
    CX_X(): number;
    /**
     * CY_X [km**2]
     */
    CY_X(): number;
    /**
     * CY_Y [km**2]
     */
    CY_Y(): number;
    /**
     * CZ_X [km**2]
     */
    CZ_X(): number;
    /**
     * CZ_Y [km**2]
     */
    CZ_Y(): number;
    /**
     * CZ_Z [km**2]
     */
    CZ_Z(): number;
    /**
     * CX_DOT_X [km**2/s]
     */
    CX_DOT_X(): number;
    /**
     * CX_DOT_Y [km**2/s]
     */
    CX_DOT_Y(): number;
    /**
     * CX_DOT_Z [km**2/s]
     */
    CX_DOT_Z(): number;
    /**
     * CX_DOT_X_DOT [km**2/s**2]
     */
    CX_DOT_X_DOT(): number;
    /**
     * CY_DOT_X [km**2/s]
     */
    CY_DOT_X(): number;
    /**
     * CY_DOT_Y [km**2/s]
     */
    CY_DOT_Y(): number;
    /**
     * CY_DOT_Z [km**2/s]
     */
    CY_DOT_Z(): number;
    /**
     * CY_DOT_X_DOT [km**2/s**2]
     */
    CY_DOT_X_DOT(): number;
    /**
     * CY_DOT_Y_DOT [km**2/s**2]
     */
    CY_DOT_Y_DOT(): number;
    /**
     * CZ_DOT_X [km**2/s]
     */
    CZ_DOT_X(): number;
    /**
     * CZ_DOT_Y [km**2/s]
     */
    CZ_DOT_Y(): number;
    /**
     * CZ_DOT_Z [km**2/s]
     */
    CZ_DOT_Z(): number;
    /**
     * CZ_DOT_X_DOT [km**2/s**2]
     */
    CZ_DOT_X_DOT(): number;
    /**
     * CZ_DOT_Y_DOT [km**2/s**2]
     */
    CZ_DOT_Y_DOT(): number;
    /**
     * CZ_DOT_Z_DOT [km**2/s**2]
     */
    CZ_DOT_Z_DOT(): number;
    /**
     * USER_DEFINED_BIP_0044_TYPE [O, units per ICD]
     */
    USER_DEFINED_BIP_0044_TYPE(): number;
    /**
     * USER_DEFINED_OBJECT_DESIGNATOR [O, units per ICD]
     */
    USER_DEFINED_OBJECT_DESIGNATOR(): string | null;
    USER_DEFINED_OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USER_DEFINED_EARTH_MODEL [O, units per ICD]
     */
    USER_DEFINED_EARTH_MODEL(): string | null;
    USER_DEFINED_EARTH_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USER_DEFINED_EPOCH_TIMESTAMP [O, units per ICD]
     */
    USER_DEFINED_EPOCH_TIMESTAMP(): number;
    /**
     * USER_DEFINED_MICROSECONDS [O, units per ICD]
     */
    USER_DEFINED_MICROSECONDS(): number;
    static startOMM(builder: flatbuffers.Builder): void;
    static addCcsdsOmmVers(builder: flatbuffers.Builder, CCSDS_OMM_VERS: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
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
    static addCovReferenceFrame(builder: flatbuffers.Builder, COV_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
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
    REFERENCE_FRAME: RFMT | null;
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
    COV_REFERENCE_FRAME: RFMT | null;
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
    constructor(CCSDS_OMM_VERS?: number, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, REFERENCE_FRAME?: RFMT | null, REFERENCE_FRAME_EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: timeSystem, MEAN_ELEMENT_THEORY?: meanElementTheory, COMMENT?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SEMI_MAJOR_AXIS?: number, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, GM?: number, MASS?: number, SOLAR_RAD_AREA?: number, SOLAR_RAD_COEFF?: number, DRAG_AREA?: number, DRAG_COEFF?: number, EPHEMERIS_TYPE?: ephemerisType, CLASSIFICATION_TYPE?: string | Uint8Array | null, NORAD_CAT_ID?: number, ELEMENT_SET_NO?: number, REV_AT_EPOCH?: number, BSTAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, COV_REFERENCE_FRAME?: RFMT | null, CX_X?: number, CY_X?: number, CY_Y?: number, CZ_X?: number, CZ_Y?: number, CZ_Z?: number, CX_DOT_X?: number, CX_DOT_Y?: number, CX_DOT_Z?: number, CX_DOT_X_DOT?: number, CY_DOT_X?: number, CY_DOT_Y?: number, CY_DOT_Z?: number, CY_DOT_X_DOT?: number, CY_DOT_Y_DOT?: number, CZ_DOT_X?: number, CZ_DOT_Y?: number, CZ_DOT_Z?: number, CZ_DOT_X_DOT?: number, CZ_DOT_Y_DOT?: number, CZ_DOT_Z_DOT?: number, USER_DEFINED_BIP_0044_TYPE?: number, USER_DEFINED_OBJECT_DESIGNATOR?: string | Uint8Array | null, USER_DEFINED_EARTH_MODEL?: string | Uint8Array | null, USER_DEFINED_EPOCH_TIMESTAMP?: number, USER_DEFINED_MICROSECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OMM.d.ts.map