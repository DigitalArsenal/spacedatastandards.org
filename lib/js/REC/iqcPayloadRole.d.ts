/**
 * Role a referenced payload plays for one capture.
 */
export declare enum iqcPayloadRole {
    /**
     * The raw baseband sample stream itself (SigMF `.sigmf-data`).
     */
    DATA = 0,
    /**
     * The upstream metadata document the record was normalized FROM
     * (SigMF `.sigmf-meta`).
     */
    METADATA = 1,
    /**
     * A container holding both (SigMF `.sigmf` tar archive, zip, tarball).
     */
    ARCHIVE = 2,
    /**
     * A rendered spectrogram, waterfall, audio demod or thumbnail.
     */
    PREVIEW = 3,
    /**
     * A companion file the source publishes that is none of the above.
     */
    OTHER = 4
}
//# sourceMappingURL=iqcPayloadRole.d.ts.map