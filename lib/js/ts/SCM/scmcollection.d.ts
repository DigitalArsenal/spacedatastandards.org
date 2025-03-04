import * as flatbuffers from 'flatbuffers';
import { SCM, SCMT } from './scm.js';
/**
 * Declaring the root type
 */
export declare class SCMCOLLECTION implements flatbuffers.IUnpackableObject<SCMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCMCOLLECTION;
    static getRootAsSCMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SCMCOLLECTION): SCMCOLLECTION;
    static getSizePrefixedRootAsSCMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SCMCOLLECTION): SCMCOLLECTION;
    records(index: number, obj?: SCM): SCM | null;
    recordsLength(): number;
    static startSCMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCMCOLLECTIONT;
    unpackTo(_o: SCMCOLLECTIONT): void;
}
export declare class SCMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (SCMT)[];
    constructor(records?: (SCMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=scmcollection.d.ts.map