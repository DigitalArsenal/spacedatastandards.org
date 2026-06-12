import * as flatbuffers from 'flatbuffers';
import { numFunctionCode } from './numFunctionCode.js';
import { numOperationCode } from './numOperationCode.js';
/**
 * Request for one scalar numerical root-solving operation.
 */
export declare class NUMRootSolveRequest implements flatbuffers.IUnpackableObject<NUMRootSolveRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUMRootSolveRequest;
    static getRootAsNUMRootSolveRequest(bb: flatbuffers.ByteBuffer, obj?: NUMRootSolveRequest): NUMRootSolveRequest;
    static getSizePrefixedRootAsNUMRootSolveRequest(bb: flatbuffers.ByteBuffer, obj?: NUMRootSolveRequest): NUMRootSolveRequest;
    OPERATION(): numOperationCode;
    FUNCTION(): numFunctionCode;
    INITIAL_ESTIMATE(): number;
    TARGET_VALUE(): number;
    ACCURACY(): number;
    MAX_ITERATIONS(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNUMRootSolveRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: numOperationCode): void;
    static addFunction(builder: flatbuffers.Builder, FUNCTION: numFunctionCode): void;
    static addInitialEstimate(builder: flatbuffers.Builder, INITIAL_ESTIMATE: number): void;
    static addTargetValue(builder: flatbuffers.Builder, TARGET_VALUE: number): void;
    static addAccuracy(builder: flatbuffers.Builder, ACCURACY: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endNUMRootSolveRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNUMRootSolveRequest(builder: flatbuffers.Builder, OPERATION: numOperationCode, FUNCTION: numFunctionCode, INITIAL_ESTIMATE: number, TARGET_VALUE: number, ACCURACY: number, MAX_ITERATIONS: number, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NUMRootSolveRequestT;
    unpackTo(_o: NUMRootSolveRequestT): void;
}
export declare class NUMRootSolveRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: numOperationCode;
    FUNCTION: numFunctionCode;
    INITIAL_ESTIMATE: number;
    TARGET_VALUE: number;
    ACCURACY: number;
    MAX_ITERATIONS: number;
    TRACE_ID: string | Uint8Array | null;
    constructor(OPERATION?: numOperationCode, FUNCTION?: numFunctionCode, INITIAL_ESTIMATE?: number, TARGET_VALUE?: number, ACCURACY?: number, MAX_ITERATIONS?: number, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUMRootSolveRequest.d.ts.map