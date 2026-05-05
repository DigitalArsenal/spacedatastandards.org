import * as flatbuffers from 'flatbuffers';
import { lambertSolutionBranch, lambertSolutionBranchT } from './lambertSolutionBranch.js';
import { lambertSolveState } from './lambertSolveState.js';
/**
 * Lambert solve result.
 */
export declare class LMO implements flatbuffers.IUnpackableObject<LMOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LMO;
    static getRootAsLMO(bb: flatbuffers.ByteBuffer, obj?: LMO): LMO;
    static getSizePrefixedRootAsLMO(bb: flatbuffers.ByteBuffer, obj?: LMO): LMO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Request identifier copied from LMS.REQUEST_ID.
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solve status.
     */
    STATUS(): lambertSolveState;
    /**
     * Structured error code when STATUS is ERROR.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable error message when STATUS is ERROR.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Single-revolution solution when STATUS is OK.
     */
    SINGLE(obj?: lambertSolutionBranch): lambertSolutionBranch | null;
    /**
     * Multi-revolution branches in ascending N_REVS order.
     */
    MULTI(index: number, obj?: lambertSolutionBranch): lambertSolutionBranch | null;
    multiLength(): number;
    /**
     * Highest revolution count that produced a feasible pair. Zero when no multi-rev branch is feasible.
     */
    MAX_FEASIBLE_REVS(): number;
    /**
     * Result flags reserved for future compatibility.
     */
    FLAGS(): number;
    static startLMO(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: lambertSolveState): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addSingle(builder: flatbuffers.Builder, SINGLEOffset: flatbuffers.Offset): void;
    static addMulti(builder: flatbuffers.Builder, MULTIOffset: flatbuffers.Offset): void;
    static createMultiVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMultiVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxFeasibleRevs(builder: flatbuffers.Builder, MAX_FEASIBLE_REVS: number): void;
    static addFlags(builder: flatbuffers.Builder, FLAGS: number): void;
    static endLMO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLMOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLMOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LMOT;
    unpackTo(_o: LMOT): void;
}
export declare class LMOT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    STATUS: lambertSolveState;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    SINGLE: lambertSolutionBranchT | null;
    MULTI: (lambertSolutionBranchT)[];
    MAX_FEASIBLE_REVS: number;
    FLAGS: number;
    constructor(REQUEST_ID?: string | Uint8Array | null, STATUS?: lambertSolveState, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, SINGLE?: lambertSolutionBranchT | null, MULTI?: (lambertSolutionBranchT)[], MAX_FEASIBLE_REVS?: number, FLAGS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LMO.d.ts.map