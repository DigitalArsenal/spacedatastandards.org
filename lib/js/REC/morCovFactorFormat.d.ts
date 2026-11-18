/**
 * Identifier and version of the fitted-covariance factor encoding in COV_FACTOR. When COVARIANCE_DATA is
 * present, COVARIANCE_DATA is authoritative and COV_FACTOR is ignored. A reader that meets an ordinal it
 * does not know ignores COV_FACTOR and treats the record as having no covariance from it. Append new
 * values only.
 */
export declare enum morCovFactorFormat {
    /**
     * No covariance factor.
     */
    NONE = 0,
    /**
     * Kepler two-body relative-orbital-element hyperspherical and lossless-escape factor of the fitted
     * covariance P_fit = G G^T over a 7-day horizon, with floor F from COV_PROPAGATION and COV_FLOOR
     * (P = F + G G^T); directions masked under F over 7 days may be omitted. schema/MOR/COV_FACTOR.md.
     */
    ROE_HYPERSPHERICAL_V1 = 1
}
//# sourceMappingURL=morCovFactorFormat.d.ts.map