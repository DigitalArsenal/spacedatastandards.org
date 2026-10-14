import * as flatbuffers from 'flatbuffers';
/**
 * Fit statistics of one fit (a bin, an object, or the whole calibration).
 */
export declare class dclFitStatistics implements flatbuffers.IUnpackableObject<dclFitStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclFitStatistics;
    static getRootAsdclFitStatistics(bb: flatbuffers.ByteBuffer, obj?: dclFitStatistics): dclFitStatistics;
    static getSizePrefixedRootAsdclFitStatistics(bb: flatbuffers.ByteBuffer, obj?: dclFitStatistics): dclFitStatistics;
    /**
     * Iterations run and whether the fit met its tolerance.
     */
    ITERATIONS(): number;
    CONVERGED(): boolean;
    /**
     * Observations available and used (after robust editing).
     */
    OBSERVATIONS(): number;
    USED(): number;
    /**
     * Parameters estimated.
     */
    PARAMETERS(): number;
    /**
     * RMS of the residuals before and after the fit, in the residual's unit
     * (log density for a density fit, m for a decay fit).
     */
    PREFIT_RMS(): number;
    POSTFIT_RMS(): number;
    /**
     * Weighted sum of squared residuals plus prior terms at the solution.
     */
    CHI_SQUARE(): number;
    static startdclFitStatistics(builder: flatbuffers.Builder): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addConverged(builder: flatbuffers.Builder, CONVERGED: boolean): void;
    static addObservations(builder: flatbuffers.Builder, OBSERVATIONS: number): void;
    static addUsed(builder: flatbuffers.Builder, USED: number): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERS: number): void;
    static addPrefitRms(builder: flatbuffers.Builder, PREFIT_RMS: number): void;
    static addPostfitRms(builder: flatbuffers.Builder, POSTFIT_RMS: number): void;
    static addChiSquare(builder: flatbuffers.Builder, CHI_SQUARE: number): void;
    static enddclFitStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclFitStatistics(builder: flatbuffers.Builder, ITERATIONS: number, CONVERGED: boolean, OBSERVATIONS: number, USED: number, PARAMETERS: number, PREFIT_RMS: number, POSTFIT_RMS: number, CHI_SQUARE: number): flatbuffers.Offset;
    unpack(): dclFitStatisticsT;
    unpackTo(_o: dclFitStatisticsT): void;
}
export declare class dclFitStatisticsT implements flatbuffers.IGeneratedObject {
    ITERATIONS: number;
    CONVERGED: boolean;
    OBSERVATIONS: number;
    USED: number;
    PARAMETERS: number;
    PREFIT_RMS: number;
    POSTFIT_RMS: number;
    CHI_SQUARE: number;
    constructor(ITERATIONS?: number, CONVERGED?: boolean, OBSERVATIONS?: number, USED?: number, PARAMETERS?: number, PREFIT_RMS?: number, POSTFIT_RMS?: number, CHI_SQUARE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclFitStatistics.d.ts.map