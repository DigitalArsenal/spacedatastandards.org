import * as flatbuffers from 'flatbuffers';
import { anomalyType } from './anomalyType.js';
import { polynomialBasisType } from './polynomialBasisType.js';
import { sizeShapeType } from './sizeShapeType.js';
/**
 * A single time-segment record of polynomial coefficients for classical orbital elements.
 *
 * The six classical elements are:
 *   1. SMA or R_PERIAPSIS (size/shape) — see SIZE_SHAPE_TYPE
 *   2. Eccentricity (dimensionless)
 *   3. Inclination (degrees)
 *   4. Right Ascension of Ascending Node / RAAN (degrees)
 *   5. Argument of Periapsis (degrees)
 *   6. Anomaly (degrees) — see ANOMALY_TYPE
 *
 * Evaluation follows the same normalized-time procedure as PPEPositionRecord.
 */
export declare class PPEOrbitalElementRecord implements flatbuffers.IUnpackableObject<PPEOrbitalElementRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PPEOrbitalElementRecord;
    static getRootAsPPEOrbitalElementRecord(bb: flatbuffers.ByteBuffer, obj?: PPEOrbitalElementRecord): PPEOrbitalElementRecord;
    static getSizePrefixedRootAsPPEOrbitalElementRecord(bb: flatbuffers.ByteBuffer, obj?: PPEOrbitalElementRecord): PPEOrbitalElementRecord;
    /**
     * Midpoint epoch of this record's validity window (ISO 8601 UTC or TDB).
     */
    EPOCH_MID(): string | null;
    EPOCH_MID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Half-span of the validity window in seconds.
     */
    EPOCH_HALF_SPAN(): number;
    /**
     * Number of polynomial coefficients per element.
     */
    NUM_COEFFICIENTS(): number;
    /**
     * Polynomial basis type for interpreting the coefficient arrays.
     */
    BASIS_TYPE(): polynomialBasisType;
    /**
     * Parameterization of the first orbital element (SMA vs R_PERIAPSIS).
     */
    SIZE_SHAPE_TYPE(): sizeShapeType;
    /**
     * Anomaly type for the sixth orbital element.
     */
    ANOMALY_TYPE(): anomalyType;
    /**
     * Coefficients for SMA or radius of periapsis (km).
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_SIZE_SHAPE(index: number): number | null;
    coeffSizeShapeLength(): number;
    coeffSizeShapeArray(): Float64Array | null;
    /**
     * Coefficients for eccentricity (dimensionless).
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_ECCENTRICITY(index: number): number | null;
    coeffEccentricityLength(): number;
    coeffEccentricityArray(): Float64Array | null;
    /**
     * Coefficients for inclination (degrees).
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_INCLINATION(index: number): number | null;
    coeffInclinationLength(): number;
    coeffInclinationArray(): Float64Array | null;
    /**
     * Coefficients for RAAN (degrees).
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_RAAN(index: number): number | null;
    coeffRaanLength(): number;
    coeffRaanArray(): Float64Array | null;
    /**
     * Coefficients for argument of periapsis (degrees).
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_ARG_PERIAPSIS(index: number): number | null;
    coeffArgPeriapsisLength(): number;
    coeffArgPeriapsisArray(): Float64Array | null;
    /**
     * Coefficients for anomaly (degrees). See ANOMALY_TYPE for interpretation.
     * Length must equal NUM_COEFFICIENTS.
     */
    COEFF_ANOMALY(index: number): number | null;
    coeffAnomalyLength(): number;
    coeffAnomalyArray(): Float64Array | null;
    /**
     * Maximum element fit residual over this segment. Optional quality metric.
     * Units depend on the element (km for SMA, degrees for angles, dimensionless for ecc).
     */
    MAX_ELEMENT_RESIDUAL(): number;
    /**
     * RMS element fit residual over this segment. Optional quality metric.
     */
    RMS_ELEMENT_RESIDUAL(): number;
    static startPPEOrbitalElementRecord(builder: flatbuffers.Builder): void;
    static addEpochMid(builder: flatbuffers.Builder, EPOCH_MIDOffset: flatbuffers.Offset): void;
    static addEpochHalfSpan(builder: flatbuffers.Builder, EPOCH_HALF_SPAN: number): void;
    static addNumCoefficients(builder: flatbuffers.Builder, NUM_COEFFICIENTS: number): void;
    static addBasisType(builder: flatbuffers.Builder, BASIS_TYPE: polynomialBasisType): void;
    static addSizeShapeType(builder: flatbuffers.Builder, SIZE_SHAPE_TYPE: sizeShapeType): void;
    static addAnomalyType(builder: flatbuffers.Builder, ANOMALY_TYPE: anomalyType): void;
    static addCoeffSizeShape(builder: flatbuffers.Builder, COEFF_SIZE_SHAPEOffset: flatbuffers.Offset): void;
    static createCoeffSizeShapeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffSizeShapeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffSizeShapeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoeffEccentricity(builder: flatbuffers.Builder, COEFF_ECCENTRICITYOffset: flatbuffers.Offset): void;
    static createCoeffEccentricityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffEccentricityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffEccentricityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoeffInclination(builder: flatbuffers.Builder, COEFF_INCLINATIONOffset: flatbuffers.Offset): void;
    static createCoeffInclinationVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffInclinationVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffInclinationVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoeffRaan(builder: flatbuffers.Builder, COEFF_RAANOffset: flatbuffers.Offset): void;
    static createCoeffRaanVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffRaanVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffRaanVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoeffArgPeriapsis(builder: flatbuffers.Builder, COEFF_ARG_PERIAPSISOffset: flatbuffers.Offset): void;
    static createCoeffArgPeriapsisVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffArgPeriapsisVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffArgPeriapsisVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoeffAnomaly(builder: flatbuffers.Builder, COEFF_ANOMALYOffset: flatbuffers.Offset): void;
    static createCoeffAnomalyVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoeffAnomalyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoeffAnomalyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxElementResidual(builder: flatbuffers.Builder, MAX_ELEMENT_RESIDUAL: number): void;
    static addRmsElementResidual(builder: flatbuffers.Builder, RMS_ELEMENT_RESIDUAL: number): void;
    static endPPEOrbitalElementRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPPEOrbitalElementRecord(builder: flatbuffers.Builder, EPOCH_MIDOffset: flatbuffers.Offset, EPOCH_HALF_SPAN: number, NUM_COEFFICIENTS: number, BASIS_TYPE: polynomialBasisType, SIZE_SHAPE_TYPE: sizeShapeType, ANOMALY_TYPE: anomalyType, COEFF_SIZE_SHAPEOffset: flatbuffers.Offset, COEFF_ECCENTRICITYOffset: flatbuffers.Offset, COEFF_INCLINATIONOffset: flatbuffers.Offset, COEFF_RAANOffset: flatbuffers.Offset, COEFF_ARG_PERIAPSISOffset: flatbuffers.Offset, COEFF_ANOMALYOffset: flatbuffers.Offset, MAX_ELEMENT_RESIDUAL: number, RMS_ELEMENT_RESIDUAL: number): flatbuffers.Offset;
    unpack(): PPEOrbitalElementRecordT;
    unpackTo(_o: PPEOrbitalElementRecordT): void;
}
export declare class PPEOrbitalElementRecordT implements flatbuffers.IGeneratedObject {
    EPOCH_MID: string | Uint8Array | null;
    EPOCH_HALF_SPAN: number;
    NUM_COEFFICIENTS: number;
    BASIS_TYPE: polynomialBasisType;
    SIZE_SHAPE_TYPE: sizeShapeType;
    ANOMALY_TYPE: anomalyType;
    COEFF_SIZE_SHAPE: (number)[];
    COEFF_ECCENTRICITY: (number)[];
    COEFF_INCLINATION: (number)[];
    COEFF_RAAN: (number)[];
    COEFF_ARG_PERIAPSIS: (number)[];
    COEFF_ANOMALY: (number)[];
    MAX_ELEMENT_RESIDUAL: number;
    RMS_ELEMENT_RESIDUAL: number;
    constructor(EPOCH_MID?: string | Uint8Array | null, EPOCH_HALF_SPAN?: number, NUM_COEFFICIENTS?: number, BASIS_TYPE?: polynomialBasisType, SIZE_SHAPE_TYPE?: sizeShapeType, ANOMALY_TYPE?: anomalyType, COEFF_SIZE_SHAPE?: (number)[], COEFF_ECCENTRICITY?: (number)[], COEFF_INCLINATION?: (number)[], COEFF_RAAN?: (number)[], COEFF_ARG_PERIAPSIS?: (number)[], COEFF_ANOMALY?: (number)[], MAX_ELEMENT_RESIDUAL?: number, RMS_ELEMENT_RESIDUAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PPEOrbitalElementRecord.d.ts.map