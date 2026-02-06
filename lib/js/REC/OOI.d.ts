import * as flatbuffers from 'flatbuffers';
import { ooiPriority } from './ooiPriority.js';
import { ooiStatus } from './ooiStatus.js';
/**
 * Object of Interest
 */
export declare class OOI implements flatbuffers.IUnpackableObject<OOIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOI;
    static getRootAsOOI(bb: flatbuffers.ByteBuffer, obj?: OOI): OOI;
    static getSizePrefixedRootAsOOI(bb: flatbuffers.ByteBuffer, obj?: OOI): OOI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * Object name or designator
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Tasking status
     */
    STATUS(): ooiStatus;
    /**
     * Status update date (ISO 8601)
     */
    STATUS_DATE(): string | null;
    STATUS_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection priority
     */
    PRIORITY(): ooiPriority;
    /**
     * Description of why object is of interest
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor tasking start time (ISO 8601)
     */
    SENSOR_TASKING_START_TIME(): string | null;
    SENSOR_TASKING_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor tasking stop time (ISO 8601)
     */
    SENSOR_TASKING_STOP_TIME(): string | null;
    SENSOR_TASKING_STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last observation time (ISO 8601)
     */
    LAST_OB_TIME(): string | null;
    LAST_OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last missed observation time (ISO 8601)
     */
    MISSED_OB_TIME(): string | null;
    MISSED_OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State vector epoch (ISO 8601)
     */
    SV_EPOCH(): string | null;
    SV_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position X (km, TEME)
     */
    X(): number;
    /**
     * Position Y (km, TEME)
     */
    Y(): number;
    /**
     * Position Z (km, TEME)
     */
    Z(): number;
    /**
     * Velocity X (km/s, TEME)
     */
    XVEL(): number;
    /**
     * Velocity Y (km/s, TEME)
     */
    YVEL(): number;
    /**
     * Velocity Z (km/s, TEME)
     */
    ZVEL(): number;
    /**
     * Element set epoch (ISO 8601)
     */
    ELSET_EPOCH(): string | null;
    ELSET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mean motion (rev/day)
     */
    MEAN_MOTION(): number;
    /**
     * Eccentricity
     */
    ECCENTRICITY(): number;
    /**
     * Inclination (degrees)
     */
    INCLINATION(): number;
    /**
     * Right ascension of ascending node (degrees)
     */
    RAAN(): number;
    /**
     * Argument of perigee (degrees)
     */
    ARG_OF_PERIGEE(): number;
    /**
     * Mean anomaly (degrees)
     */
    MEAN_ANOMALY(): number;
    /**
     * Revolution number at epoch
     */
    REV_NO(): number;
    /**
     * BSTAR drag term (1/Earth radii)
     */
    B_STAR(): number;
    /**
     * Mean motion first derivative (rev/day^2)
     */
    MEAN_MOTION_DOT(): number;
    /**
     * Mean motion second derivative (rev/day^3)
     */
    MEAN_MOTION_DDOT(): number;
    /**
     * Semi-major axis (km)
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Orbital period (minutes)
     */
    PERIOD(): number;
    /**
     * Apogee altitude (km)
     */
    APOGEE(): number;
    /**
     * Perigee altitude (km)
     */
    PERIGEE(): number;
    /**
     * Delta-V estimates for maneuver hypotheses (m/s)
     */
    DELTA_VS(index: number): number | null;
    deltaVsLength(): number;
    deltaVsArray(): Float64Array | null;
    /**
     * Delta-T estimates for maneuver timing (seconds)
     */
    DELTA_TS(index: number): number | null;
    deltaTsLength(): number;
    deltaTsArray(): Float64Array | null;
    /**
     * Other affected satellite catalog numbers
     */
    AFFECTED_OBJECTS(index: number): string;
    AFFECTED_OBJECTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    affectedObjectsLength(): number;
    /**
     * Associated orbit manifold identifiers
     */
    MANIFOLDS(index: number): string;
    MANIFOLDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    manifoldsLength(): number;
    static startOOI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: ooiStatus): void;
    static addStatusDate(builder: flatbuffers.Builder, STATUS_DATEOffset: flatbuffers.Offset): void;
    static addPriority(builder: flatbuffers.Builder, PRIORITY: ooiPriority): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addSensorTaskingStartTime(builder: flatbuffers.Builder, SENSOR_TASKING_START_TIMEOffset: flatbuffers.Offset): void;
    static addSensorTaskingStopTime(builder: flatbuffers.Builder, SENSOR_TASKING_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addLastObTime(builder: flatbuffers.Builder, LAST_OB_TIMEOffset: flatbuffers.Offset): void;
    static addMissedObTime(builder: flatbuffers.Builder, MISSED_OB_TIMEOffset: flatbuffers.Offset): void;
    static addSvEpoch(builder: flatbuffers.Builder, SV_EPOCHOffset: flatbuffers.Offset): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXvel(builder: flatbuffers.Builder, XVEL: number): void;
    static addYvel(builder: flatbuffers.Builder, YVEL: number): void;
    static addZvel(builder: flatbuffers.Builder, ZVEL: number): void;
    static addElsetEpoch(builder: flatbuffers.Builder, ELSET_EPOCHOffset: flatbuffers.Offset): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addArgOfPerigee(builder: flatbuffers.Builder, ARG_OF_PERIGEE: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addRevNo(builder: flatbuffers.Builder, REV_NO: number): void;
    static addBStar(builder: flatbuffers.Builder, B_STAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addDeltaVs(builder: flatbuffers.Builder, DELTA_VSOffset: flatbuffers.Offset): void;
    static createDeltaVsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDeltaVsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeltaVsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDeltaTs(builder: flatbuffers.Builder, DELTA_TSOffset: flatbuffers.Offset): void;
    static createDeltaTsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDeltaTsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDeltaTsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAffectedObjects(builder: flatbuffers.Builder, AFFECTED_OBJECTSOffset: flatbuffers.Offset): void;
    static createAffectedObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAffectedObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManifolds(builder: flatbuffers.Builder, MANIFOLDSOffset: flatbuffers.Offset): void;
    static createManifoldsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManifoldsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOOI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, NAMEOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, STATUS: ooiStatus, STATUS_DATEOffset: flatbuffers.Offset, PRIORITY: ooiPriority, DESCRIPTIONOffset: flatbuffers.Offset, SENSOR_TASKING_START_TIMEOffset: flatbuffers.Offset, SENSOR_TASKING_STOP_TIMEOffset: flatbuffers.Offset, LAST_OB_TIMEOffset: flatbuffers.Offset, MISSED_OB_TIMEOffset: flatbuffers.Offset, SV_EPOCHOffset: flatbuffers.Offset, X: number, Y: number, Z: number, XVEL: number, YVEL: number, ZVEL: number, ELSET_EPOCHOffset: flatbuffers.Offset, MEAN_MOTION: number, ECCENTRICITY: number, INCLINATION: number, RAAN: number, ARG_OF_PERIGEE: number, MEAN_ANOMALY: number, REV_NO: number, B_STAR: number, MEAN_MOTION_DOT: number, MEAN_MOTION_DDOT: number, SEMI_MAJOR_AXIS: number, PERIOD: number, APOGEE: number, PERIGEE: number, DELTA_VSOffset: flatbuffers.Offset, DELTA_TSOffset: flatbuffers.Offset, AFFECTED_OBJECTSOffset: flatbuffers.Offset, MANIFOLDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOIT;
    unpackTo(_o: OOIT): void;
}
export declare class OOIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    NAME: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    STATUS: ooiStatus;
    STATUS_DATE: string | Uint8Array | null;
    PRIORITY: ooiPriority;
    DESCRIPTION: string | Uint8Array | null;
    SENSOR_TASKING_START_TIME: string | Uint8Array | null;
    SENSOR_TASKING_STOP_TIME: string | Uint8Array | null;
    LAST_OB_TIME: string | Uint8Array | null;
    MISSED_OB_TIME: string | Uint8Array | null;
    SV_EPOCH: string | Uint8Array | null;
    X: number;
    Y: number;
    Z: number;
    XVEL: number;
    YVEL: number;
    ZVEL: number;
    ELSET_EPOCH: string | Uint8Array | null;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RAAN: number;
    ARG_OF_PERIGEE: number;
    MEAN_ANOMALY: number;
    REV_NO: number;
    B_STAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    SEMI_MAJOR_AXIS: number;
    PERIOD: number;
    APOGEE: number;
    PERIGEE: number;
    DELTA_VS: (number)[];
    DELTA_TS: (number)[];
    AFFECTED_OBJECTS: (string)[];
    MANIFOLDS: (string)[];
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, NAME?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, STATUS?: ooiStatus, STATUS_DATE?: string | Uint8Array | null, PRIORITY?: ooiPriority, DESCRIPTION?: string | Uint8Array | null, SENSOR_TASKING_START_TIME?: string | Uint8Array | null, SENSOR_TASKING_STOP_TIME?: string | Uint8Array | null, LAST_OB_TIME?: string | Uint8Array | null, MISSED_OB_TIME?: string | Uint8Array | null, SV_EPOCH?: string | Uint8Array | null, X?: number, Y?: number, Z?: number, XVEL?: number, YVEL?: number, ZVEL?: number, ELSET_EPOCH?: string | Uint8Array | null, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RAAN?: number, ARG_OF_PERIGEE?: number, MEAN_ANOMALY?: number, REV_NO?: number, B_STAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, SEMI_MAJOR_AXIS?: number, PERIOD?: number, APOGEE?: number, PERIGEE?: number, DELTA_VS?: (number)[], DELTA_TS?: (number)[], AFFECTED_OBJECTS?: (string)[], MANIFOLDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOI.d.ts.map