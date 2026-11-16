/**
 * Why a window of a derived ephemeris has no record.
 */
export declare enum ppeWindowStatus {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * The theory refuses somewhere in the window (decay, space-weather inputs short).
     */
    THEORY_REFUSED = 1,
    /**
     * No window of the builder's shortest span holds its tolerance there.
     */
    TOLERANCE_NOT_HELD = 2
}
//# sourceMappingURL=ppeWindowStatus.d.ts.map