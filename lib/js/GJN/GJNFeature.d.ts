import * as flatbuffers from 'flatbuffers';
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
     * Feature identifier (optional)
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
    static startGJNFeature(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addProperties(builder: flatbuffers.Builder, PROPERTIESOffset: flatbuffers.Offset): void;
    static createPropertiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPropertiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGJNFeature(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): GJNFeatureT;
    unpackTo(_o: GJNFeatureT): void;
}
export declare class GJNFeatureT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    GEOMETRY: GJNGeometryT | null;
    PROPERTIES: (GJNPropertyT)[];
    constructor(ID?: string | Uint8Array | null, GEOMETRY?: GJNGeometryT | null, PROPERTIES?: (GJNPropertyT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNFeature.d.ts.map