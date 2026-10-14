/**
 * Whether a named parameter can actually be evaluated by the publisher of
 * this catalog. A name is DECLARED so that a consumer can resolve, report and
 * refuse it deterministically; declaring it is not a claim that it computes.
 * Append new values only.
 */
export declare enum pceAvailability {
    UNSPECIFIED = 0,
    /**
     * The publisher evaluates this parameter.
     */
    IMPLEMENTED = 1,
    /**
     * The name is ratified and reserved, and the publisher REFUSES it with
     * NOT_IMPLEMENTED. UNAVAILABLE_REASON states what is missing. A publisher
     * MUST NOT substitute a neighbouring quantity.
     */
    DECLARED_UNAVAILABLE = 2,
    /**
     * Evaluated, but superseded; a consumer SHOULD migrate to the parameter
     * named in SUPERSEDED_BY.
     */
    DEPRECATED = 3
}
//# sourceMappingURL=pceAvailability.d.ts.map