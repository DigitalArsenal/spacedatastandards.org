/**
 * The weight curve of the handover blend between two consecutive sets.
 */
export declare enum pcfBlendShape {
    /**
     * Smoothstep weight on the two propagated states (the default).
     */
    SMOOTHSTEP = 0,
    /**
     * Cubic Hermite matching of position and velocity across the window.
     */
    HERMITE = 1
}
//# sourceMappingURL=pcfBlendShape.d.ts.map