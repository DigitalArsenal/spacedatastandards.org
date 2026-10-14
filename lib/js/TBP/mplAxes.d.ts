/**
 * The axes a delta-v, relative position or relative velocity is expressed
 * in. The orbital axes are built from the inertial state of the orbit they
 * refer to at the instant of the burn or sample. Append new values only;
 * never reorder or reuse existing values.
 */
export declare enum mplAxes {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * The inertial frame of the plan (REFERENCE_FRAME); components x, y, z.
     */
    Inertial = 1,
    /**
     * Radial, in-track, cross-track: R = r/|r|, C = (r x v)/|r x v|,
     * I = C x R; components ordered R, I, C. The same triad as $MNV's U, V, W
     * and $RFM's ORBITAL_RADIAL_TRANSVERSE_NORMAL.
     */
    RIC = 2,
    /**
     * Velocity, normal, co-normal: V = v/|v|, N = (r x v)/|r x v|, C = V x N;
     * components ordered V, N, C. Differs from RIC away from the apsides.
     */
    VNC = 3
}
//# sourceMappingURL=mplAxes.d.ts.map