import * as flatbuffers from 'flatbuffers';
import { prwSolverAlgorithm } from './prwSolverAlgorithm.js';
/**
 * Units are SI. A scalar legacy tolerance must be expanded by the adapter.
 */
export declare class PRWIntegratorSettings implements flatbuffers.IUnpackableObject<PRWIntegratorSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWIntegratorSettings;
    static getRootAsPRWIntegratorSettings(bb: flatbuffers.ByteBuffer, obj?: PRWIntegratorSettings): PRWIntegratorSettings;
    static getSizePrefixedRootAsPRWIntegratorSettings(bb: flatbuffers.ByteBuffer, obj?: PRWIntegratorSettings): PRWIntegratorSettings;
    ALGORITHM(): prwSolverAlgorithm;
    INITIAL_STEP_SECONDS(): number;
    MINIMUM_STEP_SECONDS(): number;
    MAXIMUM_STEP_SECONDS(): number;
    /**
     * Six or seven positive tolerances, respectively m, m/s and optional kg.
     */
    ABSOLUTE_TOLERANCES(index: number): number | null;
    absoluteTolerancesLength(): number;
    absoluteTolerancesArray(): Float64Array;
    RELATIVE_TOLERANCE(): number;
    MAXIMUM_STEPS(): number;
    static startPRWIntegratorSettings(builder: flatbuffers.Builder): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: prwSolverAlgorithm): void;
    static addInitialStepSeconds(builder: flatbuffers.Builder, INITIAL_STEP_SECONDS: number): void;
    static addMinimumStepSeconds(builder: flatbuffers.Builder, MINIMUM_STEP_SECONDS: number): void;
    static addMaximumStepSeconds(builder: flatbuffers.Builder, MAXIMUM_STEP_SECONDS: number): void;
    static addAbsoluteTolerances(builder: flatbuffers.Builder, ABSOLUTE_TOLERANCESOffset: flatbuffers.Offset): void;
    static createAbsoluteTolerancesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAbsoluteTolerancesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAbsoluteTolerancesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRelativeTolerance(builder: flatbuffers.Builder, RELATIVE_TOLERANCE: number): void;
    static addMaximumSteps(builder: flatbuffers.Builder, MAXIMUM_STEPS: number): void;
    static endPRWIntegratorSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWIntegratorSettings(builder: flatbuffers.Builder, ALGORITHM: prwSolverAlgorithm, INITIAL_STEP_SECONDS: number, MINIMUM_STEP_SECONDS: number, MAXIMUM_STEP_SECONDS: number, ABSOLUTE_TOLERANCESOffset: flatbuffers.Offset, RELATIVE_TOLERANCE: number, MAXIMUM_STEPS: number): flatbuffers.Offset;
    unpack(): PRWIntegratorSettingsT;
    unpackTo(_o: PRWIntegratorSettingsT): void;
}
export declare class PRWIntegratorSettingsT implements flatbuffers.IGeneratedObject {
    ALGORITHM: prwSolverAlgorithm;
    INITIAL_STEP_SECONDS: number;
    MINIMUM_STEP_SECONDS: number;
    MAXIMUM_STEP_SECONDS: number;
    ABSOLUTE_TOLERANCES: (number)[];
    RELATIVE_TOLERANCE: number;
    MAXIMUM_STEPS: number;
    constructor(ALGORITHM?: prwSolverAlgorithm, INITIAL_STEP_SECONDS?: number, MINIMUM_STEP_SECONDS?: number, MAXIMUM_STEP_SECONDS?: number, ABSOLUTE_TOLERANCES?: (number)[], RELATIVE_TOLERANCE?: number, MAXIMUM_STEPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWIntegratorSettings.d.ts.map