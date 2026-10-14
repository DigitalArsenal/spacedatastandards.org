/**
 * State transition used to map a covariance. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum ermMapMethod {
    /**
     * SGP4 (central differences in nonsingular mean elements).
     */
    Sgp4 = 0,
    /**
     * Two-body (complex-step Kepler).
     */
    TwoBody = 1,
    /**
     * The Lambert arc between the two epochs.
     */
    Lambert = 2
}
//# sourceMappingURL=ermMapMethod.d.ts.map