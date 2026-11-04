/**
 * How the partial derivatives of the dynamics are computed (PARTIALS of the SP
 * Vector/Covariance Message). Append new values only.
 */
export declare enum ocmPartialsMethod {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * Analytic partials.
     */
    ANALYTIC = 1,
    /**
     * Full numerical partials.
     */
    FULL_NUMERICAL = 2,
    /**
     * Fast numerical partials.
     */
    FAST_NUMERICAL = 3
}
//# sourceMappingURL=ocmPartialsMethod.d.ts.map