import * as flatbuffers from 'flatbuffers';
/**
 * Array dimension specification
 */
export declare class ArrayDimension implements flatbuffers.IUnpackableObject<ArrayDimensionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArrayDimension;
    static getRootAsArrayDimension(bb: flatbuffers.ByteBuffer, obj?: ArrayDimension): ArrayDimension;
    static getSizePrefixedRootAsArrayDimension(bb: flatbuffers.ByteBuffer, obj?: ArrayDimension): ArrayDimension;
    /**
     * Fixed size of this dimension
     */
    SIZE(): number;
    /**
     * Dynamic size from parameter reference
     */
    SIZE_PARAMETER_REF(): string | null;
    SIZE_PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startArrayDimension(builder: flatbuffers.Builder): void;
    static addSize(builder: flatbuffers.Builder, SIZE: number): void;
    static addSizeParameterRef(builder: flatbuffers.Builder, SIZE_PARAMETER_REFOffset: flatbuffers.Offset): void;
    static endArrayDimension(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createArrayDimension(builder: flatbuffers.Builder, SIZE: number, SIZE_PARAMETER_REFOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ArrayDimensionT;
    unpackTo(_o: ArrayDimensionT): void;
}
export declare class ArrayDimensionT implements flatbuffers.IGeneratedObject {
    SIZE: number;
    SIZE_PARAMETER_REF: string | Uint8Array | null;
    constructor(SIZE?: number, SIZE_PARAMETER_REF?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArrayDimension.d.ts.map