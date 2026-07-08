/**
 * Peer Registry Record - Durable trusted-peer registry state for an SDN node.
 *
 * PRR records describe one libp2p peer entry in a node's local peer registry.
 * The current registry is a projection over the latest PRR records by PEER_ID,
 * with deleted records acting as tombstones.
 */
export declare enum peerRegistryTrustCategory {
    Untrusted = 0,
    Limited = 1,
    Standard = 2,
    Trusted = 3,
    Admin = 4
}
//# sourceMappingURL=peerRegistryTrustCategory.d.ts.map