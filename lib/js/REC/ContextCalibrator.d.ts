import * as flatbuffers from 'flatbuffers';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
import { MathOperation, MathOperationT } from './MathOperation.js';
import { PolynomialCalibrator, PolynomialCalibratorT } from './PolynomialCalibrator.js';
import { SplineCalibrator, SplineCalibratorT } from './SplineCalibrator.js';
/**
 * Context-dependent calibrator selection
 */
export declare class ContextCalibrator implements flatbuffers.IUnpackableObject<ContextCalibratorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContextCalibrator;
    static getRootAsContextCalibrator(bb: flatbuffers.ByteBuffer, obj?: ContextCalibrator): ContextCalibrator;
    static getSizePrefixedRootAsContextCalibrator(bb: flatbuffers.ByteBuffer, obj?: ContextCalibrator): ContextCalibrator;
    /**
     * Match criteria for selecting this calibrator
     */
    MATCH_CRITERIA(obj?: MatchCriteria): MatchCriteria | null;
    /**
     * Polynomial calibrator (if used)
     */
    POLYNOMIAL(obj?: PolynomialCalibrator): PolynomialCalibrator | null;
    /**
     * Spline calibrator (if used)
     */
    SPLINE(obj?: SplineCalibrator): SplineCalibrator | null;
    /**
     * Math operation calibrator (if used)
     */
    MATH_OPERATION(obj?: MathOperation): MathOperation | null;
    static startContextCalibrator(builder: flatbuffers.Builder): void;
    static addMatchCriteria(builder: flatbuffers.Builder, MATCH_CRITERIAOffset: flatbuffers.Offset): void;
    static addPolynomial(builder: flatbuffers.Builder, POLYNOMIALOffset: flatbuffers.Offset): void;
    static addSpline(builder: flatbuffers.Builder, SPLINEOffset: flatbuffers.Offset): void;
    static addMathOperation(builder: flatbuffers.Builder, MATH_OPERATIONOffset: flatbuffers.Offset): void;
    static endContextCalibrator(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ContextCalibratorT;
    unpackTo(_o: ContextCalibratorT): void;
}
export declare class ContextCalibratorT implements flatbuffers.IGeneratedObject {
    MATCH_CRITERIA: MatchCriteriaT | null;
    POLYNOMIAL: PolynomialCalibratorT | null;
    SPLINE: SplineCalibratorT | null;
    MATH_OPERATION: MathOperationT | null;
    constructor(MATCH_CRITERIA?: MatchCriteriaT | null, POLYNOMIAL?: PolynomialCalibratorT | null, SPLINE?: SplineCalibratorT | null, MATH_OPERATION?: MathOperationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContextCalibrator.d.ts.map