import * as flatbuffers from 'flatbuffers';
import { TIM, TIMT } from './TIM.js';
export declare class TIMCOLLECTION implements flatbuffers.IUnpackableObject<TIMCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMCOLLECTION;
    static getRootAsTIMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TIMCOLLECTION): TIMCOLLECTION;
    static getSizePrefixedRootAsTIMCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: TIMCOLLECTION): TIMCOLLECTION;
    RECORDS(index: number, obj?: TIM): TIM | null;
    recordsLength(): number;
    static startTIMCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTIMCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTIMCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TIMCOLLECTIONT;
    unpackTo(_o: TIMCOLLECTIONT): void;
}
export declare class TIMCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (TIMT)[];
    constructor(RECORDS?: (TIMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIMCOLLECTION.d.ts.map