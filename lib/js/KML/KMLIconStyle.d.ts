import * as flatbuffers from 'flatbuffers';
import { KMLColorMode } from './KMLColorMode.js';
import { KMLUnits } from './KMLUnits.js';
/**
 * Icon style
 */
export declare class KMLIconStyle implements flatbuffers.IUnpackableObject<KMLIconStyleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLIconStyle;
    static getRootAsKMLIconStyle(bb: flatbuffers.ByteBuffer, obj?: KMLIconStyle): KMLIconStyle;
    static getSizePrefixedRootAsKMLIconStyle(bb: flatbuffers.ByteBuffer, obj?: KMLIconStyle): KMLIconStyle;
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
    /**
     * Heading in degrees
     */
    HEADING(): number;
    /**
     * Icon href (URL)
     */
    ICON_HREF(): string | null;
    ICON_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Hot spot X value
     */
    HOTSPOT_X(): number;
    /**
     * Hot spot Y value
     */
    HOTSPOT_Y(): number;
    /**
     * Hot spot X units
     */
    HOTSPOT_X_UNITS(): KMLUnits;
    /**
     * Hot spot Y units
     */
    HOTSPOT_Y_UNITS(): KMLUnits;
    static startKMLIconStyle(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addColorMode(builder: flatbuffers.Builder, COLOR_MODE: KMLColorMode): void;
    static addScale(builder: flatbuffers.Builder, SCALE: number): void;
    static addHeading(builder: flatbuffers.Builder, HEADING: number): void;
    static addIconHref(builder: flatbuffers.Builder, ICON_HREFOffset: flatbuffers.Offset): void;
    static addHotspotX(builder: flatbuffers.Builder, HOTSPOT_X: number): void;
    static addHotspotY(builder: flatbuffers.Builder, HOTSPOT_Y: number): void;
    static addHotspotXUnits(builder: flatbuffers.Builder, HOTSPOT_X_UNITS: KMLUnits): void;
    static addHotspotYUnits(builder: flatbuffers.Builder, HOTSPOT_Y_UNITS: KMLUnits): void;
    static endKMLIconStyle(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLIconStyle(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, COLOR_MODE: KMLColorMode, SCALE: number, HEADING: number, ICON_HREFOffset: flatbuffers.Offset, HOTSPOT_X: number, HOTSPOT_Y: number, HOTSPOT_X_UNITS: KMLUnits, HOTSPOT_Y_UNITS: KMLUnits): flatbuffers.Offset;
    unpack(): KMLIconStyleT;
    unpackTo(_o: KMLIconStyleT): void;
}
export declare class KMLIconStyleT implements flatbuffers.IGeneratedObject {
    COLOR: string | Uint8Array | null;
    COLOR_MODE: KMLColorMode;
    SCALE: number;
    HEADING: number;
    ICON_HREF: string | Uint8Array | null;
    HOTSPOT_X: number;
    HOTSPOT_Y: number;
    HOTSPOT_X_UNITS: KMLUnits;
    HOTSPOT_Y_UNITS: KMLUnits;
    constructor(COLOR?: string | Uint8Array | null, COLOR_MODE?: KMLColorMode, SCALE?: number, HEADING?: number, ICON_HREF?: string | Uint8Array | null, HOTSPOT_X?: number, HOTSPOT_Y?: number, HOTSPOT_X_UNITS?: KMLUnits, HOTSPOT_Y_UNITS?: KMLUnits);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLIconStyle.d.ts.map