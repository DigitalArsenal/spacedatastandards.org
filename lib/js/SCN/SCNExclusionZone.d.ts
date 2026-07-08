import * as flatbuffers from 'flatbuffers';
import { GJNGeometry, GJNGeometryT } from './GJNGeometry.js';
import { GJNPosition, GJNPositionT } from './GJNPosition.js';
/**
 * Scenario exclusion zone. BOUNDARY carries the canonical geospatial shape
 * when available; POINTS preserves simple WGS84 polygon imports.
 */
export declare class SCNExclusionZone implements flatbuffers.IUnpackableObject<SCNExclusionZoneT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNExclusionZone;
    static getRootAsSCNExclusionZone(bb: flatbuffers.ByteBuffer, obj?: SCNExclusionZone): SCNExclusionZone;
    static getSizePrefixedRootAsSCNExclusionZone(bb: flatbuffers.ByteBuffer, obj?: SCNExclusionZone): SCNExclusionZone;
    /**
     * Display label for the exclusion zone.
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fill color token for the exclusion zone.
     */
    FILL_COLOR(): string | null;
    FILL_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Label color token for the exclusion zone.
     */
    LABEL_COLOR(): string | null;
    LABEL_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the exclusion-zone polygon should be filled.
     */
    IS_FILLED(): boolean;
    /**
     * Simple WGS84 polygon points for imported zones.
     */
    POINTS(index: number, obj?: GJNPosition): GJNPosition | null;
    pointsLength(): number;
    /**
     * Canonical GeoJSON geometry for the exclusion zone.
     */
    BOUNDARY(obj?: GJNGeometry): GJNGeometry | null;
    static startSCNExclusionZone(builder: flatbuffers.Builder): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addFillColor(builder: flatbuffers.Builder, FILL_COLOROffset: flatbuffers.Offset): void;
    static addLabelColor(builder: flatbuffers.Builder, LABEL_COLOROffset: flatbuffers.Offset): void;
    static addIsFilled(builder: flatbuffers.Builder, IS_FILLED: boolean): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoundary(builder: flatbuffers.Builder, BOUNDARYOffset: flatbuffers.Offset): void;
    static endSCNExclusionZone(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCNExclusionZoneT;
    unpackTo(_o: SCNExclusionZoneT): void;
}
export declare class SCNExclusionZoneT implements flatbuffers.IGeneratedObject {
    LABEL: string | Uint8Array | null;
    FILL_COLOR: string | Uint8Array | null;
    LABEL_COLOR: string | Uint8Array | null;
    IS_FILLED: boolean;
    POINTS: (GJNPositionT)[];
    BOUNDARY: GJNGeometryT | null;
    constructor(LABEL?: string | Uint8Array | null, FILL_COLOR?: string | Uint8Array | null, LABEL_COLOR?: string | Uint8Array | null, IS_FILLED?: boolean, POINTS?: (GJNPositionT)[], BOUNDARY?: GJNGeometryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNExclusionZone.d.ts.map