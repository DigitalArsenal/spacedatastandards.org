/**
 * Outcome of a page. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum qrpStatus {
    Ok = 0,
    /**
     * A bounded scan returned before covering every stored record.
     */
    Partial = 1,
    /**
     * The store is busy; retry after RETRY_AFTER_MS.
     */
    Busy = 2,
    /**
     * The serving snapshot is not warm yet; retry after RETRY_AFTER_MS.
     */
    Cold = 3,
    Error = 4
}
//# sourceMappingURL=qrpStatus.d.ts.map