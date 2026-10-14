import * as flatbuffers from 'flatbuffers';
import { mplElements, mplElementsT } from './mplElements.js';
/**
 * Closed-loop rendezvous in the target's RIC axes: a free-drift leg to a
 * brake point, a fifth-order braking profile to a hold point, and a hold,
 * tracked by a feedback controller and propagated on a truth model.
 */
export declare class mplRendezvousRequest implements flatbuffers.IUnpackableObject<mplRendezvousRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRendezvousRequest;
    static getRootAsmplRendezvousRequest(bb: flatbuffers.ByteBuffer, obj?: mplRendezvousRequest): mplRendezvousRequest;
    static getSizePrefixedRootAsmplRendezvousRequest(bb: flatbuffers.ByteBuffer, obj?: mplRendezvousRequest): mplRendezvousRequest;
    /**
     * The target's orbit.
     */
    REFERENCE(obj?: mplElements): mplElements | null;
    /**
     * Chaser's starting position, RIC, km, 3 values.
     */
    INITIAL_POSITION_KM(index: number): number | null;
    initialPositionKmLength(): number;
    initialPositionKmArray(): Float64Array | null;
    /**
     * Chaser's starting velocity, RIC, km/s, 3 values; empty = solve it so
     * the drift leg reaches BRAKE_POINT_KM after DRIFT_DURATION_S.
     */
    INITIAL_VELOCITY_KM_S(index: number): number | null;
    initialVelocityKmSLength(): number;
    initialVelocityKmSArray(): Float64Array | null;
    /**
     * Brake gate, RIC, km, 3 values.
     */
    BRAKE_POINT_KM(index: number): number | null;
    brakePointKmLength(): number;
    brakePointKmArray(): Float64Array | null;
    /**
     * Hold point reached with zero relative velocity, RIC, km, 3 values.
     */
    HOLD_POINT_KM(index: number): number | null;
    holdPointKmLength(): number;
    holdPointKmArray(): Float64Array | null;
    DRIFT_DURATION_S(): number;
    BRAKE_DURATION_S(): number;
    /**
     * Hold after braking, s; 0 = none.
     */
    HOLD_DURATION_S(): number;
    /**
     * Closed-loop natural frequency, rad/s; 0 = ten times the mean motion.
     */
    BANDWIDTH_RAD_S(): number;
    /**
     * Closed-loop damping ratio; read only when HAS_DAMPING_RATIO (false = 1,
     * critically damped).
     */
    DAMPING_RATIO(): number;
    HAS_DAMPING_RATIO(): boolean;
    /**
     * Proportional gain, 1/s^2; read only when HAS_KP (false = from the
     * bandwidth).
     */
    KP_PER_S2(): number;
    HAS_KP(): boolean;
    /**
     * Derivative gain, 1/s; read only when HAS_KD (false = from the damping
     * ratio).
     */
    KD_PER_S(): number;
    HAS_KD(): boolean;
    /**
     * Apply the reference acceleration as feedforward.
     */
    FEEDFORWARD(): boolean;
    /**
     * Cancel the Coriolis coupling of the relative dynamics.
     */
    COMPENSATE_CORIOLIS(): boolean;
    /**
     * Cancel the gravity-gradient coupling.
     */
    COMPENSATE_GRAVITY_GRADIENT(): boolean;
    /**
     * Command saturation, km/s^2; 0 = unlimited.
     */
    MAX_ACCELERATION_KM_S2(): number;
    /**
     * Integration step and control period, s; 0 = 1 s.
     */
    TIME_STEP_S(): number;
    /**
     * Log every Nth step to the answer's samples (the last step always); 0 =
     * default.
     */
    OUTPUT_EVERY(): number;
    /**
     * Include J2 in the truth gravity.
     */
    INCLUDE_J2(): boolean;
    static startmplRendezvousRequest(builder: flatbuffers.Builder): void;
    static addReference(builder: flatbuffers.Builder, REFERENCEOffset: flatbuffers.Offset): void;
    static addInitialPositionKm(builder: flatbuffers.Builder, INITIAL_POSITION_KMOffset: flatbuffers.Offset): void;
    static createInitialPositionKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInitialPositionKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInitialPositionKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialVelocityKmS(builder: flatbuffers.Builder, INITIAL_VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createInitialVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInitialVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInitialVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBrakePointKm(builder: flatbuffers.Builder, BRAKE_POINT_KMOffset: flatbuffers.Offset): void;
    static createBrakePointKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBrakePointKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBrakePointKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHoldPointKm(builder: flatbuffers.Builder, HOLD_POINT_KMOffset: flatbuffers.Offset): void;
    static createHoldPointKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHoldPointKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHoldPointKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDriftDurationS(builder: flatbuffers.Builder, DRIFT_DURATION_S: number): void;
    static addBrakeDurationS(builder: flatbuffers.Builder, BRAKE_DURATION_S: number): void;
    static addHoldDurationS(builder: flatbuffers.Builder, HOLD_DURATION_S: number): void;
    static addBandwidthRadS(builder: flatbuffers.Builder, BANDWIDTH_RAD_S: number): void;
    static addDampingRatio(builder: flatbuffers.Builder, DAMPING_RATIO: number): void;
    static addHasDampingRatio(builder: flatbuffers.Builder, HAS_DAMPING_RATIO: boolean): void;
    static addKpPerS2(builder: flatbuffers.Builder, KP_PER_S2: number): void;
    static addHasKp(builder: flatbuffers.Builder, HAS_KP: boolean): void;
    static addKdPerS(builder: flatbuffers.Builder, KD_PER_S: number): void;
    static addHasKd(builder: flatbuffers.Builder, HAS_KD: boolean): void;
    static addFeedforward(builder: flatbuffers.Builder, FEEDFORWARD: boolean): void;
    static addCompensateCoriolis(builder: flatbuffers.Builder, COMPENSATE_CORIOLIS: boolean): void;
    static addCompensateGravityGradient(builder: flatbuffers.Builder, COMPENSATE_GRAVITY_GRADIENT: boolean): void;
    static addMaxAccelerationKmS2(builder: flatbuffers.Builder, MAX_ACCELERATION_KM_S2: number): void;
    static addTimeStepS(builder: flatbuffers.Builder, TIME_STEP_S: number): void;
    static addOutputEvery(builder: flatbuffers.Builder, OUTPUT_EVERY: number): void;
    static addIncludeJ2(builder: flatbuffers.Builder, INCLUDE_J2: boolean): void;
    static endmplRendezvousRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplRendezvousRequest(builder: flatbuffers.Builder, REFERENCEOffset: flatbuffers.Offset, INITIAL_POSITION_KMOffset: flatbuffers.Offset, INITIAL_VELOCITY_KM_SOffset: flatbuffers.Offset, BRAKE_POINT_KMOffset: flatbuffers.Offset, HOLD_POINT_KMOffset: flatbuffers.Offset, DRIFT_DURATION_S: number, BRAKE_DURATION_S: number, HOLD_DURATION_S: number, BANDWIDTH_RAD_S: number, DAMPING_RATIO: number, HAS_DAMPING_RATIO: boolean, KP_PER_S2: number, HAS_KP: boolean, KD_PER_S: number, HAS_KD: boolean, FEEDFORWARD: boolean, COMPENSATE_CORIOLIS: boolean, COMPENSATE_GRAVITY_GRADIENT: boolean, MAX_ACCELERATION_KM_S2: number, TIME_STEP_S: number, OUTPUT_EVERY: number, INCLUDE_J2: boolean): flatbuffers.Offset;
    unpack(): mplRendezvousRequestT;
    unpackTo(_o: mplRendezvousRequestT): void;
}
export declare class mplRendezvousRequestT implements flatbuffers.IGeneratedObject {
    REFERENCE: mplElementsT | null;
    INITIAL_POSITION_KM: (number)[];
    INITIAL_VELOCITY_KM_S: (number)[];
    BRAKE_POINT_KM: (number)[];
    HOLD_POINT_KM: (number)[];
    DRIFT_DURATION_S: number;
    BRAKE_DURATION_S: number;
    HOLD_DURATION_S: number;
    BANDWIDTH_RAD_S: number;
    DAMPING_RATIO: number;
    HAS_DAMPING_RATIO: boolean;
    KP_PER_S2: number;
    HAS_KP: boolean;
    KD_PER_S: number;
    HAS_KD: boolean;
    FEEDFORWARD: boolean;
    COMPENSATE_CORIOLIS: boolean;
    COMPENSATE_GRAVITY_GRADIENT: boolean;
    MAX_ACCELERATION_KM_S2: number;
    TIME_STEP_S: number;
    OUTPUT_EVERY: number;
    INCLUDE_J2: boolean;
    constructor(REFERENCE?: mplElementsT | null, INITIAL_POSITION_KM?: (number)[], INITIAL_VELOCITY_KM_S?: (number)[], BRAKE_POINT_KM?: (number)[], HOLD_POINT_KM?: (number)[], DRIFT_DURATION_S?: number, BRAKE_DURATION_S?: number, HOLD_DURATION_S?: number, BANDWIDTH_RAD_S?: number, DAMPING_RATIO?: number, HAS_DAMPING_RATIO?: boolean, KP_PER_S2?: number, HAS_KP?: boolean, KD_PER_S?: number, HAS_KD?: boolean, FEEDFORWARD?: boolean, COMPENSATE_CORIOLIS?: boolean, COMPENSATE_GRAVITY_GRADIENT?: boolean, MAX_ACCELERATION_KM_S2?: number, TIME_STEP_S?: number, OUTPUT_EVERY?: number, INCLUDE_J2?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRendezvousRequest.d.ts.map