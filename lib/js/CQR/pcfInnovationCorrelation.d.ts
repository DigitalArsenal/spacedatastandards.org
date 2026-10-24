/**
 * How the correlation of maneuver-detection innovations is weighted. Append
 * new values only.
 */
export declare enum pcfInnovationCorrelation {
    UNSPECIFIED = 0,
    /**
     * Every sample independent (the white-noise assumption).
     */
    WHITE = 1,
    /**
     * One sample per revolution counts, so a revolution is one independent
     * innovation.
     */
    ONE_SAMPLE_PER_REVOLUTION = 2,
    /**
     * An exponential correlation of the innovations over a correlation time.
     */
    CORRELATION_TIME = 3
}
//# sourceMappingURL=pcfInnovationCorrelation.d.ts.map