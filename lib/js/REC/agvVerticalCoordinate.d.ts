/**
 * The kind of vertical level LEVELS enumerates. It fixes the units of LEVELS
 * and whether the hybrid coefficients are required.
 *
 * ORDINALS ARE WIRE VALUES. New coordinates are APPENDED ONLY.
 */
export declare enum agvVerticalCoordinate {
    UNSPECIFIED = 0,
    /**
     * Isobaric levels; LEVELS values are pascals.
     */
    PRESSURE_PA = 1,
    /**
     * Geometric altitude above the reference ellipsoid; LEVELS values are
     * metres.
     */
    GEOMETRIC_HEIGHT_M = 2,
    /**
     * Geopotential height; LEVELS values are metres.
     */
    GEOPOTENTIAL_HEIGHT_M = 3,
    /**
     * Hybrid sigma-pressure levels. LEVELS carries the level values, and the
     * hybrid coefficients plus a surface pressure are REQUIRED to turn them
     * into pressures.
     */
    HYBRID_SIGMA = 4,
    /**
     * Native model level indices. Meaningless as a height without the hybrid
     * coefficients; a consumer MUST NOT treat the index as an altitude.
     */
    MODEL_LEVEL = 5
}
//# sourceMappingURL=agvVerticalCoordinate.d.ts.map