/**
 * Action a client requests on a lane. Append new values only; never reorder
 * or reuse existing values.
 */
export declare enum dssAction {
    None = 0,
    /**
     * Run one bounded catch-up pass now.
     */
    Sync = 1,
    Subscribe = 2,
    Unsubscribe = 3,
    Pin = 4,
    Unpin = 5,
    /**
     * Rebuild the local materialisation from pinned publications.
     */
    Hydrate = 6
}
//# sourceMappingURL=dssAction.d.ts.map