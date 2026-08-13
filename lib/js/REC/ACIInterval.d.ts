import * as flatbuffers from 'flatbuffers';
import { ACIBestServer, ACIBestServerT } from './ACIBestServer.js';
import { ACIHandover, ACIHandoverT } from './ACIHandover.js';
import { aciIntervalKind } from './aciIntervalKind.js';
import { rflBudgetTerm } from './rflBudgetTerm.js';
import { rflComparison } from './rflComparison.js';
import { rflConstraint } from './rflConstraint.js';
/**
 * One interval.
 */
export declare class ACIInterval implements flatbuffers.IUnpackableObject<ACIIntervalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACIInterval;
    static getRootAsACIInterval(bb: flatbuffers.ByteBuffer, obj?: ACIInterval): ACIInterval;
    static getSizePrefixedRootAsACIInterval(bb: flatbuffers.ByteBuffer, obj?: ACIInterval): ACIInterval;
    /**
     * Producer-stable identifier of this interval.
     */
    INTERVAL_ID(): string;
    INTERVAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    INTERVAL_KIND(): aciIntervalKind;
    /**
     * `$RFL.RFLLink.LINK_ID` this interval belongs to.
     */
    LINK_ID(): string | null;
    LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Endpoints, joined from the same `$RFL` set.
     */
    TRANSMIT_ENDPOINT_ID(): string | null;
    TRANSMIT_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RECEIVE_ENDPOINT_ID(): string | null;
    RECEIVE_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Acquisition of signal, seconds since 1970-01-01T00:00:00 in the record's
     * TIME_SYSTEM. An interval with no start is not an interval: a producer that
     * cannot state it MUST NOT emit the entry. FlatBuffers cannot mark a scalar
     * required, so this is enforced by the producer, not by the wire.
     */
    ACQUISITION_TIME(): number;
    /**
     * Loss of signal, same encoding. NaN means the interval was still open at
     * WINDOW_STOP and was NOT truncated to the window — a consumer must be able
     * to tell an open pass from one that ended exactly at the boundary.
     */
    LOSS_TIME(): number;
    /**
     * Duration in seconds. Published rather than derived so a truncated or
     * open-ended interval still states the span it actually covers.
     */
    DURATION_S(): number;
    /**
     * Sub-interval over which the threshold was met, when it is narrower than
     * ACQUISITION_TIME..LOSS_TIME. Absent when the whole interval met it or
     * when no threshold was evaluated.
     */
    THRESHOLD_SATISFIED_START(): number;
    THRESHOLD_SATISFIED_STOP(): number;
    /**
     * The requirement this interval is stated against. A margin without these
     * is a margin against nothing.
     */
    THRESHOLD_TERM(): rflBudgetTerm;
    THRESHOLD_VALUE(): number;
    THRESHOLD_UNITS(): string | null;
    THRESHOLD_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    THRESHOLD_COMPARISON(): rflComparison;
    /**
     * Margin statistics across the interval, dB.
     */
    MARGIN_MINIMUM_DB(): number;
    MARGIN_MEAN_DB(): number;
    MARGIN_MAXIMUM_DB(): number;
    /**
     * Epoch of MARGIN_MINIMUM_DB, same encoding as ACQUISITION_TIME. The worst
     * instant of a pass is an operational fact, not a statistic.
     */
    MARGIN_MINIMUM_AT(): number;
    /**
     * Geometry extremes across the interval.
     */
    ELEVATION_MAXIMUM_DEG(): number;
    ELEVATION_AT_ACQUISITION_DEG(): number;
    ELEVATION_AT_LOSS_DEG(): number;
    RANGE_MINIMUM_M(): number;
    /**
     * Data the interval could carry, bits. Bits, not bytes and not megabits:
     * the rate columns of `$RFL` are bits per second.
     */
    DATA_VOLUME_BITS(): number;
    MEAN_DATA_RATE_BPS(): number;
    PEAK_DATA_RATE_BPS(): number;
    /**
     * The condition that bound this interval.
     */
    LIMITING_CONSTRAINT(): rflConstraint;
    /**
     * Verbatim description, required when LIMITING_CONSTRAINT is OTHER.
     */
    LIMITING_CONSTRAINT_NOTE(): string | null;
    LIMITING_CONSTRAINT_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch at which LIMITING_CONSTRAINT bound, same encoding as
     * ACQUISITION_TIME.
     */
    LIMITING_CONSTRAINT_AT(): number;
    /**
     * Outages nested inside this interval.
     */
    OUTAGE_COUNT(): number;
    OUTAGE_TOTAL_S(): number;
    OUTAGE_LONGEST_S(): number;
    /**
     * Fraction of the interval during which the threshold was met [0-1].
     */
    AVAILABILITY_FRACTION(): number;
    /**
     * Best server across this interval.
     */
    BEST_SERVER(obj?: ACIBestServer): ACIBestServer | null;
    /**
     * Handover detail, when INTERVAL_KIND is HANDOVER.
     */
    HANDOVER(obj?: ACIHandover): ACIHandover | null;
    /**
     * Join back to the samples this interval was derived from: the inclusive
     * index range into the `$RFL` sample arrays named by ACI.RFL_ID.
     */
    RFL_SAMPLE_FIRST_INDEX(): number;
    RFL_SAMPLE_LAST_INDEX(): number;
    /**
     * Number of samples that contributed.
     */
    SAMPLE_COUNT(): number;
    static startACIInterval(builder: flatbuffers.Builder): void;
    static addIntervalId(builder: flatbuffers.Builder, INTERVAL_IDOffset: flatbuffers.Offset): void;
    static addIntervalKind(builder: flatbuffers.Builder, INTERVAL_KIND: aciIntervalKind): void;
    static addLinkId(builder: flatbuffers.Builder, LINK_IDOffset: flatbuffers.Offset): void;
    static addTransmitEndpointId(builder: flatbuffers.Builder, TRANSMIT_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addReceiveEndpointId(builder: flatbuffers.Builder, RECEIVE_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addAcquisitionTime(builder: flatbuffers.Builder, ACQUISITION_TIME: number): void;
    static addLossTime(builder: flatbuffers.Builder, LOSS_TIME: number): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addThresholdSatisfiedStart(builder: flatbuffers.Builder, THRESHOLD_SATISFIED_START: number): void;
    static addThresholdSatisfiedStop(builder: flatbuffers.Builder, THRESHOLD_SATISFIED_STOP: number): void;
    static addThresholdTerm(builder: flatbuffers.Builder, THRESHOLD_TERM: rflBudgetTerm): void;
    static addThresholdValue(builder: flatbuffers.Builder, THRESHOLD_VALUE: number): void;
    static addThresholdUnits(builder: flatbuffers.Builder, THRESHOLD_UNITSOffset: flatbuffers.Offset): void;
    static addThresholdComparison(builder: flatbuffers.Builder, THRESHOLD_COMPARISON: rflComparison): void;
    static addMarginMinimumDb(builder: flatbuffers.Builder, MARGIN_MINIMUM_DB: number): void;
    static addMarginMeanDb(builder: flatbuffers.Builder, MARGIN_MEAN_DB: number): void;
    static addMarginMaximumDb(builder: flatbuffers.Builder, MARGIN_MAXIMUM_DB: number): void;
    static addMarginMinimumAt(builder: flatbuffers.Builder, MARGIN_MINIMUM_AT: number): void;
    static addElevationMaximumDeg(builder: flatbuffers.Builder, ELEVATION_MAXIMUM_DEG: number): void;
    static addElevationAtAcquisitionDeg(builder: flatbuffers.Builder, ELEVATION_AT_ACQUISITION_DEG: number): void;
    static addElevationAtLossDeg(builder: flatbuffers.Builder, ELEVATION_AT_LOSS_DEG: number): void;
    static addRangeMinimumM(builder: flatbuffers.Builder, RANGE_MINIMUM_M: number): void;
    static addDataVolumeBits(builder: flatbuffers.Builder, DATA_VOLUME_BITS: number): void;
    static addMeanDataRateBps(builder: flatbuffers.Builder, MEAN_DATA_RATE_BPS: number): void;
    static addPeakDataRateBps(builder: flatbuffers.Builder, PEAK_DATA_RATE_BPS: number): void;
    static addLimitingConstraint(builder: flatbuffers.Builder, LIMITING_CONSTRAINT: rflConstraint): void;
    static addLimitingConstraintNote(builder: flatbuffers.Builder, LIMITING_CONSTRAINT_NOTEOffset: flatbuffers.Offset): void;
    static addLimitingConstraintAt(builder: flatbuffers.Builder, LIMITING_CONSTRAINT_AT: number): void;
    static addOutageCount(builder: flatbuffers.Builder, OUTAGE_COUNT: number): void;
    static addOutageTotalS(builder: flatbuffers.Builder, OUTAGE_TOTAL_S: number): void;
    static addOutageLongestS(builder: flatbuffers.Builder, OUTAGE_LONGEST_S: number): void;
    static addAvailabilityFraction(builder: flatbuffers.Builder, AVAILABILITY_FRACTION: number): void;
    static addBestServer(builder: flatbuffers.Builder, BEST_SERVEROffset: flatbuffers.Offset): void;
    static addHandover(builder: flatbuffers.Builder, HANDOVEROffset: flatbuffers.Offset): void;
    static addRflSampleFirstIndex(builder: flatbuffers.Builder, RFL_SAMPLE_FIRST_INDEX: number): void;
    static addRflSampleLastIndex(builder: flatbuffers.Builder, RFL_SAMPLE_LAST_INDEX: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static endACIInterval(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ACIIntervalT;
    unpackTo(_o: ACIIntervalT): void;
}
export declare class ACIIntervalT implements flatbuffers.IGeneratedObject {
    INTERVAL_ID: string | Uint8Array | null;
    INTERVAL_KIND: aciIntervalKind;
    LINK_ID: string | Uint8Array | null;
    TRANSMIT_ENDPOINT_ID: string | Uint8Array | null;
    RECEIVE_ENDPOINT_ID: string | Uint8Array | null;
    ACQUISITION_TIME: number;
    LOSS_TIME: number;
    DURATION_S: number;
    THRESHOLD_SATISFIED_START: number;
    THRESHOLD_SATISFIED_STOP: number;
    THRESHOLD_TERM: rflBudgetTerm;
    THRESHOLD_VALUE: number;
    THRESHOLD_UNITS: string | Uint8Array | null;
    THRESHOLD_COMPARISON: rflComparison;
    MARGIN_MINIMUM_DB: number;
    MARGIN_MEAN_DB: number;
    MARGIN_MAXIMUM_DB: number;
    MARGIN_MINIMUM_AT: number;
    ELEVATION_MAXIMUM_DEG: number;
    ELEVATION_AT_ACQUISITION_DEG: number;
    ELEVATION_AT_LOSS_DEG: number;
    RANGE_MINIMUM_M: number;
    DATA_VOLUME_BITS: number;
    MEAN_DATA_RATE_BPS: number;
    PEAK_DATA_RATE_BPS: number;
    LIMITING_CONSTRAINT: rflConstraint;
    LIMITING_CONSTRAINT_NOTE: string | Uint8Array | null;
    LIMITING_CONSTRAINT_AT: number;
    OUTAGE_COUNT: number;
    OUTAGE_TOTAL_S: number;
    OUTAGE_LONGEST_S: number;
    AVAILABILITY_FRACTION: number;
    BEST_SERVER: ACIBestServerT | null;
    HANDOVER: ACIHandoverT | null;
    RFL_SAMPLE_FIRST_INDEX: number;
    RFL_SAMPLE_LAST_INDEX: number;
    SAMPLE_COUNT: number;
    constructor(INTERVAL_ID?: string | Uint8Array | null, INTERVAL_KIND?: aciIntervalKind, LINK_ID?: string | Uint8Array | null, TRANSMIT_ENDPOINT_ID?: string | Uint8Array | null, RECEIVE_ENDPOINT_ID?: string | Uint8Array | null, ACQUISITION_TIME?: number, LOSS_TIME?: number, DURATION_S?: number, THRESHOLD_SATISFIED_START?: number, THRESHOLD_SATISFIED_STOP?: number, THRESHOLD_TERM?: rflBudgetTerm, THRESHOLD_VALUE?: number, THRESHOLD_UNITS?: string | Uint8Array | null, THRESHOLD_COMPARISON?: rflComparison, MARGIN_MINIMUM_DB?: number, MARGIN_MEAN_DB?: number, MARGIN_MAXIMUM_DB?: number, MARGIN_MINIMUM_AT?: number, ELEVATION_MAXIMUM_DEG?: number, ELEVATION_AT_ACQUISITION_DEG?: number, ELEVATION_AT_LOSS_DEG?: number, RANGE_MINIMUM_M?: number, DATA_VOLUME_BITS?: number, MEAN_DATA_RATE_BPS?: number, PEAK_DATA_RATE_BPS?: number, LIMITING_CONSTRAINT?: rflConstraint, LIMITING_CONSTRAINT_NOTE?: string | Uint8Array | null, LIMITING_CONSTRAINT_AT?: number, OUTAGE_COUNT?: number, OUTAGE_TOTAL_S?: number, OUTAGE_LONGEST_S?: number, AVAILABILITY_FRACTION?: number, BEST_SERVER?: ACIBestServerT | null, HANDOVER?: ACIHandoverT | null, RFL_SAMPLE_FIRST_INDEX?: number, RFL_SAMPLE_LAST_INDEX?: number, SAMPLE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACIInterval.d.ts.map