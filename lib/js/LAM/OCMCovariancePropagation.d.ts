import * as flatbuffers from 'flatbuffers';
/**
 * What propagates the covariance of a mean element set beyond its epoch value.
 * SDS addition (no CCSDS counterpart; OD_PROCESS_NOISE is free text).
 */
export declare class OCMCovariancePropagation implements flatbuffers.IUnpackableObject<OCMCovariancePropagationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMCovariancePropagation;
    static getRootAsOCMCovariancePropagation(bb: flatbuffers.ByteBuffer, obj?: OCMCovariancePropagation): OCMCovariancePropagation;
    static getSizePrefixedRootAsOCMCovariancePropagation(bb: flatbuffers.ByteBuffer, obj?: OCMCovariancePropagation): OCMCovariancePropagation;
    /**
     * Theory floor, the fit's residual covariance in the UVW axes of the state at each time
     * (U radial, V in-track, W along r x v), km**2: the uu, vu, vv, wu, wv and ww entries.
     * Included in the state block of COVARIANCE_DATA at epoch; subtracted when read, added at
     * every time.
     */
    FLOOR_UU_KM2(): number;
    FLOOR_VU_KM2(): number;
    FLOOR_VV_KM2(): number;
    FLOOR_WU_KM2(): number;
    FLOOR_WV_KM2(): number;
    FLOOR_WW_KM2(): number;
    /**
     * Rate errors of the mean elements from NOISE_START_MINUTES on: eccentricity vector and
     * inclination vector, 1/day.
     */
    NOISE_ECCENTRICITY_PER_DAY(): number;
    NOISE_INCLINATION_PER_DAY(): number;
    /**
     * Relative mean-motion error, dimensionless.
     */
    NOISE_MEAN_MOTION_RELATIVE(): number;
    /**
     * Non-gravitational mean-motion rate error, rad/day**2: the value that flies.
     */
    NOISE_NON_GRAVITATIONAL_RAD_DAY2(): number;
    /**
     * Start of the rate errors: end of the fit arc, minutes from the set's epoch (signed).
     */
    NOISE_START_MINUTES(): number;
    /**
     * Share c of the non-gravitational mean-motion rate that is error, dimensionless, and the
     * rate itself as n-dot_ng / n, 1/day. NOISE_NON_GRAVITATIONAL_RAD_DAY2 = c |n-dot_ng|.
     */
    NON_GRAVITATIONAL_SHARE(): number;
    NON_GRAVITATIONAL_RATE_PER_DAY(): number;
    static startOCMCovariancePropagation(builder: flatbuffers.Builder): void;
    static addFloorUuKm2(builder: flatbuffers.Builder, FLOOR_UU_KM2: number): void;
    static addFloorVuKm2(builder: flatbuffers.Builder, FLOOR_VU_KM2: number): void;
    static addFloorVvKm2(builder: flatbuffers.Builder, FLOOR_VV_KM2: number): void;
    static addFloorWuKm2(builder: flatbuffers.Builder, FLOOR_WU_KM2: number): void;
    static addFloorWvKm2(builder: flatbuffers.Builder, FLOOR_WV_KM2: number): void;
    static addFloorWwKm2(builder: flatbuffers.Builder, FLOOR_WW_KM2: number): void;
    static addNoiseEccentricityPerDay(builder: flatbuffers.Builder, NOISE_ECCENTRICITY_PER_DAY: number): void;
    static addNoiseInclinationPerDay(builder: flatbuffers.Builder, NOISE_INCLINATION_PER_DAY: number): void;
    static addNoiseMeanMotionRelative(builder: flatbuffers.Builder, NOISE_MEAN_MOTION_RELATIVE: number): void;
    static addNoiseNonGravitationalRadDay2(builder: flatbuffers.Builder, NOISE_NON_GRAVITATIONAL_RAD_DAY2: number): void;
    static addNoiseStartMinutes(builder: flatbuffers.Builder, NOISE_START_MINUTES: number): void;
    static addNonGravitationalShare(builder: flatbuffers.Builder, NON_GRAVITATIONAL_SHARE: number): void;
    static addNonGravitationalRatePerDay(builder: flatbuffers.Builder, NON_GRAVITATIONAL_RATE_PER_DAY: number): void;
    static endOCMCovariancePropagation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOCMCovariancePropagation(builder: flatbuffers.Builder, FLOOR_UU_KM2: number, FLOOR_VU_KM2: number, FLOOR_VV_KM2: number, FLOOR_WU_KM2: number, FLOOR_WV_KM2: number, FLOOR_WW_KM2: number, NOISE_ECCENTRICITY_PER_DAY: number, NOISE_INCLINATION_PER_DAY: number, NOISE_MEAN_MOTION_RELATIVE: number, NOISE_NON_GRAVITATIONAL_RAD_DAY2: number, NOISE_START_MINUTES: number, NON_GRAVITATIONAL_SHARE: number, NON_GRAVITATIONAL_RATE_PER_DAY: number): flatbuffers.Offset;
    unpack(): OCMCovariancePropagationT;
    unpackTo(_o: OCMCovariancePropagationT): void;
}
export declare class OCMCovariancePropagationT implements flatbuffers.IGeneratedObject {
    FLOOR_UU_KM2: number;
    FLOOR_VU_KM2: number;
    FLOOR_VV_KM2: number;
    FLOOR_WU_KM2: number;
    FLOOR_WV_KM2: number;
    FLOOR_WW_KM2: number;
    NOISE_ECCENTRICITY_PER_DAY: number;
    NOISE_INCLINATION_PER_DAY: number;
    NOISE_MEAN_MOTION_RELATIVE: number;
    NOISE_NON_GRAVITATIONAL_RAD_DAY2: number;
    NOISE_START_MINUTES: number;
    NON_GRAVITATIONAL_SHARE: number;
    NON_GRAVITATIONAL_RATE_PER_DAY: number;
    constructor(FLOOR_UU_KM2?: number, FLOOR_VU_KM2?: number, FLOOR_VV_KM2?: number, FLOOR_WU_KM2?: number, FLOOR_WV_KM2?: number, FLOOR_WW_KM2?: number, NOISE_ECCENTRICITY_PER_DAY?: number, NOISE_INCLINATION_PER_DAY?: number, NOISE_MEAN_MOTION_RELATIVE?: number, NOISE_NON_GRAVITATIONAL_RAD_DAY2?: number, NOISE_START_MINUTES?: number, NON_GRAVITATIONAL_SHARE?: number, NON_GRAVITATIONAL_RATE_PER_DAY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMCovariancePropagation.d.ts.map