import * as flatbuffers from 'flatbuffers';
import { BOV, BOVT } from './BOV.js';
export declare class BOVCOLLECTION implements flatbuffers.IUnpackableObject<BOVCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BOVCOLLECTION;
    static getRootAsBOVCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: BOVCOLLECTION): BOVCOLLECTION;
    static getSizePrefixedRootAsBOVCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: BOVCOLLECTION): BOVCOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: BOV): BOV | null;
    recordsLength(): number;
    static startBOVCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBOVCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBOVCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBOVCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBOVCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BOVCOLLECTIONT;
    unpackTo(_o: BOVCOLLECTIONT): void;
}
export declare class BOVCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (BOVT)[];
    constructor(RECORDS?: (BOVT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BOVCOLLECTION.d.ts.map