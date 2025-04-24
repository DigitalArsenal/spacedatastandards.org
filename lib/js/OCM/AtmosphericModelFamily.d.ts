/**
 * Canonical list of atmosphere model families per CCSDS SANA registry.
 * Use the `YEAR` field in the ATM message to specify the variant implementation.
 */
export declare enum AtmosphericModelFamily {
    /**
     * COSPAR International Reference Atmosphere
     * Known years: 1965, 1972, 1986, 1990
     */
    CIRA_XX = 0,
    /**
     * Drag Temperature Model
     * Known years: 1978, 1994, 2000, 2009, 2012, 2013, 2020
     */
    DTM_XX = 1,
    /**
     * Global Ionosphere-Thermosphere Model
     * GITM has no specific year versions defined
     */
    GITM = 2,
    /**
     * GOST atmospheric density model
     * Known version: 2004 (GOST R 25645.166-2004)
     */
    GOST = 3,
    /**
     * Global Reference Atmospheric Model
     * Known version: 2016
     */
    GRAM_XX = 4,
    /**
     * Harris-Priester empirical model
     * Known version: 1962
     */
    HP = 5,
    /**
     * Jacchia atmosphere model with HASDM correction overlay
     * Based on Jacchia 1970 with HASDM (DCA) overlay
     */
    JAC_HASDM = 6,
    /**
     * Jacchia-Gill bi-polynomial interpolation
     * Interpolates Jacchia 1971
     */
    JAC_GILL = 7,
    /**
     * Jacchia-Bowman empirical model
     * Known versions: 2006 (JB2006), 2008 (JB2008)
     */
    JB08 = 8,
    /**
     * Jacchia-Roberts analytic model
     * Known version: 1971
     */
    JR71 = 9,
    /**
     * Jacchia static diffusion models
     * Known years: 1970, 1971, 1977
     */
    JXX = 10,
    /**
     * Marshall Engineering Thermosphere
     * Known version: 2007
     */
    MET_XX = 11,
    /**
     * MSIS empirical model
     * Known version: 1986
     */
    MSIS_86 = 12,
    /**
     * MSISE empirical model with exosphere extension
     * Known version: 1990
     */
    MSISE_90 = 13,
    /**
     * NRLMSISE empirical model
     * Known version: 2000 (NRLMSISE-00E)
     */
    NRLMSIS00E = 14,
    /**
     * Thermosphere-Ionosphere Electrodynamic General Circulation Model
     * Based on TIME-GCM, no version specified
     */
    TIECGM = 15,
    /**
     * U.S. Standard Atmosphere
     * Known versions: 1962, 1976
     */
    USSA_XX = 16
}
//# sourceMappingURL=AtmosphericModelFamily.d.ts.map