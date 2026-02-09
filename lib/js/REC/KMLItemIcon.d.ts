import * as flatbuffers from 'flatbuffers';
/**
 * Item icon for ListStyle
 */
export declare class KMLItemIcon implements flatbuffers.IUnpackableObject<KMLItemIconT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLItemIcon;
    static getRootAsKMLItemIcon(bb: flatbuffers.ByteBuffer, obj?: KMLItemIcon): KMLItemIcon;
    static getSizePrefixedRootAsKMLItemIcon(bb: flatbuffers.ByteBuffer, obj?: KMLItemIcon): KMLItemIcon;
    /**
     * State (open, closed, error, fetching0-2)
     */
    STATE(): string | null;
    STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Icon URL
     */
    HREF(): string | null;
    HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLItemIcon(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addHref(builder: flatbuffers.Builder, HREFOffset: flatbuffers.Offset): void;
    static endKMLItemIcon(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLItemIcon(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset, HREFOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLItemIconT;
    unpackTo(_o: KMLItemIconT): void;
}
export declare class KMLItemIconT implements flatbuffers.IGeneratedObject {
    STATE: string | Uint8Array | null;
    HREF: string | Uint8Array | null;
    constructor(STATE?: string | Uint8Array | null, HREF?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLItemIcon.d.ts.map