/**
 * Operating regime a performance point is stated for. Ordinals are wire
 * values: append only.
 */
export declare enum vepRegime {
    UNSPECIFIED = 0,
    TAKEOFF = 1,
    CLIMB = 2,
    CRUISE = 3,
    LOITER = 4,
    DESCENT = 5,
    TAXI = 6,
    /**
     * Steady transit for surface and subsurface vehicles.
     */
    TRANSIT = 7,
    /**
     * High-consumption maneuvering.
     */
    MANEUVER = 8
}
//# sourceMappingURL=vepRegime.d.ts.map