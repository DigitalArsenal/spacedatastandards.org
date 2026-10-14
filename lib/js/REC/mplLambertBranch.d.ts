/**
 * Which of the two arcs of a multi-revolution Lambert problem. Append new
 * values only; never reorder or reuse existing values.
 */
export declare enum mplLambertBranch {
    /**
     * No branch: zero revolutions (the solution is unique) or not stated.
     */
    Unspecified = 0,
    /**
     * The first time-of-flight crossing of the revolution count.
     */
    Low = 1,
    /**
     * The second time-of-flight crossing of the revolution count.
     */
    High = 2
}
//# sourceMappingURL=mplLambertBranch.d.ts.map