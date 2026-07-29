/**
 * Meaning of the bytes in one bounded FlatSQL stream chunk. All durable
 * variants are emitted as canonical FSB FlatBuffers. Aligned FSB frames are
 * transient same-arena views and never the sole durable representation.
 */
export declare enum flatSqlByteStreamKind {
    UNSPECIFIED = 0,
    RECORD_STREAM = 1,
    QUERY_RESULT = 2,
    SNAPSHOT = 3,
    WRITE_AHEAD_LOG = 4
}
//# sourceMappingURL=flatSqlByteStreamKind.d.ts.map