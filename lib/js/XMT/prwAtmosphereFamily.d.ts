export declare enum prwAtmosphereFamily {
    UNSPECIFIED = 0,
    NRLMSISE00 = 1,
    EXPONENTIAL = 2,
    USSA1976 = 3,
    HARRIS_PRIESTER = 4,
    /**
     * Jacchia-Roberts (Roberts, Celestial Mechanics 4, 1971): the closed-form
     * evaluation of Jacchia's static diffusion model with the constants NASA
     * GTDS and GMAT use (inflection temperature, mean molecular mass and
     * 100 km composition of Jacchia 1971, SAO SR 332; ATM's JR71). The drivers:
     * F10.7 of the previous day, that day's 81-day centred average, and the
     * three-hour Kp 6.7 h earlier (PRW.SPACE_WEATHER, or WEATHER's values held
     * constant). A VCM's JACCHIA_70 is carried here.
     */
    JACCHIA_ROBERTS = 5,
    /**
     * Jacchia-Bowman 2008 (Bowman et al., AIAA 2008-6438): solar indices and
     * Dst-derived temperature change from PRW.JB2008_INDICES.
     */
    JB2008 = 6
}
//# sourceMappingURL=prwAtmosphereFamily.d.ts.map