import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLLinearRing, KMLLinearRingT } from './KMLLinearRing.js';
/**
 * Polygon geometry
 */
export declare class KMLPolygon implements flatbuffers.IUnpackableObject<KMLPolygonT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPolygon;
    static getRootAsKMLPolygon(bb: flatbuffers.ByteBuffer, obj?: KMLPolygon): KMLPolygon;
    static getSizePrefixedRootAsKMLPolygon(bb: flatbuffers.ByteBuffer, obj?: KMLPolygon): KMLPolygon;
    /**
     * Outer boundary
     */
    OUTER_BOUNDARY(obj?: KMLLinearRing): KMLLinearRing | null;
    /**
     * Inner boundaries (holes)
     */
    INNER_BOUNDARIES(index: number, obj?: KMLLinearRing): KMLLinearRing | null;
    innerBoundariesLength(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Whether to extrude to ground
     */
    EXTRUDE(): boolean;
    /**
     * Whether to tessellate
     */
    TESSELLATE(): boolean;
    static startKMLPolygon(builder: flatbuffers.Builder): void;
    static addOuterBoundary(builder: flatbuffers.Builder, OUTER_BOUNDARYOffset: flatbuffers.Offset): void;
    static addInnerBoundaries(builder: flatbuffers.Builder, INNER_BOUNDARIESOffset: flatbuffers.Offset): void;
    static createInnerBoundariesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInnerBoundariesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addExtrude(builder: flatbuffers.Builder, EXTRUDE: boolean): void;
    static addTessellate(builder: flatbuffers.Builder, TESSELLATE: boolean): void;
    static endKMLPolygon(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLPolygon(builder: flatbuffers.Builder, OUTER_BOUNDARYOffset: flatbuffers.Offset, INNER_BOUNDARIESOffset: flatbuffers.Offset, ALTITUDE_MODE: KMLAltitudeMode, EXTRUDE: boolean, TESSELLATE: boolean): flatbuffers.Offset;
    unpack(): KMLPolygonT;
    unpackTo(_o: KMLPolygonT): void;
}
export declare class KMLPolygonT implements flatbuffers.IGeneratedObject {
    OUTER_BOUNDARY: KMLLinearRingT | null;
    INNER_BOUNDARIES: (KMLLinearRingT)[];
    ALTITUDE_MODE: KMLAltitudeMode;
    EXTRUDE: boolean;
    TESSELLATE: boolean;
    constructor(OUTER_BOUNDARY?: KMLLinearRingT | null, INNER_BOUNDARIES?: (KMLLinearRingT)[], ALTITUDE_MODE?: KMLAltitudeMode, EXTRUDE?: boolean, TESSELLATE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPolygon.d.ts.map