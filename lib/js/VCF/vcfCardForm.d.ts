/**
 * Which canonical emission form the card text was produced in. APPEND ONLY.
 */
export declare enum vcfCardForm {
    UNSPECIFIED = 0,
    /**
     * The complete downloadable card: contact rows, the full verification chain,
     * and the photo when one is published.
     */
    FULL = 1,
    /**
     * The density-limited card meant for optical scanning: contact rows plus the
     * minimum verification chain, and nothing whose absence is recoverable from
     * the profile the signature binds.
     */
    COMPACT = 2
}
//# sourceMappingURL=vcfCardForm.d.ts.map