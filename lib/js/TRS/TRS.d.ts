import * as flatbuffers from 'flatbuffers';
import { TRSRequest, TRSRequestT } from './TRSRequest.js';
import { TRSResult, TRSResultT } from './TRSResult.js';
/**
 * Terrain raster solve envelope.
 */
export declare class TRS implements flatbuffers.IUnpackableObject<TRST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRS;
    static getRootAsTRS(bb: flatbuffers.ByteBuffer, obj?: TRS): TRS;
    static getSizePrefixedRootAsTRS(bb: flatbuffers.ByteBuffer, obj?: TRS): TRS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: TRSRequest): TRSRequest | null;
    RESULT(obj?: TRSResult): TRSResult | null;
    static startTRS(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static endTRS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TRST;
    unpackTo(_o: TRST): void;
}
export declare class TRST implements flatbuffers.IGeneratedObject {
    REQUEST: TRSRequestT | null;
    RESULT: TRSResultT | null;
    constructor(REQUEST?: TRSRequestT | null, RESULT?: TRSResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRS.d.ts.map