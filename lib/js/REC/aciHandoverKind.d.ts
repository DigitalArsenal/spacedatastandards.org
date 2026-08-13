/**
 * How service moved between links at a handover.
 */
export declare enum aciHandoverKind {
    UNSPECIFIED = 0,
    /**
     * The successor link was established before the predecessor was released.
     */
    MAKE_BEFORE_BREAK = 1,
    /**
     * The predecessor was released before the successor was established.
     */
    BREAK_BEFORE_MAKE = 2,
    /**
     * Instantaneous switch with no modelled overlap or gap.
     */
    HARD = 3,
    /**
     * Both links carried traffic simultaneously for the overlap.
     */
    SOFT = 4,
    /**
     * Executed from a schedule rather than triggered by a measured condition.
     */
    SCHEDULED = 5
}
//# sourceMappingURL=aciHandoverKind.d.ts.map