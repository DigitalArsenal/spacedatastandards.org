import * as flatbuffers from 'flatbuffers';
/**
 * Settings of a calibration or a forward model.
 */
export declare class dclSettings implements flatbuffers.IUnpackableObject<dclSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclSettings;
    static getRootAsdclSettings(bb: flatbuffers.ByteBuffer, obj?: dclSettings): dclSettings;
    static getSizePrefixedRootAsdclSettings(bb: flatbuffers.ByteBuffer, obj?: dclSettings): dclSettings;
    /**
     * Calibration span.
     */
    FROM_MS(): bigint;
    TO_MS(): bigint;
    /**
     * DensityCalibration: harmonic degree, 0-8.
     */
    DEGREE(): number;
    /**
     * DensityCalibration: bin length, s; 0 = 3 h.
     */
    BIN_S(): number;
    /**
     * DensityCalibration: sigma of a log-density residual; 0 = 0.1.
     */
    LOG_DENSITY_SIGMA(): number;
    /**
     * DensityCalibration: prior sigma of the coefficients of each degree, K
     * (DEGREE + 1 values); empty = 100 K each.
     */
    PRIOR_SIGMA_K(index: number): number | null;
    priorSigmaKLength(): number;
    priorSigmaKArray(): Float64Array | null;
    /**
     * DensityCalibration: fewest points for a bin to be fitted; 0 = 30.
     */
    MIN_POINTS(): number;
    /**
     * Iteration limit; 0 = 10.
     */
    MAX_ITERATIONS(): number;
    /**
     * Robust edit threshold in robust sigmas (1.4826 MAD); 0 = 4.
     */
    EDIT_SIGMA(): number;
    /**
     * DecayCalibration: spacing of the correction's time nodes, s, and its
     * altitude nodes, km (empty = global).
     */
    NODE_STEP_S(): number;
    NODE_ALTITUDES_KM(index: number): number | null;
    nodeAltitudesKmLength(): number;
    nodeAltitudesKmArray(): Float64Array | null;
    /**
     * DecayCalibration priors: random walk between consecutive nodes,
     * K per square-root day; the mean level of each altitude node, K; the tie
     * between neighbouring altitude nodes, K. 0 = 30, 150, 100.
     */
    RANDOM_WALK_K_PER_SQRT_DAY(): number;
    MEAN_LEVEL_K(): number;
    ALTITUDE_DIFFERENCE_K(): number;
    /**
     * Decay: integration step along each trajectory, s (1-600); 0 = 60.
     */
    STEP_S(): number;
    /**
     * Decay: sets further apart than this start a new chain, s; 0 = 3 days.
     */
    MAX_GAP_S(): number;
    /**
     * DecayCalibration: floor of each object's residual scale, m; 0 = 1.
     */
    RESIDUAL_FLOOR_M(): number;
    /**
     * DecayCalibration: iterations in which scales and edits are re-estimated
     * before being held; 0 = 4.
     */
    REWEIGHT_ITERATIONS(): number;
    /**
     * DecayCalibration convergence: every step below these; 0 = 0.5 K,
     * 0.001, 0.1 m.
     */
    TOLERANCE_K(): number;
    TOLERANCE_LN_B(): number;
    TOLERANCE_OFFSET_M(): number;
    /**
     * DecayCalibration: fewest sets in chains for an object to be used; 0 =
     * 5.
     */
    MIN_SETS(): number;
    /**
     * Ask for the derivative d ln(density)/dT, the Sun diagnostics, the
     * per-set residuals, the trajectory samples, the energy gradient.
     */
    WANT_DERIVATIVE(): boolean;
    WANT_SUN_DIAGNOSTICS(): boolean;
    WANT_RESIDUALS(): boolean;
    WANT_SAMPLES(): boolean;
    WANT_GRADIENT(): boolean;
    static startdclSettings(builder: flatbuffers.Builder): void;
    static addFromMs(builder: flatbuffers.Builder, FROM_MS: bigint): void;
    static addToMs(builder: flatbuffers.Builder, TO_MS: bigint): void;
    static addDegree(builder: flatbuffers.Builder, DEGREE: number): void;
    static addBinS(builder: flatbuffers.Builder, BIN_S: number): void;
    static addLogDensitySigma(builder: flatbuffers.Builder, LOG_DENSITY_SIGMA: number): void;
    static addPriorSigmaK(builder: flatbuffers.Builder, PRIOR_SIGMA_KOffset: flatbuffers.Offset): void;
    static createPriorSigmaKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPriorSigmaKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPriorSigmaKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinPoints(builder: flatbuffers.Builder, MIN_POINTS: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addEditSigma(builder: flatbuffers.Builder, EDIT_SIGMA: number): void;
    static addNodeStepS(builder: flatbuffers.Builder, NODE_STEP_S: number): void;
    static addNodeAltitudesKm(builder: flatbuffers.Builder, NODE_ALTITUDES_KMOffset: flatbuffers.Offset): void;
    static createNodeAltitudesKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNodeAltitudesKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNodeAltitudesKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRandomWalkKPerSqrtDay(builder: flatbuffers.Builder, RANDOM_WALK_K_PER_SQRT_DAY: number): void;
    static addMeanLevelK(builder: flatbuffers.Builder, MEAN_LEVEL_K: number): void;
    static addAltitudeDifferenceK(builder: flatbuffers.Builder, ALTITUDE_DIFFERENCE_K: number): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addMaxGapS(builder: flatbuffers.Builder, MAX_GAP_S: number): void;
    static addResidualFloorM(builder: flatbuffers.Builder, RESIDUAL_FLOOR_M: number): void;
    static addReweightIterations(builder: flatbuffers.Builder, REWEIGHT_ITERATIONS: number): void;
    static addToleranceK(builder: flatbuffers.Builder, TOLERANCE_K: number): void;
    static addToleranceLnB(builder: flatbuffers.Builder, TOLERANCE_LN_B: number): void;
    static addToleranceOffsetM(builder: flatbuffers.Builder, TOLERANCE_OFFSET_M: number): void;
    static addMinSets(builder: flatbuffers.Builder, MIN_SETS: number): void;
    static addWantDerivative(builder: flatbuffers.Builder, WANT_DERIVATIVE: boolean): void;
    static addWantSunDiagnostics(builder: flatbuffers.Builder, WANT_SUN_DIAGNOSTICS: boolean): void;
    static addWantResiduals(builder: flatbuffers.Builder, WANT_RESIDUALS: boolean): void;
    static addWantSamples(builder: flatbuffers.Builder, WANT_SAMPLES: boolean): void;
    static addWantGradient(builder: flatbuffers.Builder, WANT_GRADIENT: boolean): void;
    static enddclSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclSettings(builder: flatbuffers.Builder, FROM_MS: bigint, TO_MS: bigint, DEGREE: number, BIN_S: number, LOG_DENSITY_SIGMA: number, PRIOR_SIGMA_KOffset: flatbuffers.Offset, MIN_POINTS: number, MAX_ITERATIONS: number, EDIT_SIGMA: number, NODE_STEP_S: number, NODE_ALTITUDES_KMOffset: flatbuffers.Offset, RANDOM_WALK_K_PER_SQRT_DAY: number, MEAN_LEVEL_K: number, ALTITUDE_DIFFERENCE_K: number, STEP_S: number, MAX_GAP_S: number, RESIDUAL_FLOOR_M: number, REWEIGHT_ITERATIONS: number, TOLERANCE_K: number, TOLERANCE_LN_B: number, TOLERANCE_OFFSET_M: number, MIN_SETS: number, WANT_DERIVATIVE: boolean, WANT_SUN_DIAGNOSTICS: boolean, WANT_RESIDUALS: boolean, WANT_SAMPLES: boolean, WANT_GRADIENT: boolean): flatbuffers.Offset;
    unpack(): dclSettingsT;
    unpackTo(_o: dclSettingsT): void;
}
export declare class dclSettingsT implements flatbuffers.IGeneratedObject {
    FROM_MS: bigint;
    TO_MS: bigint;
    DEGREE: number;
    BIN_S: number;
    LOG_DENSITY_SIGMA: number;
    PRIOR_SIGMA_K: (number)[];
    MIN_POINTS: number;
    MAX_ITERATIONS: number;
    EDIT_SIGMA: number;
    NODE_STEP_S: number;
    NODE_ALTITUDES_KM: (number)[];
    RANDOM_WALK_K_PER_SQRT_DAY: number;
    MEAN_LEVEL_K: number;
    ALTITUDE_DIFFERENCE_K: number;
    STEP_S: number;
    MAX_GAP_S: number;
    RESIDUAL_FLOOR_M: number;
    REWEIGHT_ITERATIONS: number;
    TOLERANCE_K: number;
    TOLERANCE_LN_B: number;
    TOLERANCE_OFFSET_M: number;
    MIN_SETS: number;
    WANT_DERIVATIVE: boolean;
    WANT_SUN_DIAGNOSTICS: boolean;
    WANT_RESIDUALS: boolean;
    WANT_SAMPLES: boolean;
    WANT_GRADIENT: boolean;
    constructor(FROM_MS?: bigint, TO_MS?: bigint, DEGREE?: number, BIN_S?: number, LOG_DENSITY_SIGMA?: number, PRIOR_SIGMA_K?: (number)[], MIN_POINTS?: number, MAX_ITERATIONS?: number, EDIT_SIGMA?: number, NODE_STEP_S?: number, NODE_ALTITUDES_KM?: (number)[], RANDOM_WALK_K_PER_SQRT_DAY?: number, MEAN_LEVEL_K?: number, ALTITUDE_DIFFERENCE_K?: number, STEP_S?: number, MAX_GAP_S?: number, RESIDUAL_FLOOR_M?: number, REWEIGHT_ITERATIONS?: number, TOLERANCE_K?: number, TOLERANCE_LN_B?: number, TOLERANCE_OFFSET_M?: number, MIN_SETS?: number, WANT_DERIVATIVE?: boolean, WANT_SUN_DIAGNOSTICS?: boolean, WANT_RESIDUALS?: boolean, WANT_SAMPLES?: boolean, WANT_GRADIENT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclSettings.d.ts.map