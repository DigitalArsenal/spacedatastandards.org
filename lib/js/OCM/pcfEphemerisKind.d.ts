/**
 * Where the Sun, Moon and planets are read from. Append new values only.
 */
export declare enum pcfEphemerisKind {
    /**
     * The provider's own source, named in EPHEMERIS_SOURCE.
     */
    UNSPECIFIED = 0,
    /**
     * A closed-form analytic series (low precision, no kernel to load).
     */
    ANALYTIC_SERIES = 1,
    /**
     * A planetary ephemeris kernel (SPK), named in EPHEMERIS_SOURCE.
     */
    PLANETARY_KERNEL = 2
}
//# sourceMappingURL=pcfEphemerisKind.d.ts.map