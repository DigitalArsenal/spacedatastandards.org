import * as flatbuffers from 'flatbuffers';
import { OPM, OPMT } from './OPM.js';
/**
 * Collection of OPM records
 */
export declare class OPM_COLLECTION implements flatbuffers.IUnpackableObject<OPM_COLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPM_COLLECTION;
    static getRootAsOPM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: OPM_COLLECTION): OPM_COLLECTION;
    static getSizePrefixedRootAsOPM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: OPM_COLLECTION): OPM_COLLECTION;
    RECORDS(index: number, obj?: OPM): OPM | null;
    recordsLength(): number;
    static startOPM_COLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOPM_COLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOPM_COLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OPM_COLLECTIONT;
    unpackTo(_o: OPM_COLLECTIONT): void;
}
export declare class OPM_COLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (OPMT)[];
    constructor(RECORDS?: (OPMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPM_COLLECTION.d.ts.map