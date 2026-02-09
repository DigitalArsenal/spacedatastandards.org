import * as flatbuffers from 'flatbuffers';
import { KMLImagePyramid, KMLImagePyramidT } from './KMLImagePyramid.js';
import { KMLPoint, KMLPointT } from './KMLPoint.js';
import { KMLShape } from './KMLShape.js';
import { KMLViewVolume, KMLViewVolumeT } from './KMLViewVolume.js';
/**
 * Photo overlay
 */
export declare class KMLPhotoOverlay implements flatbuffers.IUnpackableObject<KMLPhotoOverlayT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPhotoOverlay;
    static getRootAsKMLPhotoOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLPhotoOverlay): KMLPhotoOverlay;
    static getSizePrefixedRootAsKMLPhotoOverlay(bb: flatbuffers.ByteBuffer, obj?: KMLPhotoOverlay): KMLPhotoOverlay;
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
     * Rotation
     */
    ROTATION(): number;
    /**
     * View volume
     */
    VIEW_VOLUME(obj?: KMLViewVolume): KMLViewVolume | null;
    /**
     * Image pyramid
     */
    IMAGE_PYRAMID(obj?: KMLImagePyramid): KMLImagePyramid | null;
    /**
     * Point for position
     */
    POINT(obj?: KMLPoint): KMLPoint | null;
    /**
     * Shape
     */
    SHAPE(): KMLShape;
    static startKMLPhotoOverlay(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addIconHref(builder: flatbuffers.Builder, ICON_HREFOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addDrawOrder(builder: flatbuffers.Builder, DRAW_ORDER: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addViewVolume(builder: flatbuffers.Builder, VIEW_VOLUMEOffset: flatbuffers.Offset): void;
    static addImagePyramid(builder: flatbuffers.Builder, IMAGE_PYRAMIDOffset: flatbuffers.Offset): void;
    static addPoint(builder: flatbuffers.Builder, POINTOffset: flatbuffers.Offset): void;
    static addShape(builder: flatbuffers.Builder, SHAPE: KMLShape): void;
    static endKMLPhotoOverlay(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLPhotoOverlayT;
    unpackTo(_o: KMLPhotoOverlayT): void;
}
export declare class KMLPhotoOverlayT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    ICON_HREF: string | Uint8Array | null;
    COLOR: string | Uint8Array | null;
    DRAW_ORDER: number;
    ROTATION: number;
    VIEW_VOLUME: KMLViewVolumeT | null;
    IMAGE_PYRAMID: KMLImagePyramidT | null;
    POINT: KMLPointT | null;
    SHAPE: KMLShape;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, ICON_HREF?: string | Uint8Array | null, COLOR?: string | Uint8Array | null, DRAW_ORDER?: number, ROTATION?: number, VIEW_VOLUME?: KMLViewVolumeT | null, IMAGE_PYRAMID?: KMLImagePyramidT | null, POINT?: KMLPointT | null, SHAPE?: KMLShape);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPhotoOverlay.d.ts.map