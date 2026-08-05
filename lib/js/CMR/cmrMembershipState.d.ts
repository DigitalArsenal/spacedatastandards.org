/**
 * Current state of the asserted membership. Ordinals are wire values: append
 * only; never reorder or reuse.
 */
export declare enum cmrMembershipState {
    /**
     * The source does not state whether the membership is current.
     */
    UNSPECIFIED = 0,
    /**
     * The object is a current member of the constellation.
     */
    ACTIVE = 1,
    /**
     * The object was formerly a member and is retained for history.
     */
    FORMER = 2
}
//# sourceMappingURL=cmrMembershipState.d.ts.map