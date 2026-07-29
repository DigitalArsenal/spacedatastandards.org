/**
 * Compile-time routing decision for an edge. The aligned option is legal only
 * when the producer and consumer share the declared arena and the runtime can
 * prove bounds, alignment, ownership, mutability, and lifetime.
 */
export declare enum flowEdgeRoutePolicy {
    CANONICAL_ONLY = 0,
    ALIGNED_SHARED_ARENA_OR_CANONICAL = 1
}
//# sourceMappingURL=flowEdgeRoutePolicy.d.ts.map