/**
 * Lifecycle state of an ingest connector. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum icnConnectorStatus {
    /**
     * Configuration exists but has not been validated.
     */
    Draft = 0,
    /**
     * Configuration passed validation but is not ingesting.
     */
    Validated = 1,
    /**
     * Connector is ingesting according to its configured trigger.
     */
    Active = 2,
    /**
     * Connector is intentionally suspended.
     */
    Paused = 3,
    /**
     * Connector requires attention after a failed operation.
     */
    Error = 4,
    /**
     * Connector is permanently out of service.
     */
    Retired = 5
}
//# sourceMappingURL=icnConnectorStatus.d.ts.map