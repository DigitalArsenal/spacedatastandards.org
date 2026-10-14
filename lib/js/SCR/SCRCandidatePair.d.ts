import * as flatbuffers from 'flatbuffers';
/**
 * A pair and coarse step that survived the coarse filter.
 */
export declare class SCRCandidatePair implements flatbuffers.IUnpackableObject<SCRCandidatePairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRCandidatePair;
    /**
     * Index of the first object (lower index).
     */
    OBJECT1(): number;
    /**
     * Index of the second object.
     */
    OBJECT2(): number;
    /**
     * Absolute coarse step.
     */
    STEP(): number;
    static sizeOf(): number;
    static createSCRCandidatePair(builder: flatbuffers.Builder, OBJECT1: number, OBJECT2: number, STEP: number): flatbuffers.Offset;
    unpack(): SCRCandidatePairT;
    unpackTo(_o: SCRCandidatePairT): void;
}
export declare class SCRCandidatePairT implements flatbuffers.IGeneratedObject {
    OBJECT1: number;
    OBJECT2: number;
    STEP: number;
    constructor(OBJECT1?: number, OBJECT2?: number, STEP?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRCandidatePair.d.ts.map