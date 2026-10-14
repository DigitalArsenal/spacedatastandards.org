import * as flatbuffers from 'flatbuffers';
import { mplRendezvousPhase } from './mplRendezvousPhase.js';
/**
 * Closed-loop rendezvous detail. Samples are column-major and parallel,
 * one entry (or three, for vectors) per sample, all in the target's RIC
 * axes.
 */
export declare class mplRendezvousSolution implements flatbuffers.IUnpackableObject<mplRendezvousSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRendezvousSolution;
    static getRootAsmplRendezvousSolution(bb: flatbuffers.ByteBuffer, obj?: mplRendezvousSolution): mplRendezvousSolution;
    static getSizePrefixedRootAsmplRendezvousSolution(bb: flatbuffers.ByteBuffer, obj?: mplRendezvousSolution): mplRendezvousSolution;
    /**
     * Model reference, e.g. "HCW drift + quintic brake + feedback-linearized
     * PD".
     */
    MODEL_REFERENCE(): string | null;
    MODEL_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mean motion of the target, rad/s.
     */
    MEAN_MOTION_RAD_S(): number;
    /**
     * Drift-leg initial velocity (solved or given), km/s, 3 values.
     */
    INITIAL_VELOCITY_KM_S(index: number): number | null;
    initialVelocityKmSLength(): number;
    initialVelocityKmSArray(): Float64Array | null;
    /**
     * Per-axis proportional (1/s^2) and derivative (1/s) gains, 3 values each.
     */
    KP_PER_S2(index: number): number | null;
    kpPerS2Length(): number;
    kpPerS2Array(): Float64Array | null;
    KD_PER_S(index: number): number | null;
    kdPerSLength(): number;
    kdPerSArray(): Float64Array | null;
    /**
     * End of the drift and of the braking phase, and the total time, s from
     * the start.
     */
    DRIFT_END_S(): number;
    BRAKE_END_S(): number;
    TOTAL_TIME_S(): number;
    /**
     * Control effort and tracking metrics.
     */
    MAX_CONTROL_ACCELERATION_KM_S2(): number;
    SATURATED_STEPS(): number;
    MAX_POSITION_ERROR_KM(): number;
    RMS_POSITION_ERROR_KM(): number;
    MAX_POSITION_ERROR_DRIFT_KM(): number;
    MAX_POSITION_ERROR_BRAKE_KM(): number;
    MAX_POSITION_ERROR_HOLD_KM(): number;
    FINAL_POSITION_ERROR_KM(): number;
    FINAL_VELOCITY_ERROR_KM_S(): number;
    /**
     * Sample times, s from the start.
     */
    SAMPLE_TIME_S(index: number): number | null;
    sampleTimeSLength(): number;
    sampleTimeSArray(): Float64Array | null;
    SAMPLE_PHASE(index: number): mplRendezvousPhase | null;
    samplePhaseLength(): number;
    samplePhaseArray(): Uint8Array | null;
    /**
     * Actual and reference relative position (km) and velocity (km/s), 3
     * values per sample.
     */
    POSITION_KM(index: number): number | null;
    positionKmLength(): number;
    positionKmArray(): Float64Array | null;
    VELOCITY_KM_S(index: number): number | null;
    velocityKmSLength(): number;
    velocityKmSArray(): Float64Array | null;
    REFERENCE_POSITION_KM(index: number): number | null;
    referencePositionKmLength(): number;
    referencePositionKmArray(): Float64Array | null;
    REFERENCE_VELOCITY_KM_S(index: number): number | null;
    referenceVelocityKmSLength(): number;
    referenceVelocityKmSArray(): Float64Array | null;
    /**
     * Reference and commanded control acceleration, km/s^2, 3 per sample.
     */
    REFERENCE_ACCELERATION_KM_S2(index: number): number | null;
    referenceAccelerationKmS2Length(): number;
    referenceAccelerationKmS2Array(): Float64Array | null;
    CONTROL_ACCELERATION_KM_S2(index: number): number | null;
    controlAccelerationKmS2Length(): number;
    controlAccelerationKmS2Array(): Float64Array | null;
    /**
     * Tracking error magnitudes per sample.
     */
    POSITION_ERROR_KM(index: number): number | null;
    positionErrorKmLength(): number;
    positionErrorKmArray(): Float64Array | null;
    VELOCITY_ERROR_KM_S(index: number): number | null;
    velocityErrorKmSLength(): number;
    velocityErrorKmSArray(): Float64Array | null;
    static startmplRendezvousSolution(builder: flatbuffers.Builder): void;
    static addModelReference(builder: flatbuffers.Builder, MODEL_REFERENCEOffset: flatbuffers.Offset): void;
    static addMeanMotionRadS(builder: flatbuffers.Builder, MEAN_MOTION_RAD_S: number): void;
    static addInitialVelocityKmS(builder: flatbuffers.Builder, INITIAL_VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createInitialVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInitialVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInitialVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKpPerS2(builder: flatbuffers.Builder, KP_PER_S2Offset: flatbuffers.Offset): void;
    static createKpPerS2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKpPerS2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKpPerS2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addKdPerS(builder: flatbuffers.Builder, KD_PER_SOffset: flatbuffers.Offset): void;
    static createKdPerSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKdPerSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKdPerSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDriftEndS(builder: flatbuffers.Builder, DRIFT_END_S: number): void;
    static addBrakeEndS(builder: flatbuffers.Builder, BRAKE_END_S: number): void;
    static addTotalTimeS(builder: flatbuffers.Builder, TOTAL_TIME_S: number): void;
    static addMaxControlAccelerationKmS2(builder: flatbuffers.Builder, MAX_CONTROL_ACCELERATION_KM_S2: number): void;
    static addSaturatedSteps(builder: flatbuffers.Builder, SATURATED_STEPS: number): void;
    static addMaxPositionErrorKm(builder: flatbuffers.Builder, MAX_POSITION_ERROR_KM: number): void;
    static addRmsPositionErrorKm(builder: flatbuffers.Builder, RMS_POSITION_ERROR_KM: number): void;
    static addMaxPositionErrorDriftKm(builder: flatbuffers.Builder, MAX_POSITION_ERROR_DRIFT_KM: number): void;
    static addMaxPositionErrorBrakeKm(builder: flatbuffers.Builder, MAX_POSITION_ERROR_BRAKE_KM: number): void;
    static addMaxPositionErrorHoldKm(builder: flatbuffers.Builder, MAX_POSITION_ERROR_HOLD_KM: number): void;
    static addFinalPositionErrorKm(builder: flatbuffers.Builder, FINAL_POSITION_ERROR_KM: number): void;
    static addFinalVelocityErrorKmS(builder: flatbuffers.Builder, FINAL_VELOCITY_ERROR_KM_S: number): void;
    static addSampleTimeS(builder: flatbuffers.Builder, SAMPLE_TIME_SOffset: flatbuffers.Offset): void;
    static createSampleTimeSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleTimeSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleTimeSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSamplePhase(builder: flatbuffers.Builder, SAMPLE_PHASEOffset: flatbuffers.Offset): void;
    static createSamplePhaseVector(builder: flatbuffers.Builder, data: mplRendezvousPhase[]): flatbuffers.Offset;
    static startSamplePhaseVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionKm(builder: flatbuffers.Builder, POSITION_KMOffset: flatbuffers.Offset): void;
    static createPositionKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityKmS(builder: flatbuffers.Builder, VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferencePositionKm(builder: flatbuffers.Builder, REFERENCE_POSITION_KMOffset: flatbuffers.Offset): void;
    static createReferencePositionKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReferencePositionKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReferencePositionKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferenceVelocityKmS(builder: flatbuffers.Builder, REFERENCE_VELOCITY_KM_SOffset: flatbuffers.Offset): void;
    static createReferenceVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReferenceVelocityKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReferenceVelocityKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferenceAccelerationKmS2(builder: flatbuffers.Builder, REFERENCE_ACCELERATION_KM_S2Offset: flatbuffers.Offset): void;
    static createReferenceAccelerationKmS2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReferenceAccelerationKmS2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReferenceAccelerationKmS2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addControlAccelerationKmS2(builder: flatbuffers.Builder, CONTROL_ACCELERATION_KM_S2Offset: flatbuffers.Offset): void;
    static createControlAccelerationKmS2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createControlAccelerationKmS2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startControlAccelerationKmS2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionErrorKm(builder: flatbuffers.Builder, POSITION_ERROR_KMOffset: flatbuffers.Offset): void;
    static createPositionErrorKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionErrorKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionErrorKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityErrorKmS(builder: flatbuffers.Builder, VELOCITY_ERROR_KM_SOffset: flatbuffers.Offset): void;
    static createVelocityErrorKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityErrorKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityErrorKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static endmplRendezvousSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplRendezvousSolution(builder: flatbuffers.Builder, MODEL_REFERENCEOffset: flatbuffers.Offset, MEAN_MOTION_RAD_S: number, INITIAL_VELOCITY_KM_SOffset: flatbuffers.Offset, KP_PER_S2Offset: flatbuffers.Offset, KD_PER_SOffset: flatbuffers.Offset, DRIFT_END_S: number, BRAKE_END_S: number, TOTAL_TIME_S: number, MAX_CONTROL_ACCELERATION_KM_S2: number, SATURATED_STEPS: number, MAX_POSITION_ERROR_KM: number, RMS_POSITION_ERROR_KM: number, MAX_POSITION_ERROR_DRIFT_KM: number, MAX_POSITION_ERROR_BRAKE_KM: number, MAX_POSITION_ERROR_HOLD_KM: number, FINAL_POSITION_ERROR_KM: number, FINAL_VELOCITY_ERROR_KM_S: number, SAMPLE_TIME_SOffset: flatbuffers.Offset, SAMPLE_PHASEOffset: flatbuffers.Offset, POSITION_KMOffset: flatbuffers.Offset, VELOCITY_KM_SOffset: flatbuffers.Offset, REFERENCE_POSITION_KMOffset: flatbuffers.Offset, REFERENCE_VELOCITY_KM_SOffset: flatbuffers.Offset, REFERENCE_ACCELERATION_KM_S2Offset: flatbuffers.Offset, CONTROL_ACCELERATION_KM_S2Offset: flatbuffers.Offset, POSITION_ERROR_KMOffset: flatbuffers.Offset, VELOCITY_ERROR_KM_SOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): mplRendezvousSolutionT;
    unpackTo(_o: mplRendezvousSolutionT): void;
}
export declare class mplRendezvousSolutionT implements flatbuffers.IGeneratedObject {
    MODEL_REFERENCE: string | Uint8Array | null;
    MEAN_MOTION_RAD_S: number;
    INITIAL_VELOCITY_KM_S: (number)[];
    KP_PER_S2: (number)[];
    KD_PER_S: (number)[];
    DRIFT_END_S: number;
    BRAKE_END_S: number;
    TOTAL_TIME_S: number;
    MAX_CONTROL_ACCELERATION_KM_S2: number;
    SATURATED_STEPS: number;
    MAX_POSITION_ERROR_KM: number;
    RMS_POSITION_ERROR_KM: number;
    MAX_POSITION_ERROR_DRIFT_KM: number;
    MAX_POSITION_ERROR_BRAKE_KM: number;
    MAX_POSITION_ERROR_HOLD_KM: number;
    FINAL_POSITION_ERROR_KM: number;
    FINAL_VELOCITY_ERROR_KM_S: number;
    SAMPLE_TIME_S: (number)[];
    SAMPLE_PHASE: (mplRendezvousPhase)[];
    POSITION_KM: (number)[];
    VELOCITY_KM_S: (number)[];
    REFERENCE_POSITION_KM: (number)[];
    REFERENCE_VELOCITY_KM_S: (number)[];
    REFERENCE_ACCELERATION_KM_S2: (number)[];
    CONTROL_ACCELERATION_KM_S2: (number)[];
    POSITION_ERROR_KM: (number)[];
    VELOCITY_ERROR_KM_S: (number)[];
    constructor(MODEL_REFERENCE?: string | Uint8Array | null, MEAN_MOTION_RAD_S?: number, INITIAL_VELOCITY_KM_S?: (number)[], KP_PER_S2?: (number)[], KD_PER_S?: (number)[], DRIFT_END_S?: number, BRAKE_END_S?: number, TOTAL_TIME_S?: number, MAX_CONTROL_ACCELERATION_KM_S2?: number, SATURATED_STEPS?: number, MAX_POSITION_ERROR_KM?: number, RMS_POSITION_ERROR_KM?: number, MAX_POSITION_ERROR_DRIFT_KM?: number, MAX_POSITION_ERROR_BRAKE_KM?: number, MAX_POSITION_ERROR_HOLD_KM?: number, FINAL_POSITION_ERROR_KM?: number, FINAL_VELOCITY_ERROR_KM_S?: number, SAMPLE_TIME_S?: (number)[], SAMPLE_PHASE?: (mplRendezvousPhase)[], POSITION_KM?: (number)[], VELOCITY_KM_S?: (number)[], REFERENCE_POSITION_KM?: (number)[], REFERENCE_VELOCITY_KM_S?: (number)[], REFERENCE_ACCELERATION_KM_S2?: (number)[], CONTROL_ACCELERATION_KM_S2?: (number)[], POSITION_ERROR_KM?: (number)[], VELOCITY_ERROR_KM_S?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRendezvousSolution.d.ts.map