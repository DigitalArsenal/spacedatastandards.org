import * as flatbuffers from 'flatbuffers';
import { ERMAccumulatorStratum, ERMAccumulatorStratumT } from './ERMAccumulatorStratum.js';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMStrataSettings, ERMStrataSettingsT } from './ERMStrataSettings.js';
import { ermErrorBasis } from './ermErrorBasis.js';
/**
 * Errors accumulated over batches; a later batch adds to it as its prior.
 */
export declare class ERMAccumulator implements flatbuffers.IUnpackableObject<ERMAccumulatorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMAccumulator;
    static getRootAsERMAccumulator(bb: flatbuffers.ByteBuffer, obj?: ERMAccumulator): ERMAccumulator;
    static getSizePrefixedRootAsERMAccumulator(bb: flatbuffers.ByteBuffer, obj?: ERMAccumulator): ERMAccumulator;
    STRATA_SETTINGS(obj?: ERMStrataSettings): ERMStrataSettings | null;
    BASIS(): ermErrorBasis;
    /**
     * Clip multiple used, 0 = none.
     */
    CLIP_K(): number;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    /**
     * The model tested against, e.g. "reference", "reference+scaled"; empty =
     * none.
     */
    COVERAGE_MODEL(): string | null;
    COVERAGE_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STRATA(index: number, obj?: ERMAccumulatorStratum): ERMAccumulatorStratum | null;
    strataLength(): number;
    static startERMAccumulator(builder: flatbuffers.Builder): void;
    static addStrataSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset): void;
    static addBasis(builder: flatbuffers.Builder, BASIS: ermErrorBasis): void;
    static addClipK(builder: flatbuffers.Builder, CLIP_K: number): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addCoverageModel(builder: flatbuffers.Builder, COVERAGE_MODELOffset: flatbuffers.Offset): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMAccumulator(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMAccumulatorT;
    unpackTo(_o: ERMAccumulatorT): void;
}
export declare class ERMAccumulatorT implements flatbuffers.IGeneratedObject {
    STRATA_SETTINGS: ERMStrataSettingsT | null;
    BASIS: ermErrorBasis;
    CLIP_K: number;
    COUNTS: ERMCountsT | null;
    COVERAGE_MODEL: string | Uint8Array | null;
    STRATA: (ERMAccumulatorStratumT)[];
    constructor(STRATA_SETTINGS?: ERMStrataSettingsT | null, BASIS?: ermErrorBasis, CLIP_K?: number, COUNTS?: ERMCountsT | null, COVERAGE_MODEL?: string | Uint8Array | null, STRATA?: (ERMAccumulatorStratumT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMAccumulator.d.ts.map