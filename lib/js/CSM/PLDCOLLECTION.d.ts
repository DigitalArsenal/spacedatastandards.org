import * as flatbuffers from 'flatbuffers';
import { PLD, PLDT } from './PLD.js';
export declare class PLDCOLLECTION implements flatbuffers.IUnpackableObject<PLDCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLDCOLLECTION;
    static getRootAsPLDCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PLDCOLLECTION): PLDCOLLECTION;
    static getSizePrefixedRootAsPLDCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: PLDCOLLECTION): PLDCOLLECTION;
    RECORDS(index: number, obj?: PLD): PLD | null;
    recordsLength(): number;
    static startPLDCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPLDCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLDCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLDCOLLECTIONT;
    unpackTo(_o: PLDCOLLECTIONT): void;
}
export declare class PLDCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (PLDT)[];
    constructor(RECORDS?: (PLDT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLDCOLLECTION.d.ts.map