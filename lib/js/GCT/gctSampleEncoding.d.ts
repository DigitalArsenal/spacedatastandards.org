/**
 * Where a level's samples live. ORDINALS ARE WIRE VALUES; new encodings
 * are APPENDED ONLY.
 */
export declare enum gctSampleEncoding {
    /**
     * Samples are inline in the level's vectors.
     */
    INLINE_FLOAT32 = 0,
    /**
     * Samples are a content-addressed chunk named by the level's CHUNK_CID
     * whose layout is the aligned-binary twin's section layout for the
     * level; the level's vectors are absent.
     */
    CONTENT_ADDRESSED_CHUNK = 1
}
//# sourceMappingURL=gctSampleEncoding.d.ts.map