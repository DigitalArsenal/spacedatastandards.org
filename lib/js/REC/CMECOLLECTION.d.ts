import * as flatbuffers from 'flatbuffers';
import { CME, CMET } from './CME.js';
export declare class CMECOLLECTION implements flatbuffers.IUnpackableObject<CMECOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMECOLLECTION;
    static getRootAsCMECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CMECOLLECTION): CMECOLLECTION;
    static getSizePrefixedRootAsCMECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CMECOLLECTION): CMECOLLECTION;
    RECORDS(index: number, obj?: CME): CME | null;
    recordsLength(): number;
    static startCMECOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCMECOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCMECOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMECOLLECTIONT;
    unpackTo(_o: CMECOLLECTIONT): void;
}
export declare class CMECOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CMET)[];
    constructor(RECORDS?: (CMET)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMECOLLECTION.d.ts.map