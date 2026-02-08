import * as flatbuffers from 'flatbuffers';
import { GPXFixType } from './GPXFixType.js';
import { GPXLink, GPXLinkT } from './GPXLink.js';
/**
 * A waypoint, point of interest, or named feature
 */
export declare class GPXWaypoint implements flatbuffers.IUnpackableObject<GPXWaypointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPXWaypoint;
    static getRootAsGPXWaypoint(bb: flatbuffers.ByteBuffer, obj?: GPXWaypoint): GPXWaypoint;
    static getSizePrefixedRootAsGPXWaypoint(bb: flatbuffers.ByteBuffer, obj?: GPXWaypoint): GPXWaypoint;
    /**
     * Latitude in decimal degrees (WGS84)
     */
    LATITUDE(): number;
    /**
     * Longitude in decimal degrees (WGS84)
     */
    LONGITUDE(): number;
    /**
     * Elevation in meters above WGS84 ellipsoid
     */
    ELEVATION(): number;
    /**
     * UTC timestamp (ISO 8601)
     */
    TIME(): string | null;
    TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Magnetic variation in degrees
     */
    MAGVAR(): number;
    /**
     * Height of geoid above WGS84 ellipsoid in meters
     */
    GEOID_HEIGHT(): number;
    /**
     * Waypoint name
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
     * Symbol name
     */
    SYMBOL(): string | null;
    SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type/category
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of GPS fix
     */
    FIX(): GPXFixType;
    /**
     * Number of satellites used for fix
     */
    SAT(): number;
    /**
     * Horizontal dilution of precision
     */
    HDOP(): number;
    /**
     * Vertical dilution of precision
     */
    VDOP(): number;
    /**
     * Position dilution of precision
     */
    PDOP(): number;
    /**
     * Age of DGPS data in seconds
     */
    AGE_OF_DGPS_DATA(): number;
    /**
     * DGPS station ID
     */
    DGPS_ID(): number;
    /**
     * Speed in meters per second
     */
    SPEED(): number;
    /**
     * Course/heading in degrees true
     */
    COURSE(): number;
    static startGPXWaypoint(builder: flatbuffers.Builder): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addTime(builder: flatbuffers.Builder, TIMEOffset: flatbuffers.Offset): void;
    static addMagvar(builder: flatbuffers.Builder, MAGVAR: number): void;
    static addGeoidHeight(builder: flatbuffers.Builder, GEOID_HEIGHT: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSymbol(builder: flatbuffers.Builder, SYMBOLOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addFix(builder: flatbuffers.Builder, FIX: GPXFixType): void;
    static addSat(builder: flatbuffers.Builder, SAT: number): void;
    static addHdop(builder: flatbuffers.Builder, HDOP: number): void;
    static addVdop(builder: flatbuffers.Builder, VDOP: number): void;
    static addPdop(builder: flatbuffers.Builder, PDOP: number): void;
    static addAgeOfDgpsData(builder: flatbuffers.Builder, AGE_OF_DGPS_DATA: number): void;
    static addDgpsId(builder: flatbuffers.Builder, DGPS_ID: number): void;
    static addSpeed(builder: flatbuffers.Builder, SPEED: number): void;
    static addCourse(builder: flatbuffers.Builder, COURSE: number): void;
    static endGPXWaypoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGPXWaypoint(builder: flatbuffers.Builder, LATITUDE: number, LONGITUDE: number, ELEVATION: number, TIMEOffset: flatbuffers.Offset, MAGVAR: number, GEOID_HEIGHT: number, NAMEOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, LINKSOffset: flatbuffers.Offset, SYMBOLOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, FIX: GPXFixType, SAT: number, HDOP: number, VDOP: number, PDOP: number, AGE_OF_DGPS_DATA: number, DGPS_ID: number, SPEED: number, COURSE: number): flatbuffers.Offset;
    unpack(): GPXWaypointT;
    unpackTo(_o: GPXWaypointT): void;
}
export declare class GPXWaypointT implements flatbuffers.IGeneratedObject {
    LATITUDE: number;
    LONGITUDE: number;
    ELEVATION: number;
    TIME: string | Uint8Array | null;
    MAGVAR: number;
    GEOID_HEIGHT: number;
    NAME: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    LINKS: (GPXLinkT)[];
    SYMBOL: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    FIX: GPXFixType;
    SAT: number;
    HDOP: number;
    VDOP: number;
    PDOP: number;
    AGE_OF_DGPS_DATA: number;
    DGPS_ID: number;
    SPEED: number;
    COURSE: number;
    constructor(LATITUDE?: number, LONGITUDE?: number, ELEVATION?: number, TIME?: string | Uint8Array | null, MAGVAR?: number, GEOID_HEIGHT?: number, NAME?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, LINKS?: (GPXLinkT)[], SYMBOL?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, FIX?: GPXFixType, SAT?: number, HDOP?: number, VDOP?: number, PDOP?: number, AGE_OF_DGPS_DATA?: number, DGPS_ID?: number, SPEED?: number, COURSE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPXWaypoint.d.ts.map