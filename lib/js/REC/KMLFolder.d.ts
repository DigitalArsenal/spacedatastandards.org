import * as flatbuffers from 'flatbuffers';
import { KMLCamera, KMLCameraT } from './KMLCamera.js';
import { KMLData, KMLDataT } from './KMLData.js';
import { KMLGroundOverlay, KMLGroundOverlayT } from './KMLGroundOverlay.js';
import { KMLLookAt, KMLLookAtT } from './KMLLookAt.js';
import { KMLNetworkLink, KMLNetworkLinkT } from './KMLNetworkLink.js';
import { KMLPhotoOverlay, KMLPhotoOverlayT } from './KMLPhotoOverlay.js';
import { KMLPlacemark, KMLPlacemarkT } from './KMLPlacemark.js';
import { KMLRegion, KMLRegionT } from './KMLRegion.js';
import { KMLScreenOverlay, KMLScreenOverlayT } from './KMLScreenOverlay.js';
import { KMLStyle, KMLStyleT } from './KMLStyle.js';
import { KMLStyleMap, KMLStyleMapT } from './KMLStyleMap.js';
import { KMLTimeSpan, KMLTimeSpanT } from './KMLTimeSpan.js';
import { KMLTimeStamp, KMLTimeStampT } from './KMLTimeStamp.js';
import { KMLTour, KMLTourT } from './KMLTour.js';
/**
 * Folder container
 */
export declare class KMLFolder implements flatbuffers.IUnpackableObject<KMLFolderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLFolder;
    static getRootAsKMLFolder(bb: flatbuffers.ByteBuffer, obj?: KMLFolder): KMLFolder;
    static getSizePrefixedRootAsKMLFolder(bb: flatbuffers.ByteBuffer, obj?: KMLFolder): KMLFolder;
    /**
     * Folder name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Visibility flag
     */
    VISIBILITY(): boolean;
    /**
     * Whether folder is open in tree view
     */
    OPEN(): boolean;
    /**
     * Placemarks in this folder
     */
    PLACEMARKS(index: number, obj?: KMLPlacemark): KMLPlacemark | null;
    placemarksLength(): number;
    /**
     * Sub-folders
     */
    FOLDERS(index: number, obj?: KMLFolder): KMLFolder | null;
    foldersLength(): number;
    /**
     * Network links
     */
    NETWORK_LINKS(index: number, obj?: KMLNetworkLink): KMLNetworkLink | null;
    networkLinksLength(): number;
    /**
     * Ground overlays
     */
    GROUND_OVERLAYS(index: number, obj?: KMLGroundOverlay): KMLGroundOverlay | null;
    groundOverlaysLength(): number;
    /**
     * Shared styles
     */
    STYLES(index: number, obj?: KMLStyle): KMLStyle | null;
    stylesLength(): number;
    /**
     * Style maps
     */
    STYLE_MAPS(index: number, obj?: KMLStyleMap): KMLStyleMap | null;
    styleMapsLength(): number;
    /**
     * Screen overlays
     */
    SCREEN_OVERLAYS(index: number, obj?: KMLScreenOverlay): KMLScreenOverlay | null;
    screenOverlaysLength(): number;
    /**
     * Photo overlays
     */
    PHOTO_OVERLAYS(index: number, obj?: KMLPhotoOverlay): KMLPhotoOverlay | null;
    photoOverlaysLength(): number;
    /**
     * Tours
     */
    TOURS(index: number, obj?: KMLTour): KMLTour | null;
    toursLength(): number;
    /**
     * Style URL reference
     */
    STYLE_URL(): string | null;
    STYLE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Region
     */
    REGION(obj?: KMLRegion): KMLRegion | null;
    /**
     * Extended data
     */
    EXTENDED_DATA(index: number, obj?: KMLData): KMLData | null;
    extendedDataLength(): number;
    /**
     * LookAt viewpoint
     */
    LOOK_AT(obj?: KMLLookAt): KMLLookAt | null;
    /**
     * Camera viewpoint
     */
    CAMERA(obj?: KMLCamera): KMLCamera | null;
    /**
     * TimeSpan
     */
    TIME_SPAN(obj?: KMLTimeSpan): KMLTimeSpan | null;
    /**
     * TimeStamp
     */
    TIME_STAMP(obj?: KMLTimeStamp): KMLTimeStamp | null;
    static startKMLFolder(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addOpen(builder: flatbuffers.Builder, OPEN: boolean): void;
    static addPlacemarks(builder: flatbuffers.Builder, PLACEMARKSOffset: flatbuffers.Offset): void;
    static createPlacemarksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlacemarksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFolders(builder: flatbuffers.Builder, FOLDERSOffset: flatbuffers.Offset): void;
    static createFoldersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFoldersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNetworkLinks(builder: flatbuffers.Builder, NETWORK_LINKSOffset: flatbuffers.Offset): void;
    static createNetworkLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNetworkLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroundOverlays(builder: flatbuffers.Builder, GROUND_OVERLAYSOffset: flatbuffers.Offset): void;
    static createGroundOverlaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroundOverlaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStyles(builder: flatbuffers.Builder, STYLESOffset: flatbuffers.Offset): void;
    static createStylesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStylesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStyleMaps(builder: flatbuffers.Builder, STYLE_MAPSOffset: flatbuffers.Offset): void;
    static createStyleMapsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStyleMapsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScreenOverlays(builder: flatbuffers.Builder, SCREEN_OVERLAYSOffset: flatbuffers.Offset): void;
    static createScreenOverlaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScreenOverlaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhotoOverlays(builder: flatbuffers.Builder, PHOTO_OVERLAYSOffset: flatbuffers.Offset): void;
    static createPhotoOverlaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhotoOverlaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTours(builder: flatbuffers.Builder, TOURSOffset: flatbuffers.Offset): void;
    static createToursVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startToursVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStyleUrl(builder: flatbuffers.Builder, STYLE_URLOffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static addExtendedData(builder: flatbuffers.Builder, EXTENDED_DATAOffset: flatbuffers.Offset): void;
    static createExtendedDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExtendedDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLookAt(builder: flatbuffers.Builder, LOOK_ATOffset: flatbuffers.Offset): void;
    static addCamera(builder: flatbuffers.Builder, CAMERAOffset: flatbuffers.Offset): void;
    static addTimeSpan(builder: flatbuffers.Builder, TIME_SPANOffset: flatbuffers.Offset): void;
    static addTimeStamp(builder: flatbuffers.Builder, TIME_STAMPOffset: flatbuffers.Offset): void;
    static endKMLFolder(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLFolderT;
    unpackTo(_o: KMLFolderT): void;
}
export declare class KMLFolderT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    OPEN: boolean;
    PLACEMARKS: (KMLPlacemarkT)[];
    FOLDERS: (KMLFolderT)[];
    NETWORK_LINKS: (KMLNetworkLinkT)[];
    GROUND_OVERLAYS: (KMLGroundOverlayT)[];
    STYLES: (KMLStyleT)[];
    STYLE_MAPS: (KMLStyleMapT)[];
    SCREEN_OVERLAYS: (KMLScreenOverlayT)[];
    PHOTO_OVERLAYS: (KMLPhotoOverlayT)[];
    TOURS: (KMLTourT)[];
    STYLE_URL: string | Uint8Array | null;
    REGION: KMLRegionT | null;
    EXTENDED_DATA: (KMLDataT)[];
    LOOK_AT: KMLLookAtT | null;
    CAMERA: KMLCameraT | null;
    TIME_SPAN: KMLTimeSpanT | null;
    TIME_STAMP: KMLTimeStampT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, OPEN?: boolean, PLACEMARKS?: (KMLPlacemarkT)[], FOLDERS?: (KMLFolderT)[], NETWORK_LINKS?: (KMLNetworkLinkT)[], GROUND_OVERLAYS?: (KMLGroundOverlayT)[], STYLES?: (KMLStyleT)[], STYLE_MAPS?: (KMLStyleMapT)[], SCREEN_OVERLAYS?: (KMLScreenOverlayT)[], PHOTO_OVERLAYS?: (KMLPhotoOverlayT)[], TOURS?: (KMLTourT)[], STYLE_URL?: string | Uint8Array | null, REGION?: KMLRegionT | null, EXTENDED_DATA?: (KMLDataT)[], LOOK_AT?: KMLLookAtT | null, CAMERA?: KMLCameraT | null, TIME_SPAN?: KMLTimeSpanT | null, TIME_STAMP?: KMLTimeStampT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLFolder.d.ts.map