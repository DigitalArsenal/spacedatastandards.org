import * as flatbuffers from 'flatbuffers';
/**
 * ViewVolume for PhotoOverlay
 */
export declare class KMLViewVolume implements flatbuffers.IUnpackableObject<KMLViewVolumeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLViewVolume;
    static getRootAsKMLViewVolume(bb: flatbuffers.ByteBuffer, obj?: KMLViewVolume): KMLViewVolume;
    static getSizePrefixedRootAsKMLViewVolume(bb: flatbuffers.ByteBuffer, obj?: KMLViewVolume): KMLViewVolume;
    /**
     * Left field of view angle
     */
    LEFT_FOV(): number;
    /**
     * Right field of view angle
     */
    RIGHT_FOV(): number;
    /**
     * Bottom field of view angle
     */
    BOTTOM_FOV(): number;
    /**
     * Top field of view angle
     */
    TOP_FOV(): number;
    /**
     * Near clipping plane
     */
    NEAR(): number;
    static startKMLViewVolume(builder: flatbuffers.Builder): void;
    static addLeftFov(builder: flatbuffers.Builder, LEFT_FOV: number): void;
    static addRightFov(builder: flatbuffers.Builder, RIGHT_FOV: number): void;
    static addBottomFov(builder: flatbuffers.Builder, BOTTOM_FOV: number): void;
    static addTopFov(builder: flatbuffers.Builder, TOP_FOV: number): void;
    static addNear(builder: flatbuffers.Builder, NEAR: number): void;
    static endKMLViewVolume(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLViewVolume(builder: flatbuffers.Builder, LEFT_FOV: number, RIGHT_FOV: number, BOTTOM_FOV: number, TOP_FOV: number, NEAR: number): flatbuffers.Offset;
    unpack(): KMLViewVolumeT;
    unpackTo(_o: KMLViewVolumeT): void;
}
export declare class KMLViewVolumeT implements flatbuffers.IGeneratedObject {
    LEFT_FOV: number;
    RIGHT_FOV: number;
    BOTTOM_FOV: number;
    TOP_FOV: number;
    NEAR: number;
    constructor(LEFT_FOV?: number, RIGHT_FOV?: number, BOTTOM_FOV?: number, TOP_FOV?: number, NEAR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLViewVolume.d.ts.map