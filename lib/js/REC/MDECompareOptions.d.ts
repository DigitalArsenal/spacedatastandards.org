import * as flatbuffers from 'flatbuffers';
/**
 * Settings of a comparison of ephemeris versions.
 */
export declare class MDECompareOptions implements flatbuffers.IUnpackableObject<MDECompareOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDECompareOptions;
    static getRootAsMDECompareOptions(bb: flatbuffers.ByteBuffer, obj?: MDECompareOptions): MDECompareOptions;
    static getSizePrefixedRootAsMDECompareOptions(bb: flatbuffers.ByteBuffer, obj?: MDECompareOptions): MDECompareOptions;
    /**
     * Report time, Unix ms; 0 = from the versions.
     */
    REPORT_TIME_MS(): bigint;
    /**
     * Also look for changes inside one version.
     */
    WITHIN_VERSION(): boolean;
    /**
     * Margin around a planned ignition, s.
     */
    MARGIN_S(): number;
    /**
     * The post-burn version must start this long after ignition, s.
     */
    POST_START_AFTER_S(): number;
    /**
     * Fraction of the planned change that marks EXECUTED.
     */
    EXECUTED_FRACTION(): number;
    /**
     * Fraction below which the plan is CANCELLED (<= EXECUTED_FRACTION).
     */
    CANCELLED_FRACTION(): number;
    /**
     * Semi-major axis change that flags an unplanned change, km; NaN = off.
     */
    UNPLANNED_THRESHOLD_KM(): number;
    static startMDECompareOptions(builder: flatbuffers.Builder): void;
    static addReportTimeMs(builder: flatbuffers.Builder, REPORT_TIME_MS: bigint): void;
    static addWithinVersion(builder: flatbuffers.Builder, WITHIN_VERSION: boolean): void;
    static addMarginS(builder: flatbuffers.Builder, MARGIN_S: number): void;
    static addPostStartAfterS(builder: flatbuffers.Builder, POST_START_AFTER_S: number): void;
    static addExecutedFraction(builder: flatbuffers.Builder, EXECUTED_FRACTION: number): void;
    static addCancelledFraction(builder: flatbuffers.Builder, CANCELLED_FRACTION: number): void;
    static addUnplannedThresholdKm(builder: flatbuffers.Builder, UNPLANNED_THRESHOLD_KM: number): void;
    static endMDECompareOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDECompareOptions(builder: flatbuffers.Builder, REPORT_TIME_MS: bigint, WITHIN_VERSION: boolean, MARGIN_S: number, POST_START_AFTER_S: number, EXECUTED_FRACTION: number, CANCELLED_FRACTION: number, UNPLANNED_THRESHOLD_KM: number): flatbuffers.Offset;
    unpack(): MDECompareOptionsT;
    unpackTo(_o: MDECompareOptionsT): void;
}
export declare class MDECompareOptionsT implements flatbuffers.IGeneratedObject {
    REPORT_TIME_MS: bigint;
    WITHIN_VERSION: boolean;
    MARGIN_S: number;
    POST_START_AFTER_S: number;
    EXECUTED_FRACTION: number;
    CANCELLED_FRACTION: number;
    UNPLANNED_THRESHOLD_KM: number;
    constructor(REPORT_TIME_MS?: bigint, WITHIN_VERSION?: boolean, MARGIN_S?: number, POST_START_AFTER_S?: number, EXECUTED_FRACTION?: number, CANCELLED_FRACTION?: number, UNPLANNED_THRESHOLD_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDECompareOptions.d.ts.map