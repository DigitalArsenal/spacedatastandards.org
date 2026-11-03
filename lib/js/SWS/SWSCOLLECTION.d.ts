import * as flatbuffers from 'flatbuffers';
import { SWS, SWST } from './SWS.js';
export declare class SWSCOLLECTION implements flatbuffers.IUnpackableObject<SWSCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWSCOLLECTION;
    static getRootAsSWSCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SWSCOLLECTION): SWSCOLLECTION;
    static getSizePrefixedRootAsSWSCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SWSCOLLECTION): SWSCOLLECTION;
    RECORDS(index: number, obj?: SWS): SWS | null;
    recordsLength(): number;
    static startSWSCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSWSCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSWSCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SWSCOLLECTIONT;
    unpackTo(_o: SWSCOLLECTIONT): void;
}
export declare class SWSCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SWST)[];
    constructor(RECORDS?: (SWST)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWSCOLLECTION.d.ts.map