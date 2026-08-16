/**
 * How a group's membership was established.
 */
export declare enum egpMembershipMode {
    UNSPECIFIED = 0,
    /**
     * Members were chosen one by one; MEMBERS is the whole truth.
     */
    ENUMERATED = 1,
    /**
     * Members were produced by evaluating QUERY; MEMBERS is that evaluation
     * frozen at QUERY.EVALUATED_AT.
     */
    QUERY_SNAPSHOT = 2,
    /**
     * QUERY is the definition and MEMBERS is an advisory cache a consumer may
     * recompute; the query wins on disagreement.
     */
    QUERY_LIVE = 3
}
//# sourceMappingURL=egpMembershipMode.d.ts.map