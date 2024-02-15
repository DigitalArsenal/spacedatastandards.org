import * as flatbuffers from 'flatbuffers';
import { PNM, PNMT } from './PNM.js';
/**
 * Collection of Publish Notification Messages
 * This table groups multiple PNM records for batch processing and management.
 */
export declare class PNM_COLLECTION implements flatbuffers.IUnpackableObject<PNM_COLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM_COLLECTION;
    static getRootAsPNM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: PNM_COLLECTION): PNM_COLLECTION;
    static getSizePrefixedRootAsPNM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: PNM_COLLECTION): PNM_COLLECTION;
    RECORDS(index: number, obj?: PNM): PNM | null;
    recordsLength(): number;
    static startPNM_COLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPNM_COLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNM_COLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNM_COLLECTIONT;
    unpackTo(_o: PNM_COLLECTIONT): void;
}
export declare class PNM_COLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (PNMT)[];
    constructor(RECORDS?: (PNMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM_COLLECTION.d.ts.map