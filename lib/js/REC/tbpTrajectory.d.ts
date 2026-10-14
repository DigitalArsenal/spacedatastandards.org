import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './RFM.js';
/**
 * A trajectory, column-major: TIMES has one entry per sample, STATES six,
 * STATE_TRANSITION 36 (row-major 6x6) when it was propagated.
 */
export declare class tbpTrajectory implements flatbuffers.IUnpackableObject<tbpTrajectoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpTrajectory;
    static getRootAstbpTrajectory(bb: flatbuffers.ByteBuffer, obj?: tbpTrajectory): tbpTrajectory;
    static getSizePrefixedRootAstbpTrajectory(bb: flatbuffers.ByteBuffer, obj?: tbpTrajectory): tbpTrajectory;
    /**
     * True when TIMES and STATES are dimensional (s, km, km/s) in FRAME;
     * false = non-dimensional synodic.
     */
    DIMENSIONAL(): boolean;
    /**
     * Frame of a dimensional trajectory; empty for synodic.
     */
    FRAME(obj?: RFM): RFM | null;
    /**
     * Unix milliseconds of time 0 of a dimensional trajectory; 0 = relative.
     */
    EPOCH_MS(): bigint;
    TIMES(index: number): number | null;
    timesLength(): number;
    timesArray(): Float64Array | null;
    /**
     * x, y, z, vx, vy, vz per sample.
     */
    STATES(index: number): number | null;
    statesLength(): number;
    statesArray(): Float64Array | null;
    /**
     * State transition matrix from time 0, 36 values per sample; empty = not
     * propagated.
     */
    STATE_TRANSITION(index: number): number | null;
    stateTransitionLength(): number;
    stateTransitionArray(): Float64Array | null;
    /**
     * Jacobi constant of the trajectory (conserved in the CR3BP).
     */
    JACOBI(): number;
    static starttbpTrajectory(builder: flatbuffers.Builder): void;
    static addDimensional(builder: flatbuffers.Builder, DIMENSIONAL: boolean): void;
    static addFrame(builder: flatbuffers.Builder, FRAMEOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addTimes(builder: flatbuffers.Builder, TIMESOffset: flatbuffers.Offset): void;
    static createTimesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTimesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStatesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStateTransition(builder: flatbuffers.Builder, STATE_TRANSITIONOffset: flatbuffers.Offset): void;
    static createStateTransitionVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateTransitionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateTransitionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addJacobi(builder: flatbuffers.Builder, JACOBI: number): void;
    static endtbpTrajectory(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpTrajectoryT;
    unpackTo(_o: tbpTrajectoryT): void;
}
export declare class tbpTrajectoryT implements flatbuffers.IGeneratedObject {
    DIMENSIONAL: boolean;
    FRAME: RFMT | null;
    EPOCH_MS: bigint;
    TIMES: (number)[];
    STATES: (number)[];
    STATE_TRANSITION: (number)[];
    JACOBI: number;
    constructor(DIMENSIONAL?: boolean, FRAME?: RFMT | null, EPOCH_MS?: bigint, TIMES?: (number)[], STATES?: (number)[], STATE_TRANSITION?: (number)[], JACOBI?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpTrajectory.d.ts.map