import * as flatbuffers from 'flatbuffers';
import { rfmLibrationPoint } from './rfmLibrationPoint.js';
/**
 * One libration point and its linear stability.
 */
export declare class tbpLibrationPoint implements flatbuffers.IUnpackableObject<tbpLibrationPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpLibrationPoint;
    static getRootAstbpLibrationPoint(bb: flatbuffers.ByteBuffer, obj?: tbpLibrationPoint): tbpLibrationPoint;
    static getSizePrefixedRootAstbpLibrationPoint(bb: flatbuffers.ByteBuffer, obj?: tbpLibrationPoint): tbpLibrationPoint;
    POINT(): rfmLibrationPoint;
    /**
     * Synodic position, non-dimensional.
     */
    X(): number;
    Y(): number;
    Z(): number;
    /**
     * Jacobi constant at the point.
     */
    JACOBI(): number;
    /**
     * Eigenvalues of the linearised dynamics at the point (6 each); empty =
     * not computed.
     */
    EIGENVALUES_REAL(index: number): number | null;
    eigenvaluesRealLength(): number;
    eigenvaluesRealArray(): Float64Array | null;
    EIGENVALUES_IMAGINARY(index: number): number | null;
    eigenvaluesImaginaryLength(): number;
    eigenvaluesImaginaryArray(): Float64Array | null;
    /**
     * True when every eigenvalue has a non-positive real part.
     */
    STABLE(): boolean;
    static starttbpLibrationPoint(builder: flatbuffers.Builder): void;
    static addPoint(builder: flatbuffers.Builder, POINT: rfmLibrationPoint): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addJacobi(builder: flatbuffers.Builder, JACOBI: number): void;
    static addEigenvaluesReal(builder: flatbuffers.Builder, EIGENVALUES_REALOffset: flatbuffers.Offset): void;
    static createEigenvaluesRealVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEigenvaluesRealVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEigenvaluesRealVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEigenvaluesImaginary(builder: flatbuffers.Builder, EIGENVALUES_IMAGINARYOffset: flatbuffers.Offset): void;
    static createEigenvaluesImaginaryVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEigenvaluesImaginaryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEigenvaluesImaginaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStable(builder: flatbuffers.Builder, STABLE: boolean): void;
    static endtbpLibrationPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpLibrationPoint(builder: flatbuffers.Builder, POINT: rfmLibrationPoint, X: number, Y: number, Z: number, JACOBI: number, EIGENVALUES_REALOffset: flatbuffers.Offset, EIGENVALUES_IMAGINARYOffset: flatbuffers.Offset, STABLE: boolean): flatbuffers.Offset;
    unpack(): tbpLibrationPointT;
    unpackTo(_o: tbpLibrationPointT): void;
}
export declare class tbpLibrationPointT implements flatbuffers.IGeneratedObject {
    POINT: rfmLibrationPoint;
    X: number;
    Y: number;
    Z: number;
    JACOBI: number;
    EIGENVALUES_REAL: (number)[];
    EIGENVALUES_IMAGINARY: (number)[];
    STABLE: boolean;
    constructor(POINT?: rfmLibrationPoint, X?: number, Y?: number, Z?: number, JACOBI?: number, EIGENVALUES_REAL?: (number)[], EIGENVALUES_IMAGINARY?: (number)[], STABLE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpLibrationPoint.d.ts.map