import * as flatbuffers from 'flatbuffers';
import { numResultStatus } from './numResultStatus.js';
/**
 * Result of one scalar interpolation operation.
 */
export declare class NUMScalarInterpolationResult implements flatbuffers.IUnpackableObject<NUMScalarInterpolationResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMScalarInterpolationResult;
    static getRootAsNUMScalarInterpolationResult(bb: flatbuffers.ByteBuffer, obj?: NUMScalarInterpolationResult): NUMScalarInterpolationResult;
    static getSizePrefixedRootAsNUMScalarInterpolationResult(bb: flatbuffers.ByteBuffer, obj?: NUMScalarInterpolationResult): NUMScalarInterpolationResult;
    STATUS(): numResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interpolated scalar value.
     */
    VALUE(): number;
    /**
     * Caller trace/correlation identifier copied from the request when present.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMScalarInterpolationResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: numResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMScalarInterpolationResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMScalarInterpolationResult(builder: flatbuffers.Builder, STATUS: numResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, VALUE: number, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMScalarInterpolationResultT;
    unpackTo(_o: NUMScalarInterpolationResultT): void;
}
export declare class NUMScalarInterpolationResultT implements flatbuffers.IGeneratedObject {
    STATUS: numResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    VALUE: number;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: numResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, VALUE?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMScalarInterpolationResult.d.ts.map