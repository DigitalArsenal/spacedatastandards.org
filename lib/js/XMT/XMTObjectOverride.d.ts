import * as flatbuffers from 'flatbuffers';
/**
 * A per-object override of a composition.
 */
export declare class XMTObjectOverride implements flatbuffers.IUnpackableObject<XMTObjectOverrideT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTObjectOverride;
    static getRootAsXMTObjectOverride(bb: flatbuffers.ByteBuffer, obj?: XMTObjectOverride): XMTObjectOverride;
    static getSizePrefixedRootAsXMTObjectOverride(bb: flatbuffers.ByteBuffer, obj?: XMTObjectOverride): XMTObjectOverride;
    /**
     * Object key the override applies to ("norad:<n>", "cospar:<designator>",
     * or a source key).
     */
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Layer whose record to publish (resolves an identity conflict); empty =
     * priority order.
     */
    CATALOG_LAYER(): string | null;
    CATALOG_LAYER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State sources for this object in preference order; empty = the
     * recipe's.
     */
    STATE_SOURCES(index: number): string;
    STATE_SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    stateSourcesLength(): number;
    /**
     * Maximum state age for this object, s; NaN = the recipe's.
     */
    MAX_AGE_S(): number;
    static startXMTObjectOverride(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addCatalogLayer(builder: flatbuffers.Builder, CATALOG_LAYEROffset: flatbuffers.Offset): void;
    static addStateSources(builder: flatbuffers.Builder, STATE_SOURCESOffset: flatbuffers.Offset): void;
    static createStateSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxAgeS(builder: flatbuffers.Builder, MAX_AGE_S: number): void;
    static endXMTObjectOverride(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTObjectOverride(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, CATALOG_LAYEROffset: flatbuffers.Offset, STATE_SOURCESOffset: flatbuffers.Offset, MAX_AGE_S: number): flatbuffers.Offset;
    unpack(): XMTObjectOverrideT;
    unpackTo(_o: XMTObjectOverrideT): void;
}
export declare class XMTObjectOverrideT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    CATALOG_LAYER: string | Uint8Array | null;
    STATE_SOURCES: (string)[];
    MAX_AGE_S: number;
    constructor(OBJECT_KEY?: string | Uint8Array | null, CATALOG_LAYER?: string | Uint8Array | null, STATE_SOURCES?: (string)[], MAX_AGE_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTObjectOverride.d.ts.map