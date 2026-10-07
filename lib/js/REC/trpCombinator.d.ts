/**
 * Boolean combinator applied to a predicate group. Append new values only;
 * never reorder or reuse existing values. A policy's rules are a flat list
 * that must all pass, so evaluators accept only All.
 */
export declare enum trpCombinator {
    /**
     * Every rule must pass.
     */
    All = 0,
    /**
     * Retired: rules are never alternatives. Evaluators refuse a policy that
     * uses it.
     */
    Any = 1
}
//# sourceMappingURL=trpCombinator.d.ts.map