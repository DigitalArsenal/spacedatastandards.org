import * as flatbuffers from 'flatbuffers';
/**
 * One pruned-vocabulary token's static embedding row.
 */
export declare class QEMTokenVector implements flatbuffers.IUnpackableObject<QEMTokenVectorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): QEMTokenVector;
    static getRootAsQEMTokenVector(bb: flatbuffers.ByteBuffer, obj?: QEMTokenVector): QEMTokenVector;
    static getSizePrefixedRootAsQEMTokenVector(bb: flatbuffers.ByteBuffer, obj?: QEMTokenVector): QEMTokenVector;
    /**
     * WordPiece token text, verbatim including any ## continuation marker.
     */
    TOKEN(): string | null;
    TOKEN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vocabulary row index. Row order in TOKENS is not guaranteed stable
     * across MODEL_VERSION; look up by TOKEN_ID, not array position.
     */
    TOKEN_ID(): number;
    /**
     * Row values when the parent QEM.ENCODING is INT8. Length equals
     * QEM.DIMENSIONS.
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
     * Row values when the parent QEM.ENCODING is FLOAT32. Length equals
     * QEM.DIMENSIONS.
     */
    VECTOR_FLOAT32(index: number): number | null;
    vectorFloat32Length(): number;
    vectorFloat32Array(): Float32Array | null;
    /**
     * Inverse document frequency weight for this token.
     */
    IDF(): number;
    static startQEMTokenVector(builder: flatbuffers.Builder): void;
    static addToken(builder: flatbuffers.Builder, TOKENOffset: flatbuffers.Offset): void;
    static addTokenId(builder: flatbuffers.Builder, TOKEN_ID: number): void;
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
    static addIdf(builder: flatbuffers.Builder, IDF: number): void;
    static endQEMTokenVector(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createQEMTokenVector(builder: flatbuffers.Builder, TOKENOffset: flatbuffers.Offset, TOKEN_ID: number, VECTOR_INT8Offset: flatbuffers.Offset, SCALE: number, VECTOR_FLOAT32Offset: flatbuffers.Offset, IDF: number): flatbuffers.Offset;
    unpack(): QEMTokenVectorT;
    unpackTo(_o: QEMTokenVectorT): void;
}
export declare class QEMTokenVectorT implements flatbuffers.IGeneratedObject {
    TOKEN: string | Uint8Array | null;
    TOKEN_ID: number;
    VECTOR_INT8: (number)[];
    SCALE: number;
    VECTOR_FLOAT32: (number)[];
    IDF: number;
    constructor(TOKEN?: string | Uint8Array | null, TOKEN_ID?: number, VECTOR_INT8?: (number)[], SCALE?: number, VECTOR_FLOAT32?: (number)[], IDF?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=QEMTokenVector.d.ts.map