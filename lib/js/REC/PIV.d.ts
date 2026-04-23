import * as flatbuffers from 'flatbuffers';
import { PIVRequest, PIVRequestT } from './PIVRequest.js';
import { PIVResponse, PIVResponseT } from './PIVResponse.js';
/**
 * Envelope — carries either a request or a response. Either REQUEST or
 * RESPONSE is populated per message; both populated is undefined.
 */
export declare class PIV implements flatbuffers.IUnpackableObject<PIVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PIV;
    static getRootAsPIV(bb: flatbuffers.ByteBuffer, obj?: PIV): PIV;
    static getSizePrefixedRootAsPIV(bb: flatbuffers.ByteBuffer, obj?: PIV): PIV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: PIVRequest): PIVRequest | null;
    RESPONSE(obj?: PIVResponse): PIVResponse | null;
    static startPIV(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addResponse(builder: flatbuffers.Builder, RESPONSEOffset: flatbuffers.Offset): void;
    static endPIV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPIVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPIVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PIVT;
    unpackTo(_o: PIVT): void;
}
export declare class PIVT implements flatbuffers.IGeneratedObject {
    REQUEST: PIVRequestT | null;
    RESPONSE: PIVResponseT | null;
    constructor(REQUEST?: PIVRequestT | null, RESPONSE?: PIVResponseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PIV.d.ts.map