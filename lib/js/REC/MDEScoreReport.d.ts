import * as flatbuffers from 'flatbuffers';
import { MDEScoreOptions, MDEScoreOptionsT } from './MDEScoreOptions.js';
import { MDEScoreSummary, MDEScoreSummaryT } from './MDEScoreSummary.js';
import { MDETruthMatch, MDETruthMatchT } from './MDETruthMatch.js';
import { MDEUnmatchedEvent, MDEUnmatchedEventT } from './MDEUnmatchedEvent.js';
/**
 * Result of scoring detections.
 */
export declare class MDEScoreReport implements flatbuffers.IUnpackableObject<MDEScoreReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEScoreReport;
    static getRootAsMDEScoreReport(bb: flatbuffers.ByteBuffer, obj?: MDEScoreReport): MDEScoreReport;
    static getSizePrefixedRootAsMDEScoreReport(bb: flatbuffers.ByteBuffer, obj?: MDEScoreReport): MDEScoreReport;
    OPTIONS(obj?: MDEScoreOptions): MDEScoreOptions | null;
    SUMMARY(obj?: MDEScoreSummary): MDEScoreSummary | null;
    MATCHES(index: number, obj?: MDETruthMatch): MDETruthMatch | null;
    matchesLength(): number;
    /**
     * Known maneuvers not detected (EVENT fields empty).
     */
    MISSED(index: number, obj?: MDETruthMatch): MDETruthMatch | null;
    missedLength(): number;
    UNMATCHED(index: number, obj?: MDEUnmatchedEvent): MDEUnmatchedEvent | null;
    unmatchedLength(): number;
    static startMDEScoreReport(builder: flatbuffers.Builder): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static addSummary(builder: flatbuffers.Builder, SUMMARYOffset: flatbuffers.Offset): void;
    static addMatches(builder: flatbuffers.Builder, MATCHESOffset: flatbuffers.Offset): void;
    static createMatchesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMatchesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMissed(builder: flatbuffers.Builder, MISSEDOffset: flatbuffers.Offset): void;
    static createMissedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMissedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUnmatched(builder: flatbuffers.Builder, UNMATCHEDOffset: flatbuffers.Offset): void;
    static createUnmatchedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUnmatchedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMDEScoreReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MDEScoreReportT;
    unpackTo(_o: MDEScoreReportT): void;
}
export declare class MDEScoreReportT implements flatbuffers.IGeneratedObject {
    OPTIONS: MDEScoreOptionsT | null;
    SUMMARY: MDEScoreSummaryT | null;
    MATCHES: (MDETruthMatchT)[];
    MISSED: (MDETruthMatchT)[];
    UNMATCHED: (MDEUnmatchedEventT)[];
    constructor(OPTIONS?: MDEScoreOptionsT | null, SUMMARY?: MDEScoreSummaryT | null, MATCHES?: (MDETruthMatchT)[], MISSED?: (MDETruthMatchT)[], UNMATCHED?: (MDEUnmatchedEventT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEScoreReport.d.ts.map