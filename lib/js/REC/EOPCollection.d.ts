import * as flatbuffers from 'flatbuffers';
import { EOP, EOPT } from './EOP.js';
export declare class EOPCollection implements flatbuffers.IUnpackableObject<EOPCollectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOPCollection;
    static getRootAsEOPCollection(bb: flatbuffers.ByteBuffer, obj?: EOPCollection): EOPCollection;
    static getSizePrefixedRootAsEOPCollection(bb: flatbuffers.ByteBuffer, obj?: EOPCollection): EOPCollection;
    RECORDS(index: number, obj?: EOP): EOP | null;
    recordsLength(): number;
    static startEOPCollection(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEOPCollection(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEOPCollection(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EOPCollectionT;
    unpackTo(_o: EOPCollectionT): void;
}
export declare class EOPCollectionT implements flatbuffers.IGeneratedObject {
    RECORDS: (EOPT)[];
    constructor(RECORDS?: (EOPT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOPCollection.d.ts.map