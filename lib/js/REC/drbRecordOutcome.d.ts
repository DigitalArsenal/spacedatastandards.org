/**
 * Why a record carries no rows. A record with rows has no outcome entry; a window no record serves is
 * stated inside the rows ($MOR morWindowStatus, $PPE ppeWindowStatus). Append new values only.
 */
export declare enum drbRecordOutcome {
    /**
     * Not stated.
     */
    UNSPECIFIED = 0,
    /**
     * The receiver serves this record without rows by its own rule (for example a record it never serves
     * from rows: several sets, another theory, a wide record without WIDE_RECORDS).
     */
    EXCLUDED = 1,
    /**
     * The theory refuses the record as a whole: no window can be made.
     */
    SOURCE_REFUSED = 2,
    /**
     * The record carries what rows cannot stand for: a forecast or a hand-over.
     */
    UNSUPPORTED = 3,
    /**
     * No rows were asked for this record.
     */
    NOT_REQUESTED = 4
}
//# sourceMappingURL=drbRecordOutcome.d.ts.map