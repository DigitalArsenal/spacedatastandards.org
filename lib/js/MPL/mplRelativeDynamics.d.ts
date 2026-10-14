/**
 * Dynamics a relative-orbital-element transition or targeting uses. Append
 * new values only; never reorder or reuse existing values.
 */
export declare enum mplRelativeDynamics {
    Unspecified = 0,
    /**
     * Two-body (Keplerian) relative motion.
     */
    Keplerian = 1,
    /**
     * Including the J2 secular effects.
     */
    J2 = 2,
    /**
     * J2 with differential drag, eccentric-orbit drag model.
     */
    J2DragEccentric = 3,
    /**
     * J2 with differential drag, arbitrary differential-drag model.
     */
    J2DragArbitrary = 4
}
//# sourceMappingURL=mplRelativeDynamics.d.ts.map