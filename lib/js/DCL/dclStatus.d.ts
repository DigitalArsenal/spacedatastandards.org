/**
 * Outcome. Append new values only; never reorder or reuse existing values.
 */
export declare enum dclStatus {
    /**
     * A request, not yet answered.
     */
    Pending = 0,
    Solved = 1,
    /**
     * The fit stopped at its iteration limit without meeting its tolerance.
     */
    NotConverged = 2,
    InvalidRequest = 3,
    /**
     * A trajectory left the drivers' span or was refused by the propagator.
     */
    IntegrationFailed = 4,
    Failed = 5
}
//# sourceMappingURL=dclStatus.d.ts.map