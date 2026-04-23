import * as flatbuffers from 'flatbuffers';
/**
 * Spherical SDF parameters.
 */
export declare class SDFSpherical implements flatbuffers.IUnpackableObject<SDFSphericalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFSpherical;
    static getRootAsSDFSpherical(bb: flatbuffers.ByteBuffer, obj?: SDFSpherical): SDFSpherical;
    static getSizePrefixedRootAsSDFSpherical(bb: flatbuffers.ByteBuffer, obj?: SDFSpherical): SDFSpherical;
    RADIUS(): number;
    /**
     * Inner radius for hollow sphere (0 == solid).
     */
    INNER_RADIUS(): number;
    static startSDFSpherical(builder: flatbuffers.Builder): void;
    static addRadius(builder: flatbuffers.Builder, RADIUS: number): void;
    static addInnerRadius(builder: flatbuffers.Builder, INNER_RADIUS: number): void;
    static endSDFSpherical(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFSpherical(builder: flatbuffers.Builder, RADIUS: number, INNER_RADIUS: number): flatbuffers.Offset;
    unpack(): SDFSphericalT;
    unpackTo(_o: SDFSphericalT): void;
}
export declare class SDFSphericalT implements flatbuffers.IGeneratedObject {
    RADIUS: number;
    INNER_RADIUS: number;
    constructor(RADIUS?: number, INNER_RADIUS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFSpherical.d.ts.map