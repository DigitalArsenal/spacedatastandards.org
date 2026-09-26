/**
 * Intensity stretch a producer recommends for display.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum sktStretchFunction {
    UNSPECIFIED = 0,
    LINEAR = 1,
    SQUARE_ROOT = 2,
    LOGARITHMIC = 3,
    /**
     * Inverse hyperbolic sine with softening STRETCH_SOFTENING.
     */
    ASINH = 4,
    /**
     * Histogram equalisation over PERCENTILE_VALUES.
     */
    HISTOGRAM_EQUALIZED = 5
}
//# sourceMappingURL=sktStretchFunction.d.ts.map