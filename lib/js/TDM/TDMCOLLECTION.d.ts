import * as flatbuffers from 'flatbuffers';
import { TDM, TDMT } from './TDM.js';
/**
 * Collection of TDM records
 */
export declare class TDMCOLLECTION implements flatbuffers.IUnpackableObject<TDMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TDMCOLLECTION;
    static getRootAsTDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TDMCOLLECTION): TDMCOLLECTION;
    static getSizePrefixedRootAsTDMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TDMCOLLECTION): TDMCOLLECTION;
    RECORDS(index: number, obj?: TDM): TDM | null;
    recordsLength(): number;
    static startTDMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTDMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTDMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TDMCOLLECTIONT;
    unpackTo(_o: TDMCOLLECTIONT): void;
}
export declare class TDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (TDMT)[];
    constructor(RECORDS?: (TDMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TDMCOLLECTION.d.ts.map