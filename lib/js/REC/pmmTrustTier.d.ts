/**
 * Provider-declared standing of a module in its own offering. Append new
 * values only; never reorder or reuse existing values.
 */
export declare enum pmmTrustTier {
    /**
     * Not stated. Treated as OPTIONAL by verifiers.
     */
    UNSPECIFIED = 0,
    /**
     * The provider declares this module part of its baseline service. Only a
     * CORE entry may ever be loaded before a user session exists, and only a
     * CORE entry is presented pre-selected at first sign-in.
     */
    CORE = 1,
    /**
     * Offered and endorsed by the provider, but never loaded without an
     * explicit user selection.
     */
    RECOMMENDED = 2,
    /**
     * Offered only.
     */
    OPTIONAL = 3
}
//# sourceMappingURL=pmmTrustTier.d.ts.map