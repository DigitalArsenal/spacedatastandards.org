/**
 * How independent source reports for one facility were reduced to the one
 * published position. Ordinals are wire values: append only; never reorder or
 * reuse.
 */
export declare enum txsMergeMethod {
    /**
     * The publisher does not state how the reports were reduced. METHOD
     * defaults here so an unset field can never be read as a real method.
     */
    UNSPECIFIED = 0,
    /**
     * Exactly one source reported the facility; nothing was reconciled.
     */
    SINGLE_SOURCE = 1,
    /**
     * A declared precedence ranking over publishing authorities selected the
     * winning report.
     */
    AUTHORITY_PRECEDENCE = 2,
    /**
     * The report with the most recent publication or observation window won.
     */
    MOST_RECENT = 3,
    /**
     * The report backed by the largest independent observation count won.
     */
    HIGHEST_SAMPLE_COUNT = 4,
    /**
     * The published position is computed from the agreeing reports and belongs
     * to no single source.
     */
    CENTROID = 5
}
//# sourceMappingURL=txsMergeMethod.d.ts.map