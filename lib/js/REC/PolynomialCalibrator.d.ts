import * as flatbuffers from 'flatbuffers';
/**
 * Polynomial calibrator - converts raw to engineering using polynomial
 */
export declare class PolynomialCalibrator implements flatbuffers.IUnpackableObject<PolynomialCalibratorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PolynomialCalibrator;
    static getRootAsPolynomialCalibrator(bb: flatbuffers.ByteBuffer, obj?: PolynomialCalibrator): PolynomialCalibrator;
    static getSizePrefixedRootAsPolynomialCalibrator(bb: flatbuffers.ByteBuffer, obj?: PolynomialCalibrator): PolynomialCalibrator;
    /**
     * Polynomial terms (index is power, value is coefficient)
     */
    COEFFICIENTS(index: number): number | null;
    coefficientsLength(): number;
    coefficientsArray(): Float64Array | null;
    static startPolynomialCalibrator(builder: flatbuffers.Builder): void;
    static addCoefficients(builder: flatbuffers.Builder, COEFFICIENTSOffset: flatbuffers.Offset): void;
    static createCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoefficientsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoefficientsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPolynomialCalibrator(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPolynomialCalibrator(builder: flatbuffers.Builder, COEFFICIENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PolynomialCalibratorT;
    unpackTo(_o: PolynomialCalibratorT): void;
}
export declare class PolynomialCalibratorT implements flatbuffers.IGeneratedObject {
    COEFFICIENTS: (number)[];
    constructor(COEFFICIENTS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PolynomialCalibrator.d.ts.map