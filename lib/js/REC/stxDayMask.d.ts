/**
 * Days of the week on which a transmission runs. Bit flags so an
 * irregular weekly pattern needs no per-day rows. ALL DAYS is every bit set;
 * an unset field means the source publishes no day pattern, which is NOT the
 * same as "no days".
 */
export declare enum stxDayMask {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 4,
    THURSDAY = 8,
    FRIDAY = 16,
    SATURDAY = 32,
    SUNDAY = 64
}
//# sourceMappingURL=stxDayMask.d.ts.map