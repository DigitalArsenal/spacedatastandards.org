import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMPairStatistic, ERMPairStatisticT } from './ERMPairStatistic.js';
import { ERMStatePair, ERMStatePairT } from './ERMStatePair.js';
import { ermAxesSource } from './ermAxesSource.js';
/**
 * Pair statistics request or result.
 */
export declare class ERMPairStatistics implements flatbuffers.IUnpackableObject<ERMPairStatisticsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPairStatistics;
    static getRootAsERMPairStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMPairStatistics): ERMPairStatistics;
    static getSizePrefixedRootAsERMPairStatistics(bb: flatbuffers.ByteBuffer, obj?: ERMPairStatistics): ERMPairStatistics;
    AXES_FROM(): ermAxesSource;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    PAIRS(index: number, obj?: ERMStatePair): ERMStatePair | null;
    pairsLength(): number;
    STATISTICS(index: number, obj?: ERMPairStatistic): ERMPairStatistic | null;
    statisticsLength(): number;
    static startERMPairStatistics(builder: flatbuffers.Builder): void;
    static addAxesFrom(builder: flatbuffers.Builder, AXES_FROM: ermAxesSource): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static createPairsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatistics(builder: flatbuffers.Builder, STATISTICSOffset: flatbuffers.Offset): void;
    static createStatisticsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatisticsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMPairStatistics(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMPairStatisticsT;
    unpackTo(_o: ERMPairStatisticsT): void;
}
export declare class ERMPairStatisticsT implements flatbuffers.IGeneratedObject {
    AXES_FROM: ermAxesSource;
    UNITS: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    PAIRS: (ERMStatePairT)[];
    STATISTICS: (ERMPairStatisticT)[];
    constructor(AXES_FROM?: ermAxesSource, UNITS?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, PAIRS?: (ERMStatePairT)[], STATISTICS?: (ERMPairStatisticT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPairStatistics.d.ts.map