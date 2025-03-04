import * as flatbuffers from 'flatbuffers';
import { ephemerisType } from './ephemeris-type.js';
import { meanElementTheory } from './mean-element-theory.js';
import { refFrame } from './ref-frame.js';
import { timeSystem } from './time-system.js';
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
    ccsdsOmmVers(): number;
    /**
     * Creation Date (ISO 8601 UTC format)
     */
    creationDate(): string | null;
    creationDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator
     */
    originator(): string | null;
    originator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite Name(s)
     */
    objectName(): string | null;
    objectName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International Designator (YYYY-NNNAAA)
     */
    objectId(): string | null;
    objectId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Center Name (e.g. EARTH, MARS)
     */
    centerName(): string | null;
    centerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference Frame
     */
    referenceFrame(): refFrame;
    /**
     * Reference Frame Epoch (ISO 8601 UTC format)
     */
    referenceFrameEpoch(): string | null;
    referenceFrameEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time System [M, UTC]
     */
    timeSystem(): timeSystem;
    /**
     * Mean Element Theory
     */
    meanElementTheory(): meanElementTheory;
    /**
     * COMMENT (O)
     */
    comment(): string | null;
    comment(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EPOCH of Mean Keplerian elements (ISO 8601 UTC format)
     */
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Semi-major axis in km or Mean Motion in rev/day
     */
    semiMajorAxis(): number;
    /**
     * Mean motion in rev/day if MEAN_ELEMENT_THEORY=SGP/SGP4 else unused
     */
    meanMotion(): number;
    /**
     * Eccentricity (unitless)
     */
    eccentricity(): number;
    /**
     * Inclination in degrees
     */
    inclination(): number;
    /**
     * RA_OF_ASC_NODE in degrees
     */
    raOfAscNode(): number;
    /**
     * ARG_OF_PERICENTER in degrees
     */
    argOfPericenter(): number;
    /**
     * MEAN_ANOMALY in degrees
     */
    meanAnomaly(): number;
    /**
     * GM in km**3/s**2
     */
    gm(): number;
    /**
     * MASS in kg
     */
    mass(): number;
    /**
     * SOLAR_RAD_AREA in m**2
     */
    solarRadArea(): number;
    /**
     * SOLAR_RAD_COEFF (unitless)
     */
    solarRadCoeff(): number;
    /**
     * DRAG_AREA in m**2
     */
    dragArea(): number;
    /**
     * DRAG_COEFF (unitless)
     */
    dragCoeff(): number;
    /**
     * TLE Related Parameters (Only if MEAN_ELEMENT_THEORY=SGP/SGP4)
     * EPHEMERIS_TYPE Default=0
     */
    ephemerisType(): ephemerisType;
    /**
     * CLASSIFICATION_TYPE Default=U
     */
    classificationType(): string | null;
    classificationType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD_CAT_ID (integer) [O if SGP/SGP4]
     */
    noradCatId(): number;
    /**
     * ELEMENT_SET_NO [O if SGP/SGP4]
     */
    elementSetNo(): number;
    /**
     * REV_AT_EPOCH [O if SGP/SGP4]
     */
    revAtEpoch(): number;
    /**
     * BSTAR in 1/Earth radii or BTERM in m²/kg depending on MEAN_ELEMENT_THEORY [C]
     */
    bstar(): number;
    /**
     * MEAN_MOTION_DOT in rev/day² [C if SGP or PPT3]
     */
    meanMotionDot(): number;
    /**
     * MEAN_MOTION_DDOT in rev/day³ if SGP/PPT3 or AGOM in m²/kg if SGP4-XP [C]
     */
    meanMotionDdot(): number;
    /**
     * Position/Velocity Covariance Matrix (6x6 Lower Triangular) [C if any covariance provided]
     * COV_REF_FRAME reference frame for covariance [C if covariance given]
     */
    covReferenceFrame(): refFrame;
    /**
     * CX_X [km**2]
     */
    cxX(): number;
    /**
     * CY_X [km**2]
     */
    cyX(): number;
    /**
     * CY_Y [km**2]
     */
    cyY(): number;
    /**
     * CZ_X [km**2]
     */
    czX(): number;
    /**
     * CZ_Y [km**2]
     */
    czY(): number;
    /**
     * CZ_Z [km**2]
     */
    czZ(): number;
    /**
     * CX_DOT_X [km**2/s]
     */
    cxDotX(): number;
    /**
     * CX_DOT_Y [km**2/s]
     */
    cxDotY(): number;
    /**
     * CX_DOT_Z [km**2/s]
     */
    cxDotZ(): number;
    /**
     * CX_DOT_X_DOT [km**2/s**2]
     */
    cxDotXDot(): number;
    /**
     * CY_DOT_X [km**2/s]
     */
    cyDotX(): number;
    /**
     * CY_DOT_Y [km**2/s]
     */
    cyDotY(): number;
    /**
     * CY_DOT_Z [km**2/s]
     */
    cyDotZ(): number;
    /**
     * CY_DOT_X_DOT [km**2/s**2]
     */
    cyDotXDot(): number;
    /**
     * CY_DOT_Y_DOT [km**2/s**2]
     */
    cyDotYDot(): number;
    /**
     * CZ_DOT_X [km**2/s]
     */
    czDotX(): number;
    /**
     * CZ_DOT_Y [km**2/s]
     */
    czDotY(): number;
    /**
     * CZ_DOT_Z [km**2/s]
     */
    czDotZ(): number;
    /**
     * CZ_DOT_X_DOT [km**2/s**2]
     */
    czDotXDot(): number;
    /**
     * CZ_DOT_Y_DOT [km**2/s**2]
     */
    czDotYDot(): number;
    /**
     * CZ_DOT_Z_DOT [km**2/s**2]
     */
    czDotZDot(): number;
    /**
     * USER_DEFINED_BIP_0044_TYPE [O, units per ICD]
     */
    userDefinedBip0044Type(): number;
    /**
     * USER_DEFINED_OBJECT_DESIGNATOR [O, units per ICD]
     */
    userDefinedObjectDesignator(): string | null;
    userDefinedObjectDesignator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USER_DEFINED_EARTH_MODEL [O, units per ICD]
     */
    userDefinedEarthModel(): string | null;
    userDefinedEarthModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * USER_DEFINED_EPOCH_TIMESTAMP [O, units per ICD]
     */
    userDefinedEpochTimestamp(): number;
    /**
     * USER_DEFINED_MICROSECONDS [O, units per ICD]
     */
    userDefinedMicroseconds(): number;
    static startOMM(builder: flatbuffers.Builder): void;
    static addCcsdsOmmVers(builder: flatbuffers.Builder, ccsdsOmmVers: number): void;
    static addCreationDate(builder: flatbuffers.Builder, creationDateOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, originatorOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, objectNameOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, objectIdOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, centerNameOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, referenceFrame: refFrame): void;
    static addReferenceFrameEpoch(builder: flatbuffers.Builder, referenceFrameEpochOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, timeSystem: timeSystem): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, meanElementTheory: meanElementTheory): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, semiMajorAxis: number): void;
    static addMeanMotion(builder: flatbuffers.Builder, meanMotion: number): void;
    static addEccentricity(builder: flatbuffers.Builder, eccentricity: number): void;
    static addInclination(builder: flatbuffers.Builder, inclination: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, raOfAscNode: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, argOfPericenter: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, meanAnomaly: number): void;
    static addGm(builder: flatbuffers.Builder, gm: number): void;
    static addMass(builder: flatbuffers.Builder, mass: number): void;
    static addSolarRadArea(builder: flatbuffers.Builder, solarRadArea: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, solarRadCoeff: number): void;
    static addDragArea(builder: flatbuffers.Builder, dragArea: number): void;
    static addDragCoeff(builder: flatbuffers.Builder, dragCoeff: number): void;
    static addEphemerisType(builder: flatbuffers.Builder, ephemerisType: ephemerisType): void;
    static addClassificationType(builder: flatbuffers.Builder, classificationTypeOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, noradCatId: number): void;
    static addElementSetNo(builder: flatbuffers.Builder, elementSetNo: number): void;
    static addRevAtEpoch(builder: flatbuffers.Builder, revAtEpoch: number): void;
    static addBstar(builder: flatbuffers.Builder, bstar: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, meanMotionDot: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, meanMotionDdot: number): void;
    static addCovReferenceFrame(builder: flatbuffers.Builder, covReferenceFrame: refFrame): void;
    static addCxX(builder: flatbuffers.Builder, cxX: number): void;
    static addCyX(builder: flatbuffers.Builder, cyX: number): void;
    static addCyY(builder: flatbuffers.Builder, cyY: number): void;
    static addCzX(builder: flatbuffers.Builder, czX: number): void;
    static addCzY(builder: flatbuffers.Builder, czY: number): void;
    static addCzZ(builder: flatbuffers.Builder, czZ: number): void;
    static addCxDotX(builder: flatbuffers.Builder, cxDotX: number): void;
    static addCxDotY(builder: flatbuffers.Builder, cxDotY: number): void;
    static addCxDotZ(builder: flatbuffers.Builder, cxDotZ: number): void;
    static addCxDotXDot(builder: flatbuffers.Builder, cxDotXDot: number): void;
    static addCyDotX(builder: flatbuffers.Builder, cyDotX: number): void;
    static addCyDotY(builder: flatbuffers.Builder, cyDotY: number): void;
    static addCyDotZ(builder: flatbuffers.Builder, cyDotZ: number): void;
    static addCyDotXDot(builder: flatbuffers.Builder, cyDotXDot: number): void;
    static addCyDotYDot(builder: flatbuffers.Builder, cyDotYDot: number): void;
    static addCzDotX(builder: flatbuffers.Builder, czDotX: number): void;
    static addCzDotY(builder: flatbuffers.Builder, czDotY: number): void;
    static addCzDotZ(builder: flatbuffers.Builder, czDotZ: number): void;
    static addCzDotXDot(builder: flatbuffers.Builder, czDotXDot: number): void;
    static addCzDotYDot(builder: flatbuffers.Builder, czDotYDot: number): void;
    static addCzDotZDot(builder: flatbuffers.Builder, czDotZDot: number): void;
    static addUserDefinedBip0044Type(builder: flatbuffers.Builder, userDefinedBip0044Type: number): void;
    static addUserDefinedObjectDesignator(builder: flatbuffers.Builder, userDefinedObjectDesignatorOffset: flatbuffers.Offset): void;
    static addUserDefinedEarthModel(builder: flatbuffers.Builder, userDefinedEarthModelOffset: flatbuffers.Offset): void;
    static addUserDefinedEpochTimestamp(builder: flatbuffers.Builder, userDefinedEpochTimestamp: number): void;
    static addUserDefinedMicroseconds(builder: flatbuffers.Builder, userDefinedMicroseconds: number): void;
    static endOMM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOMMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOMM(builder: flatbuffers.Builder, ccsdsOmmVers: number, creationDateOffset: flatbuffers.Offset, originatorOffset: flatbuffers.Offset, objectNameOffset: flatbuffers.Offset, objectIdOffset: flatbuffers.Offset, centerNameOffset: flatbuffers.Offset, referenceFrame: refFrame, referenceFrameEpochOffset: flatbuffers.Offset, timeSystem: timeSystem, meanElementTheory: meanElementTheory, commentOffset: flatbuffers.Offset, epochOffset: flatbuffers.Offset, semiMajorAxis: number, meanMotion: number, eccentricity: number, inclination: number, raOfAscNode: number, argOfPericenter: number, meanAnomaly: number, gm: number, mass: number, solarRadArea: number, solarRadCoeff: number, dragArea: number, dragCoeff: number, ephemerisType: ephemerisType, classificationTypeOffset: flatbuffers.Offset, noradCatId: number, elementSetNo: number, revAtEpoch: number, bstar: number, meanMotionDot: number, meanMotionDdot: number, covReferenceFrame: refFrame, cxX: number, cyX: number, cyY: number, czX: number, czY: number, czZ: number, cxDotX: number, cxDotY: number, cxDotZ: number, cxDotXDot: number, cyDotX: number, cyDotY: number, cyDotZ: number, cyDotXDot: number, cyDotYDot: number, czDotX: number, czDotY: number, czDotZ: number, czDotXDot: number, czDotYDot: number, czDotZDot: number, userDefinedBip0044Type: number, userDefinedObjectDesignatorOffset: flatbuffers.Offset, userDefinedEarthModelOffset: flatbuffers.Offset, userDefinedEpochTimestamp: number, userDefinedMicroseconds: number): flatbuffers.Offset;
    unpack(): OMMT;
    unpackTo(_o: OMMT): void;
}
export declare class OMMT implements flatbuffers.IGeneratedObject {
    ccsdsOmmVers: number;
    creationDate: string | Uint8Array | null;
    originator: string | Uint8Array | null;
    objectName: string | Uint8Array | null;
    objectId: string | Uint8Array | null;
    centerName: string | Uint8Array | null;
    referenceFrame: refFrame;
    referenceFrameEpoch: string | Uint8Array | null;
    timeSystem: timeSystem;
    meanElementTheory: meanElementTheory;
    comment: string | Uint8Array | null;
    epoch: string | Uint8Array | null;
    semiMajorAxis: number;
    meanMotion: number;
    eccentricity: number;
    inclination: number;
    raOfAscNode: number;
    argOfPericenter: number;
    meanAnomaly: number;
    gm: number;
    mass: number;
    solarRadArea: number;
    solarRadCoeff: number;
    dragArea: number;
    dragCoeff: number;
    ephemerisType: ephemerisType;
    classificationType: string | Uint8Array | null;
    noradCatId: number;
    elementSetNo: number;
    revAtEpoch: number;
    bstar: number;
    meanMotionDot: number;
    meanMotionDdot: number;
    covReferenceFrame: refFrame;
    cxX: number;
    cyX: number;
    cyY: number;
    czX: number;
    czY: number;
    czZ: number;
    cxDotX: number;
    cxDotY: number;
    cxDotZ: number;
    cxDotXDot: number;
    cyDotX: number;
    cyDotY: number;
    cyDotZ: number;
    cyDotXDot: number;
    cyDotYDot: number;
    czDotX: number;
    czDotY: number;
    czDotZ: number;
    czDotXDot: number;
    czDotYDot: number;
    czDotZDot: number;
    userDefinedBip0044Type: number;
    userDefinedObjectDesignator: string | Uint8Array | null;
    userDefinedEarthModel: string | Uint8Array | null;
    userDefinedEpochTimestamp: number;
    userDefinedMicroseconds: number;
    constructor(ccsdsOmmVers?: number, creationDate?: string | Uint8Array | null, originator?: string | Uint8Array | null, objectName?: string | Uint8Array | null, objectId?: string | Uint8Array | null, centerName?: string | Uint8Array | null, referenceFrame?: refFrame, referenceFrameEpoch?: string | Uint8Array | null, timeSystem?: timeSystem, meanElementTheory?: meanElementTheory, comment?: string | Uint8Array | null, epoch?: string | Uint8Array | null, semiMajorAxis?: number, meanMotion?: number, eccentricity?: number, inclination?: number, raOfAscNode?: number, argOfPericenter?: number, meanAnomaly?: number, gm?: number, mass?: number, solarRadArea?: number, solarRadCoeff?: number, dragArea?: number, dragCoeff?: number, ephemerisType?: ephemerisType, classificationType?: string | Uint8Array | null, noradCatId?: number, elementSetNo?: number, revAtEpoch?: number, bstar?: number, meanMotionDot?: number, meanMotionDdot?: number, covReferenceFrame?: refFrame, cxX?: number, cyX?: number, cyY?: number, czX?: number, czY?: number, czZ?: number, cxDotX?: number, cxDotY?: number, cxDotZ?: number, cxDotXDot?: number, cyDotX?: number, cyDotY?: number, cyDotZ?: number, cyDotXDot?: number, cyDotYDot?: number, czDotX?: number, czDotY?: number, czDotZ?: number, czDotXDot?: number, czDotYDot?: number, czDotZDot?: number, userDefinedBip0044Type?: number, userDefinedObjectDesignator?: string | Uint8Array | null, userDefinedEarthModel?: string | Uint8Array | null, userDefinedEpochTimestamp?: number, userDefinedMicroseconds?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=omm.d.ts.map