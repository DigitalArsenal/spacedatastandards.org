/**
 * What a client must hold before the artifact may be fetched and
 * instantiated. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum pmmAccessPolicy {
    /**
     * No session, no grant: an unauthenticated client may fetch and run it.
     */
    ANONYMOUS = 0,
    /**
     * An authenticated session is required.
     */
    AUTHENTICATED = 1,
    /**
     * An entitlement or license grant is required (see `$ENT`, `$PLK`).
     */
    ENTITLED = 2
}
//# sourceMappingURL=pmmAccessPolicy.d.ts.map