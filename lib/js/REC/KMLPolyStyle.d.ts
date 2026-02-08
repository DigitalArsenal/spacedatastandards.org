import * as flatbuffers from 'flatbuffers';
import { KMLColorMode } from './KMLColorMode.js';
/**
 * Polygon style
 */
export declare class KMLPolyStyle implements flatbuffers.IUnpackableObject<KMLPolyStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPolyStyle;
    static getRootAsKMLPolyStyle(bb: flatbuffers.ByteBuffer, obj?: KMLPolyStyle): KMLPolyStyle;
    static getSizePrefixedRootAsKMLPolyStyle(bb: flatbuffers.ByteBuffer, obj?: KMLPolyStyle): KMLPolyStyle;
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
     * Whether to fill
     */
    FILL(): boolean;
    /**
     * Whether to outline
     */
    OUTLINE(): boolean;
    static startKMLPolyStyle(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addColorMode(builder: flatbuffers.Builder, COLOR_MODE: KMLColorMode): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static endKMLPolyStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLPolyStyle(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, COLOR_MODE: KMLColorMode, FILL: boolean, OUTLINE: boolean): flatbuffers.Offset;
    unpack(): KMLPolyStyleT;
    unpackTo(_o: KMLPolyStyleT): void;
}
export declare class KMLPolyStyleT implements flatbuffers.IGeneratedObject {
    COLOR: string | Uint8Array | null;
    COLOR_MODE: KMLColorMode;
    FILL: boolean;
    OUTLINE: boolean;
    constructor(COLOR?: string | Uint8Array | null, COLOR_MODE?: KMLColorMode, FILL?: boolean, OUTLINE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPolyStyle.d.ts.map