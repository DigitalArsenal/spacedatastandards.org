/**
 * Representation the client accepts for the answer. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum aprRepresentation {
    /**
     * The service's default (normally FlatBuffers).
     */
    Default = 0,
    /**
     * Size-prefixed FlatBuffer records of the standard served.
     */
    FlatBuffer = 1,
    /**
     * JSON rendering of the same records.
     */
    Json = 2,
    /**
     * Comma-separated values.
     */
    Csv = 3,
    /**
     * Plain text.
     */
    Text = 4
}
//# sourceMappingURL=aprRepresentation.d.ts.map