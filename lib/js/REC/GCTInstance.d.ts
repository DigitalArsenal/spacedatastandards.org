import * as flatbuffers from 'flatbuffers';
/**
 * One placement of a variant in the tile frame. The transform applied to a
 * variant-frame point p is: scale by (SCALE_X, SCALE_Y, SCALE_Z), mirror per
 * SYMMETRY, rotate by YAW_RAD about +Z, translate by (X_M, Y_M, Z_M). The
 * aligned-binary INSTANCES section carries these fields in this order as
 * float32.
 */
export declare class GCTInstance implements flatbuffers.IUnpackableObject<GCTInstanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTInstance;
    static getRootAsGCTInstance(bb: flatbuffers.ByteBuffer, obj?: GCTInstance): GCTInstance;
    static getSizePrefixedRootAsGCTInstance(bb: flatbuffers.ByteBuffer, obj?: GCTInstance): GCTInstance;
    /**
     * Index into GCT.VARIANTS.
     */
    VARIANT(): number;
    /**
     * Position of the variant's origin in the tile frame, metres east.
     */
    X_M(): number;
    /**
     * Metres north.
     */
    Y_M(): number;
    /**
     * Metres up (above the tile's ENU origin).
     */
    Z_M(): number;
    /**
     * Scale along the variant frame's axes; 1 is the variant as authored.
     */
    SCALE_X(): number;
    SCALE_Y(): number;
    SCALE_Z(): number;
    /**
     * Rotation about +Z, radians, counter-clockwise from east.
     */
    YAW_RAD(): number;
    /**
     * One of eight axis mirror symmetries applied before the yaw: bit 0
     * mirrors x, bit 1 mirrors y, bit 2 swaps x and y.
     */
    SYMMETRY(): number;
    /**
     * Strength of the consumer's per-instance erosion and warp in [0, 1] (0:
     * the variant exactly as authored). Values above 2 select a shared deck
     * gap field with hole fraction VALUE - 2, per the producer's convention
     * stated in PRODUCER_NOTES.
     */
    EROSION(): number;
    /**
     * Producer-stable identity of the cloud this instance belongs to, equal
     * across tiles, levels and valid times while the cloud persists — the
     * key a consumer fades and tracks by. 0 means unstated.
     */
    CLOUD_ID(): bigint;
    /**
     * Cluster the instance belongs to (a chain of cumulus, a tower), for
     * grouping; 0 means none.
     */
    CLUSTER_ID(): number;
    /**
     * Shape error, metres: the silhouette distance between this placement
     * and the cloud it stands in for. 0 means the instance IS the cloud (a
     * unique variant); a class stand-in placed for a chain of five cumulus
     * carries half the member spacing. A consumer that refines below the
     * shape error requests the unique variant.
     */
    SHAPE_ERROR_M(): number;
    /**
     * Width of the cloud as placed, metres, for size-dependent decisions.
     */
    WIDTH_M(): number;
    static startGCTInstance(builder: flatbuffers.Builder): void;
    static addVariant(builder: flatbuffers.Builder, VARIANT: number): void;
    static addXM(builder: flatbuffers.Builder, X_M: number): void;
    static addYM(builder: flatbuffers.Builder, Y_M: number): void;
    static addZM(builder: flatbuffers.Builder, Z_M: number): void;
    static addScaleX(builder: flatbuffers.Builder, SCALE_X: number): void;
    static addScaleY(builder: flatbuffers.Builder, SCALE_Y: number): void;
    static addScaleZ(builder: flatbuffers.Builder, SCALE_Z: number): void;
    static addYawRad(builder: flatbuffers.Builder, YAW_RAD: number): void;
    static addSymmetry(builder: flatbuffers.Builder, SYMMETRY: number): void;
    static addErosion(builder: flatbuffers.Builder, EROSION: number): void;
    static addCloudId(builder: flatbuffers.Builder, CLOUD_ID: bigint): void;
    static addClusterId(builder: flatbuffers.Builder, CLUSTER_ID: number): void;
    static addShapeErrorM(builder: flatbuffers.Builder, SHAPE_ERROR_M: number): void;
    static addWidthM(builder: flatbuffers.Builder, WIDTH_M: number): void;
    static endGCTInstance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGCTInstance(builder: flatbuffers.Builder, VARIANT: number, X_M: number, Y_M: number, Z_M: number, SCALE_X: number, SCALE_Y: number, SCALE_Z: number, YAW_RAD: number, SYMMETRY: number, EROSION: number, CLOUD_ID: bigint, CLUSTER_ID: number, SHAPE_ERROR_M: number, WIDTH_M: number): flatbuffers.Offset;
    unpack(): GCTInstanceT;
    unpackTo(_o: GCTInstanceT): void;
}
export declare class GCTInstanceT implements flatbuffers.IGeneratedObject {
    VARIANT: number;
    X_M: number;
    Y_M: number;
    Z_M: number;
    SCALE_X: number;
    SCALE_Y: number;
    SCALE_Z: number;
    YAW_RAD: number;
    SYMMETRY: number;
    EROSION: number;
    CLOUD_ID: bigint;
    CLUSTER_ID: number;
    SHAPE_ERROR_M: number;
    WIDTH_M: number;
    constructor(VARIANT?: number, X_M?: number, Y_M?: number, Z_M?: number, SCALE_X?: number, SCALE_Y?: number, SCALE_Z?: number, YAW_RAD?: number, SYMMETRY?: number, EROSION?: number, CLOUD_ID?: bigint, CLUSTER_ID?: number, SHAPE_ERROR_M?: number, WIDTH_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTInstance.d.ts.map