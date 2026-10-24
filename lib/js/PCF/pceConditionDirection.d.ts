/**
 * Which crossing of the goal value satisfies a condition. Append new values
 * only.
 */
export declare enum pceConditionDirection {
    UNSPECIFIED = 0,
    /**
     * Any crossing of GOAL_VALUE, in either direction.
     */
    ANY_CROSSING = 1,
    /**
     * Only a crossing with the parameter increasing through GOAL_VALUE.
     */
    INCREASING = 2,
    /**
     * Only a crossing with the parameter decreasing through GOAL_VALUE.
     */
    DECREASING = 3
}
//# sourceMappingURL=pceConditionDirection.d.ts.map