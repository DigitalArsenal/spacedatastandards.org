/**
 * Where the covariance label of a chosen product comes from. Append new
 * values only; never reorder or reuse existing values.
 */
export declare enum xmtCovarianceOrigin {
    /**
     * No covariance.
     */
    Absent = 0,
    /**
     * The paired $OCM's COV_REALISM.
     */
    FromOcm = 1,
    /**
     * The element set's own COV_REALISM.
     */
    FromOmm = 2
}
//# sourceMappingURL=xmtCovarianceOrigin.d.ts.map