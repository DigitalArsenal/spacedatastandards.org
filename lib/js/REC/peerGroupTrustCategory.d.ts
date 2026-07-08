/**
 * Peer Group Membership Record - Durable peer group state for an SDN node.
 *
 * PGM records describe one named peer group and its current member peer IDs.
 * The current peer group registry is a projection over the latest PGM records
 * by GROUP_NAME, with deleted records acting as tombstones.
 */
export declare enum peerGroupTrustCategory {
    Untrusted = 0,
    Limited = 1,
    Standard = 2,
    Trusted = 3,
    Admin = 4
}
//# sourceMappingURL=peerGroupTrustCategory.d.ts.map