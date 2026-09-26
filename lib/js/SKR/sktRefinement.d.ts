/**
 * How a tile relates to its ancestors and children.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sktRefinement {
    /**
     * The tile adds to its ancestors (point layers).
     */
    ADD = 0,
    /**
     * The tile replaces its parent (map layers).
     */
    REPLACE = 1
}
//# sourceMappingURL=sktRefinement.d.ts.map