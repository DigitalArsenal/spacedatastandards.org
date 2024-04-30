import * as flatbuffers from 'flatbuffers';
import { referenceFrame } from './referenceFrame.js';
/**
 * Reference Frame Message
 */
export declare class RFM implements flatbuffers.IUnpackableObject<RFMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFM;
    static getRootAsRFM(bb: flatbuffers.ByteBuffer, obj?: RFM): RFM;
    static getSizePrefixedRootAsRFM(bb: flatbuffers.ByteBuffer, obj?: RFM): RFM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REFERENCE_FRAME(): referenceFrame;
    static startRFM(builder: flatbuffers.Builder): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: referenceFrame): void;
    static endRFM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFM(builder: flatbuffers.Builder, REFERENCE_FRAME: referenceFrame): flatbuffers.Offset;
    unpack(): RFMT;
    unpackTo(_o: RFMT): void;
}
export declare class RFMT implements flatbuffers.IGeneratedObject {
    REFERENCE_FRAME: referenceFrame;
    constructor(REFERENCE_FRAME?: referenceFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFM.d.ts.map