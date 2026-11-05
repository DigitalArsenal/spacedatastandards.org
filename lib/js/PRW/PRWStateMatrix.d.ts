import * as flatbuffers from 'flatbuffers';
/**
 * Row-major square matrix on [x,y,z,vx,vy,vz,(mass)], then the execution
 * request's DYNAMIC_PARAMETERS in order, one row per parameter, each in the
 * unit prwDynamicParameter defines for it (m**2/kg, m**2/kg/s, m**2/kg,
 * m/s**2 and km/s**2 for DRAG_AREA_OVER_MASS, DRAG_AREA_OVER_MASS_RATE,
 * SRP_AREA_OVER_MASS, IN_TRACK_ACCELERATION and OUTGASSING_ACCELERATION).
 * Covariance entries have row*column units; STM entries row/column units;
 * an STM's parameter rows are the identity (parameters are constant).
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