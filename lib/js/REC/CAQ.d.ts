import * as flatbuffers from 'flatbuffers';
import { CAQRequest, CAQRequestT } from './CAQRequest.js';
import { CAQResult, CAQResultT } from './CAQResult.js';
/**
 * Catalog query envelope — carries either a request or a result payload.
 */
export declare class CAQ implements flatbuffers.IUnpackableObject<CAQT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CAQ;
    static getRootAsCAQ(bb: flatbuffers.ByteBuffer, obj?: CAQ): CAQ;
    static getSizePrefixedRootAsCAQ(bb: flatbuffers.ByteBuffer, obj?: CAQ): CAQ;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: CAQRequest): CAQRequest | null;
    RESULT(obj?: CAQResult): CAQResult | null;
    static startCAQ(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static endCAQ(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCAQBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCAQBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CAQT;
    unpackTo(_o: CAQT): void;
}
export declare class CAQT implements flatbuffers.IGeneratedObject {
    REQUEST: CAQRequestT | null;
    RESULT: CAQResultT | null;
    constructor(REQUEST?: CAQRequestT | null, RESULT?: CAQResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CAQ.d.ts.map