/**
 * Integrator step mode (STEP MODE of the SP Vector/Covariance Message). Append
 * new values only.
 */
export declare enum ocmStepMode {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * The integrator chooses.
     */
    AUTO = 1,
    /**
     * Steps in time.
     */
    TIME = 2,
    /**
     * Steps in the integrator's variable S, which the format does not define
     * further.
     */
    S = 3
}
//# sourceMappingURL=ocmStepMode.d.ts.map