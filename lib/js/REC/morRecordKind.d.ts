/**
 * What a record is. A reader that meets a kind it does not know ignores the record and changes nothing
 * it holds. Append new values only.
 */
export declare enum morRecordKind {
    /**
     * A whole element set, with everything this record can carry.
     */
    FULL = 0,
    /**
     * New rows for a set the receiver already holds (see "Rows only").
     */
    ROWS_ONLY = 1
}
//# sourceMappingURL=morRecordKind.d.ts.map