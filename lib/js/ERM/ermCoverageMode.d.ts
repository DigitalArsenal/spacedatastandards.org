/**
 * Mode of a propagator covariance coverage run. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum ermCoverageMode {
    /**
     * Fit the initial covariance at the element-set epoch.
     */
    EpochCovariance = 0,
    /**
     * Fit the process noise.
     */
    ProcessNoise = 1,
    /**
     * Test coverage.
     */
    CoverageTest = 2
}
//# sourceMappingURL=ermCoverageMode.d.ts.map