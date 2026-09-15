import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { PCEEvaluationContext, PCEEvaluationContextT } from './PCEEvaluationContext.js';
import { PCEParameterRef, PCEParameterRefT } from './PCEParameterRef.js';
/**
 * Evaluate these parameters on these states. One state is a point query; a
 * run of states is a report or a plot series, and carries the same shape.
 */
export declare class PCEEvaluationRequest implements flatbuffers.IUnpackableObject<PCEEvaluationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEEvaluationRequest;
    static getRootAsPCEEvaluationRequest(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationRequest): PCEEvaluationRequest;
    static getSizePrefixedRootAsPCEEvaluationRequest(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationRequest): PCEEvaluationRequest;
    CONTEXT(obj?: PCEEvaluationContext): PCEEvaluationContext | null;
    PARAMETERS(index: number, obj?: PCEParameterRef): PCEParameterRef | null;
    parametersLength(): number;
    /**
     * States to evaluate at, in chronological order. Each carries its own
     * epoch and coordinate system name.
     */
    STATES(index: number, obj?: FRMStateVector): FRMStateVector | null;
    statesLength(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEEvaluationRequest(builder: flatbuffers.Builder): void;
    static addContext(builder: flatbuffers.Builder, CONTEXTOffset: flatbuffers.Offset): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endPCEEvaluationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEEvaluationRequest(builder: flatbuffers.Builder, CONTEXTOffset: flatbuffers.Offset, PARAMETERSOffset: flatbuffers.Offset, STATESOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEEvaluationRequestT;
    unpackTo(_o: PCEEvaluationRequestT): void;
}
export declare class PCEEvaluationRequestT implements flatbuffers.IGeneratedObject {
    CONTEXT: PCEEvaluationContextT | null;
    PARAMETERS: (PCEParameterRefT)[];
    STATES: (FRMStateVectorT)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(CONTEXT?: PCEEvaluationContextT | null, PARAMETERS?: (PCEParameterRefT)[], STATES?: (FRMStateVectorT)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEEvaluationRequest.d.ts.map