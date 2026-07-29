/**
 * Which end of a leg a deep-space maneuver is allowed to raise or lower.
 * Append new values only.
 */
export declare enum mdpDsmMode {
    /**
     * No deep-space maneuver on this leg.
     */
    NONE = 0,
    /**
     * Raise/lower the departure end.
     */
    DEPARTURE = 1,
    /**
     * Raise/lower the arrival end.
     */
    ARRIVAL = 2,
    /**
     * Either end may be adjusted.
     */
    EITHER_END = 3
}
//# sourceMappingURL=mdpDsmMode.d.ts.map