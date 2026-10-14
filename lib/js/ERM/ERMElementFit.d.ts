import * as flatbuffers from 'flatbuffers';
import { ERMClosureTest, ERMClosureTestT } from './ERMClosureTest.js';
import { ERMFitCovariance, ERMFitCovarianceT } from './ERMFitCovariance.js';
import { ERMFitStage, ERMFitStageT } from './ERMFitStage.js';
import { ERMResidualSample, ERMResidualSampleT } from './ERMResidualSample.js';
import { ERMResidualStatistics, ERMResidualStatisticsT } from './ERMResidualStatistics.js';
/**
 * The fit of one object. The fitted element set is the companion $OMM.
 */
export declare class ERMElementFit implements flatbuffers.IUnpackableObject<ERMElementFitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMElementFit;
    static getRootAsERMElementFit(bb: flatbuffers.ByteBuffer, obj?: ERMElementFit): ERMElementFit;
    static getSizePrefixedRootAsERMElementFit(bb: flatbuffers.ByteBuffer, obj?: ERMElementFit): ERMElementFit;
    NORAD_CAT_ID(): number;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why the fit failed; empty on success.
     */
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATES_IN_SPAN(): number;
    STATES_FITTED(): number;
    STATES_WITHOUT_WEIGHTS(): number;
    STATES_REJECTED(): number;
    STAGES(index: number, obj?: ERMFitStage): ERMFitStage | null;
    stagesLength(): number;
    ITERATIONS(): number;
    CONVERGED(): boolean;
    STOP(): string | null;
    STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CRITERION(): string | null;
    CRITERION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RMS(obj?: ERMResidualStatistics): ERMResidualStatistics | null;
    RESIDUALS(index: number, obj?: ERMResidualSample): ERMResidualSample | null;
    residualsLength(): number;
    CLOSURE(obj?: ERMClosureTest): ERMClosureTest | null;
    WEIGHTED_RMS(): number;
    CONDITION_NUMBER(): number;
    COVARIANCE(obj?: ERMFitCovariance): ERMFitCovariance | null;
    /**
     * Fit epoch, ISO 8601 (microseconds).
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * n (rad/min), af, ag, chi, psi, lambda, B* (7 values).
     */
    EQUINOCTIAL(index: number): number | null;
    equinoctialLength(): number;
    equinoctialArray(): Float64Array | null;
    BSTAR_FITTED(): boolean;
    BSTAR_INITIAL(): number;
    static startERMElementFit(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static addStatesInSpan(builder: flatbuffers.Builder, STATES_IN_SPAN: number): void;
    static addStatesFitted(builder: flatbuffers.Builder, STATES_FITTED: number): void;
    static addStatesWithoutWeights(builder: flatbuffers.Builder, STATES_WITHOUT_WEIGHTS: number): void;
    static addStatesRejected(builder: flatbuffers.Builder, STATES_REJECTED: number): void;
    static addStages(builder: flatbuffers.Builder, STAGESOffset: flatbuffers.Offset): void;
    static createStagesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStagesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addStop(builder: flatbuffers.Builder, STOPOffset: flatbuffers.Offset): void;
    static addCriterion(builder: flatbuffers.Builder, CRITERIONOffset: flatbuffers.Offset): void;
    static addRms(builder: flatbuffers.Builder, RMSOffset: flatbuffers.Offset): void;
    static addResiduals(builder: flatbuffers.Builder, RESIDUALSOffset: flatbuffers.Offset): void;
    static createResidualsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResidualsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClosure(builder: flatbuffers.Builder, CLOSUREOffset: flatbuffers.Offset): void;
    static addWeightedRms(builder: flatbuffers.Builder, WEIGHTED_RMS: number): void;
    static addConditionNumber(builder: flatbuffers.Builder, CONDITION_NUMBER: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEquinoctial(builder: flatbuffers.Builder, EQUINOCTIALOffset: flatbuffers.Offset): void;
    static createEquinoctialVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEquinoctialVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEquinoctialVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBstarFitted(builder: flatbuffers.Builder, BSTAR_FITTED: boolean): void;
    static addBstarInitial(builder: flatbuffers.Builder, BSTAR_INITIAL: number): void;
    static endERMElementFit(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMElementFitT;
    unpackTo(_o: ERMElementFitT): void;
}
export declare class ERMElementFitT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    OBJECT_NAME: string | Uint8Array | null;
    ERROR: string | Uint8Array | null;
    STATES_IN_SPAN: number;
    STATES_FITTED: number;
    STATES_WITHOUT_WEIGHTS: number;
    STATES_REJECTED: number;
    STAGES: (ERMFitStageT)[];
    ITERATIONS: number;
    CONVERGED: boolean;
    STOP: string | Uint8Array | null;
    CRITERION: string | Uint8Array | null;
    RMS: ERMResidualStatisticsT | null;
    RESIDUALS: (ERMResidualSampleT)[];
    CLOSURE: ERMClosureTestT | null;
    WEIGHTED_RMS: number;
    CONDITION_NUMBER: number;
    COVARIANCE: ERMFitCovarianceT | null;
    EPOCH: string | Uint8Array | null;
    EQUINOCTIAL: (number)[];
    BSTAR_FITTED: boolean;
    BSTAR_INITIAL: number;
    constructor(NORAD_CAT_ID?: number, OBJECT_NAME?: string | Uint8Array | null, ERROR?: string | Uint8Array | null, STATES_IN_SPAN?: number, STATES_FITTED?: number, STATES_WITHOUT_WEIGHTS?: number, STATES_REJECTED?: number, STAGES?: (ERMFitStageT)[], ITERATIONS?: number, CONVERGED?: boolean, STOP?: string | Uint8Array | null, CRITERION?: string | Uint8Array | null, RMS?: ERMResidualStatisticsT | null, RESIDUALS?: (ERMResidualSampleT)[], CLOSURE?: ERMClosureTestT | null, WEIGHTED_RMS?: number, CONDITION_NUMBER?: number, COVARIANCE?: ERMFitCovarianceT | null, EPOCH?: string | Uint8Array | null, EQUINOCTIAL?: (number)[], BSTAR_FITTED?: boolean, BSTAR_INITIAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMElementFit.d.ts.map