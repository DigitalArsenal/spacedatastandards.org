/**
 * Fidelity tier of the solve. Ordinal 0 is UNSPECIFIED so an unset field can
 * never decode as a claim that a specific tier was requested.
 *
 * ORDINALS ARE WIRE VALUES. New tiers are APPENDED ONLY.
 */
export declare enum trsSolverTier {
    UNSPECIFIED = 0,
    /**
     * Geometric line-of-sight occlusion only; propagation on visible cells.
     */
    LOS_OCCLUSION = 1,
    /**
     * Knife-edge diffraction assists shadowed cells (ITU-R P.526-15).
     */
    DIFFRACTION_ASSISTED = 2,
    /**
     * Adds a single specular ground-bounce contribution.
     */
    SPECULAR_SINGLE_BOUNCE = 3
}
//# sourceMappingURL=trsSolverTier.d.ts.map