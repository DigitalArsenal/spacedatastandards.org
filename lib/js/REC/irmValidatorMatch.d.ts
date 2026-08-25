/**
 * What a publisher may conclude when it re-reads the source's validators.
 */
export declare enum irmValidatorMatch {
    UNSPECIFIED = 0,
    /**
     * The publisher compared validators and they agree; resuming is safe.
     */
    MATCHED = 1,
    /**
     * The publisher compared validators and they disagree; the bytes behind the
     * offset are not the bytes that were read.
     */
    MISMATCHED = 2,
    /**
     * The source published no validator to compare. This is NOT a match: a
     * publisher that cannot verify identity says so instead of assuming it.
     */
    UNVERIFIABLE = 3
}
//# sourceMappingURL=irmValidatorMatch.d.ts.map