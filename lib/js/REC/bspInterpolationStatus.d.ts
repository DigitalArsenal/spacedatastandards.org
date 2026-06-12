export declare enum bspInterpolationStatus {
    /**
     * Interpolation completed.
     */
    OK = 0,
    /**
     * The request is missing required waypoint, time, order, or sample data.
     */
    INVALID_INPUT = 1,
    /**
     * The requested polynomial order is outside the supported B-spline range.
     */
    UNSUPPORTED_ORDER = 2,
    /**
     * The interpolation linear system is singular or numerically unstable.
     */
    SINGULAR_SYSTEM = 3
}
//# sourceMappingURL=bspInterpolationStatus.d.ts.map