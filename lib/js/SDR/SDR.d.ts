import * as flatbuffers from 'flatbuffers';
import { SDRBatchRequest, SDRBatchRequestT } from './SDRBatchRequest.js';
import { SDRBatchResponse, SDRBatchResponseT } from './SDRBatchResponse.js';
import { SDRSensorConfig, SDRSensorConfigT } from './SDRSensorConfig.js';
import { SDRSingleInput, SDRSingleInputT } from './SDRSingleInput.js';
import { SDRSingleResult, SDRSingleResultT } from './SDRSingleResult.js';
/**
 * Sensor Detection Report envelope message.
 */
export declare class SDR implements flatbuffers.IUnpackableObject<SDRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDR;
    static getRootAsSDR(bb: flatbuffers.ByteBuffer, obj?: SDR): SDR;
    static getSizePrefixedRootAsSDR(bb: flatbuffers.ByteBuffer, obj?: SDR): SDR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CONFIG(obj?: SDRSensorConfig): SDRSensorConfig | null;
    BATCH_REQUEST(obj?: SDRBatchRequest): SDRBatchRequest | null;
    BATCH_RESPONSE(obj?: SDRBatchResponse): SDRBatchResponse | null;
    SINGLE_INPUT(obj?: SDRSingleInput): SDRSingleInput | null;
    SINGLE_RESULT(obj?: SDRSingleResult): SDRSingleResult | null;
    static startSDR(builder: flatbuffers.Builder): void;
    static addConfig(builder: flatbuffers.Builder, CONFIGOffset: flatbuffers.Offset): void;
    static addBatchRequest(builder: flatbuffers.Builder, BATCH_REQUESTOffset: flatbuffers.Offset): void;
    static addBatchResponse(builder: flatbuffers.Builder, BATCH_RESPONSEOffset: flatbuffers.Offset): void;
    static addSingleInput(builder: flatbuffers.Builder, SINGLE_INPUTOffset: flatbuffers.Offset): void;
    static addSingleResult(builder: flatbuffers.Builder, SINGLE_RESULTOffset: flatbuffers.Offset): void;
    static endSDR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSDRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSDRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SDRT;
    unpackTo(_o: SDRT): void;
}
export declare class SDRT implements flatbuffers.IGeneratedObject {
    CONFIG: SDRSensorConfigT | null;
    BATCH_REQUEST: SDRBatchRequestT | null;
    BATCH_RESPONSE: SDRBatchResponseT | null;
    SINGLE_INPUT: SDRSingleInputT | null;
    SINGLE_RESULT: SDRSingleResultT | null;
    constructor(CONFIG?: SDRSensorConfigT | null, BATCH_REQUEST?: SDRBatchRequestT | null, BATCH_RESPONSE?: SDRBatchResponseT | null, SINGLE_INPUT?: SDRSingleInputT | null, SINGLE_RESULT?: SDRSingleResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDR.d.ts.map