import * as flatbuffers from 'flatbuffers';
import { SDI, SDIT } from './SDI.js';
export declare class SDICOLLECTION implements flatbuffers.IUnpackableObject<SDICOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDICOLLECTION;
    static getRootAsSDICOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SDICOLLECTION): SDICOLLECTION;
    static getSizePrefixedRootAsSDICOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SDICOLLECTION): SDICOLLECTION;
    RECORDS(index: number, obj?: SDI): SDI | null;
    recordsLength(): number;
    static startSDICOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSDICOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDICOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SDICOLLECTIONT;
    unpackTo(_o: SDICOLLECTIONT): void;
}
export declare class SDICOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SDIT)[];
    constructor(RECORDS?: (SDIT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDICOLLECTION.d.ts.map