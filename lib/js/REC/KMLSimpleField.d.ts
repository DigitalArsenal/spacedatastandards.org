import * as flatbuffers from 'flatbuffers';
/**
 * Schema simple field definition
 */
export declare class KMLSimpleField implements flatbuffers.IUnpackableObject<KMLSimpleFieldT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLSimpleField;
    static getRootAsKMLSimpleField(bb: flatbuffers.ByteBuffer, obj?: KMLSimpleField): KMLSimpleField;
    static getSizePrefixedRootAsKMLSimpleField(bb: flatbuffers.ByteBuffer, obj?: KMLSimpleField): KMLSimpleField;
    /**
     * Field name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Field type (xsd:string, xsd:int, xsd:float, etc.)
     */
    FIELD_TYPE(): string | null;
    FIELD_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name
     */
    DISPLAY_NAME(): string | null;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLSimpleField(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFieldType(builder: flatbuffers.Builder, FIELD_TYPEOffset: flatbuffers.Offset): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static endKMLSimpleField(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLSimpleField(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, FIELD_TYPEOffset: flatbuffers.Offset, DISPLAY_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLSimpleFieldT;
    unpackTo(_o: KMLSimpleFieldT): void;
}
export declare class KMLSimpleFieldT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    FIELD_TYPE: string | Uint8Array | null;
    DISPLAY_NAME: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, FIELD_TYPE?: string | Uint8Array | null, DISPLAY_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLSimpleField.d.ts.map