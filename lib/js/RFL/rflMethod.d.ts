/**
 * How the values in this record came to exist.
 *
 * `MODELED` exists so a modelled number can be REFUSED where a measurement
 * is required.
 */
export declare enum rflMethod {
    UNSPECIFIED = 0,
    /**
     * Values recorded by instrumentation on a real link.
     */
    MEASURED = 1,
    /**
     * Values produced by propagation and RF models.
     */
    MODELED = 2,
    /**
     * Modelled geometry reconciled against measured RF terms, or vice versa.
     */
    HYBRID = 3
}
//# sourceMappingURL=rflMethod.d.ts.map