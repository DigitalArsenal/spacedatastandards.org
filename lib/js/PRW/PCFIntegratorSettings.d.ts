import * as flatbuffers from 'flatbuffers';
import { pcfIntegratorAlgorithm } from './pcfIntegratorAlgorithm.js';
/**
 * Integrator and its settings, shared by $PCF and $PRW. Units are SI. A scalar
 * legacy tolerance must be expanded by the adapter.
 */
export declare class PCFIntegratorSettings implements flatbuffers.IUnpackableObject<PCFIntegratorSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFIntegratorSettings;
    static getRootAsPCFIntegratorSettings(bb: flatbuffers.ByteBuffer, obj?: PCFIntegratorSettings): PCFIntegratorSettings;
    static getSizePrefixedRootAsPCFIntegratorSettings(bb: flatbuffers.ByteBuffer, obj?: PCFIntegratorSettings): PCFIntegratorSettings;
    /**
     * Algorithm. Default UNSPECIFIED (the provider's own).
     */
    ALGORITHM(): pcfIntegratorAlgorithm;
    /**
     * First step, seconds; the fixed step of RK4. Default 60.
     */
    INITIAL_STEP_SECONDS(): number;
    /**
     * Smallest step an adaptive algorithm may take, seconds. Default 1.
     */
    MINIMUM_STEP_SECONDS(): number;
    /**
     * Largest step, seconds. Default 3600.
     */
    MAXIMUM_STEP_SECONDS(): number;
    /**
     * Six or seven positive tolerances, respectively m, m/s and optional kg.
     * Required; no default.
     */
    ABSOLUTE_TOLERANCES(index: number): number | null;
    absoluteTolerancesLength(): number;
    absoluteTolerancesArray(): Float64Array;
    /**
     * Relative tolerance, dimensionless. Default 1e-12.
     */
    RELATIVE_TOLERANCE(): number;
    /**
     * Most steps one propagation may take. Default 100000.
     */
    MAXIMUM_STEPS(): number;
    static startPCFIntegratorSettings(builder: flatbuffers.Builder): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: pcfIntegratorAlgorithm): void;
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
    static endPCFIntegratorSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFIntegratorSettings(builder: flatbuffers.Builder, ALGORITHM: pcfIntegratorAlgorithm, INITIAL_STEP_SECONDS: number, MINIMUM_STEP_SECONDS: number, MAXIMUM_STEP_SECONDS: number, ABSOLUTE_TOLERANCESOffset: flatbuffers.Offset, RELATIVE_TOLERANCE: number, MAXIMUM_STEPS: number): flatbuffers.Offset;
    unpack(): PCFIntegratorSettingsT;
    unpackTo(_o: PCFIntegratorSettingsT): void;
}
export declare class PCFIntegratorSettingsT implements flatbuffers.IGeneratedObject {
    ALGORITHM: pcfIntegratorAlgorithm;
    INITIAL_STEP_SECONDS: number;
    MINIMUM_STEP_SECONDS: number;
    MAXIMUM_STEP_SECONDS: number;
    ABSOLUTE_TOLERANCES: (number)[];
    RELATIVE_TOLERANCE: number;
    MAXIMUM_STEPS: number;
    constructor(ALGORITHM?: pcfIntegratorAlgorithm, INITIAL_STEP_SECONDS?: number, MINIMUM_STEP_SECONDS?: number, MAXIMUM_STEP_SECONDS?: number, ABSOLUTE_TOLERANCES?: (number)[], RELATIVE_TOLERANCE?: number, MAXIMUM_STEPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFIntegratorSettings.d.ts.map