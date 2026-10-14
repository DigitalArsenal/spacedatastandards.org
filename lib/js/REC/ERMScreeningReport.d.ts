import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMScreeningDefinitions, ERMScreeningDefinitionsT } from './ERMScreeningDefinitions.js';
import { ERMScreeningGeometry, ERMScreeningGeometryT } from './ERMScreeningGeometry.js';
import { ERMScreeningSettings, ERMScreeningSettingsT } from './ERMScreeningSettings.js';
import { ERMScreeningStratum, ERMScreeningStratumT } from './ERMScreeningStratum.js';
/**
 * Scores of probabilistic, bounded-set and possibility screening rules.
 */
export declare class ERMScreeningReport implements flatbuffers.IUnpackableObject<ERMScreeningReportT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningReport;
    static getRootAsERMScreeningReport(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningReport): ERMScreeningReport;
    static getSizePrefixedRootAsERMScreeningReport(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningReport): ERMScreeningReport;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    DEFINITIONS(obj?: ERMScreeningDefinitions): ERMScreeningDefinitions | null;
    SETTINGS(obj?: ERMScreeningSettings): ERMScreeningSettings | null;
    /**
     * Over all strata, by geometry.
     */
    SUMMARY(index: number, obj?: ERMScreeningGeometry): ERMScreeningGeometry | null;
    summaryLength(): number;
    /**
     * Per stratum (empty for caller-supplied cases).
     */
    STRATA(index: number, obj?: ERMScreeningStratum): ERMScreeningStratum | null;
    strataLength(): number;
    static startERMScreeningReport(builder: flatbuffers.Builder): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addDefinitions(builder: flatbuffers.Builder, DEFINITIONSOffset: flatbuffers.Offset): void;
    static addSettings(builder: flatbuffers.Builder, SETTINGSOffset: flatbuffers.Offset): void;
    static addSummary(builder: flatbuffers.Builder, SUMMARYOffset: flatbuffers.Offset): void;
    static createSummaryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSummaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStrata(builder: flatbuffers.Builder, STRATAOffset: flatbuffers.Offset): void;
    static createStrataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStrataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMScreeningReport(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMScreeningReportT;
    unpackTo(_o: ERMScreeningReportT): void;
}
export declare class ERMScreeningReportT implements flatbuffers.IGeneratedObject {
    COUNTS: ERMCountsT | null;
    DEFINITIONS: ERMScreeningDefinitionsT | null;
    SETTINGS: ERMScreeningSettingsT | null;
    SUMMARY: (ERMScreeningGeometryT)[];
    STRATA: (ERMScreeningStratumT)[];
    constructor(COUNTS?: ERMCountsT | null, DEFINITIONS?: ERMScreeningDefinitionsT | null, SETTINGS?: ERMScreeningSettingsT | null, SUMMARY?: (ERMScreeningGeometryT)[], STRATA?: (ERMScreeningStratumT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningReport.d.ts.map