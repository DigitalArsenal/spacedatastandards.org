/**
 * Trust predicate evaluated by a rule policy. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum trpPredicateKind {
    /**
     * A subject must hold at least the configured value.
     */
    MinValueLocked = 0,
    /**
     * A subject must have held the configured value for a minimum duration.
     */
    ValueForDuration = 1,
    /**
     * A subject's qualifying value must use an allowed asset.
     */
    AllowedTokens = 2,
    /**
     * A subject must satisfy an X-of-N trusted-connection rule.
     */
    TrustedConnections = 3
}
//# sourceMappingURL=trpPredicateKind.d.ts.map