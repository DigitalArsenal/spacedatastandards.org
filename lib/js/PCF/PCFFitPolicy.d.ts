import * as flatbuffers from 'flatbuffers';
import { PCFGaussianPrior, PCFGaussianPriorT } from './PCFGaussianPrior.js';
import { pcfPriorForm } from './pcfPriorForm.js';
/**
 * Fit policy: how long an arc a fit uses, how that is validated, and what a
 * fit refuses.
 */
export declare class PCFFitPolicy implements flatbuffers.IUnpackableObject<PCFFitPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFFitPolicy;
    static getRootAsPCFFitPolicy(bb: flatbuffers.ByteBuffer, obj?: PCFFitPolicy): PCFFitPolicy;
    static getSizePrefixedRootAsPCFFitPolicy(bb: flatbuffers.ByteBuffer, obj?: PCFFitPolicy): PCFFitPolicy;
    /**
     * Fit span used when the span rule is not run, hours. Default 48.
     */
    DEFAULT_SPAN_HOURS(): number;
    /**
     * Shortest span a fit may take, hours. Default 24.
     */
    MINIMUM_SPAN_HOURS(): number;
    /**
     * Longest span a fit may take, hours. Default 120.
     */
    MAXIMUM_SPAN_HOURS(): number;
    /**
     * Spans the extension rule scores, ascending, hours, each within
     * [MINIMUM_SPAN_HOURS, MAXIMUM_SPAN_HOURS]. Empty: 48, 72 and 120; with
     * 24 in front when the eccentricity exceeds ECCENTRICITY_THRESHOLD.
     */
    CANDIDATE_SPANS_HOURS(index: number): number | null;
    candidateSpansHoursLength(): number;
    candidateSpansHoursArray(): Float64Array | null;
    /**
     * Validation tail: each candidate is fitted to the data before the latest
     * TAIL_HOURS and scored on that tail, hours. Default 24.
     */
    TAIL_HOURS(): number;
    /**
     * Extension rule: a longer candidate is taken only when its tail error is
     * at most this fraction of the best shorter candidate's. Default 0.9.
     */
    EXTENSION_MARGIN(): number;
    /**
     * Hours held out at the end of the data and reported as error growth; the
     * fit then ends HOLDOUT_HOURS before the data does. Absent, the data
     * block's own useable stop time decides.
     */
    HOLDOUT_HOURS(): number;
    /**
     * True when HOLDOUT_HOURS carries a value; false means absent.
     */
    HAS_HOLDOUT_HOURS(): boolean;
    /**
     * Eccentricity above which the eccentric-orbit rule applies. Default 0.5.
     */
    ECCENTRICITY_THRESHOLD(): number;
    /**
     * Eccentric orbits: the default span, hours. Default 24.
     */
    ECCENTRIC_DEFAULT_SPAN_HOURS(): number;
    /**
     * Eccentric orbits: EXTENSION_MARGIN. Default 0.7.
     */
    ECCENTRIC_EXTENSION_MARGIN(): number;
    /**
     * Eccentric orbits: no candidate longer than this is tried once the orbital
     * period passes it, hours. Default 36.
     */
    ECCENTRIC_MAXIMUM_PERIOD_HOURS(): number;
    /**
     * A fit whose RMS passes this is refused as fit-implausible, km. Default
     * 100.
     */
    IMPLAUSIBLE_RMS_KM(): number;
    /**
     * Prior on B_eff, the signed drag area-to-mass ratio Cd*A/m, m2/kg. Absent
     * or without sigma: mean 0, sigma 0.05.
     */
    DRAG_PRIOR(obj?: PCFGaussianPrior): PCFGaussianPrior | null;
    /**
     * Prior on AGOM, the radiation-pressure area-to-mass ratio Cr*A/m, m2/kg.
     * Absent or without sigma: mean 0, sigma 0.05.
     */
    SRP_PRIOR(obj?: PCFGaussianPrior): PCFGaussianPrior | null;
    /**
     * The form of DRAG_PRIOR. Default GAUSSIAN_SIGNED. LOG_NORMAL: the fit
     * estimates ln B_eff, so B_eff is never <= 0; DRAG_PRIOR is required, its
     * MEAN the median of B_eff (> 0, m2/kg) and its SIGMA the standard deviation
     * of ln B_eff.
     */
    DRAG_PRIOR_FORM(): pcfPriorForm;
    /**
     * The form of SRP_PRIOR. Default GAUSSIAN_SIGNED. LOG_NORMAL: the fit
     * estimates ln AGOM, so AGOM is never <= 0; SRP_PRIOR is required, its MEAN
     * the median of AGOM (> 0, m2/kg) and its SIGMA the standard deviation of
     * ln AGOM.
     */
    SRP_PRIOR_FORM(): pcfPriorForm;
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
    constructor(DEFAULT_SPAN_HOURS?: number, MINIMUM_SPAN_HOURS?: number, MAXIMUM_SPAN_HOURS?: number, CANDIDATE_SPANS_HOURS?: (number)[], TAIL_HOURS?: number, EXTENSION_MARGIN?: number, HOLDOUT_HOURS?: number, HAS_HOLDOUT_HOURS?: boolean, ECCENTRICITY_THRESHOLD?: number, ECCENTRIC_DEFAULT_SPAN_HOURS?: number, ECCENTRIC_EXTENSION_MARGIN?: number, ECCENTRIC_MAXIMUM_PERIOD_HOURS?: number, IMPLAUSIBLE_RMS_KM?: number, DRAG_PRIOR?: PCFGaussianPriorT | null, SRP_PRIOR?: PCFGaussianPriorT | null, DRAG_PRIOR_FORM?: pcfPriorForm, SRP_PRIOR_FORM?: pcfPriorForm);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFFitPolicy.d.ts.map