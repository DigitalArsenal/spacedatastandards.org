import * as flatbuffers from 'flatbuffers';
/**
 * Row-major square matrix on [x,y,z,vx,vy,vz,(mass)], SI state units.
 * Covariance entries have row*column units; STM entries row/column units.
 */
export declare class PRWStateMatrix implements flatbuffers.IUnpackableObject<PRWStateMatrixT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWStateMatrix;
    static getRootAsPRWStateMatrix(bb: flatbuffers.ByteBuffer, obj?: PRWStateMatrix): PRWStateMatrix;
    static getSizePrefixedRootAsPRWStateMatrix(bb: flatbuffers.ByteBuffer, obj?: PRWStateMatrix): PRWStateMatrix;
    DIMENSION(): number;
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array;
    static startPRWStateMatrix(builder: flatbuffers.Builder): void;
    static addDimension(builder: flatbuffers.Builder, DIMENSION: number): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWStateMatrix(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWStateMatrix(builder: flatbuffers.Builder, DIMENSION: number, VALUESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWStateMatrixT;
    unpackTo(_o: PRWStateMatrixT): void;
}
export declare class PRWStateMatrixT implements flatbuffers.IGeneratedObject {
    DIMENSION: number;
    VALUES: (number)[];
    constructor(DIMENSION?: number, VALUES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWStateMatrix.d.ts.map