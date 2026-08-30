/**
 * Solver Problem Definition ($SLP)
 *
 * A portable targeting or constrained-optimization problem. The evaluator and
 * propagator are named as ports rather than implementations: a solver may be
 * connected to any module that supplies the requested parameter values.
 */
export declare enum slpProblemKind {
    UNSPECIFIED = 0,
    TARGET = 1,
    OPTIMIZE = 2
}
//# sourceMappingURL=slpProblemKind.d.ts.map