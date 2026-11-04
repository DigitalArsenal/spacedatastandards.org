/**
 * What a product the catalog selected for an object is.
 */
export declare enum catalogProductKind {
    /**
     * Not stated
     */
    Unspecified = 0,
    /**
     * An element set under SGP4: an $OMM with MEAN_ELEMENT_THEORY SGP4, or an $OCM whose
     * MEAN_ELEMENTS.MEAN_ELEMENT_THEORY is SGP4
     */
    Sgp4Elements = 1,
    /**
     * As Sgp4Elements, under SGP4XP
     */
    Sgp4XpElements = 2,
    /**
     * $OCM: a state and its covariance
     */
    StateCovariance = 3,
    /**
     * An $OCM whose MEAN_ELEMENTS.MEAN_ELEMENT_THEORY is AP
     */
    ApElements = 4
}
//# sourceMappingURL=catalogProductKind.d.ts.map