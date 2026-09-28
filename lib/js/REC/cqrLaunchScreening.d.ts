/**
 * How one criterion decides a violation.
 */
export declare enum cqrLaunchScreening {
    UNSPECIFIED = 0,
    /**
     * Separation below RADIUS_M.
     */
    SPHERICAL = 1,
    /**
     * Separation inside the RADIAL_M / IN_TRACK_M / CROSS_TRACK_M ellipsoid,
     * centred on the orbiting object in its radial/in-track/cross-track frame.
     */
    ELLIPSOIDAL = 2,
    /**
     * Probability of collision above MAX_PROBABILITY.
     */
    PROBABILITY = 3
}
//# sourceMappingURL=cqrLaunchScreening.d.ts.map