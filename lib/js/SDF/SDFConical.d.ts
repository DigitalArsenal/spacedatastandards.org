import * as flatbuffers from 'flatbuffers';
/**
 * Conical SDF parameters.
 */
export declare class SDFConical implements flatbuffers.IUnpackableObject<SDFConicalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFConical;
    static getRootAsSDFConical(bb: flatbuffers.ByteBuffer, obj?: SDFConical): SDFConical;
    static getSizePrefixedRootAsSDFConical(bb: flatbuffers.ByteBuffer, obj?: SDFConical): SDFConical;
    HALF_ANGLE(): number;
    /**
     * Inner half-angle for hollow cones (0 == solid).
     */
    INNER_HALF_ANGLE(): number;
    /**
     * Minimum range (inner cap distance).
     */
    MIN_RANGE(): number;
    /**
     * Maximum range (outer cap distance).
     */
    MAX_RANGE(): number;
    /**
     * Use a flat cap (true) or a spherical cap (false).
     */
    FLAT_CAP(): boolean;
    static startSDFConical(builder: flatbuffers.Builder): void;
    static addHalfAngle(builder: flatbuffers.Builder, HALF_ANGLE: number): void;
    static addInnerHalfAngle(builder: flatbuffers.Builder, INNER_HALF_ANGLE: number): void;
    static addMinRange(builder: flatbuffers.Builder, MIN_RANGE: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static addFlatCap(builder: flatbuffers.Builder, FLAT_CAP: boolean): void;
    static endSDFConical(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFConical(builder: flatbuffers.Builder, HALF_ANGLE: number, INNER_HALF_ANGLE: number, MIN_RANGE: number, MAX_RANGE: number, FLAT_CAP: boolean): flatbuffers.Offset;
    unpack(): SDFConicalT;
    unpackTo(_o: SDFConicalT): void;
}
export declare class SDFConicalT implements flatbuffers.IGeneratedObject {
    HALF_ANGLE: number;
    INNER_HALF_ANGLE: number;
    MIN_RANGE: number;
    MAX_RANGE: number;
    FLAT_CAP: boolean;
    constructor(HALF_ANGLE?: number, INNER_HALF_ANGLE?: number, MIN_RANGE?: number, MAX_RANGE?: number, FLAT_CAP?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFConical.d.ts.map