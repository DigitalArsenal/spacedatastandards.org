import * as flatbuffers from 'flatbuffers';
import { SPW, SPWT } from './spw.js';
export declare class SPWCOLLECTION implements flatbuffers.IUnpackableObject<SPWCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SPWCOLLECTION;
    static getRootAsSPWCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SPWCOLLECTION): SPWCOLLECTION;
    static getSizePrefixedRootAsSPWCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SPWCOLLECTION): SPWCOLLECTION;
    records(index: number, obj?: SPW): SPW | null;
    recordsLength(): number;
    static startSPWCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSPWCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSPWCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SPWCOLLECTIONT;
    unpackTo(_o: SPWCOLLECTIONT): void;
}
export declare class SPWCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (SPWT)[];
    constructor(records?: (SPWT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=spwcollection.d.ts.map