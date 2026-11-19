/**
 * The state of the carried unit. Ordinals are wire values: append only.
 */
export declare enum sloUnitState {
    /**
     * Not stated.
     */
    UNKNOWN = 0,
    /**
     * Announced or filed, not yet in service.
     */
    PLANNED = 1,
    /**
     * In service.
     */
    OPERATIONAL = 2,
    /**
     * In service with reduced performance.
     */
    DEGRADED = 3,
    /**
     * Carried and working, held out of service.
     */
    STANDBY = 4,
    /**
     * Carried and not working. A failed unit is still on board and stays in the answer.
     */
    FAILED = 5,
    /**
     * No longer carried. A winning RETIRED loadout takes the unit out of the answer.
     */
    RETIRED = 6
}
//# sourceMappingURL=sloUnitState.d.ts.map