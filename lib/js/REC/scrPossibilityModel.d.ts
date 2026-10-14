/**
 * How the two objects' uncertainty is given in a possibility assessment.
 * Append new values only; never reorder or reuse existing values.
 */
export declare enum scrPossibilityModel {
    /**
     * Finite supports: sampled states each with a possibility degree.
     */
    FiniteSupport = 0,
    /**
     * Ellipsoidal kernels: a centre state and a shape matrix, possibility
     * exp(-d**2/2) with d the distance in the shape metric.
     */
    EllipsoidalKernel = 1
}
//# sourceMappingURL=scrPossibilityModel.d.ts.map