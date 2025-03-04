import * as flatbuffers from 'flatbuffers';
import { TIM, TIMT } from './tim.js';
export declare class TIMCOLLECTION implements flatbuffers.IUnpackableObject<TIMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMCOLLECTION;
    static getRootAsTIMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TIMCOLLECTION): TIMCOLLECTION;
    static getSizePrefixedRootAsTIMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TIMCOLLECTION): TIMCOLLECTION;
    records(index: number, obj?: TIM): TIM | null;
    recordsLength(): number;
    static startTIMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTIMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTIMCOLLECTION(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TIMCOLLECTIONT;
    unpackTo(_o: TIMCOLLECTIONT): void;
}
export declare class TIMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    records: (TIMT)[];
    constructor(records?: (TIMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=timcollection.d.ts.map