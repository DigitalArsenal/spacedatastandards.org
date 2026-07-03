import * as flatbuffers from 'flatbuffers';
import { maneuverCharacterization } from './maneuverCharacterization.js';
import { maneuverStatus } from './maneuverStatus.js';
import { mnvOrbitalState, mnvOrbitalStateT } from './mnvOrbitalState.js';
/**
 * Spacecraft Maneuver
 */
export declare class MNV implements flatbuffers.IUnpackableObject<MNVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MNV;
    static getRootAsMNV(bb: flatbuffers.ByteBuffer, obj?: MNV): MNV;
    static getSizePrefixedRootAsMNV(bb: flatbuffers.ByteBuffer, obj?: MNV): MNV;
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
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maneuver status
     */
    STATUS(): maneuverStatus;
    /**
     * Maneuver characterization
     */
    CHARACTERIZATION(): maneuverCharacterization;
    /**
     * Characterization uncertainty (0-1)
     */
    CHARACTERIZATION_UNC(): number;
    /**
     * Detection report time (ISO 8601)
     */
    REPORT_TIME(): string | null;
    REPORT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maneuver start time (ISO 8601)
     */
    EVENT_START_TIME(): string | null;
    EVENT_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maneuver end time (ISO 8601)
     */
    EVENT_END_TIME(): string | null;
    EVENT_END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total burn time (seconds)
     */
    TOTAL_BURN_TIME(): number;
    /**
     * OD fit end time (ISO 8601)
     */
    OD_FIT_END_TIME(): string | null;
    OD_FIT_END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detecting sensor identifier
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maneuver event identifier
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if object is uncorrelated
     */
    UCT(): boolean;
    /**
     * Maneuver detection uncertainty (km)
     */
    MANEUVER_UNC(): number;
    /**
     * Total delta-V magnitude (km/s)
     */
    DELTA_VEL(): number;
    /**
     * Delta-V along-track/U component (km/s)
     */
    DELTA_VEL_U(): number;
    /**
     * Delta-V cross-track/V component (km/s)
     */
    DELTA_VEL_V(): number;
    /**
     * Delta-V radial/W component (km/s)
     */
    DELTA_VEL_W(): number;
    /**
     * Total delta position (km)
     */
    DELTA_POS(): number;
    /**
     * Delta position U component (km)
     */
    DELTA_POS_U(): number;
    /**
     * Delta position V component (km)
     */
    DELTA_POS_V(): number;
    /**
     * Delta position W component (km)
     */
    DELTA_POS_W(): number;
    /**
     * Propellant mass consumed (kg)
     */
    DELTA_MASS(): number;
    /**
     * Pre-maneuver orbital state
     */
    PRE_EVENT(obj?: mnvOrbitalState): mnvOrbitalState | null;
    /**
     * Post-maneuver orbital state
     */
    POST_EVENT(obj?: mnvOrbitalState): mnvOrbitalState | null;
    /**
     * Post-maneuver mass (kg)
     */
    POST_MASS(): number;
    /**
     * Post-maneuver cross-sectional area (m^2)
     */
    POST_AREA(): number;
    /**
     * 6x6 covariance matrix (upper triangle, row-major)
     */
    COV(index: number): number | null;
    covLength(): number;
    covArray(): Float64Array | null;
    /**
     * Number of observations used
     */
    NUM_OBS(): number;
    /**
     * State model used
     */
    STATE_MODEL(): string | null;
    STATE_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State model version
     */
    STATE_MODEL_VERSION(): number;
    /**
     * Number of acceleration profile points
     */
    NUM_ACCEL_POINTS(): number;
    /**
     * Acceleration profile times (ISO 8601)
     */
    MNVR_ACCEL_TIMES(index: number): string;
    MNVR_ACCEL_TIMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    mnvrAccelTimesLength(): number;
    /**
     * Acceleration values (km/s^2, 3 components per point)
     */
    MNVR_ACCELS(index: number): number | null;
    mnvrAccelsLength(): number;
    mnvrAccelsArray(): Float64Array | null;
    /**
     * Acceleration uncertainties (km/s^2)
     */
    MNVR_ACCEL_UNCS(index: number): number | null;
    mnvrAccelUncsLength(): number;
    mnvrAccelUncsArray(): Float64Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event descriptor
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Algorithm used for detection
     */
    ALGORITHM(): string | null;
    ALGORITHM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Sourced data references
     */
    SOURCED_DATA(index: number): string;
    SOURCED_DATA(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourcedDataLength(): number;
    /**
     * Sourced data types
     */
    SOURCED_DATA_TYPES(): string | null;
    SOURCED_DATA_TYPES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMNV(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: maneuverStatus): void;
    static addCharacterization(builder: flatbuffers.Builder, CHARACTERIZATION: maneuverCharacterization): void;
    static addCharacterizationUnc(builder: flatbuffers.Builder, CHARACTERIZATION_UNC: number): void;
    static addReportTime(builder: flatbuffers.Builder, REPORT_TIMEOffset: flatbuffers.Offset): void;
    static addEventStartTime(builder: flatbuffers.Builder, EVENT_START_TIMEOffset: flatbuffers.Offset): void;
    static addEventEndTime(builder: flatbuffers.Builder, EVENT_END_TIMEOffset: flatbuffers.Offset): void;
    static addTotalBurnTime(builder: flatbuffers.Builder, TOTAL_BURN_TIME: number): void;
    static addOdFitEndTime(builder: flatbuffers.Builder, OD_FIT_END_TIMEOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
    static addManeuverUnc(builder: flatbuffers.Builder, MANEUVER_UNC: number): void;
    static addDeltaVel(builder: flatbuffers.Builder, DELTA_VEL: number): void;
    static addDeltaVelU(builder: flatbuffers.Builder, DELTA_VEL_U: number): void;
    static addDeltaVelV(builder: flatbuffers.Builder, DELTA_VEL_V: number): void;
    static addDeltaVelW(builder: flatbuffers.Builder, DELTA_VEL_W: number): void;
    static addDeltaPos(builder: flatbuffers.Builder, DELTA_POS: number): void;
    static addDeltaPosU(builder: flatbuffers.Builder, DELTA_POS_U: number): void;
    static addDeltaPosV(builder: flatbuffers.Builder, DELTA_POS_V: number): void;
    static addDeltaPosW(builder: flatbuffers.Builder, DELTA_POS_W: number): void;
    static addDeltaMass(builder: flatbuffers.Builder, DELTA_MASS: number): void;
    static addPreEvent(builder: flatbuffers.Builder, PRE_EVENTOffset: flatbuffers.Offset): void;
    static addPostEvent(builder: flatbuffers.Builder, POST_EVENTOffset: flatbuffers.Offset): void;
    static addPostMass(builder: flatbuffers.Builder, POST_MASS: number): void;
    static addPostArea(builder: flatbuffers.Builder, POST_AREA: number): void;
    static addCov(builder: flatbuffers.Builder, COVOffset: flatbuffers.Offset): void;
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNumObs(builder: flatbuffers.Builder, NUM_OBS: number): void;
    static addStateModel(builder: flatbuffers.Builder, STATE_MODELOffset: flatbuffers.Offset): void;
    static addStateModelVersion(builder: flatbuffers.Builder, STATE_MODEL_VERSION: number): void;
    static addNumAccelPoints(builder: flatbuffers.Builder, NUM_ACCEL_POINTS: number): void;
    static addMnvrAccelTimes(builder: flatbuffers.Builder, MNVR_ACCEL_TIMESOffset: flatbuffers.Offset): void;
    static createMnvrAccelTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMnvrAccelTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMnvrAccels(builder: flatbuffers.Builder, MNVR_ACCELSOffset: flatbuffers.Offset): void;
    static createMnvrAccelsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMnvrAccelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMnvrAccelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMnvrAccelUncs(builder: flatbuffers.Builder, MNVR_ACCEL_UNCSOffset: flatbuffers.Offset): void;
    static createMnvrAccelUncsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMnvrAccelUncsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMnvrAccelUncsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHMOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourcedData(builder: flatbuffers.Builder, SOURCED_DATAOffset: flatbuffers.Offset): void;
    static createSourcedDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcedDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourcedDataTypes(builder: flatbuffers.Builder, SOURCED_DATA_TYPESOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static endMNV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMNVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMNVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MNVT;
    unpackTo(_o: MNVT): void;
}
export declare class MNVT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    STATUS: maneuverStatus;
    CHARACTERIZATION: maneuverCharacterization;
    CHARACTERIZATION_UNC: number;
    REPORT_TIME: string | Uint8Array | null;
    EVENT_START_TIME: string | Uint8Array | null;
    EVENT_END_TIME: string | Uint8Array | null;
    TOTAL_BURN_TIME: number;
    OD_FIT_END_TIME: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    EVENT_ID: string | Uint8Array | null;
    UCT: boolean;
    MANEUVER_UNC: number;
    DELTA_VEL: number;
    DELTA_VEL_U: number;
    DELTA_VEL_V: number;
    DELTA_VEL_W: number;
    DELTA_POS: number;
    DELTA_POS_U: number;
    DELTA_POS_V: number;
    DELTA_POS_W: number;
    DELTA_MASS: number;
    PRE_EVENT: mnvOrbitalStateT | null;
    POST_EVENT: mnvOrbitalStateT | null;
    POST_MASS: number;
    POST_AREA: number;
    COV: (number)[];
    NUM_OBS: number;
    STATE_MODEL: string | Uint8Array | null;
    STATE_MODEL_VERSION: number;
    NUM_ACCEL_POINTS: number;
    MNVR_ACCEL_TIMES: (string)[];
    MNVR_ACCELS: (number)[];
    MNVR_ACCEL_UNCS: (number)[];
    DESCRIPTION: string | Uint8Array | null;
    DESCRIPTOR: string | Uint8Array | null;
    ALGORITHM: string | Uint8Array | null;
    TAGS: (string)[];
    SOURCED_DATA: (string)[];
    SOURCED_DATA_TYPES: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, STATUS?: maneuverStatus, CHARACTERIZATION?: maneuverCharacterization, CHARACTERIZATION_UNC?: number, REPORT_TIME?: string | Uint8Array | null, EVENT_START_TIME?: string | Uint8Array | null, EVENT_END_TIME?: string | Uint8Array | null, TOTAL_BURN_TIME?: number, OD_FIT_END_TIME?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, EVENT_ID?: string | Uint8Array | null, UCT?: boolean, MANEUVER_UNC?: number, DELTA_VEL?: number, DELTA_VEL_U?: number, DELTA_VEL_V?: number, DELTA_VEL_W?: number, DELTA_POS?: number, DELTA_POS_U?: number, DELTA_POS_V?: number, DELTA_POS_W?: number, DELTA_MASS?: number, PRE_EVENT?: mnvOrbitalStateT | null, POST_EVENT?: mnvOrbitalStateT | null, POST_MASS?: number, POST_AREA?: number, COV?: (number)[], NUM_OBS?: number, STATE_MODEL?: string | Uint8Array | null, STATE_MODEL_VERSION?: number, NUM_ACCEL_POINTS?: number, MNVR_ACCEL_TIMES?: (string)[], MNVR_ACCELS?: (number)[], MNVR_ACCEL_UNCS?: (number)[], DESCRIPTION?: string | Uint8Array | null, DESCRIPTOR?: string | Uint8Array | null, ALGORITHM?: string | Uint8Array | null, TAGS?: (string)[], SOURCED_DATA?: (string)[], SOURCED_DATA_TYPES?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MNV.d.ts.map