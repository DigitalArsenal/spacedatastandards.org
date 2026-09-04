/**
 * Retention rule for a lane's publications on the subscribing node. Append
 * new values only; never reorder or reuse existing values.
 */
export declare enum dssRetention {
    /**
     * Each new publication replaces the previous batch; the lane holds one
     * current set.
     */
    ReplaceCurrent = 0,
    /**
     * Every publication is kept and pinned; history stays retrievable.
     */
    ArchiveAll = 1
}
//# sourceMappingURL=dssRetention.d.ts.map