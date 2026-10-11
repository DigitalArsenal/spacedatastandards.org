import * as flatbuffers from 'flatbuffers';
import { OPMManeuver, OPMManeuverT } from './OPMManeuver.js';
import { OPMUserDefinedParameter, OPMUserDefinedParameterT } from './OPMUserDefinedParameter.js';
/**
 * Orbit Parameter Message
 */
export declare class OPM implements flatbuffers.IUnpackableObject<OPMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPM;
    static getRootAsOPM(bb: flatbuffers.ByteBuffer, obj?: OPM): OPM;
    static getSizePrefixedRootAsOPM(bb: flatbuffers.ByteBuffer, obj?: OPM): OPM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_OPM_VERS(): string | null;
    CCSDS_OPM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    X(): number;
    Y(): number;
    Z(): number;
    X_DOT(): number;
    Y_DOT(): number;
    Z_DOT(): number;
    SEMI_MAJOR_AXIS(): number;
    ECCENTRICITY(): number;
    INCLINATION(): number;
    RA_OF_ASC_NODE(): number;
    ARG_OF_PERICENTER(): number;
    TRUE_ANOMALY(): number;
    MEAN_ANOMALY(): number;
    GM(): number;
    MASS(): number;
    SOLAR_RAD_AREA(): number;
    SOLAR_RAD_COEFF(): number;
    DRAG_AREA(): number;
    DRAG_COEFF(): number;
    /**
     * COMMENT lines of the message (CCSDS 502.0-B-3), from its header, metadata
     * and data groups, in message order, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CLASSIFICATION of the message: the optional header keyword stating its
     * security classification or handling caveat.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MESSAGE_ID: the optional header keyword, an identifier the originator makes
     * unique for this message.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_EPOCH: epoch of REF_FRAME when the frame is defined at one.
     */
    REF_FRAME_EPOCH(): string | null;
    REF_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_REF_FRAME: the frame of COVARIANCE (CCSDS 502.0-B-3 Table 3-6); empty
     * when it is REF_FRAME.
     */
    COV_REF_FRAME(): string | null;
    COV_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position/velocity covariance matrix, 6x6 lower triangle by rows, 21 values:
     * CX_X, CY_X, CY_Y, CZ_X, CZ_Y, CZ_Z, CX_DOT_X, CX_DOT_Y, CX_DOT_Z,
     * CX_DOT_X_DOT, CY_DOT_X, CY_DOT_Y, CY_DOT_Z, CY_DOT_X_DOT, CY_DOT_Y_DOT,
     * CZ_DOT_X, CZ_DOT_Y, CZ_DOT_Z, CZ_DOT_X_DOT, CZ_DOT_Y_DOT, CZ_DOT_Z_DOT.
     * Units km**2, km**2/s, km**2/s**2. Empty when the message states none.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * The message's maneuvers, in message order.
     */
    MANEUVERS(index: number, obj?: OPMManeuver): OPMManeuver | null;
    maneuversLength(): number;
    /**
     * Every USER_DEFINED_x keyword of the message, in message order.
     */
    USER_DEFINED_PARAMETERS(index: number, obj?: OPMUserDefinedParameter): OPMUserDefinedParameter | null;
    userDefinedParametersLength(): number;
    static startOPM(builder: flatbuffers.Builder): void;
    static addCcsdsOpmVers(builder: flatbuffers.Builder, CCSDS_OPM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addTrueAnomaly(builder: flatbuffers.Builder, TRUE_ANOMALY: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addSolarRadArea(builder: flatbuffers.Builder, SOLAR_RAD_AREA: number): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, SOLAR_RAD_COEFF: number): void;
    static addDragArea(builder: flatbuffers.Builder, DRAG_AREA: number): void;
    static addDragCoeff(builder: flatbuffers.Builder, DRAG_COEFF: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addRefFrameEpoch(builder: flatbuffers.Builder, REF_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static createManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOPM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOPMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOPM(builder: flatbuffers.Builder, CCSDS_OPM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, REF_FRAMEOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, X_DOT: number, Y_DOT: number, Z_DOT: number, SEMI_MAJOR_AXIS: number, ECCENTRICITY: number, INCLINATION: number, RA_OF_ASC_NODE: number, ARG_OF_PERICENTER: number, TRUE_ANOMALY: number, MEAN_ANOMALY: number, GM: number, MASS: number, SOLAR_RAD_AREA: number, SOLAR_RAD_COEFF: number, DRAG_AREA: number, DRAG_COEFF: number, COMMENTOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, MESSAGE_IDOffset: flatbuffers.Offset, REF_FRAME_EPOCHOffset: flatbuffers.Offset, COV_REF_FRAMEOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset, MANEUVERSOffset: flatbuffers.Offset, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OPMT;
    unpackTo(_o: OPMT): void;
}
export declare class OPMT implements flatbuffers.IGeneratedObject {
    CCSDS_OPM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    TRUE_ANOMALY: number;
    MEAN_ANOMALY: number;
    GM: number;
    MASS: number;
    SOLAR_RAD_AREA: number;
    SOLAR_RAD_COEFF: number;
    DRAG_AREA: number;
    DRAG_COEFF: number;
    COMMENT: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    REF_FRAME_EPOCH: string | Uint8Array | null;
    COV_REF_FRAME: string | Uint8Array | null;
    COVARIANCE: (number)[];
    MANEUVERS: (OPMManeuverT)[];
    USER_DEFINED_PARAMETERS: (OPMUserDefinedParameterT)[];
    constructor(CCSDS_OPM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, TRUE_ANOMALY?: number, MEAN_ANOMALY?: number, GM?: number, MASS?: number, SOLAR_RAD_AREA?: number, SOLAR_RAD_COEFF?: number, DRAG_AREA?: number, DRAG_COEFF?: number, COMMENT?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null, REF_FRAME_EPOCH?: string | Uint8Array | null, COV_REF_FRAME?: string | Uint8Array | null, COVARIANCE?: (number)[], MANEUVERS?: (OPMManeuverT)[], USER_DEFINED_PARAMETERS?: (OPMUserDefinedParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPM.d.ts.map