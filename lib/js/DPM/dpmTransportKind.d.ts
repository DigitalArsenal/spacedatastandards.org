/**
 * Transport profile used to resolve a dataset update asset.
 */
export declare enum dpmTransportKind {
    /**
     * Asset bytes are resolved by content address, usually an IPFS CID.
     */
    CONTENT_ADDRESS = 0,
    /**
     * Asset bytes are resolved from the provider through a signed SDN query
     * protocol. This mode is used when the update is not published as a
     * globally discoverable file.
     */
    SDN_QUERY = 1,
    /**
     * Asset bytes are resolved by another protocol named in TRANSPORT_PROTOCOL.
     */
    OTHER = 2
}
//# sourceMappingURL=dpmTransportKind.d.ts.map