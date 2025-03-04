import * as flatbuffers from 'flatbuffers';
import { MPE, MPET } from './mpe.js';
export declare class MPECOLLECTION implements flatbuffers.IUnpackableObject<MPECOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPECOLLECTION;
    static getRootAsMPECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: MPECOLLECTION): MPECOLLECTION;
    static getSizePrefixedRootAsMPECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: MPECOLLECTION): MPECOLLECTION;
    records(index: number, obj?: MPE): MPE | null;
    recordsLength(): number;
    static startMPECOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMPECOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMPECOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MPECOLLECTIONT;
    unpackTo(_o: MPECOLLECTIONT): void;
}
export declare class MPECOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (MPET)[];
    constructor(records?: (MPET)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mpecollection.d.ts.map