import * as flatbuffers from 'flatbuffers';
import { GJNBoundingBox, GJNBoundingBoxT } from './GJNBoundingBox.js';
import { GJNFeature, GJNFeatureT } from './GJNFeature.js';
/**
 * GeoJSON FeatureCollection
 */
export declare class GJN implements flatbuffers.IUnpackableObject<GJNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJN;
    static getRootAsGJN(bb: flatbuffers.ByteBuffer, obj?: GJN): GJN;
    static getSizePrefixedRootAsGJN(bb: flatbuffers.ByteBuffer, obj?: GJN): GJN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Features in the collection
     */
    FEATURES(index: number, obj?: GJNFeature): GJNFeature | null;
    featuresLength(): number;
    /**
     * Bounding box (optional)
     */
    BBOX(obj?: GJNBoundingBox): GJNBoundingBox | null;
    static startGJN(builder: flatbuffers.Builder): void;
    static addFeatures(builder: flatbuffers.Builder, FEATURESOffset: flatbuffers.Offset): void;
    static createFeaturesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFeaturesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBbox(builder: flatbuffers.Builder, BBOXOffset: flatbuffers.Offset): void;
    static endGJN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGJNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGJNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GJNT;
    unpackTo(_o: GJNT): void;
}
export declare class GJNT implements flatbuffers.IGeneratedObject {
    FEATURES: (GJNFeatureT)[];
    BBOX: GJNBoundingBoxT | null;
    constructor(FEATURES?: (GJNFeatureT)[], BBOX?: GJNBoundingBoxT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJN.d.ts.map