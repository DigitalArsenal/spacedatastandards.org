/**
 * A contributor to a combined covariance. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum sbcContributorKind {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * A covariance supplied directly (operator, orbit determination).
     */
    DirectCovariance = 1,
    /**
     * The scatter of a series of element sets about their mean.
     */
    ElementSetSeries = 2,
    /**
     * Sensor biases.
     */
    SensorBias = 3,
    /**
     * Process noise or another model term.
     */
    ModelTerm = 4
}
//# sourceMappingURL=sbcContributorKind.d.ts.map