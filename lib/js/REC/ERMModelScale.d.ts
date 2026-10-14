import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
/**
 * Model-level scaling record.
 */
export declare class ERMModelScale implements flatbuffers.IUnpackableObject<ERMModelScaleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMModelScale;
    static getRootAsERMModelScale(bb: flatbuffers.ByteBuffer, obj?: ERMModelScale): ERMModelScale;
    static getSizePrefixedRootAsERMModelScale(bb: flatbuffers.ByteBuffer, obj?: ERMModelScale): ERMModelScale;
    BASIS(): string | null;
    BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Counts of the truth model.
     */
    TRUTH_COUNTS(obj?: ERMCounts): ERMCounts | null;
    /**
     * Window of the truth model, ISO 8601 interval; empty = not stated.
     */
    TRUTH_WINDOW(): string | null;
    TRUTH_WINDOW(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MINIMUM_SAMPLES(): number;
    static startERMModelScale(builder: flatbuffers.Builder): void;
    static addBasis(builder: flatbuffers.Builder, BASISOffset: flatbuffers.Offset): void;
    static addTruthCounts(builder: flatbuffers.Builder, TRUTH_COUNTSOffset: flatbuffers.Offset): void;
    static addTruthWindow(builder: flatbuffers.Builder, TRUTH_WINDOWOffset: flatbuffers.Offset): void;
    static addMinimumSamples(builder: flatbuffers.Builder, MINIMUM_SAMPLES: number): void;
    static endERMModelScale(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMModelScaleT;
    unpackTo(_o: ERMModelScaleT): void;
}
export declare class ERMModelScaleT implements flatbuffers.IGeneratedObject {
    BASIS: string | Uint8Array | null;
    TRUTH_COUNTS: ERMCountsT | null;
    TRUTH_WINDOW: string | Uint8Array | null;
    MINIMUM_SAMPLES: number;
    constructor(BASIS?: string | Uint8Array | null, TRUTH_COUNTS?: ERMCountsT | null, TRUTH_WINDOW?: string | Uint8Array | null, MINIMUM_SAMPLES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMModelScale.d.ts.map