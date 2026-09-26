/**
 * Which place the positions of a point tile are.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sktPlaceKind {
    UNSPECIFIED = 0,
    /**
     * Barycentric catalogue place at EPOCH: proper motion applied from the
     * catalogue epoch, nothing else.
     */
    CATALOG = 1,
    /**
     * Astrometric place for the observer named by OBSERVER_ID at EPOCH:
     * space motion and parallax applied, no aberration or deflection.
     */
    ASTROMETRIC = 2,
    /**
     * Apparent place for the observer named by OBSERVER_ID at EPOCH: space
     * motion, parallax, light deflection and aberration applied, in FRAME
     * axes.
     */
    APPARENT = 3
}
//# sourceMappingURL=sktPlaceKind.d.ts.map