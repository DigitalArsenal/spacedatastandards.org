/**
 * Treatment of the permanent tide in the degree-2 zonal term. Sets differing
 * only in tide system disagree in C20 by roughly 4e-9, which is far above the
 * accuracy of any modern field. Append new values only.
 */
export declare enum shcTideSystem {
    UNSPECIFIED = 0,
    TIDE_FREE = 1,
    ZERO_TIDE = 2,
    MEAN_TIDE = 3
}
//# sourceMappingURL=shcTideSystem.d.ts.map