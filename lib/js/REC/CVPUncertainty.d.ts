import * as flatbuffers from 'flatbuffers';
/**
 * How wrong this geometry can be. A contour with no uncertainty is a drawing,
 * not a measurement.
 */
export declare class CVPUncertainty implements flatbuffers.IUnpackableObject<CVPUncertaintyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVPUncertainty;
    static getRootAsCVPUncertainty(bb: flatbuffers.ByteBuffer, obj?: CVPUncertainty): CVPUncertainty;
    static getSizePrefixedRootAsCVPUncertainty(bb: flatbuffers.ByteBuffer, obj?: CVPUncertainty): CVPUncertainty;
    /**
     * 1-sigma horizontal position uncertainty of the boundary, metres. Applies
     * to every vertex unless VERTEX_POSITION_UNCERTAINTY_M is present.
     */
    HORIZONTAL_POSITION_M(): number;
    /**
     * 1-sigma uncertainty of the level the contour was drawn at, in
     * LEVEL_UNCERTAINTY_UNITS.
     */
    LEVEL_UNCERTAINTY(): number;
    LEVEL_UNCERTAINTY_UNITS(): string | null;
    LEVEL_UNCERTAINTY_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Confidence the stated uncertainties correspond to [0-1], e.g. 0.68.
     */
    CONFIDENCE(): number;
    /**
     * Tolerance the contour extractor converged to, in the metric's units.
     */
    EXTRACTION_TOLERANCE(): number;
    /**
     * Simplification tolerance applied to the rings, metres. A simplified ring
     * is not the computed boundary and MUST say so.
     */
    SIMPLIFICATION_TOLERANCE_M(): number;
    /**
     * How the uncertainty was established (e.g. "grid resolution bound",
     * "Monte Carlo over emitter state covariance").
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCVPUncertainty(builder: flatbuffers.Builder): void;
    static addHorizontalPositionM(builder: flatbuffers.Builder, HORIZONTAL_POSITION_M: number): void;
    static addLevelUncertainty(builder: flatbuffers.Builder, LEVEL_UNCERTAINTY: number): void;
    static addLevelUncertaintyUnits(builder: flatbuffers.Builder, LEVEL_UNCERTAINTY_UNITSOffset: flatbuffers.Offset): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static addExtractionTolerance(builder: flatbuffers.Builder, EXTRACTION_TOLERANCE: number): void;
    static addSimplificationToleranceM(builder: flatbuffers.Builder, SIMPLIFICATION_TOLERANCE_M: number): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static endCVPUncertainty(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCVPUncertainty(builder: flatbuffers.Builder, HORIZONTAL_POSITION_M: number, LEVEL_UNCERTAINTY: number, LEVEL_UNCERTAINTY_UNITSOffset: flatbuffers.Offset, CONFIDENCE: number, EXTRACTION_TOLERANCE: number, SIMPLIFICATION_TOLERANCE_M: number, METHODOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CVPUncertaintyT;
    unpackTo(_o: CVPUncertaintyT): void;
}
export declare class CVPUncertaintyT implements flatbuffers.IGeneratedObject {
    HORIZONTAL_POSITION_M: number;
    LEVEL_UNCERTAINTY: number;
    LEVEL_UNCERTAINTY_UNITS: string | Uint8Array | null;
    CONFIDENCE: number;
    EXTRACTION_TOLERANCE: number;
    SIMPLIFICATION_TOLERANCE_M: number;
    METHOD: string | Uint8Array | null;
    constructor(HORIZONTAL_POSITION_M?: number, LEVEL_UNCERTAINTY?: number, LEVEL_UNCERTAINTY_UNITS?: string | Uint8Array | null, CONFIDENCE?: number, EXTRACTION_TOLERANCE?: number, SIMPLIFICATION_TOLERANCE_M?: number, METHOD?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVPUncertainty.d.ts.map