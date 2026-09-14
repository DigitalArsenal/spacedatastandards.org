/**
 * Vertical coordinate of the field. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum wxfLevelKind {
    /**
     * Earth's surface; LEVEL_VALUE is unused.
     */
    Surface = 0,
    /**
     * Fixed height above ground; LEVEL_VALUE in metres.
     */
    HeightAboveGround = 1,
    /**
     * Isobaric level; LEVEL_VALUE in pascal.
     */
    PressureLevel = 2,
    /**
     * Mean sea level; LEVEL_VALUE is unused.
     */
    MeanSeaLevel = 3,
    /**
     * Whole atmospheric column; LEVEL_VALUE is unused.
     */
    EntireAtmosphere = 4,
    /**
     * Top of atmosphere; LEVEL_VALUE is unused.
     */
    TopOfAtmosphere = 5
}
//# sourceMappingURL=wxfLevelKind.d.ts.map