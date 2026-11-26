import * as flatbuffers from 'flatbuffers';
import { PCFGaussianPrior, PCFGaussianPriorT } from './PCFGaussianPrior.js';
import { pcfPriorForm } from './pcfPriorForm.js';
/**
 * Optional configuration parameters for orbit estimation.
 */
export declare class PCFFitPolicy implements flatbuffers.IUnpackableObject<PCFFitPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFFitPolicy;
    static getRootAsPCFFitPolicy(bb: flatbuffers.ByteBuffer, obj?: PCFFitPolicy): PCFFitPolicy;
    static getSizePrefixedRootAsPCFFitPolicy(bb: flatbuffers.ByteBuffer, obj?: PCFFitPolicy): PCFFitPolicy;
    /**
     * Optional span parameter in hours; 0 means unspecified.
     */
    DEFAULT_SPAN_HOURS(): number;
    /**
     * Optional minimum span in hours; 0 means unspecified.
     */
    MINIMUM_SPAN_HOURS(): number;
    /**
     * Optional maximum span in hours; 0 means unspecified.
     */
    MAXIMUM_SPAN_HOURS(): number;
    /**
     * Optional candidate span list in hours.
     */
    CANDIDATE_SPANS_HOURS(index: number): number | null;
    candidateSpansHoursLength(): number;
    candidateSpansHoursArray(): Float64Array | null;
    /**
     * Optional evaluation tail length in hours; 0 means unspecified.
     */
    TAIL_HOURS(): number;
    /**
     * Optional relative selection margin; 0 means unspecified.
     */
    EXTENSION_MARGIN(): number;
    /**
     * Optional holdout window length in hours.
     */
    HOLDOUT_HOURS(): number;
    /**
     * True when HOLDOUT_HOURS is explicitly provided.
     */
    HAS_HOLDOUT_HOURS(): boolean;
    /**
     * Optional eccentricity threshold; 0 means unspecified.
     */
    ECCENTRICITY_THRESHOLD(): number;
    /**
     * Optional eccentric-orbit span in hours; 0 means unspecified.
     */
    ECCENTRIC_DEFAULT_SPAN_HOURS(): number;
    /**
     * Optional eccentric-orbit relative margin; 0 means unspecified.
     */
    ECCENTRIC_EXTENSION_MARGIN(): number;
    /**
     * Optional eccentric-orbit period bound in hours; 0 means unspecified.
     */
    ECCENTRIC_MAXIMUM_PERIOD_HOURS(): number;
    /**
     * Optional maximum acceptable RMS in km; 0 means unspecified.
     */
    IMPLAUSIBLE_RMS_KM(): number;
    /**
     * Optional prior on drag parameter.
     */
    DRAG_PRIOR(obj?: PCFGaussianPrior): PCFGaussianPrior | null;
    /**
     * Optional prior on solar radiation pressure parameter.
     */
    SRP_PRIOR(obj?: PCFGaussianPrior): PCFGaussianPrior | null;
    /**
     * Optional distribution form for DRAG_PRIOR.
     */
    DRAG_PRIOR_FORM(): pcfPriorForm;
    /**
     * Optional distribution form for SRP_PRIOR.
     */
    SRP_PRIOR_FORM(): pcfPriorForm;
    /**
     * Optional space-weather horizon in days past epoch; 0 means unspecified.
     */
    WEATHER_HORIZON_DAYS(): number;
    static startPCFFitPolicy(builder: flatbuffers.Builder): void;
    static addDefaultSpanHours(builder: flatbuffers.Builder, DEFAULT_SPAN_HOURS: number): void;
    static addMinimumSpanHours(builder: flatbuffers.Builder, MINIMUM_SPAN_HOURS: number): void;
    static addMaximumSpanHours(builder: flatbuffers.Builder, MAXIMUM_SPAN_HOURS: number): void;
    static addCandidateSpansHours(builder: flatbuffers.Builder, CANDIDATE_SPANS_HOURSOffset: flatbuffers.Offset): void;
    static createCandidateSpansHoursVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCandidateSpansHoursVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCandidateSpansHoursVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTailHours(builder: flatbuffers.Builder, TAIL_HOURS: number): void;
    static addExtensionMargin(builder: flatbuffers.Builder, EXTENSION_MARGIN: number): void;
    static addHoldoutHours(builder: flatbuffers.Builder, HOLDOUT_HOURS: number): void;
    static addHasHoldoutHours(builder: flatbuffers.Builder, HAS_HOLDOUT_HOURS: boolean): void;
    static addEccentricityThreshold(builder: flatbuffers.Builder, ECCENTRICITY_THRESHOLD: number): void;
    static addEccentricDefaultSpanHours(builder: flatbuffers.Builder, ECCENTRIC_DEFAULT_SPAN_HOURS: number): void;
    static addEccentricExtensionMargin(builder: flatbuffers.Builder, ECCENTRIC_EXTENSION_MARGIN: number): void;
    static addEccentricMaximumPeriodHours(builder: flatbuffers.Builder, ECCENTRIC_MAXIMUM_PERIOD_HOURS: number): void;
    static addImplausibleRmsKm(builder: flatbuffers.Builder, IMPLAUSIBLE_RMS_KM: number): void;
    static addDragPrior(builder: flatbuffers.Builder, DRAG_PRIOROffset: flatbuffers.Offset): void;
    static addSrpPrior(builder: flatbuffers.Builder, SRP_PRIOROffset: flatbuffers.Offset): void;
    static addDragPriorForm(builder: flatbuffers.Builder, DRAG_PRIOR_FORM: pcfPriorForm): void;
    static addSrpPriorForm(builder: flatbuffers.Builder, SRP_PRIOR_FORM: pcfPriorForm): void;
    static addWeatherHorizonDays(builder: flatbuffers.Builder, WEATHER_HORIZON_DAYS: number): void;
    static endPCFFitPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCFFitPolicyT;
    unpackTo(_o: PCFFitPolicyT): void;
}
export declare class PCFFitPolicyT implements flatbuffers.IGeneratedObject {
    DEFAULT_SPAN_HOURS: number;
    MINIMUM_SPAN_HOURS: number;
    MAXIMUM_SPAN_HOURS: number;
    CANDIDATE_SPANS_HOURS: (number)[];
    TAIL_HOURS: number;
    EXTENSION_MARGIN: number;
    HOLDOUT_HOURS: number;
    HAS_HOLDOUT_HOURS: boolean;
    ECCENTRICITY_THRESHOLD: number;
    ECCENTRIC_DEFAULT_SPAN_HOURS: number;
    ECCENTRIC_EXTENSION_MARGIN: number;
    ECCENTRIC_MAXIMUM_PERIOD_HOURS: number;
    IMPLAUSIBLE_RMS_KM: number;
    DRAG_PRIOR: PCFGaussianPriorT | null;
    SRP_PRIOR: PCFGaussianPriorT | null;
    DRAG_PRIOR_FORM: pcfPriorForm;
    SRP_PRIOR_FORM: pcfPriorForm;
    WEATHER_HORIZON_DAYS: number;
    constructor(DEFAULT_SPAN_HOURS?: number, MINIMUM_SPAN_HOURS?: number, MAXIMUM_SPAN_HOURS?: number, CANDIDATE_SPANS_HOURS?: (number)[], TAIL_HOURS?: number, EXTENSION_MARGIN?: number, HOLDOUT_HOURS?: number, HAS_HOLDOUT_HOURS?: boolean, ECCENTRICITY_THRESHOLD?: number, ECCENTRIC_DEFAULT_SPAN_HOURS?: number, ECCENTRIC_EXTENSION_MARGIN?: number, ECCENTRIC_MAXIMUM_PERIOD_HOURS?: number, IMPLAUSIBLE_RMS_KM?: number, DRAG_PRIOR?: PCFGaussianPriorT | null, SRP_PRIOR?: PCFGaussianPriorT | null, DRAG_PRIOR_FORM?: pcfPriorForm, SRP_PRIOR_FORM?: pcfPriorForm, WEATHER_HORIZON_DAYS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFFitPolicy.d.ts.map