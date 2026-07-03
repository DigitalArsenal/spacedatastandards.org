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
    /**
     * True if this property value is a boolean
     */
    IS_BOOL(): boolean;
    /**
     * Boolean value (use when IS_BOOL is true)
     */
    BOOL_VALUE(): boolean;
    /**
     * True if this property value is JSON null
     */
    IS_NULL(): boolean;
    /**
     * Raw JSON string for complex values (objects, arrays)
     */
    JSON_VALUE(): string | null;
    JSON_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGJNProperty(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addNumValue(builder: flatbuffers.Builder, NUM_VALUE: number): void;
    static addIsNumeric(builder: flatbuffers.Builder, IS_NUMERIC: boolean): void;
    static addIsBool(builder: flatbuffers.Builder, IS_BOOL: boolean): void;
    static addBoolValue(builder: flatbuffers.Builder, BOOL_VALUE: boolean): void;
    static addIsNull(builder: flatbuffers.Builder, IS_NULL: boolean): void;
    static addJsonValue(builder: flatbuffers.Builder, JSON_VALUEOffset: flatbuffers.Offset): void;
    static endGJNProperty(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNProperty(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset, NUM_VALUE: number, IS_NUMERIC: boolean, IS_BOOL: boolean, BOOL_VALUE: boolean, IS_NULL: boolean, JSON_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GJNPropertyT;
    unpackTo(_o: GJNPropertyT): void;
}
export declare class GJNPropertyT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    NUM_VALUE: number;
    IS_NUMERIC: boolean;
    IS_BOOL: boolean;
    BOOL_VALUE: boolean;
    IS_NULL: boolean;
    JSON_VALUE: string | Uint8Array | null;
    constructor(KEY?: string | Uint8Array | null, VALUE?: string | Uint8Array | null, NUM_VALUE?: number, IS_NUMERIC?: boolean, IS_BOOL?: boolean, BOOL_VALUE?: boolean, IS_NULL?: boolean, JSON_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNProperty.d.ts.map