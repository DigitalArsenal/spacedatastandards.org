import * as flatbuffers from 'flatbuffers';
import { REC, RECT } from './REC.js';
export declare class RECCOLLECTION implements flatbuffers.IUnpackableObject<RECCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RECCOLLECTION;
    static getRootAsRECCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: RECCOLLECTION): RECCOLLECTION;
    static getSizePrefixedRootAsRECCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: RECCOLLECTION): RECCOLLECTION;
    RECORDS(index: number, obj?: REC): REC | null;
    recordsLength(): number;
    static startRECCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRECCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRECCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RECCOLLECTIONT;
    unpackTo(_o: RECCOLLECTIONT): void;
}
export declare class RECCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (RECT)[];
    constructor(RECORDS?: (RECT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RECCOLLECTION.d.ts.map