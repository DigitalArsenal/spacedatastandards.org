/**
 * The reference a vertical boundary value is stated against. Datum rides
 * PER BOUNDARY, never once for the volume: a floor of 1200 ft AGL under a
 * ceiling of FL180 is the common case, not the exception. Values are metres
 * for every member except FLIGHT_LEVEL, which is hundreds of feet by
 * definition of the flight-level scale.
 */
export declare enum avlVerticalDatum {
    /**
     * No datum stated. A consumer MUST refuse a boundary whose value is
     * present but whose datum is UNSPECIFIED rather than guess a reference.
     */
    UNSPECIFIED = 0,
    /**
     * Metres above ground level.
     */
    AGL = 1,
    /**
     * Metres above mean sea level.
     */
    MSL = 2,
    /**
     * Flight level: the value is the flight level number (hundreds of feet
     * on the standard atmosphere), not metres.
     */
    FLIGHT_LEVEL = 3,
    /**
     * Metres above the WGS 84 ellipsoid.
     */
    WGS84_ELLIPSOID = 4,
    /**
     * The ground or water surface itself; the boundary value is NaN.
     */
    SURFACE = 5,
    /**
     * No upper limit; the boundary value is NaN. A datum member, never a
     * sentinel altitude.
     */
    UNLIMITED = 6
}
//# sourceMappingURL=avlVerticalDatum.d.ts.map