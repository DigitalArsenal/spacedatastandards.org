import * as flatbuffers from 'flatbuffers';
import { mplAxes } from './mplAxes.js';
/**
 * States sampled along an arc or a whole plan, column-major and parallel:
 * OFFSETS_S has one entry per sample and STATES has STATE_SIZE entries per
 * sample.
 */
export declare class mplTrajectory implements flatbuffers.IUnpackableObject<mplTrajectoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplTrajectory;
    static getRootAsmplTrajectory(bb: flatbuffers.ByteBuffer, obj?: mplTrajectory): mplTrajectory;
    static getSizePrefixedRootAsmplTrajectory(bb: flatbuffers.ByteBuffer, obj?: mplTrajectory): mplTrajectory;
    /**
     * Axes and origin of STATES: Inertial = the plan's REFERENCE_FRAME about
     * the central body; RIC or VNC = relative to the reference orbit (the
     * target), centred on it.
     */
    AXES(): mplAxes;
    /**
     * Values per sample in STATES: 3 = position only, 6 = position and
     * velocity. 0 is read as 6.
     */
    STATE_SIZE(): number;
    /**
     * Seconds from the plan's start, one per sample, signed (negative for a
     * track sampled backwards).
     */
    OFFSETS_S(index: number): number | null;
    offsetsSLength(): number;
    offsetsSArray(): Float64Array | null;
    /**
     * Positions (km) and velocities (km/s), STATE_SIZE values per sample.
     */
    STATES(index: number): number | null;
    statesLength(): number;
    statesArray(): Float64Array | null;
    static startmplTrajectory(builder: flatbuffers.Builder): void;
    static addAxes(builder: flatbuffers.Builder, AXES: mplAxes): void;
    static addStateSize(builder: flatbuffers.Builder, STATE_SIZE: number): void;
    static addOffsetsS(builder: flatbuffers.Builder, OFFSETS_SOffset: flatbuffers.Offset): void;
    static createOffsetsSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOffsetsSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOffsetsSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStatesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endmplTrajectory(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplTrajectory(builder: flatbuffers.Builder, AXES: mplAxes, STATE_SIZE: number, OFFSETS_SOffset: flatbuffers.Offset, STATESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): mplTrajectoryT;
    unpackTo(_o: mplTrajectoryT): void;
}
export declare class mplTrajectoryT implements flatbuffers.IGeneratedObject {
    AXES: mplAxes;
    STATE_SIZE: number;
    OFFSETS_S: (number)[];
    STATES: (number)[];
    constructor(AXES?: mplAxes, STATE_SIZE?: number, OFFSETS_S?: (number)[], STATES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplTrajectory.d.ts.map