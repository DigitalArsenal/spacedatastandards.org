/**
 * Standing of one source's product for one object. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum xmtCandidateStanding {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * Chosen.
     */
    Selected = 1,
    /**
     * Eligible but not chosen.
     */
    NotSelected = 2,
    /**
     * Epoch after the as-of time.
     */
    Future = 3,
    /**
     * Epoch before a maneuver that retires the products before it.
     */
    Retired = 4,
    /**
     * Older than the policy's maximum age.
     */
    TooOld = 5
}
//# sourceMappingURL=xmtCandidateStanding.d.ts.map