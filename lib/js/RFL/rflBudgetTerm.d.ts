/**
 * A named term of the link budget. Used to declare which quantity a
 * threshold, a contour or a best-server selection is stated against, so a
 * consumer never has to infer it from a units string.
 *
 * ORDINALS ARE WIRE VALUES. New terms are APPENDED ONLY.
 */
export declare enum rflBudgetTerm {
    UNSPECIFIED = 0,
    RANGE = 1,
    RANGE_RATE = 2,
    AZIMUTH = 3,
    ELEVATION = 4,
    DOPPLER_SHIFT = 5,
    EIRP = 6,
    TRANSMIT_ANTENNA_GAIN = 7,
    RECEIVE_ANTENNA_GAIN = 8,
    FREE_SPACE_PATH_LOSS = 9,
    GASEOUS_ABSORPTION_LOSS = 10,
    RAIN_LOSS = 11,
    CLOUD_FOG_LOSS = 12,
    SCINTILLATION_LOSS = 13,
    TERRAIN_DIFFRACTION_LOSS = 14,
    /**
     * Loss caused by an obstacle with stated `$RFS` material properties.
     */
    OBSTRUCTION_LOSS = 15,
    POLARIZATION_LOSS = 16,
    POINTING_LOSS = 17,
    IMPLEMENTATION_LOSS = 18,
    RECEIVED_POWER = 19,
    SYSTEM_NOISE_TEMPERATURE = 20,
    GAIN_TO_NOISE_TEMPERATURE = 21,
    CARRIER_TO_NOISE_DENSITY = 22,
    CARRIER_TO_NOISE = 23,
    ENERGY_PER_BIT_TO_NOISE_DENSITY = 24,
    BIT_ERROR_RATE = 25,
    LINK_MARGIN = 26,
    CHANNEL_CAPACITY = 27,
    INTERFERENCE_POWER = 28,
    CARRIER_TO_NOISE_PLUS_INTERFERENCE = 29,
    SIGNAL_TO_INTERFERENCE_PLUS_NOISE = 30
}
//# sourceMappingURL=rflBudgetTerm.d.ts.map