import * as flatbuffers from 'flatbuffers';
/**
 * One step of a course of action.
 */
export declare class COAStep implements flatbuffers.IUnpackableObject<COAStepT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COAStep;
    static getRootAsCOAStep(bb: flatbuffers.ByteBuffer, obj?: COAStep): COAStep;
    static getSizePrefixedRootAsCOAStep(bb: flatbuffers.ByteBuffer, obj?: COAStep): COAStep;
    /**
     * The step, in the operator's words.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * How long the step takes, s.
     */
    DURATION_SECONDS(): number;
    static startCOAStep(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDurationSeconds(builder: flatbuffers.Builder, DURATION_SECONDS: number): void;
    static endCOAStep(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCOAStep(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DURATION_SECONDS: number): flatbuffers.Offset;
    unpack(): COAStepT;
    unpackTo(_o: COAStepT): void;
}
export declare class COAStepT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DURATION_SECONDS: number;
    constructor(NAME?: string | Uint8Array | null, DURATION_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COAStep.d.ts.map