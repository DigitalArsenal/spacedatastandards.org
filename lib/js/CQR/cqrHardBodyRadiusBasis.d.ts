/**
 * Where an object's hard-body radius came from.
 */
export declare enum cqrHardBodyRadiusBasis {
    UNSPECIFIED = 0,
    /**
     * Given with the source, by an operator or the requester.
     */
    SUPPLIED = 1,
    /**
     * Half the catalog entry's characteristic size (CAT SIZE).
     */
    CATALOG_SIZE = 2,
    /**
     * Radius of a sphere of the catalog entry's radar cross section,
     * sqrt(RCS / pi): a radar measure, not a physical size.
     */
    RADAR_CROSS_SECTION = 3,
    /**
     * Half the request's COMBINED_RADIUS_M: no object-specific value.
     */
    REQUEST_DEFAULT = 4
}
//# sourceMappingURL=cqrHardBodyRadiusBasis.d.ts.map