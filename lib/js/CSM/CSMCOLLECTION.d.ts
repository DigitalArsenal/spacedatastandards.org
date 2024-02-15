import * as flatbuffers from 'flatbuffers';
import { CSM, CSMT } from './CSM.js';
export declare class CSMCOLLECTION implements flatbuffers.IUnpackableObject<CSMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CSMCOLLECTION;
    static getRootAsCSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CSMCOLLECTION): CSMCOLLECTION;
    static getSizePrefixedRootAsCSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CSMCOLLECTION): CSMCOLLECTION;
    /**
     * A vector of CSM records
     */
    RECORDS(index: number, obj?: CSM): CSM | null;
    recordsLength(): number;
    static startCSMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCSMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCSMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CSMCOLLECTIONT;
    unpackTo(_o: CSMCOLLECTIONT): void;
}
export declare class CSMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CSMT)[];
    constructor(RECORDS?: (CSMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CSMCOLLECTION.d.ts.map