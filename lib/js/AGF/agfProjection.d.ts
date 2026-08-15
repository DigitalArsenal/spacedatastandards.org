/**
 * Map projection of the grid. Each member fixes which members of
 * AGFProjectionParameters are meaningful; the parameters themselves are
 * always explicit.
 *
 * ORDINALS ARE WIRE VALUES. New projections are APPENDED ONLY.
 */
export declare enum agfProjection {
    UNSPECIFIED = 0,
    /**
     * Perspective view from a fixed sub-satellite longitude, addressed in
     * scan angles. Requires SUB_SATELLITE_LON_DEG and PERSPECTIVE_HEIGHT_M.
     */
    GEOSTATIONARY = 1,
    /**
     * Regular latitude/longitude (plate carree) grid.
     */
    LATLON_REGULAR = 2,
    LAMBERT_CONFORMAL = 3,
    POLAR_STEREOGRAPHIC = 4,
    MERCATOR = 5
}
//# sourceMappingURL=agfProjection.d.ts.map