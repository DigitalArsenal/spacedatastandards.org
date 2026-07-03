import * as flatbuffers from 'flatbuffers';
import { GJNLinearRing, GJNLinearRingT } from './GJNLinearRing.js';
/**
 * A polygon represented as an array of rings (outer boundary + holes)
 */
export declare class GJNPolygonRings implements flatbuffers.IUnpackableObject<GJNPolygonRingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNPolygonRings;
    static getRootAsGJNPolygonRings(bb: flatbuffers.ByteBuffer, obj?: GJNPolygonRings): GJNPolygonRings;
    static getSizePrefixedRootAsGJNPolygonRings(bb: flatbuffers.ByteBuffer, obj?: GJNPolygonRings): GJNPolygonRings;
    /**
     * Rings: first is outer boundary, rest are holes
     */
    RINGS(index: number, obj?: GJNLinearRing): GJNLinearRing | null;
    ringsLength(): number;
    static startGJNPolygonRings(builder: flatbuffers.Builder): void;
    static addRings(builder: flatbuffers.Builder, RINGSOffset: flatbuffers.Offset): void;
    static createRingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGJNPolygonRings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNPolygonRings(builder: flatbuffers.Builder, RINGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GJNPolygonRingsT;
    unpackTo(_o: GJNPolygonRingsT): void;
}
export declare class GJNPolygonRingsT implements flatbuffers.IGeneratedObject {
    RINGS: (GJNLinearRingT)[];
    constructor(RINGS?: (GJNLinearRingT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNPolygonRings.d.ts.map