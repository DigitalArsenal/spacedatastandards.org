import * as flatbuffers from 'flatbuffers';
import { CTR, CTRT } from './CTR.js';
export declare class CTRCOLLECTION implements flatbuffers.IUnpackableObject<CTRCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CTRCOLLECTION;
    static getRootAsCTRCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CTRCOLLECTION): CTRCOLLECTION;
    static getSizePrefixedRootAsCTRCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CTRCOLLECTION): CTRCOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: CTR): CTR | null;
    recordsLength(): number;
    static startCTRCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCTRCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCTRCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCTRCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCTRCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CTRCOLLECTIONT;
    unpackTo(_o: CTRCOLLECTIONT): void;
}
export declare class CTRCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CTRT)[];
    constructor(RECORDS?: (CTRT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CTRCOLLECTION.d.ts.map