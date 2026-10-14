import * as flatbuffers from 'flatbuffers';
/**
 * Coverage gate of a realism test.
 */
export declare class ERMGate implements flatbuffers.IUnpackableObject<ERMGateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMGate;
    static getRootAsERMGate(bb: flatbuffers.ByteBuffer, obj?: ERMGate): ERMGate;
    static getSizePrefixedRootAsERMGate(bb: flatbuffers.ByteBuffer, obj?: ERMGate): ERMGate;
    /**
     * Allowed departure of each coverage fraction from nominal.
     */
    TOLERANCE(): number;
    /**
     * Allowed excess in the 3-sigma tail.
     */
    TAIL_LIMIT(): number;
    MINIMUM_SAMPLES(): number;
    MINIMUM_OBJECTS(): number;
    /**
     * The rule, human-readable.
     */
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Nominal 1, 2, 3 sigma coverage of chi-square with 3 degrees of freedom
     * (3 values).
     */
    NOMINAL(index: number): number | null;
    nominalLength(): number;
    nominalArray(): Float64Array | null;
    static startERMGate(builder: flatbuffers.Builder): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addTailLimit(builder: flatbuffers.Builder, TAIL_LIMIT: number): void;
    static addMinimumSamples(builder: flatbuffers.Builder, MINIMUM_SAMPLES: number): void;
    static addMinimumObjects(builder: flatbuffers.Builder, MINIMUM_OBJECTS: number): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addNominal(builder: flatbuffers.Builder, NOMINALOffset: flatbuffers.Offset): void;
    static createNominalVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNominalVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNominalVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMGate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMGate(builder: flatbuffers.Builder, TOLERANCE: number, TAIL_LIMIT: number, MINIMUM_SAMPLES: number, MINIMUM_OBJECTS: number, RULEOffset: flatbuffers.Offset, NOMINALOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMGateT;
    unpackTo(_o: ERMGateT): void;
}
export declare class ERMGateT implements flatbuffers.IGeneratedObject {
    TOLERANCE: number;
    TAIL_LIMIT: number;
    MINIMUM_SAMPLES: number;
    MINIMUM_OBJECTS: number;
    RULE: string | Uint8Array | null;
    NOMINAL: (number)[];
    constructor(TOLERANCE?: number, TAIL_LIMIT?: number, MINIMUM_SAMPLES?: number, MINIMUM_OBJECTS?: number, RULE?: string | Uint8Array | null, NOMINAL?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMGate.d.ts.map