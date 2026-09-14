/**
 * How a tile relates to its children. ORDINALS ARE WIRE VALUES; new kinds
 * are APPENDED ONLY.
 */
export declare enum gctRefinement {
    /**
     * The children replace the parent: draw one or the other, never both.
     * The only refinement a mass-conserving mixture needs.
     */
    REPLACE = 0,
    /**
     * The children add to the parent. Reserved; a producer MUST NOT publish
     * it until a consumer contract for additive mixtures is defined.
     */
    ADD = 1
}
//# sourceMappingURL=gctRefinement.d.ts.map