import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLLatLonQuad, KMLLatLonQuadT } from './KMLLatLonQuad.js';
import { KMLRegion, KMLRegionT } from './KMLRegion.js';
/**
 * Ground overlay
 */
export declare class KMLGroundOverlay implements flatbuffers.IUnpackableObject<KMLGroundOverlayT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLGroundOverlay;
    static getRootAsKMLGroundOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLGroundOverlay): KMLGroundOverlay;
    static getSizePrefixedRootAsKMLGroundOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLGroundOverlay): KMLGroundOverlay;
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
     * Whether open in tree view
     */
    OPEN(): boolean;
    /**
     * Icon/image URL
     */
    ICON_HREF(): string | null;
    ICON_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color in aabbggrr hex format
     */
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * North latitude of bounding box
     */
    NORTH(): number;
    /**
     * South latitude of bounding box
     */
    SOUTH(): number;
    /**
     * East longitude of bounding box
     */
    EAST(): number;
    /**
     * West longitude of bounding box
     */
    WEST(): number;
    /**
     * Rotation in degrees
     */
    ROTATION(): number;
    /**
     * Altitude in meters
     */
    ALTITUDE(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Draw order
     */
    DRAW_ORDER(): number;
    /**
     * LatLonQuad (non-rectangular overlay)
     */
    LAT_LON_QUAD(obj?: KMLLatLonQuad): KMLLatLonQuad | null;
    /**
     * Style URL reference
     */
    STYLE_URL(): string | null;
    STYLE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region
     */
    REGION(obj?: KMLRegion): KMLRegion | null;
    static startKMLGroundOverlay(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addOpen(builder: flatbuffers.Builder, OPEN: boolean): void;
    static addIconHref(builder: flatbuffers.Builder, ICON_HREFOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addNorth(builder: flatbuffers.Builder, NORTH: number): void;
    static addSouth(builder: flatbuffers.Builder, SOUTH: number): void;
    static addEast(builder: flatbuffers.Builder, EAST: number): void;
    static addWest(builder: flatbuffers.Builder, WEST: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addDrawOrder(builder: flatbuffers.Builder, DRAW_ORDER: number): void;
    static addLatLonQuad(builder: flatbuffers.Builder, LAT_LON_QUADOffset: flatbuffers.Offset): void;
    static addStyleUrl(builder: flatbuffers.Builder, STYLE_URLOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static endKMLGroundOverlay(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLGroundOverlayT;
    unpackTo(_o: KMLGroundOverlayT): void;
}
export declare class KMLGroundOverlayT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    OPEN: boolean;
    ICON_HREF: string | Uint8Array | null;
    COLOR: string | Uint8Array | null;
    NORTH: number;
    SOUTH: number;
    EAST: number;
    WEST: number;
    ROTATION: number;
    ALTITUDE: number;
    ALTITUDE_MODE: KMLAltitudeMode;
    DRAW_ORDER: number;
    LAT_LON_QUAD: KMLLatLonQuadT | null;
    STYLE_URL: string | Uint8Array | null;
    REGION: KMLRegionT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, OPEN?: boolean, ICON_HREF?: string | Uint8Array | null, COLOR?: string | Uint8Array | null, NORTH?: number, SOUTH?: number, EAST?: number, WEST?: number, ROTATION?: number, ALTITUDE?: number, ALTITUDE_MODE?: KMLAltitudeMode, DRAW_ORDER?: number, LAT_LON_QUAD?: KMLLatLonQuadT | null, STYLE_URL?: string | Uint8Array | null, REGION?: KMLRegionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLGroundOverlay.d.ts.map