import * as flatbuffers from 'flatbuffers';
import { KMLColorMode } from './KMLColorMode.js';
/**
 * Label style
 */
export declare class KMLLabelStyle implements flatbuffers.IUnpackableObject<KMLLabelStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLabelStyle;
    static getRootAsKMLLabelStyle(bb: flatbuffers.ByteBuffer, obj?: KMLLabelStyle): KMLLabelStyle;
    static getSizePrefixedRootAsKMLLabelStyle(bb: flatbuffers.ByteBuffer, obj?: KMLLabelStyle): KMLLabelStyle;
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
     * Scale factor
     */
    SCALE(): number;
    static startKMLLabelStyle(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addColorMode(builder: flatbuffers.Builder, COLOR_MODE: KMLColorMode): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static endKMLLabelStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLabelStyle(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, COLOR_MODE: KMLColorMode, SCALE: number): flatbuffers.Offset;
    unpack(): KMLLabelStyleT;
    unpackTo(_o: KMLLabelStyleT): void;
}
export declare class KMLLabelStyleT implements flatbuffers.IGeneratedObject {
    COLOR: string | Uint8Array | null;
    COLOR_MODE: KMLColorMode;
    SCALE: number;
    constructor(COLOR?: string | Uint8Array | null, COLOR_MODE?: KMLColorMode, SCALE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLabelStyle.d.ts.map