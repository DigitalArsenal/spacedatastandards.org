/**
 * Weighting of an element-set fit. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum ermFitWeighting {
    Uniform = 0,
    /**
     * Per-axis RTN sigmas.
     */
    RtnSigmas = 1,
    /**
     * The ephemeris covariance.
     */
    EphemerisCovariance = 2
}
//# sourceMappingURL=ermFitWeighting.d.ts.map