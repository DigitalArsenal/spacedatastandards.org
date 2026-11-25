/**
 * Deterministic severity tier for matrix cells, compound events, and rollups. Append new values only.
 */
export declare enum tmxSeverityLevel {
    /**
     * Phenomenology could not be evaluated.
     */
    UNAVAILABLE = 0,
    /**
     * Evaluated within nominal thresholds.
     */
    NOMINAL = 1,
    /**
     * Elevated threat warranting monitoring.
     */
    WATCH = 2,
    /**
     * High threat warranting defensive COA preparation.
     */
    HIGH = 3,
    /**
     * Critical threat requiring immediate mitigation.
     */
    CRITICAL = 4
}
//# sourceMappingURL=tmxSeverityLevel.d.ts.map