import * as flatbuffers from 'flatbuffers';
import { EOO, EOOT } from './EOO.js';
export declare class EOOCOLLECTION implements flatbuffers.IUnpackableObject<EOOCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOOCOLLECTION;
    static getRootAsEOOCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EOOCOLLECTION): EOOCOLLECTION;
    static getSizePrefixedRootAsEOOCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EOOCOLLECTION): EOOCOLLECTION;
    RECORDS(index: number, obj?: EOO): EOO | null;
    recordsLength(): number;
    static startEOOCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEOOCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEOOCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EOOCOLLECTIONT;
    unpackTo(_o: EOOCOLLECTIONT): void;
}
export declare class EOOCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (EOOT)[];
    constructor(RECORDS?: (EOOT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOOCOLLECTION.d.ts.map