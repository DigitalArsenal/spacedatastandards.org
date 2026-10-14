import * as flatbuffers from 'flatbuffers';
/**
 * A run of coarse steps of the screening window.
 */
export declare class SCRBlock implements flatbuffers.IUnpackableObject<SCRBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRBlock;
    static getRootAsSCRBlock(bb: flatbuffers.ByteBuffer, obj?: SCRBlock): SCRBlock;
    static getSizePrefixedRootAsSCRBlock(bb: flatbuffers.ByteBuffer, obj?: SCRBlock): SCRBlock;
    /**
     * Absolute index of the first coarse step; step k is at the window start
     * plus k coarse steps.
     */
    FIRST_STEP(): number;
    /**
     * Number of steps.
     */
    STEP_COUNT(): number;
    static startSCRBlock(builder: flatbuffers.Builder): void;
    static addFirstStep(builder: flatbuffers.Builder, FIRST_STEP: number): void;
    static addStepCount(builder: flatbuffers.Builder, STEP_COUNT: number): void;
    static endSCRBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRBlock(builder: flatbuffers.Builder, FIRST_STEP: number, STEP_COUNT: number): flatbuffers.Offset;
    unpack(): SCRBlockT;
    unpackTo(_o: SCRBlockT): void;
}
export declare class SCRBlockT implements flatbuffers.IGeneratedObject {
    FIRST_STEP: number;
    STEP_COUNT: number;
    constructor(FIRST_STEP?: number, STEP_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRBlock.d.ts.map