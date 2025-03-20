import * as flatbuffers from 'flatbuffers';
import { OEM, OEMT } from './OEM.js';
/**
 * Collection of OEM messages
 */
export declare class OEMCOLLECTION implements flatbuffers.IUnpackableObject<OEMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OEMCOLLECTION;
    static getRootAsOEMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OEMCOLLECTION): OEMCOLLECTION;
    static getSizePrefixedRootAsOEMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OEMCOLLECTION): OEMCOLLECTION;
    RECORDS(index: number, obj?: OEM): OEM | null;
    recordsLength(): number;
    static startOEMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOEMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOEMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OEMCOLLECTIONT;
    unpackTo(_o: OEMCOLLECTIONT): void;
}
export declare class OEMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (OEMT)[];
    constructor(RECORDS?: (OEMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OEMCOLLECTION.d.ts.map