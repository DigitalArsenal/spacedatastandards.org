import * as flatbuffers from 'flatbuffers';
import { KMLColorMode } from './KMLColorMode.js';
/**
 * Line style
 */
export declare class KMLLineStyle implements flatbuffers.IUnpackableObject<KMLLineStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLineStyle;
    static getRootAsKMLLineStyle(bb: flatbuffers.ByteBuffer, obj?: KMLLineStyle): KMLLineStyle;
    static getSizePrefixedRootAsKMLLineStyle(bb: flatbuffers.ByteBuffer, obj?: KMLLineStyle): KMLLineStyle;
    /**
     * KML color in aabbggrr hex format
     */
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color mode
     */
    COLOR_MODE(): KMLColorMode;
    /**
     * Width in pixels
     */
    WIDTH(): number;
    /**
     * gx:outerColor
     */
    GX_OUTER_COLOR(): string | null;
    GX_OUTER_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * gx:outerWidth
     */
    GX_OUTER_WIDTH(): number;
    /**
     * gx:physicalWidth
     */
    GX_PHYSICAL_WIDTH(): number;
    /**
     * gx:labelVisibility
     */
    GX_LABEL_VISIBILITY(): boolean;
    static startKMLLineStyle(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addColorMode(builder: flatbuffers.Builder, COLOR_MODE: KMLColorMode): void;
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static addGxOuterColor(builder: flatbuffers.Builder, GX_OUTER_COLOROffset: flatbuffers.Offset): void;
    static addGxOuterWidth(builder: flatbuffers.Builder, GX_OUTER_WIDTH: number): void;
    static addGxPhysicalWidth(builder: flatbuffers.Builder, GX_PHYSICAL_WIDTH: number): void;
    static addGxLabelVisibility(builder: flatbuffers.Builder, GX_LABEL_VISIBILITY: boolean): void;
    static endKMLLineStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLineStyle(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, COLOR_MODE: KMLColorMode, WIDTH: number, GX_OUTER_COLOROffset: flatbuffers.Offset, GX_OUTER_WIDTH: number, GX_PHYSICAL_WIDTH: number, GX_LABEL_VISIBILITY: boolean): flatbuffers.Offset;
    unpack(): KMLLineStyleT;
    unpackTo(_o: KMLLineStyleT): void;
}
export declare class KMLLineStyleT implements flatbuffers.IGeneratedObject {
    COLOR: string | Uint8Array | null;
    COLOR_MODE: KMLColorMode;
    WIDTH: number;
    GX_OUTER_COLOR: string | Uint8Array | null;
    GX_OUTER_WIDTH: number;
    GX_PHYSICAL_WIDTH: number;
    GX_LABEL_VISIBILITY: boolean;
    constructor(COLOR?: string | Uint8Array | null, COLOR_MODE?: KMLColorMode, WIDTH?: number, GX_OUTER_COLOR?: string | Uint8Array | null, GX_OUTER_WIDTH?: number, GX_PHYSICAL_WIDTH?: number, GX_LABEL_VISIBILITY?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLineStyle.d.ts.map