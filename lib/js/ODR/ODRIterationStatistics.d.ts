import * as flatbuffers from 'flatbuffers';
export declare class ODRIterationStatistics implements flatbuffers.IUnpackableObject<ODRIterationStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODRIterationStatistics;
    static getRootAsODRIterationStatistics(bb: flatbuffers.ByteBuffer, obj?: ODRIterationStatistics): ODRIterationStatistics;
    static getSizePrefixedRootAsODRIterationStatistics(bb: flatbuffers.ByteBuffer, obj?: ODRIterationStatistics): ODRIterationStatistics;
    ITERATION(): number;
    ACCEPTED_OBSERVATION_COUNT(): number;
    REJECTED_OBSERVATION_COUNT(): number;
    PREFIT_RMS(): number;
    POSTFIT_RMS(): number;
    WEIGHTED_RMS(): number;
    STATE_CORRECTION_NORM(): number;
    NORMAL_MATRIX_CONDITION_NUMBER(): number;
    static startODRIterationStatistics(builder: flatbuffers.Builder): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static addAcceptedObservationCount(builder: flatbuffers.Builder, ACCEPTED_OBSERVATION_COUNT: number): void;
    static addRejectedObservationCount(builder: flatbuffers.Builder, REJECTED_OBSERVATION_COUNT: number): void;
    static addPrefitRms(builder: flatbuffers.Builder, PREFIT_RMS: number): void;
    static addPostfitRms(builder: flatbuffers.Builder, POSTFIT_RMS: number): void;
    static addWeightedRms(builder: flatbuffers.Builder, WEIGHTED_RMS: number): void;
    static addStateCorrectionNorm(builder: flatbuffers.Builder, STATE_CORRECTION_NORM: number): void;
    static addNormalMatrixConditionNumber(builder: flatbuffers.Builder, NORMAL_MATRIX_CONDITION_NUMBER: number): void;
    static endODRIterationStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createODRIterationStatistics(builder: flatbuffers.Builder, ITERATION: number, ACCEPTED_OBSERVATION_COUNT: number, REJECTED_OBSERVATION_COUNT: number, PREFIT_RMS: number, POSTFIT_RMS: number, WEIGHTED_RMS: number, STATE_CORRECTION_NORM: number, NORMAL_MATRIX_CONDITION_NUMBER: number): flatbuffers.Offset;
    unpack(): ODRIterationStatisticsT;
    unpackTo(_o: ODRIterationStatisticsT): void;
}
export declare class ODRIterationStatisticsT implements flatbuffers.IGeneratedObject {
    ITERATION: number;
    ACCEPTED_OBSERVATION_COUNT: number;
    REJECTED_OBSERVATION_COUNT: number;
    PREFIT_RMS: number;
    POSTFIT_RMS: number;
    WEIGHTED_RMS: number;
    STATE_CORRECTION_NORM: number;
    NORMAL_MATRIX_CONDITION_NUMBER: number;
    constructor(ITERATION?: number, ACCEPTED_OBSERVATION_COUNT?: number, REJECTED_OBSERVATION_COUNT?: number, PREFIT_RMS?: number, POSTFIT_RMS?: number, WEIGHTED_RMS?: number, STATE_CORRECTION_NORM?: number, NORMAL_MATRIX_CONDITION_NUMBER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODRIterationStatistics.d.ts.map