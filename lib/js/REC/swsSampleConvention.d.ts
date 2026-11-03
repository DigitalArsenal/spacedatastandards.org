/**
 * What instant an epoch names. Append only.
 */
export declare enum swsSampleConvention {
    Unspecified = 0,
    Instant = 1,
    /**
     * The value covers [EPOCH, EPOCH + CADENCE_S).
     */
    IntervalStart = 2,
    IntervalCenter = 3,
    IntervalEnd = 4
}
//# sourceMappingURL=swsSampleConvention.d.ts.map