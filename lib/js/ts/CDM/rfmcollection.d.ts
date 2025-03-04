import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './rfm.js';
/**
 * Collection of Reference Frame Messages
 */
export declare class RFMCOLLECTION implements flatbuffers.IUnpackableObject<RFMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMCOLLECTION;
    static getRootAsRFMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: RFMCOLLECTION): RFMCOLLECTION;
    static getSizePrefixedRootAsRFMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: RFMCOLLECTION): RFMCOLLECTION;
    records(index: number, obj?: RFM): RFM | null;
    recordsLength(): number;
    static startRFMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFMCOLLECTIONT;
    unpackTo(_o: RFMCOLLECTIONT): void;
}
export declare class RFMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (RFMT)[];
    constructor(records?: (RFMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=rfmcollection.d.ts.map