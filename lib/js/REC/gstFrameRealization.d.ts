/**
 * Terrestrial reference frame realization the station coordinates are given
 * in. A position without its realization is not usable at the centimetre
 * level. Append new values only.
 */
export declare enum gstFrameRealization {
    UNSPECIFIED = 0,
    ITRF93 = 1,
    ITRF2000 = 2,
    ITRF2005 = 3,
    ITRF2008 = 4,
    ITRF2014 = 5,
    ITRF2020 = 6,
    /**
     * A realization not covered above; name it in FRAME_REALIZATION_NAME.
     */
    OTHER = 7
}
//# sourceMappingURL=gstFrameRealization.d.ts.map