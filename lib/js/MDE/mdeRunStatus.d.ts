/**
 * Status of a detection run. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum mdeRunStatus {
    Unspecified = 0,
    /**
     * Propagations are needed first (PRW window requests were emitted).
     */
    NeedsPropagation = 1,
    /**
     * Detection ran.
     */
    Detected = 2
}
//# sourceMappingURL=mdeRunStatus.d.ts.map