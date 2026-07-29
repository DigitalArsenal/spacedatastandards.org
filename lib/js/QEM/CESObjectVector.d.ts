import * as flatbuffers from 'flatbuffers';
/**
 * One catalog object's dense embedding row.
 */
export declare class CESObjectVector implements flatbuffers.IUnpackableObject<CESObjectVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CESObjectVector;
    static getRootAsCESObjectVector(bb: flatbuffers.ByteBuffer, obj?: CESObjectVector): CESObjectVector;
    static getSizePrefixedRootAsCESObjectVector(bb: flatbuffers.ByteBuffer, obj?: CESObjectVector): CESObjectVector;
    /**
     * Joins to CAT.NORAD_CAT_ID / OMM.NORAD_CAT_ID. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator. Joins to CAT.OBJECT_ID.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Row values when the parent CES.ENCODING is INT8. Length equals
     * CES.DIMENSIONS.
     */
    VECTOR_INT8(index: number): number | null;
    vectorInt8Length(): number;
    vectorInt8Array(): Int8Array | null;
    /**
     * Per-row dequantization scale: original value ~= VECTOR_INT8[i] * SCALE.
     * Unused when ENCODING is FLOAT32.
     */
    SCALE(): number;
    /**
     * Row values when the parent CES.ENCODING is FLOAT32. Length equals
     * CES.DIMENSIONS.
     */
    VECTOR_FLOAT32(index: number): number | null;
    vectorFloat32Length(): number;
    vectorFloat32Array(): Float32Array | null;
    static startCESObjectVector(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addVectorInt8(builder: flatbuffers.Builder, VECTOR_INT8Offset: flatbuffers.Offset): void;
    static createVectorInt8Vector(builder: flatbuffers.Builder, data: number[] | Int8Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVectorInt8Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVectorInt8Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addVectorFloat32(builder: flatbuffers.Builder, VECTOR_FLOAT32Offset: flatbuffers.Offset): void;
    static createVectorFloat32Vector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVectorFloat32Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVectorFloat32Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endCESObjectVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCESObjectVector(builder: flatbuffers.Builder, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, VECTOR_INT8Offset: flatbuffers.Offset, SCALE: number, VECTOR_FLOAT32Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CESObjectVectorT;
    unpackTo(_o: CESObjectVectorT): void;
}
export declare class CESObjectVectorT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    VECTOR_INT8: (number)[];
    SCALE: number;
    VECTOR_FLOAT32: (number)[];
    constructor(NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, VECTOR_INT8?: (number)[], SCALE?: number, VECTOR_FLOAT32?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CESObjectVector.d.ts.map