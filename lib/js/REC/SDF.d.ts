import * as flatbuffers from 'flatbuffers';
import { SDFBatchRequest, SDFBatchRequestT } from './SDFBatchRequest.js';
import { SDFBatchResponse, SDFBatchResponseT } from './SDFBatchResponse.js';
import { SDFConfig, SDFConfigT } from './SDFConfig.js';
import { sdfResult, sdfResultT } from './sdfResult.js';
import { sdfTimeRangeResult, sdfTimeRangeResultT } from './sdfTimeRangeResult.js';
/**
 * Signed Distance Field envelope message — carries a configuration, a batch
 * request, a batch response, or single / time-range result records.
 */
export declare class SDF implements flatbuffers.IUnpackableObject<SDFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDF;
    static getRootAsSDF(bb: flatbuffers.ByteBuffer, obj?: SDF): SDF;
    static getSizePrefixedRootAsSDF(bb: flatbuffers.ByteBuffer, obj?: SDF): SDF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CONFIG(obj?: SDFConfig): SDFConfig | null;
    BATCH_REQUEST(obj?: SDFBatchRequest): SDFBatchRequest | null;
    BATCH_RESPONSE(obj?: SDFBatchResponse): SDFBatchResponse | null;
    RESULTS(index: number, obj?: sdfResult): sdfResult | null;
    resultsLength(): number;
    TIME_RANGE_RESULTS(index: number, obj?: sdfTimeRangeResult): sdfTimeRangeResult | null;
    timeRangeResultsLength(): number;
    static startSDF(builder: flatbuffers.Builder): void;
    static addConfig(builder: flatbuffers.Builder, CONFIGOffset: flatbuffers.Offset): void;
    static addBatchRequest(builder: flatbuffers.Builder, BATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addBatchResponse(builder: flatbuffers.Builder, BATCH_RESPONSEOffset: flatbuffers.Offset): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeRangeResults(builder: flatbuffers.Builder, TIME_RANGE_RESULTSOffset: flatbuffers.Offset): void;
    static startTimeRangeResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSDF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSDFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSDFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SDFT;
    unpackTo(_o: SDFT): void;
}
export declare class SDFT implements flatbuffers.IGeneratedObject {
    CONFIG: SDFConfigT | null;
    BATCH_REQUEST: SDFBatchRequestT | null;
    BATCH_RESPONSE: SDFBatchResponseT | null;
    RESULTS: (sdfResultT)[];
    TIME_RANGE_RESULTS: (sdfTimeRangeResultT)[];
    constructor(CONFIG?: SDFConfigT | null, BATCH_REQUEST?: SDFBatchRequestT | null, BATCH_RESPONSE?: SDFBatchResponseT | null, RESULTS?: (sdfResultT)[], TIME_RANGE_RESULTS?: (sdfTimeRangeResultT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDF.d.ts.map