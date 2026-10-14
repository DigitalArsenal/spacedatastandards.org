import * as flatbuffers from 'flatbuffers';
/**
 * Identity of a predicted object.
 */
export declare class ASGObjectRef implements flatbuffers.IUnpackableObject<ASGObjectRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGObjectRef;
    static getRootAsASGObjectRef(bb: flatbuffers.ByteBuffer, obj?: ASGObjectRef): ASGObjectRef;
    static getSizePrefixedRootAsASGObjectRef(bb: flatbuffers.ByteBuffer, obj?: ASGObjectRef): ASGObjectRef;
    /**
     * The key the solver used for the object: its OBJECT_ID, else
     * "NORAD:<n>", else its name.
     */
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog number; 0 = none.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator or provider object identifier; empty = none.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object name; empty = none.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startASGObjectRef(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static endASGObjectRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGObjectRef(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGObjectRefT;
    unpackTo(_o: ASGObjectRefT): void;
}
export declare class ASGObjectRefT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    constructor(KEY?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGObjectRef.d.ts.map