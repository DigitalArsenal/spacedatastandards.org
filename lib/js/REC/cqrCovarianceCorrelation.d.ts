/**
 * The assumed correlation between the two objects' position errors.
 */
export declare enum cqrCovarianceCorrelation {
    UNSPECIFIED = 0,
    /**
     * Independent errors: the combined covariance is the sum of the two.
     */
    INDEPENDENT = 1,
    /**
     * A cross covariance was supplied and used.
     */
    SUPPLIED_CROSS_COVARIANCE = 2
}
//# sourceMappingURL=cqrCovarianceCorrelation.d.ts.map