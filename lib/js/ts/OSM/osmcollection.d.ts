import * as flatbuffers from 'flatbuffers';
import { OSM, OSMT } from './osm.js';
export declare class OSMCOLLECTION implements flatbuffers.IUnpackableObject<OSMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OSMCOLLECTION;
    static getRootAsOSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OSMCOLLECTION): OSMCOLLECTION;
    static getSizePrefixedRootAsOSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OSMCOLLECTION): OSMCOLLECTION;
    records(index: number, obj?: OSM): OSM | null;
    recordsLength(): number;
    static startOSMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOSMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOSMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OSMCOLLECTIONT;
    unpackTo(_o: OSMCOLLECTIONT): void;
}
export declare class OSMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (OSMT)[];
    constructor(records?: (OSMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=osmcollection.d.ts.map