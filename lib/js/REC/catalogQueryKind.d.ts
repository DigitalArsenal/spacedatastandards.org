/**
 * Catalog query discriminator. Callers and host plugins use this enum to
 * select a query shape for in-memory catalog queries answered by a host
 * runtime (for example the shared FlatSQL entity collection).
 */
export declare enum catalogQueryKind {
    /**
     * Return matched entity metadata rows.
     */
    ROWS = 0,
    /**
     * Return only the matched entity indices.
     */
    ENTITY_INDICES = 1,
    /**
     * Return a packed visibility mask (one byte per entity).
     */
    VISIBILITY_MASK = 2,
    /**
     * Return a single catalog row by entity index.
     */
    CATALOG_ROW = 3
}
//# sourceMappingURL=catalogQueryKind.d.ts.map