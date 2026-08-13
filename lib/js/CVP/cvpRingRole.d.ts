/**
 * Whether a ring bounds coverage or punches a hole in it.
 *
 * `UNSPECIFIED` holds ordinal 0 deliberately, and a consumer MUST refuse a
 * ring that does not state its role rather than assume OUTER: assuming turns
 * a keep-out hole into a coverage claim.
 */
export declare enum cvpRingRole {
    UNSPECIFIED = 0,
    OUTER = 1,
    INNER = 2
}
//# sourceMappingURL=cvpRingRole.d.ts.map