import * as flatbuffers from 'flatbuffers';
import { IDM, IDMT } from './IDM.js';
/**
 * Collection of IDM records
 */
export declare class IDMCOLLECTION implements flatbuffers.IUnpackableObject<IDMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IDMCOLLECTION;
    static getRootAsIDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: IDMCOLLECTION): IDMCOLLECTION;
    static getSizePrefixedRootAsIDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: IDMCOLLECTION): IDMCOLLECTION;
    RECORDS(index: number, obj?: IDM): IDM | null;
    recordsLength(): number;
    static startIDMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endIDMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIDMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IDMCOLLECTIONT;
    unpackTo(_o: IDMCOLLECTIONT): void;
}
export declare class IDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (IDMT)[];
    constructor(RECORDS?: (IDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IDMCOLLECTION.d.ts.map