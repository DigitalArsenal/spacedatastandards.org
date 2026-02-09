import * as flatbuffers from 'flatbuffers';
import { KMLDisplayMode } from './KMLDisplayMode.js';
/**
 * Balloon style
 */
export declare class KMLBalloonStyle implements flatbuffers.IUnpackableObject<KMLBalloonStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLBalloonStyle;
    static getRootAsKMLBalloonStyle(bb: flatbuffers.ByteBuffer, obj?: KMLBalloonStyle): KMLBalloonStyle;
    static getSizePrefixedRootAsKMLBalloonStyle(bb: flatbuffers.ByteBuffer, obj?: KMLBalloonStyle): KMLBalloonStyle;
    /**
     * Background color in aabbggrr hex format
     */
    BG_COLOR(): string | null;
    BG_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Text color in aabbggrr hex format
     */
    TEXT_COLOR(): string | null;
    TEXT_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Balloon text template (supports $[name], $[description])
     */
    TEXT(): string | null;
    TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display mode
     */
    DISPLAY_MODE(): KMLDisplayMode;
    static startKMLBalloonStyle(builder: flatbuffers.Builder): void;
    static addBgColor(builder: flatbuffers.Builder, BG_COLOROffset: flatbuffers.Offset): void;
    static addTextColor(builder: flatbuffers.Builder, TEXT_COLOROffset: flatbuffers.Offset): void;
    static addText(builder: flatbuffers.Builder, TEXTOffset: flatbuffers.Offset): void;
    static addDisplayMode(builder: flatbuffers.Builder, DISPLAY_MODE: KMLDisplayMode): void;
    static endKMLBalloonStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLBalloonStyle(builder: flatbuffers.Builder, BG_COLOROffset: flatbuffers.Offset, TEXT_COLOROffset: flatbuffers.Offset, TEXTOffset: flatbuffers.Offset, DISPLAY_MODE: KMLDisplayMode): flatbuffers.Offset;
    unpack(): KMLBalloonStyleT;
    unpackTo(_o: KMLBalloonStyleT): void;
}
export declare class KMLBalloonStyleT implements flatbuffers.IGeneratedObject {
    BG_COLOR: string | Uint8Array | null;
    TEXT_COLOR: string | Uint8Array | null;
    TEXT: string | Uint8Array | null;
    DISPLAY_MODE: KMLDisplayMode;
    constructor(BG_COLOR?: string | Uint8Array | null, TEXT_COLOR?: string | Uint8Array | null, TEXT?: string | Uint8Array | null, DISPLAY_MODE?: KMLDisplayMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLBalloonStyle.d.ts.map