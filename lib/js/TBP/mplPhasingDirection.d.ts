/**
 * Way to close an along-track gap in phasing. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum mplPhasingDirection {
    /**
     * Whichever of catching up or falling behind is the smaller angle.
     */
    Shortest = 0,
    /**
     * The chaser gains phase (relative phase angle in (0, 360] deg).
     */
    CatchUp = 1,
    /**
     * The chaser loses phase (relative phase angle in [-360, 0) deg).
     */
    FallBehind = 2
}
//# sourceMappingURL=mplPhasingDirection.d.ts.map