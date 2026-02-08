import * as flatbuffers from 'flatbuffers';
import { GPXLink, GPXLinkT } from './GPXLink.js';
import { GPXTrackSegment, GPXTrackSegmentT } from './GPXTrackSegment.js';
/**
 * Track (ordered list of track segments)
 */
export declare class GPXTrack implements flatbuffers.IUnpackableObject<GPXTrackT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPXTrack;
    static getRootAsGPXTrack(bb: flatbuffers.ByteBuffer, obj?: GPXTrack): GPXTrack;
    static getSizePrefixedRootAsGPXTrack(bb: flatbuffers.ByteBuffer, obj?: GPXTrack): GPXTrack;
    /**
     * Track name
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
     * Track number
     */
    NUMBER(): number;
    /**
     * Type/category
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track segments
     */
    SEGMENTS(index: number, obj?: GPXTrackSegment): GPXTrackSegment | null;
    segmentsLength(): number;
    static startGPXTrack(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static createLinksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNumber(builder: flatbuffers.Builder, NUMBER: number): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGPXTrack(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGPXTrack(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, LINKSOffset: flatbuffers.Offset, NUMBER: number, TYPEOffset: flatbuffers.Offset, SEGMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GPXTrackT;
    unpackTo(_o: GPXTrackT): void;
}
export declare class GPXTrackT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    LINKS: (GPXLinkT)[];
    NUMBER: number;
    TYPE: string | Uint8Array | null;
    SEGMENTS: (GPXTrackSegmentT)[];
    constructor(NAME?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, LINKS?: (GPXLinkT)[], NUMBER?: number, TYPE?: string | Uint8Array | null, SEGMENTS?: (GPXTrackSegmentT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPXTrack.d.ts.map