import * as flatbuffers from 'flatbuffers';
import { appContentEncoding } from './appContentEncoding.js';
/**
 * One UI page of the app. Exactly one of the two delivery mechanisms must
 * be populated: inline CONTENT (with ENCODING describing its string form),
 * or MODULE_ID plus URL for a page served by a member module. Inline pages
 * must be fully self-contained — CSS and JS inlined, all assets embedded
 * as data URIs, zero external requests.
 */
export declare class APPUIPage implements flatbuffers.IUnpackableObject<APPUIPageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APPUIPage;
    static getRootAsAPPUIPage(bb: flatbuffers.ByteBuffer, obj?: APPUIPage): APPUIPage;
    static getSizePrefixedRootAsAPPUIPage(bb: flatbuffers.ByteBuffer, obj?: APPUIPage): APPUIPage;
    /**
     * App-local stable reference for this page. Required, unique within the
     * manifest.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display title. Falls back to the app NAME when empty.
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary. Falls back to the app DESCRIPTION when empty.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launcher icon identifier or inline data URI.
     */
    ICON(): string | null;
    ICON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launcher accent color, CSS color syntax.
     */
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launcher text color, CSS color syntax.
     */
    TEXT_COLOR(): string | null;
    TEXT_COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inlined, self-contained page in the string form declared by ENCODING.
     * Empty when the page is module-served via MODULE_ID and URL.
     */
    CONTENT(): string | null;
    CONTENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * String form of CONTENT.
     */
    ENCODING(): appContentEncoding;
    /**
     * IANA media type of the decoded page bytes, for example text/html.
     */
    MEDIA_TYPE(): string | null;
    MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 64 lowercase hexadecimal characters encoding SHA-256 of the decoded
     * page bytes, so a launcher can verify inline content after decoding.
     */
    CONTENT_SHA256(): string | null;
    CONTENT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True for the page the launcher opens first. Exactly one page in an
     * app must set this when UI is present.
     */
    ENTRY(): boolean;
    /**
     * When module-served, must equal an APPModuleRef.ID in the same
     * manifest — the member module that serves this page.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When module-served, the path or entrypoint the module serves the page
     * at.
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPPUIPage(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addIcon(builder: flatbuffers.Builder, ICONOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addTextColor(builder: flatbuffers.Builder, TEXT_COLOROffset: flatbuffers.Offset): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: appContentEncoding): void;
    static addMediaType(builder: flatbuffers.Builder, MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addContentSha256(builder: flatbuffers.Builder, CONTENT_SHA256Offset: flatbuffers.Offset): void;
    static addEntry(builder: flatbuffers.Builder, ENTRY: boolean): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static endAPPUIPage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPPUIPage(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, TITLEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ICONOffset: flatbuffers.Offset, COLOROffset: flatbuffers.Offset, TEXT_COLOROffset: flatbuffers.Offset, CONTENTOffset: flatbuffers.Offset, ENCODING: appContentEncoding, MEDIA_TYPEOffset: flatbuffers.Offset, CONTENT_SHA256Offset: flatbuffers.Offset, ENTRY: boolean, MODULE_IDOffset: flatbuffers.Offset, URLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APPUIPageT;
    unpackTo(_o: APPUIPageT): void;
}
export declare class APPUIPageT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    TITLE: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ICON: string | Uint8Array | null;
    COLOR: string | Uint8Array | null;
    TEXT_COLOR: string | Uint8Array | null;
    CONTENT: string | Uint8Array | null;
    ENCODING: appContentEncoding;
    MEDIA_TYPE: string | Uint8Array | null;
    CONTENT_SHA256: string | Uint8Array | null;
    ENTRY: boolean;
    MODULE_ID: string | Uint8Array | null;
    URL: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ICON?: string | Uint8Array | null, COLOR?: string | Uint8Array | null, TEXT_COLOR?: string | Uint8Array | null, CONTENT?: string | Uint8Array | null, ENCODING?: appContentEncoding, MEDIA_TYPE?: string | Uint8Array | null, CONTENT_SHA256?: string | Uint8Array | null, ENTRY?: boolean, MODULE_ID?: string | Uint8Array | null, URL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APPUIPage.d.ts.map