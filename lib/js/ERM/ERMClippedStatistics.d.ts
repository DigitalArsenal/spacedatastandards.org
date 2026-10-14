import * as flatbuffers from 'flatbuffers';
/**
 * Statistics after clipping.
 */
export declare class ERMClippedStatistics implements flatbuffers.IUnpackableObject<ERMClippedStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMClippedStatistics;
    static getRootAsERMClippedStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMClippedStatistics): ERMClippedStatistics;
    static getSizePrefixedRootAsERMClippedStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMClippedStatistics): ERMClippedStatistics;
    K(): number;
    N(): bigint;
    FRACTION_REMOVED(): number;
    /**
     * Mean, 6 values; empty when N is 0.
     */
    MEAN(index: number): number | null;
    meanLength(): number;
    meanArray(): Float64Array | null;
    /**
     * Covariance, Lower21; empty when N < 2.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    static startERMClippedStatistics(builder: flatbuffers.Builder): void;
    static addK(builder: flatbuffers.Builder, K: number): void;
    static addN(builder: flatbuffers.Builder, N: bigint): void;
    static addFractionRemoved(builder: flatbuffers.Builder, FRACTION_REMOVED: number): void;
    static addMean(builder: flatbuffers.Builder, MEANOffset: flatbuffers.Offset): void;
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMeanVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMeanVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMClippedStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMClippedStatistics(builder: flatbuffers.Builder, K: number, N: bigint, FRACTION_REMOVED: number, MEANOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMClippedStatisticsT;
    unpackTo(_o: ERMClippedStatisticsT): void;
}
export declare class ERMClippedStatisticsT implements flatbuffers.IGeneratedObject {
    K: number;
    N: bigint;
    FRACTION_REMOVED: number;
    MEAN: (number)[];
    COVARIANCE: (number)[];
    constructor(K?: number, N?: bigint, FRACTION_REMOVED?: number, MEAN?: (number)[], COVARIANCE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMClippedStatistics.d.ts.map