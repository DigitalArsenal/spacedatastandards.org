/**
 * Stage of an alert record.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum csoAlertStage {
    /**
     * Not an alert: a catalogue entry.
     */
    NONE = 0,
    /**
     * Automated first notice.
     */
    PRELIMINARY = 1,
    /**
     * Human-vetted initial notice.
     */
    INITIAL = 2,
    /**
     * Revised localisation, classification or brightness.
     */
    UPDATE = 3,
    /**
     * Withdrawn: the source is not astrophysical.
     */
    RETRACTED = 4
}
//# sourceMappingURL=csoAlertStage.d.ts.map