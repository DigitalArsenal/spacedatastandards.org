/**
 * Statistical reduction a single number expresses.
 *
 * Named `cnpReduction`, not `cnpStatistic`, so it can never differ from the
 * `CNPStatistic` table by case alone in any generated language tree.
 */
export declare enum cnpReduction {
    MEAN = 0,
    MEDIAN = 1,
    /**
     * PERCENTILE_RANK carries which one.
     */
    PERCENTILE = 2,
    MINIMUM = 3,
    MAXIMUM = 4,
    STANDARD_DEVIATION = 5,
    /**
     * Number of observations, not a value of the metric.
     */
    COUNT = 6
}
//# sourceMappingURL=cnpReduction.d.ts.map