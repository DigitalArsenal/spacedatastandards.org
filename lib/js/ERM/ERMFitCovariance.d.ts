import * as flatbuffers from 'flatbuffers';
/**
 * Covariance of a fit.
 */
export declare class ERMFitCovariance implements flatbuffers.IUnpackableObject<ERMFitCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMFitCovariance;
    static getRootAsERMFitCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMFitCovariance): ERMFitCovariance;
    static getSizePrefixedRootAsERMFitCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMFitCovariance): ERMFitCovariance;
    /**
     * Parameters, of "n", "af", "ag", "chi", "psi", "lambda", "bstar".
     */
    PARAMETERS(index: number): string;
    PARAMETERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    parametersLength(): number;
    /**
     * Equinoctial covariance, lower triangle.
     */
    EQUINOCTIAL(index: number): number | null;
    equinoctialLength(): number;
    equinoctialArray(): Float64Array | null;
    SCALE(): number;
    /**
     * Classical-element covariance, lower 6x6 or 7x7; empty = none.
     */
    CLASSICAL(index: number): number | null;
    classicalLength(): number;
    classicalArray(): Float64Array | null;
    CLASSICAL_UNITS(): string | null;
    CLASSICAL_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cartesian RSW covariance, Lower21 (km, km/s); empty = none.
     */
    CARTESIAN_RSW(index: number): number | null;
    cartesianRswLength(): number;
    cartesianRswArray(): Float64Array | null;
    CARTESIAN_UNITS(): string | null;
    CARTESIAN_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMFitCovariance(builder: flatbuffers.Builder): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEquinoctial(builder: flatbuffers.Builder, EQUINOCTIALOffset: flatbuffers.Offset): void;
    static createEquinoctialVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEquinoctialVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEquinoctialVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addClassical(builder: flatbuffers.Builder, CLASSICALOffset: flatbuffers.Offset): void;
    static createClassicalVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createClassicalVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startClassicalVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassicalUnits(builder: flatbuffers.Builder, CLASSICAL_UNITSOffset: flatbuffers.Offset): void;
    static addCartesianRsw(builder: flatbuffers.Builder, CARTESIAN_RSWOffset: flatbuffers.Offset): void;
    static createCartesianRswVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCartesianRswVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCartesianRswVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCartesianUnits(builder: flatbuffers.Builder, CARTESIAN_UNITSOffset: flatbuffers.Offset): void;
    static endERMFitCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMFitCovariance(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset, EQUINOCTIALOffset: flatbuffers.Offset, SCALE: number, CLASSICALOffset: flatbuffers.Offset, CLASSICAL_UNITSOffset: flatbuffers.Offset, CARTESIAN_RSWOffset: flatbuffers.Offset, CARTESIAN_UNITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMFitCovarianceT;
    unpackTo(_o: ERMFitCovarianceT): void;
}
export declare class ERMFitCovarianceT implements flatbuffers.IGeneratedObject {
    PARAMETERS: (string)[];
    EQUINOCTIAL: (number)[];
    SCALE: number;
    CLASSICAL: (number)[];
    CLASSICAL_UNITS: string | Uint8Array | null;
    CARTESIAN_RSW: (number)[];
    CARTESIAN_UNITS: string | Uint8Array | null;
    constructor(PARAMETERS?: (string)[], EQUINOCTIAL?: (number)[], SCALE?: number, CLASSICAL?: (number)[], CLASSICAL_UNITS?: string | Uint8Array | null, CARTESIAN_RSW?: (number)[], CARTESIAN_UNITS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMFitCovariance.d.ts.map