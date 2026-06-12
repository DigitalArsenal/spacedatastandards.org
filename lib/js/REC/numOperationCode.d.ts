export declare enum numOperationCode {
    UNKNOWN = 0,
    /**
     * Solve for a scalar root using Newton-Raphson iteration.
     */
    NEWTON_RAPHSON = 1,
    /**
     * Linearly interpolate one scalar between two scalar samples.
     */
    LINEAR_INTERPOLATION = 2,
    /**
     * Bilinearly interpolate one scalar from four rectangular-corner samples.
     */
    BILINEAR_INTERPOLATION = 3,
    /**
     * Generate a bounded Gauss-Markov random sequence and summary statistics.
     */
    GAUSS_MARKOV_SEQUENCE = 4
}
//# sourceMappingURL=numOperationCode.d.ts.map