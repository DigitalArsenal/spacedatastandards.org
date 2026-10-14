import * as flatbuffers from 'flatbuffers';
/**
 * Solver evidence for an arc or a plan.
 */
export declare class mplSolver implements flatbuffers.IUnpackableObject<mplSolverT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplSolver;
    static getRootAsmplSolver(bb: flatbuffers.ByteBuffer, obj?: mplSolver): mplSolver;
    static getSizePrefixedRootAsmplSolver(bb: flatbuffers.ByteBuffer, obj?: mplSolver): mplSolver;
    /**
     * True when the solver met its tolerance.
     */
    CONVERGED(): boolean;
    /**
     * Iterations used.
     */
    ITERATIONS(): number;
    /**
     * Solver status as text, e.g. "success", "max-iterations".
     */
    STATUS_TEXT(): string | null;
    STATUS_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Final residual, in the solver's own measure (time of flight in s for
     * Lambert; position error in km for targeting).
     */
    RESIDUAL(): number;
    /**
     * The residual the solver had to meet, same unit; 0 = not stated.
     */
    RESIDUAL_TOLERANCE(): number;
    static startmplSolver(builder: flatbuffers.Builder): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addStatusText(builder: flatbuffers.Builder, STATUS_TEXTOffset: flatbuffers.Offset): void;
    static addResidual(builder: flatbuffers.Builder, RESIDUAL: number): void;
    static addResidualTolerance(builder: flatbuffers.Builder, RESIDUAL_TOLERANCE: number): void;
    static endmplSolver(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplSolver(builder: flatbuffers.Builder, CONVERGED: boolean, ITERATIONS: number, STATUS_TEXTOffset: flatbuffers.Offset, RESIDUAL: number, RESIDUAL_TOLERANCE: number): flatbuffers.Offset;
    unpack(): mplSolverT;
    unpackTo(_o: mplSolverT): void;
}
export declare class mplSolverT implements flatbuffers.IGeneratedObject {
    CONVERGED: boolean;
    ITERATIONS: number;
    STATUS_TEXT: string | Uint8Array | null;
    RESIDUAL: number;
    RESIDUAL_TOLERANCE: number;
    constructor(CONVERGED?: boolean, ITERATIONS?: number, STATUS_TEXT?: string | Uint8Array | null, RESIDUAL?: number, RESIDUAL_TOLERANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplSolver.d.ts.map