/**
 * The gravity field a set states, PERTURBATIONS.GRAVITY_MODEL of its $OCM. Append new values only.
 */
export declare enum morGravityField {
    /**
     * The theory's own field: "WGS-72" for SGP4, "EGM-96" for SGP4XP and for AP with both degree caps 0.
     */
    THEORY = 0,
    /**
     * "EGM2008": an AP set with a degree cap above 0.
     */
    EGM2008 = 1,
    /**
     * "EGM2008; slow tesseral terms to degree 70": an AP set with a degree cap above 0 whose slow set
     * carries terms beyond the shallow set's.
     */
    EGM2008_SLOW_TESSERAL_70 = 2
}
//# sourceMappingURL=morGravityField.d.ts.map