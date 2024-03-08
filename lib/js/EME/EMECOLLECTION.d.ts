import * as flatbuffers from 'flatbuffers';
import { EME, EMET } from './EME.js';
/**
 * Collection of Encrypted Message Envelopes
 */
export declare class EMECOLLECTION implements flatbuffers.IUnpackableObject<EMECOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EMECOLLECTION;
    static getRootAsEMECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EMECOLLECTION): EMECOLLECTION;
    static getSizePrefixedRootAsEMECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: EMECOLLECTION): EMECOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: EME): EME | null;
    recordsLength(): number;
    static startEMECOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEMECOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEMECOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEMECOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEMECOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EMECOLLECTIONT;
    unpackTo(_o: EMECOLLECTIONT): void;
}
export declare class EMECOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (EMET)[];
    constructor(RECORDS?: (EMET)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EMECOLLECTION.d.ts.map