import * as flatbuffers from 'flatbuffers';
import { ACWRequest, ACWRequestT } from './ACWRequest.js';
import { ACWResult, ACWResultT } from './ACWResult.js';
/**
 * Access-window analysis envelope.
 */
export declare class ACW implements flatbuffers.IUnpackableObject<ACWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACW;
    static getRootAsACW(bb: flatbuffers.ByteBuffer, obj?: ACW): ACW;
    static getSizePrefixedRootAsACW(bb: flatbuffers.ByteBuffer, obj?: ACW): ACW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: ACWRequest): ACWRequest | null;
    RESULT(obj?: ACWResult): ACWResult | null;
    static startACW(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static endACW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ACWT;
    unpackTo(_o: ACWT): void;
}
export declare class ACWT implements flatbuffers.IGeneratedObject {
    REQUEST: ACWRequestT | null;
    RESULT: ACWResultT | null;
    constructor(REQUEST?: ACWRequestT | null, RESULT?: ACWResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACW.d.ts.map