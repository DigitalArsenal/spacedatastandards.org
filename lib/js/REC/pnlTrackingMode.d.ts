/**
 * How a panel is oriented over time. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum pnlTrackingMode {
    UNSPECIFIED = 0,
    /**
     * Panel normal is fixed in the body frame.
     */
    BODY_FIXED = 1,
    /**
     * Panel normal tracks the Sun (typical solar array).
     */
    SUN_TRACKING = 2,
    /**
     * Panel normal tracks the central body (typical nadir-pointing radiator or
     * antenna face).
     */
    BODY_TRACKING = 3,
    /**
     * Panel normal tracks the velocity direction.
     */
    VELOCITY_TRACKING = 4,
    OTHER = 5
}
//# sourceMappingURL=pnlTrackingMode.d.ts.map