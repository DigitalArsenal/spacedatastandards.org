import * as flatbuffers from 'flatbuffers';
import { numResultStatus } from './numResultStatus.js';
/**
 * Result of one scalar numerical root-solving operation.
 */
export declare class NUMRootSolveResult implements flatbuffers.IUnpackableObject<NUMRootSolveResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMRootSolveResult;
    static getRootAsNUMRootSolveResult(bb: flatbuffers.ByteBuffer, obj?: NUMRootSolveResult): NUMRootSolveResult;
    static getSizePrefixedRootAsNUMRootSolveResult(bb: flatbuffers.ByteBuffer, obj?: NUMRootSolveResult): NUMRootSolveResult;
    STATUS(): numResultStatus;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROOT(): number;
    RESIDUAL(): number;
    ITERATIONS(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMRootSolveResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: numResultStatus): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addRoot(builder: flatbuffers.Builder, ROOT: number): void;
    static addResidual(builder: flatbuffers.Builder, RESIDUAL: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMRootSolveResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMRootSolveResult(builder: flatbuffers.Builder, STATUS: numResultStatus, ERROR_MESSAGEOffset: flatbuffers.Offset, ROOT: number, RESIDUAL: number, ITERATIONS: number, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMRootSolveResultT;
    unpackTo(_o: NUMRootSolveResultT): void;
}
export declare class NUMRootSolveResultT implements flatbuffers.IGeneratedObject {
    STATUS: numResultStatus;
    ERROR_MESSAGE: string | Uint8Array | null;
    ROOT: number;
    RESIDUAL: number;
    ITERATIONS: number;
    TRACE_ID: string | Uint8Array | null;
    constructor(STATUS?: numResultStatus, ERROR_MESSAGE?: string | Uint8Array | null, ROOT?: number, RESIDUAL?: number, ITERATIONS?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMRootSolveResult.d.ts.map