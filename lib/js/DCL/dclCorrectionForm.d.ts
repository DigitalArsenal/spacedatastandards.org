/**
 * Form of a temperature correction. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum dclCorrectionForm {
    /**
     * No correction (dT = 0).
     */
    None = 0,
    /**
     * Spherical harmonics in latitude and local solar time per time segment.
     */
    Harmonic = 1,
    /**
     * Values at time nodes, optionally at altitude nodes.
     */
    Nodes = 2
}
//# sourceMappingURL=dclCorrectionForm.d.ts.map