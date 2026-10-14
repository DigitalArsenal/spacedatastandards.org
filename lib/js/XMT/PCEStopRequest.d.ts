import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { PCEEvaluationContext, PCEEvaluationContextT } from './PCEEvaluationContext.js';
import { PCEParameterCondition, PCEParameterConditionT } from './PCEParameterCondition.js';
import { PCEParameterRef, PCEParameterRefT } from './PCEParameterRef.js';
import { pcePropagationDirection } from './pcePropagationDirection.js';
/**
 * Propagate until a condition is attained. The propagator itself is NOT named
 * here: it is a port the caller supplies, per the pluggable-propagation law.
 * This record carries only the condition, the interval and the tolerances.
 */
export declare class PCEStopRequest implements flatbuffers.IUnpackableObject<PCEStopRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEStopRequest;
    static getRootAsPCEStopRequest(bb: flatbuffers.ByteBuffer, obj?: PCEStopRequest): PCEStopRequest;
    static getSizePrefixedRootAsPCEStopRequest(bb: flatbuffers.ByteBuffer, obj?: PCEStopRequest): PCEStopRequest;
    CONTEXT(obj?: PCEEvaluationContext): PCEEvaluationContext | null;
    /**
     * State the propagation starts from.
     */
    INITIAL_STATE(obj?: FRMStateVector): FRMStateVector | null;
    /**
     * Conditions evaluated together; the run stops at whichever is attained
     * first in time.
     */
    CONDITIONS(index: number, obj?: PCEParameterCondition): PCEParameterCondition | null;
    conditionsLength(): number;
    DIRECTION(): pcePropagationDirection;
    /**
     * Upper bound on the propagated interval. Reaching it without attaining a
     * condition is GOAL_NOT_ATTAINED, never a silent stop.
     */
    MAXIMUM_ELAPSED_SECONDS(): number;
    /**
     * Convergence bar on the stop epoch. The same scenario run at different
     * step sizes MUST land inside this bar.
     */
    EPOCH_TOLERANCE_SECONDS(): number;
    /**
     * Objects propagated in step with the owner and reported at the same stop
     * epoch.
     */
    SYNCHRONIZED_OBJECT_IDS(index: number): string;
    SYNCHRONIZED_OBJECT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    synchronizedObjectIdsLength(): number;
    /**
     * Parameters to evaluate at the stop epoch, beyond the condition itself.
     */
    REPORT_PARAMETERS(index: number, obj?: PCEParameterRef): PCEParameterRef | null;
    reportParametersLength(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEStopRequest(builder: flatbuffers.Builder): void;
    static addContext(builder: flatbuffers.Builder, CONTEXTOffset: flatbuffers.Offset): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addConditions(builder: flatbuffers.Builder, CONDITIONSOffset: flatbuffers.Offset): void;
    static createConditionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConditionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: pcePropagationDirection): void;
    static addMaximumElapsedSeconds(builder: flatbuffers.Builder, MAXIMUM_ELAPSED_SECONDS: number): void;
    static addEpochToleranceSeconds(builder: flatbuffers.Builder, EPOCH_TOLERANCE_SECONDS: number): void;
    static addSynchronizedObjectIds(builder: flatbuffers.Builder, SYNCHRONIZED_OBJECT_IDSOffset: flatbuffers.Offset): void;
    static createSynchronizedObjectIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSynchronizedObjectIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReportParameters(builder: flatbuffers.Builder, REPORT_PARAMETERSOffset: flatbuffers.Offset): void;
    static createReportParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReportParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endPCEStopRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCEStopRequestT;
    unpackTo(_o: PCEStopRequestT): void;
}
export declare class PCEStopRequestT implements flatbuffers.IGeneratedObject {
    CONTEXT: PCEEvaluationContextT | null;
    INITIAL_STATE: FRMStateVectorT | null;
    CONDITIONS: (PCEParameterConditionT)[];
    DIRECTION: pcePropagationDirection;
    MAXIMUM_ELAPSED_SECONDS: number;
    EPOCH_TOLERANCE_SECONDS: number;
    SYNCHRONIZED_OBJECT_IDS: (string)[];
    REPORT_PARAMETERS: (PCEParameterRefT)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(CONTEXT?: PCEEvaluationContextT | null, INITIAL_STATE?: FRMStateVectorT | null, CONDITIONS?: (PCEParameterConditionT)[], DIRECTION?: pcePropagationDirection, MAXIMUM_ELAPSED_SECONDS?: number, EPOCH_TOLERANCE_SECONDS?: number, SYNCHRONIZED_OBJECT_IDS?: (string)[], REPORT_PARAMETERS?: (PCEParameterRefT)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEStopRequest.d.ts.map