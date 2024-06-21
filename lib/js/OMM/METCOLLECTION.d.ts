import * as flatbuffers from 'flatbuffers';
import { MET, METT } from './MET.js';
export declare class METCOLLECTION implements flatbuffers.IUnpackableObject<METCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): METCOLLECTION;
    static getRootAsMETCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: METCOLLECTION): METCOLLECTION;
    static getSizePrefixedRootAsMETCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: METCOLLECTION): METCOLLECTION;
    RECORDS(index: number, obj?: MET): MET | null;
    recordsLength(): number;
    static startMETCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMETCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMETCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): METCOLLECTIONT;
    unpackTo(_o: METCOLLECTIONT): void;
}
export declare class METCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (METT)[];
    constructor(RECORDS?: (METT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=METCOLLECTION.d.ts.map