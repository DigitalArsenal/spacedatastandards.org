import * as flatbuffers from 'flatbuffers';
import { OMM, OMMT } from './OMM.js';
import { dclFitStatistics, dclFitStatisticsT } from './dclFitStatistics.js';
import { dclRefusal, dclRefusalT } from './dclRefusal.js';
/**
 * One object's element-set history and its decay.
 */
export declare class dclObject implements flatbuffers.IUnpackableObject<dclObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclObject;
    static getRootAsdclObject(bb: flatbuffers.ByteBuffer, obj?: dclObject): dclObject;
    static getSizePrefixedRootAsdclObject(bb: flatbuffers.ByteBuffer, obj?: dclObject): dclObject;
    /**
     * Identifier (catalog number or designator).
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The element sets, in epoch order; each needs EPOCH, MEAN_MOTION,
     * ECCENTRICITY, INCLINATION, RA_OF_ASC_NODE, ARG_OF_PERICENTER,
     * MEAN_ANOMALY and BSTAR.
     */
    ELEMENT_SETS(index: number, obj?: OMM): OMM | null;
    elementSetsLength(): number;
    /**
     * Ballistic coefficient B = Cd A / m, m^2/kg (forward model input, or the
     * fitted value); 0 = 1 m^2/kg in a request.
     */
    BALLISTIC_COEFFICIENT_M2_KG(): number;
    /**
     * Forward model with a single set: integrate it alone over this span, s;
     * 0 = to the next set.
     */
    SPAN_S(): number;
    /**
     * Prior on ln B (mean, and sigma; sigma 0 = no prior).
     */
    LN_B_PRIOR_MEAN(): number;
    LN_B_PRIOR_SIGMA(): number;
    /**
     * Result: false when the object's trajectory could not be integrated.
     */
    OK(): boolean;
    /**
     * Result: why the object was left out of a calibration; empty = used.
     */
    SKIPPED_REASON(): string | null;
    SKIPPED_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Result: sets refused, with the reason.
     */
    REFUSED(index: number, obj?: dclRefusal): dclRefusal | null;
    refusedLength(): number;
    /**
     * Result per set, parallel to ELEMENT_SETS: mean (Brouwer) semi-major
     * axis and perigee height, km, eccentricity, the cumulative drag decay
     * from the start of the set's chain, m (NaN = not in a chain), and the
     * fit residual, m (NaN = none) and whether it was used.
     */
    SET_TIME_MS(index: number): bigint | null;
    setTimeMsLength(): number;
    SET_MEAN_SEMI_MAJOR_AXIS_KM(index: number): number | null;
    setMeanSemiMajorAxisKmLength(): number;
    setMeanSemiMajorAxisKmArray(): Float64Array | null;
    SET_PERIGEE_HEIGHT_KM(index: number): number | null;
    setPerigeeHeightKmLength(): number;
    setPerigeeHeightKmArray(): Float64Array | null;
    SET_ECCENTRICITY(index: number): number | null;
    setEccentricityLength(): number;
    setEccentricityArray(): Float64Array | null;
    SET_CUMULATIVE_DECAY_M(index: number): number | null;
    setCumulativeDecayMLength(): number;
    setCumulativeDecayMArray(): Float64Array | null;
    SET_RESIDUAL_M(index: number): number | null;
    setResidualMLength(): number;
    setResidualMArray(): Float64Array | null;
    SET_USED(index: number): boolean | null;
    setUsedLength(): number;
    setUsedArray(): Int8Array | null;
    /**
     * Result per integrated segment (set epoch to the next): span, drag change
     * in mean semi-major axis (m) and mean geodetic height (km).
     */
    SEGMENT_FROM_MS(index: number): bigint | null;
    segmentFromMsLength(): number;
    SEGMENT_TO_MS(index: number): bigint | null;
    segmentToMsLength(): number;
    SEGMENT_DECAY_M(index: number): number | null;
    segmentDecayMLength(): number;
    segmentDecayMArray(): Float64Array | null;
    SEGMENT_MEAN_ALTITUDE_KM(index: number): number | null;
    segmentMeanAltitudeKmLength(): number;
    segmentMeanAltitudeKmArray(): Float64Array | null;
    /**
     * Result: mean geodetic height along the trajectory, km.
     */
    MEAN_ALTITUDE_KM(): number;
    /**
     * Calibration result: ln B, its formal sigma (NaN = not computed), the
     * object's robust residual scale (m), chains of sets, sets in chains.
     */
    LN_B(): number;
    LN_B_SIGMA(): number;
    RESIDUAL_SCALE_M(): number;
    CHAINS(): number;
    SETS_IN_CHAINS(): number;
    /**
     * Calibration result: first and last set used.
     */
    FIRST_MS(): bigint;
    LAST_MS(): bigint;
    /**
     * Calibration result: observed and modelled drop in mean semi-major axis
     * over the chains, m.
     */
    OBSERVED_DECAY_M(): number;
    MODEL_DECAY_M(): number;
    /**
     * Calibration result: residual RMS before and after (m), sets used.
     */
    FIT(obj?: dclFitStatistics): dclFitStatistics | null;
    /**
     * Result, when asked for: the trajectory points, column-major. TEME
     * position and velocity (km, km/s, 6 per point), geodetic point, density
     * and the drag-decay factor q = (a^2 / mu) |v_r| (v . v_r), m^2/s, so that
     * da/dt = -B density q.
     */
    SAMPLE_TIME_MS(index: number): bigint | null;
    sampleTimeMsLength(): number;
    SAMPLE_TEME_STATE(index: number): number | null;
    sampleTemeStateLength(): number;
    sampleTemeStateArray(): Float64Array | null;
    SAMPLE_LATITUDE_DEG(index: number): number | null;
    sampleLatitudeDegLength(): number;
    sampleLatitudeDegArray(): Float64Array | null;
    SAMPLE_LONGITUDE_DEG(index: number): number | null;
    sampleLongitudeDegLength(): number;
    sampleLongitudeDegArray(): Float64Array | null;
    SAMPLE_ALTITUDE_KM(index: number): number | null;
    sampleAltitudeKmLength(): number;
    sampleAltitudeKmArray(): Float64Array | null;
    SAMPLE_DENSITY_KG_M3(index: number): number | null;
    sampleDensityKgM3Length(): number;
    sampleDensityKgM3Array(): Float64Array | null;
    SAMPLE_DECAY_FACTOR_M2_S(index: number): number | null;
    sampleDecayFactorM2SLength(): number;
    sampleDecayFactorM2SArray(): Float64Array | null;
    static startdclObject(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addElementSets(builder: flatbuffers.Builder, ELEMENT_SETSOffset: flatbuffers.Offset): void;
    static createElementSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElementSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBallisticCoefficientM2Kg(builder: flatbuffers.Builder, BALLISTIC_COEFFICIENT_M2_KG: number): void;
    static addSpanS(builder: flatbuffers.Builder, SPAN_S: number): void;
    static addLnBPriorMean(builder: flatbuffers.Builder, LN_B_PRIOR_MEAN: number): void;
    static addLnBPriorSigma(builder: flatbuffers.Builder, LN_B_PRIOR_SIGMA: number): void;
    static addOk(builder: flatbuffers.Builder, OK: boolean): void;
    static addSkippedReason(builder: flatbuffers.Builder, SKIPPED_REASONOffset: flatbuffers.Offset): void;
    static addRefused(builder: flatbuffers.Builder, REFUSEDOffset: flatbuffers.Offset): void;
    static createRefusedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRefusedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetTimeMs(builder: flatbuffers.Builder, SET_TIME_MSOffset: flatbuffers.Offset): void;
    static createSetTimeMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startSetTimeMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetMeanSemiMajorAxisKm(builder: flatbuffers.Builder, SET_MEAN_SEMI_MAJOR_AXIS_KMOffset: flatbuffers.Offset): void;
    static createSetMeanSemiMajorAxisKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSetMeanSemiMajorAxisKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSetMeanSemiMajorAxisKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetPerigeeHeightKm(builder: flatbuffers.Builder, SET_PERIGEE_HEIGHT_KMOffset: flatbuffers.Offset): void;
    static createSetPerigeeHeightKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSetPerigeeHeightKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSetPerigeeHeightKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetEccentricity(builder: flatbuffers.Builder, SET_ECCENTRICITYOffset: flatbuffers.Offset): void;
    static createSetEccentricityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSetEccentricityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSetEccentricityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetCumulativeDecayM(builder: flatbuffers.Builder, SET_CUMULATIVE_DECAY_MOffset: flatbuffers.Offset): void;
    static createSetCumulativeDecayMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSetCumulativeDecayMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSetCumulativeDecayMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetResidualM(builder: flatbuffers.Builder, SET_RESIDUAL_MOffset: flatbuffers.Offset): void;
    static createSetResidualMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSetResidualMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSetResidualMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSetUsed(builder: flatbuffers.Builder, SET_USEDOffset: flatbuffers.Offset): void;
    static createSetUsedVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startSetUsedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentFromMs(builder: flatbuffers.Builder, SEGMENT_FROM_MSOffset: flatbuffers.Offset): void;
    static createSegmentFromMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startSegmentFromMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentToMs(builder: flatbuffers.Builder, SEGMENT_TO_MSOffset: flatbuffers.Offset): void;
    static createSegmentToMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startSegmentToMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentDecayM(builder: flatbuffers.Builder, SEGMENT_DECAY_MOffset: flatbuffers.Offset): void;
    static createSegmentDecayMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSegmentDecayMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSegmentDecayMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentMeanAltitudeKm(builder: flatbuffers.Builder, SEGMENT_MEAN_ALTITUDE_KMOffset: flatbuffers.Offset): void;
    static createSegmentMeanAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSegmentMeanAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSegmentMeanAltitudeKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeanAltitudeKm(builder: flatbuffers.Builder, MEAN_ALTITUDE_KM: number): void;
    static addLnB(builder: flatbuffers.Builder, LN_B: number): void;
    static addLnBSigma(builder: flatbuffers.Builder, LN_B_SIGMA: number): void;
    static addResidualScaleM(builder: flatbuffers.Builder, RESIDUAL_SCALE_M: number): void;
    static addChains(builder: flatbuffers.Builder, CHAINS: number): void;
    static addSetsInChains(builder: flatbuffers.Builder, SETS_IN_CHAINS: number): void;
    static addFirstMs(builder: flatbuffers.Builder, FIRST_MS: bigint): void;
    static addLastMs(builder: flatbuffers.Builder, LAST_MS: bigint): void;
    static addObservedDecayM(builder: flatbuffers.Builder, OBSERVED_DECAY_M: number): void;
    static addModelDecayM(builder: flatbuffers.Builder, MODEL_DECAY_M: number): void;
    static addFit(builder: flatbuffers.Builder, FITOffset: flatbuffers.Offset): void;
    static addSampleTimeMs(builder: flatbuffers.Builder, SAMPLE_TIME_MSOffset: flatbuffers.Offset): void;
    static createSampleTimeMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startSampleTimeMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleTemeState(builder: flatbuffers.Builder, SAMPLE_TEME_STATEOffset: flatbuffers.Offset): void;
    static createSampleTemeStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleTemeStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleTemeStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleLatitudeDeg(builder: flatbuffers.Builder, SAMPLE_LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createSampleLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleLongitudeDeg(builder: flatbuffers.Builder, SAMPLE_LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createSampleLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleAltitudeKm(builder: flatbuffers.Builder, SAMPLE_ALTITUDE_KMOffset: flatbuffers.Offset): void;
    static createSampleAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleAltitudeKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleAltitudeKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleDensityKgM3(builder: flatbuffers.Builder, SAMPLE_DENSITY_KG_M3Offset: flatbuffers.Offset): void;
    static createSampleDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleDensityKgM3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleDensityKgM3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleDecayFactorM2S(builder: flatbuffers.Builder, SAMPLE_DECAY_FACTOR_M2_SOffset: flatbuffers.Offset): void;
    static createSampleDecayFactorM2SVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleDecayFactorM2SVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleDecayFactorM2SVector(builder: flatbuffers.Builder, numElems: number): void;
    static enddclObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): dclObjectT;
    unpackTo(_o: dclObjectT): void;
}
export declare class dclObjectT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ELEMENT_SETS: (OMMT)[];
    BALLISTIC_COEFFICIENT_M2_KG: number;
    SPAN_S: number;
    LN_B_PRIOR_MEAN: number;
    LN_B_PRIOR_SIGMA: number;
    OK: boolean;
    SKIPPED_REASON: string | Uint8Array | null;
    REFUSED: (dclRefusalT)[];
    SET_TIME_MS: (bigint)[];
    SET_MEAN_SEMI_MAJOR_AXIS_KM: (number)[];
    SET_PERIGEE_HEIGHT_KM: (number)[];
    SET_ECCENTRICITY: (number)[];
    SET_CUMULATIVE_DECAY_M: (number)[];
    SET_RESIDUAL_M: (number)[];
    SET_USED: (boolean)[];
    SEGMENT_FROM_MS: (bigint)[];
    SEGMENT_TO_MS: (bigint)[];
    SEGMENT_DECAY_M: (number)[];
    SEGMENT_MEAN_ALTITUDE_KM: (number)[];
    MEAN_ALTITUDE_KM: number;
    LN_B: number;
    LN_B_SIGMA: number;
    RESIDUAL_SCALE_M: number;
    CHAINS: number;
    SETS_IN_CHAINS: number;
    FIRST_MS: bigint;
    LAST_MS: bigint;
    OBSERVED_DECAY_M: number;
    MODEL_DECAY_M: number;
    FIT: dclFitStatisticsT | null;
    SAMPLE_TIME_MS: (bigint)[];
    SAMPLE_TEME_STATE: (number)[];
    SAMPLE_LATITUDE_DEG: (number)[];
    SAMPLE_LONGITUDE_DEG: (number)[];
    SAMPLE_ALTITUDE_KM: (number)[];
    SAMPLE_DENSITY_KG_M3: (number)[];
    SAMPLE_DECAY_FACTOR_M2_S: (number)[];
    constructor(ID?: string | Uint8Array | null, ELEMENT_SETS?: (OMMT)[], BALLISTIC_COEFFICIENT_M2_KG?: number, SPAN_S?: number, LN_B_PRIOR_MEAN?: number, LN_B_PRIOR_SIGMA?: number, OK?: boolean, SKIPPED_REASON?: string | Uint8Array | null, REFUSED?: (dclRefusalT)[], SET_TIME_MS?: (bigint)[], SET_MEAN_SEMI_MAJOR_AXIS_KM?: (number)[], SET_PERIGEE_HEIGHT_KM?: (number)[], SET_ECCENTRICITY?: (number)[], SET_CUMULATIVE_DECAY_M?: (number)[], SET_RESIDUAL_M?: (number)[], SET_USED?: (boolean)[], SEGMENT_FROM_MS?: (bigint)[], SEGMENT_TO_MS?: (bigint)[], SEGMENT_DECAY_M?: (number)[], SEGMENT_MEAN_ALTITUDE_KM?: (number)[], MEAN_ALTITUDE_KM?: number, LN_B?: number, LN_B_SIGMA?: number, RESIDUAL_SCALE_M?: number, CHAINS?: number, SETS_IN_CHAINS?: number, FIRST_MS?: bigint, LAST_MS?: bigint, OBSERVED_DECAY_M?: number, MODEL_DECAY_M?: number, FIT?: dclFitStatisticsT | null, SAMPLE_TIME_MS?: (bigint)[], SAMPLE_TEME_STATE?: (number)[], SAMPLE_LATITUDE_DEG?: (number)[], SAMPLE_LONGITUDE_DEG?: (number)[], SAMPLE_ALTITUDE_KM?: (number)[], SAMPLE_DENSITY_KG_M3?: (number)[], SAMPLE_DECAY_FACTOR_M2_S?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclObject.d.ts.map