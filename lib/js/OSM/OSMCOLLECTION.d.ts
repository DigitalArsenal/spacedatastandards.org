import * as flatbuffers from 'flatbuffers';
import { OSM, OSMT } from './OSM.js';
export declare class OSMCOLLECTION implements flatbuffers.IUnpackableObject<OSMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OSMCOLLECTION;
    static getRootAsOSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OSMCOLLECTION): OSMCOLLECTION;
    static getSizePrefixedRootAsOSMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: OSMCOLLECTION): OSMCOLLECTION;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RECORDS(index: number, obj?: OSM): OSM | null;
    recordsLength(): number;
    static startOSMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOSMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOSMCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOSMCOLLECTIONBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOSMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OSMCOLLECTIONT;
    unpackTo(_o: OSMCOLLECTIONT): void;
}
export declare class OSMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (OSMT)[];
    constructor(RECORDS?: (OSMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OSMCOLLECTION.d.ts.map