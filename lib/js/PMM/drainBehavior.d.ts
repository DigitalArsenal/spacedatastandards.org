/**
 * Drain semantics for a method that operates over queued stream frames.
 * Enum name is deliberately distinct from any camelCase field name
 * (`DRAIN_POLICY` would collide otherwise).
 */
export declare enum drainBehavior {
    /**
     * One invocation consumes exactly one input frame.
     */
    SINGLE_SHOT = 0,
    /**
     * Invocation drains queued work until it voluntarily yields.
     */
    DRAIN_UNTIL_YIELD = 1,
    /**
     * Invocation drains to empty before returning.
     */
    DRAIN_TO_EMPTY = 2
}
//# sourceMappingURL=drainBehavior.d.ts.map