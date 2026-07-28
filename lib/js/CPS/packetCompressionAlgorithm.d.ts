/**
 * Compression algorithm applied to a fixed-length packet stream.
 * Append new values only; never reorder or reuse existing values. Decoders
 * must reject an algorithm value they do not recognize rather than guessing.
 */
export declare enum packetCompressionAlgorithm {
    /**
     * CCSDS 124.0-B-1 POCKET+ — lossless compression of fixed-length
     * spacecraft housekeeping telemetry.
     */
    POCKET_PLUS = 0
}
//# sourceMappingURL=packetCompressionAlgorithm.d.ts.map