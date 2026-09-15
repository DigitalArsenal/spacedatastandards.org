import * as flatbuffers from 'flatbuffers';
import { FRMFrameTransformRequest, FRMFrameTransformRequestT } from './FRMFrameTransformRequest.js';
import { FRMFrameTransformResult, FRMFrameTransformResultT } from './FRMFrameTransformResult.js';
export declare class FRM implements flatbuffers.IUnpackableObject<FRMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FRM;
    static getRootAsFRM(bb: flatbuffers.ByteBuffer, obj?: FRM): FRM;
    static getSizePrefixedRootAsFRM(bb: flatbuffers.ByteBuffer, obj?: FRM): FRM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    FRAME_TRANSFORM_REQUEST(obj?: FRMFrameTransformRequest): FRMFrameTransformRequest | null;
    FRAME_TRANSFORM_RESULT(obj?: FRMFrameTransformResult): FRMFrameTransformResult | null;
    static startFRM(builder: flatbuffers.Builder): void;
    static addFrameTransformRequest(builder: flatbuffers.Builder, FRAME_TRANSFORM_REQUESTOffset: flatbuffers.Offset): void;
    static addFrameTransformResult(builder: flatbuffers.Builder, FRAME_TRANSFORM_RESULTOffset: flatbuffers.Offset): void;
    static endFRM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): FRMT;
    unpackTo(_o: FRMT): void;
}
export declare class FRMT implements flatbuffers.IGeneratedObject {
    FRAME_TRANSFORM_REQUEST: FRMFrameTransformRequestT | null;
    FRAME_TRANSFORM_RESULT: FRMFrameTransformResultT | null;
    constructor(FRAME_TRANSFORM_REQUEST?: FRMFrameTransformRequestT | null, FRAME_TRANSFORM_RESULT?: FRMFrameTransformResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FRM.d.ts.map