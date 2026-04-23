/**
 * Constructive solid-geometry composition operation for SDFs.
 */
export declare enum sdfOperation {
    /**
     * No composition (primitive only).
     */
    NONE = 0,
    /**
     * Union (min of SDFs) — inside either.
     */
    UNION = 1,
    /**
     * Intersection (max of SDFs) — inside both.
     */
    INTERSECTION = 2,
    /**
     * Subtraction (A - B) — inside A but not B.
     */
    SUBTRACTION = 3,
    /**
     * Smooth union with a blend radius.
     */
    SMOOTH_UNION = 4
}
//# sourceMappingURL=sdfOperation.d.ts.map