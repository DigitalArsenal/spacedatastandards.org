/**
 * How a consumer interpolates between performance points.
 */
export declare enum vepInterpolation {
    /**
     * No method stated; a consumer MUST treat the table as TABLE_LOOKUP
     * rather than invent an interpolant.
     */
    UNSPECIFIED = 0,
    /**
     * Nearest point in (regime, altitude, speed).
     */
    NEAREST = 1,
    /**
     * Linear along the single varying axis.
     */
    LINEAR = 2,
    /**
     * Bilinear over altitude and speed within a regime.
     */
    BILINEAR = 3,
    /**
     * Exact-key lookup only; no interpolation between points.
     */
    TABLE_LOOKUP = 4
}
//# sourceMappingURL=vepInterpolation.d.ts.map