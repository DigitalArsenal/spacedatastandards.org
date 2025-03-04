import * as flatbuffers from 'flatbuffers';
import { LCC, LCCT } from './lcc.js';
export declare class LCCCOLLECTION implements flatbuffers.IUnpackableObject<LCCCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LCCCOLLECTION;
    static getRootAsLCCCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: LCCCOLLECTION): LCCCOLLECTION;
    static getSizePrefixedRootAsLCCCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: LCCCOLLECTION): LCCCOLLECTION;
    records(index: number, obj?: LCC): LCC | null;
    recordsLength(): number;
    static startLCCCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLCCCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLCCCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LCCCOLLECTIONT;
    unpackTo(_o: LCCCOLLECTIONT): void;
}
export declare class LCCCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (LCCT)[];
    constructor(records?: (LCCT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lcccollection.d.ts.map