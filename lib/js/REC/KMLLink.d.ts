import * as flatbuffers from 'flatbuffers';
import { KMLRefreshMode } from './KMLRefreshMode.js';
import { KMLViewRefreshMode } from './KMLViewRefreshMode.js';
/**
 * Full Link element
 */
export declare class KMLLink implements flatbuffers.IUnpackableObject<KMLLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLink;
    static getRootAsKMLLink(bb: flatbuffers.ByteBuffer, obj?: KMLLink): KMLLink;
    static getSizePrefixedRootAsKMLLink(bb: flatbuffers.ByteBuffer, obj?: KMLLink): KMLLink;
    /**
     * URL
     */
    HREF(): string | null;
    HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Refresh mode
     */
    REFRESH_MODE(): KMLRefreshMode;
    /**
     * Refresh interval in seconds
     */
    REFRESH_INTERVAL(): number;
    /**
     * View refresh mode
     */
    VIEW_REFRESH_MODE(): KMLViewRefreshMode;
    /**
     * View refresh time in seconds
     */
    VIEW_REFRESH_TIME(): number;
    /**
     * View bound scale
     */
    VIEW_BOUND_SCALE(): number;
    /**
     * View format string
     */
    VIEW_FORMAT(): string | null;
    VIEW_FORMAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * HTTP query string
     */
    HTTP_QUERY(): string | null;
    HTTP_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLLink(builder: flatbuffers.Builder): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static addRefreshMode(builder: flatbuffers.Builder, REFRESH_MODE: KMLRefreshMode): void;
    static addRefreshInterval(builder: flatbuffers.Builder, REFRESH_INTERVAL: number): void;
    static addViewRefreshMode(builder: flatbuffers.Builder, VIEW_REFRESH_MODE: KMLViewRefreshMode): void;
    static addViewRefreshTime(builder: flatbuffers.Builder, VIEW_REFRESH_TIME: number): void;
    static addViewBoundScale(builder: flatbuffers.Builder, VIEW_BOUND_SCALE: number): void;
    static addViewFormat(builder: flatbuffers.Builder, VIEW_FORMATOffset: flatbuffers.Offset): void;
    static addHttpQuery(builder: flatbuffers.Builder, HTTP_QUERYOffset: flatbuffers.Offset): void;
    static endKMLLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLink(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset, REFRESH_MODE: KMLRefreshMode, REFRESH_INTERVAL: number, VIEW_REFRESH_MODE: KMLViewRefreshMode, VIEW_REFRESH_TIME: number, VIEW_BOUND_SCALE: number, VIEW_FORMATOffset: flatbuffers.Offset, HTTP_QUERYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLLinkT;
    unpackTo(_o: KMLLinkT): void;
}
export declare class KMLLinkT implements flatbuffers.IGeneratedObject {
    HREF: string | Uint8Array | null;
    REFRESH_MODE: KMLRefreshMode;
    REFRESH_INTERVAL: number;
    VIEW_REFRESH_MODE: KMLViewRefreshMode;
    VIEW_REFRESH_TIME: number;
    VIEW_BOUND_SCALE: number;
    VIEW_FORMAT: string | Uint8Array | null;
    HTTP_QUERY: string | Uint8Array | null;
    constructor(HREF?: string | Uint8Array | null, REFRESH_MODE?: KMLRefreshMode, REFRESH_INTERVAL?: number, VIEW_REFRESH_MODE?: KMLViewRefreshMode, VIEW_REFRESH_TIME?: number, VIEW_BOUND_SCALE?: number, VIEW_FORMAT?: string | Uint8Array | null, HTTP_QUERY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLink.d.ts.map