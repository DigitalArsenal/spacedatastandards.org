/**
 * Dynamical model parameters a covariance and STM may carry after the state
 * (a VCM's B, BDOT, AGOM and T). Values are the request's FORCES, in SI:
 * DRAG_AREA_OVER_MASS Cd*A/m (m2/kg, DRAG_COEFFICIENT * AREA_M2 /
 * INITIAL_MASS_KG); DRAG_AREA_OVER_MASS_RATE its rate (m2/kg/s,
 * DRAG_AREA_OVER_MASS_RATE_M2_KG_S); SRP_AREA_OVER_MASS Cr*A/m (m2/kg,
 * REFLECTIVITY_COEFFICIENT * AREA_M2 / INITIAL_MASS_KG);
 * IN_TRACK_ACCELERATION m/s2 (IN_TRACK_ACCELERATION_M_S2).
 */
export declare enum prwDynamicParameter {
    UNSPECIFIED = 0,
    DRAG_AREA_OVER_MASS = 1,
    DRAG_AREA_OVER_MASS_RATE = 2,
    SRP_AREA_OVER_MASS = 3,
    IN_TRACK_ACCELERATION = 4,
    /**
     * ECOM2 coefficients (PRWEcom2), in their order there.
     */
    ECOM2_D0 = 5,
    ECOM2_Y0 = 6,
    ECOM2_B0 = 7,
    ECOM2_D2_COS = 8,
    ECOM2_D2_SIN = 9,
    ECOM2_D4_COS = 10,
    ECOM2_D4_SIN = 11,
    ECOM2_B1_COS = 12,
    ECOM2_B1_SIN = 13,
    ECOM2_B3_COS = 14,
    ECOM2_B3_SIN = 15
}
//# sourceMappingURL=prwDynamicParameter.d.ts.map