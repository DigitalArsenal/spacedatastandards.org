import * as flatbuffers from 'flatbuffers';
import { MDEObjectSpan, MDEObjectSpanT } from './MDEObjectSpan.js';
/**
 * Settings of scoring detections against known maneuvers.
 */
export declare class MDEScoreOptions implements flatbuffers.IUnpackableObject<MDEScoreOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEScoreOptions;
    static getRootAsMDEScoreOptions(bb: flatbuffers.ByteBuffer, obj?: MDEScoreOptions): MDEScoreOptions;
    static getSizePrefixedRootAsMDEScoreOptions(bb: flatbuffers.ByteBuffer, obj?: MDEScoreOptions): MDEScoreOptions;
    /**
     * A detection up to this long before a known maneuver matches, s.
     */
    BEFORE_S(): number;
    /**
     * A detection up to this long after a known maneuver matches, s.
     */
    AFTER_S(): number;
    /**
     * Delta-v bin edges for recall, increasing, m/s; empty = 0.05, 0.2, 1.0.
     */
    BINS_M_S(index: number): number | null;
    binsMSLength(): number;
    binsMSArray(): Float64Array | null;
    /**
     * Spans where an unmatched detection is explained (not a false alarm).
     */
    EXPLAINED(index: number, obj?: MDEObjectSpan): MDEObjectSpan | null;
    explainedLength(): number;
    /**
     * Spans where truth is complete (false alarms count only here).
     */
    ASSESSED(index: number, obj?: MDEObjectSpan): MDEObjectSpan | null;
    assessedLength(): number;
    /**
     * Spans of observation of each object (object-years).
     */
    SPANS(index: number, obj?: MDEObjectSpan): MDEObjectSpan | null;
    spansLength(): number;
    static startMDEScoreOptions(builder: flatbuffers.Builder): void;
    static addBeforeS(builder: flatbuffers.Builder, BEFORE_S: number): void;
    static addAfterS(builder: flatbuffers.Builder, AFTER_S: number): void;
    static addBinsMS(builder: flatbuffers.Builder, BINS_M_SOffset: flatbuffers.Offset): void;
    static createBinsMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBinsMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBinsMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExplained(builder: flatbuffers.Builder, EXPLAINEDOffset: flatbuffers.Offset): void;
    static createExplainedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExplainedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssessed(builder: flatbuffers.Builder, ASSESSEDOffset: flatbuffers.Offset): void;
    static createAssessedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssessedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpans(builder: flatbuffers.Builder, SPANSOffset: flatbuffers.Offset): void;
    static createSpansVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpansVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMDEScoreOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEScoreOptions(builder: flatbuffers.Builder, BEFORE_S: number, AFTER_S: number, BINS_M_SOffset: flatbuffers.Offset, EXPLAINEDOffset: flatbuffers.Offset, ASSESSEDOffset: flatbuffers.Offset, SPANSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDEScoreOptionsT;
    unpackTo(_o: MDEScoreOptionsT): void;
}
export declare class MDEScoreOptionsT implements flatbuffers.IGeneratedObject {
    BEFORE_S: number;
    AFTER_S: number;
    BINS_M_S: (number)[];
    EXPLAINED: (MDEObjectSpanT)[];
    ASSESSED: (MDEObjectSpanT)[];
    SPANS: (MDEObjectSpanT)[];
    constructor(BEFORE_S?: number, AFTER_S?: number, BINS_M_S?: (number)[], EXPLAINED?: (MDEObjectSpanT)[], ASSESSED?: (MDEObjectSpanT)[], SPANS?: (MDEObjectSpanT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEScoreOptions.d.ts.map