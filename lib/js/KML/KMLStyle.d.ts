import * as flatbuffers from 'flatbuffers';
import { KMLBalloonStyle, KMLBalloonStyleT } from './KMLBalloonStyle.js';
import { KMLIconStyle, KMLIconStyleT } from './KMLIconStyle.js';
import { KMLLabelStyle, KMLLabelStyleT } from './KMLLabelStyle.js';
import { KMLLineStyle, KMLLineStyleT } from './KMLLineStyle.js';
import { KMLPolyStyle, KMLPolyStyleT } from './KMLPolyStyle.js';
/**
 * Style definition
 */
export declare class KMLStyle implements flatbuffers.IUnpackableObject<KMLStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLStyle;
    static getRootAsKMLStyle(bb: flatbuffers.ByteBuffer, obj?: KMLStyle): KMLStyle;
    static getSizePrefixedRootAsKMLStyle(bb: flatbuffers.ByteBuffer, obj?: KMLStyle): KMLStyle;
    /**
     * Style identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Icon style
     */
    ICON_STYLE(obj?: KMLIconStyle): KMLIconStyle | null;
    /**
     * Label style
     */
    LABEL_STYLE(obj?: KMLLabelStyle): KMLLabelStyle | null;
    /**
     * Line style
     */
    LINE_STYLE(obj?: KMLLineStyle): KMLLineStyle | null;
    /**
     * Polygon style
     */
    POLY_STYLE(obj?: KMLPolyStyle): KMLPolyStyle | null;
    /**
     * Balloon style
     */
    BALLOON_STYLE(obj?: KMLBalloonStyle): KMLBalloonStyle | null;
    static startKMLStyle(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIconStyle(builder: flatbuffers.Builder, ICON_STYLEOffset: flatbuffers.Offset): void;
    static addLabelStyle(builder: flatbuffers.Builder, LABEL_STYLEOffset: flatbuffers.Offset): void;
    static addLineStyle(builder: flatbuffers.Builder, LINE_STYLEOffset: flatbuffers.Offset): void;
    static addPolyStyle(builder: flatbuffers.Builder, POLY_STYLEOffset: flatbuffers.Offset): void;
    static addBalloonStyle(builder: flatbuffers.Builder, BALLOON_STYLEOffset: flatbuffers.Offset): void;
    static endKMLStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLStyleT;
    unpackTo(_o: KMLStyleT): void;
}
export declare class KMLStyleT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ICON_STYLE: KMLIconStyleT | null;
    LABEL_STYLE: KMLLabelStyleT | null;
    LINE_STYLE: KMLLineStyleT | null;
    POLY_STYLE: KMLPolyStyleT | null;
    BALLOON_STYLE: KMLBalloonStyleT | null;
    constructor(ID?: string | Uint8Array | null, ICON_STYLE?: KMLIconStyleT | null, LABEL_STYLE?: KMLLabelStyleT | null, LINE_STYLE?: KMLLineStyleT | null, POLY_STYLE?: KMLPolyStyleT | null, BALLOON_STYLE?: KMLBalloonStyleT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLStyle.d.ts.map