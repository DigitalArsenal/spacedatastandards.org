/**
 * Correction applied to the atmosphere model's density. Append new values
 * only.
 */
export declare enum pcfDensityCorrection {
    /**
     * Density as the atmosphere model gives it.
     */
    NONE = 0,
    /**
     * The open-DCA common-mode correction published as $DCL: model density
     * times exp(s(t)), s the log-density scale of the published nodes.
     */
    DCA_COMMON_MODE = 1
}
//# sourceMappingURL=pcfDensityCorrection.d.ts.map