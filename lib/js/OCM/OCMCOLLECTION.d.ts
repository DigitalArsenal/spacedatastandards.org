import * as flatbuffers from 'flatbuffers';
import { OCM, OCMT } from './OCM.js';
export declare class OCMCOLLECTION implements flatbuffers.IUnpackableObject<OCMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMCOLLECTION;
    static getRootAsOCMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OCMCOLLECTION): OCMCOLLECTION;
    static getSizePrefixedRootAsOCMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OCMCOLLECTION): OCMCOLLECTION;
    /**
     * Collection of OCM records.
     */
    RECORDS(index: number, obj?: OCM): OCM | null;
    recordsLength(): number;
    static startOCMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OCMCOLLECTIONT;
    unpackTo(_o: OCMCOLLECTIONT): void;
}
export declare class OCMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (OCMT)[];
    constructor(RECORDS?: (OCMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMCOLLECTION.d.ts.map