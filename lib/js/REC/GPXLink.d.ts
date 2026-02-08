import * as flatbuffers from 'flatbuffers';
/**
 * GPX link to an external resource
 */
export declare class GPXLink implements flatbuffers.IUnpackableObject<GPXLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GPXLink;
    static getRootAsGPXLink(bb: flatbuffers.ByteBuffer, obj?: GPXLink): GPXLink;
    static getSizePrefixedRootAsGPXLink(bb: flatbuffers.ByteBuffer, obj?: GPXLink): GPXLink;
    /**
     * URL
     */
    HREF(): string | null;
    HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link text
     */
    TEXT(): string | null;
    TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MIME type
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGPXLink(builder: flatbuffers.Builder): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static addText(builder: flatbuffers.Builder, TEXTOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static endGPXLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGPXLink(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset, TEXTOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GPXLinkT;
    unpackTo(_o: GPXLinkT): void;
}
export declare class GPXLinkT implements flatbuffers.IGeneratedObject {
    HREF: string | Uint8Array | null;
    TEXT: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    constructor(HREF?: string | Uint8Array | null, TEXT?: string | Uint8Array | null, TYPE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GPXLink.d.ts.map