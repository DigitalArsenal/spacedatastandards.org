/**
 * Post-Newtonian corrections to the central body's acceleration (IERS
 * Conventions (2010) eq. 10.12). NONE leaves them out. SCHWARZSCHILD is the
 * point-mass term only. IERS_2010 adds Lense-Thirring and de Sitter
 * (geodesic) precession.
 */
export declare enum prwRelativityTerms {
    NONE = 0,
    SCHWARZSCHILD = 1,
    IERS_2010 = 2
}
//# sourceMappingURL=prwRelativityTerms.d.ts.map