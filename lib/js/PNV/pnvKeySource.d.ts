/**
 * Where the key that checked the signature came from. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum pnvKeySource {
    /**
     * No key was available.
     */
    None = 0,
    /**
     * The publisher's signed identity record ($EPM).
     */
    IdentityRecord = 1,
    /**
     * The key embedded in the publisher's peer identifier.
     */
    PeerIdentifier = 2,
    /**
     * A key the operator configured as trusted.
     */
    OperatorTrust = 3,
    /**
     * A key carried in the notice itself (proves integrity, not identity).
     */
    SelfAsserted = 4
}
//# sourceMappingURL=pnvKeySource.d.ts.map