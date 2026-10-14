/**
 * How two ephemeris versions were compared. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum mdeComparisonMode {
    Unspecified = 0,
    /**
     * No comparable revolution (DETAIL says why).
     */
    NoComparison = 1,
    /**
     * The versions overlap in time.
     */
    Overlap = 2,
    /**
     * The versions are adjacent; the comparison spans the gap.
     */
    Adjacent = 3,
    /**
     * A change inside one version.
     */
    WithinVersion = 4
}
//# sourceMappingURL=mdeComparisonMode.d.ts.map