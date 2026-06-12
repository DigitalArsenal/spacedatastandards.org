import * as flatbuffers from 'flatbuffers';
import { NUMGaussMarkovRequest, NUMGaussMarkovRequestT } from './NUMGaussMarkovRequest.js';
import { NUMGaussMarkovResult, NUMGaussMarkovResultT } from './NUMGaussMarkovResult.js';
import { NUMRootSolveRequest, NUMRootSolveRequestT } from './NUMRootSolveRequest.js';
import { NUMRootSolveResult, NUMRootSolveResultT } from './NUMRootSolveResult.js';
import { NUMScalarInterpolationRequest, NUMScalarInterpolationRequestT } from './NUMScalarInterpolationRequest.js';
import { NUMScalarInterpolationResult, NUMScalarInterpolationResultT } from './NUMScalarInterpolationResult.js';
import { NUMVectorDiscretizeRequest, NUMVectorDiscretizeRequestT } from './NUMVectorDiscretizeRequest.js';
import { NUMVectorDiscretizeResult, NUMVectorDiscretizeResultT } from './NUMVectorDiscretizeResult.js';
import { NUMVectorSaturateRequest, NUMVectorSaturateRequestT } from './NUMVectorSaturateRequest.js';
import { NUMVectorSaturateResult, NUMVectorSaturateResultT } from './NUMVectorSaturateResult.js';
/**
 * Numerical utility envelope.
 */
export declare class NUM implements flatbuffers.IUnpackableObject<NUMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NUM;
    static getRootAsNUM(bb: flatbuffers.ByteBuffer, obj?: NUM): NUM;
    static getSizePrefixedRootAsNUM(bb: flatbuffers.ByteBuffer, obj?: NUM): NUM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ROOT_SOLVE_REQUEST(obj?: NUMRootSolveRequest): NUMRootSolveRequest | null;
    ROOT_SOLVE_RESULT(obj?: NUMRootSolveResult): NUMRootSolveResult | null;
    VECTOR_SATURATE_REQUEST(obj?: NUMVectorSaturateRequest): NUMVectorSaturateRequest | null;
    VECTOR_SATURATE_RESULT(obj?: NUMVectorSaturateResult): NUMVectorSaturateResult | null;
    VECTOR_DISCRETIZE_REQUEST(obj?: NUMVectorDiscretizeRequest): NUMVectorDiscretizeRequest | null;
    VECTOR_DISCRETIZE_RESULT(obj?: NUMVectorDiscretizeResult): NUMVectorDiscretizeResult | null;
    SCALAR_INTERPOLATION_REQUEST(obj?: NUMScalarInterpolationRequest): NUMScalarInterpolationRequest | null;
    SCALAR_INTERPOLATION_RESULT(obj?: NUMScalarInterpolationResult): NUMScalarInterpolationResult | null;
    GAUSS_MARKOV_REQUEST(obj?: NUMGaussMarkovRequest): NUMGaussMarkovRequest | null;
    GAUSS_MARKOV_RESULT(obj?: NUMGaussMarkovResult): NUMGaussMarkovResult | null;
    static startNUM(builder: flatbuffers.Builder): void;
    static addRootSolveRequest(builder: flatbuffers.Builder, ROOT_SOLVE_REQUESTOffset: flatbuffers.Offset): void;
    static addRootSolveResult(builder: flatbuffers.Builder, ROOT_SOLVE_RESULTOffset: flatbuffers.Offset): void;
    static addVectorSaturateRequest(builder: flatbuffers.Builder, VECTOR_SATURATE_REQUESTOffset: flatbuffers.Offset): void;
    static addVectorSaturateResult(builder: flatbuffers.Builder, VECTOR_SATURATE_RESULTOffset: flatbuffers.Offset): void;
    static addVectorDiscretizeRequest(builder: flatbuffers.Builder, VECTOR_DISCRETIZE_REQUESTOffset: flatbuffers.Offset): void;
    static addVectorDiscretizeResult(builder: flatbuffers.Builder, VECTOR_DISCRETIZE_RESULTOffset: flatbuffers.Offset): void;
    static addScalarInterpolationRequest(builder: flatbuffers.Builder, SCALAR_INTERPOLATION_REQUESTOffset: flatbuffers.Offset): void;
    static addScalarInterpolationResult(builder: flatbuffers.Builder, SCALAR_INTERPOLATION_RESULTOffset: flatbuffers.Offset): void;
    static addGaussMarkovRequest(builder: flatbuffers.Builder, GAUSS_MARKOV_REQUESTOffset: flatbuffers.Offset): void;
    static addGaussMarkovResult(builder: flatbuffers.Builder, GAUSS_MARKOV_RESULTOffset: flatbuffers.Offset): void;
    static endNUM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNUMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNUMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): NUMT;
    unpackTo(_o: NUMT): void;
}
export declare class NUMT implements flatbuffers.IGeneratedObject {
    ROOT_SOLVE_REQUEST: NUMRootSolveRequestT | null;
    ROOT_SOLVE_RESULT: NUMRootSolveResultT | null;
    VECTOR_SATURATE_REQUEST: NUMVectorSaturateRequestT | null;
    VECTOR_SATURATE_RESULT: NUMVectorSaturateResultT | null;
    VECTOR_DISCRETIZE_REQUEST: NUMVectorDiscretizeRequestT | null;
    VECTOR_DISCRETIZE_RESULT: NUMVectorDiscretizeResultT | null;
    SCALAR_INTERPOLATION_REQUEST: NUMScalarInterpolationRequestT | null;
    SCALAR_INTERPOLATION_RESULT: NUMScalarInterpolationResultT | null;
    GAUSS_MARKOV_REQUEST: NUMGaussMarkovRequestT | null;
    GAUSS_MARKOV_RESULT: NUMGaussMarkovResultT | null;
    constructor(ROOT_SOLVE_REQUEST?: NUMRootSolveRequestT | null, ROOT_SOLVE_RESULT?: NUMRootSolveResultT | null, VECTOR_SATURATE_REQUEST?: NUMVectorSaturateRequestT | null, VECTOR_SATURATE_RESULT?: NUMVectorSaturateResultT | null, VECTOR_DISCRETIZE_REQUEST?: NUMVectorDiscretizeRequestT | null, VECTOR_DISCRETIZE_RESULT?: NUMVectorDiscretizeResultT | null, SCALAR_INTERPOLATION_REQUEST?: NUMScalarInterpolationRequestT | null, SCALAR_INTERPOLATION_RESULT?: NUMScalarInterpolationResultT | null, GAUSS_MARKOV_REQUEST?: NUMGaussMarkovRequestT | null, GAUSS_MARKOV_RESULT?: NUMGaussMarkovResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NUM.d.ts.map