import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
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
    static startKMLGroundOverlay(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addIconHref(builder: flatbuffers.Builder, ICON_HREFOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addNorth(builder: flatbuffers.Builder, NORTH: number): void;
    static addSouth(builder: flatbuffers.Builder, SOUTH: number): void;
    static addEast(builder: flatbuffers.Builder, EAST: number): void;
    static addWest(builder: flatbuffers.Builder, WEST: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static endKMLGroundOverlay(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLGroundOverlay(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, VISIBILITY: boolean, ICON_HREFOffset: flatbuffers.Offset, COLOROffset: flatbuffers.Offset, NORTH: number, SOUTH: number, EAST: number, WEST: number, ROTATION: number, ALTITUDE: number, ALTITUDE_MODE: KMLAltitudeMode): flatbuffers.Offset;
    unpack(): KMLGroundOverlayT;
    unpackTo(_o: KMLGroundOverlayT): void;
}
export declare class KMLGroundOverlayT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    ICON_HREF: string | Uint8Array | null;
    COLOR: string | Uint8Array | null;
    NORTH: number;
    SOUTH: number;
    EAST: number;
    WEST: number;
    ROTATION: number;
    ALTITUDE: number;
    ALTITUDE_MODE: KMLAltitudeMode;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, ICON_HREF?: string | Uint8Array | null, COLOR?: string | Uint8Array | null, NORTH?: number, SOUTH?: number, EAST?: number, WEST?: number, ROTATION?: number, ALTITUDE?: number, ALTITUDE_MODE?: KMLAltitudeMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLGroundOverlay.d.ts.map