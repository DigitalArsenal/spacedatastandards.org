import * as flatbuffers from 'flatbuffers';
import { GJNBoundingBox, GJNBoundingBoxT } from './GJNBoundingBox.js';
import { GJNGeometry, GJNGeometryT } from './GJNGeometry.js';
import { GJNProperty, GJNPropertyT } from './GJNProperty.js';
/**
 * GeoJSON Feature object
 */
export declare class GJNFeature implements flatbuffers.IUnpackableObject<GJNFeatureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNFeature;
    static getRootAsGJNFeature(bb: flatbuffers.ByteBuffer, obj?: GJNFeature): GJNFeature;
    static getSizePrefixedRootAsGJNFeature(bb: flatbuffers.ByteBuffer, obj?: GJNFeature): GJNFeature;
    /**
     * Feature identifier (optional, string form)
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geometry of the feature
     */
    GEOMETRY(obj?: GJNGeometry): GJNGeometry | null;
    /**
     * Properties as key-value pairs
     */
    PROPERTIES(index: number, obj?: GJNProperty): GJNProperty | null;
    propertiesLength(): number;
    /**
     * Numeric feature identifier (use when ID_IS_NUMERIC is true)
     */
    NUM_ID(): number;
    /**
     * True if the feature id is numeric rather than string
     */
    ID_IS_NUMERIC(): boolean;
    /**
     * True if the feature has a geometry (false means geometry was JSON null)
     */
    HAS_GEOMETRY(): boolean;
    /**
     * True if properties was JSON null (vs empty object)
     */
    PROPERTIES_IS_NULL(): boolean;
    /**
     * Bounding box (optional, per RFC 7946 Section 5)
     */
    BBOX(obj?: GJNBoundingBox): GJNBoundingBox | null;
    static startGJNFeature(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addProperties(builder: flatbuffers.Builder, PROPERTIESOffset: flatbuffers.Offset): void;
    static createPropertiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPropertiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNumId(builder: flatbuffers.Builder, NUM_ID: number): void;
    static addIdIsNumeric(builder: flatbuffers.Builder, ID_IS_NUMERIC: boolean): void;
    static addHasGeometry(builder: flatbuffers.Builder, HAS_GEOMETRY: boolean): void;
    static addPropertiesIsNull(builder: flatbuffers.Builder, PROPERTIES_IS_NULL: boolean): void;
    static addBbox(builder: flatbuffers.Builder, BBOXOffset: flatbuffers.Offset): void;
    static endGJNFeature(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): GJNFeatureT;
    unpackTo(_o: GJNFeatureT): void;
}
export declare class GJNFeatureT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    GEOMETRY: GJNGeometryT | null;
    PROPERTIES: (GJNPropertyT)[];
    NUM_ID: number;
    ID_IS_NUMERIC: boolean;
    HAS_GEOMETRY: boolean;
    PROPERTIES_IS_NULL: boolean;
    BBOX: GJNBoundingBoxT | null;
    constructor(ID?: string | Uint8Array | null, GEOMETRY?: GJNGeometryT | null, PROPERTIES?: (GJNPropertyT)[], NUM_ID?: number, ID_IS_NUMERIC?: boolean, HAS_GEOMETRY?: boolean, PROPERTIES_IS_NULL?: boolean, BBOX?: GJNBoundingBoxT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNFeature.d.ts.map