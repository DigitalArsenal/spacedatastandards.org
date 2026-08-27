/**
 * Line terminator the card text actually uses. Carried so a non-conforming
 * emission is DESCRIBABLE rather than silently mislabelled as canonical.
 */
export declare enum vcfLineEnding {
    UNSPECIFIED = 0,
    /**
     * Carriage return + line feed. The only canonical value.
     */
    CRLF = 1,
    /**
     * Line feed only. Non-canonical; importers in the strict class reject it.
     */
    LF = 2
}
//# sourceMappingURL=vcfLineEnding.d.ts.map