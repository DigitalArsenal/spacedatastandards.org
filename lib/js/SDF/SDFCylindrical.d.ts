import * as flatbuffers from 'flatbuffers';
/**
 * Cylindrical SDF parameters.
 */
export declare class SDFCylindrical implements flatbuffers.IUnpackableObject<SDFCylindricalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFCylindrical;
    static getRootAsSDFCylindrical(bb: flatbuffers.ByteBuffer, obj?: SDFCylindrical): SDFCylindrical;
    static getSizePrefixedRootAsSDFCylindrical(bb: flatbuffers.ByteBuffer, obj?: SDFCylindrical): SDFCylindrical;
    RADIUS(): number;
    HALF_HEIGHT(): number;
    static startSDFCylindrical(builder: flatbuffers.Builder): void;
    static addRadius(builder: flatbuffers.Builder, RADIUS: number): void;
    static addHalfHeight(builder: flatbuffers.Builder, HALF_HEIGHT: number): void;
    static endSDFCylindrical(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFCylindrical(builder: flatbuffers.Builder, RADIUS: number, HALF_HEIGHT: number): flatbuffers.Offset;
    unpack(): SDFCylindricalT;
    unpackTo(_o: SDFCylindricalT): void;
}
export declare class SDFCylindricalT implements flatbuffers.IGeneratedObject {
    RADIUS: number;
    HALF_HEIGHT: number;
    constructor(RADIUS?: number, HALF_HEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFCylindrical.d.ts.map