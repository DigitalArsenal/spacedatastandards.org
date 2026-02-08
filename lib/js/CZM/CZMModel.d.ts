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
    static startCZMModel(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addGltf(builder: flatbuffers.Builder, GLTFOffset: flatbuffers.Offset): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addMinimumPixelSize(builder: flatbuffers.Builder, MINIMUM_PIXEL_SIZE: number): void;
    static addMaximumScale(builder: flatbuffers.Builder, MAXIMUM_SCALE: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
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
    constructor(SHOW?: boolean, GLTF?: string | Uint8Array | null, SCALE?: number, MINIMUM_PIXEL_SIZE?: number, MAXIMUM_SCALE?: number, HEIGHT_REFERENCE?: CZMHeightReference, COLOR?: CZMColorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMModel.d.ts.map