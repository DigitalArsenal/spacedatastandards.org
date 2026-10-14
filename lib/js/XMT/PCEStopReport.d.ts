import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { PCEParameterSample, PCEParameterSampleT } from './PCEParameterSample.js';
import { pceResultStatus } from './pceResultStatus.js';
/**
 * Where a propagate-to-condition run actually landed.
 */
export declare class PCEStopReport implements flatbuffers.IUnpackableObject<PCEStopReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEStopReport;
    static getRootAsPCEStopReport(bb: flatbuffers.ByteBuffer, obj?: PCEStopReport): PCEStopReport;
    static getSizePrefixedRootAsPCEStopReport(bb: flatbuffers.ByteBuffer, obj?: PCEStopReport): PCEStopReport;
    STATUS(): pceResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Index into PCEStopRequest.CONDITIONS of the condition that stopped the
     * run; negative when none did.
     */
    ATTAINED_CONDITION_INDEX(): number;
    /**
     * Which attainment this was, one-based.
     */
    ATTAINED_OCCURRENCE(): number;
    /**
     * Epoch the run stopped at, ISO 8601.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system of EPOCH, named by the $TIM timingStandard member name.
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds of propagated time from the initial state to EPOCH; negative for
     * a BACKWARD run.
     */
    ELAPSED_SECONDS(): number;
    /**
     * State at EPOCH.
     */
    STATE(obj?: FRMStateVector): FRMStateVector | null;
    /**
     * Value the condition parameter actually had at EPOCH.
     */
    ACHIEVED_VALUE(): number;
    /**
     * ACHIEVED_VALUE minus GOAL_VALUE, in the parameter's own unit. This is
     * the residual a consumer gates on; it is NOT assumed to be zero.
     */
    GOAL_RESIDUAL(): number;
    /**
     * States of SYNCHRONIZED_OBJECT_IDS at the same epoch, in that order.
     */
    SYNCHRONIZED_STATES(index: number, obj?: FRMStateVector): FRMStateVector | null;
    synchronizedStatesLength(): number;
    /**
     * Parameters evaluated at the stop epoch.
     */
    SAMPLE(obj?: PCEParameterSample): PCEParameterSample | null;
    /**
     * Root-refinement work actually done, for the step-independence evidence.
     */
    FUNCTION_EVALUATION_COUNT(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEStopReport(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: pceResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addAttainedConditionIndex(builder: flatbuffers.Builder, ATTAINED_CONDITION_INDEX: number): void;
    static addAttainedOccurrence(builder: flatbuffers.Builder, ATTAINED_OCCURRENCE: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addAchievedValue(builder: flatbuffers.Builder, ACHIEVED_VALUE: number): void;
    static addGoalResidual(builder: flatbuffers.Builder, GOAL_RESIDUAL: number): void;
    static addSynchronizedStates(builder: flatbuffers.Builder, SYNCHRONIZED_STATESOffset: flatbuffers.Offset): void;
    static createSynchronizedStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSynchronizedStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSample(builder: flatbuffers.Builder, SAMPLEOffset: flatbuffers.Offset): void;
    static addFunctionEvaluationCount(builder: flatbuffers.Builder, FUNCTION_EVALUATION_COUNT: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endPCEStopReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCEStopReportT;
    unpackTo(_o: PCEStopReportT): void;
}
export declare class PCEStopReportT implements flatbuffers.IGeneratedObject {
    STATUS: pceResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    ATTAINED_CONDITION_INDEX: number;
    ATTAINED_OCCURRENCE: number;
    EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    ELAPSED_SECONDS: number;
    STATE: FRMStateVectorT | null;
    ACHIEVED_VALUE: number;
    GOAL_RESIDUAL: number;
    SYNCHRONIZED_STATES: (FRMStateVectorT)[];
    SAMPLE: PCEParameterSampleT | null;
    FUNCTION_EVALUATION_COUNT: number;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: pceResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, ATTAINED_CONDITION_INDEX?: number, ATTAINED_OCCURRENCE?: number, EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, ELAPSED_SECONDS?: number, STATE?: FRMStateVectorT | null, ACHIEVED_VALUE?: number, GOAL_RESIDUAL?: number, SYNCHRONIZED_STATES?: (FRMStateVectorT)[], SAMPLE?: PCEParameterSampleT | null, FUNCTION_EVALUATION_COUNT?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEStopReport.d.ts.map