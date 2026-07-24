/**
 * Custody model of the broker behind a listing. Default is full publisher
 * custody; replica/escrow are explicit per-module opt-ins for availability.
 * EscrowFallback re-centralizes custody for that module — the escrow holder
 * can release that module's content key.
 */
export declare enum brokerCustodyModel {
    /**
     * The publisher's own node hosts the broker and holds the content keys
     */
    SelfHosted = 0,
    /**
     * A publisher-run replica sharing the wrapping key (custody stays with the
     * publisher)
     */
    StandbyReplica = 1,
    /**
     * A third-party (e.g. platform-run) fallback broker able to release the
     * content key for this module
     */
    EscrowFallback = 2
}
//# sourceMappingURL=brokerCustodyModel.d.ts.map