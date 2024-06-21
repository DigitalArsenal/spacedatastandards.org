import * as flatbuffers from 'flatbuffers';
import { CDM, CDMT } from './CDM.js';
export declare class CDMCOLLECTION implements flatbuffers.IUnpackableObject<CDMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CDMCOLLECTION;
    static getRootAsCDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CDMCOLLECTION): CDMCOLLECTION;
    static getSizePrefixedRootAsCDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CDMCOLLECTION): CDMCOLLECTION;
    RECORDS(index: number, obj?: CDM): CDM | null;
    recordsLength(): number;
    static startCDMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCDMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCDMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CDMCOLLECTIONT;
    unpackTo(_o: CDMCOLLECTIONT): void;
}
export declare class CDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CDMT)[];
    constructor(RECORDS?: (CDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CDMCOLLECTION.d.ts.map