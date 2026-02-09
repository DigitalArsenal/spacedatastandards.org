import * as flatbuffers from 'flatbuffers';
/**
 * Simple data value for SchemaData
 */
export declare class KMLSimpleData implements flatbuffers.IUnpackableObject<KMLSimpleDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLSimpleData;
    static getRootAsKMLSimpleData(bb: flatbuffers.ByteBuffer, obj?: KMLSimpleData): KMLSimpleData;
    static getSizePrefixedRootAsKMLSimpleData(bb: flatbuffers.ByteBuffer, obj?: KMLSimpleData): KMLSimpleData;
    /**
     * Field name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Field value
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLSimpleData(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endKMLSimpleData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLSimpleData(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLSimpleDataT;
    unpackTo(_o: KMLSimpleDataT): void;
}
export declare class KMLSimpleDataT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLSimpleData.d.ts.map