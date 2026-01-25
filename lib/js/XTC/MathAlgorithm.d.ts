import * as flatbuffers from 'flatbuffers';
import { AlgorithmTrigger, AlgorithmTriggerT } from './AlgorithmTrigger.js';
/**
 * Math algorithm (inline calculation)
 */
export declare class MathAlgorithm implements flatbuffers.IUnpackableObject<MathAlgorithmT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MathAlgorithm;
    static getRootAsMathAlgorithm(bb: flatbuffers.ByteBuffer, obj?: MathAlgorithm): MathAlgorithm;
    static getSizePrefixedRootAsMathAlgorithm(bb: flatbuffers.ByteBuffer, obj?: MathAlgorithm): MathAlgorithm;
    /**
     * Algorithm name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Math operation in RPN
     */
    MATH_OPERATION(): string | null;
    MATH_OPERATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Output parameter reference
     */
    OUTPUT_PARAMETER_REF(): string | null;
    OUTPUT_PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trigger conditions
     */
    TRIGGERS(index: number, obj?: AlgorithmTrigger): AlgorithmTrigger | null;
    triggersLength(): number;
    static startMathAlgorithm(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addMathOperation(builder: flatbuffers.Builder, MATH_OPERATIONOffset: flatbuffers.Offset): void;
    static addOutputParameterRef(builder: flatbuffers.Builder, OUTPUT_PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addTriggers(builder: flatbuffers.Builder, TRIGGERSOffset: flatbuffers.Offset): void;
    static createTriggersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTriggersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMathAlgorithm(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMathAlgorithm(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, MATH_OPERATIONOffset: flatbuffers.Offset, OUTPUT_PARAMETER_REFOffset: flatbuffers.Offset, TRIGGERSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MathAlgorithmT;
    unpackTo(_o: MathAlgorithmT): void;
}
export declare class MathAlgorithmT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    MATH_OPERATION: string | Uint8Array | null;
    OUTPUT_PARAMETER_REF: string | Uint8Array | null;
    TRIGGERS: (AlgorithmTriggerT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, MATH_OPERATION?: string | Uint8Array | null, OUTPUT_PARAMETER_REF?: string | Uint8Array | null, TRIGGERS?: (AlgorithmTriggerT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MathAlgorithm.d.ts.map