/**
 * How a layer divides into tiles.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sktPartitionScheme {
    /**
     * HEALPix pixels in the NESTED scheme, addressed by ORDER and PIXEL.
     */
    HEALPIX = 0,
    /**
     * Cubic nodes of an octree in heliocentric ICRS axes, parsecs, addressed
     * by OCTREE_LEVEL and OCTREE_KEY.
     */
    OCTREE_HELIO_ICRS = 1
}
//# sourceMappingURL=sktPartitionScheme.d.ts.map