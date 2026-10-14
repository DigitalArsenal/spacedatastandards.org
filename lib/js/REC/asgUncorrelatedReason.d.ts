/**
 * Why an observation was left uncorrelated. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum asgUncorrelatedReason {
    /**
     * Not uncorrelated, or no reason stated.
     */
    Unspecified = 0,
    /**
     * No prediction covered the observation time.
     */
    NoPrediction = 1,
    /**
     * The nearest candidate was outside the gate.
     */
    OutsideGate = 2,
    /**
     * An in-gate candidate existed but the global assignment gave it to
     * another observation.
     */
    LostAssignment = 3
}
//# sourceMappingURL=asgUncorrelatedReason.d.ts.map