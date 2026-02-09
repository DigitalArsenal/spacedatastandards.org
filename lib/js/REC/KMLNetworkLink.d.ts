import * as flatbuffers from 'flatbuffers';
import { KMLLink, KMLLinkT } from './KMLLink.js';
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
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the link is visible
     */
    VISIBILITY(): boolean;
    /**
     * Whether open in tree view
     */
    OPEN(): boolean;
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
    /**
     * Whether to refresh on visibility change
     */
    REFRESH_VISIBILITY(): boolean;
    /**
     * Whether to fly to view on refresh
     */
    FLY_TO_VIEW(): boolean;
    /**
     * Full link element
     */
    LINK(obj?: KMLLink): KMLLink | null;
    static startKMLNetworkLink(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addOpen(builder: flatbuffers.Builder, OPEN: boolean): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static addRefreshMode(builder: flatbuffers.Builder, REFRESH_MODE: KMLRefreshMode): void;
    static addRefreshInterval(builder: flatbuffers.Builder, REFRESH_INTERVAL: number): void;
    static addViewRefreshMode(builder: flatbuffers.Builder, VIEW_REFRESH_MODE: KMLViewRefreshMode): void;
    static addViewRefreshTime(builder: flatbuffers.Builder, VIEW_REFRESH_TIME: number): void;
    static addRefreshVisibility(builder: flatbuffers.Builder, REFRESH_VISIBILITY: boolean): void;
    static addFlyToView(builder: flatbuffers.Builder, FLY_TO_VIEW: boolean): void;
    static addLink(builder: flatbuffers.Builder, LINKOffset: flatbuffers.Offset): void;
    static endKMLNetworkLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLNetworkLinkT;
    unpackTo(_o: KMLNetworkLinkT): void;
}
export declare class KMLNetworkLinkT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    OPEN: boolean;
    HREF: string | Uint8Array | null;
    REFRESH_MODE: KMLRefreshMode;
    REFRESH_INTERVAL: number;
    VIEW_REFRESH_MODE: KMLViewRefreshMode;
    VIEW_REFRESH_TIME: number;
    REFRESH_VISIBILITY: boolean;
    FLY_TO_VIEW: boolean;
    LINK: KMLLinkT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, OPEN?: boolean, HREF?: string | Uint8Array | null, REFRESH_MODE?: KMLRefreshMode, REFRESH_INTERVAL?: number, VIEW_REFRESH_MODE?: KMLViewRefreshMode, VIEW_REFRESH_TIME?: number, REFRESH_VISIBILITY?: boolean, FLY_TO_VIEW?: boolean, LINK?: KMLLinkT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLNetworkLink.d.ts.map