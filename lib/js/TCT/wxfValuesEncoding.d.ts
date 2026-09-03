/**
 * Where the cell samples live. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum wxfValuesEncoding {
    /**
     * Samples are inline in VALUES (NLAT * NLON <= 1,048,576 cells).
     */
    InlineFloat32 = 0,
    /**
     * Samples are a content-addressed chunk named by CHUNK_CID; CHUNK_DTYPE /
     * CHUNK_CODECS describe its layout. Used above 1,048,576 cells.
     */
    ContentAddressedChunk = 1
}
//# sourceMappingURL=wxfValuesEncoding.d.ts.map