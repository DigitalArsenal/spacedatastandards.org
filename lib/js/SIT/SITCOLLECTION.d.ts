import * as flatbuffers from 'flatbuffers';
import { SIT, SITT } from './SIT.js';
/**
 * Collection of SIT records
 */
export declare class SITCOLLECTION implements flatbuffers.IUnpackableObject<SITCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITCOLLECTION;
    static getRootAsSITCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SITCOLLECTION): SITCOLLECTION;
    static getSizePrefixedRootAsSITCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SITCOLLECTION): SITCOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: SIT): SIT | null;
    recordsLength(): number;
    static startSITCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSITCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSITCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSITCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSITCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SITCOLLECTIONT;
    unpackTo(_o: SITCOLLECTIONT): void;
}
export declare class SITCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SITT)[];
    constructor(RECORDS?: (SITT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITCOLLECTION.d.ts.map