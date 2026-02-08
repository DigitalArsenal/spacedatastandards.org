import * as flatbuffers from 'flatbuffers';
import { KMLGroundOverlay, KMLGroundOverlayT } from './KMLGroundOverlay.js';
import { KMLNetworkLink, KMLNetworkLinkT } from './KMLNetworkLink.js';
import { KMLPlacemark, KMLPlacemarkT } from './KMLPlacemark.js';
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
    static endKMLFolder(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLFolder(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, VISIBILITY: boolean, OPEN: boolean, PLACEMARKSOffset: flatbuffers.Offset, FOLDERSOffset: flatbuffers.Offset, NETWORK_LINKSOffset: flatbuffers.Offset, GROUND_OVERLAYSOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, OPEN?: boolean, PLACEMARKS?: (KMLPlacemarkT)[], FOLDERS?: (KMLFolderT)[], NETWORK_LINKS?: (KMLNetworkLinkT)[], GROUND_OVERLAYS?: (KMLGroundOverlayT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLFolder.d.ts.map