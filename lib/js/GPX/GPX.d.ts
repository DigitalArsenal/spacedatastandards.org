import * as flatbuffers from 'flatbuffers';
import { GPXLink, GPXLinkT } from './GPXLink.js';
import { GPXRoute, GPXRouteT } from './GPXRoute.js';
import { GPXTrack, GPXTrackT } from './GPXTrack.js';
import { GPXWaypoint, GPXWaypointT } from './GPXWaypoint.js';
/**
 * GPX Document
 */
export declare class GPX implements flatbuffers.IUnpackableObject<GPXT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPX;
    static getRootAsGPX(bb: flatbuffers.ByteBuffer, obj?: GPX): GPX;
    static getSizePrefixedRootAsGPX(bb: flatbuffers.ByteBuffer, obj?: GPX): GPX;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * GPX schema version
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creator software/organization
     */
    CREATOR(): string | null;
    CREATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Person or organization who created the file
     */
    AUTHOR_NAME(): string | null;
    AUTHOR_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Author email
     */
    AUTHOR_EMAIL(): string | null;
    AUTHOR_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Author link
     */
    AUTHOR_LINK(obj?: GPXLink): GPXLink | null;
    /**
     * Copyright holder
     */
    COPYRIGHT_AUTHOR(): string | null;
    COPYRIGHT_AUTHOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Copyright year
     */
    COPYRIGHT_YEAR(): string | null;
    COPYRIGHT_YEAR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Copyright license URL
     */
    COPYRIGHT_LICENSE(): string | null;
    COPYRIGHT_LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Links to additional information
     */
    LINKS(index: number, obj?: GPXLink): GPXLink | null;
    linksLength(): number;
    /**
     * Creation timestamp (ISO 8601)
     */
    TIME(): string | null;
    TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Keywords
     */
    KEYWORDS(): string | null;
    KEYWORDS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum latitude of bounding box
     */
    BOUNDS_MIN_LAT(): number;
    /**
     * Minimum longitude of bounding box
     */
    BOUNDS_MIN_LON(): number;
    /**
     * Maximum latitude of bounding box
     */
    BOUNDS_MAX_LAT(): number;
    /**
     * Maximum longitude of bounding box
     */
    BOUNDS_MAX_LON(): number;
    /**
     * Waypoints
     */
    WAYPOINTS(index: number, obj?: GPXWaypoint): GPXWaypoint | null;
    waypointsLength(): number;
    /**
     * Routes
     */
    ROUTES(index: number, obj?: GPXRoute): GPXRoute | null;
    routesLength(): number;
    /**
     * Tracks
     */
    TRACKS(index: number, obj?: GPXTrack): GPXTrack | null;
    tracksLength(): number;
    static startGPX(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addCreator(builder: flatbuffers.Builder, CREATOROffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAuthorName(builder: flatbuffers.Builder, AUTHOR_NAMEOffset: flatbuffers.Offset): void;
    static addAuthorEmail(builder: flatbuffers.Builder, AUTHOR_EMAILOffset: flatbuffers.Offset): void;
    static addAuthorLink(builder: flatbuffers.Builder, AUTHOR_LINKOffset: flatbuffers.Offset): void;
    static addCopyrightAuthor(builder: flatbuffers.Builder, COPYRIGHT_AUTHOROffset: flatbuffers.Offset): void;
    static addCopyrightYear(builder: flatbuffers.Builder, COPYRIGHT_YEAROffset: flatbuffers.Offset): void;
    static addCopyrightLicense(builder: flatbuffers.Builder, COPYRIGHT_LICENSEOffset: flatbuffers.Offset): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTime(builder: flatbuffers.Builder, TIMEOffset: flatbuffers.Offset): void;
    static addKeywords(builder: flatbuffers.Builder, KEYWORDSOffset: flatbuffers.Offset): void;
    static addBoundsMinLat(builder: flatbuffers.Builder, BOUNDS_MIN_LAT: number): void;
    static addBoundsMinLon(builder: flatbuffers.Builder, BOUNDS_MIN_LON: number): void;
    static addBoundsMaxLat(builder: flatbuffers.Builder, BOUNDS_MAX_LAT: number): void;
    static addBoundsMaxLon(builder: flatbuffers.Builder, BOUNDS_MAX_LON: number): void;
    static addWaypoints(builder: flatbuffers.Builder, WAYPOINTSOffset: flatbuffers.Offset): void;
    static createWaypointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWaypointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRoutes(builder: flatbuffers.Builder, ROUTESOffset: flatbuffers.Offset): void;
    static createRoutesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRoutesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTracks(builder: flatbuffers.Builder, TRACKSOffset: flatbuffers.Offset): void;
    static createTracksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGPX(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGPXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGPXBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GPXT;
    unpackTo(_o: GPXT): void;
}
export declare class GPXT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    CREATOR: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    AUTHOR_NAME: string | Uint8Array | null;
    AUTHOR_EMAIL: string | Uint8Array | null;
    AUTHOR_LINK: GPXLinkT | null;
    COPYRIGHT_AUTHOR: string | Uint8Array | null;
    COPYRIGHT_YEAR: string | Uint8Array | null;
    COPYRIGHT_LICENSE: string | Uint8Array | null;
    LINKS: (GPXLinkT)[];
    TIME: string | Uint8Array | null;
    KEYWORDS: string | Uint8Array | null;
    BOUNDS_MIN_LAT: number;
    BOUNDS_MIN_LON: number;
    BOUNDS_MAX_LAT: number;
    BOUNDS_MAX_LON: number;
    WAYPOINTS: (GPXWaypointT)[];
    ROUTES: (GPXRouteT)[];
    TRACKS: (GPXTrackT)[];
    constructor(VERSION?: string | Uint8Array | null, CREATOR?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, AUTHOR_NAME?: string | Uint8Array | null, AUTHOR_EMAIL?: string | Uint8Array | null, AUTHOR_LINK?: GPXLinkT | null, COPYRIGHT_AUTHOR?: string | Uint8Array | null, COPYRIGHT_YEAR?: string | Uint8Array | null, COPYRIGHT_LICENSE?: string | Uint8Array | null, LINKS?: (GPXLinkT)[], TIME?: string | Uint8Array | null, KEYWORDS?: string | Uint8Array | null, BOUNDS_MIN_LAT?: number, BOUNDS_MIN_LON?: number, BOUNDS_MAX_LAT?: number, BOUNDS_MAX_LON?: number, WAYPOINTS?: (GPXWaypointT)[], ROUTES?: (GPXRouteT)[], TRACKS?: (GPXTrackT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPX.d.ts.map