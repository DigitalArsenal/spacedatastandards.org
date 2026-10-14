import * as flatbuffers from 'flatbuffers';
import { mplLambertBranch } from './mplLambertBranch.js';
import { mplPhasingDirection } from './mplPhasingDirection.js';
/**
 * An option the planner weighed: another revolution count or branch of a
 * Lambert problem, or the other phasing direction. Lets a consumer show the
 * road not taken beside the chosen plan.
 */
export declare class mplOption implements flatbuffers.IUnpackableObject<mplOptionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplOption;
    static getRootAsmplOption(bb: flatbuffers.ByteBuffer, obj?: mplOption): mplOption;
    static getSizePrefixedRootAsmplOption(bb: flatbuffers.ByteBuffer, obj?: mplOption): mplOption;
    /**
     * Label, e.g. "catchUp", "1 rev high".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True for the option the plan carries.
     */
    SELECTED(): boolean;
    REVOLUTIONS(): number;
    BRANCH(): mplLambertBranch;
    DIRECTION(): mplPhasingDirection;
    /**
     * Phase angle this option closes, deg (signed).
     */
    PHASE_ANGLE_DEG(): number;
    /**
     * Magnitude of each burn, km/s, in burn order.
     */
    BURN_DELTA_V_KM_S(index: number): number | null;
    burnDeltaVKmSLength(): number;
    burnDeltaVKmSArray(): Float64Array | null;
    /**
     * Total delta-v, km/s.
     */
    TOTAL_DELTA_V_KM_S(): number;
    /**
     * Total time, s.
     */
    TOTAL_TIME_S(): number;
    /**
     * Semi-major axis of the option's transfer or phasing orbit, km.
     */
    SEMI_MAJOR_AXIS_KM(): number;
    /**
     * True when the option's orbit was clamped to the body's floor.
     */
    CLAMPED_TO_FLOOR(): boolean;
    /**
     * True when the option met the delta-v budget.
     */
    WITHIN_BUDGET(): boolean;
    static startmplOption(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSelected(builder: flatbuffers.Builder, SELECTED: boolean): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addBranch(builder: flatbuffers.Builder, BRANCH: mplLambertBranch): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: mplPhasingDirection): void;
    static addPhaseAngleDeg(builder: flatbuffers.Builder, PHASE_ANGLE_DEG: number): void;
    static addBurnDeltaVKmS(builder: flatbuffers.Builder, BURN_DELTA_V_KM_SOffset: flatbuffers.Offset): void;
    static createBurnDeltaVKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBurnDeltaVKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBurnDeltaVKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalDeltaVKmS(builder: flatbuffers.Builder, TOTAL_DELTA_V_KM_S: number): void;
    static addTotalTimeS(builder: flatbuffers.Builder, TOTAL_TIME_S: number): void;
    static addSemiMajorAxisKm(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS_KM: number): void;
    static addClampedToFloor(builder: flatbuffers.Builder, CLAMPED_TO_FLOOR: boolean): void;
    static addWithinBudget(builder: flatbuffers.Builder, WITHIN_BUDGET: boolean): void;
    static endmplOption(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplOption(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SELECTED: boolean, REVOLUTIONS: number, BRANCH: mplLambertBranch, DIRECTION: mplPhasingDirection, PHASE_ANGLE_DEG: number, BURN_DELTA_V_KM_SOffset: flatbuffers.Offset, TOTAL_DELTA_V_KM_S: number, TOTAL_TIME_S: number, SEMI_MAJOR_AXIS_KM: number, CLAMPED_TO_FLOOR: boolean, WITHIN_BUDGET: boolean): flatbuffers.Offset;
    unpack(): mplOptionT;
    unpackTo(_o: mplOptionT): void;
}
export declare class mplOptionT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SELECTED: boolean;
    REVOLUTIONS: number;
    BRANCH: mplLambertBranch;
    DIRECTION: mplPhasingDirection;
    PHASE_ANGLE_DEG: number;
    BURN_DELTA_V_KM_S: (number)[];
    TOTAL_DELTA_V_KM_S: number;
    TOTAL_TIME_S: number;
    SEMI_MAJOR_AXIS_KM: number;
    CLAMPED_TO_FLOOR: boolean;
    WITHIN_BUDGET: boolean;
    constructor(NAME?: string | Uint8Array | null, SELECTED?: boolean, REVOLUTIONS?: number, BRANCH?: mplLambertBranch, DIRECTION?: mplPhasingDirection, PHASE_ANGLE_DEG?: number, BURN_DELTA_V_KM_S?: (number)[], TOTAL_DELTA_V_KM_S?: number, TOTAL_TIME_S?: number, SEMI_MAJOR_AXIS_KM?: number, CLAMPED_TO_FLOOR?: boolean, WITHIN_BUDGET?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplOption.d.ts.map