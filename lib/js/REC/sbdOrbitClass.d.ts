/**
 * Orbit class, as JPL SBDB names them.
 */
export declare enum sbdOrbitClass {
    /**
     * Not classified
     */
    Unspecified = 0,
    /**
     * Atira (interior Earth object): Q < 0.983 AU
     */
    IEO = 1,
    /**
     * Aten: a < 1.0 AU, Q > 0.983 AU
     */
    ATE = 2,
    /**
     * Apollo: a > 1.0 AU, q < 1.017 AU
     */
    APO = 3,
    /**
     * Amor: 1.017 AU < q < 1.3 AU
     */
    AMO = 4,
    /**
     * Mars-crossing asteroid: 1.3 AU < q < 1.666 AU, a < 3.2 AU
     */
    MCA = 5,
    /**
     * Inner main-belt asteroid: a < 2.0 AU, q > 1.666 AU
     */
    IMB = 6,
    /**
     * Main-belt asteroid: 2.0 AU < a < 3.2 AU, q > 1.666 AU
     */
    MBA = 7,
    /**
     * Outer main-belt asteroid: 3.2 AU < a < 4.6 AU
     */
    OMB = 8,
    /**
     * Jupiter trojan: 4.6 AU < a < 5.5 AU, e < 0.3
     */
    TJN = 9,
    /**
     * Centaur: 5.5 AU < a < 30.1 AU
     */
    CEN = 10,
    /**
     * Trans-Neptunian object: a > 30.1 AU
     */
    TNO = 11,
    /**
     * Parabolic asteroid: e = 1
     */
    PAA = 12,
    /**
     * Hyperbolic asteroid: e > 1
     */
    HYA = 13,
    /**
     * Asteroid on an orbit matching no other class
     */
    AST = 14,
    /**
     * Encke-type comet: Tisserand parameter with Jupiter > 3, a < a(Jupiter)
     */
    ETc = 15,
    /**
     * Jupiter-family comet: 2 < Tisserand parameter with Jupiter < 3
     */
    JFc = 16,
    /**
     * Halley-type comet: 20 y < P < 200 y
     */
    HTC = 17,
    /**
     * Chiron-type comet: Tisserand parameter with Jupiter > 3, a > a(Jupiter)
     */
    CTc = 18,
    /**
     * Parabolic comet: e = 1
     */
    PAR = 19,
    /**
     * Hyperbolic comet: e > 1
     */
    HYP = 20,
    /**
     * Comet on an orbit matching no other class
     */
    COM = 21
}
//# sourceMappingURL=sbdOrbitClass.d.ts.map