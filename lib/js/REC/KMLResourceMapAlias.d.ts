import * as flatbuffers from 'flatbuffers';
/**
 * Resource map alias for Model
 */
export declare class KMLResourceMapAlias implements flatbuffers.IUnpackableObject<KMLResourceMapAliasT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLResourceMapAlias;
    static getRootAsKMLResourceMapAlias(bb: flatbuffers.ByteBuffer, obj?: KMLResourceMapAlias): KMLResourceMapAlias;
    static getSizePrefixedRootAsKMLResourceMapAlias(bb: flatbuffers.ByteBuffer, obj?: KMLResourceMapAlias): KMLResourceMapAlias;
    /**
     * Target href
     */
    TARGET_HREF(): string | null;
    TARGET_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source href
     */
    SOURCE_HREF(): string | null;
    SOURCE_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLResourceMapAlias(builder: flatbuffers.Builder): void;
    static addTargetHref(builder: flatbuffers.Builder, TARGET_HREFOffset: flatbuffers.Offset): void;
    static addSourceHref(builder: flatbuffers.Builder, SOURCE_HREFOffset: flatbuffers.Offset): void;
    static endKMLResourceMapAlias(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLResourceMapAlias(builder: flatbuffers.Builder, TARGET_HREFOffset: flatbuffers.Offset, SOURCE_HREFOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLResourceMapAliasT;
    unpackTo(_o: KMLResourceMapAliasT): void;
}
export declare class KMLResourceMapAliasT implements flatbuffers.IGeneratedObject {
    TARGET_HREF: string | Uint8Array | null;
    SOURCE_HREF: string | Uint8Array | null;
    constructor(TARGET_HREF?: string | Uint8Array | null, SOURCE_HREF?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLResourceMapAlias.d.ts.map