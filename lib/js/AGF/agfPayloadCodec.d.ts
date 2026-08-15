/**
 * Compression applied to the packed array to produce the transmitted byte
 * string. PAYLOAD_SHA256 and PAYLOAD_SIZE_BYTES describe the POST-codec bytes.
 *
 * ORDINALS ARE WIRE VALUES. New codecs are APPENDED ONLY.
 */
export declare enum agfPayloadCodec {
    UNSPECIFIED = 0,
    /**
     * No compression; transmitted bytes are the packed array.
     */
    RAW = 1,
    ZSTD = 2,
    /**
     * RFC 1951 DEFLATE.
     */
    DEFLATE = 3
}
//# sourceMappingURL=agfPayloadCodec.d.ts.map