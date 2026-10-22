/**
 * Form of a density-model correction. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum dclCorrectionForm {
    /**
     * No correction (dT = 0).
     */
    None = 0,
    /**
     * Spherical harmonics in latitude and local solar time per time segment.
     */
    Harmonic = 1,
    /**
     * Temperature values, K, at time nodes, optionally at altitude nodes.
     */
    Nodes = 2,
    /**
     * Fleet common-mode ln(density / NRLMSISE-00 density), dimensionless.
     * Uses NODE_TIMES_MS and NODE_LOG_DENSITY_SCALE_DIMENSIONLESS only.
     */
    LogDensityNodes = 3
}
//# sourceMappingURL=dclCorrectionForm.d.ts.map