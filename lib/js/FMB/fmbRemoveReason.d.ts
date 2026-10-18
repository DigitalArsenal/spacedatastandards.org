/**
 * Why rows left the feed.
 */
export declare enum fmbRemoveReason {
    DELETE = 0,
    SUPERSEDE = 1,
    CAT_SUPERSEDE = 2,
    QUOTA = 3,
    RETENTION = 4,
    /**
     * A local record moved into a source feed (the feed's FMB has MOVED_IN).
     */
    MOVED_OUT = 5
}
//# sourceMappingURL=fmbRemoveReason.d.ts.map