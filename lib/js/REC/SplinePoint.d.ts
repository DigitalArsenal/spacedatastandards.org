import * as flatbuffers from 'flatbuffers';
/**
 * Spline point for spline calibration
 */
export declare class SplinePoint implements flatbuffers.IUnpackableObject<SplinePointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SplinePoint;
    static getRootAsSplinePoint(bb: flatbuffers.ByteBuffer, obj?: SplinePoint): SplinePoint;
    static getSizePrefixedRootAsSplinePoint(bb: flatbuffers.ByteBuffer, obj?: SplinePoint): SplinePoint;
    /**
     * Raw value
     */
    RAW(): number;
    /**
     * Calibrated/engineering value
     */
    CALIBRATED(): number;
    static startSplinePoint(builder: flatbuffers.Builder): void;
    static addRaw(builder: flatbuffers.Builder, RAW: number): void;
    static addCalibrated(builder: flatbuffers.Builder, CALIBRATED: number): void;
    static endSplinePoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSplinePoint(builder: flatbuffers.Builder, RAW: number, CALIBRATED: number): flatbuffers.Offset;
    unpack(): SplinePointT;
    unpackTo(_o: SplinePointT): void;
}
export declare class SplinePointT implements flatbuffers.IGeneratedObject {
    RAW: number;
    CALIBRATED: number;
    constructor(RAW?: number, CALIBRATED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SplinePoint.d.ts.map