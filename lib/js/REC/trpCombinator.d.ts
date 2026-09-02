/**
 * Boolean combinator applied to a predicate group. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum trpCombinator {
    /**
     * Every direct predicate and child group must pass.
     */
    All = 0,
    /**
     * At least one direct predicate or child group must pass.
     */
    Any = 1
}
//# sourceMappingURL=trpCombinator.d.ts.map