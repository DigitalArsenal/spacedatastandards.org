/**
 * How a stated threshold is compared against the metric it is stated for.
 *
 * `UNSPECIFIED` holds ordinal 0: a threshold whose sense is unstated is
 * unusable, and MUST NOT be silently read as "greater than or equal".
 */
export declare enum rflComparison {
    UNSPECIFIED = 0,
    GREATER_THAN_OR_EQUAL = 1,
    GREATER_THAN = 2,
    LESS_THAN_OR_EQUAL = 3,
    LESS_THAN = 4
}
//# sourceMappingURL=rflComparison.d.ts.map