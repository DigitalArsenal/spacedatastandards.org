/**
 * Outcome of one observation's association. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum asgAssociationOutcome {
    /**
     * Not decided.
     */
    Unspecified = 0,
    /**
     * Assigned to a predicted object.
     */
    Associated = 1,
    /**
     * Uncorrelated: assigned to no predicted object (a UCT).
     */
    Uncorrelated = 2
}
//# sourceMappingURL=asgAssociationOutcome.d.ts.map