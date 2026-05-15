/**
 * Data Sync Status
 *
 * Runtime status envelope for a FlatSQL-backed dataset synchronization. This
 * message is used for worker/backend-to-frontend status transport; record
 * bytes themselves remain in their original SDS FlatBuffer schema.
 */
export declare enum dssSyncState {
    IDLE = 0,
    SYNCING = 1,
    SYNCED = 2,
    CAPPED = 3,
    ERROR = 4
}
//# sourceMappingURL=dssSyncState.d.ts.map