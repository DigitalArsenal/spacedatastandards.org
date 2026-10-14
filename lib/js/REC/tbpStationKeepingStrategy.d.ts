/**
 * When station-keeping burns are placed. Append new values only; never
 * reorder or reuse existing values.
 */
export declare enum tbpStationKeepingStrategy {
    /**
     * Correct at each crossing of the synodic XZ plane.
     */
    PlaneCrossing = 0,
    /**
     * Target a reference point on the periodic orbit.
     */
    TargetPoint = 1,
    /**
     * Suppress the unstable Floquet mode.
     */
    FloquetMode = 2
}
//# sourceMappingURL=tbpStationKeepingStrategy.d.ts.map