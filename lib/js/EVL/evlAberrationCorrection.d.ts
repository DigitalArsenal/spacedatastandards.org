/**
 * Whether the geometry is evaluated at the observed instant or corrected for
 * signal travel. Append new values only.
 */
export declare enum evlAberrationCorrection {
    UNSPECIFIED = 0,
    /**
     * Geometric positions at the same instant.
     */
    NO_CORRECTION = 1,
    /**
     * Positions corrected for one-way signal travel time.
     */
    LIGHT_TIME = 2,
    /**
     * Light time and the observer's transverse motion.
     */
    LIGHT_TIME_AND_STELLAR_ABERRATION = 3
}
//# sourceMappingURL=evlAberrationCorrection.d.ts.map