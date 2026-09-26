/**
 * Outcome of a sky query.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum skrStatus {
    OK = 0,
    /**
     * IDENTIFY found no consistent match.
     */
    UNSOLVED = 1,
    /**
     * IDENTIFY was given fewer than three detections.
     */
    TOO_FEW_DETECTIONS = 2,
    /**
     * Fewer than three catalogue rows pass the magnitude limit.
     */
    NO_CATALOG = 3,
    /**
     * The query was malformed; MESSAGE says how.
     */
    BAD_REQUEST = 4
}
//# sourceMappingURL=skrStatus.d.ts.map