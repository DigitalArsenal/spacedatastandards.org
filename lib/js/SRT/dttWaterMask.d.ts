/**
 * What the tile states about water cover over its own extent. A renderer
 * deciding whether a surface is reflective reads this and never infers water
 * from a height of zero.
 */
export declare enum dttWaterMask {
    /**
     * The tile states nothing about water cover.
     */
    NONE = 0,
    /**
     * The whole tile extent is land.
     */
    UNIFORM_LAND = 1,
    /**
     * The whole tile extent is water.
     */
    UNIFORM_WATER = 2,
    /**
     * A per-sample mask accompanies the tile, referenced by WATER_MASK.
     */
    RASTER = 3
}
//# sourceMappingURL=dttWaterMask.d.ts.map