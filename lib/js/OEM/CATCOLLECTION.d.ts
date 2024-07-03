import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
export declare class CATCOLLECTION implements flatbuffers.IUnpackableObject<CATCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CATCOLLECTION;
    static getRootAsCATCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CATCOLLECTION): CATCOLLECTION;
    static getSizePrefixedRootAsCATCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CATCOLLECTION): CATCOLLECTION;
    RECORDS(index: number, obj?: CAT): CAT | null;
    recordsLength(): number;
    static startCATCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCATCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCATCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CATCOLLECTIONT;
    unpackTo(_o: CATCOLLECTIONT): void;
}
export declare class CATCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CATT)[];
    constructor(RECORDS?: (CATT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CATCOLLECTION.d.ts.map