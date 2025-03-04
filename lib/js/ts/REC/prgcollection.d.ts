import * as flatbuffers from 'flatbuffers';
import { PRG, PRGT } from './prg.js';
export declare class PRGCOLLECTION implements flatbuffers.IUnpackableObject<PRGCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRGCOLLECTION;
    static getRootAsPRGCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PRGCOLLECTION): PRGCOLLECTION;
    static getSizePrefixedRootAsPRGCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PRGCOLLECTION): PRGCOLLECTION;
    records(index: number, obj?: PRG): PRG | null;
    recordsLength(): number;
    static startPRGCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRGCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRGCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRGCOLLECTIONT;
    unpackTo(_o: PRGCOLLECTIONT): void;
}
export declare class PRGCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (PRGT)[];
    constructor(records?: (PRGT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=prgcollection.d.ts.map