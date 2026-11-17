/**
 * What a course of action does. Append new values only.
 */
export declare enum coaKind {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * A maneuver. When it answers an event it is made LEAD_SECONDS before EVENT_EPOCH and is back in
     * place within RETURN_WITHIN_SECONDS after it.
     */
    MANEUVER = 1,
    /**
     * No action: the event is accepted.
     */
    RIDE_OUT = 2,
    /**
     * STEPS, in order, restore service after the event.
     */
    RECOVERY = 3
}
//# sourceMappingURL=coaKind.d.ts.map