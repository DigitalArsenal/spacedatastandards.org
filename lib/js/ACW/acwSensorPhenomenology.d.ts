/**
 * Sensing phenomenology of a simulated sensor.
 */
export declare enum acwSensorPhenomenology {
    UNSPECIFIED = 0,
    /**
     * Monostatic radar: range, range rate, two-way Doppler, azimuth,
     * elevation.
     */
    RADAR = 1,
    /**
     * Passive optical: right ascension and declination, magnitude.
     */
    OPTICAL = 2,
    /**
     * Passive RF: angles and the received (one-way) frequency of a target's
     * emitter.
     */
    PASSIVE_RF = 3,
    /**
     * Satellite laser ranging: two-way range.
     */
    LASER_RANGING = 4
}
//# sourceMappingURL=acwSensorPhenomenology.d.ts.map