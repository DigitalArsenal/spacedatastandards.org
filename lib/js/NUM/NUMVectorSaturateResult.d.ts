import * as flatbuffers from 'flatbuffers';
import { numResultStatus } from './numResultStatus.js';
/**
 * Result of one component-wise vector saturation operation.
 */
export declare class NUMVectorSaturateResult implements flatbuffers.IUnpackableObject<NUMVectorSaturateResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMVectorSaturateResult;
    static getRootAsNUMVectorSaturateResult(bb: flatbuffers.ByteBuffer, obj?: NUMVectorSaturateResult): NUMVectorSaturateResult;
    static getSizePrefixedRootAsNUMVectorSaturateResult(bb: flatbuffers.ByteBuffer, obj?: NUMVectorSaturateResult): NUMVectorSaturateResult;
    STATUS(): numResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Saturated output vector.
     */
    SATURATED_STATE(index: number): number | null;
    saturatedStateLength(): number;
    saturatedStateArray(): Float64Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMVectorSaturateResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: numResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addSaturatedState(builder: flatbuffers.Builder, SATURATED_STATEOffset: flatbuffers.Offset): void;
    static createSaturatedStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSaturatedStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSaturatedStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMVectorSaturateResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMVectorSaturateResult(builder: flatbuffers.Builder, STATUS: numResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, SATURATED_STATEOffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMVectorSaturateResultT;
    unpackTo(_o: NUMVectorSaturateResultT): void;
}
export declare class NUMVectorSaturateResultT implements flatbuffers.IGeneratedObject {
    STATUS: numResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    SATURATED_STATE: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: numResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, SATURATED_STATE?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMVectorSaturateResult.d.ts.map