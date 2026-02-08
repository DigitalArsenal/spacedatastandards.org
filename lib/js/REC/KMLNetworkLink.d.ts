import * as flatbuffers from 'flatbuffers';
import { KMLRefreshMode } from './KMLRefreshMode.js';
import { KMLViewRefreshMode } from './KMLViewRefreshMode.js';
/**
 * Network link
 */
export declare class KMLNetworkLink implements flatbuffers.IUnpackableObject<KMLNetworkLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLNetworkLink;
    static getRootAsKMLNetworkLink(bb: flatbuffers.ByteBuffer, obj?: KMLNetworkLink): KMLNetworkLink;
    static getSizePrefixedRootAsKMLNetworkLink(bb: flatbuffers.ByteBuffer, obj?: KMLNetworkLink): KMLNetworkLink;
    /**
     * Name of the network link
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the link is visible
     */
    VISIBILITY(): boolean;
    /**
     * Link URL
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
    static startKMLNetworkLink(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static addRefreshMode(builder: flatbuffers.Builder, REFRESH_MODE: KMLRefreshMode): void;
    static addRefreshInterval(builder: flatbuffers.Builder, REFRESH_INTERVAL: number): void;
    static addViewRefreshMode(builder: flatbuffers.Builder, VIEW_REFRESH_MODE: KMLViewRefreshMode): void;
    static addViewRefreshTime(builder: flatbuffers.Builder, VIEW_REFRESH_TIME: number): void;
    static endKMLNetworkLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLNetworkLink(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VISIBILITY: boolean, HREFOffset: flatbuffers.Offset, REFRESH_MODE: KMLRefreshMode, REFRESH_INTERVAL: number, VIEW_REFRESH_MODE: KMLViewRefreshMode, VIEW_REFRESH_TIME: number): flatbuffers.Offset;
    unpack(): KMLNetworkLinkT;
    unpackTo(_o: KMLNetworkLinkT): void;
}
export declare class KMLNetworkLinkT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VISIBILITY: boolean;
    HREF: string | Uint8Array | null;
    REFRESH_MODE: KMLRefreshMode;
    REFRESH_INTERVAL: number;
    VIEW_REFRESH_MODE: KMLViewRefreshMode;
    VIEW_REFRESH_TIME: number;
    constructor(NAME?: string | Uint8Array | null, VISIBILITY?: boolean, HREF?: string | Uint8Array | null, REFRESH_MODE?: KMLRefreshMode, REFRESH_INTERVAL?: number, VIEW_REFRESH_MODE?: KMLViewRefreshMode, VIEW_REFRESH_TIME?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLNetworkLink.d.ts.map