import * as flatbuffers from 'flatbuffers';
import { PNM, PNMT } from './PNM.js';
export declare class PNMCOLLECTION implements flatbuffers.IUnpackableObject<PNMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNMCOLLECTION;
    static getRootAsPNMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PNMCOLLECTION): PNMCOLLECTION;
    static getSizePrefixedRootAsPNMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PNMCOLLECTION): PNMCOLLECTION;
    RECORDS(index: number, obj?: PNM): PNM | null;
    recordsLength(): number;
    static startPNMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPNMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNMCOLLECTIONT;
    unpackTo(_o: PNMCOLLECTIONT): void;
}
export declare class PNMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (PNMT)[];
    constructor(RECORDS?: (PNMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNMCOLLECTION.d.ts.map