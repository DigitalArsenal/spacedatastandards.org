import * as flatbuffers from 'flatbuffers';
import { HYP, HYPT } from './HYP.js';
/**
 * Collection of HYP records
 */
export declare class HYPCOLLECTION implements flatbuffers.IUnpackableObject<HYPCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HYPCOLLECTION;
    static getRootAsHYPCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: HYPCOLLECTION): HYPCOLLECTION;
    static getSizePrefixedRootAsHYPCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: HYPCOLLECTION): HYPCOLLECTION;
    RECORDS(index: number, obj?: HYP): HYP | null;
    recordsLength(): number;
    static startHYPCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endHYPCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createHYPCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): HYPCOLLECTIONT;
    unpackTo(_o: HYPCOLLECTIONT): void;
}
export declare class HYPCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (HYPT)[];
    constructor(RECORDS?: (HYPT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=HYPCOLLECTION.d.ts.map