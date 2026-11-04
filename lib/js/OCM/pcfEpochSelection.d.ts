/**
 * How a propagator learns the space weather beyond the daily rows it was
 * given. Append new values only.
 * How the epoch store picks the element set for a request time.
 */
export declare enum pcfEpochSelection {
    /**
     * The set whose epoch is nearest the request time (the default).
     */
    NEAREST = 0,
    /**
     * The latest set whose epoch is at or before the request time.
     */
    LATEST_BEFORE = 1
}
//# sourceMappingURL=pcfEpochSelection.d.ts.map