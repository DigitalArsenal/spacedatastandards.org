import * as flatbuffers from 'flatbuffers';
import { cnpReduction } from './cnpReduction.js';
/**
 * One number drawn from a metric's distribution.
 */
export declare class CNPStatistic implements flatbuffers.IUnpackableObject<CNPStatisticT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CNPStatistic;
    static getRootAsCNPStatistic(bb: flatbuffers.ByteBuffer, obj?: CNPStatistic): CNPStatistic;
    static getSizePrefixedRootAsCNPStatistic(bb: flatbuffers.ByteBuffer, obj?: CNPStatistic): CNPStatistic;
    /**
     * Which reduction this number is.
     */
    STATISTIC(): cnpReduction;
    /**
     * Percentile rank in 0..100 when STATISTIC is PERCENTILE. Meaningless
     * otherwise and MUST NOT be set.
     */
    PERCENTILE_RANK(): number;
    /**
     * The number, expressed in the parent metric's UNITS.
     */
    VALUE(): number;
    static startCNPStatistic(builder: flatbuffers.Builder): void;
    static addStatistic(builder: flatbuffers.Builder, STATISTIC: cnpReduction): void;
    static addPercentileRank(builder: flatbuffers.Builder, PERCENTILE_RANK: number): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static endCNPStatistic(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCNPStatistic(builder: flatbuffers.Builder, STATISTIC: cnpReduction, PERCENTILE_RANK: number, VALUE: number): flatbuffers.Offset;
    unpack(): CNPStatisticT;
    unpackTo(_o: CNPStatisticT): void;
}
export declare class CNPStatisticT implements flatbuffers.IGeneratedObject {
    STATISTIC: cnpReduction;
    PERCENTILE_RANK: number;
    VALUE: number;
    constructor(STATISTIC?: cnpReduction, PERCENTILE_RANK?: number, VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CNPStatistic.d.ts.map