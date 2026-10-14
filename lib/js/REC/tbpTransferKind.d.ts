/**
 * How a transfer is built. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum tbpTransferKind {
    Unspecified = 0,
    /**
     * Direct two-body patched-conic transfer.
     */
    HohmannLike = 1,
    /**
     * Low-energy (ballistic capture) transfer.
     */
    LowEnergy = 2,
    /**
     * Free-return trajectory about the smaller primary.
     */
    FreeReturn = 3,
    /**
     * Powered flyby of the smaller primary.
     */
    PoweredFlyby = 4,
    /**
     * Weak-stability-boundary transfer.
     */
    WeakStabilityBoundary = 5,
    /**
     * Direct insertion into an orbit about the smaller primary.
     */
    DirectInsertion = 6,
    /**
     * Insertion into a periodic orbit (TARGET_ORBIT).
     */
    PeriodicOrbitInsertion = 7
}
//# sourceMappingURL=tbpTransferKind.d.ts.map