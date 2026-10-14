/**
 * Three-Body Problem (TBP)
 * Description
 * Solutions of the circular restricted three-body problem (CR3BP): a small
 * body moving under the gravity of two primaries that circle their common
 * barycentre. A TBP names the system (its mass ratio and the length and time
 * that scale it), and carries one kind of answer about it: a propagated
 * trajectory in the synodic (rotating) frame, the five libration (Lagrange)
 * points and their linear stability, the Jacobi constant of a state,
 * periodic orbits (planar and vertical Lyapunov, northern and southern halo,
 * near-rectilinear halo, distant retrograde, butterfly) with their period,
 * Jacobi constant, monodromy matrix and stability, members of a family of
 * such orbits, transfers into the system (with their burns), station-keeping
 * budgets, and states converted between the synodic and inertial frames.
 *
 * Mission designers, cislunar and Sun-Earth libration-point analysts, and
 * catalogues of periodic orbits (such as the JPL three-body periodic-orbit
 * database) use it. The synodic frame is an $RFM coordinate system: origin
 * at the primaries' barycentre, X from the larger primary toward the
 * smaller, Z along the system's angular momentum, Y completing the
 * right-handed set; libration points use $RFM's rfmLibrationPoint. Transfer
 * burns are $MPL burns, so a three-body transfer plan reads like any other
 * maneuver plan and its burns can become $MNV records.
 *
 * Units: synodic states, times and periods are non-dimensional (length in
 * units of CHARACTERISTIC_LENGTH_KM, time in units of
 * CHARACTERISTIC_TIME_S, so the primaries' angular rate is 1); dimensional
 * fields say km, km/s or s in their names.
 * The question a record answers. Append new values only; never reorder or
 * reuse existing values.
 */
export declare enum tbpProblem {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * Propagate a synodic state (optionally with its state transition matrix).
     */
    Propagation = 1,
    /**
     * The five libration points.
     */
    LibrationPoints = 2,
    /**
     * Jacobi constant of a state.
     */
    JacobiConstant = 3,
    /**
     * Differentially corrected periodic orbit.
     */
    PeriodicOrbit = 4,
    /**
     * Analytic first guess of a halo orbit (Richardson third order).
     */
    HaloFirstGuess = 5,
    /**
     * Near-rectilinear halo orbit from perilune and apolune altitudes.
     */
    NearRectilinearHalo = 6,
    /**
     * Transfer from a parking orbit about the larger primary.
     */
    Transfer = 7,
    /**
     * Station-keeping budget for a periodic orbit.
     */
    StationKeeping = 8,
    /**
     * State conversion between the synodic and inertial frames.
     */
    FrameConversion = 9,
    /**
     * Members of a periodic-orbit family.
     */
    Family = 10
}
//# sourceMappingURL=tbpProblem.d.ts.map