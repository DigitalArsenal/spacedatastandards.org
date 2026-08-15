/**
 * Order in which the NY rows appear in the payload. Without it a field can be
 * decoded upside down and still look plausible.
 *
 * ORDINALS ARE WIRE VALUES. New orders are APPENDED ONLY.
 */
export declare enum agfRowOrder {
    UNSPECIFIED = 0,
    /**
     * Row 0 is the northernmost (or largest-Y) row.
     */
    FIRST_ROW_NORTH = 1,
    /**
     * Row 0 is the southernmost (or smallest-Y) row.
     */
    FIRST_ROW_SOUTH = 2
}
//# sourceMappingURL=agfRowOrder.d.ts.map