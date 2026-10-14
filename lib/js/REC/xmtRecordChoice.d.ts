/**
 * Outcome of the catalog-record choice for one object. Append new values
 * only; never reorder or reuse existing values.
 */
export declare enum xmtRecordChoice {
    /**
     * Not decided.
     */
    Unspecified = 0,
    /**
     * A record was selected and published.
     */
    Selected = 1,
    /**
     * Layers disagree on the object's identifiers; withheld until an override
     * names a layer.
     */
    IdentityConflict = 2,
    /**
     * No valid international designator under the international-designator
     * rule; withheld.
     */
    MissingDesignator = 3
}
//# sourceMappingURL=xmtRecordChoice.d.ts.map