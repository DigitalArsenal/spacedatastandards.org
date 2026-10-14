/**
 * How observations are grouped into scans, each scan solved as one
 * assignment problem. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum asgScanGrouping {
    /**
     * One scan per sensor and observation time.
     */
    SensorTime = 0,
    /**
     * One scan per track identifier (observations without one fall back to
     * sensor and time).
     */
    Track = 1,
    /**
     * Every observation is its own scan (no competition between observations).
     */
    Observation = 2
}
//# sourceMappingURL=asgScanGrouping.d.ts.map