import * as flatbuffers from 'flatbuffers';
import { EPM, EPMT } from './epm.js';
export declare class EPMCOLLECTION implements flatbuffers.IUnpackableObject<EPMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPMCOLLECTION;
    static getRootAsEPMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EPMCOLLECTION): EPMCOLLECTION;
    static getSizePrefixedRootAsEPMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EPMCOLLECTION): EPMCOLLECTION;
    records(index: number, obj?: EPM): EPM | null;
    recordsLength(): number;
    static startEPMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEPMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEPMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EPMCOLLECTIONT;
    unpackTo(_o: EPMCOLLECTIONT): void;
}
export declare class EPMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (EPMT)[];
    constructor(records?: (EPMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=epmcollection.d.ts.map