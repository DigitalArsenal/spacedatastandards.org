/**
 * Direction of the LEVELS sequence. Without it an inverted profile decodes
 * silently.
 *
 * ORDINALS ARE WIRE VALUES. New orders are APPENDED ONLY.
 */
export declare enum agvLevelOrder {
    UNSPECIFIED = 0,
    /**
     * LEVELS strictly increases with index.
     */
    ASCENDING = 1,
    /**
     * LEVELS strictly decreases with index.
     */
    DESCENDING = 2
}
//# sourceMappingURL=agvLevelOrder.d.ts.map