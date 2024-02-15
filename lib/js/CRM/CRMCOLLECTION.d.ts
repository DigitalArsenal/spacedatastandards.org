import * as flatbuffers from 'flatbuffers';
import { CRM, CRMT } from './CRM.js';
/**
 * Collection of CRM records
 */
export declare class CRMCOLLECTION implements flatbuffers.IUnpackableObject<CRMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CRMCOLLECTION;
    static getRootAsCRMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CRMCOLLECTION): CRMCOLLECTION;
    static getSizePrefixedRootAsCRMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: CRMCOLLECTION): CRMCOLLECTION;
    RECORDS(index: number, obj?: CRM): CRM | null;
    recordsLength(): number;
    static startCRMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCRMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCRMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CRMCOLLECTIONT;
    unpackTo(_o: CRMCOLLECTIONT): void;
}
export declare class CRMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (CRMT)[];
    constructor(RECORDS?: (CRMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CRMCOLLECTION.d.ts.map