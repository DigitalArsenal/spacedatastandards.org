/**
 * Which invariant manifold branches to compute. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum tbpManifoldBranchKind {
    /**
     * Both stable and unstable branches (interior and exterior).
     */
    Both = 0,
    /**
     * Stable invariant manifold branches only (backward propagation).
     */
    StableOnly = 1,
    /**
     * Unstable invariant manifold branches only (forward propagation).
     */
    UnstableOnly = 2
}
//# sourceMappingURL=tbpManifoldBranchKind.d.ts.map