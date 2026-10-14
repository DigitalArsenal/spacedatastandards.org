import * as flatbuffers from 'flatbuffers';
import { LFVRow, LFVRowT } from './LFVRow.js';
import { LFVTestReport, LFVTestReportT } from './LFVTestReport.js';
/**
 * Labelled Feature Vectors - labelled rows and, optionally, the report of a
 * test that distinguishes their classes.
 */
export declare class LFV implements flatbuffers.IUnpackableObject<LFVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFV;
    static getRootAsLFV(bb: flatbuffers.ByteBuffer, obj?: LFV): LFV;
    static getSizePrefixedRootAsLFV(bb: flatbuffers.ByteBuffer, obj?: LFV): LFV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Name of the feature set or view, e.g. "gp" (from element sets), "hpop"
     * (from propagated ephemeris).
     */
    VIEW(): string | null;
    VIEW(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Feature names, in the order of every row's VALUES.
     */
    FEATURE_NAMES(index: number): string;
    FEATURE_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    featureNamesLength(): number;
    /**
     * Unit of each feature, same order, e.g. "km", "deg", "km/day", "1";
     * empty = not stated.
     */
    FEATURE_UNITS(index: number): string;
    FEATURE_UNITS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    featureUnitsLength(): number;
    /**
     * Window of data the features were computed over, Unix milliseconds
     * [start, end); 0 = not stated.
     */
    WINDOW_START_MS(): bigint;
    WINDOW_END_MS(): bigint;
    /**
     * Fewest data points a source needed to get a row.
     */
    MIN_POINTS(): number;
    ROWS(index: number, obj?: LFVRow): LFVRow | null;
    rowsLength(): number;
    /**
     * Sources offered, reference objects compared against (the catalog),
     * and sources skipped for having too few points.
     */
    SOURCE_COUNT(): number;
    REFERENCE_COUNT(): number;
    SKIPPED_COUNT(): number;
    /**
     * Unix milliseconds this record was generated; 0 = not stated.
     */
    GENERATED_AT_MS(): bigint;
    REPORT(obj?: LFVTestReport): LFVTestReport | null;
    static startLFV(builder: flatbuffers.Builder): void;
    static addView(builder: flatbuffers.Builder, VIEWOffset: flatbuffers.Offset): void;
    static addFeatureNames(builder: flatbuffers.Builder, FEATURE_NAMESOffset: flatbuffers.Offset): void;
    static createFeatureNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeatureNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFeatureUnits(builder: flatbuffers.Builder, FEATURE_UNITSOffset: flatbuffers.Offset): void;
    static createFeatureUnitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeatureUnitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowStartMs(builder: flatbuffers.Builder, WINDOW_START_MS: bigint): void;
    static addWindowEndMs(builder: flatbuffers.Builder, WINDOW_END_MS: bigint): void;
    static addMinPoints(builder: flatbuffers.Builder, MIN_POINTS: number): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourceCount(builder: flatbuffers.Builder, SOURCE_COUNT: number): void;
    static addReferenceCount(builder: flatbuffers.Builder, REFERENCE_COUNT: number): void;
    static addSkippedCount(builder: flatbuffers.Builder, SKIPPED_COUNT: number): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static addReport(builder: flatbuffers.Builder, REPORTOffset: flatbuffers.Offset): void;
    static endLFV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLFVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLFVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LFVT;
    unpackTo(_o: LFVT): void;
}
export declare class LFVT implements flatbuffers.IGeneratedObject {
    VIEW: string | Uint8Array | null;
    FEATURE_NAMES: (string)[];
    FEATURE_UNITS: (string)[];
    WINDOW_START_MS: bigint;
    WINDOW_END_MS: bigint;
    MIN_POINTS: number;
    ROWS: (LFVRowT)[];
    SOURCE_COUNT: number;
    REFERENCE_COUNT: number;
    SKIPPED_COUNT: number;
    GENERATED_AT_MS: bigint;
    REPORT: LFVTestReportT | null;
    constructor(VIEW?: string | Uint8Array | null, FEATURE_NAMES?: (string)[], FEATURE_UNITS?: (string)[], WINDOW_START_MS?: bigint, WINDOW_END_MS?: bigint, MIN_POINTS?: number, ROWS?: (LFVRowT)[], SOURCE_COUNT?: number, REFERENCE_COUNT?: number, SKIPPED_COUNT?: number, GENERATED_AT_MS?: bigint, REPORT?: LFVTestReportT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFV.d.ts.map