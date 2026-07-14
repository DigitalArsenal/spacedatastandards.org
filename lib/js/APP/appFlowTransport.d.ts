/**
 * Transport that moves an APPDataflow payload. Locators are content-
 * addressed and IPFS-first: prefer IPFS_CID wherever the payload is an
 * immutable published object, and use the live or request-scoped transports
 * only for streaming or same-origin request/response delivery. Append new
 * values only; never reorder or reuse existing values.
 */
export declare enum appFlowTransport {
    /**
     * LOCATOR is a CID; the page fetches the SDS record bytes by content
     * through the serving node's IPFS gateway.
     */
    IPFS_CID = 0,
    /**
     * LOCATOR is a gossip topic name; live SDS records arrive on the topic
     * via the node's pubsub bus.
     */
    PUBSUB_TOPIC = 1,
    /**
     * LOCATOR is a same-origin HTTP route template served by the node that
     * serves the page (used for request-scoped queries and streaming).
     */
    GATEWAY_ROUTE = 2
}
//# sourceMappingURL=appFlowTransport.d.ts.map