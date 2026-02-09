import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
/**
 * Model properties (glTF)
 */
export declare class CZMModel implements flatbuffers.IUnpackableObject<CZMModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMModel;
    static getRootAsCZMModel(bb: flatbuffers.ByteBuffer, obj?: CZMModel): CZMModel;
    static getSizePrefixedRootAsCZMModel(bb: flatbuffers.ByteBuffer, obj?: CZMModel): CZMModel;
    /**
     * Whether the model is displayed
     */
    SHOW(): boolean;
    /**
     * URI to the glTF model
     */
    GLTF(): string | null;
    GLTF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scale factor
     */
    SCALE(): number;
    /**
     * Minimum pixel size
     */
    MINIMUM_PIXEL_SIZE(): number;
    /**
     * Maximum scale
     */
    MAXIMUM_SCALE(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    /**
     * Color tint
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Whether to incrementally load textures
     */
    INCREMENTALLY_LOAD_TEXTURES(): boolean;
    /**
     * Whether to run animations
     */
    RUN_ANIMATIONS(): boolean;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Silhouette color
     */
    SILHOUETTE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Silhouette size in pixels
     */
    SILHOUETTE_SIZE(): number;
    /**
     * Color blend mode
     */
    COLOR_BLEND_MODE(): string | null;
    COLOR_BLEND_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color blend amount (0-1)
     */
    COLOR_BLEND_AMOUNT(): number;
    static startCZMModel(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addGltf(builder: flatbuffers.Builder, GLTFOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addMinimumPixelSize(builder: flatbuffers.Builder, MINIMUM_PIXEL_SIZE: number): void;
    static addMaximumScale(builder: flatbuffers.Builder, MAXIMUM_SCALE: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addIncrementallyLoadTextures(builder: flatbuffers.Builder, INCREMENTALLY_LOAD_TEXTURES: boolean): void;
    static addRunAnimations(builder: flatbuffers.Builder, RUN_ANIMATIONS: boolean): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addSilhouetteColor(builder: flatbuffers.Builder, SILHOUETTE_COLOROffset: flatbuffers.Offset): void;
    static addSilhouetteSize(builder: flatbuffers.Builder, SILHOUETTE_SIZE: number): void;
    static addColorBlendMode(builder: flatbuffers.Builder, COLOR_BLEND_MODEOffset: flatbuffers.Offset): void;
    static addColorBlendAmount(builder: flatbuffers.Builder, COLOR_BLEND_AMOUNT: number): void;
    static endCZMModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMModelT;
    unpackTo(_o: CZMModelT): void;
}
export declare class CZMModelT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    GLTF: string | Uint8Array | null;
    SCALE: number;
    MINIMUM_PIXEL_SIZE: number;
    MAXIMUM_SCALE: number;
    HEIGHT_REFERENCE: CZMHeightReference;
    COLOR: CZMColorT | null;
    INCREMENTALLY_LOAD_TEXTURES: boolean;
    RUN_ANIMATIONS: boolean;
    SHADOWS: string | Uint8Array | null;
    SILHOUETTE_COLOR: CZMColorT | null;
    SILHOUETTE_SIZE: number;
    COLOR_BLEND_MODE: string | Uint8Array | null;
    COLOR_BLEND_AMOUNT: number;
    constructor(SHOW?: boolean, GLTF?: string | Uint8Array | null, SCALE?: number, MINIMUM_PIXEL_SIZE?: number, MAXIMUM_SCALE?: number, HEIGHT_REFERENCE?: CZMHeightReference, COLOR?: CZMColorT | null, INCREMENTALLY_LOAD_TEXTURES?: boolean, RUN_ANIMATIONS?: boolean, SHADOWS?: string | Uint8Array | null, SILHOUETTE_COLOR?: CZMColorT | null, SILHOUETTE_SIZE?: number, COLOR_BLEND_MODE?: string | Uint8Array | null, COLOR_BLEND_AMOUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMModel.d.ts.map