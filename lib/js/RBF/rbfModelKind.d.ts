/**
 * Radiation belt empirical or physical model family. Append new values only.
 */
export declare enum rbfModelKind {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * Earth trapped electron/proton AE9/AP9-class model.
     */
    AE9_AP9_CLASS = 1,
    /**
     * Jovian GIRE3/JOSE-class radiation belt model.
     */
    GIRE3_JOSE_CLASS = 2,
    /**
     * Saturnian Salammbo-class radiation belt model.
     */
    SALAMMBO_CLASS = 3,
    /**
     * Ice-giant Voyager empirical trapped radiation model.
     */
    VOYAGER_EMPIRICAL = 4,
    /**
     * Io plasma torus density and heavy-ion environment model.
     */
    IO_PLASMA_TORUS = 5,
    /**
     * Custom or externally supplied flux table.
     */
    CUSTOM = 6
}
//# sourceMappingURL=rbfModelKind.d.ts.map