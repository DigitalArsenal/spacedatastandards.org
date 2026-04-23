import * as flatbuffers from 'flatbuffers';
/**
 * Custom SDF defined by a set of unit boundary-direction vectors.
 */
export declare class SDFCustom implements flatbuffers.IUnpackableObject<SDFCustomT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFCustom;
    static getRootAsSDFCustom(bb: flatbuffers.ByteBuffer, obj?: SDFCustom): SDFCustom;
    static getSizePrefixedRootAsSDFCustom(bb: flatbuffers.ByteBuffer, obj?: SDFCustom): SDFCustom;
    /**
     * Unit vectors defining the boundary packed as [x0, y0, z0, x1, y1, z1, ...].
     */
    DIRECTIONS(index: number): number | null;
    directionsLength(): number;
    directionsArray(): Float64Array | null;
    MAX_RANGE(): number;
    static startSDFCustom(builder: flatbuffers.Builder): void;
    static addDirections(builder: flatbuffers.Builder, DIRECTIONSOffset: flatbuffers.Offset): void;
    static createDirectionsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDirectionsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDirectionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static endSDFCustom(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFCustom(builder: flatbuffers.Builder, DIRECTIONSOffset: flatbuffers.Offset, MAX_RANGE: number): flatbuffers.Offset;
    unpack(): SDFCustomT;
    unpackTo(_o: SDFCustomT): void;
}
export declare class SDFCustomT implements flatbuffers.IGeneratedObject {
    DIRECTIONS: (number)[];
    MAX_RANGE: number;
    constructor(DIRECTIONS?: (number)[], MAX_RANGE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFCustom.d.ts.map