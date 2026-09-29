import * as flatbuffers from 'flatbuffers';
import { ACWConstraintSet, ACWConstraintSetT } from './ACWConstraintSet.js';
import { MEMErrorModel, MEMErrorModelT } from './MEMErrorModel.js';
import { acwSensorPhenomenology } from './acwSensorPhenomenology.js';
/**
 * A simulated sensor hosted by a ground station or an observer trajectory.
 */
export declare class ACWSensor implements flatbuffers.IUnpackableObject<ACWSensorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWSensor;
    static getRootAsACWSensor(bb: flatbuffers.ByteBuffer, obj?: ACWSensor): ACWSensor;
    static getSizePrefixedRootAsACWSensor(bb: flatbuffers.ByteBuffer, obj?: ACWSensor): ACWSensor;
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ACWGroundStation.STATION_ID or ACWObserverTrajectory.OBSERVER_ID of the
     * host.
     */
    HOST_ID(): string | null;
    HOST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PHENOMENOLOGY(): acwSensorPhenomenology;
    /**
     * The measurements each observation carries, one error model per
     * measurement type (noise, bias, bias uncertainty, correlation time,
     * media and light-time options).
     */
    ERROR_MODELS(index: number, obj?: MEMErrorModel): MEMErrorModel | null;
    errorModelsLength(): number;
    /**
     * Visibility for this sensor, the constraints its ACCESS windows were
     * computed with. When absent, ACWRequest.CONSTRAINTS apply.
     */
    CONSTRAINTS(obj?: ACWConstraintSet): ACWConstraintSet | null;
    /**
     * Seconds between observations within a track.
     */
    OBSERVATION_INTERVAL_S(): number;
    /**
     * Longest track, seconds; 0 tracks the whole access window.
     */
    TRACK_DURATION_S(): number;
    /**
     * Shortest time between the end of one track of a target and the start
     * of the next, seconds.
     */
    REVISIT_INTERVAL_S(): number;
    /**
     * Targets tracked at once.
     */
    MAX_SIMULTANEOUS_TRACKS(): number;
    /**
     * RADAR: signal-to-noise ratio, dB, of a REFERENCE_RCS_M2 target at
     * REFERENCE_RANGE_M; SNR scales with RCS and with range to the -4th power.
     */
    REFERENCE_SNR_DB(): number;
    REFERENCE_RANGE_M(): number;
    REFERENCE_RCS_M2(): number;
    /**
     * RADAR and PASSIVE_RF: smallest detected signal-to-noise ratio, dB.
     */
    DETECTION_THRESHOLD_DB(): number;
    /**
     * PASSIVE_RF: receiver figure of merit, dB/K, and noise bandwidth, hertz.
     */
    RECEIVER_G_OVER_T_DB_PER_K(): number;
    RECEIVER_BANDWIDTH_HZ(): number;
    /**
     * OPTICAL: faintest magnitude detected, in the band of EOO.MAG; 0 applies
     * no magnitude limit.
     */
    LIMITING_MAGNITUDE(): number;
    /**
     * OPTICAL: highest Sun elevation at the host for a detection, radians
     * (ground-based darkness); requires SUN_STATES. Observations scheduled
     * in brighter sky are lost.
     */
    MAX_HOST_SUN_ELEVATION_RAD(): number;
    /**
     * Uncorrelated detections per hour of tracking, reported with UCT set.
     */
    FALSE_ALARM_RATE_PER_HOUR(): number;
    static startACWSensor(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addHostId(builder: flatbuffers.Builder, HOST_IDOffset: flatbuffers.Offset): void;
    static addPhenomenology(builder: flatbuffers.Builder, PHENOMENOLOGY: acwSensorPhenomenology): void;
    static addErrorModels(builder: flatbuffers.Builder, ERROR_MODELSOffset: flatbuffers.Offset): void;
    static createErrorModelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startErrorModelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraints(builder: flatbuffers.Builder, CONSTRAINTSOffset: flatbuffers.Offset): void;
    static addObservationIntervalS(builder: flatbuffers.Builder, OBSERVATION_INTERVAL_S: number): void;
    static addTrackDurationS(builder: flatbuffers.Builder, TRACK_DURATION_S: number): void;
    static addRevisitIntervalS(builder: flatbuffers.Builder, REVISIT_INTERVAL_S: number): void;
    static addMaxSimultaneousTracks(builder: flatbuffers.Builder, MAX_SIMULTANEOUS_TRACKS: number): void;
    static addReferenceSnrDb(builder: flatbuffers.Builder, REFERENCE_SNR_DB: number): void;
    static addReferenceRangeM(builder: flatbuffers.Builder, REFERENCE_RANGE_M: number): void;
    static addReferenceRcsM2(builder: flatbuffers.Builder, REFERENCE_RCS_M2: number): void;
    static addDetectionThresholdDb(builder: flatbuffers.Builder, DETECTION_THRESHOLD_DB: number): void;
    static addReceiverGOverTDbPerK(builder: flatbuffers.Builder, RECEIVER_G_OVER_T_DB_PER_K: number): void;
    static addReceiverBandwidthHz(builder: flatbuffers.Builder, RECEIVER_BANDWIDTH_HZ: number): void;
    static addLimitingMagnitude(builder: flatbuffers.Builder, LIMITING_MAGNITUDE: number): void;
    static addMaxHostSunElevationRad(builder: flatbuffers.Builder, MAX_HOST_SUN_ELEVATION_RAD: number): void;
    static addFalseAlarmRatePerHour(builder: flatbuffers.Builder, FALSE_ALARM_RATE_PER_HOUR: number): void;
    static endACWSensor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ACWSensorT;
    unpackTo(_o: ACWSensorT): void;
}
export declare class ACWSensorT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    HOST_ID: string | Uint8Array | null;
    PHENOMENOLOGY: acwSensorPhenomenology;
    ERROR_MODELS: (MEMErrorModelT)[];
    CONSTRAINTS: ACWConstraintSetT | null;
    OBSERVATION_INTERVAL_S: number;
    TRACK_DURATION_S: number;
    REVISIT_INTERVAL_S: number;
    MAX_SIMULTANEOUS_TRACKS: number;
    REFERENCE_SNR_DB: number;
    REFERENCE_RANGE_M: number;
    REFERENCE_RCS_M2: number;
    DETECTION_THRESHOLD_DB: number;
    RECEIVER_G_OVER_T_DB_PER_K: number;
    RECEIVER_BANDWIDTH_HZ: number;
    LIMITING_MAGNITUDE: number;
    MAX_HOST_SUN_ELEVATION_RAD: number;
    FALSE_ALARM_RATE_PER_HOUR: number;
    constructor(SENSOR_ID?: string | Uint8Array | null, HOST_ID?: string | Uint8Array | null, PHENOMENOLOGY?: acwSensorPhenomenology, ERROR_MODELS?: (MEMErrorModelT)[], CONSTRAINTS?: ACWConstraintSetT | null, OBSERVATION_INTERVAL_S?: number, TRACK_DURATION_S?: number, REVISIT_INTERVAL_S?: number, MAX_SIMULTANEOUS_TRACKS?: number, REFERENCE_SNR_DB?: number, REFERENCE_RANGE_M?: number, REFERENCE_RCS_M2?: number, DETECTION_THRESHOLD_DB?: number, RECEIVER_G_OVER_T_DB_PER_K?: number, RECEIVER_BANDWIDTH_HZ?: number, LIMITING_MAGNITUDE?: number, MAX_HOST_SUN_ELEVATION_RAD?: number, FALSE_ALARM_RATE_PER_HOUR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWSensor.d.ts.map