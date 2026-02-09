import * as flatbuffers from 'flatbuffers';
import { KMLGridOrigin } from './KMLGridOrigin.js';
/**
 * ImagePyramid for PhotoOverlay
 */
export declare class KMLImagePyramid implements flatbuffers.IUnpackableObject<KMLImagePyramidT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLImagePyramid;
    static getRootAsKMLImagePyramid(bb: flatbuffers.ByteBuffer, obj?: KMLImagePyramid): KMLImagePyramid;
    static getSizePrefixedRootAsKMLImagePyramid(bb: flatbuffers.ByteBuffer, obj?: KMLImagePyramid): KMLImagePyramid;
    /**
     * Tile size in pixels
     */
    TILE_SIZE(): number;
    /**
     * Maximum image width
     */
    MAX_WIDTH(): number;
    /**
     * Maximum image height
     */
    MAX_HEIGHT(): number;
    /**
     * Grid origin
     */
    GRID_ORIGIN(): KMLGridOrigin;
    static startKMLImagePyramid(builder: flatbuffers.Builder): void;
    static addTileSize(builder: flatbuffers.Builder, TILE_SIZE: number): void;
    static addMaxWidth(builder: flatbuffers.Builder, MAX_WIDTH: number): void;
    static addMaxHeight(builder: flatbuffers.Builder, MAX_HEIGHT: number): void;
    static addGridOrigin(builder: flatbuffers.Builder, GRID_ORIGIN: KMLGridOrigin): void;
    static endKMLImagePyramid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLImagePyramid(builder: flatbuffers.Builder, TILE_SIZE: number, MAX_WIDTH: number, MAX_HEIGHT: number, GRID_ORIGIN: KMLGridOrigin): flatbuffers.Offset;
    unpack(): KMLImagePyramidT;
    unpackTo(_o: KMLImagePyramidT): void;
}
export declare class KMLImagePyramidT implements flatbuffers.IGeneratedObject {
    TILE_SIZE: number;
    MAX_WIDTH: number;
    MAX_HEIGHT: number;
    GRID_ORIGIN: KMLGridOrigin;
    constructor(TILE_SIZE?: number, MAX_WIDTH?: number, MAX_HEIGHT?: number, GRID_ORIGIN?: KMLGridOrigin);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLImagePyramid.d.ts.map