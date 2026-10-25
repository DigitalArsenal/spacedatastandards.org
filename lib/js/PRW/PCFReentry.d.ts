import * as flatbuffers from 'flatbuffers';
import { pcfReentryWindowMethod } from './pcfReentryWindowMethod.js';
/**
 * Reentry: where the averaged theory hands off to osculating integration,
 * where the trajectory ends, and the width of the reentry window.
 */
export declare class PCFReentry implements flatbuffers.IUnpackableObject<PCFReentryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFReentry;
    static getRootAsPCFReentry(bb: flatbuffers.ByteBuffer, obj?: PCFReentry): PCFReentry;
    static getSizePrefixedRootAsPCFReentry(bb: flatbuffers.ByteBuffer, obj?: PCFReentry): PCFReentry;
    /**
     * Altitude at which the trajectory ends as reentered, km. Default 80.
     */
    ALTITUDE_KM(): number;
    /**
     * Hand-off when the perigee altitude falls below this, km. Default 180.
     */
    HANDOFF_PERIGEE_ALTITUDE_KM(): number;
    /**
     * Hand-off when the decay over one step, 4 pi |da/dt| / (n H), passes this
     * fraction of the density scale height H. Default 0.05.
     */
    HANDOFF_DECAY_RATIO(): number;
    /**
     * Hand-off when the eccentricity collapses by more than this fraction of
     * a e per revolution, with the eccentricity above
     * HANDOFF_MINIMUM_ECCENTRICITY. Default 0.01.
     */
    HANDOFF_ECCENTRICITY_COLLAPSE(): number;
    /**
     * Eccentricity above which the collapse test applies. Default 0.01.
     */
    HANDOFF_MINIMUM_ECCENTRICITY(): number;
    /**
     * Spacing of the nodes the hand-off tests are evaluated at, minutes.
     * Default 30.
     */
    NODE_STEP_MINUTES(): number;
    /**
     * Longest look-ahead for a hand-off or reentry, days. Default 120.
     */
    HORIZON_DAYS(): number;
    /**
     * How the reentry window is computed. Default LINEAR.
     */
    WINDOW_METHOD(): pcfReentryWindowMethod;
    /**
     * Fractional 1-sigma density error of the window. Default 0.15.
     */
    WINDOW_DENSITY_SIGMA(): number;
    /**
     * Correlation time of the density error, days. Default 2.
     */
    WINDOW_CORRELATION_DAYS(): number;
    /**
     * Fractional 1-sigma error of the ballistic coefficient. Default 0.05.
     */
    WINDOW_BALLISTIC_SIGMA(): number;
    /**
     * Step of the osculating integration after the hand-off, seconds. Default
     * 10.
     */
    OSCULATING_STEP_SECONDS(): number;
    /**
     * Hand-off when the along-track sawtooth of an eccentric orbit passes this,
     * km: drag acts mostly in the perigee pass, so the osculating semi-major axis
     * steps once per revolution while the averaged theory ramps, and the
     * along-track difference spans (3 pi / 8) |da/dt| (2 pi / n) peak to peak.
     * Applies with the eccentricity above HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY.
     * Default 0.5.
     */
    HANDOFF_SAWTOOTH_KM(): number;
    /**
     * Eccentricity above which the sawtooth test applies. Default 0.02.
     */
    HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY(): number;
    static startPCFReentry(builder: flatbuffers.Builder): void;
    static addAltitudeKm(builder: flatbuffers.Builder, ALTITUDE_KM: number): void;
    static addHandoffPerigeeAltitudeKm(builder: flatbuffers.Builder, HANDOFF_PERIGEE_ALTITUDE_KM: number): void;
    static addHandoffDecayRatio(builder: flatbuffers.Builder, HANDOFF_DECAY_RATIO: number): void;
    static addHandoffEccentricityCollapse(builder: flatbuffers.Builder, HANDOFF_ECCENTRICITY_COLLAPSE: number): void;
    static addHandoffMinimumEccentricity(builder: flatbuffers.Builder, HANDOFF_MINIMUM_ECCENTRICITY: number): void;
    static addNodeStepMinutes(builder: flatbuffers.Builder, NODE_STEP_MINUTES: number): void;
    static addHorizonDays(builder: flatbuffers.Builder, HORIZON_DAYS: number): void;
    static addWindowMethod(builder: flatbuffers.Builder, WINDOW_METHOD: pcfReentryWindowMethod): void;
    static addWindowDensitySigma(builder: flatbuffers.Builder, WINDOW_DENSITY_SIGMA: number): void;
    static addWindowCorrelationDays(builder: flatbuffers.Builder, WINDOW_CORRELATION_DAYS: number): void;
    static addWindowBallisticSigma(builder: flatbuffers.Builder, WINDOW_BALLISTIC_SIGMA: number): void;
    static addOsculatingStepSeconds(builder: flatbuffers.Builder, OSCULATING_STEP_SECONDS: number): void;
    static addHandoffSawtoothKm(builder: flatbuffers.Builder, HANDOFF_SAWTOOTH_KM: number): void;
    static addHandoffSawtoothMinimumEccentricity(builder: flatbuffers.Builder, HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY: number): void;
    static endPCFReentry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFReentry(builder: flatbuffers.Builder, ALTITUDE_KM: number, HANDOFF_PERIGEE_ALTITUDE_KM: number, HANDOFF_DECAY_RATIO: number, HANDOFF_ECCENTRICITY_COLLAPSE: number, HANDOFF_MINIMUM_ECCENTRICITY: number, NODE_STEP_MINUTES: number, HORIZON_DAYS: number, WINDOW_METHOD: pcfReentryWindowMethod, WINDOW_DENSITY_SIGMA: number, WINDOW_CORRELATION_DAYS: number, WINDOW_BALLISTIC_SIGMA: number, OSCULATING_STEP_SECONDS: number, HANDOFF_SAWTOOTH_KM: number, HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY: number): flatbuffers.Offset;
    unpack(): PCFReentryT;
    unpackTo(_o: PCFReentryT): void;
}
export declare class PCFReentryT implements flatbuffers.IGeneratedObject {
    ALTITUDE_KM: number;
    HANDOFF_PERIGEE_ALTITUDE_KM: number;
    HANDOFF_DECAY_RATIO: number;
    HANDOFF_ECCENTRICITY_COLLAPSE: number;
    HANDOFF_MINIMUM_ECCENTRICITY: number;
    NODE_STEP_MINUTES: number;
    HORIZON_DAYS: number;
    WINDOW_METHOD: pcfReentryWindowMethod;
    WINDOW_DENSITY_SIGMA: number;
    WINDOW_CORRELATION_DAYS: number;
    WINDOW_BALLISTIC_SIGMA: number;
    OSCULATING_STEP_SECONDS: number;
    HANDOFF_SAWTOOTH_KM: number;
    HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY: number;
    constructor(ALTITUDE_KM?: number, HANDOFF_PERIGEE_ALTITUDE_KM?: number, HANDOFF_DECAY_RATIO?: number, HANDOFF_ECCENTRICITY_COLLAPSE?: number, HANDOFF_MINIMUM_ECCENTRICITY?: number, NODE_STEP_MINUTES?: number, HORIZON_DAYS?: number, WINDOW_METHOD?: pcfReentryWindowMethod, WINDOW_DENSITY_SIGMA?: number, WINDOW_CORRELATION_DAYS?: number, WINDOW_BALLISTIC_SIGMA?: number, OSCULATING_STEP_SECONDS?: number, HANDOFF_SAWTOOTH_KM?: number, HANDOFF_SAWTOOTH_MINIMUM_ECCENTRICITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFReentry.d.ts.map