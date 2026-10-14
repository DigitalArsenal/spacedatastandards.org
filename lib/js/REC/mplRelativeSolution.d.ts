import * as flatbuffers from 'flatbuffers';
import { mplRelativeDynamics } from './mplRelativeDynamics.js';
/**
 * Relative-motion detail.
 */
export declare class mplRelativeSolution implements flatbuffers.IUnpackableObject<mplRelativeSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRelativeSolution;
    static getRootAsmplRelativeSolution(bb: flatbuffers.ByteBuffer, obj?: mplRelativeSolution): mplRelativeSolution;
    static getSizePrefixedRootAsmplRelativeSolution(bb: flatbuffers.ByteBuffer, obj?: mplRelativeSolution): mplRelativeSolution;
    /**
     * Model reference, e.g. "Koenig-Guffanti-D'Amico ROE STM".
     */
    MODEL_REFERENCE(): string | null;
    MODEL_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dynamics INITIAL_ROE was propagated with.
     */
    DYNAMICS(): mplRelativeDynamics;
    /**
     * Dynamics of STATE_TRANSITION and DRAG_COLUMNS.
     */
    STM_DYNAMICS(): mplRelativeDynamics;
    /**
     * 6x6 relative-orbital-element state transition matrix over DURATION_S,
     * row-major (36 values), dimensionless (the ROE are dimensionless).
     */
    STATE_TRANSITION(index: number): number | null;
    stateTransitionLength(): number;
    stateTransitionArray(): Float64Array | null;
    /**
     * Drag sensitivity columns, row-major 6 x DRAG_COLUMN_COUNT: entry (i, k)
     * is the change in ROE i at DURATION_S per unit of drag rate k, the rates
     * being those of mplDifferentialDrag (1/s): k = 0 da-dot, 1 dex-dot, 2
     * dey-dot. Unit: seconds (e.g. entry (0, 0) equals
     * DURATION_S). J2DragEccentric gives one column (the da-dot column of the
     * eccentric model), J2DragArbitrary three. Empty = no drag model.
     */
    DRAG_COLUMNS(index: number): number | null;
    dragColumnsLength(): number;
    dragColumnsArray(): Float64Array | null;
    DRAG_COLUMN_COUNT(): number;
    /**
     * Initial and propagated relative orbital elements (6 values each).
     */
    INITIAL_ROE(index: number): number | null;
    initialRoeLength(): number;
    initialRoeArray(): Float64Array | null;
    PROPAGATED_ROE(index: number): number | null;
    propagatedRoeLength(): number;
    propagatedRoeArray(): Float64Array | null;
    /**
     * CollisionAvoidance: miss distance the burn achieves, km.
     */
    ACHIEVED_MISS_KM(): number;
    /**
     * CollisionAvoidance: true when the required miss is reachable within the
     * available delta-v.
     */
    FEASIBLE(): boolean;
    /**
     * ApproachCorridor: largest lateral deviation from the corridor axis, km,
     * and whether it stays within the corridor.
     */
    CORRIDOR_DEVIATION_KM(): number;
    WITHIN_CORRIDOR(): boolean;
    static startmplRelativeSolution(builder: flatbuffers.Builder): void;
    static addModelReference(builder: flatbuffers.Builder, MODEL_REFERENCEOffset: flatbuffers.Offset): void;
    static addDynamics(builder: flatbuffers.Builder, DYNAMICS: mplRelativeDynamics): void;
    static addStmDynamics(builder: flatbuffers.Builder, STM_DYNAMICS: mplRelativeDynamics): void;
    static addStateTransition(builder: flatbuffers.Builder, STATE_TRANSITIONOffset: flatbuffers.Offset): void;
    static createStateTransitionVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateTransitionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateTransitionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDragColumns(builder: flatbuffers.Builder, DRAG_COLUMNSOffset: flatbuffers.Offset): void;
    static createDragColumnsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDragColumnsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDragColumnsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDragColumnCount(builder: flatbuffers.Builder, DRAG_COLUMN_COUNT: number): void;
    static addInitialRoe(builder: flatbuffers.Builder, INITIAL_ROEOffset: flatbuffers.Offset): void;
    static createInitialRoeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInitialRoeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInitialRoeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPropagatedRoe(builder: flatbuffers.Builder, PROPAGATED_ROEOffset: flatbuffers.Offset): void;
    static createPropagatedRoeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPropagatedRoeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPropagatedRoeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAchievedMissKm(builder: flatbuffers.Builder, ACHIEVED_MISS_KM: number): void;
    static addFeasible(builder: flatbuffers.Builder, FEASIBLE: boolean): void;
    static addCorridorDeviationKm(builder: flatbuffers.Builder, CORRIDOR_DEVIATION_KM: number): void;
    static addWithinCorridor(builder: flatbuffers.Builder, WITHIN_CORRIDOR: boolean): void;
    static endmplRelativeSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplRelativeSolution(builder: flatbuffers.Builder, MODEL_REFERENCEOffset: flatbuffers.Offset, DYNAMICS: mplRelativeDynamics, STM_DYNAMICS: mplRelativeDynamics, STATE_TRANSITIONOffset: flatbuffers.Offset, DRAG_COLUMNSOffset: flatbuffers.Offset, DRAG_COLUMN_COUNT: number, INITIAL_ROEOffset: flatbuffers.Offset, PROPAGATED_ROEOffset: flatbuffers.Offset, ACHIEVED_MISS_KM: number, FEASIBLE: boolean, CORRIDOR_DEVIATION_KM: number, WITHIN_CORRIDOR: boolean): flatbuffers.Offset;
    unpack(): mplRelativeSolutionT;
    unpackTo(_o: mplRelativeSolutionT): void;
}
export declare class mplRelativeSolutionT implements flatbuffers.IGeneratedObject {
    MODEL_REFERENCE: string | Uint8Array | null;
    DYNAMICS: mplRelativeDynamics;
    STM_DYNAMICS: mplRelativeDynamics;
    STATE_TRANSITION: (number)[];
    DRAG_COLUMNS: (number)[];
    DRAG_COLUMN_COUNT: number;
    INITIAL_ROE: (number)[];
    PROPAGATED_ROE: (number)[];
    ACHIEVED_MISS_KM: number;
    FEASIBLE: boolean;
    CORRIDOR_DEVIATION_KM: number;
    WITHIN_CORRIDOR: boolean;
    constructor(MODEL_REFERENCE?: string | Uint8Array | null, DYNAMICS?: mplRelativeDynamics, STM_DYNAMICS?: mplRelativeDynamics, STATE_TRANSITION?: (number)[], DRAG_COLUMNS?: (number)[], DRAG_COLUMN_COUNT?: number, INITIAL_ROE?: (number)[], PROPAGATED_ROE?: (number)[], ACHIEVED_MISS_KM?: number, FEASIBLE?: boolean, CORRIDOR_DEVIATION_KM?: number, WITHIN_CORRIDOR?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRelativeSolution.d.ts.map