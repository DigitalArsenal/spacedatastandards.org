import * as flatbuffers from 'flatbuffers';
import { MDECompareOptions, MDECompareOptionsT } from './MDECompareOptions.js';
import { MDECompareReport, MDECompareReportT } from './MDECompareReport.js';
import { MDEDetectOptions, MDEDetectOptionsT } from './MDEDetectOptions.js';
import { MDEDetectReport, MDEDetectReportT } from './MDEDetectReport.js';
import { MDEScoreOptions, MDEScoreOptionsT } from './MDEScoreOptions.js';
import { MDEScoreReport, MDEScoreReportT } from './MDEScoreReport.js';
/**
 * Maneuver Detection Evidence - exactly one arm is set.
 */
export declare class MDE implements flatbuffers.IUnpackableObject<MDET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDE;
    static getRootAsMDE(bb: flatbuffers.ByteBuffer, obj?: MDE): MDE;
    static getSizePrefixedRootAsMDE(bb: flatbuffers.ByteBuffer, obj?: MDE): MDE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    DETECT_OPTIONS(obj?: MDEDetectOptions): MDEDetectOptions | null;
    DETECT_REPORT(obj?: MDEDetectReport): MDEDetectReport | null;
    COMPARE_OPTIONS(obj?: MDECompareOptions): MDECompareOptions | null;
    COMPARE_REPORT(obj?: MDECompareReport): MDECompareReport | null;
    SCORE_OPTIONS(obj?: MDEScoreOptions): MDEScoreOptions | null;
    SCORE_REPORT(obj?: MDEScoreReport): MDEScoreReport | null;
    static startMDE(builder: flatbuffers.Builder): void;
    static addDetectOptions(builder: flatbuffers.Builder, DETECT_OPTIONSOffset: flatbuffers.Offset): void;
    static addDetectReport(builder: flatbuffers.Builder, DETECT_REPORTOffset: flatbuffers.Offset): void;
    static addCompareOptions(builder: flatbuffers.Builder, COMPARE_OPTIONSOffset: flatbuffers.Offset): void;
    static addCompareReport(builder: flatbuffers.Builder, COMPARE_REPORTOffset: flatbuffers.Offset): void;
    static addScoreOptions(builder: flatbuffers.Builder, SCORE_OPTIONSOffset: flatbuffers.Offset): void;
    static addScoreReport(builder: flatbuffers.Builder, SCORE_REPORTOffset: flatbuffers.Offset): void;
    static endMDE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMDEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMDEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MDET;
    unpackTo(_o: MDET): void;
}
export declare class MDET implements flatbuffers.IGeneratedObject {
    DETECT_OPTIONS: MDEDetectOptionsT | null;
    DETECT_REPORT: MDEDetectReportT | null;
    COMPARE_OPTIONS: MDECompareOptionsT | null;
    COMPARE_REPORT: MDECompareReportT | null;
    SCORE_OPTIONS: MDEScoreOptionsT | null;
    SCORE_REPORT: MDEScoreReportT | null;
    constructor(DETECT_OPTIONS?: MDEDetectOptionsT | null, DETECT_REPORT?: MDEDetectReportT | null, COMPARE_OPTIONS?: MDECompareOptionsT | null, COMPARE_REPORT?: MDECompareReportT | null, SCORE_OPTIONS?: MDEScoreOptionsT | null, SCORE_REPORT?: MDEScoreReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDE.d.ts.map