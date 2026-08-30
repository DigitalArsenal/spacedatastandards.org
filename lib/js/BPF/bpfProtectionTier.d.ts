/**
 * How a selected module's payload is protected inside the produced
 * artifact. Append new values only; never reorder or reuse existing values.
 */
export declare enum bpfProtectionTier {
    /**
     * The publisher did not state a tier. A consumer MUST NOT infer one and
     * MUST NOT treat this as OPEN.
     */
    UNSPECIFIED = 0,
    /**
     * Plaintext payload; no content-key unwrap is performed.
     */
    OPEN = 1,
    /**
     * Ciphertext payload whose content key is wrapped for a recipient key
     * carried by the artifact itself.
     */
    ENCRYPTED = 2,
    /**
     * Ciphertext payload whose content key is wrapped for a recipient key
     * derived at runtime from an operator-supplied distribution key; the
     * artifact carries no recipient key.
     */
    LICENSED = 3
}
//# sourceMappingURL=bpfProtectionTier.d.ts.map