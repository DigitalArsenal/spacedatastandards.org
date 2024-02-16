import * as flatbuffers from 'flatbuffers';
import { EOP, EOPT } from './EOP.js';
/**
 * Collection of EOP records
 */
export declare class EOPCOLLECTION implements flatbuffers.IUnpackableObject<EOPCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOPCOLLECTION;
    static getRootAsEOPCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EOPCOLLECTION): EOPCOLLECTION;
    static getSizePrefixedRootAsEOPCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EOPCOLLECTION): EOPCOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: EOP): EOP | null;
    recordsLength(): number;
    static startEOPCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEOPCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOPCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOPCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOPCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EOPCOLLECTIONT;
    unpackTo(_o: EOPCOLLECTIONT): void;
}
export declare class EOPCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (EOPT)[];
    constructor(RECORDS?: (EOPT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOPCOLLECTION.d.ts.map