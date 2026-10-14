/**
 * Why a product was chosen. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum xmtSelectionReason {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * The only eligible candidate.
     */
    OnlyCandidate = 1,
    /**
     * Lowest measured median error among the measured eligible candidates.
     */
    LowestMeasuredMedian = 2,
    /**
     * No candidate measured; the source order decided.
     */
    UnmeasuredFallbackOrder = 3
}
//# sourceMappingURL=xmtSelectionReason.d.ts.map