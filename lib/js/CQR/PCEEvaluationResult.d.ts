import * as flatbuffers from 'flatbuffers';
import { PCEParameterSample, PCEParameterSampleT } from './PCEParameterSample.js';
import { pceResultStatus } from './pceResultStatus.js';
export declare class PCEEvaluationResult implements flatbuffers.IUnpackableObject<PCEEvaluationResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCEEvaluationResult;
    static getRootAsPCEEvaluationResult(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationResult): PCEEvaluationResult;
    static getSizePrefixedRootAsPCEEvaluationResult(bb: flatbuffers.ByteBuffer, obj?: PCEEvaluationResult): PCEEvaluationResult;
    STATUS(): pceResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * One sample per requested state, in the requested order.
     */
    SAMPLES(index: number, obj?: PCEParameterSample): PCEParameterSample | null;
    samplesLength(): number;
    /**
     * Content identifier of the Earth-orientation data set actually used.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCEEvaluationResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: pceResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLESOffset: flatbuffers.Offset): void;
    static createSamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endPCEEvaluationResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCEEvaluationResult(builder: flatbuffers.Builder, STATUS: pceResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, SAMPLESOffset: flatbuffers.Offset, EOP_DATA_SET_CIDOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCEEvaluationResultT;
    unpackTo(_o: PCEEvaluationResultT): void;
}
export declare class PCEEvaluationResultT implements flatbuffers.IGeneratedObject {
    STATUS: pceResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    SAMPLES: (PCEParameterSampleT)[];
    EOP_DATA_SET_CID: string | Uint8Array | null;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: pceResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, SAMPLES?: (PCEParameterSampleT)[], EOP_DATA_SET_CID?: string | Uint8Array | null, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCEEvaluationResult.d.ts.map