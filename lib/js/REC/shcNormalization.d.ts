/**
 * Normalization convention of the spherical-harmonic coefficients. Applying a
 * set under the wrong convention is wrong by many orders of magnitude at high
 * degree, so there is no safe default. Append new values only.
 */
export declare enum shcNormalization {
    UNSPECIFIED = 0,
    /**
     * 4-pi (fully) normalized, the geodesy convention.
     */
    FULLY_NORMALIZED = 1,
    /**
     * Unnormalized (raw) coefficients.
     */
    UNNORMALIZED = 2
}
//# sourceMappingURL=shcNormalization.d.ts.map