import * as flatbuffers from 'flatbuffers';
import { SRO, SROT } from './SRO.js';
export declare class SROCOLLECTION implements flatbuffers.IUnpackableObject<SROCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SROCOLLECTION;
    static getRootAsSROCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SROCOLLECTION): SROCOLLECTION;
    static getSizePrefixedRootAsSROCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SROCOLLECTION): SROCOLLECTION;
    RECORDS(index: number, obj?: SRO): SRO | null;
    recordsLength(): number;
    static startSROCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSROCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSROCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SROCOLLECTIONT;
    unpackTo(_o: SROCOLLECTIONT): void;
}
export declare class SROCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SROT)[];
    constructor(RECORDS?: (SROT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SROCOLLECTION.d.ts.map