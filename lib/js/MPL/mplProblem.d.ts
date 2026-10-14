/**
 * Maneuver Plan (MPL)
 * Description
 * A request to plan an orbital maneuver and the plan that answers it. The
 * planning problems covered are the classical transfers (Hohmann,
 * bi-elliptic, plane change, combined transfer and plane change), Lambert
 * problems (one revolution count, or the cheapest over several), phasing
 * (from a phase angle, or from the chaser's and target's orbits),
 * relative-motion planning about a reference orbit (relative-orbital-element
 * state transition, waypoint missions, approach corridors, closed-loop
 * rendezvous) and collision-avoidance planning, together with the
 * orbit-geometry questions a planner asks along the way (the state and
 * elements at a point of an orbit, anomaly conversion, time of flight between
 * anomalies, sampled orbit tracks, and delta-v frame rotation).
 *
 * One record carries the question and its answer. A request fills PROBLEM
 * and REQUEST and leaves the result fields empty; the answer echoes the
 * request and adds STATUS, BURNS (each with its epoch, its delta-v vector in
 * a stated frame and its magnitude), ARCS (the coasts and transfers between
 * burns), the costs (TOTAL_DELTA_V_KM_S, TOTAL_TIME_S), the options the
 * planner weighed (OPTIONS) and the problem's own solution detail. A planner
 * that cannot solve the problem answers with STATUS and ERROR_CODE instead.
 *
 * MPL is the plan; $MNV is the maneuver that happened (or that operations
 * committed to). A planned burn becomes an $MNV with STATUS = PLANNED, its
 * EVENT_START_TIME from EPOCH_MS, DELTA_VEL_U/V/W from a RIC delta-v (MNV's
 * UVW axes are the same radial, in-track, cross-track triad as AXES = RIC
 * here), DELTA_VEL from MAGNITUDE_KM_S, TOTAL_BURN_TIME from DURATION_S,
 * DELTA_MASS from DELTA_MASS_KG and CHARACTERIZATION from PURPOSE; the burn's
 * MANEUVER_ID then names that $MNV. Inertial states use the $OEM
 * ephemerisDataLine (km, km/s) and the frame named by REFERENCE_FRAME ($RFM);
 * a collision-avoidance request can carry the $CDM it answers.
 *
 * Units: km, km/s, km/s^2, seconds and degrees throughout; the gravitational
 * parameter in km^3/s^2. Relative positions and velocities are in the
 * reference orbit's RIC axes unless a field says otherwise.
 * The planning problem a record poses. Append new values only; never reorder
 * or reuse existing values.
 */
export declare enum mplProblem {
    /**
     * Not stated.
     */
    Unspecified = 0,
    /**
     * Two-impulse coplanar transfer between circular orbits.
     */
    Hohmann = 1,
    /**
     * Three-impulse coplanar transfer through an intermediate apoapsis.
     */
    BiElliptic = 2,
    /**
     * Inclination change at a given radius and speed.
     */
    PlaneChange = 3,
    /**
     * Hohmann transfer with the plane change folded into the second burn.
     */
    CombinedTransfer = 4,
    /**
     * Lambert problem: the arc between two positions in a time of flight.
     */
    Lambert = 5,
    /**
     * Lambert problem ranked over revolution counts and branches by delta-v.
     */
    LambertMinimumDeltaV = 6,
    /**
     * Phasing orbit closing a stated phase angle.
     */
    Phasing = 7,
    /**
     * Phasing from the chaser's and the target's orbits (the angle is derived).
     */
    PhasingToTarget = 8,
    /**
     * Relative-orbital-element state transition about a reference orbit.
     */
    RelativeStateTransition = 9,
    /**
     * Two-burn legs through a list of relative waypoints.
     */
    RelativeWaypoints = 10,
    /**
     * Collision-avoidance maneuver for a required miss distance.
     */
    CollisionAvoidance = 11,
    /**
     * Approach along a V-bar, R-bar or H-bar corridor.
     */
    ApproachCorridor = 12,
    /**
     * Closed-loop rendezvous: drift, braking and hold under feedback control.
     */
    RendezvousSimulation = 13,
    /**
     * State, elements and local frames at a point of an orbit.
     */
    OrbitGeometry = 14,
    /**
     * Conversion between true, mean and eccentric anomaly.
     */
    AnomalyConversion = 15,
    /**
     * Time of flight between two true anomalies.
     */
    TimeOfFlight = 16,
    /**
     * Positions sampled along an orbit.
     */
    OrbitSampling = 17,
    /**
     * Rotation of a delta-v between the RIC and inertial axes.
     */
    DeltaVTransform = 18
}
//# sourceMappingURL=mplProblem.d.ts.map