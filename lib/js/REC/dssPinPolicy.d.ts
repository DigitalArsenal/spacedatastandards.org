/**
 * Retention policy for a lane on this node. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum dssPinPolicy {
    None = 0,
    /**
     * Keep a bounded local cache.
     */
    Cache = 1,
    /**
     * Pin every publication.
     */
    Pin = 2,
    /**
     * Pin and archive every publication.
     */
    Archive = 3
}
//# sourceMappingURL=dssPinPolicy.d.ts.map