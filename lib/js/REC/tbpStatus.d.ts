/**
 * Outcome. Append new values only; never reorder or reuse existing values.
 */
export declare enum tbpStatus {
    /**
     * A request, not yet answered.
     */
    Pending = 0,
    Solved = 1,
    /**
     * The corrector or targeter did not converge; the result is its last
     * iterate.
     */
    NotConverged = 2,
    InvalidRequest = 3,
    Failed = 4
}
//# sourceMappingURL=tbpStatus.d.ts.map