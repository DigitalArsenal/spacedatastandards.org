import * as flatbuffers from 'flatbuffers';
import { CRM, CRMT } from './crm.js';
export declare class CRMCOLLECTION implements flatbuffers.IUnpackableObject<CRMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CRMCOLLECTION;
    static getRootAsCRMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CRMCOLLECTION): CRMCOLLECTION;
    static getSizePrefixedRootAsCRMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CRMCOLLECTION): CRMCOLLECTION;
    records(index: number, obj?: CRM): CRM | null;
    recordsLength(): number;
    static startCRMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCRMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCRMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CRMCOLLECTIONT;
    unpackTo(_o: CRMCOLLECTIONT): void;
}
export declare class CRMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (CRMT)[];
    constructor(records?: (CRMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=crmcollection.d.ts.map