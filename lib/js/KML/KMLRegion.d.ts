import * as flatbuffers from 'flatbuffers';
import { KMLLatLonAltBox, KMLLatLonAltBoxT } from './KMLLatLonAltBox.js';
import { KMLLod, KMLLodT } from './KMLLod.js';
/**
 * Region — Level of Detail bounding region
 */
export declare class KMLRegion implements flatbuffers.IUnpackableObject<KMLRegionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLRegion;
    static getRootAsKMLRegion(bb: flatbuffers.ByteBuffer, obj?: KMLRegion): KMLRegion;
    static getSizePrefixedRootAsKMLRegion(bb: flatbuffers.ByteBuffer, obj?: KMLRegion): KMLRegion;
    /**
     * LatLonAltBox
     */
    LAT_LON_ALT_BOX(obj?: KMLLatLonAltBox): KMLLatLonAltBox | null;
    /**
     * Level of detail
     */
    LOD(obj?: KMLLod): KMLLod | null;
    static startKMLRegion(builder: flatbuffers.Builder): void;
    static addLatLonAltBox(builder: flatbuffers.Builder, LAT_LON_ALT_BOXOffset: flatbuffers.Offset): void;
    static addLod(builder: flatbuffers.Builder, LODOffset: flatbuffers.Offset): void;
    static endKMLRegion(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLRegionT;
    unpackTo(_o: KMLRegionT): void;
}
export declare class KMLRegionT implements flatbuffers.IGeneratedObject {
    LAT_LON_ALT_BOX: KMLLatLonAltBoxT | null;
    LOD: KMLLodT | null;
    constructor(LAT_LON_ALT_BOX?: KMLLatLonAltBoxT | null, LOD?: KMLLodT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLRegion.d.ts.map