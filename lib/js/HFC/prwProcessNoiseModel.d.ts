/**
 * Process noise added to a propagated covariance. WHITE_ACCELERATION is
 * zero-mean white acceleration noise (state noise compensation): over each
 * discretization interval h it adds, per axis with spectral density q,
 * q * [[h^3/3, h^2/2], [h^2/2, h]] to the position-velocity block, which the
 * linearized dynamics then carry forward with the covariance.
 */
export declare enum prwProcessNoiseModel {
    UNSPECIFIED = 0,
    NONE = 1,
    WHITE_ACCELERATION = 2
}
//# sourceMappingURL=prwProcessNoiseModel.d.ts.map