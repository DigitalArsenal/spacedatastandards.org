/**
 * Whether a bias value is a known offset or the one-sigma of an unknown one.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sbcBiasNature {
    /**
     * One-sigma of an unknown, zero-mean bias: contributes its square as a
     * variance (the usual consider treatment).
     */
    Sigma = 0,
    /**
     * A known (estimated) offset: contributes its square as a variance when
     * it is left uncorrected.
     */
    Offset = 1
}
//# sourceMappingURL=sbcBiasNature.d.ts.map