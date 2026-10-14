import * as flatbuffers from 'flatbuffers';
/**
 * Recall in one delta-v bin.
 */
export declare class MDERecallBin implements flatbuffers.IUnpackableObject<MDERecallBinT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDERecallBin;
    static getRootAsMDERecallBin(bb: flatbuffers.ByteBuffer, obj?: MDERecallBin): MDERecallBin;
    static getSizePrefixedRootAsMDERecallBin(bb: flatbuffers.ByteBuffer, obj?: MDERecallBin): MDERecallBin;
    FROM_M_S(): number;
    /**
     * Upper edge, m/s; +Infinity = open.
     */
    TO_M_S(): number;
    TRUTH(): number;
    DETECTED(): number;
    /**
     * Recall, 0 to 1; NaN when TRUTH is 0.
     */
    RECALL(): number;
    /**
     * Wilson 95 % interval; NaN when TRUTH is 0.
     */
    WILSON95_LOW(): number;
    WILSON95_HIGH(): number;
    static startMDERecallBin(builder: flatbuffers.Builder): void;
    static addFromMS(builder: flatbuffers.Builder, FROM_M_S: number): void;
    static addToMS(builder: flatbuffers.Builder, TO_M_S: number): void;
    static addTruth(builder: flatbuffers.Builder, TRUTH: number): void;
    static addDetected(builder: flatbuffers.Builder, DETECTED: number): void;
    static addRecall(builder: flatbuffers.Builder, RECALL: number): void;
    static addWilson95Low(builder: flatbuffers.Builder, WILSON95_LOW: number): void;
    static addWilson95High(builder: flatbuffers.Builder, WILSON95_HIGH: number): void;
    static endMDERecallBin(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDERecallBin(builder: flatbuffers.Builder, FROM_M_S: number, TO_M_S: number, TRUTH: number, DETECTED: number, RECALL: number, WILSON95_LOW: number, WILSON95_HIGH: number): flatbuffers.Offset;
    unpack(): MDERecallBinT;
    unpackTo(_o: MDERecallBinT): void;
}
export declare class MDERecallBinT implements flatbuffers.IGeneratedObject {
    FROM_M_S: number;
    TO_M_S: number;
    TRUTH: number;
    DETECTED: number;
    RECALL: number;
    WILSON95_LOW: number;
    WILSON95_HIGH: number;
    constructor(FROM_M_S?: number, TO_M_S?: number, TRUTH?: number, DETECTED?: number, RECALL?: number, WILSON95_LOW?: number, WILSON95_HIGH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDERecallBin.d.ts.map