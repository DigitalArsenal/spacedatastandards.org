import * as flatbuffers from 'flatbuffers';
import { BSPInterpolationRequest, BSPInterpolationRequestT } from './BSPInterpolationRequest.js';
import { BSPInterpolationResult, BSPInterpolationResultT } from './BSPInterpolationResult.js';
/**
 * B-spline interpolation envelope.
 */
export declare class BSP implements flatbuffers.IUnpackableObject<BSPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BSP;
    static getRootAsBSP(bb: flatbuffers.ByteBuffer, obj?: BSP): BSP;
    static getSizePrefixedRootAsBSP(bb: flatbuffers.ByteBuffer, obj?: BSP): BSP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * B-spline interpolation request.
     */
    INTERPOLATION_REQUEST(obj?: BSPInterpolationRequest): BSPInterpolationRequest | null;
    /**
     * B-spline interpolation result.
     */
    INTERPOLATION_RESULT(obj?: BSPInterpolationResult): BSPInterpolationResult | null;
    static startBSP(builder: flatbuffers.Builder): void;
    static addInterpolationRequest(builder: flatbuffers.Builder, INTERPOLATION_REQUESTOffset: flatbuffers.Offset): void;
    static addInterpolationResult(builder: flatbuffers.Builder, INTERPOLATION_RESULTOffset: flatbuffers.Offset): void;
    static endBSP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBSPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBSPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): BSPT;
    unpackTo(_o: BSPT): void;
}
export declare class BSPT implements flatbuffers.IGeneratedObject {
    INTERPOLATION_REQUEST: BSPInterpolationRequestT | null;
    INTERPOLATION_RESULT: BSPInterpolationResultT | null;
    constructor(INTERPOLATION_REQUEST?: BSPInterpolationRequestT | null, INTERPOLATION_RESULT?: BSPInterpolationResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BSP.d.ts.map