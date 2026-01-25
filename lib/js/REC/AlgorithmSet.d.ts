import * as flatbuffers from 'flatbuffers';
import { CustomAlgorithm, CustomAlgorithmT } from './CustomAlgorithm.js';
import { MathAlgorithm, MathAlgorithmT } from './MathAlgorithm.js';
/**
 * Collection of algorithms
 */
export declare class AlgorithmSet implements flatbuffers.IUnpackableObject<AlgorithmSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AlgorithmSet;
    static getRootAsAlgorithmSet(bb: flatbuffers.ByteBuffer, obj?: AlgorithmSet): AlgorithmSet;
    static getSizePrefixedRootAsAlgorithmSet(bb: flatbuffers.ByteBuffer, obj?: AlgorithmSet): AlgorithmSet;
    /**
     * Custom algorithms
     */
    CUSTOM_ALGORITHMS(index: number, obj?: CustomAlgorithm): CustomAlgorithm | null;
    customAlgorithmsLength(): number;
    /**
     * Math algorithms
     */
    MATH_ALGORITHMS(index: number, obj?: MathAlgorithm): MathAlgorithm | null;
    mathAlgorithmsLength(): number;
    static startAlgorithmSet(builder: flatbuffers.Builder): void;
    static addCustomAlgorithms(builder: flatbuffers.Builder, CUSTOM_ALGORITHMSOffset: flatbuffers.Offset): void;
    static createCustomAlgorithmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCustomAlgorithmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMathAlgorithms(builder: flatbuffers.Builder, MATH_ALGORITHMSOffset: flatbuffers.Offset): void;
    static createMathAlgorithmsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMathAlgorithmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAlgorithmSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlgorithmSet(builder: flatbuffers.Builder, CUSTOM_ALGORITHMSOffset: flatbuffers.Offset, MATH_ALGORITHMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AlgorithmSetT;
    unpackTo(_o: AlgorithmSetT): void;
}
export declare class AlgorithmSetT implements flatbuffers.IGeneratedObject {
    CUSTOM_ALGORITHMS: (CustomAlgorithmT)[];
    MATH_ALGORITHMS: (MathAlgorithmT)[];
    constructor(CUSTOM_ALGORITHMS?: (CustomAlgorithmT)[], MATH_ALGORITHMS?: (MathAlgorithmT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AlgorithmSet.d.ts.map