import * as flatbuffers from 'flatbuffers';
import { KMLFolder, KMLFolderT } from './KMLFolder.js';
import { KMLGroundOverlay, KMLGroundOverlayT } from './KMLGroundOverlay.js';
import { KMLNetworkLink, KMLNetworkLinkT } from './KMLNetworkLink.js';
import { KMLNetworkLinkControl, KMLNetworkLinkControlT } from './KMLNetworkLinkControl.js';
import { KMLPhotoOverlay, KMLPhotoOverlayT } from './KMLPhotoOverlay.js';
import { KMLPlacemark, KMLPlacemarkT } from './KMLPlacemark.js';
import { KMLSchema, KMLSchemaT } from './KMLSchema.js';
import { KMLScreenOverlay, KMLScreenOverlayT } from './KMLScreenOverlay.js';
import { KMLStyle, KMLStyleT } from './KMLStyle.js';
import { KMLStyleMap, KMLStyleMapT } from './KMLStyleMap.js';
import { KMLTour, KMLTourT } from './KMLTour.js';
/**
 * KML Document
 */
export declare class KML implements flatbuffers.IUnpackableObject<KMLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KML;
    static getRootAsKML(bb: flatbuffers.ByteBuffer, obj?: KML): KML;
    static getSizePrefixedRootAsKML(bb: flatbuffers.ByteBuffer, obj?: KML): KML;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Document name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Document description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether document is visible
     */
    VISIBILITY(): boolean;
    /**
     * Whether document is open in tree view
     */
    OPEN(): boolean;
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
     * Top-level placemarks
     */
    PLACEMARKS(index: number, obj?: KMLPlacemark): KMLPlacemark | null;
    placemarksLength(): number;
    /**
     * Top-level folders
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
     * Schemas
     */
    SCHEMAS(index: number, obj?: KMLSchema): KMLSchema | null;
    schemasLength(): number;
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
     * NetworkLinkControl
     */
    NETWORK_LINK_CONTROL(obj?: KMLNetworkLinkControl): KMLNetworkLinkControl | null;
    static startKML(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addOpen(builder: flatbuffers.Builder, OPEN: boolean): void;
    static addStyles(builder: flatbuffers.Builder, STYLESOffset: flatbuffers.Offset): void;
    static createStylesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStylesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStyleMaps(builder: flatbuffers.Builder, STYLE_MAPSOffset: flatbuffers.Offset): void;
    static createStyleMapsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStyleMapsVector(builder: flatbuffers.Builder, numElems: number): void;
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
    static addSchemas(builder: flatbuffers.Builder, SCHEMASOffset: flatbuffers.Offset): void;
    static createSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScreenOverlays(builder: flatbuffers.Builder, SCREEN_OVERLAYSOffset: flatbuffers.Offset): void;
    static createScreenOverlaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScreenOverlaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhotoOverlays(builder: flatbuffers.Builder, PHOTO_OVERLAYSOffset: flatbuffers.Offset): void;
    static createPhotoOverlaysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhotoOverlaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTours(builder: flatbuffers.Builder, TOURSOffset: flatbuffers.Offset): void;
    static createToursVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startToursVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNetworkLinkControl(builder: flatbuffers.Builder, NETWORK_LINK_CONTROLOffset: flatbuffers.Offset): void;
    static endKML(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishKMLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedKMLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): KMLT;
    unpackTo(_o: KMLT): void;
}
export declare class KMLT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    OPEN: boolean;
    STYLES: (KMLStyleT)[];
    STYLE_MAPS: (KMLStyleMapT)[];
    PLACEMARKS: (KMLPlacemarkT)[];
    FOLDERS: (KMLFolderT)[];
    NETWORK_LINKS: (KMLNetworkLinkT)[];
    GROUND_OVERLAYS: (KMLGroundOverlayT)[];
    SCHEMAS: (KMLSchemaT)[];
    SCREEN_OVERLAYS: (KMLScreenOverlayT)[];
    PHOTO_OVERLAYS: (KMLPhotoOverlayT)[];
    TOURS: (KMLTourT)[];
    NETWORK_LINK_CONTROL: KMLNetworkLinkControlT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, OPEN?: boolean, STYLES?: (KMLStyleT)[], STYLE_MAPS?: (KMLStyleMapT)[], PLACEMARKS?: (KMLPlacemarkT)[], FOLDERS?: (KMLFolderT)[], NETWORK_LINKS?: (KMLNetworkLinkT)[], GROUND_OVERLAYS?: (KMLGroundOverlayT)[], SCHEMAS?: (KMLSchemaT)[], SCREEN_OVERLAYS?: (KMLScreenOverlayT)[], PHOTO_OVERLAYS?: (KMLPhotoOverlayT)[], TOURS?: (KMLTourT)[], NETWORK_LINK_CONTROL?: KMLNetworkLinkControlT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KML.d.ts.map