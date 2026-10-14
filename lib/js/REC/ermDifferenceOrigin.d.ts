/**
 * Origin of common-epoch differences. Append new values only; never reorder
 * or reuse existing values.
 */
export declare enum ermDifferenceOrigin {
    /**
     * An independent reference state.
     */
    ReferenceState = 0,
    /**
     * The mean of the propagated element sets.
     */
    SetMean = 1,
    /**
     * One named element set.
     */
    OneSet = 2
}
//# sourceMappingURL=ermDifferenceOrigin.d.ts.map