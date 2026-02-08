import * as flatbuffers from 'flatbuffers';
/**
 * A key-value property entry for Feature properties
 */
export declare class GJNProperty implements flatbuffers.IUnpackableObject<GJNPropertyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNProperty;
    static getRootAsGJNProperty(bb: flatbuffers.ByteBuffer, obj?: GJNProperty): GJNProperty;
    static getSizePrefixedRootAsGJNProperty(bb: flatbuffers.ByteBuffer, obj?: GJNProperty): GJNProperty;
    /**
     * Property key
     */
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Property value as string
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Property value as number (use if numeric)
     */
    NUM_VALUE(): number;
    /**
     * True if NUM_VALUE should be used instead of VALUE
     */
    IS_NUMERIC(): boolean;
    static startGJNProperty(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addNumValue(builder: flatbuffers.Builder, NUM_VALUE: number): void;
    static addIsNumeric(builder: flatbuffers.Builder, IS_NUMERIC: boolean): void;
    static endGJNProperty(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNProperty(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset, NUM_VALUE: number, IS_NUMERIC: boolean): flatbuffers.Offset;
    unpack(): GJNPropertyT;
    unpackTo(_o: GJNPropertyT): void;
}
export declare class GJNPropertyT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    NUM_VALUE: number;
    IS_NUMERIC: boolean;
    constructor(KEY?: string | Uint8Array | null, VALUE?: string | Uint8Array | null, NUM_VALUE?: number, IS_NUMERIC?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNProperty.d.ts.map