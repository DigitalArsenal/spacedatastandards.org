/**
 * Realism verdict of a stratum. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum ermCoverageVerdict {
    /**
     * Not tested.
     */
    Unspecified = 0,
    /**
     * Coverage within tolerance on enough samples and objects.
     */
    Calibrated = 1,
    /**
     * Coverage outside tolerance.
     */
    Failed = 2,
    /**
     * Too few samples or objects.
     */
    Insufficient = 3,
    /**
     * No model covariance to test.
     */
    NoModel = 4
}
//# sourceMappingURL=ermCoverageVerdict.d.ts.map