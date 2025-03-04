import * as flatbuffers from 'flatbuffers';
import { VCM, VCMT } from './vcm.js';
/**
 * Collection of VCM records
 */
export declare class VCM_COLLECTION implements flatbuffers.IUnpackableObject<VCM_COLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCM_COLLECTION;
    static getRootAsVCM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: VCM_COLLECTION): VCM_COLLECTION;
    static getSizePrefixedRootAsVCM_COLLECTION(bb: flatbuffers.ByteBuffer, obj?: VCM_COLLECTION): VCM_COLLECTION;
    records(index: number, obj?: VCM): VCM | null;
    recordsLength(): number;
    static startVCM_COLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endVCM_COLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCM_COLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VCM_COLLECTIONT;
    unpackTo(_o: VCM_COLLECTIONT): void;
}
export declare class VCM_COLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (VCMT)[];
    constructor(records?: (VCMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=vcm-collection.d.ts.map