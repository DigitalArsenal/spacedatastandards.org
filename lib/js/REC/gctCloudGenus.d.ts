/**
 * Meteorological genus of a variant, where the producer classified it.
 * ORDINALS ARE WIRE VALUES; new genera are APPENDED ONLY.
 */
export declare enum gctCloudGenus {
    /**
     * Not classified.
     */
    UNSPECIFIED = 0,
    /**
     * Cumulus humilis: fair-weather cumulus, wider than deep.
     */
    CUMULUS_HUMILIS = 1,
    /**
     * Cumulus mediocris.
     */
    CUMULUS_MEDIOCRIS = 2,
    /**
     * Cumulus congestus: towering cumulus.
     */
    CUMULUS_CONGESTUS = 3,
    /**
     * Cumulonimbus, with or without an anvil.
     */
    CUMULONIMBUS = 4,
    /**
     * Stratocumulus deck.
     */
    STRATOCUMULUS = 5,
    /**
     * Stratus.
     */
    STRATUS = 6,
    /**
     * Altocumulus / altostratus mid-level bank.
     */
    ALTOCUMULUS = 7,
    /**
     * Cirrus / cirrostratus sheet.
     */
    CIRRUS = 8,
    /**
     * Nimbostratus.
     */
    NIMBOSTRATUS = 9,
    /**
     * The merged mixture of a whole tile, not one cloud.
     */
    TILE_MIXTURE = 10
}
//# sourceMappingURL=gctCloudGenus.d.ts.map