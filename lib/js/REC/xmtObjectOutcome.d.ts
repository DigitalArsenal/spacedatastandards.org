/**
 * Outcome of the integration of one object. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum xmtObjectOutcome {
    Unspecified = 0,
    /**
     * At least one product kind has a selection.
     */
    Selected = 1,
    /**
     * Products exist but none is eligible.
     */
    Stale = 2,
    /**
     * No product names the object.
     */
    NoProduct = 3
}
//# sourceMappingURL=xmtObjectOutcome.d.ts.map