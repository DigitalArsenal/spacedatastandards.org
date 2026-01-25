import * as flatbuffers from 'flatbuffers';
import { ArrayDimension, ArrayDimensionT } from './ArrayDimension.js';
/**
 * Array parameter type
 */
export declare class ArrayParameterType implements flatbuffers.IUnpackableObject<ArrayParameterTypeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArrayParameterType;
    static getRootAsArrayParameterType(bb: flatbuffers.ByteBuffer, obj?: ArrayParameterType): ArrayParameterType;
    static getSizePrefixedRootAsArrayParameterType(bb: flatbuffers.ByteBuffer, obj?: ArrayParameterType): ArrayParameterType;
    /**
     * Type name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to the array element type
     */
    ARRAY_TYPE_REF(): string | null;
    ARRAY_TYPE_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dimension list
     */
    DIMENSIONS(index: number, obj?: ArrayDimension): ArrayDimension | null;
    dimensionsLength(): number;
    static startArrayParameterType(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addArrayTypeRef(builder: flatbuffers.Builder, ARRAY_TYPE_REFOffset: flatbuffers.Offset): void;
    static addDimensions(builder: flatbuffers.Builder, DIMENSIONSOffset: flatbuffers.Offset): void;
    static createDimensionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDimensionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endArrayParameterType(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createArrayParameterType(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, LONG_DESCRIPTIONOffset: flatbuffers.Offset, ARRAY_TYPE_REFOffset: flatbuffers.Offset, DIMENSIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ArrayParameterTypeT;
    unpackTo(_o: ArrayParameterTypeT): void;
}
export declare class ArrayParameterTypeT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    ARRAY_TYPE_REF: string | Uint8Array | null;
    DIMENSIONS: (ArrayDimensionT)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, ARRAY_TYPE_REF?: string | Uint8Array | null, DIMENSIONS?: (ArrayDimensionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArrayParameterType.d.ts.map