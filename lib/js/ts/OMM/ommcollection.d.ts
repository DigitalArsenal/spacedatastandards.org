import * as flatbuffers from 'flatbuffers';
import { OMM, OMMT } from './omm.js';
export declare class OMMCOLLECTION implements flatbuffers.IUnpackableObject<OMMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OMMCOLLECTION;
    static getRootAsOMMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OMMCOLLECTION): OMMCOLLECTION;
    static getSizePrefixedRootAsOMMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OMMCOLLECTION): OMMCOLLECTION;
    records(index: number, obj?: OMM): OMM | null;
    recordsLength(): number;
    static startOMMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOMMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOMMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OMMCOLLECTIONT;
    unpackTo(_o: OMMCOLLECTIONT): void;
}
export declare class OMMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (OMMT)[];
    constructor(records?: (OMMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ommcollection.d.ts.map