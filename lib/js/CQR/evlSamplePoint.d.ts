/**
 * Which instant inside an event a sample belongs to. Append new values only.
 */
export declare enum evlSamplePoint {
    UNSPECIFIED = 0,
    EVENT_START = 1,
    EVENT_STOP = 2,
    /**
     * The instant of the event's extremum: deepest obscuration, peak
     * elevation, closest approach.
     */
    EVENT_EXTREMUM = 3,
    /**
     * A sample inside the event that is none of the above.
     */
    INTERIOR = 4
}
//# sourceMappingURL=evlSamplePoint.d.ts.map