/**
 * Store-maintained liveness of a publisher key broker.
 */
export declare enum brokerLiveness {
    /**
     * No probe/heartbeat information yet
     */
    Unknown = 0,
    /**
     * Broker answered the most recent probe/heartbeat window
     */
    Online = 1,
    /**
     * Heartbeats are late or intermittently failing
     */
    Degraded = 2,
    /**
     * Broker failed probing; paid listings behind it are unpurchasable
     */
    Unreachable = 3
}
//# sourceMappingURL=brokerLiveness.d.ts.map