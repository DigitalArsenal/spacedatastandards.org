import * as flatbuffers from 'flatbuffers';
/**
 * Algorithm output binding
 */
export declare class AlgorithmOutput implements flatbuffers.IUnpackableObject<AlgorithmOutputT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AlgorithmOutput;
    static getRootAsAlgorithmOutput(bb: flatbuffers.ByteBuffer, obj?: AlgorithmOutput): AlgorithmOutput;
    static getSizePrefixedRootAsAlgorithmOutput(bb: flatbuffers.ByteBuffer, obj?: AlgorithmOutput): AlgorithmOutput;
    /**
     * Parameter reference
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Output name in algorithm
     */
    OUTPUT_NAME(): string | null;
    OUTPUT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAlgorithmOutput(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addOutputName(builder: flatbuffers.Builder, OUTPUT_NAMEOffset: flatbuffers.Offset): void;
    static endAlgorithmOutput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlgorithmOutput(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset, OUTPUT_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AlgorithmOutputT;
    unpackTo(_o: AlgorithmOutputT): void;
}
export declare class AlgorithmOutputT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    OUTPUT_NAME: string | Uint8Array | null;
    constructor(PARAMETER_REF?: string | Uint8Array | null, OUTPUT_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AlgorithmOutput.d.ts.map