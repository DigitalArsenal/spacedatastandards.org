/**
 * The orbit theory that computes the states. Append new values only; never
 * reorder or reuse a value.
 */
export declare enum pcfTheory {
    /**
     * The receiving module's own theory. A module that offers several reads
     * UNSPECIFIED as the one it ingests element sets with (the advanced
     * propagator reads it as SGP4XP).
     */
    UNSPECIFIED = 0,
    /**
     * Mean-element theory of SPACETRACK REPORT No. 3 (SGP4 near Earth, SDP4
     * deep space).
     */
    SGP4 = 1,
    /**
     * SGP4 with extended perturbations (SGP4-XP, as published in the 2022
     * astrodynamics conference literature); the same value as $MET SGP4XP.
     */
    SGP4XP = 2,
    /**
     * SDN's own advanced mean-element theory, labeled as its own; carried in
     * $OMM as a user-defined theory until $MET appends it.
     */
    SDNAP = 3,
    /**
     * Numerical integration of the equations of motion under the full force
     * model of PCFForceModel (profile FFM-1).
     */
    FFM = 4,
    /**
     * Two-body (Keplerian) motion about the central body.
     */
    KEPLER = 5
}
//# sourceMappingURL=pcfTheory.d.ts.map