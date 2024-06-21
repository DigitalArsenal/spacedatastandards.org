import * as flatbuffers from 'flatbuffers';
import { LDM, LDMT } from './LDM.js';
export declare class LDMCOLLECTION implements flatbuffers.IUnpackableObject<LDMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LDMCOLLECTION;
    static getRootAsLDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: LDMCOLLECTION): LDMCOLLECTION;
    static getSizePrefixedRootAsLDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: LDMCOLLECTION): LDMCOLLECTION;
    RECORDS(index: number, obj?: LDM): LDM | null;
    recordsLength(): number;
    static startLDMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLDMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLDMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LDMCOLLECTIONT;
    unpackTo(_o: LDMCOLLECTIONT): void;
}
export declare class LDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (LDMT)[];
    constructor(RECORDS?: (LDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LDMCOLLECTION.d.ts.map