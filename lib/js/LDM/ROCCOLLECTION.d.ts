import * as flatbuffers from 'flatbuffers';
import { ROC, ROCT } from './ROC.js';
/**
 * Collection of Rocket Configurations
 */
export declare class ROCCOLLECTION implements flatbuffers.IUnpackableObject<ROCCOLLECTIONT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ROCCOLLECTION;
    static getRootAsROCCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: ROCCOLLECTION): ROCCOLLECTION;
    static getSizePrefixedRootAsROCCOLLECTION(bb: flatbuffers.ByteBuffer, obj?: ROCCOLLECTION): ROCCOLLECTION;
    /**
     * Records of Rocket Configurations
     */
    RECORDS(index: number, obj?: ROC): ROC | null;
    recordsLength(): number;
    static startROCCOLLECTION(builder: flatbuffers.Builder): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endROCCOLLECTION(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createROCCOLLECTION(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ROCCOLLECTIONT;
    unpackTo(_o: ROCCOLLECTIONT): void;
}
export declare class ROCCOLLECTIONT implements flatbuffers.IGeneratedObject {
    RECORDS: (ROCT)[];
    constructor(RECORDS?: (ROCT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ROCCOLLECTION.d.ts.map