/**
 * How a bias term is stated. Append new values only; never reorder or reuse
 * existing values.
 */
export declare enum sbcBiasBasis {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * Already mapped to orbit position axes: RADIAL_M, IN_TRACK_M,
     * CROSS_TRACK_M are metres in RTN.
     */
    OrbitRtn = 1,
    /**
     * Measurement-space biases (RANGE_M, AZIMUTH_DEG, ELEVATION_DEG,
     * RANGE_RATE_M_S, TIME_S) together with their mapped RTN equivalents in
     * RADIAL_M, IN_TRACK_M, CROSS_TRACK_M.
     */
    Measurement = 2,
    /**
     * Measurement-space biases taken one-to-one onto RTN as an approximation:
     * range onto radial, azimuth onto in-track, elevation onto cross-track,
     * each already in metres in RADIAL_M, IN_TRACK_M, CROSS_TRACK_M.
     */
    MeasurementAsRtn = 3
}
//# sourceMappingURL=sbcBiasBasis.d.ts.map