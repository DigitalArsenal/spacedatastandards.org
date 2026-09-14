/**
 * Where a whole variant lives. ORDINALS ARE WIRE VALUES; new scopes are
 * APPENDED ONLY.
 */
export declare enum gctVariantScope {
    /**
     * The variant's levels are carried in this tile.
     */
    INLINE = 0,
    /**
     * The variant is a shared library entry named by VARIANT_CID; its levels
     * are absent here and identical wherever the same CID appears, so a
     * consumer keeps one copy however many tiles reference it.
     */
    SHARED_LIBRARY = 1
}
//# sourceMappingURL=gctVariantScope.d.ts.map