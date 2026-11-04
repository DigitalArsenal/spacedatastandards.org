/**
 * Outcome of a location run. 0 is UNSPECIFIED so an unset byte never decodes
 * as success. An empty event list with STATUS OK is a complete answer: no
 * events occurred. Append new values only.
 */
export declare enum evlResultStatus {
    UNSPECIFIED = 0,
    OK = 1,
    INVALID_INPUT = 2,
    /**
     * The provider does not implement the requested locator class.
     */
    UNSUPPORTED_LOCATOR_CLASS = 3,
    /**
     * The configuration table matching LOCATOR_CLASS was absent.
     */
    MISSING_CONFIGURATION = 4,
    /**
     * The state source did not span the requested interval.
     */
    MISSING_EPHEMERIS = 5,
    /**
     * The geometry needs Earth-orientation data that was not supplied or does
     * not span the interval.
     */
    MISSING_EOP_DATA = 6,
    /**
     * A generic condition names a parameter the provider cannot evaluate, or
     * one that does not support a stopping condition.
     */
    PARAMETER_UNAVAILABLE = 7,
    /**
     * A crossing was bracketed but the refinement did not converge to
     * REFINEMENT_TOLERANCE_SECONDS. The provider MUST report this rather than
     * emit an unconverged epoch.
     */
    ROOT_REFINEMENT_FAILED = 8,
    /**
     * The run hit MAXIMUM_EVENTS or its evaluation budget before reaching
     * SCAN_STOP_EPOCH; the events reported are a prefix, not the whole answer.
     */
    BUDGET_EXCEEDED = 9
}
//# sourceMappingURL=evlResultStatus.d.ts.map