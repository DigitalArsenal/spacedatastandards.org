import * as flatbuffers from 'flatbuffers';
/**
 * The level of one element set in the GLR series.
 */
export declare class MDELevel implements flatbuffers.IUnpackableObject<MDELevelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDELevel;
    static getRootAsMDELevel(bb: flatbuffers.ByteBuffer, obj?: MDELevel): MDELevel;
    static getSizePrefixedRootAsMDELevel(bb: flatbuffers.ByteBuffer, obj?: MDELevel): MDELevel;
    /**
     * Epoch of the set, Unix ms.
     */
    SET_EPOCH_MS(): bigint;
    /**
     * Semi-major axis, km.
     */
    SMA_KM(): number;
    /**
     * Mean-motion level as an in-track speed, m/s.
     */
    LEVEL_M_S(): number;
    /**
     * Its sigma, m/s.
     */
    SIGMA_M_S(): number;
    /**
     * Orbit-plane vector scaled to speed, m/s (3 values).
     */
    PLANE_M_S(index: number): number | null;
    planeMSLength(): number;
    planeMSArray(): Float64Array | null;
    /**
     * Its sigma, m/s.
     */
    PLANE_SIGMA_M_S(): number;
    static startMDELevel(builder: flatbuffers.Builder): void;
    static addSetEpochMs(builder: flatbuffers.Builder, SET_EPOCH_MS: bigint): void;
    static addSmaKm(builder: flatbuffers.Builder, SMA_KM: number): void;
    static addLevelMS(builder: flatbuffers.Builder, LEVEL_M_S: number): void;
    static addSigmaMS(builder: flatbuffers.Builder, SIGMA_M_S: number): void;
    static addPlaneMS(builder: flatbuffers.Builder, PLANE_M_SOffset: flatbuffers.Offset): void;
    static createPlaneMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPlaneMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPlaneMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlaneSigmaMS(builder: flatbuffers.Builder, PLANE_SIGMA_M_S: number): void;
    static endMDELevel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDELevel(builder: flatbuffers.Builder, SET_EPOCH_MS: bigint, SMA_KM: number, LEVEL_M_S: number, SIGMA_M_S: number, PLANE_M_SOffset: flatbuffers.Offset, PLANE_SIGMA_M_S: number): flatbuffers.Offset;
    unpack(): MDELevelT;
    unpackTo(_o: MDELevelT): void;
}
export declare class MDELevelT implements flatbuffers.IGeneratedObject {
    SET_EPOCH_MS: bigint;
    SMA_KM: number;
    LEVEL_M_S: number;
    SIGMA_M_S: number;
    PLANE_M_S: (number)[];
    PLANE_SIGMA_M_S: number;
    constructor(SET_EPOCH_MS?: bigint, SMA_KM?: number, LEVEL_M_S?: number, SIGMA_M_S?: number, PLANE_M_S?: (number)[], PLANE_SIGMA_M_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDELevel.d.ts.map