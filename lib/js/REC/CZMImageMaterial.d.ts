import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Image material
 */
export declare class CZMImageMaterial implements flatbuffers.IUnpackableObject<CZMImageMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMImageMaterial;
    static getRootAsCZMImageMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMImageMaterial): CZMImageMaterial;
    static getSizePrefixedRootAsCZMImageMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMImageMaterial): CZMImageMaterial;
    /**
     * Image URI
     */
    IMAGE(): string | null;
    IMAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Repeat X
     */
    REPEAT_X(): number;
    /**
     * Repeat Y
     */
    REPEAT_Y(): number;
    /**
     * Color tint
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Whether the image has transparency
     */
    TRANSPARENT(): boolean;
    static startCZMImageMaterial(builder: flatbuffers.Builder): void;
    static addImage(builder: flatbuffers.Builder, IMAGEOffset: flatbuffers.Offset): void;
    static addRepeatX(builder: flatbuffers.Builder, REPEAT_X: number): void;
    static addRepeatY(builder: flatbuffers.Builder, REPEAT_Y: number): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addTransparent(builder: flatbuffers.Builder, TRANSPARENT: boolean): void;
    static endCZMImageMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMImageMaterialT;
    unpackTo(_o: CZMImageMaterialT): void;
}
export declare class CZMImageMaterialT implements flatbuffers.IGeneratedObject {
    IMAGE: string | Uint8Array | null;
    REPEAT_X: number;
    REPEAT_Y: number;
    COLOR: CZMColorT | null;
    TRANSPARENT: boolean;
    constructor(IMAGE?: string | Uint8Array | null, REPEAT_X?: number, REPEAT_Y?: number, COLOR?: CZMColorT | null, TRANSPARENT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMImageMaterial.d.ts.map