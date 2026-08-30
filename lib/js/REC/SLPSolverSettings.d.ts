import * as flatbuffers from 'flatbuffers';
import { slpAlgorithm } from './slpAlgorithm.js';
import { slpDifferenceMode } from './slpDifferenceMode.js';
export declare class SLPSolverSettings implements flatbuffers.IUnpackableObject<SLPSolverSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SLPSolverSettings;
    static getRootAsSLPSolverSettings(bb: flatbuffers.ByteBuffer, obj?: SLPSolverSettings): SLPSolverSettings;
    static getSizePrefixedRootAsSLPSolverSettings(bb: flatbuffers.ByteBuffer, obj?: SLPSolverSettings): SLPSolverSettings;
    ALGORITHM(): slpAlgorithm;
    DIFFERENCE_MODE(): slpDifferenceMode;
    MAXIMUM_ITERATIONS(): number;
    MAXIMUM_EVALUATIONS(): number;
    RESIDUAL_TOLERANCE(): number;
    STEP_TOLERANCE(): number;
    OBJECTIVE_TOLERANCE(): number;
    CONSTRAINT_TOLERANCE(): number;
    KKT_TOLERANCE(): number;
    static startSLPSolverSettings(builder: flatbuffers.Builder): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: slpAlgorithm): void;
    static addDifferenceMode(builder: flatbuffers.Builder, DIFFERENCE_MODE: slpDifferenceMode): void;
    static addMaximumIterations(builder: flatbuffers.Builder, MAXIMUM_ITERATIONS: number): void;
    static addMaximumEvaluations(builder: flatbuffers.Builder, MAXIMUM_EVALUATIONS: number): void;
    static addResidualTolerance(builder: flatbuffers.Builder, RESIDUAL_TOLERANCE: number): void;
    static addStepTolerance(builder: flatbuffers.Builder, STEP_TOLERANCE: number): void;
    static addObjectiveTolerance(builder: flatbuffers.Builder, OBJECTIVE_TOLERANCE: number): void;
    static addConstraintTolerance(builder: flatbuffers.Builder, CONSTRAINT_TOLERANCE: number): void;
    static addKktTolerance(builder: flatbuffers.Builder, KKT_TOLERANCE: number): void;
    static endSLPSolverSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSLPSolverSettings(builder: flatbuffers.Builder, ALGORITHM: slpAlgorithm, DIFFERENCE_MODE: slpDifferenceMode, MAXIMUM_ITERATIONS: number, MAXIMUM_EVALUATIONS: number, RESIDUAL_TOLERANCE: number, STEP_TOLERANCE: number, OBJECTIVE_TOLERANCE: number, CONSTRAINT_TOLERANCE: number, KKT_TOLERANCE: number): flatbuffers.Offset;
    unpack(): SLPSolverSettingsT;
    unpackTo(_o: SLPSolverSettingsT): void;
}
export declare class SLPSolverSettingsT implements flatbuffers.IGeneratedObject {
    ALGORITHM: slpAlgorithm;
    DIFFERENCE_MODE: slpDifferenceMode;
    MAXIMUM_ITERATIONS: number;
    MAXIMUM_EVALUATIONS: number;
    RESIDUAL_TOLERANCE: number;
    STEP_TOLERANCE: number;
    OBJECTIVE_TOLERANCE: number;
    CONSTRAINT_TOLERANCE: number;
    KKT_TOLERANCE: number;
    constructor(ALGORITHM?: slpAlgorithm, DIFFERENCE_MODE?: slpDifferenceMode, MAXIMUM_ITERATIONS?: number, MAXIMUM_EVALUATIONS?: number, RESIDUAL_TOLERANCE?: number, STEP_TOLERANCE?: number, OBJECTIVE_TOLERANCE?: number, CONSTRAINT_TOLERANCE?: number, KKT_TOLERANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SLPSolverSettings.d.ts.map