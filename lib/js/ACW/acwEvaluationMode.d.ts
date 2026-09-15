/**
 * Whether windows are evaluated only at the supplied samples or refined to
 * the epochs where the aggregate condition changes.
 */
export declare enum acwEvaluationMode {
    /**
     * Evaluate at the supplied sample epochs only; window edges are samples.
     */
    DISCRETE = 0,
    /**
     * Bracket between samples and refine each edge to ROOT_TOLERANCE_S.
     */
    CONTINUOUS = 1
}
//# sourceMappingURL=acwEvaluationMode.d.ts.map