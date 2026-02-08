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
    static startKMLLineStyle(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addColorMode(builder: flatbuffers.Builder, COLOR_MODE: KMLColorMode): void;
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static endKMLLineStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLineStyle(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, COLOR_MODE: KMLColorMode, WIDTH: number): flatbuffers.Offset;
    unpack(): KMLLineStyleT;
    unpackTo(_o: KMLLineStyleT): void;
}
export declare class KMLLineStyleT implements flatbuffers.IGeneratedObject {
    COLOR: string | Uint8Array | null;
    COLOR_MODE: KMLColorMode;
    WIDTH: number;
    constructor(COLOR?: string | Uint8Array | null, COLOR_MODE?: KMLColorMode, WIDTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLineStyle.d.ts.map