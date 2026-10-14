import * as flatbuffers from 'flatbuffers';
/**
 * One iteration of a decay calibration.
 */
export declare class dclIteration implements flatbuffers.IUnpackableObject<dclIterationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclIteration;
    static getRootAsdclIteration(bb: flatbuffers.ByteBuffer, obj?: dclIteration): dclIteration;
    static getSizePrefixedRootAsdclIteration(bb: flatbuffers.ByteBuffer, obj?: dclIteration): dclIteration;
    ITERATION(): number;
    CHI_SQUARE(): number;
    OBSERVATIONS(): number;
    /**
     * Largest step in the correction (K), in any ln B, and in any chain offset
     * (m).
     */
    MAX_STEP_K(): number;
    MAX_STEP_LN_B(): number;
    MAX_STEP_OFFSET_M(): number;
    static startdclIteration(builder: flatbuffers.Builder): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static addChiSquare(builder: flatbuffers.Builder, CHI_SQUARE: number): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONS: number): void;
    static addMaxStepK(builder: flatbuffers.Builder, MAX_STEP_K: number): void;
    static addMaxStepLnB(builder: flatbuffers.Builder, MAX_STEP_LN_B: number): void;
    static addMaxStepOffsetM(builder: flatbuffers.Builder, MAX_STEP_OFFSET_M: number): void;
    static enddclIteration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclIteration(builder: flatbuffers.Builder, ITERATION: number, CHI_SQUARE: number, OBSERVATIONS: number, MAX_STEP_K: number, MAX_STEP_LN_B: number, MAX_STEP_OFFSET_M: number): flatbuffers.Offset;
    unpack(): dclIterationT;
    unpackTo(_o: dclIterationT): void;
}
export declare class dclIterationT implements flatbuffers.IGeneratedObject {
    ITERATION: number;
    CHI_SQUARE: number;
    OBSERVATIONS: number;
    MAX_STEP_K: number;
    MAX_STEP_LN_B: number;
    MAX_STEP_OFFSET_M: number;
    constructor(ITERATION?: number, CHI_SQUARE?: number, OBSERVATIONS?: number, MAX_STEP_K?: number, MAX_STEP_LN_B?: number, MAX_STEP_OFFSET_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclIteration.d.ts.map