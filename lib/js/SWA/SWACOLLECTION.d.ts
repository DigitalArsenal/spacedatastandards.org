import * as flatbuffers from 'flatbuffers';
import { SWA, SWAT } from './SWA.js';
export declare class SWACOLLECTION implements flatbuffers.IUnpackableObject<SWACOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWACOLLECTION;
    static getRootAsSWACOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SWACOLLECTION): SWACOLLECTION;
    static getSizePrefixedRootAsSWACOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SWACOLLECTION): SWACOLLECTION;
    RECORDS(index: number, obj?: SWA): SWA | null;
    recordsLength(): number;
    static startSWACOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSWACOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSWACOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SWACOLLECTIONT;
    unpackTo(_o: SWACOLLECTIONT): void;
}
export declare class SWACOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SWAT)[];
    constructor(RECORDS?: (SWAT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWACOLLECTION.d.ts.map