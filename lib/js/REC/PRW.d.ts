import * as flatbuffers from 'flatbuffers';
import { PRWBatchRequest, PRWBatchRequestT } from './PRWBatchRequest.js';
import { PRWBatchResponse, PRWBatchResponseT } from './PRWBatchResponse.js';
import { PRWInit, PRWInitT } from './PRWInit.js';
/**
 * Propagator Runtime Wire — envelope that carries either an init request,
 * a batch request, or a batch response across a runtime boundary.
 */
export declare class PRW implements flatbuffers.IUnpackableObject<PRWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRW;
    static getRootAsPRW(bb: flatbuffers.ByteBuffer, obj?: PRW): PRW;
    static getSizePrefixedRootAsPRW(bb: flatbuffers.ByteBuffer, obj?: PRW): PRW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    INIT(obj?: PRWInit): PRWInit | null;
    BATCH_REQUEST(obj?: PRWBatchRequest): PRWBatchRequest | null;
    BATCH_RESPONSE(obj?: PRWBatchResponse): PRWBatchResponse | null;
    static startPRW(builder: flatbuffers.Builder): void;
    static addInit(builder: flatbuffers.Builder, INITOffset: flatbuffers.Offset): void;
    static addBatchRequest(builder: flatbuffers.Builder, BATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addBatchResponse(builder: flatbuffers.Builder, BATCH_RESPONSEOffset: flatbuffers.Offset): void;
    static endPRW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPRWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPRWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PRWT;
    unpackTo(_o: PRWT): void;
}
export declare class PRWT implements flatbuffers.IGeneratedObject {
    INIT: PRWInitT | null;
    BATCH_REQUEST: PRWBatchRequestT | null;
    BATCH_RESPONSE: PRWBatchResponseT | null;
    constructor(INIT?: PRWInitT | null, BATCH_REQUEST?: PRWBatchRequestT | null, BATCH_RESPONSE?: PRWBatchResponseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRW.d.ts.map