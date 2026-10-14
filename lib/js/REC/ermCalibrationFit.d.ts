/**
 * How calibration factors are fitted. Append new values only; never reorder
 * or reuse existing values.
 */
export declare enum ermCalibrationFit {
    /**
     * One variance factor by maximum likelihood.
     */
    ScalarMle = 0,
    /**
     * One factor per axis by maximum likelihood.
     */
    AxesMle = 1,
    /**
     * The factor that puts the coverage at the target.
     */
    CoverageTarget = 2
}
//# sourceMappingURL=ermCalibrationFit.d.ts.map