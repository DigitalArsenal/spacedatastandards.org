/**
 * Physical representation of the tabulated flux or density quantity. Append new values only.
 */
export declare enum rbfFluxKind {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * Omnidirectional integral flux above energy threshold E (cm^-2 s^-1).
     */
    OMNIDIRECTIONAL_INTEGRAL = 1,
    /**
     * Omnidirectional differential flux at energy E (cm^-2 s^-1 MeV^-1).
     */
    OMNIDIRECTIONAL_DIFFERENTIAL = 2,
    /**
     * Unidirectional differential flux (cm^-2 s^-1 MeV^-1 sr^-1).
     */
    UNIDIRECTIONAL_DIFFERENTIAL = 3,
    /**
     * Cold or warm plasma number density (cm^-3).
     */
    PLASMA_DENSITY = 4
}
//# sourceMappingURL=rbfFluxKind.d.ts.map