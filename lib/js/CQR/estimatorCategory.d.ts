/**
 * Estimator class that produced an orbit-determination solution
 * (batch-vs-filter provenance).
 */
export declare enum estimatorCategory {
    /**
     * Estimator class not specified
     */
    Unknown = 0,
    /**
     * Batch least-squares fit
     */
    BatchLeastSquares = 1,
    /**
     * Extended Kalman filter
     */
    ExtendedKalman = 2,
    /**
     * Unscented Kalman filter
     */
    UnscentedKalman = 3,
    /**
     * Smoothed sequential solution
     */
    Smoother = 4
}
//# sourceMappingURL=estimatorCategory.d.ts.map