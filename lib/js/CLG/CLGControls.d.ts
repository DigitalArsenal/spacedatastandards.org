import * as flatbuffers from 'flatbuffers';
import { clgLinkDirection } from './clgLinkDirection.js';
import { clgPropagationTiming } from './clgPropagationTiming.js';
import { clgSelectionPolicy } from './clgSelectionPolicy.js';
export declare class CLGControls implements flatbuffers.IUnpackableObject<CLGControlsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGControls;
    static getRootAsCLGControls(bb: flatbuffers.ByteBuffer, obj?: CLGControls): CLGControls;
    static getSizePrefixedRootAsCLGControls(bb: flatbuffers.ByteBuffer, obj?: CLGControls): CLGControls;
    TIMING(): clgPropagationTiming;
    /**
     * Required service direction relative to canonical endpoint identities,
     * never relative to arrival/storage order; docs/clg-contract.md section 4.
     */
    DIRECTION(): clgLinkDirection;
    MAX_LIGHT_TIME_S(): number;
    /**
     * No default is a valid tolerance. Every applicable value is explicit.
     */
    REQUESTED_TIME_ACCURACY_S(): number;
    ROOT_TOLERANCE_S(): number;
    LIGHT_TIME_TOLERANCE_S(): number;
    ISOLATION_FLOOR_S(): number;
    RANGE_EXTREMUM_TOLERANCE_M(): number;
    /**
     * Normalized-rotation continuity: geodesic angle and angular derivatives.
     */
    ATTITUDE_JOIN_TOLERANCE_RAD(): number;
    RATE_JOIN_TOLERANCE_RAD_S(): number;
    ACCELERATION_JOIN_TOLERANCE_RAD_S2(): number;
    POSITION_JOIN_TOLERANCE_M(): number;
    VELOCITY_JOIN_TOLERANCE_MPS(): number;
    ACCELERATION_JOIN_TOLERANCE_MPS2(): number;
    POLICY(): clgSelectionPolicy;
    MIN_HOLD_TIME_S(): number;
    MIN_ACTIVE_TIME_S(): number;
    DECISION_STEP_S(): number;
    OUTPUT_EPOCHS_S(index: number): number | null;
    outputEpochsSLength(): number;
    outputEpochsSArray(): Float64Array;
    /**
     * Required explicit opt-in/out; HAS_EMIT_EVENT_SNAPSHOTS must be true.
     */
    EMIT_EVENT_SNAPSHOTS(): boolean;
    THREAD_COUNT(): number;
    /**
     * Resource bounds require true HAS flags and finite positive values.
     */
    MAX_WORKING_BYTES(): bigint;
    MAX_RESULT_BYTES(): bigint;
    MAX_CANDIDATE_PAIRS(): bigint;
    MAX_INPUT_BYTES(): bigint;
    MAX_SPOOL_BYTES(): bigint;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_TIMING(): boolean;
    HAS_DIRECTION(): boolean;
    HAS_MAX_LIGHT_TIME_S(): boolean;
    HAS_REQUESTED_TIME_ACCURACY_S(): boolean;
    HAS_ROOT_TOLERANCE_S(): boolean;
    HAS_LIGHT_TIME_TOLERANCE_S(): boolean;
    HAS_ISOLATION_FLOOR_S(): boolean;
    HAS_RANGE_EXTREMUM_TOLERANCE_M(): boolean;
    HAS_ATTITUDE_JOIN_TOLERANCE_RAD(): boolean;
    HAS_RATE_JOIN_TOLERANCE_RAD_S(): boolean;
    HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2(): boolean;
    HAS_POSITION_JOIN_TOLERANCE_M(): boolean;
    HAS_VELOCITY_JOIN_TOLERANCE_MPS(): boolean;
    HAS_ACCELERATION_JOIN_TOLERANCE_MPS2(): boolean;
    HAS_POLICY(): boolean;
    HAS_MIN_HOLD_TIME_S(): boolean;
    HAS_MIN_ACTIVE_TIME_S(): boolean;
    HAS_DECISION_STEP_S(): boolean;
    HAS_EMIT_EVENT_SNAPSHOTS(): boolean;
    HAS_THREAD_COUNT(): boolean;
    HAS_MAX_WORKING_BYTES(): boolean;
    HAS_MAX_RESULT_BYTES(): boolean;
    HAS_MAX_CANDIDATE_PAIRS(): boolean;
    HAS_MAX_INPUT_BYTES(): boolean;
    HAS_MAX_SPOOL_BYTES(): boolean;
    static startCLGControls(builder: flatbuffers.Builder): void;
    static addTiming(builder: flatbuffers.Builder, TIMING: clgPropagationTiming): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: clgLinkDirection): void;
    static addMaxLightTimeS(builder: flatbuffers.Builder, MAX_LIGHT_TIME_S: number): void;
    static addRequestedTimeAccuracyS(builder: flatbuffers.Builder, REQUESTED_TIME_ACCURACY_S: number): void;
    static addRootToleranceS(builder: flatbuffers.Builder, ROOT_TOLERANCE_S: number): void;
    static addLightTimeToleranceS(builder: flatbuffers.Builder, LIGHT_TIME_TOLERANCE_S: number): void;
    static addIsolationFloorS(builder: flatbuffers.Builder, ISOLATION_FLOOR_S: number): void;
    static addRangeExtremumToleranceM(builder: flatbuffers.Builder, RANGE_EXTREMUM_TOLERANCE_M: number): void;
    static addAttitudeJoinToleranceRad(builder: flatbuffers.Builder, ATTITUDE_JOIN_TOLERANCE_RAD: number): void;
    static addRateJoinToleranceRadS(builder: flatbuffers.Builder, RATE_JOIN_TOLERANCE_RAD_S: number): void;
    static addAccelerationJoinToleranceRadS2(builder: flatbuffers.Builder, ACCELERATION_JOIN_TOLERANCE_RAD_S2: number): void;
    static addPositionJoinToleranceM(builder: flatbuffers.Builder, POSITION_JOIN_TOLERANCE_M: number): void;
    static addVelocityJoinToleranceMps(builder: flatbuffers.Builder, VELOCITY_JOIN_TOLERANCE_MPS: number): void;
    static addAccelerationJoinToleranceMps2(builder: flatbuffers.Builder, ACCELERATION_JOIN_TOLERANCE_MPS2: number): void;
    static addPolicy(builder: flatbuffers.Builder, POLICY: clgSelectionPolicy): void;
    static addMinHoldTimeS(builder: flatbuffers.Builder, MIN_HOLD_TIME_S: number): void;
    static addMinActiveTimeS(builder: flatbuffers.Builder, MIN_ACTIVE_TIME_S: number): void;
    static addDecisionStepS(builder: flatbuffers.Builder, DECISION_STEP_S: number): void;
    static addOutputEpochsS(builder: flatbuffers.Builder, OUTPUT_EPOCHS_SOffset: flatbuffers.Offset): void;
    static createOutputEpochsSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOutputEpochsSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOutputEpochsSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEmitEventSnapshots(builder: flatbuffers.Builder, EMIT_EVENT_SNAPSHOTS: boolean): void;
    static addThreadCount(builder: flatbuffers.Builder, THREAD_COUNT: number): void;
    static addMaxWorkingBytes(builder: flatbuffers.Builder, MAX_WORKING_BYTES: bigint): void;
    static addMaxResultBytes(builder: flatbuffers.Builder, MAX_RESULT_BYTES: bigint): void;
    static addMaxCandidatePairs(builder: flatbuffers.Builder, MAX_CANDIDATE_PAIRS: bigint): void;
    static addMaxInputBytes(builder: flatbuffers.Builder, MAX_INPUT_BYTES: bigint): void;
    static addMaxSpoolBytes(builder: flatbuffers.Builder, MAX_SPOOL_BYTES: bigint): void;
    static addHasTiming(builder: flatbuffers.Builder, HAS_TIMING: boolean): void;
    static addHasDirection(builder: flatbuffers.Builder, HAS_DIRECTION: boolean): void;
    static addHasMaxLightTimeS(builder: flatbuffers.Builder, HAS_MAX_LIGHT_TIME_S: boolean): void;
    static addHasRequestedTimeAccuracyS(builder: flatbuffers.Builder, HAS_REQUESTED_TIME_ACCURACY_S: boolean): void;
    static addHasRootToleranceS(builder: flatbuffers.Builder, HAS_ROOT_TOLERANCE_S: boolean): void;
    static addHasLightTimeToleranceS(builder: flatbuffers.Builder, HAS_LIGHT_TIME_TOLERANCE_S: boolean): void;
    static addHasIsolationFloorS(builder: flatbuffers.Builder, HAS_ISOLATION_FLOOR_S: boolean): void;
    static addHasRangeExtremumToleranceM(builder: flatbuffers.Builder, HAS_RANGE_EXTREMUM_TOLERANCE_M: boolean): void;
    static addHasAttitudeJoinToleranceRad(builder: flatbuffers.Builder, HAS_ATTITUDE_JOIN_TOLERANCE_RAD: boolean): void;
    static addHasRateJoinToleranceRadS(builder: flatbuffers.Builder, HAS_RATE_JOIN_TOLERANCE_RAD_S: boolean): void;
    static addHasAccelerationJoinToleranceRadS2(builder: flatbuffers.Builder, HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2: boolean): void;
    static addHasPositionJoinToleranceM(builder: flatbuffers.Builder, HAS_POSITION_JOIN_TOLERANCE_M: boolean): void;
    static addHasVelocityJoinToleranceMps(builder: flatbuffers.Builder, HAS_VELOCITY_JOIN_TOLERANCE_MPS: boolean): void;
    static addHasAccelerationJoinToleranceMps2(builder: flatbuffers.Builder, HAS_ACCELERATION_JOIN_TOLERANCE_MPS2: boolean): void;
    static addHasPolicy(builder: flatbuffers.Builder, HAS_POLICY: boolean): void;
    static addHasMinHoldTimeS(builder: flatbuffers.Builder, HAS_MIN_HOLD_TIME_S: boolean): void;
    static addHasMinActiveTimeS(builder: flatbuffers.Builder, HAS_MIN_ACTIVE_TIME_S: boolean): void;
    static addHasDecisionStepS(builder: flatbuffers.Builder, HAS_DECISION_STEP_S: boolean): void;
    static addHasEmitEventSnapshots(builder: flatbuffers.Builder, HAS_EMIT_EVENT_SNAPSHOTS: boolean): void;
    static addHasThreadCount(builder: flatbuffers.Builder, HAS_THREAD_COUNT: boolean): void;
    static addHasMaxWorkingBytes(builder: flatbuffers.Builder, HAS_MAX_WORKING_BYTES: boolean): void;
    static addHasMaxResultBytes(builder: flatbuffers.Builder, HAS_MAX_RESULT_BYTES: boolean): void;
    static addHasMaxCandidatePairs(builder: flatbuffers.Builder, HAS_MAX_CANDIDATE_PAIRS: boolean): void;
    static addHasMaxInputBytes(builder: flatbuffers.Builder, HAS_MAX_INPUT_BYTES: boolean): void;
    static addHasMaxSpoolBytes(builder: flatbuffers.Builder, HAS_MAX_SPOOL_BYTES: boolean): void;
    static endCLGControls(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGControls(builder: flatbuffers.Builder, TIMING: clgPropagationTiming, DIRECTION: clgLinkDirection, MAX_LIGHT_TIME_S: number, REQUESTED_TIME_ACCURACY_S: number, ROOT_TOLERANCE_S: number, LIGHT_TIME_TOLERANCE_S: number, ISOLATION_FLOOR_S: number, RANGE_EXTREMUM_TOLERANCE_M: number, ATTITUDE_JOIN_TOLERANCE_RAD: number, RATE_JOIN_TOLERANCE_RAD_S: number, ACCELERATION_JOIN_TOLERANCE_RAD_S2: number, POSITION_JOIN_TOLERANCE_M: number, VELOCITY_JOIN_TOLERANCE_MPS: number, ACCELERATION_JOIN_TOLERANCE_MPS2: number, POLICY: clgSelectionPolicy, MIN_HOLD_TIME_S: number, MIN_ACTIVE_TIME_S: number, DECISION_STEP_S: number, OUTPUT_EPOCHS_SOffset: flatbuffers.Offset, EMIT_EVENT_SNAPSHOTS: boolean, THREAD_COUNT: number, MAX_WORKING_BYTES: bigint, MAX_RESULT_BYTES: bigint, MAX_CANDIDATE_PAIRS: bigint, MAX_INPUT_BYTES: bigint, MAX_SPOOL_BYTES: bigint, HAS_TIMING: boolean, HAS_DIRECTION: boolean, HAS_MAX_LIGHT_TIME_S: boolean, HAS_REQUESTED_TIME_ACCURACY_S: boolean, HAS_ROOT_TOLERANCE_S: boolean, HAS_LIGHT_TIME_TOLERANCE_S: boolean, HAS_ISOLATION_FLOOR_S: boolean, HAS_RANGE_EXTREMUM_TOLERANCE_M: boolean, HAS_ATTITUDE_JOIN_TOLERANCE_RAD: boolean, HAS_RATE_JOIN_TOLERANCE_RAD_S: boolean, HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2: boolean, HAS_POSITION_JOIN_TOLERANCE_M: boolean, HAS_VELOCITY_JOIN_TOLERANCE_MPS: boolean, HAS_ACCELERATION_JOIN_TOLERANCE_MPS2: boolean, HAS_POLICY: boolean, HAS_MIN_HOLD_TIME_S: boolean, HAS_MIN_ACTIVE_TIME_S: boolean, HAS_DECISION_STEP_S: boolean, HAS_EMIT_EVENT_SNAPSHOTS: boolean, HAS_THREAD_COUNT: boolean, HAS_MAX_WORKING_BYTES: boolean, HAS_MAX_RESULT_BYTES: boolean, HAS_MAX_CANDIDATE_PAIRS: boolean, HAS_MAX_INPUT_BYTES: boolean, HAS_MAX_SPOOL_BYTES: boolean): flatbuffers.Offset;
    unpack(): CLGControlsT;
    unpackTo(_o: CLGControlsT): void;
}
export declare class CLGControlsT implements flatbuffers.IGeneratedObject {
    TIMING: clgPropagationTiming;
    DIRECTION: clgLinkDirection;
    MAX_LIGHT_TIME_S: number;
    REQUESTED_TIME_ACCURACY_S: number;
    ROOT_TOLERANCE_S: number;
    LIGHT_TIME_TOLERANCE_S: number;
    ISOLATION_FLOOR_S: number;
    RANGE_EXTREMUM_TOLERANCE_M: number;
    ATTITUDE_JOIN_TOLERANCE_RAD: number;
    RATE_JOIN_TOLERANCE_RAD_S: number;
    ACCELERATION_JOIN_TOLERANCE_RAD_S2: number;
    POSITION_JOIN_TOLERANCE_M: number;
    VELOCITY_JOIN_TOLERANCE_MPS: number;
    ACCELERATION_JOIN_TOLERANCE_MPS2: number;
    POLICY: clgSelectionPolicy;
    MIN_HOLD_TIME_S: number;
    MIN_ACTIVE_TIME_S: number;
    DECISION_STEP_S: number;
    OUTPUT_EPOCHS_S: (number)[];
    EMIT_EVENT_SNAPSHOTS: boolean;
    THREAD_COUNT: number;
    MAX_WORKING_BYTES: bigint;
    MAX_RESULT_BYTES: bigint;
    MAX_CANDIDATE_PAIRS: bigint;
    MAX_INPUT_BYTES: bigint;
    MAX_SPOOL_BYTES: bigint;
    HAS_TIMING: boolean;
    HAS_DIRECTION: boolean;
    HAS_MAX_LIGHT_TIME_S: boolean;
    HAS_REQUESTED_TIME_ACCURACY_S: boolean;
    HAS_ROOT_TOLERANCE_S: boolean;
    HAS_LIGHT_TIME_TOLERANCE_S: boolean;
    HAS_ISOLATION_FLOOR_S: boolean;
    HAS_RANGE_EXTREMUM_TOLERANCE_M: boolean;
    HAS_ATTITUDE_JOIN_TOLERANCE_RAD: boolean;
    HAS_RATE_JOIN_TOLERANCE_RAD_S: boolean;
    HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2: boolean;
    HAS_POSITION_JOIN_TOLERANCE_M: boolean;
    HAS_VELOCITY_JOIN_TOLERANCE_MPS: boolean;
    HAS_ACCELERATION_JOIN_TOLERANCE_MPS2: boolean;
    HAS_POLICY: boolean;
    HAS_MIN_HOLD_TIME_S: boolean;
    HAS_MIN_ACTIVE_TIME_S: boolean;
    HAS_DECISION_STEP_S: boolean;
    HAS_EMIT_EVENT_SNAPSHOTS: boolean;
    HAS_THREAD_COUNT: boolean;
    HAS_MAX_WORKING_BYTES: boolean;
    HAS_MAX_RESULT_BYTES: boolean;
    HAS_MAX_CANDIDATE_PAIRS: boolean;
    HAS_MAX_INPUT_BYTES: boolean;
    HAS_MAX_SPOOL_BYTES: boolean;
    constructor(TIMING?: clgPropagationTiming, DIRECTION?: clgLinkDirection, MAX_LIGHT_TIME_S?: number, REQUESTED_TIME_ACCURACY_S?: number, ROOT_TOLERANCE_S?: number, LIGHT_TIME_TOLERANCE_S?: number, ISOLATION_FLOOR_S?: number, RANGE_EXTREMUM_TOLERANCE_M?: number, ATTITUDE_JOIN_TOLERANCE_RAD?: number, RATE_JOIN_TOLERANCE_RAD_S?: number, ACCELERATION_JOIN_TOLERANCE_RAD_S2?: number, POSITION_JOIN_TOLERANCE_M?: number, VELOCITY_JOIN_TOLERANCE_MPS?: number, ACCELERATION_JOIN_TOLERANCE_MPS2?: number, POLICY?: clgSelectionPolicy, MIN_HOLD_TIME_S?: number, MIN_ACTIVE_TIME_S?: number, DECISION_STEP_S?: number, OUTPUT_EPOCHS_S?: (number)[], EMIT_EVENT_SNAPSHOTS?: boolean, THREAD_COUNT?: number, MAX_WORKING_BYTES?: bigint, MAX_RESULT_BYTES?: bigint, MAX_CANDIDATE_PAIRS?: bigint, MAX_INPUT_BYTES?: bigint, MAX_SPOOL_BYTES?: bigint, HAS_TIMING?: boolean, HAS_DIRECTION?: boolean, HAS_MAX_LIGHT_TIME_S?: boolean, HAS_REQUESTED_TIME_ACCURACY_S?: boolean, HAS_ROOT_TOLERANCE_S?: boolean, HAS_LIGHT_TIME_TOLERANCE_S?: boolean, HAS_ISOLATION_FLOOR_S?: boolean, HAS_RANGE_EXTREMUM_TOLERANCE_M?: boolean, HAS_ATTITUDE_JOIN_TOLERANCE_RAD?: boolean, HAS_RATE_JOIN_TOLERANCE_RAD_S?: boolean, HAS_ACCELERATION_JOIN_TOLERANCE_RAD_S2?: boolean, HAS_POSITION_JOIN_TOLERANCE_M?: boolean, HAS_VELOCITY_JOIN_TOLERANCE_MPS?: boolean, HAS_ACCELERATION_JOIN_TOLERANCE_MPS2?: boolean, HAS_POLICY?: boolean, HAS_MIN_HOLD_TIME_S?: boolean, HAS_MIN_ACTIVE_TIME_S?: boolean, HAS_DECISION_STEP_S?: boolean, HAS_EMIT_EVENT_SNAPSHOTS?: boolean, HAS_THREAD_COUNT?: boolean, HAS_MAX_WORKING_BYTES?: boolean, HAS_MAX_RESULT_BYTES?: boolean, HAS_MAX_CANDIDATE_PAIRS?: boolean, HAS_MAX_INPUT_BYTES?: boolean, HAS_MAX_SPOOL_BYTES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGControls.d.ts.map