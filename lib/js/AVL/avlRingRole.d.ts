/**
 * Whether a ring bounds airspace or punches a hole in it.
 *
 * `UNSPECIFIED` holds ordinal 0 deliberately; a consumer MUST refuse a ring
 * that does not state its role rather than assume OUTER.
 */
export declare enum avlRingRole {
    UNSPECIFIED = 0,
    OUTER = 1,
    INNER = 2
}
//# sourceMappingURL=avlRingRole.d.ts.map