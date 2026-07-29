import * as flatbuffers from 'flatbuffers';
import { sbmFragmentOrigin } from './sbmFragmentOrigin.js';
/**
 * One debris fragment produced by a breakup event.
 *
 * Vector components are expressed in the parent SBM.REF_FRAME axes.
 * Position and velocity are the fragment's state at SBM.EPOCH, i.e. the
 * parent state plus the ejection delta-V, before any propagation.
 */
export declare class sbmFragment implements flatbuffers.IUnpackableObject<sbmFragmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sbmFragment;
    static getRootAssbmFragment(bb: flatbuffers.ByteBuffer, obj?: sbmFragment): sbmFragment;
    static getSizePrefixedRootAssbmFragment(bb: flatbuffers.ByteBuffer, obj?: sbmFragment): sbmFragment;
    /**
     * Which parent body this fragment came from.
     */
    ORIGIN(): sbmFragmentOrigin;
    /**
     * Characteristic length L_c in meters.
     */
    L_C_M(): number;
    /**
     * Area-to-mass ratio in square meters per kilogram.
     */
    AM_RATIO_M2_PER_KG(): number;
    /**
     * Average cross-sectional area in square meters.
     */
    AREA_M2(): number;
    /**
     * Fragment mass in kilograms.
     */
    MASS_KG(): number;
    /**
     * Magnitude of the ejection delta-V in meters per second.
     */
    DELTA_V_MAG_M_PER_S(): number;
    /**
     * Ejection delta-V X component in meters per second.
     */
    DELTA_V_X_M_PER_S(): number;
    /**
     * Ejection delta-V Y component in meters per second.
     */
    DELTA_V_Y_M_PER_S(): number;
    /**
     * Ejection delta-V Z component in meters per second.
     */
    DELTA_V_Z_M_PER_S(): number;
    /**
     * Fragment position X component in kilometers.
     */
    POSITION_X_KM(): number;
    /**
     * Fragment position Y component in kilometers.
     */
    POSITION_Y_KM(): number;
    /**
     * Fragment position Z component in kilometers.
     */
    POSITION_Z_KM(): number;
    /**
     * Fragment velocity X component in kilometers per second.
     */
    VELOCITY_X_KM_PER_S(): number;
    /**
     * Fragment velocity Y component in kilometers per second.
     */
    VELOCITY_Y_KM_PER_S(): number;
    /**
     * Fragment velocity Z component in kilometers per second.
     */
    VELOCITY_Z_KM_PER_S(): number;
    static startsbmFragment(builder: flatbuffers.Builder): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGIN: sbmFragmentOrigin): void;
    static addLCM(builder: flatbuffers.Builder, L_C_M: number): void;
    static addAmRatioM2PerKg(builder: flatbuffers.Builder, AM_RATIO_M2_PER_KG: number): void;
    static addAreaM2(builder: flatbuffers.Builder, AREA_M2: number): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KG: number): void;
    static addDeltaVMagMPerS(builder: flatbuffers.Builder, DELTA_V_MAG_M_PER_S: number): void;
    static addDeltaVXMPerS(builder: flatbuffers.Builder, DELTA_V_X_M_PER_S: number): void;
    static addDeltaVYMPerS(builder: flatbuffers.Builder, DELTA_V_Y_M_PER_S: number): void;
    static addDeltaVZMPerS(builder: flatbuffers.Builder, DELTA_V_Z_M_PER_S: number): void;
    static addPositionXKm(builder: flatbuffers.Builder, POSITION_X_KM: number): void;
    static addPositionYKm(builder: flatbuffers.Builder, POSITION_Y_KM: number): void;
    static addPositionZKm(builder: flatbuffers.Builder, POSITION_Z_KM: number): void;
    static addVelocityXKmPerS(builder: flatbuffers.Builder, VELOCITY_X_KM_PER_S: number): void;
    static addVelocityYKmPerS(builder: flatbuffers.Builder, VELOCITY_Y_KM_PER_S: number): void;
    static addVelocityZKmPerS(builder: flatbuffers.Builder, VELOCITY_Z_KM_PER_S: number): void;
    static endsbmFragment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createsbmFragment(builder: flatbuffers.Builder, ORIGIN: sbmFragmentOrigin, L_C_M: number, AM_RATIO_M2_PER_KG: number, AREA_M2: number, MASS_KG: number, DELTA_V_MAG_M_PER_S: number, DELTA_V_X_M_PER_S: number, DELTA_V_Y_M_PER_S: number, DELTA_V_Z_M_PER_S: number, POSITION_X_KM: number, POSITION_Y_KM: number, POSITION_Z_KM: number, VELOCITY_X_KM_PER_S: number, VELOCITY_Y_KM_PER_S: number, VELOCITY_Z_KM_PER_S: number): flatbuffers.Offset;
    unpack(): sbmFragmentT;
    unpackTo(_o: sbmFragmentT): void;
}
export declare class sbmFragmentT implements flatbuffers.IGeneratedObject {
    ORIGIN: sbmFragmentOrigin;
    L_C_M: number;
    AM_RATIO_M2_PER_KG: number;
    AREA_M2: number;
    MASS_KG: number;
    DELTA_V_MAG_M_PER_S: number;
    DELTA_V_X_M_PER_S: number;
    DELTA_V_Y_M_PER_S: number;
    DELTA_V_Z_M_PER_S: number;
    POSITION_X_KM: number;
    POSITION_Y_KM: number;
    POSITION_Z_KM: number;
    VELOCITY_X_KM_PER_S: number;
    VELOCITY_Y_KM_PER_S: number;
    VELOCITY_Z_KM_PER_S: number;
    constructor(ORIGIN?: sbmFragmentOrigin, L_C_M?: number, AM_RATIO_M2_PER_KG?: number, AREA_M2?: number, MASS_KG?: number, DELTA_V_MAG_M_PER_S?: number, DELTA_V_X_M_PER_S?: number, DELTA_V_Y_M_PER_S?: number, DELTA_V_Z_M_PER_S?: number, POSITION_X_KM?: number, POSITION_Y_KM?: number, POSITION_Z_KM?: number, VELOCITY_X_KM_PER_S?: number, VELOCITY_Y_KM_PER_S?: number, VELOCITY_Z_KM_PER_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sbmFragment.d.ts.map