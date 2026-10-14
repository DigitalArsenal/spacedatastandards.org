/**
 * Form of a model. Append new values only; never reorder or reuse existing
 * values.
 */
export declare enum ermModelForm {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * Stratified moments, quantiles and covariance by regime and age (the
     * output of finalize).
     */
    StratifiedStatistics = 1,
    /**
     * Frozen element-set covariance model by regime and age, with realism
     * cells.
     */
    ElementSetModel = 2,
    /**
     * Covariance scale factors by regime and prediction horizon.
     */
    HorizonFactors = 3,
    /**
     * Initial covariance and process noise of a numerical propagator by
     * regime.
     */
    PropagatorCovariance = 4
}
//# sourceMappingURL=ermModelForm.d.ts.map