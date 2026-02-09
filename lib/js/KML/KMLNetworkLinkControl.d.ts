import * as flatbuffers from 'flatbuffers';
import { KMLCamera, KMLCameraT } from './KMLCamera.js';
import { KMLLookAt, KMLLookAtT } from './KMLLookAt.js';
import { KMLUpdate, KMLUpdateT } from './KMLUpdate.js';
/**
 * NetworkLinkControl
 */
export declare class KMLNetworkLinkControl implements flatbuffers.IUnpackableObject<KMLNetworkLinkControlT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLNetworkLinkControl;
    static getRootAsKMLNetworkLinkControl(bb: flatbuffers.ByteBuffer, obj?: KMLNetworkLinkControl): KMLNetworkLinkControl;
    static getSizePrefixedRootAsKMLNetworkLinkControl(bb: flatbuffers.ByteBuffer, obj?: KMLNetworkLinkControl): KMLNetworkLinkControl;
    /**
     * Minimum refresh period in seconds
     */
    MIN_REFRESH_PERIOD(): number;
    /**
     * Maximum session length in seconds
     */
    MAX_SESSION_LENGTH(): number;
    /**
     * Cookie
     */
    COOKIE(): string | null;
    COOKIE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message to display
     */
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link name override
     */
    LINK_NAME(): string | null;
    LINK_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link description override
     */
    LINK_DESCRIPTION(): string | null;
    LINK_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link snippet override
     */
    LINK_SNIPPET(): string | null;
    LINK_SNIPPET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Expiration time (ISO 8601)
     */
    EXPIRES(): string | null;
    EXPIRES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Update
     */
    UPDATE(obj?: KMLUpdate): KMLUpdate | null;
    /**
     * LookAt
     */
    LOOK_AT(obj?: KMLLookAt): KMLLookAt | null;
    /**
     * Camera
     */
    CAMERA(obj?: KMLCamera): KMLCamera | null;
    static startKMLNetworkLinkControl(builder: flatbuffers.Builder): void;
    static addMinRefreshPeriod(builder: flatbuffers.Builder, MIN_REFRESH_PERIOD: number): void;
    static addMaxSessionLength(builder: flatbuffers.Builder, MAX_SESSION_LENGTH: number): void;
    static addCookie(builder: flatbuffers.Builder, COOKIEOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addLinkName(builder: flatbuffers.Builder, LINK_NAMEOffset: flatbuffers.Offset): void;
    static addLinkDescription(builder: flatbuffers.Builder, LINK_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLinkSnippet(builder: flatbuffers.Builder, LINK_SNIPPETOffset: flatbuffers.Offset): void;
    static addExpires(builder: flatbuffers.Builder, EXPIRESOffset: flatbuffers.Offset): void;
    static addUpdate(builder: flatbuffers.Builder, UPDATEOffset: flatbuffers.Offset): void;
    static addLookAt(builder: flatbuffers.Builder, LOOK_ATOffset: flatbuffers.Offset): void;
    static addCamera(builder: flatbuffers.Builder, CAMERAOffset: flatbuffers.Offset): void;
    static endKMLNetworkLinkControl(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLNetworkLinkControlT;
    unpackTo(_o: KMLNetworkLinkControlT): void;
}
export declare class KMLNetworkLinkControlT implements flatbuffers.IGeneratedObject {
    MIN_REFRESH_PERIOD: number;
    MAX_SESSION_LENGTH: number;
    COOKIE: string | Uint8Array | null;
    MESSAGE: string | Uint8Array | null;
    LINK_NAME: string | Uint8Array | null;
    LINK_DESCRIPTION: string | Uint8Array | null;
    LINK_SNIPPET: string | Uint8Array | null;
    EXPIRES: string | Uint8Array | null;
    UPDATE: KMLUpdateT | null;
    LOOK_AT: KMLLookAtT | null;
    CAMERA: KMLCameraT | null;
    constructor(MIN_REFRESH_PERIOD?: number, MAX_SESSION_LENGTH?: number, COOKIE?: string | Uint8Array | null, MESSAGE?: string | Uint8Array | null, LINK_NAME?: string | Uint8Array | null, LINK_DESCRIPTION?: string | Uint8Array | null, LINK_SNIPPET?: string | Uint8Array | null, EXPIRES?: string | Uint8Array | null, UPDATE?: KMLUpdateT | null, LOOK_AT?: KMLLookAtT | null, CAMERA?: KMLCameraT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLNetworkLinkControl.d.ts.map