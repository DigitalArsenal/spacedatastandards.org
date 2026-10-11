/**
 * What kind of data a source supplies.
 */
export declare enum pvnSourceKind {
    /**
     * Not stated
     */
    Unspecified = 0,
    /**
     * Element sets of a catalog
     */
    ElementSet = 1,
    /**
     * Ephemerides: states over time, from an operator or a precise-orbit service
     */
    Ephemeris = 2,
    /**
     * Observations (ranges, angles, other measurements) that states are
     * estimated from
     */
    Observation = 3
}
//# sourceMappingURL=pvnSourceKind.d.ts.map