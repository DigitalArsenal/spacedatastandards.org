/**
 * Buffer ownership contract advertised by a stream port.
 */
export declare enum bufferOwnership {
    /**
     * Arena / host owns the backing bytes; receiver must not free.
     */
    HOST_OWNED = 0,
    /**
     * Plugin owns the backing bytes; host must not free.
     */
    PLUGIN_OWNED = 1,
    /**
     * Ownership transfers with the frame (hand-off semantics).
     */
    TRANSFERRED = 2
}
//# sourceMappingURL=bufferOwnership.d.ts.map