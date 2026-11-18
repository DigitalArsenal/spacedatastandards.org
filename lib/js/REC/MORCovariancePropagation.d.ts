import * as flatbuffers from 'flatbuffers';
/**
 * What propagates COVARIANCE_DATA or COV_FACTOR beyond its epoch: the values of $OCM OCMCovariancePropagation, same
 * names, units and meanings, all thirteen always present. A closed struct: a later quantity comes as a new
 * appended field of MOR, never as a change to this struct.
 */
export declare class MORCovariancePropagation implements flatbuffers.IUnpackableObject<MORCovariancePropagationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MORCovariancePropagation;
    FLOOR_UU_KM2(): number;
    FLOOR_VU_KM2(): number;
    FLOOR_VV_KM2(): number;
    FLOOR_WU_KM2(): number;
    FLOOR_WV_KM2(): number;
    FLOOR_WW_KM2(): number;
    NOISE_ECCENTRICITY_PER_DAY(): number;
    NOISE_INCLINATION_PER_DAY(): number;
    NOISE_MEAN_MOTION_RELATIVE(): number;
    NOISE_NON_GRAVITATIONAL_RAD_DAY2(): number;
    NOISE_START_MINUTES(): number;
    NON_GRAVITATIONAL_SHARE(): number;
    NON_GRAVITATIONAL_RATE_PER_DAY(): number;
    static sizeOf(): number;
    static createMORCovariancePropagation(builder: flatbuffers.Builder, FLOOR_UU_KM2: number, FLOOR_VU_KM2: number, FLOOR_VV_KM2: number, FLOOR_WU_KM2: number, FLOOR_WV_KM2: number, FLOOR_WW_KM2: number, NOISE_ECCENTRICITY_PER_DAY: number, NOISE_INCLINATION_PER_DAY: number, NOISE_MEAN_MOTION_RELATIVE: number, NOISE_NON_GRAVITATIONAL_RAD_DAY2: number, NOISE_START_MINUTES: number, NON_GRAVITATIONAL_SHARE: number, NON_GRAVITATIONAL_RATE_PER_DAY: number): flatbuffers.Offset;
    unpack(): MORCovariancePropagationT;
    unpackTo(_o: MORCovariancePropagationT): void;
}
export declare class MORCovariancePropagationT implements flatbuffers.IGeneratedObject {
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
//# sourceMappingURL=MORCovariancePropagation.d.ts.map