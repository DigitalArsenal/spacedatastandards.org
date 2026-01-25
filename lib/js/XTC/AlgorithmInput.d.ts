import * as flatbuffers from 'flatbuffers';
/**
 * Algorithm input binding
 */
export declare class AlgorithmInput implements flatbuffers.IUnpackableObject<AlgorithmInputT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AlgorithmInput;
    static getRootAsAlgorithmInput(bb: flatbuffers.ByteBuffer, obj?: AlgorithmInput): AlgorithmInput;
    static getSizePrefixedRootAsAlgorithmInput(bb: flatbuffers.ByteBuffer, obj?: AlgorithmInput): AlgorithmInput;
    /**
     * Parameter reference
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Input name in algorithm
     */
    INPUT_NAME(): string | null;
    INPUT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAlgorithmInput(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addInputName(builder: flatbuffers.Builder, INPUT_NAMEOffset: flatbuffers.Offset): void;
    static endAlgorithmInput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlgorithmInput(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset, INPUT_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AlgorithmInputT;
    unpackTo(_o: AlgorithmInputT): void;
}
export declare class AlgorithmInputT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    INPUT_NAME: string | Uint8Array | null;
    constructor(PARAMETER_REF?: string | Uint8Array | null, INPUT_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AlgorithmInput.d.ts.map