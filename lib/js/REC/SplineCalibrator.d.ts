import * as flatbuffers from 'flatbuffers';
import { SplinePoint, SplinePointT } from './SplinePoint.js';
/**
 * Spline calibrator - piecewise linear interpolation
 */
export declare class SplineCalibrator implements flatbuffers.IUnpackableObject<SplineCalibratorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SplineCalibrator;
    static getRootAsSplineCalibrator(bb: flatbuffers.ByteBuffer, obj?: SplineCalibrator): SplineCalibrator;
    static getSizePrefixedRootAsSplineCalibrator(bb: flatbuffers.ByteBuffer, obj?: SplineCalibrator): SplineCalibrator;
    /**
     * Spline points ordered by raw value
     */
    POINTS(index: number, obj?: SplinePoint): SplinePoint | null;
    pointsLength(): number;
    /**
     * Extrapolate below minimum point
     */
    EXTRAPOLATE_LOW(): boolean;
    /**
     * Extrapolate above maximum point
     */
    EXTRAPOLATE_HIGH(): boolean;
    static startSplineCalibrator(builder: flatbuffers.Builder): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExtrapolateLow(builder: flatbuffers.Builder, EXTRAPOLATE_LOW: boolean): void;
    static addExtrapolateHigh(builder: flatbuffers.Builder, EXTRAPOLATE_HIGH: boolean): void;
    static endSplineCalibrator(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSplineCalibrator(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset, EXTRAPOLATE_LOW: boolean, EXTRAPOLATE_HIGH: boolean): flatbuffers.Offset;
    unpack(): SplineCalibratorT;
    unpackTo(_o: SplineCalibratorT): void;
}
export declare class SplineCalibratorT implements flatbuffers.IGeneratedObject {
    POINTS: (SplinePointT)[];
    EXTRAPOLATE_LOW: boolean;
    EXTRAPOLATE_HIGH: boolean;
    constructor(POINTS?: (SplinePointT)[], EXTRAPOLATE_LOW?: boolean, EXTRAPOLATE_HIGH?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SplineCalibrator.d.ts.map