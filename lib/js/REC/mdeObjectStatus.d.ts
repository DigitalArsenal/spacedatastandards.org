/**
 * Status of one object in a detection run. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum mdeObjectStatus {
    Unspecified = 0,
    /**
     * Screened by the enabled detectors.
     */
    Screened = 1,
    /**
     * Too short a history to screen (DETAIL says why).
     */
    InsufficientHistory = 2
}
//# sourceMappingURL=mdeObjectStatus.d.ts.map