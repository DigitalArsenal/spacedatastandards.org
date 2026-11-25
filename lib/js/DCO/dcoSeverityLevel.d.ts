/**
 * Residual severity tier after applying the evaluated defensive COA. Append new values only.
 */
export declare enum dcoSeverityLevel {
    /**
     * Residual risk could not be evaluated.
     */
    UNAVAILABLE = 0,
    /**
     * Residual risk reduced to nominal.
     */
    NOMINAL = 1,
    /**
     * Residual risk remains at watch level.
     */
    WATCH = 2,
    /**
     * Residual risk remains high.
     */
    HIGH = 3,
    /**
     * Residual risk remains critical.
     */
    CRITICAL = 4
}
//# sourceMappingURL=dcoSeverityLevel.d.ts.map