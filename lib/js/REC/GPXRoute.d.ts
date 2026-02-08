import * as flatbuffers from 'flatbuffers';
import { GPXLink, GPXLinkT } from './GPXLink.js';
import { GPXWaypoint, GPXWaypointT } from './GPXWaypoint.js';
/**
 * Route (ordered list of waypoints for navigation)
 */
export declare class GPXRoute implements flatbuffers.IUnpackableObject<GPXRouteT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPXRoute;
    static getRootAsGPXRoute(bb: flatbuffers.ByteBuffer, obj?: GPXRoute): GPXRoute;
    static getSizePrefixedRootAsGPXRoute(bb: flatbuffers.ByteBuffer, obj?: GPXRoute): GPXRoute;
    /**
     * Route name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comment
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of data
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Links to additional information
     */
    LINKS(index: number, obj?: GPXLink): GPXLink | null;
    linksLength(): number;
    /**
     * Route number
     */
    NUMBER(): number;
    /**
     * Type/category
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Route points (ordered waypoints)
     */
    POINTS(index: number, obj?: GPXWaypoint): GPXWaypoint | null;
    pointsLength(): number;
    static startGPXRoute(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNumber(builder: flatbuffers.Builder, NUMBER: number): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGPXRoute(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGPXRoute(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, LINKSOffset: flatbuffers.Offset, NUMBER: number, TYPEOffset: flatbuffers.Offset, POINTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GPXRouteT;
    unpackTo(_o: GPXRouteT): void;
}
export declare class GPXRouteT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    LINKS: (GPXLinkT)[];
    NUMBER: number;
    TYPE: string | Uint8Array | null;
    POINTS: (GPXWaypointT)[];
    constructor(NAME?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, LINKS?: (GPXLinkT)[], NUMBER?: number, TYPE?: string | Uint8Array | null, POINTS?: (GPXWaypointT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPXRoute.d.ts.map