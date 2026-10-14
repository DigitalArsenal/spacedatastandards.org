/**
 * Kind of product record. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum xmtRecordKind {
    Unspecified = 0,
    /**
     * Catalog record ($CAT).
     */
    Cat = 1,
    /**
     * Element set ($OMM).
     */
    Omm = 2,
    /**
     * State and covariance ($OCM).
     */
    Ocm = 3,
    /**
     * Maneuver ($MNV).
     */
    Mnv = 4,
    /**
     * Ephemeris ($OEM).
     */
    Oem = 5
}
//# sourceMappingURL=xmtRecordKind.d.ts.map