import * as flatbuffers from 'flatbuffers';
import { polynomialBasisType } from './polynomialBasisType.js';
/**
 * A single time-segment record of polynomial coefficients for Cartesian position
 * (and optionally velocity). Coefficients are stored per axis.
 *
 * To evaluate position at time t within this record's validity window:
 *   1. Compute normalized time: tau = (t - EPOCH_MID) / EPOCH_HALF_SPAN
 *      where tau is in [-1, +1].
 *   2. Evaluate the polynomial basis of degree (NUM_COEFFICIENTS - 1) using
 *      the coefficients for each axis.
 *
 * Velocity coefficients, if present, follow the same evaluation procedure.
 * If HAS_VELOCITY_COEFFICIENTS is false, velocity can be obtained by
 * analytically differentiating the position polynomial.
 */
export declare class PPEPositionRecord implements flatbuffers.IUnpackableObject<PPEPositionRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PPEPositionRecord;
    static getRootAsPPEPositionRecord(bb: flatbuffers.ByteBuffer, obj?: PPEPositionRecord): PPEPositionRecord;
    static getSizePrefixedRootAsPPEPositionRecord(bb: flatbuffers.ByteBuffer, obj?: PPEPositionRecord): PPEPositionRecord;
    /**
     * Midpoint epoch of this record's validity window (ISO 8601 UTC or TDB).
     * Together with EPOCH_HALF_SPAN, defines the time interval:
     *   [EPOCH_MID - EPOCH_HALF_SPAN, EPOCH_MID + EPOCH_HALF_SPAN]
     */
    EPOCH_MID(): string | null;
    EPOCH_MID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Half-span of the validity window in seconds.
     * The full span is 2 * EPOCH_HALF_SPAN seconds centered on EPOCH_MID.
     */
    EPOCH_HALF_SPAN(): number;
    /**
     * Number of polynomial coefficients per axis.
     * The polynomial degree is (NUM_COEFFICIENTS - 1).
     * Typical values: 8-32 for high-fidelity ephemeris fits.
     */
    NUM_COEFFICIENTS(): number;
    /**
     * Polynomial basis type for interpreting the coefficient arrays.
     */
    BASIS_TYPE(): polynomialBasisType;
    /**
     * Position coefficients for X-axis (km).
     * Length must equal NUM_COEFFICIENTS. Ordered c0, c1, ..., c_{N-1}.
     */
    POS_COEFF_X(index: number): number | null;
    posCoeffXLength(): number;
    posCoeffXArray(): Float64Array | null;
    /**
     * Position coefficients for Y-axis (km).
     * Length must equal NUM_COEFFICIENTS.
     */
    POS_COEFF_Y(index: number): number | null;
    posCoeffYLength(): number;
    posCoeffYArray(): Float64Array | null;
    /**
     * Position coefficients for Z-axis (km).
     * Length must equal NUM_COEFFICIENTS.
     */
    POS_COEFF_Z(index: number): number | null;
    posCoeffZLength(): number;
    posCoeffZArray(): Float64Array | null;
    /**
     * Whether explicit velocity coefficients are provided.
     * If false, velocity should be derived by differentiating the position polynomial.
     */
    HAS_VELOCITY_COEFFICIENTS(): boolean;
    /**
     * Velocity coefficients for X-axis (km/s). Optional.
     * Length must equal NUM_COEFFICIENTS if present.
     */
    VEL_COEFF_X(index: number): number | null;
    velCoeffXLength(): number;
    velCoeffXArray(): Float64Array | null;
    /**
     * Velocity coefficients for Y-axis (km/s). Optional.
     */
    VEL_COEFF_Y(index: number): number | null;
    velCoeffYLength(): number;
    velCoeffYArray(): Float64Array | null;
    /**
     * Velocity coefficients for Z-axis (km/s). Optional.
     */
    VEL_COEFF_Z(index: number): number | null;
    velCoeffZLength(): number;
    velCoeffZArray(): Float64Array | null;
    /**
     * Maximum position fit residual over this segment (km). Optional quality metric.
     */
    MAX_POSITION_RESIDUAL(): number;
    /**
     * RMS position fit residual over this segment (km). Optional quality metric.
     */
    RMS_POSITION_RESIDUAL(): number;
    static startPPEPositionRecord(builder: flatbuffers.Builder): void;
    static addEpochMid(builder: flatbuffers.Builder, EPOCH_MIDOffset: flatbuffers.Offset): void;
    static addEpochHalfSpan(builder: flatbuffers.Builder, EPOCH_HALF_SPAN: number): void;
    static addNumCoefficients(builder: flatbuffers.Builder, NUM_COEFFICIENTS: number): void;
    static addBasisType(builder: flatbuffers.Builder, BASIS_TYPE: polynomialBasisType): void;
    static addPosCoeffX(builder: flatbuffers.Builder, POS_COEFF_XOffset: flatbuffers.Offset): void;
    static createPosCoeffXVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPosCoeffXVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPosCoeffXVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPosCoeffY(builder: flatbuffers.Builder, POS_COEFF_YOffset: flatbuffers.Offset): void;
    static createPosCoeffYVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPosCoeffYVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPosCoeffYVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPosCoeffZ(builder: flatbuffers.Builder, POS_COEFF_ZOffset: flatbuffers.Offset): void;
    static createPosCoeffZVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPosCoeffZVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPosCoeffZVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHasVelocityCoefficients(builder: flatbuffers.Builder, HAS_VELOCITY_COEFFICIENTS: boolean): void;
    static addVelCoeffX(builder: flatbuffers.Builder, VEL_COEFF_XOffset: flatbuffers.Offset): void;
    static createVelCoeffXVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelCoeffXVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelCoeffXVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelCoeffY(builder: flatbuffers.Builder, VEL_COEFF_YOffset: flatbuffers.Offset): void;
    static createVelCoeffYVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelCoeffYVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelCoeffYVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelCoeffZ(builder: flatbuffers.Builder, VEL_COEFF_ZOffset: flatbuffers.Offset): void;
    static createVelCoeffZVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelCoeffZVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelCoeffZVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxPositionResidual(builder: flatbuffers.Builder, MAX_POSITION_RESIDUAL: number): void;
    static addRmsPositionResidual(builder: flatbuffers.Builder, RMS_POSITION_RESIDUAL: number): void;
    static endPPEPositionRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPPEPositionRecord(builder: flatbuffers.Builder, EPOCH_MIDOffset: flatbuffers.Offset, EPOCH_HALF_SPAN: number, NUM_COEFFICIENTS: number, BASIS_TYPE: polynomialBasisType, POS_COEFF_XOffset: flatbuffers.Offset, POS_COEFF_YOffset: flatbuffers.Offset, POS_COEFF_ZOffset: flatbuffers.Offset, HAS_VELOCITY_COEFFICIENTS: boolean, VEL_COEFF_XOffset: flatbuffers.Offset, VEL_COEFF_YOffset: flatbuffers.Offset, VEL_COEFF_ZOffset: flatbuffers.Offset, MAX_POSITION_RESIDUAL: number, RMS_POSITION_RESIDUAL: number): flatbuffers.Offset;
    unpack(): PPEPositionRecordT;
    unpackTo(_o: PPEPositionRecordT): void;
}
export declare class PPEPositionRecordT implements flatbuffers.IGeneratedObject {
    EPOCH_MID: string | Uint8Array | null;
    EPOCH_HALF_SPAN: number;
    NUM_COEFFICIENTS: number;
    BASIS_TYPE: polynomialBasisType;
    POS_COEFF_X: (number)[];
    POS_COEFF_Y: (number)[];
    POS_COEFF_Z: (number)[];
    HAS_VELOCITY_COEFFICIENTS: boolean;
    VEL_COEFF_X: (number)[];
    VEL_COEFF_Y: (number)[];
    VEL_COEFF_Z: (number)[];
    MAX_POSITION_RESIDUAL: number;
    RMS_POSITION_RESIDUAL: number;
    constructor(EPOCH_MID?: string | Uint8Array | null, EPOCH_HALF_SPAN?: number, NUM_COEFFICIENTS?: number, BASIS_TYPE?: polynomialBasisType, POS_COEFF_X?: (number)[], POS_COEFF_Y?: (number)[], POS_COEFF_Z?: (number)[], HAS_VELOCITY_COEFFICIENTS?: boolean, VEL_COEFF_X?: (number)[], VEL_COEFF_Y?: (number)[], VEL_COEFF_Z?: (number)[], MAX_POSITION_RESIDUAL?: number, RMS_POSITION_RESIDUAL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PPEPositionRecord.d.ts.map