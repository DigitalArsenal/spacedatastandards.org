import * as flatbuffers from 'flatbuffers';
/**
 * Level of Detail parameters
 */
export declare class KMLLod implements flatbuffers.IUnpackableObject<KMLLodT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLod;
    static getRootAsKMLLod(bb: flatbuffers.ByteBuffer, obj?: KMLLod): KMLLod;
    static getSizePrefixedRootAsKMLLod(bb: flatbuffers.ByteBuffer, obj?: KMLLod): KMLLod;
    /**
     * Minimum LOD pixels
     */
    MIN_LOD_PIXELS(): number;
    /**
     * Maximum LOD pixels (-1 = infinite)
     */
    MAX_LOD_PIXELS(): number;
    /**
     * Minimum fade extent
     */
    MIN_FADE_EXTENT(): number;
    /**
     * Maximum fade extent
     */
    MAX_FADE_EXTENT(): number;
    static startKMLLod(builder: flatbuffers.Builder): void;
    static addMinLodPixels(builder: flatbuffers.Builder, MIN_LOD_PIXELS: number): void;
    static addMaxLodPixels(builder: flatbuffers.Builder, MAX_LOD_PIXELS: number): void;
    static addMinFadeExtent(builder: flatbuffers.Builder, MIN_FADE_EXTENT: number): void;
    static addMaxFadeExtent(builder: flatbuffers.Builder, MAX_FADE_EXTENT: number): void;
    static endKMLLod(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLod(builder: flatbuffers.Builder, MIN_LOD_PIXELS: number, MAX_LOD_PIXELS: number, MIN_FADE_EXTENT: number, MAX_FADE_EXTENT: number): flatbuffers.Offset;
    unpack(): KMLLodT;
    unpackTo(_o: KMLLodT): void;
}
export declare class KMLLodT implements flatbuffers.IGeneratedObject {
    MIN_LOD_PIXELS: number;
    MAX_LOD_PIXELS: number;
    MIN_FADE_EXTENT: number;
    MAX_FADE_EXTENT: number;
    constructor(MIN_LOD_PIXELS?: number, MAX_LOD_PIXELS?: number, MIN_FADE_EXTENT?: number, MAX_FADE_EXTENT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLod.d.ts.map