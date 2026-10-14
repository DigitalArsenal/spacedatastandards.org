import * as flatbuffers from 'flatbuffers';
/**
 * Miss distance and closest-approach time ranges at one alpha level.
 */
export declare class SCRAlphaCut implements flatbuffers.IUnpackableObject<SCRAlphaCutT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRAlphaCut;
    static getRootAsSCRAlphaCut(bb: flatbuffers.ByteBuffer, obj?: SCRAlphaCut): SCRAlphaCut;
    static getSizePrefixedRootAsSCRAlphaCut(bb: flatbuffers.ByteBuffer, obj?: SCRAlphaCut): SCRAlphaCut;
    ALPHA(): number;
    /**
     * Smallest and largest miss distance of the cut, m.
     */
    MIN_MISS_M(): number;
    MAX_MISS_M(): number;
    /**
     * Earliest and latest closest approach, s from the common epoch.
     */
    TCA_MIN_S(): number;
    TCA_MAX_S(): number;
    static startSCRAlphaCut(builder: flatbuffers.Builder): void;
    static addAlpha(builder: flatbuffers.Builder, ALPHA: number): void;
    static addMinMissM(builder: flatbuffers.Builder, MIN_MISS_M: number): void;
    static addMaxMissM(builder: flatbuffers.Builder, MAX_MISS_M: number): void;
    static addTcaMinS(builder: flatbuffers.Builder, TCA_MIN_S: number): void;
    static addTcaMaxS(builder: flatbuffers.Builder, TCA_MAX_S: number): void;
    static endSCRAlphaCut(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRAlphaCut(builder: flatbuffers.Builder, ALPHA: number, MIN_MISS_M: number, MAX_MISS_M: number, TCA_MIN_S: number, TCA_MAX_S: number): flatbuffers.Offset;
    unpack(): SCRAlphaCutT;
    unpackTo(_o: SCRAlphaCutT): void;
}
export declare class SCRAlphaCutT implements flatbuffers.IGeneratedObject {
    ALPHA: number;
    MIN_MISS_M: number;
    MAX_MISS_M: number;
    TCA_MIN_S: number;
    TCA_MAX_S: number;
    constructor(ALPHA?: number, MIN_MISS_M?: number, MAX_MISS_M?: number, TCA_MIN_S?: number, TCA_MAX_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRAlphaCut.d.ts.map