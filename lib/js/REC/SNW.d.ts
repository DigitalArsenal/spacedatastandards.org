import * as flatbuffers from 'flatbuffers';
import { SNWBatchRequest, SNWBatchRequestT } from './SNWBatchRequest.js';
import { SNWBatchResponse, SNWBatchResponseT } from './SNWBatchResponse.js';
/**
 * Sensor Runtime Wire envelope — carries either a batch request or a batch
 * response across the runtime boundary.
 */
export declare class SNW implements flatbuffers.IUnpackableObject<SNWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNW;
    static getRootAsSNW(bb: flatbuffers.ByteBuffer, obj?: SNW): SNW;
    static getSizePrefixedRootAsSNW(bb: flatbuffers.ByteBuffer, obj?: SNW): SNW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    BATCH_REQUEST(obj?: SNWBatchRequest): SNWBatchRequest | null;
    BATCH_RESPONSE(obj?: SNWBatchResponse): SNWBatchResponse | null;
    static startSNW(builder: flatbuffers.Builder): void;
    static addBatchRequest(builder: flatbuffers.Builder, BATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addBatchResponse(builder: flatbuffers.Builder, BATCH_RESPONSEOffset: flatbuffers.Offset): void;
    static endSNW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSNWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSNWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SNWT;
    unpackTo(_o: SNWT): void;
}
export declare class SNWT implements flatbuffers.IGeneratedObject {
    BATCH_REQUEST: SNWBatchRequestT | null;
    BATCH_RESPONSE: SNWBatchResponseT | null;
    constructor(BATCH_REQUEST?: SNWBatchRequestT | null, BATCH_RESPONSE?: SNWBatchResponseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNW.d.ts.map