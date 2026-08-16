/**
 * Scheme that maps a LEVEL/X/Y address to a region of the ellipsoid. The
 * scheme is stated, never inferred from tile counts. Ordinals are wire
 * values: append only; never reorder or reuse.
 */
export declare enum dttTilingScheme {
    /**
     * The scheme this tile is addressed in is not stated. Ordinal 0 so an
     * unset field can never be read as a real scheme.
     */
    UNSPECIFIED = 0,
    /**
     * Equirectangular geographic scheme on WGS 84, two root tiles at level 0
     * covering [-180,0] and [0,180] degrees of longitude.
     */
    GEOGRAPHIC_WGS84 = 1,
    /**
     * Single-root equirectangular geographic scheme, one root tile at level 0.
     */
    GEOGRAPHIC_SINGLE_ROOT = 2,
    /**
     * Spherical Mercator scheme, one square root tile at level 0.
     */
    WEB_MERCATOR = 3,
    /**
     * A scheme this enum does not model; the publisher states it out of band
     * and the tile is not addressable by a consumer that does not know it.
     */
    CUSTOM = 4
}
//# sourceMappingURL=dttTilingScheme.d.ts.map