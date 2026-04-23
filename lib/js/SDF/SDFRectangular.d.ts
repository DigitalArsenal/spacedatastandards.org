import * as flatbuffers from 'flatbuffers';
/**
 * Rectangular (pyramidal) SDF parameters.
 */
export declare class SDFRectangular implements flatbuffers.IUnpackableObject<SDFRectangularT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFRectangular;
    static getRootAsSDFRectangular(bb: flatbuffers.ByteBuffer, obj?: SDFRectangular): SDFRectangular;
    static getSizePrefixedRootAsSDFRectangular(bb: flatbuffers.ByteBuffer, obj?: SDFRectangular): SDFRectangular;
    X_HALF_ANGLE(): number;
    Y_HALF_ANGLE(): number;
    MIN_RANGE(): number;
    MAX_RANGE(): number;
    static startSDFRectangular(builder: flatbuffers.Builder): void;
    static addXHalfAngle(builder: flatbuffers.Builder, X_HALF_ANGLE: number): void;
    static addYHalfAngle(builder: flatbuffers.Builder, Y_HALF_ANGLE: number): void;
    static addMinRange(builder: flatbuffers.Builder, MIN_RANGE: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static endSDFRectangular(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFRectangular(builder: flatbuffers.Builder, X_HALF_ANGLE: number, Y_HALF_ANGLE: number, MIN_RANGE: number, MAX_RANGE: number): flatbuffers.Offset;
    unpack(): SDFRectangularT;
    unpackTo(_o: SDFRectangularT): void;
}
export declare class SDFRectangularT implements flatbuffers.IGeneratedObject {
    X_HALF_ANGLE: number;
    Y_HALF_ANGLE: number;
    MIN_RANGE: number;
    MAX_RANGE: number;
    constructor(X_HALF_ANGLE?: number, Y_HALF_ANGLE?: number, MIN_RANGE?: number, MAX_RANGE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFRectangular.d.ts.map