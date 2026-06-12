import * as flatbuffers from 'flatbuffers';
import { numResultStatus } from './numResultStatus.js';
/**
 * Result of one component-wise vector discretization operation.
 */
export declare class NUMVectorDiscretizeResult implements flatbuffers.IUnpackableObject<NUMVectorDiscretizeResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMVectorDiscretizeResult;
    static getRootAsNUMVectorDiscretizeResult(bb: flatbuffers.ByteBuffer, obj?: NUMVectorDiscretizeResult): NUMVectorDiscretizeResult;
    static getSizePrefixedRootAsNUMVectorDiscretizeResult(bb: flatbuffers.ByteBuffer, obj?: NUMVectorDiscretizeResult): NUMVectorDiscretizeResult;
    STATUS(): numResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quantized output vector.
     */
    DISCRETIZED_STATE(index: number): number | null;
    discretizedStateLength(): number;
    discretizedStateArray(): Float64Array | null;
    /**
     * Input-minus-output error after any requested carried error was applied.
     */
    DISCRETIZATION_ERROR(index: number): number | null;
    discretizationErrorLength(): number;
    discretizationErrorArray(): Float64Array | null;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMVectorDiscretizeResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: numResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addDiscretizedState(builder: flatbuffers.Builder, DISCRETIZED_STATEOffset: flatbuffers.Offset): void;
    static createDiscretizedStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDiscretizedStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDiscretizedStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDiscretizationError(builder: flatbuffers.Builder, DISCRETIZATION_ERROROffset: flatbuffers.Offset): void;
    static createDiscretizationErrorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDiscretizationErrorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDiscretizationErrorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMVectorDiscretizeResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMVectorDiscretizeResult(builder: flatbuffers.Builder, STATUS: numResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, DISCRETIZED_STATEOffset: flatbuffers.Offset, DISCRETIZATION_ERROROffset: flatbuffers.Offset, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMVectorDiscretizeResultT;
    unpackTo(_o: NUMVectorDiscretizeResultT): void;
}
export declare class NUMVectorDiscretizeResultT implements flatbuffers.IGeneratedObject {
    STATUS: numResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    DISCRETIZED_STATE: (number)[];
    DISCRETIZATION_ERROR: (number)[];
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: numResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, DISCRETIZED_STATE?: (number)[], DISCRETIZATION_ERROR?: (number)[], TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMVectorDiscretizeResult.d.ts.map