/**
 * Whether a measurement is a detection or a bound.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum phbBoundKind {
    /**
     * A detection: VALUE is the measured brightness.
     */
    DETECTION = 0,
    /**
     * Not detected: the source is fainter than VALUE (a flux upper limit, a
     * magnitude lower bound).
     */
    UPPER_LIMIT = 1,
    /**
     * Saturated or confused: the source is at least as bright as VALUE.
     */
    LOWER_LIMIT = 2
}
//# sourceMappingURL=phbBoundKind.d.ts.map