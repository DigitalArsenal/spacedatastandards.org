import * as flatbuffers from 'flatbuffers';
import { MPETargeterConstraint, MPETargeterConstraintT } from './MPETargeterConstraint.js';
/**
 * Maneuver-targeter solution and convergence metadata carried with an
 * extended MPE: the solver that produced the targeted element set, its
 * iteration/residual history, and the constraint set it satisfied.
 */
export declare class MPETargeterSolution implements flatbuffers.IUnpackableObject<MPETargeterSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPETargeterSolution;
    static getRootAsMPETargeterSolution(bb: flatbuffers.ByteBuffer, obj?: MPETargeterSolution): MPETargeterSolution;
    static getSizePrefixedRootAsMPETargeterSolution(bb: flatbuffers.ByteBuffer, obj?: MPETargeterSolution): MPETargeterSolution;
    /**
     * Solver used, e.g. "differential-corrector"
     */
    SOLVER(): string | null;
    SOLVER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dynamics contract the solution was targeted under: SGP4, HPOP, CR3BP
     */
    DYNAMICS(): string | null;
    DYNAMICS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the corrector converged within tolerance
     */
    CONVERGED(): boolean;
    /**
     * Number of corrector iterations executed
     */
    ITERATIONS(): number;
    /**
     * RMS of the final-iteration constraint residuals
     */
    RESIDUAL_RMS(): number;
    /**
     * Final-iteration residual per constraint, aligned with CONSTRAINTS
     */
    RESIDUALS(index: number): number | null;
    residualsLength(): number;
    residualsArray(): Float64Array | null;
    /**
     * The constraint set the solution was targeted against
     */
    CONSTRAINTS(index: number, obj?: MPETargeterConstraint): MPETargeterConstraint | null;
    constraintsLength(): number;
    /**
     * Total delta-v of the solved maneuver sequence in m/s
     */
    TOTAL_DELTA_V(): number;
    /**
     * Unix ms the solution was produced
     */
    SOLVED_AT(): bigint;
    static startMPETargeterSolution(builder: flatbuffers.Builder): void;
    static addSolver(builder: flatbuffers.Builder, SOLVEROffset: flatbuffers.Offset): void;
    static addDynamics(builder: flatbuffers.Builder, DYNAMICSOffset: flatbuffers.Offset): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addResidualRms(builder: flatbuffers.Builder, RESIDUAL_RMS: number): void;
    static addResiduals(builder: flatbuffers.Builder, RESIDUALSOffset: flatbuffers.Offset): void;
    static createResidualsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResidualsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResidualsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraints(builder: flatbuffers.Builder, CONSTRAINTSOffset: flatbuffers.Offset): void;
    static createConstraintsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConstraintsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalDeltaV(builder: flatbuffers.Builder, TOTAL_DELTA_V: number): void;
    static addSolvedAt(builder: flatbuffers.Builder, SOLVED_AT: bigint): void;
    static endMPETargeterSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMPETargeterSolution(builder: flatbuffers.Builder, SOLVEROffset: flatbuffers.Offset, DYNAMICSOffset: flatbuffers.Offset, CONVERGED: boolean, ITERATIONS: number, RESIDUAL_RMS: number, RESIDUALSOffset: flatbuffers.Offset, CONSTRAINTSOffset: flatbuffers.Offset, TOTAL_DELTA_V: number, SOLVED_AT: bigint): flatbuffers.Offset;
    unpack(): MPETargeterSolutionT;
    unpackTo(_o: MPETargeterSolutionT): void;
}
export declare class MPETargeterSolutionT implements flatbuffers.IGeneratedObject {
    SOLVER: string | Uint8Array | null;
    DYNAMICS: string | Uint8Array | null;
    CONVERGED: boolean;
    ITERATIONS: number;
    RESIDUAL_RMS: number;
    RESIDUALS: (number)[];
    CONSTRAINTS: (MPETargeterConstraintT)[];
    TOTAL_DELTA_V: number;
    SOLVED_AT: bigint;
    constructor(SOLVER?: string | Uint8Array | null, DYNAMICS?: string | Uint8Array | null, CONVERGED?: boolean, ITERATIONS?: number, RESIDUAL_RMS?: number, RESIDUALS?: (number)[], CONSTRAINTS?: (MPETargeterConstraintT)[], TOTAL_DELTA_V?: number, SOLVED_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MPETargeterSolution.d.ts.map