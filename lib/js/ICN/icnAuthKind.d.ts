/**
 * Authentication shape for an HTTPS pull. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum icnAuthKind {
    /**
     * No authentication header is sent.
     */
    None = 0,
    /**
     * A bearer token is resolved from CREDENTIAL_REFERENCE.
     */
    BearerToken = 1,
    /**
     * A credential is sent under AUTH_HEADER_NAME.
     */
    ApiKeyHeader = 2
}
//# sourceMappingURL=icnAuthKind.d.ts.map