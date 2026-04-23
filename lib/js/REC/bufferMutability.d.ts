/**
 * Buffer mutability contract advertised by a stream port.
 */
export declare enum bufferMutability {
    /**
     * Buffer is immutable after produce.
     */
    IMMUTABLE = 0,
    /**
     * Buffer may be written in place by the owner (single writer).
     */
    SINGLE_WRITER_MUTABLE = 1,
    /**
     * Buffer is append-only (rings / logs).
     */
    APPEND_ONLY = 2
}
//# sourceMappingURL=bufferMutability.d.ts.map