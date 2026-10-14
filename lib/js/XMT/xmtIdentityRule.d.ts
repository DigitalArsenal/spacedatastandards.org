/**
 * How a composer keys objects across catalog layers. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum xmtIdentityRule {
    /**
     * NORAD number first, then international designator, then the source's
     * native key (recipe version 1).
     */
    NoradFirst = 0,
    /**
     * International designator only; records without one stay unresolved
     * (recipe version 2).
     */
    InternationalDesignator = 1
}
//# sourceMappingURL=xmtIdentityRule.d.ts.map