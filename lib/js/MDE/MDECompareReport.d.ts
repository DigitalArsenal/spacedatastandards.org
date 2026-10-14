import * as flatbuffers from 'flatbuffers';
import { MDECompareOptions, MDECompareOptionsT } from './MDECompareOptions.js';
import { MDEObjectComparison, MDEObjectComparisonT } from './MDEObjectComparison.js';
/**
 * Result of comparing ephemeris versions.
 */
export declare class MDECompareReport implements flatbuffers.IUnpackableObject<MDECompareReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDECompareReport;
    static getRootAsMDECompareReport(bb: flatbuffers.ByteBuffer, obj?: MDECompareReport): MDECompareReport;
    static getSizePrefixedRootAsMDECompareReport(bb: flatbuffers.ByteBuffer, obj?: MDECompareReport): MDECompareReport;
    OPTIONS(obj?: MDECompareOptions): MDECompareOptions | null;
    OBJECTS(index: number, obj?: MDEObjectComparison): MDEObjectComparison | null;
    objectsLength(): number;
    EXECUTED_COUNT(): number;
    CANCELLED_COUNT(): number;
    UNDECIDED_COUNT(): number;
    UNPLANNED_CHANGE_COUNT(): number;
    static startMDECompareReport(builder: flatbuffers.Builder): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExecutedCount(builder: flatbuffers.Builder, EXECUTED_COUNT: number): void;
    static addCancelledCount(builder: flatbuffers.Builder, CANCELLED_COUNT: number): void;
    static addUndecidedCount(builder: flatbuffers.Builder, UNDECIDED_COUNT: number): void;
    static addUnplannedChangeCount(builder: flatbuffers.Builder, UNPLANNED_CHANGE_COUNT: number): void;
    static endMDECompareReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDECompareReport(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset, OBJECTSOffset: flatbuffers.Offset, EXECUTED_COUNT: number, CANCELLED_COUNT: number, UNDECIDED_COUNT: number, UNPLANNED_CHANGE_COUNT: number): flatbuffers.Offset;
    unpack(): MDECompareReportT;
    unpackTo(_o: MDECompareReportT): void;
}
export declare class MDECompareReportT implements flatbuffers.IGeneratedObject {
    OPTIONS: MDECompareOptionsT | null;
    OBJECTS: (MDEObjectComparisonT)[];
    EXECUTED_COUNT: number;
    CANCELLED_COUNT: number;
    UNDECIDED_COUNT: number;
    UNPLANNED_CHANGE_COUNT: number;
    constructor(OPTIONS?: MDECompareOptionsT | null, OBJECTS?: (MDEObjectComparisonT)[], EXECUTED_COUNT?: number, CANCELLED_COUNT?: number, UNDECIDED_COUNT?: number, UNPLANNED_CHANGE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDECompareReport.d.ts.map