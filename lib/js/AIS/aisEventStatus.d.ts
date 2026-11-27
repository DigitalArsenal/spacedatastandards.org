/**
 * Execution outcome of an AI session event. Append new values only.
 */
export declare enum aisEventStatus {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * Succeeded normally.
     */
    OK = 1,
    /**
     * In progress or accepted.
     */
    PENDING = 2,
    /**
     * Failed due to provider, tool, or runtime error.
     */
    ERROR = 3,
    /**
     * Aborted before completion.
     */
    ABORTED = 4,
    /**
     * Rejected due to rate or quota limits.
     */
    RATE_LIMITED = 5
}
//# sourceMappingURL=aisEventStatus.d.ts.map