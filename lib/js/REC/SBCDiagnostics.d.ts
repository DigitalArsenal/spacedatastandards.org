import * as flatbuffers from 'flatbuffers';
import { SBCContribution, SBCContributionT } from './SBCContribution.js';
import { sbcContributorKind } from './sbcContributorKind.js';
/**
 * Diagnostics of a combined covariance.
 */
export declare class SBCDiagnostics implements flatbuffers.IUnpackableObject<SBCDiagnosticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SBCDiagnostics;
    static getRootAsSBCDiagnostics(bb: flatbuffers.ByteBuffer, obj?: SBCDiagnostics): SBCDiagnostics;
    static getSizePrefixedRootAsSBCDiagnostics(bb: flatbuffers.ByteBuffer, obj?: SBCDiagnostics): SBCDiagnostics;
    /**
     * Object identifier.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch, ISO 8601 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Axes of the covariance, e.g. "RTN".
     */
    REFERENCE_FRAME(): string | null;
    REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer of the combination, e.g. "covariance-analysis".
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Status, e.g. "nominal".
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The contributor kinds combined, in order.
     */
    CONTRIBUTORS(index: number): sbcContributorKind | null;
    contributorsLength(): number;
    contributorsArray(): Uint8Array | null;
    /**
     * Each contributor's added variances, totals first and then per sensor.
     */
    CONTRIBUTIONS(index: number, obj?: SBCContribution): SBCContribution | null;
    contributionsLength(): number;
    /**
     * Resulting one-sigma, radial, in-track, cross-track position, m.
     */
    POSITION_SIGMA_RTN_M(index: number): number | null;
    positionSigmaRtnMLength(): number;
    positionSigmaRtnMArray(): Float64Array | null;
    /**
     * Resulting one-sigma, radial, in-track, cross-track velocity, m/s.
     */
    VELOCITY_SIGMA_RTN_M_S(index: number): number | null;
    velocitySigmaRtnMSLength(): number;
    velocitySigmaRtnMSArray(): Float64Array | null;
    /**
     * The combined covariance, 6x6 lower triangle row-major (21 values), km**2,
     * km**2/s, km**2/s**2. The same values the companion $OCM carries.
     */
    COVARIANCE_LOWER_TRIANGLE(index: number): number | null;
    covarianceLowerTriangleLength(): number;
    covarianceLowerTriangleArray(): Float64Array | null;
    /**
     * Position covariance, 3x3 row-major (9 values), km**2.
     */
    POSITION_COVARIANCE_KM2(index: number): number | null;
    positionCovarianceKm2Length(): number;
    positionCovarianceKm2Array(): Float64Array | null;
    /**
     * One-sigma level of ELLIPSOID_SEMI_AXES_M (1 = one sigma).
     */
    ELLIPSOID_SIGMA_LEVEL(): number;
    /**
     * Semi-axes of the position error ellipsoid, largest first, m (3 values).
     */
    ELLIPSOID_SEMI_AXES_M(index: number): number | null;
    ellipsoidSemiAxesMLength(): number;
    ellipsoidSemiAxesMArray(): Float64Array | null;
    /**
     * Assumptions the combination made (human-readable).
     */
    ASSUMPTIONS(index: number): string;
    ASSUMPTIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    assumptionsLength(): number;
    static startSBCDiagnostics(builder: flatbuffers.Builder): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addContributors(builder: flatbuffers.Builder, CONTRIBUTORSOffset: flatbuffers.Offset): void;
    static createContributorsVector(builder: flatbuffers.Builder, data: sbcContributorKind[]): flatbuffers.Offset;
    static startContributorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContributions(builder: flatbuffers.Builder, CONTRIBUTIONSOffset: flatbuffers.Offset): void;
    static createContributionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContributionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionSigmaRtnM(builder: flatbuffers.Builder, POSITION_SIGMA_RTN_MOffset: flatbuffers.Offset): void;
    static createPositionSigmaRtnMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionSigmaRtnMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionSigmaRtnMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocitySigmaRtnMS(builder: flatbuffers.Builder, VELOCITY_SIGMA_RTN_M_SOffset: flatbuffers.Offset): void;
    static createVelocitySigmaRtnMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocitySigmaRtnMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocitySigmaRtnMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceLowerTriangle(builder: flatbuffers.Builder, COVARIANCE_LOWER_TRIANGLEOffset: flatbuffers.Offset): void;
    static createCovarianceLowerTriangleVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceLowerTriangleVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceLowerTriangleVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPositionCovarianceKm2(builder: flatbuffers.Builder, POSITION_COVARIANCE_KM2Offset: flatbuffers.Offset): void;
    static createPositionCovarianceKm2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionCovarianceKm2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionCovarianceKm2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addEllipsoidSigmaLevel(builder: flatbuffers.Builder, ELLIPSOID_SIGMA_LEVEL: number): void;
    static addEllipsoidSemiAxesM(builder: flatbuffers.Builder, ELLIPSOID_SEMI_AXES_MOffset: flatbuffers.Offset): void;
    static createEllipsoidSemiAxesMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEllipsoidSemiAxesMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEllipsoidSemiAxesMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSBCDiagnostics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSBCDiagnostics(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, REFERENCE_FRAMEOffset: flatbuffers.Offset, PROVIDEROffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset, CONTRIBUTORSOffset: flatbuffers.Offset, CONTRIBUTIONSOffset: flatbuffers.Offset, POSITION_SIGMA_RTN_MOffset: flatbuffers.Offset, VELOCITY_SIGMA_RTN_M_SOffset: flatbuffers.Offset, COVARIANCE_LOWER_TRIANGLEOffset: flatbuffers.Offset, POSITION_COVARIANCE_KM2Offset: flatbuffers.Offset, ELLIPSOID_SIGMA_LEVEL: number, ELLIPSOID_SEMI_AXES_MOffset: flatbuffers.Offset, ASSUMPTIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SBCDiagnosticsT;
    unpackTo(_o: SBCDiagnosticsT): void;
}
export declare class SBCDiagnosticsT implements flatbuffers.IGeneratedObject {
    OBJECT_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    REFERENCE_FRAME: string | Uint8Array | null;
    PROVIDER: string | Uint8Array | null;
    STATUS: string | Uint8Array | null;
    CONTRIBUTORS: (sbcContributorKind)[];
    CONTRIBUTIONS: (SBCContributionT)[];
    POSITION_SIGMA_RTN_M: (number)[];
    VELOCITY_SIGMA_RTN_M_S: (number)[];
    COVARIANCE_LOWER_TRIANGLE: (number)[];
    POSITION_COVARIANCE_KM2: (number)[];
    ELLIPSOID_SIGMA_LEVEL: number;
    ELLIPSOID_SEMI_AXES_M: (number)[];
    ASSUMPTIONS: (string)[];
    constructor(OBJECT_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, REFERENCE_FRAME?: string | Uint8Array | null, PROVIDER?: string | Uint8Array | null, STATUS?: string | Uint8Array | null, CONTRIBUTORS?: (sbcContributorKind)[], CONTRIBUTIONS?: (SBCContributionT)[], POSITION_SIGMA_RTN_M?: (number)[], VELOCITY_SIGMA_RTN_M_S?: (number)[], COVARIANCE_LOWER_TRIANGLE?: (number)[], POSITION_COVARIANCE_KM2?: (number)[], ELLIPSOID_SIGMA_LEVEL?: number, ELLIPSOID_SEMI_AXES_M?: (number)[], ASSUMPTIONS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SBCDiagnostics.d.ts.map