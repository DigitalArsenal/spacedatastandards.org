import * as flatbuffers from 'flatbuffers';
import { ERMCoverageTally, ERMCoverageTallyT } from './ERMCoverageTally.js';
import { ERMHistogram, ERMHistogramT } from './ERMHistogram.js';
import { ERMMoments, ERMMomentsT } from './ERMMoments.js';
/**
 * Accumulated errors of one stratum.
 */
export declare class ERMAccumulatorStratum implements flatbuffers.IUnpackableObject<ERMAccumulatorStratumT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAccumulatorStratum;
    static getRootAsERMAccumulatorStratum(bb: flatbuffers.ByteBuffer, obj?: ERMAccumulatorStratum): ERMAccumulatorStratum;
    static getSizePrefixedRootAsERMAccumulatorStratum(bb: flatbuffers.ByteBuffer, obj?: ERMAccumulatorStratum): ERMAccumulatorStratum;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    MOMENTS(obj?: ERMMoments): ERMMoments | null;
    /**
     * One per component (6).
     */
    HISTOGRAMS(index: number, obj?: ERMHistogram): ERMHistogram | null;
    histogramsLength(): number;
    /**
     * Moments after clipping (when clipping).
     */
    CLIPPED(obj?: ERMMoments): ERMMoments | null;
    /**
     * Realism tally (when a model is tested).
     */
    COVERAGE(obj?: ERMCoverageTally): ERMCoverageTally | null;
    static startERMAccumulatorStratum(builder: flatbuffers.Builder): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addMoments(builder: flatbuffers.Builder, MOMENTSOffset: flatbuffers.Offset): void;
    static addHistograms(builder: flatbuffers.Builder, HISTOGRAMSOffset: flatbuffers.Offset): void;
    static createHistogramsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHistogramsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClipped(builder: flatbuffers.Builder, CLIPPEDOffset: flatbuffers.Offset): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static endERMAccumulatorStratum(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMAccumulatorStratumT;
    unpackTo(_o: ERMAccumulatorStratumT): void;
}
export declare class ERMAccumulatorStratumT implements flatbuffers.IGeneratedObject {
    REGIME_INDEX: number;
    AGE_INDEX: number;
    MOMENTS: ERMMomentsT | null;
    HISTOGRAMS: (ERMHistogramT)[];
    CLIPPED: ERMMomentsT | null;
    COVERAGE: ERMCoverageTallyT | null;
    constructor(REGIME_INDEX?: number, AGE_INDEX?: number, MOMENTS?: ERMMomentsT | null, HISTOGRAMS?: (ERMHistogramT)[], CLIPPED?: ERMMomentsT | null, COVERAGE?: ERMCoverageTallyT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAccumulatorStratum.d.ts.map