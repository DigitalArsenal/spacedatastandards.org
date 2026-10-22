import * as flatbuffers from 'flatbuffers';
import { SFE, SFET } from './SFE.js';
export declare class SFECOLLECTION implements flatbuffers.IUnpackableObject<SFECOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SFECOLLECTION;
    static getRootAsSFECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SFECOLLECTION): SFECOLLECTION;
    static getSizePrefixedRootAsSFECOLLECTION(bb: flatbuffers.ByteBuffer, obj?: SFECOLLECTION): SFECOLLECTION;
    RECORDS(index: number, obj?: SFE): SFE | null;
    recordsLength(): number;
    static startSFECOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSFECOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSFECOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SFECOLLECTIONT;
    unpackTo(_o: SFECOLLECTIONT): void;
}
export declare class SFECOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (SFET)[];
    constructor(RECORDS?: (SFET)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SFECOLLECTION.d.ts.map