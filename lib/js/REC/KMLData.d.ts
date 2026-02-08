import * as flatbuffers from 'flatbuffers';
/**
 * Extended data key-value pair
 */
export declare class KMLData implements flatbuffers.IUnpackableObject<KMLDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLData;
    static getRootAsKMLData(bb: flatbuffers.ByteBuffer, obj?: KMLData): KMLData;
    static getSizePrefixedRootAsKMLData(bb: flatbuffers.ByteBuffer, obj?: KMLData): KMLData;
    /**
     * Data name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name
     */
    DISPLAY_NAME(): string | null;
    DISPLAY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data value
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLData(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDisplayName(builder: flatbuffers.Builder, DISPLAY_NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endKMLData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLData(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DISPLAY_NAMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLDataT;
    unpackTo(_o: KMLDataT): void;
}
export declare class KMLDataT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DISPLAY_NAME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, DISPLAY_NAME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLData.d.ts.map