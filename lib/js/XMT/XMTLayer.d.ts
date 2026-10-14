import * as flatbuffers from 'flatbuffers';
/**
 * One catalog layer of a composition, in priority order.
 */
export declare class XMTLayer implements flatbuffers.IUnpackableObject<XMTLayerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTLayer;
    static getRootAsXMTLayer(bb: flatbuffers.ByteBuffer, obj?: XMTLayer): XMTLayer;
    static getSizePrefixedRootAsXMTLayer(bb: flatbuffers.ByteBuffer, obj?: XMTLayer): XMTLayer;
    /**
     * Layer identifier, unique in the recipe.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Node that published the snapshot.
     */
    NODE(): string | null;
    NODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider namespace.
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source within the provider.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable publication head (CID) of the snapshot.
     */
    HEAD(): string | null;
    HEAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source-native key of each record in input order; empty when the
     * records carry their own identifiers.
     */
    NATIVE_KEYS(index: number): string;
    NATIVE_KEYS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    nativeKeysLength(): number;
    static startXMTLayer(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addNode(builder: flatbuffers.Builder, NODEOffset: flatbuffers.Offset): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addHead(builder: flatbuffers.Builder, HEADOffset: flatbuffers.Offset): void;
    static addNativeKeys(builder: flatbuffers.Builder, NATIVE_KEYSOffset: flatbuffers.Offset): void;
    static createNativeKeysVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNativeKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTLayer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTLayer(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NODEOffset: flatbuffers.Offset, PROVIDEROffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, HEADOffset: flatbuffers.Offset, NATIVE_KEYSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTLayerT;
    unpackTo(_o: XMTLayerT): void;
}
export declare class XMTLayerT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NODE: string | Uint8Array | null;
    PROVIDER: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    HEAD: string | Uint8Array | null;
    NATIVE_KEYS: (string)[];
    constructor(ID?: string | Uint8Array | null, NODE?: string | Uint8Array | null, PROVIDER?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, HEAD?: string | Uint8Array | null, NATIVE_KEYS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTLayer.d.ts.map