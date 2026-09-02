/**
 * Disposition of a source file after verified ingest. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum icnPostIngestAction {
    /**
     * Keep the source file at its original location.
     */
    LeaveInPlace = 0,
    /**
     * Move the source file to an archive location.
     */
    Archive = 1,
    /**
     * Delete the source file only after the ingested records are verified.
     */
    DeleteAfterVerification = 2
}
//# sourceMappingURL=icnPostIngestAction.d.ts.map