import * as flatbuffers from 'flatbuffers';
import { TMXRecordRef, TMXRecordRefT } from './TMXRecordRef.js';
import { tmxCertaintyLevel } from './tmxCertaintyLevel.js';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
import { tmxSeverityLevel } from './tmxSeverityLevel.js';
/**
 * Single (bucket x phenomenology) cell in the threat matrix.
 */
export declare class TMXCell implements flatbuffers.IUnpackableObject<TMXCellT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXCell;
    static getRootAsTMXCell(bb: flatbuffers.ByteBuffer, obj?: TMXCell): TMXCell;
    static getSizePrefixedRootAsTMXCell(bb: flatbuffers.ByteBuffer, obj?: TMXCell): TMXCell;
    /**
     * Target bucket identifier referencing TMXBucket.BUCKET_ID.
     */
    BUCKET_ID(): string;
    BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Phenomenology axis for this cell.
     */
    PHENOMENOLOGY(): tmxPhenomenologyKind;
    /**
     * Categorical severity tier for this cell.
     */
    SEVERITY_TIER(): tmxSeverityLevel;
    /**
     * Deterministic fixed-point severity score in basis points (0..10000).
     */
    PHENOMENOLOGY_SCORE(): number;
    /**
     * Count of unique assets exposed in this cell.
     */
    EXPOSED_ASSET_COUNT(): number;
    /**
     * Peak simultaneous exposed asset count over the window.
     */
    PEAK_SIMULTANEOUS_COUNT(): number;
    /**
     * Earliest threat onset timestamp in the window, RFC 3339 UTC.
     */
    EARLIEST_ONSET_UTC(): string | null;
    EARLIEST_ONSET_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total accumulated exposure duration in minutes.
     */
    TOTAL_EXPOSURE_MIN(): number;
    /**
     * Compact human-readable worst-case metric summary.
     */
    WORST_METRIC_SUMMARY(): string | null;
    WORST_METRIC_SUMMARY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum epistemic certainty across contributing threat inputs.
     */
    CERTAINTY_FLOOR(): tmxCertaintyLevel;
    /**
     * Underlying SDS event references supporting this cell.
     */
    EVENT_REFS(index: number, obj?: TMXRecordRef): TMXRecordRef | null;
    eventRefsLength(): number;
    static startTMXCell(builder: flatbuffers.Builder): void;
    static addBucketId(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset): void;
    static addPhenomenology(builder: flatbuffers.Builder, PHENOMENOLOGY: tmxPhenomenologyKind): void;
    static addSeverityTier(builder: flatbuffers.Builder, SEVERITY_TIER: tmxSeverityLevel): void;
    static addPhenomenologyScore(builder: flatbuffers.Builder, PHENOMENOLOGY_SCORE: number): void;
    static addExposedAssetCount(builder: flatbuffers.Builder, EXPOSED_ASSET_COUNT: number): void;
    static addPeakSimultaneousCount(builder: flatbuffers.Builder, PEAK_SIMULTANEOUS_COUNT: number): void;
    static addEarliestOnsetUtc(builder: flatbuffers.Builder, EARLIEST_ONSET_UTCOffset: flatbuffers.Offset): void;
    static addTotalExposureMin(builder: flatbuffers.Builder, TOTAL_EXPOSURE_MIN: number): void;
    static addWorstMetricSummary(builder: flatbuffers.Builder, WORST_METRIC_SUMMARYOffset: flatbuffers.Offset): void;
    static addCertaintyFloor(builder: flatbuffers.Builder, CERTAINTY_FLOOR: tmxCertaintyLevel): void;
    static addEventRefs(builder: flatbuffers.Builder, EVENT_REFSOffset: flatbuffers.Offset): void;
    static createEventRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTMXCell(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXCell(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset, PHENOMENOLOGY: tmxPhenomenologyKind, SEVERITY_TIER: tmxSeverityLevel, PHENOMENOLOGY_SCORE: number, EXPOSED_ASSET_COUNT: number, PEAK_SIMULTANEOUS_COUNT: number, EARLIEST_ONSET_UTCOffset: flatbuffers.Offset, TOTAL_EXPOSURE_MIN: number, WORST_METRIC_SUMMARYOffset: flatbuffers.Offset, CERTAINTY_FLOOR: tmxCertaintyLevel, EVENT_REFSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMXCellT;
    unpackTo(_o: TMXCellT): void;
}
export declare class TMXCellT implements flatbuffers.IGeneratedObject {
    BUCKET_ID: string | Uint8Array | null;
    PHENOMENOLOGY: tmxPhenomenologyKind;
    SEVERITY_TIER: tmxSeverityLevel;
    PHENOMENOLOGY_SCORE: number;
    EXPOSED_ASSET_COUNT: number;
    PEAK_SIMULTANEOUS_COUNT: number;
    EARLIEST_ONSET_UTC: string | Uint8Array | null;
    TOTAL_EXPOSURE_MIN: number;
    WORST_METRIC_SUMMARY: string | Uint8Array | null;
    CERTAINTY_FLOOR: tmxCertaintyLevel;
    EVENT_REFS: (TMXRecordRefT)[];
    constructor(BUCKET_ID?: string | Uint8Array | null, PHENOMENOLOGY?: tmxPhenomenologyKind, SEVERITY_TIER?: tmxSeverityLevel, PHENOMENOLOGY_SCORE?: number, EXPOSED_ASSET_COUNT?: number, PEAK_SIMULTANEOUS_COUNT?: number, EARLIEST_ONSET_UTC?: string | Uint8Array | null, TOTAL_EXPOSURE_MIN?: number, WORST_METRIC_SUMMARY?: string | Uint8Array | null, CERTAINTY_FLOOR?: tmxCertaintyLevel, EVENT_REFS?: (TMXRecordRefT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXCell.d.ts.map