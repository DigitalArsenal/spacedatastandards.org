import * as flatbuffers from 'flatbuffers';
import { KMLUnits } from './KMLUnits.js';
/**
 * Screen overlay
 */
export declare class KMLScreenOverlay implements flatbuffers.IUnpackableObject<KMLScreenOverlayT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLScreenOverlay;
    static getRootAsKMLScreenOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLScreenOverlay): KMLScreenOverlay;
    static getSizePrefixedRootAsKMLScreenOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLScreenOverlay): KMLScreenOverlay;
    /**
     * Name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Visibility
     */
    VISIBILITY(): boolean;
    /**
     * Icon/image URL
     */
    ICON_HREF(): string | null;
    ICON_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color
     */
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Draw order
     */
    DRAW_ORDER(): number;
    /**
     * Overlay X position
     */
    OVERLAY_XY_X(): number;
    /**
     * Overlay Y position
     */
    OVERLAY_XY_Y(): number;
    /**
     * Overlay X units
     */
    OVERLAY_XY_XUNITS(): KMLUnits;
    /**
     * Overlay Y units
     */
    OVERLAY_XY_YUNITS(): KMLUnits;
    /**
     * Screen X position
     */
    SCREEN_XY_X(): number;
    /**
     * Screen Y position
     */
    SCREEN_XY_Y(): number;
    /**
     * Screen X units
     */
    SCREEN_XY_XUNITS(): KMLUnits;
    /**
     * Screen Y units
     */
    SCREEN_XY_YUNITS(): KMLUnits;
    /**
     * Rotation X
     */
    ROTATION_XY_X(): number;
    /**
     * Rotation Y
     */
    ROTATION_XY_Y(): number;
    /**
     * Rotation X units
     */
    ROTATION_XY_XUNITS(): KMLUnits;
    /**
     * Rotation Y units
     */
    ROTATION_XY_YUNITS(): KMLUnits;
    /**
     * Size X
     */
    SIZE_X(): number;
    /**
     * Size Y
     */
    SIZE_Y(): number;
    /**
     * Size X units
     */
    SIZE_XUNITS(): KMLUnits;
    /**
     * Size Y units
     */
    SIZE_YUNITS(): KMLUnits;
    /**
     * Rotation in degrees
     */
    ROTATION(): number;
    static startKMLScreenOverlay(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addIconHref(builder: flatbuffers.Builder, ICON_HREFOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addDrawOrder(builder: flatbuffers.Builder, DRAW_ORDER: number): void;
    static addOverlayXyX(builder: flatbuffers.Builder, OVERLAY_XY_X: number): void;
    static addOverlayXyY(builder: flatbuffers.Builder, OVERLAY_XY_Y: number): void;
    static addOverlayXyXunits(builder: flatbuffers.Builder, OVERLAY_XY_XUNITS: KMLUnits): void;
    static addOverlayXyYunits(builder: flatbuffers.Builder, OVERLAY_XY_YUNITS: KMLUnits): void;
    static addScreenXyX(builder: flatbuffers.Builder, SCREEN_XY_X: number): void;
    static addScreenXyY(builder: flatbuffers.Builder, SCREEN_XY_Y: number): void;
    static addScreenXyXunits(builder: flatbuffers.Builder, SCREEN_XY_XUNITS: KMLUnits): void;
    static addScreenXyYunits(builder: flatbuffers.Builder, SCREEN_XY_YUNITS: KMLUnits): void;
    static addRotationXyX(builder: flatbuffers.Builder, ROTATION_XY_X: number): void;
    static addRotationXyY(builder: flatbuffers.Builder, ROTATION_XY_Y: number): void;
    static addRotationXyXunits(builder: flatbuffers.Builder, ROTATION_XY_XUNITS: KMLUnits): void;
    static addRotationXyYunits(builder: flatbuffers.Builder, ROTATION_XY_YUNITS: KMLUnits): void;
    static addSizeX(builder: flatbuffers.Builder, SIZE_X: number): void;
    static addSizeY(builder: flatbuffers.Builder, SIZE_Y: number): void;
    static addSizeXunits(builder: flatbuffers.Builder, SIZE_XUNITS: KMLUnits): void;
    static addSizeYunits(builder: flatbuffers.Builder, SIZE_YUNITS: KMLUnits): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static endKMLScreenOverlay(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLScreenOverlay(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, VISIBILITY: boolean, ICON_HREFOffset: flatbuffers.Offset, COLOROffset: flatbuffers.Offset, DRAW_ORDER: number, OVERLAY_XY_X: number, OVERLAY_XY_Y: number, OVERLAY_XY_XUNITS: KMLUnits, OVERLAY_XY_YUNITS: KMLUnits, SCREEN_XY_X: number, SCREEN_XY_Y: number, SCREEN_XY_XUNITS: KMLUnits, SCREEN_XY_YUNITS: KMLUnits, ROTATION_XY_X: number, ROTATION_XY_Y: number, ROTATION_XY_XUNITS: KMLUnits, ROTATION_XY_YUNITS: KMLUnits, SIZE_X: number, SIZE_Y: number, SIZE_XUNITS: KMLUnits, SIZE_YUNITS: KMLUnits, ROTATION: number): flatbuffers.Offset;
    unpack(): KMLScreenOverlayT;
    unpackTo(_o: KMLScreenOverlayT): void;
}
export declare class KMLScreenOverlayT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    ICON_HREF: string | Uint8Array | null;
    COLOR: string | Uint8Array | null;
    DRAW_ORDER: number;
    OVERLAY_XY_X: number;
    OVERLAY_XY_Y: number;
    OVERLAY_XY_XUNITS: KMLUnits;
    OVERLAY_XY_YUNITS: KMLUnits;
    SCREEN_XY_X: number;
    SCREEN_XY_Y: number;
    SCREEN_XY_XUNITS: KMLUnits;
    SCREEN_XY_YUNITS: KMLUnits;
    ROTATION_XY_X: number;
    ROTATION_XY_Y: number;
    ROTATION_XY_XUNITS: KMLUnits;
    ROTATION_XY_YUNITS: KMLUnits;
    SIZE_X: number;
    SIZE_Y: number;
    SIZE_XUNITS: KMLUnits;
    SIZE_YUNITS: KMLUnits;
    ROTATION: number;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, ICON_HREF?: string | Uint8Array | null, COLOR?: string | Uint8Array | null, DRAW_ORDER?: number, OVERLAY_XY_X?: number, OVERLAY_XY_Y?: number, OVERLAY_XY_XUNITS?: KMLUnits, OVERLAY_XY_YUNITS?: KMLUnits, SCREEN_XY_X?: number, SCREEN_XY_Y?: number, SCREEN_XY_XUNITS?: KMLUnits, SCREEN_XY_YUNITS?: KMLUnits, ROTATION_XY_X?: number, ROTATION_XY_Y?: number, ROTATION_XY_XUNITS?: KMLUnits, ROTATION_XY_YUNITS?: KMLUnits, SIZE_X?: number, SIZE_Y?: number, SIZE_XUNITS?: KMLUnits, SIZE_YUNITS?: KMLUnits, ROTATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLScreenOverlay.d.ts.map